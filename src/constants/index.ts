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
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    inotes,
    jobit,
    tripguide,
    threejs,
    effigoLogo,
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
      title: "React Developer",
      icon: creator,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "UI/UX",
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
        "Over 1+ year of experience in designing and maintaining scalable web applications with role-based access in a Scrum-based agile environment leading a team of 3 interns.",
        "Built 2 core modules from scratch and upgraded 5 existing ones, optimizing UI/UX functionality.",
        "Streamlined data fetching with Next.js and Axios, reducing data latency by 30%.",
        "Improved front-end performance, cutting load times by 15% using lazy loading, code splitting, and Lighthouse audits.",
        "Refactored legacy code using OOP principles, boosting efficiency by 25%.",
        "Strengthened version control and CI/CD workflows using Git, GitHub, and automated pipelines.",
        "Conducted unit testing with Jest and collaborated with QA teams to develop validation plans."
      ],
    },
    {
      title: "Product Engineer Intern",
      company_name: "Effigo Global",
      icon: effigoLogo,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - May 2024",
      points: [
        "Built a custom form-builder tool (similar to Google Forms) for internal use, leveraging React for reusable UI components resulting in a 75% reduction in developer hours.",
        "Created an interactive dashboard for company POCs, integrating real-time data visualization.",
        "Deployed applications on AWS, ensuring scalability and reliability with 99.9% uptime.",
        "Engineered a Java Spring Boot Learning Portal for course management, utilizing PostgreSQL for efficient data handling.",
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
      name: "Movie Recommendor",
      description:
        "A movie discovery app that showcases real-time trending films and personalized recommendations on the home page. Users can search for favorites, with a popularity algorithm highlighting top-searched movies.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Nativewind",
          color: "green-text-gradient",
        },
        {
          name: "AppWrite",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Vixen-1/movie-recommendor",
    },
    {
      name: "I Notes Application",
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
      source_code_link: "https://github.com/Vixen-1/inotes",
    },
    {
      name: "AI Interview",
      description:
        "An AI-powered interview prep app where users upload resumes to generate tailored interview questions, answered via interaction with a lip-syncing 3D AI avatar. The app analyzes responses, providing a detailed performance report with improvement suggestions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
        {
          name: "Web Audio",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Vixen-1/AI-Avatar",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };