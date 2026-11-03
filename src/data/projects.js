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
 * Richly populated with technical specifics (ACID, GSP APIs, Prisma, Pessimistic Locking, JWT, RBAC, Rest APIs).
 */
export const projectsData = [
  {
    id: 'aanibiz-erp',
    title: 'Aanibiz ERP',
    category: 'Full Stack',
    shortDescription: 'Live production enterprise ERP platform covering invoicing, inventory, stock management, and financial ledgers.',
    description: 'Developed and maintained full stack modules for a live production ERP covering invoicing, inventory, stock management, and financial ledger workflows at Aanirids Technologies. Designed and built 15+ RESTful API endpoints in Express.js with structured error handling, JWT authentication, and RBAC; optimized MySQL queries with indexing, improving API response time by 35% and reducing critical errors by 50%. Built responsive React.js SPA modules with TypeScript, Hooks, Context API, and Tailwind CSS, enabling real-time dashboard updates and improving user task efficiency by 40%. Implemented an enterprise-grade GST compliance and accounting gateway supporting real-time E-Invoicing (IRN) and E-Way Bill generation, plus a secure multi-tenant licensing system using device fingerprinting and Razorpay subscription billing.',
    image: erpHero,
    images: [erpHero, erpFeatures, erpSandbox],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'REST APIs', 'JWT', 'RBAC', 'Razorpay'],
    githubUrl: 'https://github.com/IsmailMainal',
    problem: 'Growing enterprises require unified, zero-failure coordination between inventory management, multi-warehouse stock levels, automated invoicing, and statutory taxation ledgers without data inconsistency or slow response times.',
    solution: 'Engineered robust full-stack ERP modules with 15+ Express.js endpoints, optimized MySQL query indexing, responsive TypeScript/React SPA views, and automated hardware-fingerprinted licensing with Razorpay subscriptions.',
    architecture: 'Monolithic Express.js service following MVC architecture and RBAC middleware, backed by a normalized MySQL schema with composite indexing and connection pooling, paired with a modular React/TypeScript SPA frontend.',
    challenges: 'Synchronizing multi-warehouse inventory deductions with ledger balances and GST IRN invoice generation while maintaining sub-100ms API response latency.',
    learnings: 'Gained deep production mastery of complex ERP workflows, MySQL performance profiling, indexing strategies, and enterprise-grade multi-tenant architecture.'
  },
  {
    id: 'aanibiz-compliance',
    title: 'Aanibiz Compliance Gateway',
    category: 'Full Stack',
    shortDescription: 'Multi-tenant statutory GST compliance gateway & licensing platform integrating government GSP/NIC APIs.',
    description: 'Engineered a secure statutory API gateway integrating government GSP / NIC APIs to automate statutory GST compliance (E-Invoice IRN & E-Way Bills) and GSTR reporting for enterprise ERP clients. Designed a transactional credit ledger with atomic two-phase reservation and rollback, guaranteeing zero data inconsistency during external government gateway failures. Automated the client license lifecycle with scheduled expiry cron jobs, activation tracking, telemetry, hashed API keys (test/live environments), and role-based access control for complete tenant isolation.',
    image: erpSandbox,
    images: [erpSandbox, erpFeatures, erpHero],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma ORM', 'MySQL', 'GSP / NIC APIs', 'Razorpay', 'Tailwind CSS', 'Pessimistic Locking'],
    githubUrl: 'https://github.com/IsmailMainal',
    problem: 'Government tax portals (NIC/GSP) experience periodic downtime and strict rate limits. Direct ERP requests risk losing invoices, generating duplicate bills, or corrupting client balance ledgers during gateway failures.',
    solution: 'Engineered an intermediate statutory compliance gateway with a transactional credit ledger featuring atomic reservations and automated rollbacks, preventing loss of credits or duplicate invoice numbers. Integrated hardware-bound licensing telemetry and test/live API key environments.',
    architecture: 'Next.js 16 / Node.js API gateway utilizing Prisma ORM with MySQL pessimistic locking for credit ledger operations, scheduled background cron tasks for license expiry lifecycle, and HMAC/hashed API key validation for multi-tenant isolation.',
    challenges: 'Guaranteeing strict ACID consistency across distributed calls to government endpoints with unpredictable latency and sporadic timeout failures.',
    learnings: 'Mastered two-phase credit ledger transactions, pessimistic locking, hardware-fingerprinted licensing engines, and resilient third-party API gateway engineering.'
  },
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
    tags: ['React.js', 'JavaScript ES6+', 'Node.js', 'REST APIs', 'MySQL'],
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
