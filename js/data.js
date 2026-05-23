const VOCAB = [
  // Прикметники — емоційні стани
  {w:"scared",t:"наляканий (зараз)",e:"I'm scared — when something frightens you right now.",topic:"Прикметники"},
  {w:"afraid",t:"боюся / наляканий",e:"I'm afraid he can be late tomorrow.",topic:"Прикметники"},
  {w:"arrogant",t:"зарозумілий",e:"She was too arrogant and never smiled at anyone.",topic:"Прикметники"},
  {w:"disappointed",t:"розчарований",e:"We are disappointed in you.",topic:"Прикметники"},
  {w:"frustrated",t:"засмучений / роздратований",e:"He was too frustrated to continue.",topic:"Прикметники"},
  {w:"annoyed",t:"роздратований",e:"I was annoyed by his phone call.",topic:"Прикметники"},
  {w:"satisfied",t:"задоволений",e:"He was very satisfied with the results.",topic:"Прикметники"},
  {w:"concerned",t:"стурбований",e:"I am very concerned about his results.",topic:"Прикметники"},
  {w:"reliable",t:"надійний",e:"She is very reliable and always keeps her word.",topic:"Прикметники"},
  {w:"responsible",t:"відповідальний",e:"Everyone thinks you are a very responsible person.",topic:"Прикметники"},
  {w:"hypocritical",t:"лицемірний",e:"I punished them for their hypocrisy.",topic:"Прикметники"},
  {w:"conceited",t:"самовдоволений",e:"She became too conceited and rude.",topic:"Прикметники"},
  {w:"cheerful",t:"життєрадісний",e:"They are very brave and cheerful.",topic:"Прикметники"},
  {w:"selfish",t:"егоїстичний",e:"He refused to help her because she is too selfish.",topic:"Прикметники"},
  {w:"pale",t:"блідий",e:"Everyone was very pale because they were afraid.",topic:"Прикметники"},
  {w:"slim",t:"струнка",e:"She is slim and good-looking.",topic:"Прикметники"},
  {w:"gorgeous",t:"чудовий / гарний",e:"She looks gorgeous in that dress.",topic:"Прикметники"},
  // Дієслова + інфінітив
  {w:"pretend to",t:"вдавати / прикидатися",e:"He pretended to be sick.",topic:"Дієслова + інфінітив"},
  {w:"decide to",t:"вирішити (прийняти рішення)",e:"She decided to leave early.",topic:"Дієслова + інфінітив"},
  {w:"refuse to",t:"відмовитися",e:"He refused to help her.",topic:"Дієслова + інфінітив"},
  {w:"agree to",t:"погодитися",e:"They agreed to come.",topic:"Дієслова + інфінітив"},
  {w:"fail to",t:"не вийшло / не змогти",e:"He failed to pass the exam.",topic:"Дієслова + інфінітив"},
  {w:"manage to",t:"вдалося зробити",e:"She managed to finish on time.",topic:"Дієслова + інфінітив"},
  {w:"hope to",t:"сподіватися",e:"I hope to see you soon.",topic:"Дієслова + інфінітив"},
  {w:"plan to",t:"планувати",e:"We plan to travel next month.",topic:"Дієслова + інфінітив"},
  {w:"try to",t:"намагатися",e:"She tried to be calm.",topic:"Дієслова + інфінітив"},
  {w:"forget to",t:"забути (зробити)",e:"She forgot to call him.",topic:"Дієслова + інфінітив"},
  {w:"learn to",t:"навчитися",e:"She learned to swim at the age of five.",topic:"Дієслова + інфінітив"},
  // Дієслова загальні
  {w:"admire for",t:"захоплюватися (чимось)",e:"He admires her for her beauty and kindness.",topic:"Дієслова загальні"},
  {w:"blame for",t:"звинувачувати",e:"I don't blame you for this.",topic:"Дієслова загальні"},
  {w:"rely on",t:"покладатися на",e:"My colleagues rely on me.",topic:"Дієслова загальні"},
  {w:"count on",t:"розраховувати на",e:"I count on you.",topic:"Дієслова загальні"},
  {w:"complain about",t:"скаржитися на",e:"Nobody ever complains about their work.",topic:"Дієслова загальні"},
  {w:"envy",t:"заздрити",e:"I envy you — you are so lucky.",topic:"Дієслова загальні"},
  {w:"wink at",t:"підморгувати",e:"She smiled and winked at him.",topic:"Дієслова загальні"},
  {w:"punish for",t:"покарати за",e:"I punished them for their hypocrisy.",topic:"Дієслова загальні"},
  {w:"stare at",t:"витріщитися на",e:"Everyone stared at him because of his new suit.",topic:"Дієслова загальні"},
  {w:"divorce",t:"розлучитися",e:"She will divorce him because she doesn't love him.",topic:"Дієслова загальні"},
  {w:"boast about",t:"хвалитися",e:"He always boasts about his car.",topic:"Дієслова загальні"},
  {w:"investigate",t:"розслідувати / досліджувати",e:"They investigated the case for months.",topic:"Дієслова загальні"},
  {w:"assess",t:"оцінювати",e:"We need to assess the situation.",topic:"Дієслова загальні"},
  {w:"solve",t:"вирішувати (проблему)",e:"We need to solve this problem quickly.",topic:"Дієслова загальні"},
  // Конструкції
  {w:"would like",t:"хотілося б",e:"He would like to be here with us.",topic:"Конструкції"},
  {w:"wouldn't like",t:"не хотілося б",e:"She wouldn't like to know too much.",topic:"Конструкції"},
  {w:"be going to",t:"збиратися (зробити)",e:"I am going to travel next week.",topic:"Конструкції"},
  {w:"in order to",t:"щоб (мета)",e:"He works hard in order to earn well.",topic:"Конструкції"},
  {w:"in order not to",t:"щоб не",e:"She took a taxi in order not to be late.",topic:"Конструкції"},
  {w:"like the way",t:"подобається, як...",e:"I like the way she teaches English.",topic:"Конструкції"},
  {w:"know how to",t:"знаю, як...",e:"Do you know how to drive?",topic:"Конструкції"},
  {w:"so am I / so do I",t:"я теж (після стверджувального)",e:"I am tired. — So am I.",topic:"Конструкції"},
  {w:"neither do I / neither am I",t:"я теж ні (після заперечного)",e:"She doesn't smoke. — Neither do I.",topic:"Конструкції"},
  // Сполучники
  {w:"both … and …",t:"і … і …",e:"She both sings and dances well.",topic:"Сполучники"},
  {w:"either … or …",t:"або … або …",e:"Either you go or I go.",topic:"Сполучники"},
  {w:"neither … nor …",t:"ні … ні …",e:"He has neither money nor time.",topic:"Сполучники"},
  {w:"not only … but also …",t:"не тільки … але й …",e:"He is not only responsible but also kind.",topic:"Сполучники"},
  {w:"frankly speaking",t:"відверто кажучи",e:"Frankly speaking, I was not ready.",topic:"Сполучники"},
  {w:"the matter is that",t:"справа в тому, що",e:"The matter is that we don't have enough time.",topic:"Сполучники"},
  {w:"nevertheless",t:"тим не менш",e:"Nevertheless, he helped us.",topic:"Сполучники"},
  {w:"besides",t:"крім того",e:"Besides, they often travel together.",topic:"Сполучники"},
  {w:"according to",t:"за словами / згідно з",e:"According to him, we will be late.",topic:"Сполучники"},
  {w:"thanks to",t:"завдяки",e:"Thanks to him, she eats less bread.",topic:"Сполучники"},
  {w:"because of",t:"через / із-за",e:"Because of the rain, we stayed home.",topic:"Сполучники"},
  {w:"as for",t:"що стосується",e:"As for me, I prefer tea.",topic:"Сполучники"},
  {w:"unlike",t:"на відміну від",e:"Unlike her sister, she is very quiet.",topic:"Сполучники"},
  // Іменники
  {w:"solution",t:"рішення (задачі / проблеми)",e:"We need an efficient solution.",topic:"Іменники"},
  {w:"gratitude",t:"вдячність",e:"He expressed his gratitude.",topic:"Іменники"},
  {w:"concern",t:"занепокоєння / тривога",e:"My main concern is that he will be very busy.",topic:"Іменники"},
  {w:"achievement",t:"досягнення",e:"I am proud of this achievement.",topic:"Іменники"},
  {w:"challenge",t:"виклик / складне завдання",e:"The biggest challenge was the tight deadline.",topic:"Іменники"},
  {w:"opportunity",t:"можливість",e:"This is a great opportunity to grow.",topic:"Іменники"},
  {w:"experience",t:"досвід",e:"She didn't have the necessary experience.",topic:"Іменники"},
  {w:"strength",t:"сильна сторона",e:"My main strength is attention to detail.",topic:"Іменники"},
  {w:"weakness",t:"слабка сторона",e:"I tend to focus too much on details — that's my weakness.",topic:"Іменники"},
  {w:"deadline",t:"дедлайн / кінцевий термін",e:"We need to meet the deadline.",topic:"Іменники"},
  {w:"feedback",t:"зворотний зв'язок",e:"I always ask for feedback after the presentation.",topic:"Іменники"},
  {w:"update",t:"оновлення / повідомити нове",e:"Could you give me an update on this task?",topic:"Іменники"},
  {w:"schedule",t:"розклад / план",e:"Let me check my schedule.",topic:"Іменники"},
  // Розмовні та сучасні
  {w:"actually",t:"насправді / власне кажучи",e:"Actually, I think it's a great idea.",topic:"Розмовні"},
  {w:"basically",t:"загалом / по суті",e:"Basically, we need to restart the service.",topic:"Розмовні"},
  {w:"apparently",t:"схоже / судячи з усього",e:"Apparently, nobody told him about the meeting.",topic:"Розмовні"},
  {w:"eventually",t:"врешті-решт / з часом",e:"Eventually, we found a better solution.",topic:"Розмовні"},
  {w:"currently",t:"зараз / на даний момент",e:"I am currently working on a new feature.",topic:"Розмовні"},
  {w:"obviously",t:"очевидно",e:"Obviously, we need to fix this before the release.",topic:"Розмовні"},
  {w:"definitely",t:"точно / безумовно",e:"I can definitely recommend this series.",topic:"Розмовні"},
  {w:"I mean",t:"я маю на увазі",e:"It was difficult — I mean, really difficult.",topic:"Розмовні"},
  {w:"you know",t:"знаєш / розумієш (пауза)",e:"It was, you know, a really tough project.",topic:"Розмовні"},
  {w:"I guess",t:"мабуть / я думаю",e:"I guess we need more time for this.",topic:"Розмовні"},
  {w:"sort of / kind of",t:"щось на кшталт / певною мірою",e:"It's sort of a wrapper around the API.",topic:"Розмовні"},
  {w:"to be honest",t:"чесно кажучи",e:"To be honest, I wasn't ready for that question.",topic:"Розмовні"},
  {w:"that's why",t:"ось чому / тому",e:"That's why I decided to set up monitoring.",topic:"Розмовні"},
  {w:"in general",t:"загалом",e:"In general, the project went well.",topic:"Розмовні"},
  {w:"at the moment",t:"зараз / на цей момент",e:"At the moment I am working on performance optimization.",topic:"Розмовні"},
  {w:"as soon as possible",t:"якомога швидше",e:"I will send you the report as soon as possible.",topic:"Розмовні"},
  {w:"in any case",t:"у будь-якому разі",e:"In any case, we should test it before deploying.",topic:"Розмовні"},
  {w:"on the one hand… on the other hand",t:"з одного боку… з іншого боку",e:"On the one hand it's risky, on the other hand it's a good opportunity.",topic:"Розмовні"},
  {w:"as far as I know",t:"наскільки я знаю",e:"As far as I know, the release is planned for Friday.",topic:"Розмовні"},
  {w:"however",t:"однак / проте",e:"The task was difficult. However, we managed to complete it.",topic:"Розмовні"},
  {w:"although",t:"хоча / незважаючи на те що",e:"Although it took time, the result was worth it.",topic:"Розмовні"},
  {w:"while",t:"поки / тоді як",e:"While she was away, things changed a lot.",topic:"Розмовні"},
  {w:"used to",t:"раніше робив (але вже ні)",e:"I used to work with Angular before switching to React.",topic:"Розмовні"},
  {w:"tend to",t:"схильний / зазвичай роблю",e:"I tend to spend too much time on details.",topic:"Розмовні"},
  {w:"manage to",t:"вдається / вийшло",e:"I managed to finish the task before the deadline.",topic:"Розмовні"},
  // IT — для інтерв'ю та розмови про роботу
  {w:"wrap / unwrap",t:"обгортка / розгортати (дані)",e:"We need to wrap the data before sending.",topic:"IT"},
  {w:"an efficient solution",t:"ефективне рішення",e:"This is an efficient solution to the problem.",topic:"IT"},
  {w:"in accordance with",t:"відповідно до",e:"We act in accordance with the requirements.",topic:"IT"},
  {w:"to work on a project",t:"працювати над проектом",e:"I am currently working on a large project.",topic:"IT"},
  {w:"to perform refactoring",t:"робити рефакторинг",e:"We decided to perform refactoring of the main module.",topic:"IT"},
  {w:"to assign a task",t:"призначити завдання (комусь)",e:"The manager assigned the task to a senior developer.",topic:"IT"},
  {w:"to miss a deadline",t:"пропустити дедлайн",e:"We can't afford to miss this deadline.",topic:"IT"},
  {w:"to identify",t:"визначати / виявляти",e:"I managed to identify the root cause of the issue.",topic:"IT"},
  {w:"to provide",t:"надавати",e:"Can you provide more details about the requirements?",topic:"IT"},
  {w:"to complete",t:"завершити / виконати",e:"I need two more days to complete this task.",topic:"IT"},
  {w:"to deploy",t:"задеплоїти / випустити",e:"We deployed the new version to production yesterday.",topic:"IT"},
  {w:"to debug",t:"шукати і виправляти помилки",e:"It took me hours to debug that issue.",topic:"IT"},
  {w:"to review (code)",t:"перевіряти (код)",e:"Could you review my pull request?",topic:"IT"},
  {w:"to maintain",t:"підтримувати / супроводжувати",e:"I am responsible for maintaining the frontend codebase.",topic:"IT"},
  {w:"to set up",t:"налаштовувати / встановлювати",e:"I set up Sentry for error monitoring.",topic:"IT"},
  {w:"to speed up",t:"прискорювати",e:"These changes speeded up the page loading by 40%.",topic:"IT"},
  {w:"to reduce / decrease",t:"скоротити / зменшити",e:"We managed to reduce the number of errors by 60%.",topic:"IT"},
  {w:"codebase",t:"кодова база",e:"The codebase was very hard to maintain.",topic:"IT"},
  {w:"performance",t:"продуктивність",e:"We improved the performance of the application.",topic:"IT"},
  {w:"observability",t:"спостережуваність (моніторинг системи)",e:"We set up observability tools such as Sentry and Honeycomb.",topic:"IT"},
  {w:"monitoring tools",t:"інструменти моніторингу",e:"Monitoring tools help you detect issues early.",topic:"IT"},
  {w:"pull request (PR)",t:"пул-реквест (запит на злиття коду)",e:"Please approve my pull request when you have time.",topic:"IT"},
  {w:"sprint",t:"спринт (ітерація в Scrum)",e:"We plan our work in two-week sprints.",topic:"IT"},
  {w:"stakeholder",t:"зацікавлена сторона",e:"We need to present the results to the stakeholders.",topic:"IT"},
  {w:"on time",t:"вчасно (точно в строк)",e:"The project was delivered on time.",topic:"IT"},
  {w:"in time",t:"заздалегідь / встигнути",e:"We finished the testing in time before the release.",topic:"IT"},
  {w:"urgent",t:"терміновий",e:"This bug is urgent — it affects all users.",topic:"IT"},
  {w:"once a month / twice a week",t:"раз на місяць / двічі на тиждень",e:"We have a sync meeting twice a week.",topic:"IT"},
  {w:"all day long",t:"цілий день",e:"I was debugging all day long.",topic:"IT"},
  {w:"a fixed monthly rate",t:"фіксована ставка на місяць",e:"I work on a fixed monthly rate.",topic:"IT"},
  {w:"penalty",t:"штраф / санкція",e:"There is a penalty for missing the deadline.",topic:"IT"},
  {w:"mentoring / to mentor",t:"менторство / бути ментором",e:"My duties include mentoring junior developers.",topic:"IT"},
  {w:"responsibilities / duties",t:"обов'язки",e:"My responsibilities include code review and planning.",topic:"IT"},
  {w:"architectural solution",t:"архітектурне рішення",e:"I take part in planning of architectural solutions.",topic:"IT"},
  {w:"lazy loading",t:"ліниве завантаження",e:"I implemented lazy loading to improve performance.",topic:"IT"},
  {w:"container orchestration",t:"оркестрація контейнерів",e:"Kubernetes is a container orchestrator.",topic:"IT"},
  // Схожі слова
  {w:"SOAP",t:"мило (не суп!)",e:"I need soap to wash my hands.",topic:"Схожі слова"},
  {w:"SOUP",t:"суп (не мило!)",e:"She made delicious soup for dinner.",topic:"Схожі слова"},
];

