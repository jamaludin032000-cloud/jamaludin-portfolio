const en = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    certificates: "Certificates",
    contact: "Contact",
  },

  hero: {
    welcome: "Welcome to my Portfolio",
    greeting: "Hi, I'm",
    name: "Jamaludin",
    role: "Full Stack Web Developer",

    description:
      "I am a Full Stack Web Developer focused on building modern web applications using Next.js, React, Laravel, TypeScript, Python, and MySQL. I enjoy creating fast, responsive, secure, and user-friendly applications.",

    available: "Available for Work",

    scroll: "Scroll",

    stats: {
      experience: "Years Experience",
      projects: "Completed Projects",
      satisfaction: "Client Satisfaction",
    },
  },

  about: {
    badge: "About Me",
    heading: "Get to Know Me",
    subheading: "Full Stack Web Developer",

    paragraphs: [
      "I am a Full Stack Web Developer with a strong interest in building modern, responsive, and scalable web applications using the latest technologies.",
      "My main focus is Frontend development using React and Next.js, as well as Backend development using Laravel, Node.js, Python, and MySQL.",
      "Beyond web development, I also have experience in Machine Learning, REST APIs, Database Design, Version Control with Git, and Deployment.",
    ],

    focusAreas: [
      "React & Next.js",
      "Laravel & Node.js",
      "Machine Learning",
      "REST API Design",
      "Database Design",
      "Git & Deployment",
    ],

    info: {
      name: { label: "Name", value: "Jamaludin" },
      location: { label: "Location", value: "Bekasi, Indonesia" },
      email: { label: "Email", value: "jamaludin032000@gmail.com" },
      education: {
        label: "Education",
        value: "B.Sc. in Informatics Engineering",
      },
      experience: { label: "Experience", value: "Web Development" },
      status: { label: "Status", value: "Available for Work" },
    },
  },

  skills: {
    badge: "Skills",
    heading: "Technical Skills",
    countSuffix: "skills",

    categories: {
      frontend: {
        title: "Frontend",
        description: "Building fast and responsive interfaces",
      },
      backend: {
        title: "Backend",
        description: "Designing secure, scalable systems & APIs",
      },
      tools: {
        title: "Tools",
        description: "Everyday tools for building & deploying",
      },
    },
  },

  experience: {
    badge: "Experience",
    heading: "Work Experience",
    showLess: "Show less",
    showMore: (remaining: number) => `Show ${remaining} more`,

    items: [
      {
        company: "Livara Interior",
        position: "Operational Staff",
        period: "February 2026 - June 2026",
        description: [
          "Supervised and coordinated daily company operations to ensure effectiveness and efficiency.",
          "Organized the team's work schedule and ensured interior projects were completed on time.",
          "Coordinated with clients, vendors, and the production team throughout project execution.",
          "Monitored work quality to ensure it met company standards.",
          "Managed material needs and ensured stock availability to support smooth project execution.",
          "Prepared operational reports and evaluated team performance.",
          "Resolved operational issues to improve productivity and client satisfaction.",
        ],
      },
      {
        company: "PT Tangkas Cipta Optimal (TACO)",
        position: "Production Operator / Assembly / Warehouse",
        period: "May 2021 - September 2024",
        description: [
          "Operated production machinery and performed machine setup prior to production.",
          "Performed assembly processes (chip sticking) according to company quality standards.",
          "Conducted Quality Control on incoming and outgoing goods.",
          "Handled packing, labeling, and arranging goods according to the shipping schedule.",
          "Managed inventory, performed stock opname, and applied FIFO/LIFO systems.",
          "Recorded stock data and prepared daily and monthly reports.",
          "Coordinated with QC and logistics teams to ensure on-time distribution.",
        ],
      },
      {
        company: "PT KIYOKUNI Indonesia",
        position: "Production Operator",
        period: "July 2019 - January 2021",
        description: [
          "Operated stamping machines to produce components according to specifications.",
          "Performed machine setup and calibration before production began.",
          "Monitored the production process to ensure quality and efficiency.",
          "Performed daily machine inspections and maintenance, reporting damage to technicians.",
          "Managed raw material usage according to daily production targets.",
          "Implemented Occupational Health and Safety (K3) procedures during production.",
          "Contributed to achieving production targets through time and material efficiency.",
        ],
      },
    ],
  },

  projects: {
    badge: "Projects",
    heading: "Featured Projects",
    demoLabel: "Live Demo",
    githubLabel: "GitHub",
    privateLabel: "Private repository",

    items: {
      portfolio: {
        description:
          "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring responsive design and optimized SEO.",
      },
      maintenance: {
        description:
          "A machine failure prediction system using Random Forest and XGBoost algorithms, with Laravel as the backend, Next.js as the frontend, and Python powering the AI service.",
      },
      ppe: {
        description:
          "A Personal Protective Equipment (PPE) detection application using Computer Vision to help improve workplace safety.",
      },
    },
  },

    education: {
    badge: "Education",
    title: "Educational Background",
    subtitle:
      "Academic history that forms the foundation for developing academic, technical, and professional skills in the field of information technology.",
    items: [
      {
        institution: "Universitas Bani Saleh",
        degree: "Bachelor's Degree in Informatics Engineering",
        period: "2023 - Present",
        description:
          "Studying software development, databases, computer networks, artificial intelligence, machine learning, web development, and information systems analysis and design.",
      },
      {
        institution: "SMK TINTA EMAS INDONESIA",
        degree: "Light Vehicle Engineering",
        period: "2015 - 2018",
        description:
          "Studying the fundamentals of automotive engineering, engine maintenance, vehicle electrical systems, and hands-on practice in repairing and maintaining light vehicles (cars).",
      },
    ],
  },

  certificates: {
    badge: "Certificates",
    title: "Certifications & Training",
    subtitle:
        "Certifications and training that support my expertise in Web Development, Programming, and Machine Learning.",

    verified: "Verified",

    items: [
        {
        title: "Fundamental Web Development",
        issuer: "Dicoding Indonesia",
        year: "2024",
        description:
            "Learned HTML5, CSS3, modern JavaScript, Responsive Web Design, and web development best practices.",
        verified: true,
        },
        {
        title: "JavaScript Programming",
        issuer: "Dicoding Indonesia",
        year: "2024",
        description:
            "Mastered JavaScript ES6+, DOM Manipulation, Asynchronous Programming, Fetch API, and modular JavaScript.",
        verified: true,
        },
        {
        title: "React & Next.js Development",
        issuer: "Self Learning",
        year: "2025",
        description:
            "Studied React.js, Next.js App Router, TypeScript, Tailwind CSS, and modern web application development.",
        verified: false,
        },
        {
        title: "Machine Learning Fundamental",
        issuer: "Self Learning",
        year: "2025",
        description:
            "Learned Machine Learning fundamentals using Python, Pandas, Scikit-Learn, Random Forest, and XGBoost.",
        verified: false,
        },
    ],
  },

  contact: {
  badge: "Contact",
  heading: "Let's Work Together",
  description:
    "I'm open to opportunities as a Web Developer, Frontend Developer, Backend Developer, or Full Stack Developer. If you have a project or job opportunity, feel free to contact me.",

  info: {
    email: "Email",
    phone: "Phone",
    location: "Location",
  },

  socials: "Find Me On",

  form: {
    name: "Full Name",
    email: "Email",
    subject: "Subject",
    message: "Message",

    placeholders: {
      name: "Your name",
      email: "your@email.com",
      subject: "What's this about?",
      message: "Write your message...",
    },

    copy: "Copy",
    copied: "Copied",

    send: "Send Message",
    sending: "Sending...",
    success: "Message Sent ✓",
  },
},

footer:{
description:
"Full Stack Web Developer focused on building modern websites using Next.js, Laravel, TypeScript, Python, and MySQL.",

navigation:"Navigation",

contact:"Contact",

available:"Available for freelance work",

rights:" All rights reserved.",

backTop:"Back to top"
},

  button: {
    projects: "View Projects",
    contact: "Contact Me",
    cv: "Download CV",
  },
};

export default en;