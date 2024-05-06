import webDesign from "../assets/web design.jpg";

const serviceData = [
  {
    id: 1,
    section_title: "Software Development",
    section_desc:
      "Software engineering involves the design, development, testing, and maintenance of software systems. It encompasses a systematic and disciplined approach to creating software that meets specific requirements and is reliable, scalable, and maintainable.",
    services: [
      {
        id: 1,
        img: webDesign,
        title: "Web Design",
        price: 500,
      },
      {
        id: 2,
        img: webDesign,
        title: "Web Development",
        price: 1000,
      },
      {
        id: 3,
        img: webDesign,
        title: "Mobile Development",
        price: 1000,
      },
    ],
    category: "Software Development",
  },
  {
    id: 2,
    section_title: "Brand Identity",
    section_desc:
      "Brand identity is the visual and conceptual representation of a brand. It includes elements such as logo, color palette, typography, and other design elements that distinguish a brand and create a consistent and memorable visual presence.",
    services: [
      {
        id: 1,
        img: webDesign,
        title: "Logo Design",
        price: 500,
      },
      {
        id: 2,
        img: webDesign,
        title: "Bussiness Card",
        price: 1000,
      },
    ],
    category: "Brand Identity",
  },
  {
    id: 3,
    section_title: "Automation",
    section_desc:
      "Automation involves using technology to perform tasks or processes without human intervention. In a business context, it often refers to the use of software and tools to streamline and automate repetitive or manual tasks, improving efficiency and reducing errors.",
    services: [
      {
        id: 1,
        img: webDesign,
        title: "workflow automation",
        price: 500,
      },
      {
        id: 2,
        img: webDesign,
        title: "integration of software tools for seamless operations.",
        price: 1000,
      },
    ],
    category: "Automation",
  },
  {
    id: 4,
    section_title: "Digital Marketing",
    section_desc:
      "Digital marketing utilizes online channels to promote and advertise products or services. It includes a range of activities such as search engine optimization (SEO), pay-per-click (PPC) advertising, email marketing, and social media marketing to reach and engage a target audience.",
    services: [
      {
        id: 1,
        img: webDesign,
        title: "SEO optimization",
        price: 500,
      },
      {
        id: 2,
        img: webDesign,
        title: " PPC campaign management",
        price: 1000,
      },
    ],
    category: "Digital Marketing",
  },
  {
    id: 5,
    section_title: "Content and Social Media Management",
    section_desc:
      "Content creation involves the development of various forms of media, such as articles, videos, graphics, and more, to engage and inform a target audience. Social media management focuses on creating, scheduling, analyzing, and engaging with content posted on social media platforms.",
    services: [
      {
        id: 1,
        img: webDesign,
        title: "Content strategy",
        price: 500,
      },
      {
        id: 2,
        img: webDesign,
        title: "social media scheduling",
        price: 1000,
      },
    ],
    category: "Content and Social Media Management",
  },
];

export default serviceData;
