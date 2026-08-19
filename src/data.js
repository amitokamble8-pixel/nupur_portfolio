/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Nupur",
  last: "Layak",
  fullName: "Nupur Layak",
  tag: "IGCSE · Class of 2028 · Bangalore, India",
  tagline: "Number Theory & STEM Student • Poet, Slam Performer & NCC Cadet",
  subline: "Vidyashilp Academy · Further Maths, Physics & Chemistry",
  headline:
    "I find patterns in numbers and stories in words. Whether it's a proof or a poem, I like figuring out how things work.",
  chips: [
    "Number Theory",
    "Poetry & Slam",
    "Basketball",
    "NCC Cadet",
    "Bangalore · American",
  ],
  location: "Bangalore, India",
  email: "",
  bio: [
    "I'm someone who seems to be naturally drawn to questions without easy answers.",
    "On alternate Saturdays, I spend time at the Raman Research Institute working through mathematics problems that don't always lead to tidy solutions. At the same time, writing has become another way for me to explore ideas — from poems that have won competitions to performing slam poetry on stage.",
    "Beyond academics and writing, I've learned a lot from showing up consistently in different spaces: marching in NCC camps, helping organize blood donation drives, and playing basketball for my school. While these experiences may seem different on the surface, they've all taught me something about discipline, teamwork, and staying committed when things get challenging.",
    "I'm drawn to STEM not because it feels like the obvious path, but because the questions genuinely fascinate me. Writing feels connected to that same curiosity — just a different way of making sense of ideas and trying to express something true.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "",
  photo: "",
  aboutPhoto: "",

};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Internship & Programmes", to: "/work" },
       { label: "Interests", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    label: "Community Service",

      label: "Community Service", to: "/volunteering",

  },

  { label: "Beyond Academics", to: "/sports" },

];

/* ---- Home highlight cards (one-line teasers only) ---- */

export const HIGHLIGHTS = [
  {
    icon: "🔬",
    title: "Experience",
    teaser: "Number theory at IISc. Sustainability at Upciclo. Learning by doing.",
    to: "/work",
  },
  {
    icon: "🏅",
    title: "Awards",
    teaser: "Silver in basketball. Second in poetry. NCC A Certificate. Five IGCSE A*s.",
    to: "/awards",
  },
  {
    icon: "✍️",
    title: "Beyond Academics",
    teaser: "Mathematician on Saturdays. Poet on weekdays. Basketballer in between.",
    to: "/sports",
  },
  {
    icon: "📐",
    title: "Academics",
    teaser: "A* in Maths, Further Maths, Chemistry, Physics & CS. IGCSE 2026.",
    to: "/academics",
  },
];

/* ---- About info grid (2×2 cards) ---- */

export const ABOUT_INFO = [
  { label: "School", value: "Vidyashilp Academy, Bangalore" },
  { label: "Curriculum", value: "Cambridge IGCSE — completing 2026" },
  { label: "Interests", value: "Maths · Physics · Poetry · Basketball" },
  { label: "Nationality", value: "American, based in Bangalore" },
];

