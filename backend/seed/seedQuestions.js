const mongoose=require("mongoose");
const dotenv=require("dotenv");
const Question=require("../models/Question")

dotenv.config();

const questions = [
  {
    questionText: "What does MERN stand for?",
    options: [
      "MongoDB, Express.js, React, Node.js",
      "MySQL, Express, React, Node.js",
      "MongoDB, Express, Redux, Next.js",
      "MongoDB, Electron, React, Node.js"
    ],
    correctAnswer: "MongoDB, Express.js, React, Node.js",
    topic: "MERN Stack",
    subtopic: "Introduction",
    difficulty: "easy"
  },

  {
    questionText: "Which database is used in the MERN stack?",
    options: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Oracle"
    ],
    correctAnswer: "MongoDB",
    topic: "MongoDB",
    subtopic: "Introduction",
    difficulty: "easy"
  },

  {
    questionText: "Which technology is used to build the backend server in a MERN application?",
    options: [
      "React",
      "MongoDB",
      "Express.js with Node.js",
      "HTML"
    ],
    correctAnswer: "Express.js with Node.js",
    topic: "MERN Stack",
    subtopic: "Architecture",
    difficulty: "easy"
  },

  {
    questionText: "Which JavaScript runtime is used by Node.js applications?",
    options: [
      "Browser Runtime",
      "V8 Engine",
      "JVM",
      "Python Runtime"
    ],
    correctAnswer: "V8 Engine",
    topic: "Node.js",
    subtopic: "V8 Engine",
    difficulty: "easy"
  },

  {
    questionText: "Which command initializes a new Node.js project?",
    options: [
      "node init",
      "npm create",
      "npm init",
      "node start"
    ],
    correctAnswer: "npm init",
    topic: "Node.js",
    subtopic: "NPM",
    difficulty: "easy"
  },

  {
    questionText: "Which file contains information about a Node.js project's dependencies?",
    options: [
      "server.js",
      "package.json",
      "index.html",
      "config.js"
    ],
    correctAnswer: "package.json",
    topic: "Node.js",
    subtopic: "NPM",
    difficulty: "easy"
  },

  {
    questionText: "Which command installs a package in a Node.js project?",
    options: [
      "npm install",
      "node install",
      "npm add-package",
      "node package"
    ],
    correctAnswer: "npm install",
    topic: "Node.js",
    subtopic: "NPM",
    difficulty: "easy"
  },

  {
    questionText: "Which module is commonly used to create an HTTP server in Node.js?",
    options: [
      "http",
      "server",
      "express-only",
      "request"
    ],
    correctAnswer: "http",
    topic: "Node.js",
    subtopic: "HTTP Server",
    difficulty: "easy"
  },

  {
    questionText: "What is Express.js?",
    options: [
      "A database",
      "A JavaScript frontend library",
      "A web framework for Node.js",
      "A programming language"
    ],
    correctAnswer: "A web framework for Node.js",
    topic: "Express.js",
    subtopic: "Introduction",
    difficulty: "easy"
  },

  {
    questionText: "Which method is used to define a GET route in Express.js?",
    options: [
      "app.fetch()",
      "app.get()",
      "app.request()",
      "app.routeGet()"
    ],
    correctAnswer: "app.get()",
    topic: "Express.js",
    subtopic: "Routing",
    difficulty: "easy"
  },

  {
    questionText: "Which method is used to define a POST route in Express.js?",
    options: [
      "app.send()",
      "app.post()",
      "app.create()",
      "app.insert()"
    ],
    correctAnswer: "app.post()",
    topic: "Express.js",
    subtopic: "Routing",
    difficulty: "easy"
  },

  {
    questionText: "What is middleware in Express.js?",
    options: [
      "A database",
      "A function that has access to request and response objects",
      "A frontend component",
      "A MongoDB collection"
    ],
    correctAnswer: "A function that has access to request and response objects",
    topic: "Express.js",
    subtopic: "Middleware",
    difficulty: "medium"
  },

  {
    questionText: "Which function is used to continue execution to the next middleware?",
    options: [
      "next()",
      "continue()",
      "forward()",
      "nextMiddleware()"
    ],
    correctAnswer: "next()",
    topic: "Express.js",
    subtopic: "Middleware",
    difficulty: "easy"
  },

  {
    questionText: "Which Express middleware is used to parse JSON request bodies?",
    options: [
      "express.json()",
      "express.body()",
      "express.parse()",
      "express.request()"
    ],
    correctAnswer: "express.json()",
    topic: "Express.js",
    subtopic: "Middleware",
    difficulty: "easy"
  },

  {
    questionText: "Which HTTP status code represents a successful request?",
    options: [
      "200",
      "400",
      "404",
      "500"
    ],
    correctAnswer: "200",
    topic: "Express.js",
    subtopic: "HTTP Status Codes",
    difficulty: "easy"
  },

  {
    questionText: "Which HTTP status code represents 'Not Found'?",
    options: [
      "200",
      "201",
      "404",
      "500"
    ],
    correctAnswer: "404",
    topic: "Express.js",
    subtopic: "HTTP Status Codes",
    difficulty: "easy"
  },

  {
    questionText: "Which HTTP status code represents an internal server error?",
    options: [
      "201",
      "301",
      "404",
      "500"
    ],
    correctAnswer: "500",
    topic: "Express.js",
    subtopic: "HTTP Status Codes",
    difficulty: "easy"
  },

  {
    questionText: "What is MongoDB?",
    options: [
      "A relational database",
      "A NoSQL document database",
      "A frontend framework",
      "A Node.js package"
    ],
    correctAnswer: "A NoSQL document database",
    topic: "MongoDB",
    subtopic: "Introduction",
    difficulty: "easy"
  },

  {
    questionText: "What format does MongoDB primarily use to store documents?",
    options: [
      "XML",
      "JSON-like BSON",
      "CSV",
      "HTML"
    ],
    correctAnswer: "JSON-like BSON",
    topic: "MongoDB",
    subtopic: "Documents",
    difficulty: "easy"
  },

  {
    questionText: "What is a collection in MongoDB?",
    options: [
      "A group of databases",
      "A group of documents",
      "A single field",
      "A JavaScript function"
    ],
    correctAnswer: "A group of documents",
    topic: "MongoDB",
    subtopic: "Collections",
    difficulty: "easy"
  },

  {
    questionText: "What is a document in MongoDB?",
    options: [
      "A row in a SQL table",
      "A JSON-like record",
      "A database connection",
      "A JavaScript class"
    ],
    correctAnswer: "A JSON-like record",
    topic: "MongoDB",
    subtopic: "Documents",
    difficulty: "easy"
  },

  {
    questionText: "Which method is used to insert one document into a MongoDB collection?",
    options: [
      "insertOne()",
      "addOne()",
      "createDocument()",
      "insertDocument()"
    ],
    correctAnswer: "insertOne()",
    topic: "MongoDB",
    subtopic: "CRUD",
    difficulty: "easy"
  },

  {
    questionText: "Which method is used to find documents in MongoDB?",
    options: [
      "find()",
      "search()",
      "select()",
      "getDocuments()"
    ],
    correctAnswer: "find()",
    topic: "MongoDB",
    subtopic: "CRUD",
    difficulty: "easy"
  },

  {
    questionText: "Which method is used to update one MongoDB document?",
    options: [
      "updateOne()",
      "changeOne()",
      "modifyDocument()",
      "editOne()"
    ],
    correctAnswer: "updateOne()",
    topic: "MongoDB",
    subtopic: "CRUD",
    difficulty: "easy"
  },

  {
    questionText: "Which method is used to delete one MongoDB document?",
    options: [
      "removeOne()",
      "deleteOne()",
      "deleteDocument()",
      "dropOne()"
    ],
    correctAnswer: "deleteOne()",
    topic: "MongoDB",
    subtopic: "CRUD",
    difficulty: "easy"
  },

  {
    questionText: "What is Mongoose?",
    options: [
      "A MongoDB GUI",
      "An ODM for MongoDB and Node.js",
      "A frontend library",
      "An Express middleware"
    ],
    correctAnswer: "An ODM for MongoDB and Node.js",
    topic: "MongoDB",
    subtopic: "Mongoose",
    difficulty: "easy"
  },

  {
    questionText: "What is a Mongoose schema used for?",
    options: [
      "Styling a webpage",
      "Defining the structure of documents",
      "Creating an HTTP server",
      "Managing React state"
    ],
    correctAnswer: "Defining the structure of documents",
    topic: "MongoDB",
    subtopic: "Mongoose Schema",
    difficulty: "easy"
  },

  {
    questionText: "Which method creates a Mongoose model?",
    options: [
      "mongoose.createModel()",
      "mongoose.model()",
      "mongoose.newModel()",
      "mongoose.schemaModel()"
    ],
    correctAnswer: "mongoose.model()",
    topic: "MongoDB",
    subtopic: "Mongoose Model",
    difficulty: "medium"
  },

  {
    questionText: "What is React?",
    options: [
      "A database",
      "A JavaScript library for building user interfaces",
      "A backend framework",
      "A programming language"
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
    topic: "React",
    subtopic: "Introduction",
    difficulty: "easy"
  },

  {
    questionText: "What is a React component?",
    options: [
      "A reusable UI building block",
      "A database table",
      "A backend route",
      "A MongoDB document"
    ],
    correctAnswer: "A reusable UI building block",
    topic: "React",
    subtopic: "Components",
    difficulty: "easy"
  },

  {
    questionText: "Which hook is used to manage state in a React functional component?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useRef"
    ],
    correctAnswer: "useState",
    topic: "React",
    subtopic: "Hooks",
    difficulty: "easy"
  },

  {
    questionText: "Which hook is commonly used for side effects in React?",
    options: [
      "useState",
      "useEffect",
      "useMemo",
      "useReducer"
    ],
    correctAnswer: "useEffect",
    topic: "React",
    subtopic: "Hooks",
    difficulty: "easy"
  },

  {
    questionText: "What are props in React?",
    options: [
      "Database properties",
      "Values passed from one component to another",
      "CSS properties only",
      "Backend parameters"
    ],
    correctAnswer: "Values passed from one component to another",
    topic: "React",
    subtopic: "Props",
    difficulty: "easy"
  },

  {
    questionText: "What is JSX?",
    options: [
      "A database query language",
      "A syntax extension for JavaScript",
      "A CSS framework",
      "A Node.js package"
    ],
    correctAnswer: "A syntax extension for JavaScript",
    topic: "React",
    subtopic: "JSX",
    difficulty: "easy"
  },

  {
    questionText: "Why is the key prop used when rendering lists in React?",
    options: [
      "To style list items",
      "To uniquely identify list elements",
      "To connect to MongoDB",
      "To create API requests"
    ],
    correctAnswer: "To uniquely identify list elements",
    topic: "React",
    subtopic: "Lists",
    difficulty: "medium"
  },

  {
    questionText: "Which hook is used to consume a React Context?",
    options: [
      "useContext",
      "useProvider",
      "useContextAPI",
      "useStore"
    ],
    correctAnswer: "useContext",
    topic: "React",
    subtopic: "Context API",
    difficulty: "easy"
  },

  {
    questionText: "What is React Router primarily used for?",
    options: [
      "Database management",
      "Client-side routing",
      "API authentication",
      "Server deployment"
    ],
    correctAnswer: "Client-side routing",
    topic: "React",
    subtopic: "React Router",
    difficulty: "easy"
  },

  {
    questionText: "Which JavaScript method is commonly used to render an array of elements in React?",
    options: [
      "forEach()",
      "map()",
      "filterOnly()",
      "reduceOnly()"
    ],
    correctAnswer: "map()",
    topic: "React",
    subtopic: "Rendering Lists",
    difficulty: "easy"
  },

  {
    questionText: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Application Process Integration",
      "Advanced Programming Internet",
      "Application Program Instruction"
    ],
    correctAnswer: "Application Programming Interface",
    topic: "REST API",
    subtopic: "Introduction",
    difficulty: "easy"
  },

  {
    questionText: "Which HTTP method is generally used to create a new resource?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "POST",
    topic: "REST API",
    subtopic: "HTTP Methods",
    difficulty: "easy"
  },

  {
    questionText: "Which HTTP method is generally used to retrieve data?",
    options: [
      "GET",
      "POST",
      "PATCH",
      "DELETE"
    ],
    correctAnswer: "GET",
    topic: "REST API",
    subtopic: "HTTP Methods",
    difficulty: "easy"
  },

  {
    questionText: "Which HTTP method is commonly used to partially update a resource?",
    options: [
      "GET",
      "POST",
      "PATCH",
      "OPTIONS"
    ],
    correctAnswer: "PATCH",
    topic: "REST API",
    subtopic: "HTTP Methods",
    difficulty: "medium"
  },

  {
    questionText: "Which HTTP method is used to remove a resource?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "DELETE",
    topic: "REST API",
    subtopic: "HTTP Methods",
    difficulty: "easy"
  },

  {
    questionText: "What is JWT commonly used for in MERN applications?",
    options: [
      "Database indexing",
      "Authentication and authorization",
      "CSS styling",
      "Image compression"
    ],
    correctAnswer: "Authentication and authorization",
    topic: "Authentication",
    subtopic: "JWT",
    difficulty: "medium"
  },

  {
    questionText: "What does JWT stand for?",
    options: [
      "Java Web Token",
      "JSON Web Token",
      "JavaScript Web Transfer",
      "JSON Web Transfer"
    ],
    correctAnswer: "JSON Web Token",
    topic: "Authentication",
    subtopic: "JWT",
    difficulty: "easy"
  },

  {
    questionText: "Which library is commonly used to hash passwords in Node.js applications?",
    options: [
      "bcrypt",
      "mongoose",
      "express",
      "jsonwebtoken"
    ],
    correctAnswer: "bcrypt",
    topic: "Authentication",
    subtopic: "Password Hashing",
    difficulty: "easy"
  },

  {
    questionText: "Why should passwords be hashed before storing them in a database?",
    options: [
      "To make them shorter",
      "To improve UI performance",
      "To protect passwords if the database is compromised",
      "To make MongoDB faster"
    ],
    correctAnswer: "To protect passwords if the database is compromised",
    topic: "Authentication",
    subtopic: "Password Security",
    difficulty: "medium"
  },

  {
    questionText: "What is CORS used for in a web application?",
    options: [
      "Database indexing",
      "Controlling cross-origin requests",
      "Password encryption",
      "Rendering React components"
    ],
    correctAnswer: "Controlling cross-origin requests",
    topic: "Express.js",
    subtopic: "CORS",
    difficulty: "medium"
  },

  {
    questionText: "Which package is commonly used to enable CORS in Express.js?",
    options: [
      "cors",
      "cross-origin",
      "express-cors-server",
      "http-cors"
    ],
    correctAnswer: "cors",
    topic: "Express.js",
    subtopic: "CORS",
    difficulty: "easy"
  },

  {
    questionText: "Which JavaScript feature is commonly used to handle asynchronous operations in modern Node.js?",
    options: [
      "async/await",
      "switch/case",
      "for/in",
      "typeof"
    ],
    correctAnswer: "async/await",
    topic: "JavaScript",
    subtopic: "Asynchronous JavaScript",
    difficulty: "easy"
  },

  {
    questionText: "What does async/await help make easier to work with?",
    options: [
      "CSS animations",
      "Asynchronous operations",
      "HTML elements",
      "MongoDB collections only"
    ],
    correctAnswer: "Asynchronous operations",
    topic: "JavaScript",
    subtopic: "Async/Await",
    difficulty: "easy"
  },

  {
    questionText: "Which object is commonly used to access route parameters in Express?",
    options: [
      "req.params",
      "req.body",
      "req.query",
      "req.routeBody"
    ],
    correctAnswer: "req.params",
    topic: "Express.js",
    subtopic: "Route Parameters",
    difficulty: "medium"
  },

  {
    questionText: "Where does Express.js typically store data sent in a JSON POST request?",
    options: [
      "req.params",
      "req.body",
      "req.query",
      "req.json"
    ],
    correctAnswer: "req.body",
    topic: "Express.js",
    subtopic: "Request Body",
    difficulty: "easy"
  },

  {
    questionText: "Which object is used to access query string parameters in Express?",
    options: [
      "req.query",
      "req.params",
      "req.body",
      "req.search"
    ],
    correctAnswer: "req.query",
    topic: "Express.js",
    subtopic: "Query Parameters",
    difficulty: "medium"
  },

  {
    questionText: "What is the main purpose of environment variables in a MERN application?",
    options: [
      "To store sensitive or configurable values",
      "To create React components",
      "To replace MongoDB",
      "To style the application"
    ],
    correctAnswer: "To store sensitive or configurable values",
    topic: "MERN Stack",
    subtopic: "Environment Variables",
    difficulty: "easy"
  },

  {
    questionText: "Which package is commonly used to load environment variables from a .env file in Node.js?",
    options: [
      "dotenv",
      "env-loader",
      "config-node",
      "environment"
    ],
    correctAnswer: "dotenv",
    topic: "Node.js",
    subtopic: "Environment Variables",
    difficulty: "easy"
  }
];

const seedQuestions=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB Connected");

        await Question.deleteMany();

        await Question.insertMany(questions);

        console.log("Question inserted sucsessfully..");

        process.exit();
    }catch(err){
        console.error("Error:",err);
        process.exit(1);
    }
};

seedQuestions();