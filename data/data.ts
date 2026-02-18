import { CiHome } from 'react-icons/ci'
import { BsPersonVcard } from 'react-icons/bs'
import { IoLogoJavascript } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoIosContact } from 'react-icons/io'
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiLaravel
} from 'react-icons/si'
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
} from 'react-icons/fa'
// import { MdMiscellaneousServices } from 'react-icons/md'

export const headerData = [
  {
    title: 'home',
    id: 1,
    icon: CiHome,
    link: '/',
  },
  {
    title: 'about',
    id: 2,
    icon: BsPersonVcard,
    link: '/about',
  },
  // {
  //   title: 'service',
  //   id: 3,
  //   icon: MdMiscellaneousServices,
  //   link: '/service',
  // },
  {
    title: 'portfolio',
    id: 4,
    icon: FaProjectDiagram,
    link: '/portfolio',
  },
  {
    title: 'contact',
    id: 5,
    icon: IoIosContact,
    link: '/contact',
  },
]

export const iconData = [
  {
    title: 'Facebook',
    id: 1,
    icon: FaFacebookSquare,
    link: 'https://www.facebook.com/mandip.tamang.904/',
  },
  {
    title: 'Instagram',
    id: 2,
    icon: FaInstagram,
    link: 'https://www.instagram.com/mandiptamang125/',
  },
  {
    title: 'GitHub',
    id: 3,
    icon: FaGithub,
    link: 'https://github.com/mandiptmg',
  },
  {
    title: 'LinkedIn',
    id: 4,
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/mandip-tamang',
  },
  {
    title: 'Gmail',
    id: 5,
    icon: FaEnvelope,
    link: 'mailto:mandiptamang159@gmail.com',
  },
]

export const portfolioItems = [
  {
    id: 1,
    title: 'React',
    icon: FaReact,
    description: 'Built a dynamic web application using React.',
  },
  {
    id: 2,
    title: 'HTML5',
    icon: FaHtml5,
    description: 'Designed and coded a responsive website using HTML5.',
  },
  {
    id: 3,
    title: 'CSS3',
    icon: FaCss3,
    description: 'Styled web pages with CSS3 for improved visual presentation.',
  },
  {
    id: 4,
    title: 'JavaScript',
    icon: IoLogoJavascript,
    description: 'Implemented interactive features using JavaScript.',
  },
  {
    id: 5,
    title: 'Next.js',
    icon: TbBrandNextjs,
    description: 'Developed a Next.js application for server-side rendering.',
  },
  {
    id: 6,
    title: 'TypeScript',
    icon: SiTypescript,
    description: 'Utilized TypeScript for type-safe JavaScript development.',
  },
  {
    id: 7,
    title: 'Tailwind CSS',
    icon: SiTailwindcss,
    description:
      'Styled components with Tailwind CSS for rapid UI development.',
  },
  {
    id: 8,
    title: 'Framer Motion',
    icon: SiFramer,
    description: 'Created animations and interactive UIs with Framer Motion.',
  },
  {
    id: 9,
    title: 'Redux Toolkit',
    icon: SiRedux,
    description: 'Managed application state with Redux Toolkit.',
  },
  {
    id: 10,
    title: 'Git',
    icon: FaGitAlt,
    description: 'Utilized version control with Git for project management.',
  },
  {
    id: 11,
    title: 'GitHub',
    icon: FaGithub,
    description: 'Collaborated on projects and hosted repositories on GitHub.',
  },
  {
    id: 12,
    title: 'Mongodb',
    icon: SiMongodb,
    description:
      'Integrated Mongodb for real-time database, auth, storage, enabling seamless dev.',
  },
  {
  id: 13,
  title: 'Laravel',
  icon: SiLaravel, 
  description:
    'Utilized Laravel for robust backend development, offering RESTful APIs and efficient routing.',
},
{
  id: 14,
  title: 'MySQL',
  icon: SiMysql,
  description:
    'Leveraged MySQL for reliable data storage and management, ensuring optimal performance and security.',
}
]

import amazon from './../public/project/amazon.png'
import gym from './../public/project/himalayanFit.png'
import journey from './../public/project/journey.png'
import falcon from './../public/project/falcon.png'
import furniVorgue from './../public/project/furniVorgue.png'
import refract from './../public/project/refract.png'
import moai from './../public/project/moai.png'
import portfolio from './../public/project/portfolio.png'
import csoft from './../public/project/csoft.png'
import luxeNest from './../public/project/luxeNest.png'
import excellence from './../public/project/excellence.png'

