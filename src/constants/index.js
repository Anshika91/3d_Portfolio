import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    scikit_learn,
    Portfolio,
    git,
    ml,
    figma,
    tripguide,
    threejs,
    face,
    python,
    tensorflow,
    keras,
    azure,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Works",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Python Developer",
        icon: python,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [{
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
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tensorflow",
        icon: tensorflow,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Keras",
        icon: keras,
    },
    {
        name: "Scikit_learn",
        icon: scikit_learn,
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
        name: "Microsoft Azure",
        icon: azure,
    },
];

const experiences = [{
        title: "Machine Learning Intern",
        company_name: "NullClass Technology",
        icon: ml,
        iconBg: "#383E56",
        date: "June 2023 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Created my Portfolio_website to dynamic showcase of your skills, achievements, and experiences, .",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
    {
        title: "Data Science Intern",
        company_name: "CodeClause",
        icon: ml,
        iconBg: "#E6DEDD",
        date: "March 2023 - April 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Creating Tic-Toc Clone React App .",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Oasis Infobyte",
        icon: web,
        iconBg: "#383E56",
        date: "February 2023 - March 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Anshika proved me wrong.",
        name: "Anshika Soni",
        designation: "Student",
        company: "JUET",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Anshika does.",
        name: "Ishant Sharma",
        designation: "Student",
        company: "JUET",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Anshika optimized my website, My traffic increased by 50%. We can't thank them enough!",
        name: "Anjali",
        designation: "Student",
        company: "BHU",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "3d_portfolio",
        description: "Developing and maintaining web applications using React.js and other related technologies. Created my Portfolio_website to dynamic showcase of your skills, achievements, and experiences,Implementing responsive design and ensuring cross-browser compatibility.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: Portfolio,
        source_code_link: "https://github.com/",
    },
    {
        name: "Facial_Expression Detector",
        description: "A facial expression detector is a technology or software designed to analyze and interpret human facial expressions. Using advanced image processing and machine learning algorithms,providing insights into emotional responses, user engagement, and sentiment analysis.",
        tags: [{
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "tensorflow",
                color: "green-text-gradient",
            },
            {
                name: "scikit_learn",
                color: "pink-text-gradient",
            },
        ],
        image: face,
        source_code_link: "https://github.com/Anshika91/NullClass",
    },
    {
        name: "Travlingly",
        description: "A travel and tour website✔ This is an travel and tour website which promotes digital guidance for the users. This will help users to continue their tours willingly irrespective of any situation or circumstances with all the available best resources. This initiative is to provide door to door education to the students, to educate each and every person of our country in the most flexible way.Front-End using: HTML, CSS AND JAVASCRIPT , BOOTSTRAP Back-End using: PHP/MYSQL.",
        tags: [{
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "css3",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/Anshika91/Travellinglly",
    },
    {
        name: "React_Projects",
        description: "An advice app built using React is a dynamic and interactive project that provides users with insightful and meaningful advice based on their question.",
        tags: [{
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "css3",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: reactjs,
        source_code_link: "https://github.com/Anshika91/React_Project",
    }
];

export { services, technologies, experiences, testimonials, projects };