const SENTENCES = [
  {ua:"Я думаю, що буду на роботі о 8 і не запізнюся.",en:"I think I will be at work by 8 and I won't be late.",set:"Set 1"},
  {ua:"Ніхто не сумує за ним, бо ніхто його не любить.",en:"Nobody misses him because nobody likes him.",set:"Set 1"},
  {ua:"Він хотів би бути тут, і він хотів би нам допомогти.",en:"He would like to be here and he would like to help us.",set:"Set 1"},
  {ua:"Вона б не хотіла знати забагато, але хотіла б бути розумною.",en:"She wouldn't like to know too much but she would like to be smart.",set:"Set 1"},
  {ua:"Мені б не хотілося тебе бачити, бо ти мені не подобаєшся.",en:"I wouldn't like to see you because I don't like you.",set:"Set 1"},
  {ua:"Мій приятель часто дивився на свою сусідку і захоплювався нею.",en:"My friend often looked at his neighbour and admired her.",set:"Set 1"},
  {ua:"Ніхто ніколи не буде посміхатися і підморгувати їй на уроці.",en:"Nobody will ever smile and wink at her during the lesson.",set:"Set 1"},
  {ua:"Вона була надто зарозуміла і ніколи нікому не посміхалася.",en:"She was too arrogant and never smiled at anyone.",set:"Set 2"},
  {ua:"Ми розчаровані у вас, тому ми б не хотіли дотримуватися ваших інструкцій.",en:"We are disappointed in you, so we wouldn't like to follow your instructions.",set:"Set 2"},
  {ua:"У неї не було необхідного досвіду, тому її не найняли.",en:"She didn't have the necessary experience, so they didn't hire her.",set:"Set 2"},
  {ua:"Він захоплюється нею за її красу і доброту, крім того він пишається нею.",en:"He admires her for her beauty and kindness, besides he is proud of her.",set:"Set 2"},
  {ua:"Я покарав їх за лицемірство, тому вони мене ненавидять.",en:"I punished them for their hypocrisy, so they hate me.",set:"Set 2"},
  {ua:"Він відмовиться допомагати їй, бо вона надто егоїстична.",en:"He will refuse to help her because she is too selfish.",set:"Set 2"},
  {ua:"Я не звинувачую вас у легковажності. Справа в тому, що вам бракує терпіння.",en:"I don't blame you for your frivolity. The matter is that you don't have enough patience.",set:"Set 2"},
  {ua:"Відверто кажучи, я не був готовий до цього, тому мене дратував його дзвінок.",en:"Frankly speaking, I was not ready for it, so I was annoyed by his call.",set:"Set 2"},
  {ua:"Вона забула йому відповісти, бо була дуже зайнята.",en:"She forgot to answer him because she was very busy.",set:"Set 3"},
  {ua:"У нього більше нема терпіння — він надто розчарований у ній.",en:"He has no patience left — he is too disappointed in her.",set:"Set 3"},
  {ua:"Я розраховую на вас. Всі кажуть, що ви дуже відповідальна людина.",en:"I count on you. Everyone says you are a very responsible person.",set:"Set 3"},
  {ua:"Ніхто ніколи не скаржиться на свою роботу, бо всі дуже успішні.",en:"Nobody ever complains about their work because everyone is very successful.",set:"Set 3"},
  {ua:"Подруга моєї мами відмовилася купувати нову машину своєму синові, бо він лінивий.",en:"My mother's friend refused to buy her son a new car because he is lazy.",set:"Set 3"},
  {ua:"Вони відмовлять йому, бо в нього не буде жодного доказу.",en:"They will refuse him because he won't have a single piece of evidence.",set:"Set 4"},
  {ua:"Всі витріщилися на нього, бо на ньому був новий костюм.",en:"Everyone stared at him because he was wearing a new suit.",set:"Set 4"},
  {ua:"Він був дуже схвильований щодо майбутньої зустрічі.",en:"He was very excited about the upcoming meeting.",set:"Set 4"},
  {ua:"У всіх було багато часу, щоб підготуватися.",en:"Everyone had plenty of time in order to prepare.",set:"Set 4"},
  {ua:"У дитинстві вона і співала, і танцювала добре, тому стала відомою співачкою.",en:"As a child she both sang and danced well, so she became a famous singer.",set:"Set 5"},
  {ua:"Він не тільки відповідальний, але й порядний, тому всі його поважають.",en:"He is not only responsible but also decent, so everyone respects him.",set:"Set 5"},
  {ua:"У них немає ні роботи, ні грошей, бо вони надто самовдоволені.",en:"They have neither a job nor money because they are too conceited.",set:"Set 5"},
  {ua:"Завдяки йому вона їсть мало хліба. Справа в тому, що вона закохалася в нього.",en:"Thanks to him she eats little bread. The matter is that she fell in love with him.",set:"Set 5"},
  {ua:"Я погано виходжу на фотографіях. Вона теж.",en:"I don't look good in photos. Neither does she.",set:"Set 6"},
  {ua:"Вона не готова сьогодні. Ми теж. Вчора ми добре провели час — ми і співали, і танцювали.",en:"She is not ready today. Neither are we. Yesterday we had a great time — we both sang and danced.",set:"Set 6"},
  {ua:"Вона завжди робить нотатки під час лекції. Ми теж. А він не робить.",en:"She always takes notes during the lecture. So do we. But he doesn't.",set:"Set 6"},
  {ua:"Вона часто порівнює його зі своїм другом, хоча йому це не подобається. Мені теж.",en:"She often compares him to her friend, although he doesn't like it. Neither do I.",set:"Set 6"},
  {ua:"З одного боку, він звинуватив її у своїх проблемах, але з іншого боку вона завжди була добра до нього.",en:"On the one hand he blamed her for his problems, but on the other hand she was always kind to him.",set:"Set 6"},
  {ua:"In order to get up early he set the alarm.",en:"Щоб встати рано, він поставив будильник.",set:"Практика конструкцій"},
  {ua:"In order not to be late she took a taxi.",en:"Щоб не запізнитися, вона взяла таксі.",set:"Практика конструкцій"},
  {ua:"She decided to go in order to save money.",en:"Вона вирішила піти, щоб заощадити гроші.",set:"Практика конструкцій"},
  {ua:"I like the way she teaches English.",en:"Мені подобається, як вона викладає англійську.",set:"Практика конструкцій"},
  {ua:"Do you know how to drive?",en:"Ти вмієш водити машину?",set:"Практика конструкцій"},
  {ua:"Why did he fail to help?",en:"Чому йому не вдалося допомогти?",set:"Практика конструкцій"},
  {ua:"She managed to get a day off.",en:"Їй вдалося взяти вихідний.",set:"Практика конструкцій"},
  {ua:"Is she going to have a date?",en:"Вона збирається на побачення?",set:"Практика конструкцій"},
  {ua:"Why did you choose to work in IT?",en:"Чому ви обрали роботу в IT?",set:"IT інтерв'ю"},
  {ua:"What are your current responsibilities?",en:"Які ваші поточні обов'язки?",set:"IT інтерв'ю"},
  {ua:"Are you trying to learn anything new at the moment?",en:"Ви зараз намагаєтеся чомусь навчитися?",set:"IT інтерв'ю"},
  {ua:"Where do you see yourself in the future?",en:"Ким ви бачите себе в майбутньому?",set:"IT інтерв'ю"},
];

