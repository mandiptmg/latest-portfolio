import { CiHome } from "react-icons/ci";
import { BsPersonVcard } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiLaravel,
} from "react-icons/si";
import {
  FaProjectDiagram,
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaEnvelope,
} from "react-icons/fa";
// import { MdMiscellaneousServices } from 'react-icons/md'

export const headerData = [
  {
    title: "home",
    id: 1,
    icon: CiHome,
    link: "/",
  },
  {
    title: "about",
    id: 2,
    icon: BsPersonVcard,
    link: "/about",
  },
  // {
  //   title: 'service',
  //   id: 3,
  //   icon: MdMiscellaneousServices,
  //   link: '/service',
  // },
  {
    title: "portfolio",
    id: 4,
    icon: FaProjectDiagram,
    link: "/portfolio",
  },
  {
    title: "contact",
    id: 5,
    icon: IoIosContact,
    link: "/contact",
  },
];

export const iconData = [
  {
    title: "Facebook",
    id: 1,
    icon: FaFacebookSquare,
    link: "https://www.facebook.com/mandip.tamang.904/",
  },
  {
    title: "Instagram",
    id: 2,
    icon: FaInstagram,
    link: "https://www.instagram.com/mandiptamang125/",
  },
  {
    title: "GitHub",
    id: 3,
    icon: FaGithub,
    link: "https://github.com/mandiptmg",
  },
  {
    title: "LinkedIn",
    id: 4,
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/mandip-tamang",
  },
  {
    title: "Gmail",
    id: 5,
    icon: FaEnvelope,
    link: "mailto:mandiptamang159@gmail.com",
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "React",
    icon: FaReact,
    description: "Built a dynamic web application using React.",
  },
  {
    id: 2,
    title: "HTML5",
    icon: FaHtml5,
    description: "Designed and coded a responsive website using HTML5.",
  },
  {
    id: 3,
    title: "CSS3",
    icon: FaCss3,
    description: "Styled web pages with CSS3 for improved visual presentation.",
  },
  {
    id: 4,
    title: "JavaScript",
    icon: IoLogoJavascript,
    description: "Implemented interactive features using JavaScript.",
  },
  {
    id: 5,
    title: "Next.js",
    icon: TbBrandNextjs,
    description: "Developed a Next.js application for server-side rendering.",
  },
  {
    id: 6,
    title: "TypeScript",
    icon: SiTypescript,
    description: "Utilized TypeScript for type-safe JavaScript development.",
  },
  {
    id: 7,
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "Styled components with Tailwind CSS for rapid UI development.",
  },
  {
    id: 8,
    title: "Framer Motion",
    icon: SiFramer,
    description: "Created animations and interactive UIs with Framer Motion.",
  },
  {
    id: 9,
    title: "Redux Toolkit",
    icon: SiRedux,
    description: "Managed application state with Redux Toolkit.",
  },
  {
    id: 10,
    title: "Git",
    icon: FaGitAlt,
    description: "Utilized version control with Git for project management.",
  },
  {
    id: 11,
    title: "GitHub",
    icon: FaGithub,
    description: "Collaborated on projects and hosted repositories on GitHub.",
  },
  {
    id: 12,
    title: "Mongodb",
    icon: SiMongodb,
    description:
      "Integrated Mongodb for real-time database, auth, storage, enabling seamless dev.",
  },
  {
    id: 13,
    title: "Laravel",
    icon: SiLaravel,
    description:
      "Utilized Laravel for robust backend development, offering RESTful APIs and efficient routing.",
  },
  {
    id: 14,
    title: "MySQL",
    icon: SiMysql,
    description:
      "Leveraged MySQL for reliable data storage and management, ensuring optimal performance and security.",
  },
];

import amazon from "./../public/project/amazon.png";
import gym from "./../public/project/himalayanFit.png";
import journey from "./../public/project/journey.png";
import falcon from "./../public/project/falcon.png";
import furniVorgue from "./../public/project/furniVorgue.png";
import refract from "./../public/project/refract.png";
import moai from "./../public/project/moai.png";
import portfolio from "./../public/project/portfolio.png";
import csoft from "./../public/project/csoft.png";
import luxeNest from "./../public/project/luxeNest.png";
import excellence from "./../public/project/excellence.png";
import camera from "./../public/project/camera-portfolio.png";


export const projectData = [
  {
    id: 0,
    title: "Amazon Clone",
    img: amazon,
    link: "https://next-amazon-beta.vercel.app",
  },
  {
    id: 1,
    title: "Refract",
    img: refract,
    link: "https://refract-coral.vercel.app/",
  },
  {
    id: 2,
    title: "Moai",
    img: moai,
    link: "https://moai-six.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    img: portfolio,
    link: "https://karmalama.vercel.app/",
  },
  {
    id: 4,
    title: "HimalayanFitness Gym",
    img: gym,
    link: "https://himalayan-gym.vercel.app",
  },
  {
    id: 5,
    title: "Journey",
    img: journey,
    link: "https://journey-travel.vercel.app",
  },
  {
    id: 6,
    title: "Falcon Company",
    img: falcon,
    link: "https://falcon-car.vercel.app",
  },
  {
    id: 7,
    title: "FurniVorgue",
    img: furniVorgue,
    link: "https://furniVogue.vercel.app",
  },
  {
    id: 8,
    title: "Creation Soft Nepal",
    img: csoft,
    link: "https://creationsoftnepal.com.np/",
  },
  {
    id: 9,
    title: "LuxeNest",
    img: luxeNest,
    link: "https://luxe-nest.vercel.app/",
  },
  {
    id: 10,
    title: "Excellence Code Marketing",
    img: excellence,
    link: "https://excellence-code-llc.vercel.app/",
  },
   {
    id: 11,
    title: "Camera Portfolio",
    img: camera,
    link: "https://camera-portfolio-pi.vercel.app/",
  },
];

export const experiences = [
  {
    role: "Frontend Developer (Full-Stack Support)",
    company: "Excellence Code Marketing LLC, Business Bay, Dubai",
    period: "Jul 2025 – Present",
    responsibilities: [
      "Developed e-commerce, corporate, and marketing websites using React.js, Redux-Toolkit, JavaScript, SCSS, libraries, and Tailwind CSS.",
      "Built key e-commerce features including product catalogs, filtering, cart, checkout, and order tracking.",
      "Developed 30+ reusable UI components and integrated RESTful APIs for products, users, orders, and authentication.",
      "Implemented JWT authentication, protected routes, and role-based access control for secure applications.",
      "Improved code quality by reducing duplication by 35% and optimizing performance, responsiveness, and cross-browser compatibility.",
    ],
  },
  {
    role: "Frontend Developer (Full-Stack)",
    company: "Creation Soft Nepal, Kathmandu, Nepal",
    period: "Jun 2024 – Feb 2025",
    responsibilities: [
      "Developed client-facing web applications using React.js, JavaScript, Tailwind CSS, and Laravel.",
      "Integrated RESTful APIs and Laravel backend services to deliver dynamic and data-driven applications.",
      "Built reusable components, responsive interfaces, and role-based dashboards for business applications.",
      "Improved application performance using lazy loading, code splitting, and efficient state management.",
      "Collaborated with project managers and QA teams to deliver reliable features and production releases.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Creation Soft Nepal",
    period: "Mar 2024 – May 2024",
    responsibilities: [
      "Developed reusable and responsive UI components using React.js and Tailwind CSS.",
      "Improved application performance through code splitting and lazy loading.",
      "Contributed to an internal React component library for consistent UI development.",
      "Fixed UI issues, tested features, and participated in code reviews.",
    ],
  },
];
