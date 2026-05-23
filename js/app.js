// ── STATE ─────────────────────────────────────────────────────────────────────
let currentScreen = 'home';
let fcIndex = 0, fcFilter = 'Всі', fcKnown = 0, fcRepeat = 0, fcFlipped = false;
let fcFiltered = [...VOCAB];
let sentIndex = 0, sentFilter = 'Всі', sentDone = 0;
let sentFiltered = [...SENTENCES];
let qIndex = 0, qRight = 0, qWrong = 0, qAnswered = false;
let qTopicFilter = 'Всі';
let qFiltered = [];
let qShuffled = [];
let sessionCards = 0;

// ── UTILS ─────────────────────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── STORAGE ───────────────────────────────────────────────────────────────────
function loadStorage() {
  try {
    const saved = JSON.parse(localStorage.getItem('eng_session') || '{}');
    const today = new Date().toDateString();
    if (saved.date === today) {
      sessionCards = saved.cards || 0;
    }
  } catch(e) {}
}

function saveSession() {
  try {
    localStorage.setItem('eng_session', JSON.stringify({
      date: new Date().toDateString(),
      cards: sessionCards
    }));
  } catch(e) {}
}

// ── NAV ───────────────────────────────────────────────────────────────────────
function goTo(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
  const navBtn = document.getElementById('nav-' + screen);
  if (navBtn) navBtn.classList.add('active');
  currentScreen = screen;
  if (screen === 'flashcards') initFlashcards();
  if (screen === 'sentences') initSentences();
  if (screen === 'grammar') initGrammar();
  if (screen === 'quiz') initQuiz();
  if (screen === 'speaking') initSpeaking();
  if (screen === 'home') renderHome();
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function renderHome() {
  const days = ['неділя','понеділок','вівторок','середа','четвер','п\'ятниця','субота'];
  const months = ['січня','лютого','березня','квітня','травня','червня','липня','серпня','вересня','жовтня','листопада','грудня'];
  const d = new Date();
  document.getElementById('home-date').textContent = `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
  document.getElementById('stat-session').textContent = sessionCards;
  document.getElementById('stat-words').textContent = VOCAB.length + '+';
  document.getElementById('stat-rules').textContent = GRAMMAR.length;
  document.getElementById('stat-sents').textContent = SENTENCES.length + '+';
  document.getElementById('home-sents-sub').textContent = `${SENTENCES.length}+ речень з уроків`;
  document.getElementById('home-rules-sub').textContent = `${GRAMMAR.length} тем з прикладами`;
}

// ── FLASHCARDS ────────────────────────────────────────────────────────────────
function initFlashcards() {
  const topics = ['Всі', ...new Set(VOCAB.map(v => v.topic))];
  const fc = document.getElementById('fc-filters');
  fc.innerHTML = topics.map(t =>
    `<div class="chip ${t === fcFilter ? 'active' : ''}" onclick="setFcFilter('${t}')">${t}</div>`
  ).join('');
  renderFlashcard();
}

function setFcFilter(f) {
  fcFilter = f;
  fcFiltered = f === 'Всі' ? [...VOCAB] : VOCAB.filter(v => v.topic === f);
  fcIndex = 0; fcKnown = 0; fcRepeat = 0;
  document.querySelectorAll('#fc-filters .chip').forEach(c => c.classList.toggle('active', c.textContent === f));
  renderFlashcard();
}

function renderFlashcard() {
  if (!fcFiltered.length) return;
  const v = fcFiltered[fcIndex];
  document.getElementById('fc-word').textContent = v.w;
  document.getElementById('fc-hint').textContent = v.topic;
  document.getElementById('fc-trans').textContent = v.t;
  document.getElementById('fc-example').textContent = v.e || '';
  document.getElementById('fc-card').classList.remove('flipped');
  fcFlipped = false;
  document.getElementById('fc-count').textContent = `${fcIndex + 1} / ${fcFiltered.length}`;
  document.getElementById('fc-topic-badge').textContent = v.topic;
  document.getElementById('fc-known').textContent = fcKnown;
  document.getElementById('fc-repeat').textContent = fcRepeat;
  document.getElementById('fc-bar').style.width = ((fcIndex / fcFiltered.length) * 100) + '%';
  updateProgress((fcIndex / fcFiltered.length) * 100);
}

function flipCard() {
  document.getElementById('fc-card').classList.toggle('flipped');
  fcFlipped = !fcFlipped;
}

function markCard(known) {
  sessionCards++;
  saveSession();
  document.getElementById('stat-session').textContent = sessionCards;
  if (known) fcKnown++; else fcRepeat++;
  fcIndex = (fcIndex + 1) % fcFiltered.length;
  renderFlashcard();
}

function shuffleCards() {
  fcFiltered = shuffle([...fcFiltered]);
  fcIndex = 0; fcKnown = 0; fcRepeat = 0;
  renderFlashcard();
}

// ── SENTENCES ─────────────────────────────────────────────────────────────────
function initSentences() {
  const sets = ['Всі', ...new Set(SENTENCES.map(s => s.set))];
  const sf = document.getElementById('sent-filters');
  sf.innerHTML = sets.map(s =>
    `<div class="chip ${s === sentFilter ? 'active' : ''}" onclick="setSentFilter('${s}')">${s}</div>`
  ).join('');
  renderSentence();
}

function setSentFilter(f) {
  sentFilter = f;
  sentFiltered = f === 'Всі' ? [...SENTENCES] : SENTENCES.filter(s => s.set === f);
  sentIndex = 0; sentDone = 0;
  document.querySelectorAll('#sent-filters .chip').forEach(c => c.classList.toggle('active', c.textContent === f));
  renderSentence();
}

function renderSentence() {
  if (!sentFiltered.length) return;
  const s = sentFiltered[sentIndex];
  document.getElementById('sent-ua').textContent = s.ua;
  document.getElementById('sent-en').textContent = s.en;
  document.getElementById('sent-en').classList.remove('show');
  document.getElementById('sent-badge').textContent = s.set;
  document.getElementById('sent-count').textContent = `${sentIndex + 1} / ${sentFiltered.length}`;
  document.getElementById('sent-done-count').textContent = `виконано: ${sentDone}`;
  updateProgress((sentIndex / sentFiltered.length) * 100);
}

function showSentAnswer() {
  document.getElementById('sent-en').classList.add('show');
}

function nextSent() {
  sentDone++;
  sentIndex = (sentIndex + 1) % sentFiltered.length;
  renderSentence();
}

// ── GRAMMAR ───────────────────────────────────────────────────────────────────
function initGrammar() {
  const list = document.getElementById('grammar-list');
  if (list.children.length > 0) return;

  let globalIdx = 0;
  list.innerHTML = GRAMMAR_GROUPS.map(group => {
    const rulesHTML = group.rules.map(r => {
      const i = globalIdx++;
      return `
        <div class="rule-card" id="rule-card-${i}">
          <div class="rule-header" onclick="toggleRule(${i})">
            <div class="rule-header-left">
              <span class="rule-chevron">›</span>
              <div class="rule-title">${r.title}</div>
            </div>
            <span class="rule-tag">${r.tag}</span>
          </div>
          <div class="rule-body" id="rule-${i}">
            <div class="rule-explanation">${r.explanation.replace(/\n/g, '<br>')}</div>
            ${r.table ? buildTable(r.table) : ''}
            <div class="rule-examples">
              ${r.examples.map(e => `<div class="rule-ex">${highlightEN(e)}</div>`).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="grammar-group">
        <div class="grammar-group-title">${group.group}</div>
        <div class="grammar-list">${rulesHTML}</div>
      </div>
    `;
  }).join('');
}

function highlightEN(text) {
  return text.replace(/([A-Z][A-Z]+)/g, '<em>$1</em>');
}

function buildTable(rows) {
  const [head, ...body] = rows;
  return `<table class="rule-table">
    <tr>${head.map(h => `<th>${h}</th>`).join('')}</tr>
    ${body.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
  </table>`;
}

function toggleRule(i) {
  const body = document.getElementById('rule-' + i);
  const card = document.getElementById('rule-card-' + i);
  body.classList.toggle('open');
  card.classList.toggle('open');
}

// ── QUIZ ──────────────────────────────────────────────────────────────────────
function initQuiz() {
  const topics = ['Всі', ...new Set(QUIZ_DATA.map(q => q.topic))];
  const qf = document.getElementById('quiz-filters');
  if (qf) {
    qf.innerHTML = topics.map(t =>
      `<div class="chip ${t === qTopicFilter ? 'active' : ''}" onclick="setQuizFilter('${t}')">${t}</div>`
    ).join('');
  }
  applyQuizFilter();
}

function setQuizFilter(f) {
  qTopicFilter = f;
  document.querySelectorAll('#quiz-filters .chip').forEach(c => c.classList.toggle('active', c.textContent === f));
  qIndex = 0; qRight = 0; qWrong = 0; qAnswered = false;
  applyQuizFilter();
}

function applyQuizFilter() {
  qFiltered = qTopicFilter === 'Всі' ? [...QUIZ_DATA] : QUIZ_DATA.filter(q => q.topic === qTopicFilter);
  qShuffled = shuffle([...qFiltered]);
  qIndex = 0; qRight = 0; qWrong = 0; qAnswered = false;
  document.getElementById('quiz-done').style.display = 'none';
  document.getElementById('quiz-body').style.display = 'block';
  renderQuiz();
}

function renderQuiz() {
  document.getElementById('quiz-done').style.display = 'none';
  document.getElementById('quiz-body').style.display = 'block';
  if (qIndex >= qShuffled.length) { showQuizDone(); return; }
  const q = qShuffled[qIndex];
  qAnswered = false;
  document.getElementById('q-topic').textContent = q.topic;
  document.getElementById('q-question').textContent = q.q;
  document.getElementById('q-note').textContent = q.note;
  document.getElementById('q-note').classList.remove('show');
  document.getElementById('q-next-btn').style.display = 'none';
  document.getElementById('q-right').textContent = qRight;
  document.getElementById('q-wrong').textContent = qWrong;
  document.getElementById('q-left').textContent = qShuffled.length - qIndex;
  updateProgress((qIndex / qShuffled.length) * 100);
  const opts = document.getElementById('q-opts');
  opts.innerHTML = q.opts.map((o, i) =>
    `<button class="quiz-opt" onclick="selectQuizOpt(${i})">${o}</button>`
  ).join('');
}

function selectQuizOpt(i) {
  if (qAnswered) return;
  qAnswered = true;
  const q = qShuffled[qIndex];
  document.querySelectorAll('.quiz-opt').forEach((el, idx) => {
    el.classList.add('locked');
    if (idx === q.correct) el.classList.add('correct');
    else if (idx === i) el.classList.add('wrong');
  });
  if (i === q.correct) qRight++; else qWrong++;
  document.getElementById('q-right').textContent = qRight;
  document.getElementById('q-wrong').textContent = qWrong;
  document.getElementById('q-note').classList.add('show');
  document.getElementById('q-next-btn').style.display = 'block';
}

function nextQuiz() {
  qIndex++;
  renderQuiz();
}

function resetQuiz() {
  qShuffled = shuffle([...qFiltered]);
  qIndex = 0; qRight = 0; qWrong = 0; qAnswered = false;
  document.getElementById('quiz-done').style.display = 'none';
  document.getElementById('quiz-body').style.display = 'block';
  renderQuiz();
}

function showQuizDone() {
  document.getElementById('quiz-body').style.display = 'none';
  document.getElementById('quiz-done').style.display = 'block';
  const pct = Math.round((qRight / qShuffled.length) * 100);
  document.getElementById('done-title').textContent = pct >= 80 ? 'Чудово!' : pct >= 60 ? 'Добре!' : 'Продовжуй!';
  document.getElementById('done-sub').textContent = `${qRight} з ${qShuffled.length} правильно (${pct}%)`;
}

// ── SPEAKING ──────────────────────────────────────────────────────────────────
let spIndex = 0, spFilter = 'Всі', spFiltered = [];

function initSpeaking() {
  const cats = ['Всі', ...new Set(SPEAKING.map(s => s.category))];
  const sf = document.getElementById('sp-filters');
  sf.innerHTML = cats.map(c =>
    `<div class="chip ${c === spFilter ? 'active' : ''}" onclick="setSpFilter('${c}')">${c}</div>`
  ).join('');
  spFiltered = spFilter === 'Всі' ? [...SPEAKING] : SPEAKING.filter(s => s.category === spFilter);
  spIndex = 0;
  renderSpeaking();
}

function setSpFilter(f) {
  spFilter = f;
  spFiltered = f === 'Всі' ? [...SPEAKING] : SPEAKING.filter(s => s.category === f);
  spIndex = 0;
  document.querySelectorAll('#sp-filters .chip').forEach(c => c.classList.toggle('active', c.textContent === f));
  renderSpeaking();
}

function renderSpeaking() {
  if (!spFiltered.length) return;
  const item = spFiltered[spIndex];
  document.getElementById('sp-count').textContent = `${spIndex + 1} / ${spFiltered.length}`;
  document.getElementById('sp-category').textContent = item.category;
  document.getElementById('sp-question').textContent = item.question;

  const tipsEl = document.getElementById('sp-tips');
  tipsEl.innerHTML = item.tips.map(t => `<div class="sp-tip">${t}</div>`).join('');
  tipsEl.style.display = 'none';
  document.getElementById('sp-show-tips').style.display = 'block';

  const exEl = document.getElementById('sp-example');
  exEl.textContent = item.example || '';
  document.getElementById('sp-example-wrap').style.display = 'none';

  updateProgress((spIndex / spFiltered.length) * 100);
}

function showSpTips() {
  document.getElementById('sp-tips').style.display = 'flex';
  document.getElementById('sp-show-tips').style.display = 'none';
  document.getElementById('sp-example-wrap').style.display = 'block';
}

function nextSp() {
  spIndex = (spIndex + 1) % spFiltered.length;
  renderSpeaking();
}

function shuffleSp() {
  spFiltered = shuffle([...spFiltered]);
  spIndex = 0;
  renderSpeaking();
}

// ── PROGRESS ──────────────────────────────────────────────────────────────────
function updateProgress(pct) {
  document.getElementById('main-progress').style.width = pct + '%';
}

// ── INIT ──────────────────────────────────────────────────────────────────────
function init() {
  loadStorage();
  document.getElementById('header-sub').textContent = `${VOCAB.length} слів · ${GRAMMAR.length} правил · ${SENTENCES.length} речень`;
  renderHome();
}
init();
