import {
  erpHero,
  erpSandbox,
  erpFeatures,
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
    id: 'bank-mgmt',
    title: 'Bank Management System',
    category: 'Backend',
    shortDescription: 'Secure banking app with Registration, Login, Money Transfer, and Balance Enquiry.',
    description: 'Secure banking app with Registration, Login, Money Transfer, and Balance Enquiry using Core Java, MySQL, JDBC, OOP Design Patterns, and JUnit unit tests. Applied Collections Framework, JDBC transaction management, and input validation for reliable and secure data operations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Core Java', 'MySQL', 'JDBC', 'OOP', 'Design Patterns', 'JUnit'],
    githubUrl: 'https://github.com/IsmailMainal',
    problem: 'Bank operations require strict atomic transaction controls. Inadequate balance checks before fund transfers lead to overdraft bugs.',
    solution: 'Constructed an OOP-based banking engine in Java using JDBC for MySQL persistent connections. Implemented strict exception-handling routines and atomic checks before completing deposits/transfers.',
    architecture: 'Object-oriented structure using design patterns (DAO pattern), separate presentation layers, and database connectors.',
    challenges: 'Safeguarding transactions against crashes during intermediate stages of credit/debit cycles.',
    learnings: 'Learned the importance of ACID properties, database index queries, and designing secure, exception-safe Java applications.',
  },
  {
    id: 'online-exam',
    title: 'Online Examination System',
    category: 'Backend',
    shortDescription: 'Exam platform with test conduct, automated result computation, and admin CRUD.',
    description: 'Exam platform with test conduct, automated result computation, and admin CRUD using Java OOP, Design Patterns, and relational database design. Implemented role-based access for admin and student roles with structured MySQL schema and SQL query optimization.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'MySQL', 'SQL', 'DBMS', 'OOP', 'Admin Controls'],
    githubUrl: 'https://github.com/IsmailMainal',
    problem: 'Manual examination tracking and paper grading are slow and prone to errors. Role separation between students and admins is hard to enforce.',
    solution: 'Developed an automated examination platform with secure login portals for both admins and students. Structured relational databases to store questions and track student performance in real-time.',
    architecture: 'Java application with a relational database backbone, utilizing OOP concepts to encapsulate question entities and examination sessions.',
    challenges: 'Optimizing SQL queries to fetch random question sets efficiently for a large number of concurrent student sessions.',
    learnings: 'Gained advanced knowledge of SQL query optimization, Java collections, and role-based access control design.',
  },
  {
    id: 'pet-shop-mgmt',
    title: 'Pet Shop Management System',
    category: 'Full Stack',
    shortDescription: 'Full stack app with pet listings, inventory, and order processing.',
    description: 'Full stack app with pet listings, inventory, and order processing using Java, REST APIs, JDBC, and MySQL. Built with MVC architecture and layered service design. Integrated REST API endpoints for real-time data operations with full CRUD support and structured exception handling.',
    image: petsmartHero,
    images: [petsmartHero, petsmartProducts, petsmartServices, petsmartReports],
    tags: ['Java', 'MySQL', 'JDBC', 'REST APIs', 'MVC Architecture'],
    githubUrl: 'https://github.com/IsmailMainal/Pet-mart',
    problem: 'Pet stores often struggle with disjointed inventory tracking and sales processing systems.',
    solution: 'Engineered an integrated MVC-based system with automatic stock deduction upon invoice generation, and full CRUD support for pet and product listings.',
    architecture: 'Java backend adopting a Model-View-Controller (MVC) structure, connected to a MySQL database using JDBC. REST API endpoints exposed for real-time CRUD operations.',
    challenges: 'Designing transactional stock history timelines and mapping inventory changes accurately across different service layers.',
    learnings: 'Deepened skills in MVC application structure, writing structured exception handling, and exposing clean REST endpoints.',
  },
  {
    id: 'food-order',
    title: 'Food Order Website',
    category: 'Full Stack',
    shortDescription: 'Modular web app with user authentication, product browsing, and food ordering.',
    description: 'Modular web app with user authentication, product browsing, and food ordering using Java, JavaScript, MySQL, and JDBC. Implemented session management, input validation, and error handling for secure and reliable user transactions.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'MySQL', 'JDBC', 'JavaScript', 'CRUD Operations'],
    githubUrl: 'https://github.com/IsmailMainal',
    problem: 'Customers need a seamless way to browse menus and place orders online securely.',
    solution: 'Built a web-based ordering platform with secure user authentication, interactive product catalogs using JavaScript, and a robust Java backend for processing orders.',
    architecture: 'Client-server architecture utilizing JavaScript for interactive frontend components and Java/JDBC for backend database transactions.',
    challenges: 'Handling concurrent user sessions and validating inputs effectively to prevent erroneous orders.',
    learnings: 'Gained solid expertise in session management, cross-layer communication (JavaScript to Java), and robust data validation.',
  }
];
