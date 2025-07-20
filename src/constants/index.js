import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiTypescript,
  SiNextui,
  SiAntdesign,
  SiRedux,
  SiAdobephotoshop,
  SiSupabase,
  SiFirebase,
  SiHeadlessui,
  SiStrapi,
  SiAuthy,
  SiAppwrite,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiWebauthn,
  SiBitbucket,
  SiJira,
  SiGitlab,
} from "react-icons/si";

import { FaFigma, FaHardHat, FaRust, FaSass } from "react-icons/fa";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/13bx22HvoGMigJN70JrDsx_-Qz-Np9X2V/view?usp=sharing";

export const callToAction = "https://www.linkedin.com/in/akberov";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-2",
    icon: "https://atb.az/wp-content/uploads/2024/05/div_academy_logo.jpg",
    title: "Div Academy",
    degree: "Front-End Development",
    duration: "Oct 2023",
    content1: "• HTML5,CSS3,JavaScipt",
    content2: "• React.js,Tailwind CSS,Bootstrap,jQuery",
  },
  {
    id: "education-1",
    icon: "/bsu.jpeg",
    title: "Baku State University,Baku AZ",
    degree: "Bachelor of Computer Science",
    duration: "Sep 2021 - July 2025",
  },
];

// Add your past achievments here for example - rankings in hackathons/events

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-3",
        icon: SiNextdotjs,
        name: "NextJS",
      },

      {
        id: "f-3",
        icon: SiExpress,
        name: "ExpressJS",
      },
      {
        id: "f-3",
        icon: SiRedux,
        name: "Redux Toolkit",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-4",
        icon: FaSass,
        name: "SASS/SCSS",
      },
      {
        id: "f-4",
        icon: SiAntdesign,
        name: "Ant Design",
      },
      {
        id: "f-4",
        icon: SiNextui,
        name: "NextUI",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        id: "t-8",
        icon: SiMongodb,
        name: "MongoDb",
      },
      {
        id: "t-9",
        icon: SiRedis,
        name: "Redis",
      },
      
    ],
  },
  {
    title: "Project management",
    items: [
      {
        id: "t-8",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-9",
        icon: SiBitbucket,
        name: "Bitbucket",
      },
      
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: FaFigma,
        name: "Figma ",
      },
      {
        id: "t-1",
        icon: SiAdobephotoshop,
        name: "Adobe",
      },
      {
        id: "t-3",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "t-9",
        icon: SiWebauthn,
        name: "JWT",
      },
      {
        id: "t-3",
        icon: SiSupabase,
        name: "Supabase",
      },
      {
        id: "t-3",
        icon: SiStrapi,
        name: "Strapi",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiGitlab,
        name: "GitLab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "CRBN Tech",
    logo: "/crbn.jpeg",
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Front End Developer",
        duration: "Oct 2024 - June 2025",
        content: [
          {
            text: "• Developed responsive and interactive web interfaces for clients, using React and Tailwind CSS to enhance user engagement.",
            link: "",
          },
          {
            text: "• Developed and maintained deposit management systems, ensuring efficiency, security, and scalability.",
            link: "",
          },
          {
            text: "• Implemented payment systems with reCAPTCHA for enhanced security.",
            link: "",
          },
          {
            text: "• Integrated Swagger-based and FastAPI-based RESTful APIs, ensuring smooth data flow and alignment with client requirements.",
            link: "",
          },
          {
            text: "• Built an Al-based website, leveraging machine learning APIs to deliver intelligent user experiences.",
            link: "",
          },
          {
            text: "• Worked extensively with GitLab for version control and CI/CD pipelines.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "PROSOL QSC",
    logo: "/crbn.jpeg",
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Front End Developer Intern",
        duration: "Dec 2024 - Feb 2025",
        content: [
          {
            text: "• Developed and implemented new user interface components using Ant Design, with the tech stack being React and TypeScript.",
            link: "",
          },
          {
            text: "• Managed tasks and version control processes using Jira and Bitbucket tools.",
            link: "",
          },
          {
            text: "• Identified and fixed bugs in a cybersecurity platform, enhancing the application's stability, security, and overall performance.",
            link: "",
          },
          {
            text: "• Collaborated closely with the team to address challenges and contributed to solutions within Agile development methodologies.",
            link: "",
          },
          {
            text: "• Wrote clean, maintainable code in accordance with the provided documentation guidelines, adhering to best practices.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "OkMedia",
    logo: "/logo.jpeg",
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Front End Developer Intern",
        duration: "Sep 2024 – Oct 2024",
        content: [
          {
            text: "• Web Development: My team and I are responsible for building the user interface and the visual aspects of a website or web application.",
            link: "",
          },
          {
            text: "• This involves writing clean, efficient, and maintainable code using languages such as HTML, CSS, and JavaScript.",
            link: "",
          },
          {
            text: "• Implemented responsive design techniques to ensure that applications were mobile-friendly and compatible across different devices and browsers.",
            link: "",
          },
          {
            text: "• Participated in team meetings and code reviews to enhance my skills, gain feedback, and contribute to the continuous improvement of development practices within the team.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Upwork",
    logo: "/upwork.jpeg",
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Front End Developer Freelance",
        duration: "Jan 2024 – Oct 2024",
        content: [
          {
            text: "• Developed and maintained over 10 web applications that complied with client requirements and facilitated integration with third-party APIs",
            link: "",
          },
          {
            text: "• Collaborated closely with the CEO to understand project goals and align development with business objectives.",
            link: "",
          },
          {
            text: "• Implemented responsive design principles to ensure websites were mobile-friendly and accessible across various devices.",
            link: "",
          },
          {
            text: "• Utilized front-end technologies such as React, Tailwind CSS, and JavaScript to create interactive and visually appealing applications",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Uniic",
    link: "https://uniic.app/",
    image: "/uniic.png",
    content:
      "It's the first platform that actually finds people you're compatible with — across dating, friendship, travel, sports, and business.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-1",
    title: "4Pay",
    link: "https://4-payapp.vercel.app/",
    image: "/4pay.png",
    content:
      "Fast payment processing for your business.All popular payment methods for your business. Quick setup and secure payments worldwide.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-2",
    title: "Popcornopolis",
    github: "https://github.com/ElminAkberov/Popcornopolis-functional-website",
    link: "https://popcornopoliss.vercel.app/",
    image: "/pop.png",
    content:
      "An online popcorn sales website developed using React.js, Context API, and Tailwind CSS. The project features a responsive interface designed to allow users to easily select products and place orders",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-2",
    title: "Aloyna.az",
    link: "https://aloyna.vercel.app/",
    image: "/logo.png",
    content:
      "A platform for player trading, developed using Firebase,Auth, React.js, Tailwind CSS, and Redux. The project provides users with a seamless experience for buying and selling, featuring secure authentication and state management for efficient data handling",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-2",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "icon-2",
        icon: SiAuthy,
        name: "Auth",
      },
    ],
  },
  {
    id: "project-3",
    title: "Starbucks.az",
    github: "https://github.com/ElminAkberov/starbucks-az",
    link: "https://starbucksaz.vercel.app/",
    image:
      "https://i.pinimg.com/736x/18/22/50/182250d691fa645b86cc34d0947273f2.jpg",
    content:
      "A Starbucks clone website developed using React.js and Tailwind CSS with API integration. The project replicates the Starbucks website's design and functionality, providing a smooth, responsive user experience",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      ,
      {
        id: "icon-2",
        icon: SiAppwrite,
        name: "Api Integration",
      },
    ],
  },
  {
    id: "project-4",
    title: "Nio Cocktails",
    github: "",
    link: "https://cocktail-iota.vercel.app/",
    image: placeicon,
    content:
      "A cocktail recipe website developed using Next.js and Tailwind CSS with API integration. The project features a collection of cocktail recipes",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-1",
        icon: SiNextui,
        name: "Next UI",
      },
      {
        id: "icon-1",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    id: "project-4",
    title: "Porsche911-Parallax",
    github: "https://github.com/ElminAkberov/Porsche911Evo-Parallax",
    link: "https://porsche911-evo.vercel.app/",
    image: "https://thumbs.dreamstime.com/b/web-184786279.jpg",
    content: "All Porsche 911 models with Parallax effect.Modern and Simple",
    stack: [
      {
        id: "icon-1",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-1",
        icon: SiNextui,
        name: "Next UI",
      },
      {
        id: "icon-1",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    id: "project-4",
    title: "Qr-Code Maker",
    github: "https://github.com/ElminAkberov/QR-Code-maker",
    link: "https://elminakberov.github.io/QR-Code-maker/",
    image:
      "https://play-lh.googleusercontent.com/9HT3x5ccHcOdhBgLVsNEE6uV9tsCy4GJkoQ8SiJid6xxdhoZnXtyIVhyFEBzoRvAjc4",
    content: "Qr-Code Maker with links",
    stack: [
      {
        id: "icon-1",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "icon-1",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    id: "project-4",
    title: "Portfolio",
    github: "https://github.com/ElminAkberov/portfolio",
    image: "/Elmin Akberov.png",
    content: "My Portfolio Page; Source Code in GitHub link",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-1",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    id: "project-4",
    title: "CryptoLand",
    link: "https://trading-flame.vercel.app/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVYKvEh2y7RT7oJdj0PNJ1qJXRDouYifaAQ&s",
    content: "Crypto Land Landing Page",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-1",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/akberov",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/ElminAkberov",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:ekberovelmin04@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/_akberov_e",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Elmin Akberov",
  githubUsername: "ElminAkberov",
  tagLine: "Front-End Software Engineer | React JS | Next JS | Typescript",
  intro: "Hi There!, I'm a Frontend Software Engineer with over 2 years of experience specializing in JavaScript, TypeScript, React.js, and Next.js. Specialized in creating CRM-style dashboards,modern websites and high-converting landing pages.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
