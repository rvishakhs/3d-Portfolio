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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    netflix,
    news,
    ai,
} from "../assets";
import fullstack from "../assets/full-stack.png";
import devops from "../assets/agile.png";
import python from "../assets/python.svg";
import linux from "../assets/linux.png";
import net from "../assets/net.svg";
import kubernetes from "../assets/kubernetes.svg";
import aws from "../assets/aws.svg";
import django from "../assets/django.svg";
import sql from "../assets/sql.svg";
import bez from "../assets/bez.jpg";
import theo from "../assets/theo.jpg";
import sooraj from "../assets/sooraj.jpg";
import parpella from "../assets/parpella.png";

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
        title: "React Developer",
        icon: reactjs,
    },
    {
        title: "Python Developer",
        icon: python,
    },
    {
        title: "Full Stack Developer",
        icon: fullstack,
    },
    {
        title: "Devops engineer",
        icon: devops,
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
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: ". Net",
        icon: net,
    },
    {
        name: "kubernetes",
        icon: kubernetes,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "MySql",
        icon: sql,
    },
];

const experiences = [
    {
        title: "Junior Mern Stack Developer",
        company_name: "Allianz Technology",
        icon: starbucks,
        iconBg: "#383E56",
        date: "August 2021 - April 2023",
        points: [
            `Spearheaded the development of a dynamic web
            application utilizing MERN stack technology, resulting in a
            30% increase in user engagement and retention`,
            `Implemented a robust backend system using Node.js and
            MongoDB, allowing for seamless data management and
            efficient processing of user requests`,
            `Developed an intuitive user interface using React.js and
            Recoil, resulting in a 25% decrease in user bounce rate
            and increased customer satisfaction
            `,
            `Optimized website performance through effective
           database design and query optimization, resulting in a
           20% increase in website loading speed and improved
           overall user experience
           `,
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Parpella Pvt Ltd",
        icon: parpella,
        iconBg: "#E6DEDD",
        date: "February 2018 - june 2020",
        points: [
            `Built and deployed responsive, cross-browser compatible
            web applications using, HTML, and Css and JavaScript`,
            `Collaborated with senior developers to learn and
            implement best practices and coding standards in
            JavaScript development
            `,
            `Developed new features and optimized existing
           functionality on web applications using JavaScript
           frameworks`,
            `Participated in code reviews and implemented feedback
            from senior developers to improve code quality and
            maintainability
            `,
        ],
    },
];

const testimonials = [
    {
        testimonial: "You work extremely hard and I really appreciate it, so Thank you.                             ",
        name: "Besert Etemi",
        designation: "Manager",
        company: "Pret A Manger",
        image: bez,
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Theo Nebel",
        designation: "Asst Manager",
        company: "Pret A Manger",
        image: theo,
    },
    {
        testimonial: "Working with him was a joy; his exceptional time management and insatiable curiosity for new tech made him stand out.",
        name: "Sooraj ",
        designation: "Senior Dev",
        company: "Gama Security Systems",
        image: sooraj,
    },
];

const projects = [
    {
        name: "Netflix Clone",
        description: `The Netflix clone boasts optimized performance with Next.js and React, server-side rendering for faster loading times, and a user-friendly interface for easy access to favorite movies and TV shows. API integration enables convenient title searches, providing a seamless streaming experience that retains user engagement.Overall, this Netflix clone delivers a top-notch experience.`,
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
        image: netflix,
        source_code_link: "https://github.com/",
    },
    {
        name: "Live News",
        description: `Live News integrates API to categorize news articles by topic and region, with performance optimization via database and query optimization. As a reliable source of up-to-date news information, Live News offers an enhanced user experience with faster loading times.Also Users can easily access news articles from multiple sources and conveniently search for specific topics.

            `,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: news,
        source_code_link: "https://github.com/",
    },
    {
        name: "AI Image Generator",
        description: `Utilizing DALL-E API and Node.js, an AI image generator tool increases user engagement by 40% through personalized images. Researching and implementing the latest AI and image generation techniques has resulted in a 20% website performance increase and 15% user engagement increase, maintaining the tool's functionality while innovating.`,
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: ai,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