/* ---- Experience & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "promys-india",
    role: "Selected Participant — Number Theory",
    org: "PROMYS India, IISc Bangalore",
    logo: "/logos/promys.avif",
    location: "Indian Institute of Science (IISc), Bangalore",
    dates: "May 5 – Jun 15, 2024",
    meta: "May 5 – Jun 15, 2024 · 6 weeks · Residential · IISc, Bangalore ·",
    badge: "Summer Program",
    desc: "PROMYS (Programme in Mathematics for Young Scientists) is a competitive residential programme for students who want to go beyond the school curriculum and think like mathematicians. It runs at IISc, and selection is based on mathematical thinking ability, not just grades.",
    bullets: [
      "Deep number theory — problems that don't have textbook answers",
      "Writing mathematical conjectures and working through proofs",
      "Exploring ideas alongside other mathematically curious students",
      "Thinking independently before being shown solutions",
      "Took away a real sense of what mathematical research feels like, and the ability to sit with a hard problem and not give up",
    ],
    tags: ["Number Theory", "Mathematical Proof", "Independent Research", "Logical Reasoning"],
    featured: true,
  },
  {
    slug: "upciclo-intern",
    role: "Intern",
    org: "Upciclo",
    logo: "/logos/upciclo.avif",
    location: "Bangalore, India",
    dates: "Apr – May 2025",
    meta: "Apr – May 2025 · 1 month · Bangalore, India ·",
    badge: "Internship",
    desc: "Upciclo is a sustainability startup working with upcycled and circular-economy products. Worked on the operational and content side of the business.",
    bullets: [
      "Called potential vendors to explore sourcing partnerships",
      "Researched suppliers that matched Upciclo's sustainability criteria",
      "Wrote FAQ blogs for the company website",
      "Learned that vendor research involves outreach, comparison, and judgment, and that writing for a website audience differs from writing for school",
    ],
    tags: ["Vendor Research", "Cold Calling", "Content Writing", "Blog Writing"],
    featured: true,
  },
  {
    slug: "ncc-community-work",
    role: "Cadet — Community Work",
    org: "National Cadet Corps (NCC)",
    logo: "/logos/ncc.avif",
    location: "Bangalore, India",
    dates: "Grades 8 – 9",
    meta: "2 years · Grades 8 and 9 · Bangalore, India ·",
    badge: "Community Service",
    desc: "Two years of NCC community work run through school, alongside drill training and the annual camp.",
    bullets: [
      "Organised a blood donation drive at school",
      "Planted trees on school grounds",
      "Cleaned up the area around the lake near school",
      "Taught junior cadets how to march",
    ],
    tags: ["Community Service", "Leadership", "Teamwork"],
    featured: true,
  },
];

/* ---- Projects ---- */
/* The source document contains no standalone project entries. Kept as an
   empty array so any component importing PROJECTS still renders safely. */

export const PROJECTS = [];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🎓",
    title: "PROMYS India — Selected Participant",
    meta: "2024 · IISc, Bangalore",
    detail: "National-level competitive selection. PROMYS selects students based on genuine mathematical thinking. Getting in at 14 means something beyond grades.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "Silver Medal — Interschool Basketball",
    meta: "2025 · Interschool, Bangalore",
    detail: "Competed in multiple Bangalore tournaments as part of the school team — Vidyaniketan (Silver) and BIS (participated). Silver at Vidyaniketan was the season highlight.",
    link: "",
    featured: true,
  },
  {
    icon: "🎖️",
    title: "NCC 'A' Certificate — Two Years",
    meta: "2023 and 2025 · Karnataka, NCC",
    detail: "The A Certificate requires passing a national-level examination. Earned it twice — once per year of NCC participation. Also awarded the Annual Training Camp badge.",
    link: "",
    featured: true,
  },
  {
    icon: "🌟",
    title: "Five IGCSE A*s",
    meta: "Grade 10, 2025 – 2026",
    detail: "Top Cambridge grade across every STEM subject taken: Additional Maths, Maths, Chemistry, Physics and Computer Science.",
    link: "",
    featured: true,
  },
  {
    icon: "✍️",
    title: "Second Place — School Poetry Competition",
    meta: "2025 · Intraschool",
    detail: "Original poem entered and placed second school-wide.",
    link: "",
    featured: false,
  },
  {
    icon: "🎤",
    title: "Second Place — Slam Poetry (with partner)",
    meta: "2024 · Intraschool",
    detail: "Performed a partner's poem on stage. Second place.",
    link: "",
    featured: false,
  },
];

/* ---- Interests ---- */

export const ARTICLES = [
  {
    title: "Number Theory",
    outlet: "Conjectures, proof writing, and problems without textbook answers",
    link: "",
  },
  {
    title: "Mathematical Reasoning",
    outlet: "Independent problem solving and logical reasoning through the RRI/ICTS Maths Circle",
    link: "",
  },
  {
    title: "Computer Science & Physics",
    outlet: "The STEM core of the IGCSE combination — Further Maths, Physics, Chemistry and Computer Science",
    link: "",
  },
  {
    title: "Writing & Slam Poetry",
    outlet: "Original poems, stage performance, and content writing for real audiences",
    link: "",
  },
];

/* ---- Community service & leadership ---- */

export const VOLUNTEER = {
  stats: [
    { value: "2", label: "Years in NCC" },
    { value: "4", label: "Community Projects" },
    { value: "2", label: "NCC 'A' Certificates" },
  ],
  orgs: [
    {
      name: "National Cadet Corps (NCC)",
      role: "Cadet · Grades 8 – 9",
      desc: "Two years of community work through NCC: organised a blood donation drive at school, planted trees on school grounds, cleaned up the area around the lake near school, and taught junior cadets how to march. Earned the 'A' Certificate twice and the Annual Training Camp badge.",
    },
    {
      name: "RRI/ICTS Maths Circle",
      role: "Participant · Since Grade 7 (2023)",
      desc: "Attends every other Saturday at the Raman Research Institute, working through open-ended mathematics problems alongside other students — ongoing since Grade 7.",
    },
  ],
};

