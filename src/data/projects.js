import {
  petsmartHero,
  petsmartProducts,
  petsmartServices,
  petsmartReports
} from '../assets';


/**
 * Detailed Projects data for Ismail Mainal.
 * Richly populated with technical specifics (ACID, Sequelize, Socket.io, JDBC, Cryptography) to attract technical recruiters and HR.
 */
export const projectsData = [
  {
    id: 'pet-shop-mgmt',
    title: 'Pet Shop Management System',
    category: 'Full Stack',
    shortDescription: 'Full stack web app for pet shop operations — listings, inventory, profiles, and orders.',
    description: 'Full stack web app for pet shop operations — listings, inventory, customer profiles, and orders with REST API backend and React.js SPA frontend. Built 10+ Express.js CRUD endpoints, normalized MySQL schema, and responsive Tailwind CSS UI with input validation.',
    image: petsmartHero,
    images: [petsmartHero, petsmartProducts, petsmartServices, petsmartReports],
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/IsmailMainal/Pet-mart',
    problem: 'Pet stores need unified inventory tracking, customer profiles, and rapid order processing in a modern SPA layout.',
    solution: 'Engineered an Express.js backend with normalized MySQL database design and a responsive React.js SPA interface styled with Tailwind CSS.',
    architecture: 'React.js SPA frontend connected to Node.js/Express.js REST API with normalized MySQL relational storage.',
    challenges: 'Designing transactional inventory updates and synchronized order processing.',
    learnings: 'Mastered component-based SPA architecture, Express API design, and Tailwind CSS styling.'
  },
  {
    id: 'recruitment-mgmt',
    title: 'Recruitment Management App',
    category: 'Full Stack',
    shortDescription: 'End-to-end recruitment pipeline — job postings, candidate tracking, and dashboards.',
    description: 'End-to-end recruitment pipeline featuring job postings, candidate tracking, and review dashboards with REST API integration. Automated hiring workflows using async/await API calls, reducing manual HR effort by 30% and improving pipeline visibility.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['JavaScript ES6+', 'REST APIs', 'Async/Await', 'Component Architecture'],
    githubUrl: 'https://github.com/IsmailMainal',
    problem: 'Manual HR applicant tracking is prone to errors, slow response times, and poor pipeline visibility.',
    solution: 'Constructed an automated applicant tracking web app with async API integrations and modular component architecture.',
    architecture: 'Modular JavaScript component-based frontend with asynchronous REST API integrations.',
    challenges: 'Optimizing async request sequences to handle real-time status transitions smoothly.',
    learnings: 'Deepened mastery of modern JavaScript ES6+, async/await flows, and component architecture.'
  },
  {
    id: 'bank-mgmt',
    title: 'Bank Management System',
    category: 'Backend',
    shortDescription: 'Secure banking app with Registration, Login, Money Transfer, and Balance Enquiry.',
    description: 'Secure banking app with Registration, Login, Money Transfer, and Balance Enquiry using Java, MySQL, JDBC, and OOP patterns. Applied JDBC transaction management, input validation, and exception handling for secure and reliable data operations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'MySQL', 'JDBC', 'OOP', 'Exception Handling'],
    githubUrl: 'https://github.com/IsmailMainal',
    problem: 'Bank operations require strict atomic transaction controls. Inadequate balance checks before fund transfers lead to overdraft bugs.',
    solution: 'Constructed an OOP-based banking engine in Java using JDBC for MySQL persistent connections. Implemented strict exception-handling routines and atomic checks before completing deposits/transfers.',
    architecture: 'Object-oriented structure using design patterns (DAO pattern), separate presentation layers, and database connectors.',
    challenges: 'Safeguarding transactions against crashes during intermediate stages of credit/debit cycles.',
    learnings: 'Learned the importance of ACID properties, database index queries, and designing secure, exception-safe Java applications.'
  },
  {
    id: 'food-order',
    title: 'Food Order Website',
    category: 'Full Stack',
    shortDescription: 'Web app with user authentication, product browsing, and food ordering.',
    description: 'Web app with user authentication, product browsing, and food ordering using Java, MySQL, and JDBC database integration. Implemented session management, input validation, and error handling for secure and reliable user transaction flows.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'MySQL', 'JDBC', 'CRUD Operations'],
    githubUrl: 'https://github.com/IsmailMainal',
    problem: 'Customers need a seamless way to browse menus and place orders online securely.',
    solution: 'Built a web-based ordering platform with secure user authentication, interactive product catalogs, and a robust Java backend for processing orders.',
    architecture: 'Client-server architecture utilizing JavaScript for interactive frontend components and Java/JDBC for backend database transactions.',
    challenges: 'Handling concurrent user sessions and validating inputs effectively to prevent erroneous orders.',
    learnings: 'Gained solid expertise in session management, cross-layer communication, and robust data validation.'
  }
];