export const projectData = [
  {
    id: 0,
    title: 'Excellence Code Marketing',
    img: excellence,
    link: 'https://excellence-code-llc.vercel.app/',
  },
  {
    id: 1,
    title: 'LuxeNest',
    img: luxeNest,
    link: 'https://luxe-nest.vercel.app/',
  },
  {
    id: 2,
    title: 'Creation Soft Nepal',
    img: csoft,
    link: 'https://creationsoftnepal.com.np/',
  },
  {
    id: 3,
    title: 'FurniVorgue',
    img: furniVorgue,
    link: 'https://furniVogue.vercel.app',
  },
  {
    id: 4,
    title: 'Falcon Company',
    img: falcon,
    link: 'https://falcon-car.vercel.app',
  },
  {
    id: 5,
    title: 'Journey',
    img: journey,
    link: 'https://journey-travel.vercel.app',
  },
  {
    id: 6,
    title: 'HimalayanFitness Gym',
    img: gym,
    link: 'https://himalayan-gym.vercel.app',
  },
  {
    id: 7,
    title: 'Portfolio',
    img: portfolio,
    link: 'https://karmalama.vercel.app/',
  },
  {
    id: 8,
    title: 'Moai',
    img: moai,
    link: 'https://moai-six.vercel.app/',
  },
  {
    id: 9,
    title: 'Refract',
    img: refract,
    link: 'https://refract-coral.vercel.app/',
  },
  {
    id: 10,
    title: 'Amazon Clone',
    img: amazon,
    link: 'https://next-amazon-beta.vercel.app',
  },
];




export const experiences = [
  {
    company: "Excellence Code Marketing LLC, Dubai",
    role: "Frontend Developer (Full-Stack Support)",
    period: "Jul 2025 – Present",
    responsibilities: [
      "Developed and maintained 30+ reusable, responsive UI components using React.js, SCSS, and Tailwind CSS.",
      "Collaborated with UI/UX designers and backend engineers to deliver 7+ production-ready features.",
      "Converted Figma designs into scalable and maintainable frontend architecture with consistent UI standards.",
      "Performed code reviews and refactored legacy components, reducing code duplication by approximately 35%.",
      "Integrated RESTful APIs and JWT-based authentication to support secure full-stack functionality.",
      "Ensured cross-browser compatibility and mobile responsiveness across all major devices.",
    ],
  },
  {
    company: "Creation Soft Nepal, Kathmandu",
    role: "Frontend Developer (Full-Stack as Required)",
    period: "Jun 2023 – Feb 2025",
    responsibilities: [
      "Led frontend development for multiple client-facing web applications using React.js and Tailwind CSS.",
      "Integrated frontend interfaces with Laravel-based backend services and REST APIs.",
      "Optimized application performance using component reuse, lazy loading, and efficient state management.",
      "Collaborated with project managers and QA teams to deliver stable, production-ready releases.",
      "Developed secure, role-based inventory management dashboards using React.js and Laravel.",
      "Implemented JWT and OAuth2 authentication to support multi-role access control (Admin, Staff, Manager).",
    ],
  },
  {
    company: "Creation Soft Nepal",
    role: "Key Project – Inventory Management System",
    period: "2024",
    responsibilities: [
      "Developed a secure, role-based inventory management dashboard using React.js and Laravel.",
      "Implemented JWT and OAuth2 authentication to enable multi-role access (Admin, Staff, Manager).",
      "Designed modular component architecture to improve maintainability and long-term scalability.",
      "Enhanced data visualization and reporting features to support business decision-making.",
    ],
  },
  {
    company: "Creation Soft Nepal",
    role: "Key Project – Dynamic Company Website with CMS",
    period: "2024",
    responsibilities: [
      "Built a responsive corporate website with a custom CMS using Laravel Blade and React.js.",
      "Designed and implemented an admin dashboard for non-technical content editors.",
      "Applied SEO best practices, image optimization, and performance tuning to improve page load speed.",
      "Ensured accessibility standards and mobile-first design principles across all pages.",
    ],
  },
  {
    company: "Creation Soft Nepal",
    role: "Frontend Developer Intern",
    period: "Mar 2023 – May 2023",
    responsibilities: [
      "Developed responsive UI components using React.js and Tailwind CSS.",
      "Improved application performance through code splitting and lazy loading techniques.",
      "Contributed to an internal UI component library to improve design consistency and development speed.",
      "Fixed UI bugs and participated in team code reviews to enhance overall code quality.",
    ],
  },
];