// Правила граматики згруповані за категоріями
const GRAMMAR_GROUPS = [
  {
    group: "Конструкції",
    rules: [
      {
        title: "would like / wouldn't like",
        tag: "Конструкція",
        explanation: "Ввічливе бажання. Форма НЕ ЗМІНЮЄТЬСЯ — завжди однакова для всіх осіб.\n\nwould like = хотілося б\nwouldn't like = не хотілося б\nwould you like…? = питання",
        examples: [
          "He would like to be here. (він — форма та сама!)",
          "She wouldn't like to know too much.",
          "Would you like to have dinner?",
          "What would you like to eat?",
          "Where would you like to go?"
        ]
      },
      {
        title: "be going to",
        tag: "Майбутній час",
        explanation: "Виражає ЗАПЛАНОВАНУ дію, яка точно відбудеться, або дію очевидну з поточної ситуації.\n\nВажливо: НЕ використовується разом з will!",
        examples: [
          "I am going to travel next week. (план)",
          "Is she going to be there? (заплановано?)",
          "I'm not going to be away. (точно не буду)",
          "It's not going to be cold today. (очевидно з ситуації)",
          "Are you going to get married? (план)",
        ]
      },
      {
        title: "in order to / in order not to",
        tag: "Конструкція",
        explanation: "in order to = щоб (мета)\nin order not to = щоб не (уникнути)\n\nМожна скоротити до просто 'to'",
        examples: [
          "He needs to work a lot in order to earn well.",
          "She took a taxi in order not to be late.",
          "She decided to go in order to save money.",
          "He refused in order not to miss the flight.",
          "I don't have enough time to convince them. (скорочена форма)"
        ]
      },
      {
        title: "like the way / know how to",
        tag: "Конструкція",
        explanation: "like the way = подобається, ЯК хтось щось робить\nknow how to = знати ЯК щось робити (вміння)",
        examples: [
          "I like the way she teaches English.",
          "I like the way he works.",
          "I don't like the way you behave.",
          "Do you know how to drive?",
          "Does anybody know how to dance?",
          "Why doesn't she know how to cook?"
        ]
      },
    ]
  },
  {
    group: "Граматика",
    rules: [
      {
        title: "Possessive Case",
        tag: "Присвійний відмінок",
        explanation: "Одушевлені → додаємо 's\nНеодушевлені → прийменник 'of'",
        examples: [
          "the girl's name (одушевлене → 's)",
          "the cat's tail (одушевлене → 's)",
          "the back of the car (неодушевлене → of)",
          "the roof of the house (неодушевлене → of)",
          "yesterday's newspaper (часовий вираз → 's)",
          "a friend of mine (= my friend)",
          "a friend of my sister's (= my sister's friend)"
        ],
        table: [
          ["Тип","Правило","Приклад"],
          ["Одушевлене","+ 's","the girl's name"],
          ["Неодушевлене","of + noun","the roof of the house"],
          ["Організація/місце","'s OR of","the world's population"],
          ["Часовий","'s","yesterday's newspaper"],
        ]
      },
      {
        title: "Verbs + Infinitive",
        tag: "Дієслова + інфінітив",
        explanation: "Ці дієслова вимагають інфінітив (to + verb) наступного дієслова:\npretend, decide, refuse, agree, fail, manage, try, hope, plan, learn, forget",
        examples: [
          "He pretended to be sick.",
          "She decided to go to London.",
          "He refused to study.",
          "She managed to get a day off.",
          "Why did he fail to help?",
          "She forgot to call him.",
          "He hoped to see her.",
          "She tried to be calm."
        ]
      },
      {
        title: "Two Verbs in a Row",
        tag: "Правило",
        explanation: "Коли в реченні два дієслова підряд:\n→ ПЕРШЕ дієслово змінюється (приймає всі форми часу)\n→ ДРУГЕ залишається в базовій формі (інфінітив)",
        examples: [
          "She WANTS to go. (wants — змінено, go — базова форма)",
          "He DECIDED to leave. (decided — минулий час, leave — база)",
          "They REFUSED to answer. (refused — змінено)",
          "She MANAGED to finish. (managed — змінено)"
        ]
      },
      {
        title: "Adjectives + Prepositions",
        tag: "Прикметники з прийменниками",
        explanation: "Багато прикметників вимагають певний прийменник. Їх потрібно запам'ятовувати як словосполучення.",
        examples: [
          "disappointed IN somebody (розчарований в комусь)",
          "satisfied WITH something (задоволений чимось)",
          "afraid OF something (боїться чогось)",
          "proud OF somebody (пишається кимось)",
          "excited ABOUT something (схвильований чимось)",
          "concerned ABOUT something (стурбований чимось)",
          "ready FOR something (готовий до чогось)"
        ]
      },
      {
        title: "Question Words Structure",
        tag: "Питальні слова",
        explanation: "Спеціальне питання:\nWHO / WHAT / WHERE / WHEN / WHY / HOW + допоміжне дієслово + підмет + присудок",
        examples: [
          "Where does she live?",
          "When did he arrive?",
          "Why are you late?",
          "How many books does she have?",
          "How happy is he?",
          "Who is coming to the party?"
        ]
      },
      {
        title: "Reflexive Pronouns",
        tag: "Зворотні займенники",
        explanation: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves\n\nby oneself = сам, самостійно (без допомоги)",
        examples: [
          "She made herself a new suit.",
          "He bought the car by himself. (сам, без допомоги)",
          "Look at yourself!",
          "Don't hurt yourself!",
          "They did it by themselves.",
          "Help yourself! (частуйтеся)"
        ]
      },
    ]
  },
  {
    group: "Лексика та зв'язки",
    rules: [
      {
        title: "scared vs afraid",
        tag: "Лексика",
        explanation: "scared — страх у конкретний момент (прямо зараз)\nafraid — загалом, або припущення про майбутнє",
        examples: [
          "I'm scared! (щось налякало прямо зараз, під час фільму)",
          "I'm afraid he can be late tomorrow (припущення — afraid ✓)",
          "I'm scared of spiders (постійний страх — обидва варіанти)",
          "Are you afraid of the dark? (загальне — afraid ✓)"
        ]
      },
      {
        title: "Agreement: So / Neither",
        tag: "Згода / незгода",
        explanation: "Після СТВЕРДЖУВАЛЬНОГО: So + допом. дієслово + підмет (= я теж)\nПісля ЗАПЕРЕЧНОГО: Neither + допом. дієслово + підмет (= я теж ні)\n\nАльтернатива для заперечного: ... not ... either",
        examples: [
          "I am tired. — So am I. (я теж втомився)",
          "She is happy. — So am I. (я теж щасливий)",
          "She doesn't smoke. — Neither do I. (я теж не курю)",
          "He can't swim. — Neither can she. (вона теж не вміє)",
          "I am not surprised. — I am not surprised either. (альтернатива)",
          "She is ready. But he isn't. (а він ні — протиставлення)"
        ]
      },
      {
        title: "Connectors: Both/Either/Neither",
        tag: "Сполучні слова",
        explanation: "both … and … = і … і … (обидва)\neither … or … = або … або …\nneither … nor … = ні … ні …\nnot only … but also … = не тільки … але й …",
        examples: [
          "She both sings and dances well.",
          "Either you go or I go.",
          "He has neither money nor time.",
          "He is not only responsible but also kind.",
          "We will both work and study hard next year."
        ]
      },
      {
        title: "Discourse Markers",
        tag: "Фрази-зв'язки",
        explanation: "Слова та вирази для зв'язку речень і структурування мови",
        examples: [
          "Frankly speaking, I was not ready. (відверто кажучи)",
          "The matter is that we have no time. (справа в тому, що)",
          "On the one hand… on the other hand… (з одного / іншого боку)",
          "Nevertheless, he helped us. (тим не менш)",
          "Besides, they often travel. (крім того)",
          "According to him, we will be late. (за його словами)",
          "Thanks to her, everything went well. (завдяки їй)",
          "Unfortunately, he missed the flight. (на жаль)"
        ]
      },
    ]
  }
];

