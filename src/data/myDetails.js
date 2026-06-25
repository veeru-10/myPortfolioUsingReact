import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { IoIosSchool } from "react-icons/io";

const navLinks = [
  {
    id: '1',
    NavIcon: FaHome,
    title : "Home",
    link : "home",
  },
  {
    id: '2',
    NavIcon: BsFillPersonFill,
    title : "About",
    link : "about",
  },
  {
    id: '3',
    NavIcon: FaFreeCodeCamp,
    title : "Projects",
    link : "projects",
  },
  {
    id: '4',
    NavIcon: IoIosSchool,
    title: "Education",
    link: "education",
  },
  {
    id: '5',
    NavIcon: BiSolidContact,
    title: "Contact",
    link: "contact",
  },
]

const edcutionDetails = [
  {
    role: "Degree",
    name: "Hindustan Institute of technology and science",
    course: "BTech - CSE",
    year : "2022 - 2026",
    percentage : "CGPA - 8.69",
    location : "Padur, Chennai, Tamilnadu - 603103"
  },
  {
    role: "Intermediate",
    name: "Sri Chaitanya JR college",
    course: "MPC",
    year : "2020 - 2022",
    percentage : "percentage - 96%",
    location: "Guntur, Amaravathi, Andhra pradesh - 522007"
  },
  {
    role: "Schooling",
    name: "Kerala Modal School",
    course: "10th state syllabus",
    year : "2019 - 2020",
    percentage : "percentage - 97%",
    location: "Amaravathi, Amaravathi, Andhra pradesh - 522020"
  },
]


import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const iconItems = [
  {
    id: '1',
    Icon: FaInstagram,
    link : "https://www.instagram.com/veeru_naidu_jsp/",
    color: "hover:text-pink-500",
    name: "Instagram"
  },
  {
    id: '2',
    Icon: FaGithub,
    link : "https://github.com/veeru-10",
    color: "hover:text-black dark:hover:text-white/50",
    name: "Github"
  },
  {
    id: '3',
    Icon: FaLinkedinIn,
    link : "https://www.linkedin.com/in/veeranjini/",
    color: "hover:text-cyan-500",
    name: "LinkedIn"
  },
  {
    id: '4',
    Icon: SiLeetcode,
    link : "https://leetcode.com/u/Veeranjini/",
    color: "hover:text-amber-500",
    name: "Leetcode"
  },
]

const projectInfos = [
  {
    title: "Foodiefix-React",
    disc: "Developed a production-ready food ordering web application using React.js and Tailwind CSS with a fully responsive UI for mobile, tablet, and desktop. Implemented advanced React features such as HOC, Context API (useContext), React Router, lifting state up, form handling, and smooth animations to create a scalable, native-app-like user experience.",
    techs: ["React.png", "Tailwind CSS.png", "Git.png"],
    preview: "https://foodie-fix.vercel.app/",
    github: "https://github.com/veeru-10/foodieFix",
    img: "/screenshots/foodieFix.png",
    alt: "ScreenShot of the Project"
  },
  {
    title: "Foodiefix-JavaScript",
    disc: "Developed a responsive food discovery and filtering application using HTML, CSS, and JavaScript, featuring asynchronous API data fetching, real-time search, dynamic filtering, DOM manipulation, and dark mode support. Served as the foundational prototype for a production-ready React food ordering platform.",
    techs: ["HTML5.png", "CSS3.png", "JavaScript.png", "Bootstrap.png", "Git.png"],
    preview: "https://veeru-10.github.io/data-fetching-task/",
    github: "https://github.com/veeru-10/data-fetching-task",
    img: "/screenshots/foodieFixJs.png",
    alt: "ScreenShot of the Project"
  },
  {
    title: "ShopingStore-JavaScript",
    disc: "Built a responsive e-commerce application using HTML, CSS, Bootstrap and JavaScript featuring product browsing, dynamic search and filtering, shopping cart management, and asynchronous API integration. Implemented DOM manipulation, event handling, and client-side state management to deliver an interactive online shopping experience.",
    techs: ["HTML5.png", "CSS3.png", "JavaScript.png", "Bootstrap.png", "Git.png"],
    preview: "https://veeru-10.github.io/shoppingStoreProject/",
    github: "https://github.com/veeru-10/shoppingStoreProject",
    img: "/screenshots/shoppingStore.png",
    alt: "ScreenShot of the Project"
  },
  {
    title: "Portfolio",
    disc: "Designed and developed a responsive multi-page portfolio website using HTML5 and CSS3, featuring custom animations, smooth transitions, interactive navigation, and modern UI design principles. This project served as my first complete web development project and established a strong foundation in frontend development and responsive web design.",
    techs: ["HTML5.png", "CSS3.png", "Git.png"],
    preview: "https://veeru-10.github.io/Portfolio/",
    github: "https://github.com/veeru-10/Portfolio",
    img: "/screenshots/portfolioHtml.png",
    alt: "ScreenShot of the Project"
  },
]

const skills = [
    {
      url : '/HTML5.png',
      skill : "HTML"
    },
    {
      url : '/CSS3.png',
      skill : "CSS"
    },
    {
      url : '/JavaScript.png',
      skill : "JavaScript"
    },
    {
      url : '/React.png',
      skill : "React"
    },
    {
      url : '/Bootstrap.png',
      skill : "Bootstrap"
    },
    {
      url : '/Tailwind CSS.png',
      skill : "Tailwind CSS"
    },
    {
      url : '/Java.png',
      skill : "Java"
    },
    {
      url : '/MySQL.png',
      skill : "MySQL"
    },
    {
      url : '/Git.png',
      skill : "Git"
    },
  ]

const strengths = ["WebDevelopment", "Knowledge Seeker", "MERN", "Problem Sloving", "CSE Student"]

export {edcutionDetails, navLinks, iconItems, projectInfos, skills, strengths}