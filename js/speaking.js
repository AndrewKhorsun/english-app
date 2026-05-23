const SPEAKING = [

  // ── PROFESSIONAL BACKGROUND ──────────────────────────────────────────────────
  {
    category: "Professional Background",
    question: "Why did you choose to work in IT?",
    tips: [
      "Talk about your motivation: I've always been interested in…",
      "Mention a turning point: I started… and realized…",
      "Connect to the present: Now I enjoy…"
    ],
    example: ""
  },
  {
    category: "Professional Background",
    question: "How did you get started in IT?",
    tips: [
      "Use past simple for the story: I started / I decided / I studied…",
      "Add a key moment: At some point I realized…",
      "Connect to now: That's how I got into…"
    ],
    example: ""
  },
  {
    category: "Professional Background",
    question: "What was the most interesting project you've ever done?",
    tips: [
      "Name the project: I worked on a project called… / One of the most interesting projects was…",
      "Describe it briefly: It was a … for … that helped…",
      "Say why it was interesting: What made it interesting was…"
    ],
    example: "One of the most interesting projects I worked on is MindKit — a SvelteKit web-application for an AI-platform for working with documents, research and company analysis. In short, it's an AI-copilot for business analysis and knowledge management. What made it interesting was the challenge of wrapping complex AI tools into a clean user interface."
  },
  {
    category: "Professional Background",
    question: "What were the biggest challenges you had to solve in a recent project?",
    tips: [
      "Name 2 situations: I can remember about 2 projects where I had a challenging situation.",
      "Use the pattern: The project had a problem of… My solution was to… As a result…",
      "Be specific with numbers: reduced by 60% / speeded up by 40-50%"
    ],
    example: "I can remember about 2 projects where I had a challenging situation. The first project had a lot of errors in production. My solution was to analyze the codebase, then to setup Sentry for quick identification of errors and wrote tests for business logic using Jest and React Testing Library. As a result, the number of errors in production was reduced by 60%. The second project had a problem of slow loading of the first page. I optimized it with the help of React.memo and lazy loading. As a result, performance speeded up by 40-50%."
  },

  // ── CURRENT JOB ───────────────────────────────────────────────────────────────
  {
    category: "Current Job",
    question: "What are your current responsibilities?",
    tips: [
      "Start with your role and company: I work as… at…",
      "List duties: I am responsible for… My duty is to…",
      "Add team context: I also… / Besides, I…",
      "Use: decrease/reduce (not lessen), 'with the use of' or 'using'"
    ],
    example: "I work as a front-end developer at Cruxlab. I am responsible for the development and support of web-applications using React, TypeScript and SvelteKit. My duty is to improve performance, reduce the number of errors and make the codebase more convenient for support. I also set up monitoring tools such as Sentry and Honeycomb. Besides, I integrate AI-tools which speed up development. I take part in planning of architectural solutions. My duties also include mentoring junior developers."
  },
  {
    category: "Current Job",
    question: "What do you like most about your current position?",
    tips: [
      "Use 'what I like most is…' / 'I really enjoy…'",
      "Name something specific: the variety of tasks / working with new technologies / collaborating with the team",
      "Add a reason: because it helps me… / because I get to…"
    ],
    example: ""
  },
  {
    category: "Current Job",
    question: "What are your biggest strengths?",
    tips: [
      "Name 2-3 strengths: I would say my main strengths are…",
      "Give evidence: For example, I… / Once I managed to…",
      "Connect to the job: which is important for… / that helps me…"
    ],
    example: ""
  },
  {
    category: "Current Job",
    question: "Are you trying to learn anything new at the moment?",
    tips: [
      "Start with your main area: I am interested in…",
      "Add adjacent areas: I am also interested in similar areas such as…",
      "Explain the 'why': It's important to me to…",
      "Add a specific example: The last tool I studied is… because…"
    ],
    example: "I am interested in frontend development. I am also interested in similar areas such as backend and DevOps. It's important to me to constantly expand my technical knowledge and understand processes beyond just my own responsibilities. I read different technical articles and select new words to learn. Also I take private classes to practice my speaking and improve my grammar. The last tool that I studied is Kubernetes because it is a very important tool — it's a container orchestrator."
  },
  {
    category: "Current Job",
    question: "Can you describe a professional achievement you are proud of?",
    tips: [
      "Use the pattern: I built / I set up… from scratch, which allowed…",
      "Give a result with numbers: reduced by 50% / speeded up by…",
      "Add a second achievement with 'Also' or 'Besides'"
    ],
    example: "I built an observability system from scratch using Sentry and Honeycomb, which allowed us to reduce the average time to resolve incidents by 50%. Besides, I integrated AI-tools into the team's workflow, which helped speed up code review, test generation and refactoring."
  },

  // ── FUTURE PLANS ─────────────────────────────────────────────────────────────
  {
    category: "Future Plans",
    question: "Where do you see yourself in the future?",
    tips: [
      "Use 'I would like to' or 'I plan to'",
      "Be realistic and positive: I'd like to grow into…",
      "Connect to the company: I believe this role would help me…"
    ],
    example: ""
  },
  {
    category: "Future Plans",
    question: "Do you have any long-term or short-term plans?",
    tips: [
      "Split the answer: In the short term… / In the long term…",
      "Use: I plan to… / I am going to… / I would like to…",
      "Connect professional and personal if relevant"
    ],
    example: ""
  },
  {
    category: "Future Plans",
    question: "What would be your ideal job?",
    tips: [
      "Describe the environment: I would like to work in a company where…",
      "Mention the role: Ideally I would like to…",
      "Add what matters to you: It's important for me that…"
    ],
    example: ""
  },
  {
    category: "Future Plans",
    question: "What is the reason behind your search for a new position?",
    tips: [
      "Be honest but professional — focus on growth, not complaints",
      "Use: I am looking for… / I feel I am ready for…",
      "Avoid: criticizing current employer",
      "⚠️ Teacher emphasized this is a very important question — prepare it well!"
    ],
    example: ""
  },

  // ── FREE TIME ─────────────────────────────────────────────────────────────────
  {
    category: "Free Time",
    question: "What are your interests? / What do you do outside of work?",
    tips: [
      "Start humbly: I don't have any special interests. It's standard things as for many people.",
      "Name activities: I spend my free time with my family. We… / Besides I like to…",
      "Add professional development at the end: Also I continue to work on…",
      "Useful connector: 'Besides' = кроме того"
    ],
    example: "I don't have any special interests. I can say it's standard things as for many people. I spend my free time with my family. Usually we go to different concerts — my daughter likes music, and we often have a walk around the central lake. Besides I like to read sci-fi. Recently I started going to the gym — I go twice a week. Also I continue to work on my professional development — I study DevOps tools and I work on improving my English."
  },
  {
    category: "Free Time",
    question: "What are your favorite movies or books?",
    tips: [
      "Books: name the genre + title + short description",
      "Use: 'This is about…' / 'It's a story about…'",
      "Movies: name genre + why you like it: I like thrillers with unexpected ending.",
      "Useful: 'storyline' = сюжет, 'emotionally challenging' = эмоционально сложный",
      "Connector: 'While she was away' (don't drop the subject!)"
    ],
    example: "I like thrillers with unexpected endings. I can say I like difficult storylines and unusual solutions. For example, I like a series called 'His and Hers'. It's about a man and a woman who are married and they lost their baby. While she was away, her childhood friend was murdered. When she found out about this she came back to the town. It's quite emotionally challenging but I can definitely recommend it. As for books, I like sci-fi. The last book I read is from a series called 'Вне себя'. It's about the future when AI controls all people, and thanks to AI people won over death."
  },

  // ── PRACTICAL QUESTIONS ───────────────────────────────────────────────────────
  {
    category: "Practical Questions",
    question: "How much time do you need to finish your current employment?",
    tips: [
      "Give a clear answer first: I need… weeks/months",
      "Add a reason: because I have ongoing tasks to complete / because of the notice period",
      "Keep it short and professional"
    ],
    example: "I need two weeks to finish my current employment because I have ongoing tasks to complete."
  },
  {
    category: "Practical Questions",
    question: "What are your preferable working hours? Are you available for calls late in the evening?",
    tips: [
      "State your standard hours: Usually I work from… till…",
      "Show flexibility: however, if necessary, I can adjust…",
      "Set a reasonable limit: if possible, till midnight UA time"
    ],
    example: "Usually I work from 9 am till 6 pm. However, if necessary, I can adjust my working hours and I will be available for calls late in the evening. But, if possible, till midnight UA time."
  },
  {
    category: "Practical Questions",
    question: "Why did you choose this company?",
    tips: [
      "Do research before the interview — mention something specific about the company",
      "Use: I was interested in… / I liked the fact that… / I believe…",
      "Connect to your goals: I think this role would help me…"
    ],
    example: ""
  },
  {
    category: "Practical Questions",
    question: "How do you rate your knowledge of Kubernetes?",
    tips: [
      "Be honest about your level: I am quite confident with it / I have basic knowledge of…",
      "Add timeframe: I have been working with it for about…",
      "Mention what's next: I plan to study… as soon as possible"
    ],
    example: "I have been working with Kubernetes for about 3-4 months. I am quite confident with it. I plan to study Docker containers as soon as possible."
  },
];