/* ---- Beyond Academics (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "➗",
    name: "RRI/ICTS Maths Circle",
    desc: "Every other Saturday I go to the Raman Research Institute and work on problems with no clean answers. Nobody hands you the solution. You sit with the question, explore it, sometimes get somewhere, sometimes don't. I've been doing this since Grade 7 and it's probably shaped how I think more than anything else I do.",
  },
  {
    icon: "🏀",
    name: "Basketball — School Team",
    desc: "Basketball taught me what it means to lose and still come back. I played in several tournaments this year and there's a kind of thinking the sport requires — reading a situation and deciding in half a second — that I find genuinely interesting. The silver medal was nice. But that's not really why I play.",
  },
  {
    icon: "🎖️",
    name: "National Cadet Corps",
    desc: "I went into NCC expecting mostly marching. And yes, there was a lot of marching — sessions every other Saturday, a 10-day camp, drills in the heat. But it turned into something more interesting than that. Teaching junior cadets, running a blood donation drive, cleaning up around the lake — these were things that asked me to be responsible for something beyond my own goals. The A Certificate meant I'd passed the national exam. The camp badge meant I showed up, every time.",
  },
  {
    icon: "🎤",
    name: "Poetry & Slam",
    desc: "I write poems privately, and entering the school competition in 2025 was the first time I found out how one of them stood — second place felt fair. The slam in 2024 was a different experience: I was performing a poem my partner had written, which meant I had to understand it well enough to make someone else feel it. There's a kind of care that poetry asks for — paying attention to the exact weight of a word — that I think connects to what I like about maths. Both ask you to mean exactly what you say.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Mathematics",
    items: ["Number Theory", "Mathematical Reasoning", "Mathematical Proof", "Logical Reasoning"],
  },
  {
    group: "Technical & Research",
    items: ["Computer Science", "Research", "Independent Research", "Vendor Research"],
  },
  {
    group: "Writing & Communication",
    items: ["Content Writing", "Blog Writing", "Slam Poetry", "Public Speaking"],
  },
  {
    group: "Personal",
    items: ["Leadership & Discipline", "Teamwork"],
  },
];

/* ---- Academics (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Vidyashilp Academy",
    location: "Bangalore, India",
    level: "Grade 10 — IGCSE (in progress)",
    dates: "2025 – 2026",
    board: "Cambridge IGCSE",
    completing: "2026",
    coursework: ["Further Maths", "Maths", "Physics", "Chemistry", "Computer Science"],
  },
];

export const ACADEMIC_HIGHLIGHTS = [
  {
    year: "2024",
    title: "Selected for PROMYS India at IISc",
    detail: "Competitive entry. One of the few students selected from across India for a residential number theory programme at IISc.",
  },
  {
    year: "2025",
    title: "Five IGCSE A*s in STEM subjects",
    detail: "A* in Additional Maths, Maths, Chemistry, Physics and CS — the full STEM core.",
  },
  {
    year: "Grade 9",
    title: "Top scores in Maths and CS",
    detail: "97.5% in both Mathematics and Computer Science, 96.7% in Additional Maths — consistent, not occasional.",
  },
];

/* ---- Contact ---- */

export const CONTACT = {
  heading: "Let's Connect",
  intro: "Whether it's maths, STEM programmes, poetry, or a university conversation — I'd love to hear from you.",
  links: [
    { label: "Email Nupur", type: "email", value: "" },
    { label: "LinkedIn", type: "linkedin", value: "" },
    { label: "Download Resume", type: "resume", value: "" },
  ],
  quickInfo: [
    { label: "Location", value: "Bangalore, India" },
    { label: "IGCSE completion", value: "2026" },
    { label: "12th completion", value: "2028" },
    { label: "Nationality", value: "American" },
    { label: "Target regions", value: "USA · UK" },
    { label: "Interests", value: "Mathematics · Physics · STEM" },
  ],
  closing: "Always happy to connect with people working on interesting problems — in maths, science, writing, or anything in between.",
};

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/work" },
  { label: "Academics", to: "/academics" },
  { label: "Achievements", to: "/awards" },
  { label: "Interests", to: "/publications" },
  { label: "Community Service", to: "/volunteering" },
  { label: "About", to: "/about" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },

];
