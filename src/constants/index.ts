import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  inotes,
  threejs,
  voicevortex,
  talkBotix,
  effigoLogo,
  movie_app,
} from "../../src/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Design",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Product Engineer (SDE)",
    company_name: "Effigo Global",
    icon: effigoLogo,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Worked with an 8-member agile team, including testers and DevOps to meet project deadlines.",
      "Improved application performance by optimizing front-end code, reducing page load times and enhancing user experience across web applications.",
      "Engineered and maintained a role-based platform using React, integrated as iframes into the legacy JSP front-end, improving UI modularity and reducing maintenance effort by 20%.",
      "Superheaded a full-stack AI-driven chatbot application using React and FastAPI with Generative AI, reducing query resolution time by 40%.",
      "Designed and implemented user interfaces for AI-driven applications in collaboration with the AI team.",
    ],
  },
  {
    title: "Product Engineer Intern",
    company_name: "Effigo Global",
    icon: effigoLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2024",
    points: [
      "Created a custom form-builder tool for internal use with React for UI components and Java Spring Boot for APIs reducing developer hours by 75%.",
      "Programmed a proof of concept to address client-side vulnerabilities in a React application, implementing input sanitization and secure iframe communication, reducing security risks by 25%.",
      "Implemented an interactive dashboard for company POCs with real-time data visualization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TalkBotix",
    description:
      "TalkBotix is your personal full-stack AI-powered interview assistant designed to help users ace real-world job interviews through realistic, voice-driven mock interviews.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Vapi",
        color: "blue-text-gradient",
      },
    ],
    image: talkBotix,
    source_code_link: "https://github.com/Vixen-1/TalkBotix",
  },
  {
    name: "VoiceVortex",
    description:
      "A FastAPI-based chatbot using LangChain and Hugging Face LLM to answer queries via MongoDB Atlas with vector search. Features include semantic query processing, popular question tracking, and keyword search, integrated with a React frontend.",
    tags: [
      {
        name: "FastApi",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "LLM",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: voicevortex,
    source_code_link: "https://github.com/Vixen-1/VoiceVortex",
  },
  {
    name: "WatchWarden",
    description:
      "A movie discovery app that showcases real-time trending films based on popular searches and personalized recommendations on the home page. Users can search for favorites, with a popularity algorithm highlighting top-searched movies.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "nativewind",
        color: "green-text-gradient",
      },
      {
        name: "Appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: movie_app,
    source_code_link: "https://github.com/Vixen-1/WatchWarden",
  },
  {
    name: "TaskBeacon",
    description:
      "A Notes Management Application enabling users to securely create, update, and delete personal notes with real-time state management. Built with React, TypeScript, and Material-UI, it features user authentication, and seamless API integration.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: inotes,
    source_code_link: "https://github.com/Vixen-1/TaskBeacon",
  },
];

export { services, technologies, experiences, testimonials, projects };
