import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Vue Developer",
    icon: web,
  },
  {
    title: "Others",
    icon: creator,
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
    name: "Vue js",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Redux",
    icon: redux,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    iconBg: "#383E56",
    date: "Sep 2022 - Fev 2023",
    points: [
      "I have strong experience in React js, I write websites in react js quickly and efficiently. ",
      "I recommend making multipage sites in react or vue rather than javascript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Vue Developer",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "I have strong experience in Vue js, I write websites in Vue js quickly and efficiently.",
      " I recommend making multipage sites in vue or react, not javascript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    iconBg: "#383E56",
    date: "Aug 2022 - Jan 2023",
    points: [
      "I create the Front part of various web applications.",
      "I will create the front part of the online store, Credit system, Educational system and other types of websites"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Umrzoq proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Umrzoq does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Umrzoq optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nisa App",
    description:
      "I further increased my knowledge of React js in this project. In this project, I sent the data from the form to email. In this project I worked with Scss, Bootstrap. I learned to hide the file structure further and write short code.To take a closer look at this application, click the git button above and take a closer look at the result.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://resum-app.netlify.app/img/work-2.png',
    source_code_link: "https://nisa-app.netlify.app/",
  },
  {
    name: "PentaGol App",
    description:
      "I did this project in Reactjs with the team when there was a competition in Salvation Education. This project allowed me to work with the team and improve my knowledge of git. Later, I also wrote this project in Vue js, I wrote it myself in vue and increased my knowledge of Vue js. i did tasks like send to backend.",
    tags: [
      {
        name: "splide.js",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://resum-app.netlify.app/img/fud.jpg',
    source_code_link: "https://github.com/yoldoshov2002/pentagoll.git",
  },
  {
    name: "Online shopping",
    description:
      "During this project I want to work with cookies and when there is a lot of data coming to the backend to show a certain part of them, i.e. the ones that were added later, and if the user wants to remove them all i asked when item comes in array .Also using Splidejs to extract data from ID, add to cart section, I learned how to filter and display products.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://resum-app.netlify.app/img/work-3.png',
    source_code_link: "https://github.com/yoldoshov2002/oline-shop.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