// Плаский список для зворотної сумісності
const GRAMMAR = GRAMMAR_GROUPS.flatMap(g => g.rules);

const QUIZ_DATA = [
  {q:"Обери правильний варіант для 'хвіст кішки':", opts:["of the cat tail","the cat tail","the cat's tail","cat of tail"], correct:2, note:"Одушевлені іменники → 's. Кішка — жива, тому the cat's tail.", topic:"Possessive Case"},
  {q:"Як сказати 'дах будинку'?", opts:["the house's roof","the roof of the house","the house roof","roof's of the house"], correct:1, note:"Неодушевлені іменники → of. Будинок — неживий, тому the roof OF the house.", topic:"Possessive Case"},
  {q:"'Я злякався прямо зараз!' — правильний варіант?", opts:["I'm afraid!","I'm scared!","I afraid!","I'm fear!"], correct:1, note:"scared = страх у конкретний момент (прямо зараз). afraid = загалом або припущення.", topic:"scared vs afraid"},
  {q:"'Боюся, він запізниться завтра' — правильний варіант?", opts:["I'm scared he will be late","I'm afraid he will be late","I am fear he will be late","I'm afraid of he late"], correct:1, note:"afraid = припущення/загальне. Для майбутніх подій або загального страху використовуємо afraid.", topic:"scared vs afraid"},
  {q:"Обери правильну форму 'would like' для 'він':", opts:["He wills like to go","He would likes to go","He would like to go","He will likes to go"], correct:2, note:"would like НЕ змінюється! Завжди одна форма для всіх осіб: He/She/They — would like.", topic:"would like"},
  {q:"'Вона збирається на вечірку' (заплановано):", opts:["She will go to the party","She goes to the party","She is going to go to the party","She going to party"], correct:2, note:"be going to = запланована дія. Is going (she) + to + дієслово.", topic:"be going to"},
  {q:"'Щоб не запізнитися, вона взяла таксі':", opts:["in order to not late","in order not to be late","not in order to be late","in order to be not late"], correct:1, note:"in order NOT TO + інфінітив = щоб не. Порядок: not to завжди разом.", topic:"in order to"},
  {q:"'Мені подобається, ЯК він працює' — як сказати?", opts:["I like how he works","I like that way he works","I like the way he works","I like which he works"], correct:2, note:"like the way = подобається, ЯК хтось щось робить. Саме 'the way', не 'how'.", topic:"like the way"},
  {q:"'Ти вмієш водити?' — як запитати?", opts:["Do you know how drive?","Do you know to drive?","Do you know how to drive?","Do you know driving?"], correct:2, note:"know how to + інфінітив. Конструкція: знати ЯК щось робити.", topic:"know how to"},
  {q:"'Він прикинувся, що захворів':", opts:["He pretended to be sick","He pretended being sick","He pretend to be sick","He was pretending sick"], correct:0, note:"pretend + to + інфінітив. Це одне з дієслів групи Verbs + Infinitive.", topic:"Verbs + Infinitive"},
  {q:"'Їй вдалося взяти вихідний':", opts:["She managed getting a day off","She managed to get a day off","She managed get a day off","She managed to getting a day off"], correct:1, note:"manage + to + інфінітив. Вся група: pretend/decide/refuse/agree/fail/manage/try/hope/plan/learn/forget — всі з 'to'.", topic:"Verbs + Infinitive"},
  {q:"'Я теж втомився' після 'She is tired':", opts:["Neither am I","So do I","So am I","I am too also"], correct:2, note:"Після стверджувального з be: So am/is/are + I/he/she. She IS tired → So AM I.", topic:"Agreement"},
  {q:"'Я теж не курю' після 'She doesn't smoke':", opts:["So do I","Neither do I","I too not","Me neither do"], correct:1, note:"Після ЗАПЕРЕЧНОГО: Neither + допоміжне дієслово + підмет. Doesn't → do (базова).", topic:"Agreement"},
  {q:"'Вона і співає, і танцює добре':", opts:["Either she sings or dances well","Neither does she sing nor dance","She both sings and dances well","Not only does she sing but also dance well"], correct:2, note:"both … and … = і … і … (обидві дії виконуються). She BOTH sings AND dances well. Не плутай з either/or (вибір між двома).", topic:"Connectors"},
  {q:"'У нього немає ні грошей, ні часу':", opts:["He has both no money and time","He has either no money or time","He has neither money nor time","He not has money and time"], correct:2, note:"neither … nor … = ні … ні … (жодного з двох).", topic:"Connectors"},
  {q:"Перше чи друге дієслово змінюється в реченні?", opts:["Обидва змінюються","Тільки перше","Тільки друге","Жодне"], correct:1, note:"Перше дієслово бере на себе все (змінюється за часом/особою). Друге залишається в базовій формі: She WANTS to go.", topic:"Two Verbs"},
  {q:"'Розчарований В комусь' — який прийменник?", opts:["disappointed about","disappointed with","disappointed in","disappointed of"], correct:2, note:"disappointed IN somebody. Прийменники з прикметниками потрібно запам'ятовувати! Satisfied WITH, afraid OF, proud OF.", topic:"Adjectives + Prepositions"},
  {q:"Reflexive: 'Він купив машину сам, без допомоги':", opts:["He bought the car himself","He bought the car by himself","He bought by himself car","He by himself bought car"], correct:1, note:"BY oneself = сам, без чиєїсь допомоги. Просто 'himself' означає 'для себе/собі'.", topic:"Reflexive Pronouns"},
];
