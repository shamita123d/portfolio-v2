import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
export const HERO_CONTENT = `A Computer Science and Engineering graduate and Full-Stack Java Developer passionate about building scalable web applications. Skilled in React, Java Spring Boot, and MySQL, I aim to deliver clean code, seamless user experiences, and make an impact. Eager to learn and contribute to innovative projects.`;

export const ABOUT_TEXT = `
      I’m Shamita Deogade, a Computer Science and Engineering graduate from Priyadarshini J.L. College of Engineering, Nagpur (2025), and a Full Stack Developer skilled in React, Angular, Java Spring Boot, and MySQL. I have hands-on experience building scalable, user-centric applications through internships and training programs. I thrive in collaborative environments, enjoy tackling complex problems, and aim to contribute to innovative projects that create real-world impact.
   `;
   
   export const ABOUT_TECH = [
     "Javascript",
     "React.js",
     "Angular","Tailwind CSS",
     "Java","Hibernate",
     "Spring Boot",
     "MySQL","Github"
   ];


export const EXPERIENCES = [
  {
    year: "2025",
    role: "Web Development Intern",
    company: "ICEICO Technologies",
    description: `Contributed to the development of web applications and worked closely with technologies to prioritize features and enhancements.`,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    year: "2024",
    role: "Full Stack Java Developer trainee",
    company: "Symbiosis Skill and Professional University",
    description: `Developed a scalable white-label payment gateway using Spring Boot, enhancing security, performance, and user experience while reducing reliance on third-party platforms. Built a robust backend enabling seamless integration with multiple payment methods.

`,
    technologies: [
      "Angular",
      "Spring Boot",
      "Spring Security",
      "MySQL",

      "Tailwind CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "FlexiMartX [Scalable Microservices-Based E-com Platform]",
    image: project2,
    description:
      "Developed an e-commerce platform with microservices architecture, product, cart, order, and payment services with a responsive React.js frontend, Spring Boot backend, containerised with Docker, Redis caching, and Kafka messaging.",
    technologies: [
      "React.js",
      "Springboot",
      "Mysql",
      "MongoDB",
      "Redis",
      "Kafka",
      "Docker"
    ],
    link: "https://github.com/shamita123d/FlexiMartX",
  },
  {
    title: "ResuRankify [AI-powered Resume Ranking System",
    image: project3,
    description:
      "•Developed an intelligent resume ranking system using NLP, BERT, SpaCy, and machine learning, with Flask backend,React frontend, and Streamlit for interactive UI to match candidate skills with job descriptions. ",
    technologies: [
      "NLP",
      "BERT",
      "SpaCy",
      " Flask",
      " React",
      "Streamlit",
      "Machine Learning",
    ],
    link: "https://github.com/shamita123d/ResuRankify",
  },
  {
    title: "Credenza [Online Banking System]",
    image: project4,
    description:
      "Developed a secure, full-stack, microservices-based online banking platform with account management, fund transfers,transaction history, analytics dashboards, JWT + Spring Security and containerised via Docker. ",
    technologies: [
      "Spring Boot",
      "React",
      " MySQL",
      "JWT",
      " Redis",
      "Kafka",
      "Chart.js"
    ],
    link: "https://github.com/shamita123d/Credenza",
  },
  {
    title: "Brumepad [Cloud-Based Code Editor]",
    image: project5,
    description:
      "Developed a cloud-native code editor with multi-language support, real-time collaboration via WebSockets, RESTfulAPIs, React frontend, Node.js backend, and deployed using Docker with CI/CD pipelines. ",
    technologies: [
      "React",
      "Node",
      "WebSocket",
      "Docker",
      "Rest Api",
      "CI/CD.",
    ],
    link: "https://github.com/shamita123d/BrumePad",
  },
];

export const QUALIFICATIONS = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "RTMNU",
    year: "2021 – 2025",
    grade: "8.18 CGPA",
    
  },
  {
    title: "12th (General Science)",
    institution: "Gujrati Girl's Jr College,Nagpur",
    year: "2020 – 2021",
    grade: "80.67%",
   
  },
  {
    title: "10th",
    institution: "JD Convent School, Nagpur",
    year: "2019",
    grade: "73%",
   
  },
];

export const ACHIEVEMENT = [
  {
    title: "Full stack Java Developer🏆",
    grade:
      "https://drive.google.com/drive/folders/1Wl8RgDreNrns5uIMCfW-8Ykrrgs55zDx",
  },
  {
    title: "Leetcode 50 days batch🎖️", 
    grade: "https://leetcode.com/u/shamita_deogade/",
  },
];

export const CONTACT = {
  address: "Nagpur,Maharashtra-440035 ",
  // phoneNo: "+91 8421965338 ",
  email: "shamitadeogade93@gmail.com",
};