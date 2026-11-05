export const projectsData = [
  {
    id: 'aanibiz-erp',
    title: 'Aanibiz ERP System',
    badge: 'Production Flagship',
    category: 'Enterprise ERP',
    tagline: 'High-throughput enterprise resource planning platform powering mission-critical commerce operations.',
    shortDescription: 'Enterprise ERP platform handling sales and purchase workflows, multi-warehouse inventory management, invoicing, and real-time financial ledgers.',
    description: 'Designed and developed mission-critical full stack modules for a live production enterprise ERP at Aanirids Technologies. Built comprehensive sales order and purchase order pipelines, automated stock deduction and multi-warehouse inventory management, and integrated double-entry financial ledgers. Optimized MySQL indexing and schema normalization to reduce API response latency by 35% and critical system errors by 50%. Implemented secure role-based access control (RBAC) and structured JWT sessions across 15+ Express.js endpoints.',
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Tailwind CSS', 'JWT & RBAC'],
    githubUrl: 'https://github.com/IsmailMainal',
    liveUrl: null,
    isFlagship: true,
    keyFeatures: [
      'End-to-end sales & purchase order lifecycle (Draft, Approved, Dispatched, Invoiced)',
      'Multi-warehouse inventory synchronization with real-time stock allocation rules',
      'Double-entry financial accounting ledgers and customer statement reconciliations',
      'Granular Role-Based Access Control (RBAC) with hierarchical user permissions',
      'Statutory GST calculations, tax breakdown tables, and printable invoice documents'
    ],
    technicalHighlights: [
      '15+ secure RESTful API endpoints engineered with Express.js and centralized error handling',
      'Composite indexing and query normalization cutting database query execution times by 35%',
      'Single-page architecture built with React.js, TypeScript, Context API, and Tailwind CSS'
    ],
    metrics: [
      { label: 'Latency Cut', value: '-35%' },
      { label: 'Error Reduction', value: '-50%' },
      { label: 'User Efficiency', value: '+40%' }
    ]
  },
  {
    id: 'aanibiz-compliance-gateway',
    title: 'Aanibiz Compliance Gateway & Licensing Engine',
    badge: 'Statutory Infrastructure',
    category: 'API Gateway',
    tagline: 'Statutory tax compliance gateway with two-phase transactional credit ledgers and device-fingerprinted licensing.',
    shortDescription: 'Multi-tenant statutory GST compliance gateway automating real-time E-Invoicing (IRN) and E-Way Bill generation via government GSP/NIC APIs with Razorpay billing.',
    description: 'Engineered an intermediate statutory API gateway that bridges enterprise ERP systems with government GSP and NIC endpoints. Integrated real-time E-Invoicing (IRN generation) and E-Way Bill workflows. Designed a resilient transactional credit ledger utilizing two-phase atomic reservation and automated rollback to prevent credit leaks during external tax portal timeouts. Automated hardware-fingerprinted license validation with background expiry jobs and Razorpay subscription billing.',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'Prisma ORM', 'MySQL', 'Government GSP APIs', 'Razorpay'],
    githubUrl: 'https://github.com/IsmailMainal',
    liveUrl: null,
    isFlagship: false,
    keyFeatures: [
      'Direct integration with statutory government GSP/NIC APIs for automated IRN generation',
      'Two-phase transactional credit ledger with pessimistic locking to guarantee zero credit drift',
      'Hardware-fingerprinted client license authentication and scheduled automated expiry lifecycles',
      'Multi-tenant API isolation with hashed HMAC key authentication across test and live modes',
      'Automated Razorpay recurring subscription billing and license renewal webhooks'
    ],
    technicalHighlights: [
      'Zero ledger discrepancy guarantee during external government gateway rate limits and downtime',
      'Scheduled background cron tasks for licensing lifecycle tracking and usage telemetry'
    ],
    metrics: [
      { label: 'ACID Consistency', value: '100%' },
      { label: 'Ledger Rollbacks', value: 'Automated' },
      { label: 'Multi-Tenancy', value: 'Isolated' }
    ]
  },
  {
    id: 'online-examination',
    title: 'Online Examination & Assessment Platform',
    badge: 'Full Stack Web App',
    category: 'Web Application',
    tagline: 'Secure web assessment portal with real-time test timer sync, dynamic question banks, and instant grading.',
    shortDescription: 'Full-stack online assessment application featuring candidate authorization, randomized exam generation, countdown timers, and automated score computation.',
    description: 'Developed an interactive online examination system designed to conduct secure academic and corporate tests. Features role separation between instructors and candidates. Instructors can curate question banks, set category weightages, and configure time windows. Candidates experience a distraction-free test interface with client-side countdown clocks synchronized with server session timestamps, auto-save answer states, and instant automated grading upon submission.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/IsmailMainal',
    liveUrl: null,
    isFlagship: false,
    keyFeatures: [
      'Candidate dashboard with registered tests, pending evaluations, and score reports',
      'Real-time examination interface with countdown timer and question navigation grid',
      'Instructor question bank manager supporting multiple-choice, true/false, and short answers',
      'Automated answer grading engine with instant analytics and percentage score cards',
      'Session tamper detection with auto-submission on timer expiration'
    ],
    technicalHighlights: [
      'Optimized React state to prevent re-renders when updating rapid second-interval countdowns',
      'Normalized relational database structure storing question relations, options, and candidate answer logs'
    ],
    metrics: [
      { label: 'Grading Speed', value: 'Instant' },
      { label: 'State Sync', value: 'Real-time' }
    ]
  },
  {
    id: 'pet-shop-mgmt',
    title: 'Pet Shop Management System',
    badge: 'Retail & Inventory',
    category: 'Full Stack',
    tagline: 'Comprehensive pet boutique operations suite — inventory controls, adoption profiles, and POS order management.',
    shortDescription: 'Operational dashboard managing catalog listings, dry stock inventory thresholds, customer profiles, and point-of-sale orders with Express.js and MySQL.',
    description: 'Built a full stack operational suite for commercial pet stores and adoption centers. Combines a public customer-facing catalog with an administrative back-office dashboard. Facilitates real-time inventory adjustments, pet vaccination records, and POS order checkout. Designed 10+ RESTful CRUD endpoints backed by a normalized MySQL relational schema.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'REST APIs'],
    githubUrl: 'https://github.com/IsmailMainal/Pet-mart',
    liveUrl: null,
    isFlagship: false,
    keyFeatures: [
      'Interactive animal adoption catalog with medical records and photo galleries',
      'Real-time pet care inventory tracking with low-stock alerts and supplier logs',
      'Customer checkout pipeline with invoice generation and order history',
      'Responsive administrative dashboard with sales summaries and category breakdown'
    ],
    technicalHighlights: [
      '10+ Express.js CRUD endpoints with input validation and centralized error handling',
      'Clean component modularity in React with reusable table grids and search filters'
    ],
    metrics: [
      { label: 'CRUD Endpoints', value: '10+' },
      { label: 'Schema State', value: 'Normalized' }
    ]
  },
  {
    id: 'bank-mgmt',
    title: 'Bank Management System',
    badge: 'Core Backend System',
    category: 'Backend Architecture',
    tagline: 'High-integrity Java backend simulating commercial banking with JDBC connection pooling and ACID transactional safety.',
    shortDescription: 'Secure software application managing user registrations, deposits, atomic fund transfers, and balance audits using Java, MySQL, JDBC, and OOP design patterns.',
    description: 'Constructed an OOP-based core banking application in Java using JDBC for MySQL persistent data access. Implemented strict exception-handling routines, database transaction controls (commit and rollback boundaries), and atomic balance validations before completing deposits and peer transfers. Applied the Data Access Object (DAO) pattern to maintain separation between business logic and database persistence.',
    tags: ['Java', 'MySQL', 'JDBC', 'OOP', 'ACID Transactions', 'DAO Pattern'],
    githubUrl: 'https://github.com/IsmailMainal',
    liveUrl: null,
    isFlagship: false,
    keyFeatures: [
      'Account creation, KYC detail logging, and authentication credentials hashing',
      'Atomic fund transfers between accounts with strict precondition checks preventing overdrafts',
      'Transaction history auditing with timestamped debit/credit statements',
      'Comprehensive exception handling preventing corrupt database writes during mid-transfer failures'
    ],
    technicalHighlights: [
      'ACID transaction guarantees using JDBC manual commit and rollback triggers',
      'Robust DAO architecture isolating SQL query definitions from core business logic'
    ],
    metrics: [
      { label: 'Integrity', value: '100% ACID' },
      { label: 'Architecture', value: 'DAO Pattern' }
    ]
  },
  {
    id: 'school-portal',
    title: 'School Management & Information Portal',
    badge: 'Institution Platform',
    category: 'Web Platform',
    tagline: 'Clean institutional platform streamlining admissions, academic calendars, notices, and department directories.',
    shortDescription: 'Modern responsive school website and administrative portal connecting students, parents, and faculty with notice broadcasts and department directories.',
    description: 'Designed and deployed a responsive educational institution platform. Built to replace paper notices and disjointed communication channels with a central web portal. Includes an interactive admissions enquiry system, department and faculty directories, academic calendar notifications, and event galleries. Structured for rapid page loading and clear legibility across desktop, tablet, and mobile browsers.',
    tags: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
    githubUrl: 'https://github.com/IsmailMainal',
    liveUrl: null,
    isFlagship: false,
    keyFeatures: [
      'Interactive online admissions enquiry form with validation and email triggers',
      'Digital notice board with urgent alerts and downloadable academic schedules',
      'Faculty directory organized by academic departments with contact details',
      'High-performance responsive image gallery showcasing campus activities and achievements'
    ],
    technicalHighlights: [
      'Zero layout shift (CLS) design with optimized responsive media queries',
      'Accessible semantic HTML structure adhering to WCAG standards'
    ],
    metrics: [
      { label: 'Accessibility', value: 'WCAG AA' },
      { label: 'Mobile Score', value: '100%' }
    ]
  }
];
