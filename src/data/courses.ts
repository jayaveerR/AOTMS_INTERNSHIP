import cloudImg from "@/assets/courses/cloud-computing.jpg";
import cyberImg from "@/assets/courses/cyber-security.png";
import quantomImg from "@/assets/courses/quantom-computing.png";
import qaImg from "@/assets/courses/qa-automation-v2.png";
import embeddedImg from "@/assets/courses/embedded-systems.png";
import aiImg from "@/assets/courses/ai.png";
import pythonImg from "@/assets/courses/python-full-stack.png";
import devopsImg from "@/assets/courses/devops.png";
import analyticsImg from "@/assets/courses/data-analytics-v2.jpg";
import mlImg from "@/assets/courses/machine-learning.jpg";
import dsImg from "@/assets/courses/data-science.jpg";
import javaImg from "@/assets/courses/java-full-stack.png";

export interface CourseModule {
    title: string;
    lessons: string[];
}

export interface Course {
    id: number;
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
    fullDescription: string;
    duration: string;
    level: string;
    trainer: string;
    price: string;
    originalPrice: string;
    rating: number;
    curriculum: CourseModule[];
}

export const coursesData: Course[] = [
    {
        id: 1,
        slug: "data-science",
        title: "Data Science",
        category: "Data Science & AI",
        image: dsImg,
        description: "Analyze large amounts of data to uncover patterns and trends helping in decision-making using Python, R, and ML.",
        fullDescription: "Data Science is the field of analyzing large amounts of data to uncover patterns, insights, and trends that help in decision-making. A Data Science Professional uses tools like Python, R, SQL, and Machine Learning to process and interpret data effectively. Our course prepares you to handle real-world data challenges with industry-standard protocols.",
        duration: "5 Months",
        level: "Beginner",
        trainer: "Ravi Teja",
        price: "₹45,000.00",
        originalPrice: "₹75,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1 : Python for Data Science (Foundations)",
                lessons: [
                    "Introduction to Python and Jupyter Notebook",
                    "Data Types, Variables, Loops, and Functions",
                    "File Handling, Exception Handling",
                    "Working with Libraries: NumPy, Pandas",
                    "Exploratory Data Analysis (EDA) Basics",
                    "Importing and Cleaning Datasets"
                ]
            },
            {
                title: "Module 2: Data Handling & Manipulation",
                lessons: [
                    "Pandas: Series, Data Frames, Indexing, Group By",
                    "Data Cleaning & Transformation Techniques",
                    "Handling Missing Data and Outliers",
                    "Merging, Joining, Concatenation",
                    "Working with JSON, CSV, and Excel Files",
                    "Data Wrangling Projects"
                ]
            },
            {
                title: "Module 3: Data Visualization",
                lessons: [
                    "Introduction to Matplotlib & Seaborn",
                    "Plot Types: Line, Bar, Pie, Heatmaps, Pairplots",
                    "Advanced Visualization: Plotly, Power BI, Tableau",
                    "Storytelling with Data: Dashboards & Reports",
                    "Data Presentation and Business Insights"
                ]
            },
            {
                title: "Module 4: Statistics & Probability for Data Science",
                lessons: [
                    "Descriptive Statistics: Mean, Median, Mode, Variance",
                    "Probability Concepts and Distributions",
                    "Hypothesis Testing, p -values, z-test, t-test",
                    "Correlation, Regression, and Covariance",
                    "Sampling, Confidence Intervals, and A/B Testing"
                ]
            },
            {
                title: "Module 5: Machine Learning – Fundamentals",
                lessons: [
                    "Machine Learning Workflow & Concepts",
                    "Supervised vs Unsupervised Learning",
                    "Regression Algorithms: Linear, Polynomial, Ridge, Lasso",
                    "Classification: Logistic Regression, KNN, SVM, Naive Bayes, Decision Trees, Random Forest",
                    "Clustering: K -Means, Hierarchical, DBSCAN",
                    "Model Evaluation Metrics (Accuracy, Precision, Recall, F1 -Score, ROC – AUC)"
                ]
            },
            {
                title: "Module 6: Advanced Machine Learning & Feature Engineering",
                lessons: [
                    "Feature Selection and Dimensionality Reduction (PCA, LDA)",
                    "Cross-Validation & Hyperparameter Tuning (Grid Search, RandomSearch)",
                    "Ensemble Methods: Bagging, Boosting, Stacking",
                    "Model Deployment using Streamlit/Gradio",
                    "ML Project: Predictive Analytics on Real Dataset"
                ]
            },
            {
                title: "Module 7: Deep Learning & Neural Networks",
                lessons: [
                    "Introduction to Deep Learning & AI",
                    "Artificial Neural Networks (ANN) – Basics & Architecture",
                    "TensorFlow & Keras Fundamentals",
                    "Convolutional Neural Networks (CNN) for Image Data",
                    "Recurrent Neural Networks (RNN, LSTM) for Sequential Data",
                    "Deep Learning Project: Image or Text Classification"
                ]
            },
            {
                title: "Module 8: Data Engineering & Big Data Overview",
                lessons: [
                    "Data Pipelines & ETL Concepts",
                    "Introduction to SQL and NoSQL (MySQL, MongoDB)",
                    "Data Warehousing (Snowflake, Redshift Basics)",
                    "Big Data Ecosystem Overview – Hadoop, Spark",
                    "Working with PySpark for Large Datasets"
                ]
            },
            {
                title: "Module 9: Cloud & MLOps Integration",
                lessons: [
                    "Introduction to Cloud Platforms (AWS, Azure, GCP)",
                    "Cloud -based Data Storage & Analysis",
                    "Containerization using Docker for ML Models",
                    "CI/CD for Data Science Projects",
                    "Model Deployment on AWS, Render, or HuggingFace Spaces"
                ]
            },
            {
                title: "Module 10: Natural Language Processing (NLP)",
                lessons: [
                    "Text Preprocessing: Tokenization, Stopwords , Lemmatization",
                    "Bag of Words, TF -IDF, Word2Vec",
                    "Sentiment Analysis, Topic Modeling (LDA)",
                    "Transformer Models (Intro to BERT/GPT APIs)",
                    "NLP Project: Sentiment Analysis or Chatbot"
                ]
            },
            {
                title: "Module 11: Business Analytics & Visualization",
                lessons: [
                    "Excel for Data Analytics",
                    "Power BI Dashboard Development",
                    "Data Storytelling and Presentation",
                    "KPI Measurement and Business Case Studies"
                ]
            },
            {
                title: "Module 12: Capstone & Career Readiness",
                lessons: [
                    "Resume Building and LinkedIn Optimization",
                    "Mock Technical & HR Interviews",
                    "Final Project Development & Presentation",
                    "Portfolio Preparation on GitHub / Kaggle"
                ]
            }
        ]
    },
    {
        id: 2,
        slug: "cloud-computing",
        title: "Cloud Computing",
        category: "Cloud & DevOps",
        image: cloudImg,
        description: "Unlock the future of digital infrastructure with deep insights into AWS, Azure, and Google Cloud Platform (GCP).",
        fullDescription: "Lock the future of digital infrastructure with our Cloud Computing Course at Academy of Tech Masters. This program is crafted to make you industry-ready with deep insights into AWS, Microsoft Azure, and Google Cloud Platform (GCP) — along with hands-on projects that reflect real-world cloud deployment.",
        duration: "4 Months",
        level: "Beginner",
        trainer: "Lakshmi Priya",
        price: "₹35,000.00",
        originalPrice: "₹50,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1: Introduction to Cloud Computing",
                lessons: [
                    "Definition and Characteristics of Cloud",
                    "Cloud Service Models (IaaS, PaaS, SaaS)",
                    "Cloud Deployment Models (Public, Private, Hybrid, Multi-Cloud)",
                    "Benefits and Challenges of Cloud Adoption",
                    "Use Cases of Cloud in Different Industries"
                ]
            },
            {
                title: "Module 2: Cloud Architecture & Infrastructure",
                lessons: [
                    "Virtualization Concepts (VMs, Containers, Hypervisors)",
                    "Data Centers and Cloud Infrastructure",
                    "Scalability, Elasticity, and High Availability",
                    "Cloud Resource Management",
                    "Cloud Security Basics"
                ]
            },
            {
                title: "Module 3: Amazon Web Services (AWS) Fundamentals",
                lessons: [
                    "EC2, S3, and IAM Basics",
                    "AWS Networking (VPC, Subnets, Route Tables)",
                    "AWS Lambda & Serverless Concepts",
                    "CloudFormation and Infrastructure as Code",
                    "AWS Security Best Practices"
                ]
            },
            {
                title: "Module 4: Microsoft Azure Essentials",
                lessons: [
                    "Azure Virtual Machines & Storage",
                    "Azure App Services & Functions",
                    "Azure Active Directory & Identity Management",
                    "Azure Kubernetes Service (AKS)",
                    "Azure DevOps Basics"
                ]
            },
            {
                title: "Module 5: Google Cloud Platform (GCP) Basics",
                lessons: [
                    "GCP Compute Engine & Cloud Storage",
                    "BigQuery and Data Analytics in GCP",
                    "GCP Networking and IAM",
                    "Cloud Functions and App Engine",
                    "GCP Machine Learning APIs"
                ]
            },
            {
                title: "Module 6: Cloud Networking",
                lessons: [
                    "IP Addressing in the Cloud",
                    "Virtual Networks & Subnets",
                    "Load Balancers & Gateways",
                    "Content Delivery Networks (CDN)",
                    "DNS and Cloud Routing"
                ]
            },
            {
                title: "Module 7: Cloud Security & Compliance",
                lessons: [
                    "Identity and Access Management (IAM)",
                    "Encryption (At Rest & In Transit)",
                    "Security Groups & Firewalls",
                    "Regulatory Compliance (GDPR, HIPAA, PCI-DSS)",
                    "Security Monitoring & Incident Response"
                ]
            },
            {
                title: "Module 8: Cloud Development Tools",
                lessons: [
                    "Cloud SDKs & APIs",
                    "CI/CD Pipelines in the Cloud",
                    "Docker & Kubernetes in Cloud Environments",
                    "Serverless Applications",
                    "Cloud Monitoring & Logging Tools"
                ]
            },
            {
                title: "Module 9: DevOps & Automation",
                lessons: [
                    "Infrastructure as Code (Terraform, Ansible)",
                    "Continuous Integration & Deployment",
                    "Automated Testing in Cloud",
                    "Monitoring & Observability",
                    "Case Studies: DevOps in AWS, Azure, GCP"
                ]
            },
            {
                title: "Module 10: Cloud Data Management",
                lessons: [
                    "Cloud Databases (RDS, CosmosDB, Bigtable)",
                    "Data Warehousing & Analytics",
                    "ETL in Cloud Environments",
                    "Cloud Backup & Disaster Recovery",
                    "Data Lakes in the Cloud"
                ]
            },
            {
                title: "Module 11: Emerging Cloud Technologies",
                lessons: [
                    "Edge Computing",
                    "Multi-Cloud Strategies",
                    "Cloud AI & Machine Learning Integration",
                    "IoT in Cloud Environments",
                    "Future of Cloud Computing"
                ]
            }
        ]
    },
    {
        id: 3,
        slug: "data-analytics",
        title: "Data Analytics",
        category: "Data Science & AI",
        image: analyticsImg,
        description: "Decode the power of data and transform businesses with insights using modern visualization tools and techniques.",
        fullDescription: "Decode the Power of Data. Transform Businesses with Insights. Our Data Analytics course focuses on turning raw data into actionable business strategies using Excel, SQL, and cutting-edge visualization platforms.",
        duration: "150 Hours",
        level: "Beginner",
        trainer: "Kiran Kumar",
        price: "₹30,000.00",
        originalPrice: "₹45,000.00",
        rating: 4,
        curriculum: [
            {
                title: "Module 1: Basics of Data Analytics",
                lessons: [
                    "What is Data Analytics?",
                    "Types of Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)",
                    "Data Analyst Roles & Responsibilities"
                ]
            },
            {
                title: "Module 2: Data Ecosystem Overview",
                lessons: [
                    "Data Sources & Formats",
                    "Data Warehousing & Data Lakes",
                    "Structured vs Unstructured Data"
                ]
            },
            {
                title: "Module 3: Data Collection Methods",
                lessons: [
                    "Web Scraping",
                    "APIs for Data Extraction",
                    "Databases (SQL/NoSQL)"
                ]
            },
            {
                title: "Module 4: Data Cleaning & Preprocessing",
                lessons: [
                    "Handling Missing Values",
                    "Data Transformation & Normalization",
                    "Feature Engineering",
                    "Data Quality & Integrity"
                ]
            },
            {
                title: "Module 6: Excel for Data Analysis",
                lessons: [
                    "Pivot Tables & Charts",
                    "Advanced Excel Functions (VLOOKUP, INDEX, MATCH)",
                    "Data Visualization in Excel"
                ]
            },
            {
                title: "Module 7: SQL for Data Analytics",
                lessons: [
                    "Basic Queries (SELECT, WHERE, ORDER BY)",
                    "Joins & Subqueries",
                    "Aggregations & Grouping",
                    "Window Functions"
                ]
            },
            {
                title: "Module 9: Probability Basics",
                lessons: [
                    "Probability Distributions",
                    "Bayes’ Theorem"
                ]
            },
            {
                title: "Module 10: Statistical Analysis",
                lessons: [
                    "Hypothesis Testing",
                    "Confidence Intervals",
                    "ANOVA & Chi-Square Tests"
                ]
            },
            {
                title: "Module 11: Regression Analysis",
                lessons: [
                    "Correlation & Causation",
                    "Linear & Logistic Regression"
                ]
            },
            {
                title: "Module 12: Visualization Tools",
                lessons: [
                    "Tableau / Power BI Basics",
                    "Dashboards & Interactive Reports"
                ]
            },
            {
                title: "Module 13: Data Storytelling",
                lessons: [
                    "Choosing the Right Chart",
                    "Communicating Insights Effectively"
                ]
            }
        ]
    },
    {
        id: 4,
        slug: "devops-aws-azure",
        title: "DevOps (AWS/Azure)",
        category: "Cloud & DevOps",
        image: devopsImg,
        description: "Master DevOps tools and cloud integration to streamline software delivery cycles through automation and CI/CD.",
        fullDescription: "Become a skilled DevOps professional with our comprehensive training. Learn to bridge the gap between development and operations using tools like Git, Docker, Kubernetes, Jenkins, and cloud service providers like AWS and Azure.",
        duration: "4 Months",
        level: "Intermediate",
        trainer: "Venkatesh Babu",
        price: "₹38,000.00",
        originalPrice: "₹55,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1: Introduction to DevOps",
                lessons: [
                    "What is DevOps?",
                    "DevOps Life Cycle & Workflow",
                    "Culture and Best Practices",
                    "Tools Overview"
                ]
            },
            {
                title: "Module 2: Linux Administration for DevOps",
                lessons: [
                    "Linux Basics & Commands",
                    "User Management & Permissions",
                    "Shell Scripting Fundamentals",
                    "Process & Package Management"
                ]
            },
            {
                title: "Module 3: Version Control with Git",
                lessons: [
                    "Git Basics: Init, Add, Commit, Push",
                    "Branching, Merging & Stashing",
                    "Resolving Conflicts",
                    "GitHub Collaborative Workflows"
                ]
            },
            {
                title: "Module 4: Containerization with Docker",
                lessons: [
                    "Docker Architecture & Components",
                    "Creating Dockerfiles & Images",
                    "Docker Hub & Private Registries",
                    "Docker Compose for Multi-Container Apps"
                ]
            },
            {
                title: "Module 5: Continuous Integration with Jenkins",
                lessons: [
                    "Jenkins Installation & Setup",
                    "Creating Pipelines (Freestyle vs. Pipeline)",
                    "Jenkins Plugins & Integration",
                    "Master-Slave Architecture"
                ]
            },
            {
                title: "Module 6: Configuration Management with Ansible",
                lessons: [
                    "Introduction to YAML",
                    "Ansible Inventory & Ad-hoc Commands",
                    "Writing Playbooks & Roles",
                    "Automating Infrastructure Setup"
                ]
            },
            {
                title: "Module 7: Container Orchestration with Kubernetes",
                lessons: [
                    "K8s Architecture & Components",
                    "Pods, Deployments, and Services",
                    "Namespace & ConfigMaps",
                    "Autoscaling & Monitoring"
                ]
            },
            {
                title: "Module 8: Monitoring & Logging",
                lessons: [
                    "Prometheus & Grafana Setup",
                    "ELK Stack (Elasticsearch, Logstash, Kibana)",
                    "Centralized Logging Fundamentals",
                    "Setting up Alerts"
                ]
            }
        ]
    },
    {
        id: 5,
        slug: "cyber-security",
        title: "Cyber Security",
        category: "Cyber Security",
        image: cyberImg,
        description: "Defend against cyber threats, hackers, and breaches with hands-on tools and industry-proven security techniques.",
        fullDescription: "The internet never sleeps — and neither do cyber threats. Our Cyber Security course at Academy of Tech Masters is designed to prepare you to defend against hackers, breaches, and data theft with hands-on tools, real-time simulations, and industry-proven techniques.",
        duration: "4 Months",
        level: "Intermediate",
        trainer: "Ravi Teja",
        price: "₹40,000.00",
        originalPrice: "₹60,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1: Introduction to Cyber Security",
                lessons: [
                    "What is Cyber Security?",
                    "CIA Triad (Confidentiality, Integrity, Availability)",
                    "Cyber Threat Landscape & Attack Vectors",
                    "Careers & Roles in Cyber Security"
                ]
            },
            {
                title: "Module 2: Networking & Operating System Basics",
                lessons: [
                    "OSI & TCP/IP Models",
                    "IP Addressing & Subnetting",
                    "Common Protocols (HTTP, FTP, DNS, SMTP)",
                    "Windows & Linux Security Fundamentals",
                    "File Systems & Permissions"
                ]
            },
            {
                title: "Module 3: Types of Threats & Attacks",
                lessons: [
                    "Malware (Viruses, Worms, Trojans, Ransomware)",
                    "Phishing & Social Engineering",
                    "Denial of Service (DoS/DDoS)",
                    "Insider Threats"
                ]
            },
            {
                title: "Module 4: Web & Application Security",
                lessons: [
                    "OWASP Top 10 Vulnerabilities",
                    "SQL Injection & XSS Attacks",
                    "CSRF & Command Injection",
                    "Secure Coding Practices"
                ]
            },
            {
                title: "Module 5: Vulnerability Management",
                lessons: [
                    "Vulnerability Scanning",
                    "Penetration Testing Basics",
                    "Exploitation Techniques",
                    "Risk Assessment & Reporting"
                ]
            },
            {
                title: "Module 6: Cryptography Fundamentals",
                lessons: [
                    "Symmetric & Asymmetric Encryption",
                    "Hash Functions (MD5, SHA)",
                    "Digital Signatures & Certificates"
                ]
            },
            {
                title: "Module 7: Secure Protocols & PKI",
                lessons: [
                    "SSL/TLS & HTTPS",
                    "VPN & IPSec",
                    "SSH & Secure Email Protocols",
                    "Public Key Infrastructure (PKI)"
                ]
            },
            {
                title: "Module 8: Security Operations Center (SOC)",
                lessons: [
                    "Incident Response Lifecycle",
                    "SIEM (Security Information and Event Management)",
                    "Log Analysis & Monitoring",
                    "Threat Intelligence"
                ]
            },
            {
                title: "Module 9: Security Tools & Techniques",
                lessons: [
                    "Wireshark for Packet Analysis",
                    "Nmap for Network Scanning",
                    "Metasploit for Penetration Testing",
                    "Snort/Suricata for IDS/IPS"
                ]
            },
            {
                title: "Module 10: Endpoint & Network Security",
                lessons: [
                    "Firewalls & Antivirus Solutions",
                    "Intrusion Detection & Prevention",
                    "Endpoint Detection & Response (EDR)",
                    "Secure Remote Access (VPNs)"
                ]
            },
            {
                title: "Module 11: Ethical Hacking & Red Teaming",
                lessons: [
                    "Reconnaissance & Footprinting",
                    "Exploitation & Privilege Escalation",
                    "Web Application Testing",
                    "Post-Exploitation & Reporting"
                ]
            },
            {
                title: "Module 12: Cloud & IoT Security",
                lessons: [
                    "Cloud Security Models (IaaS, PaaS, SaaS)",
                    "AWS, Azure & GCP Security Basics",
                    "IoT Security Challenges & Solutions",
                    "Zero Trust Architecture"
                ]
            },
            {
                title: "Module 13: Cyber Forensics & Incident Handling",
                lessons: [
                    "Digital Forensics Process",
                    "Evidence Collection & Chain of Custody",
                    "Incident Response Planning",
                    "Disaster Recovery"
                ]
            },
            {
                title: "Module 14: Security Policies & Standards",
                lessons: [
                    "ISO 27001, NIST, CIS Controls",
                    "Security Policy Development",
                    "Business Continuity Planning"
                ]
            },
            {
                title: "Module 15: Legal & Regulatory Compliance",
                lessons: [
                    "GDPR, HIPAA, PCI DSS",
                    "Data Protection & Privacy Laws",
                    "Cybercrime Laws & Regulations"
                ]
            }
        ]
    },
    {
        id: 6,
        slug: "python-full-stack",
        title: "Python Full Stack",
        category: "Software Development",
        image: pythonImg,
        description: "Master front-end and back-end development using Python, Django, and modern web technologies.",
        fullDescription: "Become a proficient Full Stack Developer with Python! This course teaches you to build robust, scalable web applications using modern front-end and back-end technologies like HTML, CSS, JavaScript, Python, Django, REST APIs, and databases.",
        duration: "6 Months",
        level: "All Levels",
        trainer: "Chaitanya Varma",
        price: "₹35,000.00",
        originalPrice: "₹55,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1: Python Basics",
                lessons: [
                    "Introduction to Python and its applications",
                    "Variables, data types, and type casting",
                    "Conditional statements and loops",
                    "Functions and scope",
                    "Exception handling",
                    "File handling (read/write operations)"
                ]
            },
            {
                title: "Module 2: Object-Oriented Programming (OOP)",
                lessons: [
                    "Classes and objects",
                    "Constructors and instance variables",
                    "Encapsulation and access modifiers",
                    "Inheritance and method overriding",
                    "Polymorphism and abstraction",
                    "Special (magic) methods"
                ]
            },
            {
                title: "Module 3: Web Development with HTML, CSS, JavaScript",
                lessons: [
                    "HTML structure and forms",
                    "CSS styling and layout techniques",
                    "Responsive design with media queries",
                    "JavaScript basics and syntax",
                    "DOM manipulation and events",
                    "Form validation using JavaScript"
                ]
            },
            {
                title: "Module 4: Front-End with Bootstrap & React/Angular",
                lessons: [
                    "Component-based architecture",
                    "Props, state, and event handling",
                    "Routing and navigation",
                    "API calls with Axios or Fetch",
                    "Form handling and validation",
                    "Front-end project structure"
                ]
            },
            {
                title: "Module 5: Python Web Framework – Django",
                lessons: [
                    "Django project and app setup",
                    "Models, views, and templates",
                    "Django ORM and database connections",
                    "Forms and user input handling",
                    "User authentication and sessions",
                    "Admin panel customization"
                ]
            },
            {
                title: "Module 6: Database Integration & REST APIs",
                lessons: [
                    "SQL vs NoSQL Basics",
                    "MySQL and MongoDB integration with Python",
                    "Introduction to Django REST Framework (DRF)",
                    "Serializers and API views",
                    "Token authentication & JWT",
                    "End-to-end API project"
                ]
            }
        ]
    },
    {
        id: 7,
        slug: "java-full-stack",
        title: "Java Full Stack",
        category: "Software Development",
        image: javaImg,
        description: "Build robust enterprise applications with Java, Spring Boot, Microservices, and React.",
        fullDescription: "Java Full stack Development refers to building complete web applications using Java for backend development and technologies like HTML, CSS, JAVASCRIPT, AND REACT/ANGULAR for the frontend. it convers every layer of development from user interface to server and database management.",
        duration: "6 Months",
        level: "Beginner",
        trainer: "Ramesh Varma",
        price: "₹40,000.00",
        originalPrice: "₹60,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1: Java Fundamentals of Programming",
                lessons: [
                    "Introduction to Java, JVM, JDK, and IDE setup",
                    "Data Types, Variables, Operators",
                    "Conditional Statements & Loops",
                    "Methods, Recursion, and Arrays",
                    "Strings and Wrapper Classes",
                    "Exception Handling",
                    "File I/O and Serialization"
                ]
            },
            {
                title: "Module 2: Object-Oriented Programming (OOP) with Java",
                lessons: [
                    "Classes, Objects, Constructors",
                    "Inheritance, Polymorphism, Abstraction, Encapsulation",
                    "Interfaces, Inner Classes, Packages",
                    "Collections Framework (List, Set, Map)",
                    "Generics and Streams API",
                    "Multithreading and Concurrency",
                    "Java 8 Features (Lambdas, Optional)"
                ]
            },
            {
                title: "Module 3: Data Handling & Database Integration",
                lessons: [
                    "SQL Fundamentals (DDL, DML, Joins)",
                    "MySQL, PostgreSQL Integration with JDBC",
                    "CRUD Operations in JDBC",
                    "ORM Concepts and Hibernate Framework",
                    "JPA (Java Persistence API)",
                    "Database Connectivity and Connection Pooling"
                ]
            },
            {
                title: "Module 4: Web Development Fundamentals",
                lessons: [
                    "HTML5, CSS3, Bootstrap Basics",
                    "JavaScript (ES6+): Variables, Functions, Events",
                    "JSON, AJAX, and API Consumption",
                    "Introduction to React.js – Components, Props, State",
                    "Responsive Web Design Best Practices"
                ]
            },
            {
                title: "Module 5: Java Web Frameworks",
                lessons: [
                    "Servlets request-response lifecycle",
                    "Spring Core, Beans, Dependency Injection",
                    "Spring Boot for RESTful Services",
                    "Spring Data JPA & Hibernate Integration",
                    "Spring Security (JWT Authentication)",
                    "REST API Development & Postman Testing"
                ]
            },
            {
                title: "Module 6: Version Control & DevOps Basics",
                lessons: [
                    "Git & GitHub: Repository Setup, Branching",
                    "Maven & Gradle Build Tools",
                    "Docker Fundamentals for Java Apps",
                    "CI/CD Concepts with Jenkins",
                    "Cloud Deployment Basics"
                ]
            },
            {
                title: "Module 7: Advanced Integration & Projects",
                lessons: [
                    "Connecting React.js with Java REST APIs",
                    "JWT Authentication & Role-Based Authorization",
                    "Payment Gateway Integration Sandbox",
                    "Logging & Exception Handling in Full-Stack Apps",
                    "Capstone Project: End-to-End Development"
                ]
            }
        ]
    },
    {
        id: 8,
        slug: "quantom-computing",
        title: "Quantum Computing",
        category: "Future Tech",
        image: quantomImg,
        description: "Explore the principles of quantum mechanics applied to computing and master Qiskit for quantum programming.",
        fullDescription: "Quantum Computing is an advanced technology that uses the principles of quantum physics to process information. Unlike traditional computers that use bits (0s and 1s), quantum computers use qubits, which can represent both 0 and 1 at the same time allowing them to perform complex calculations much faster.",
        duration: "150 Hours",
        level: "All Levels",
        trainer: "Dr. Anjali Rao",
        price: "₹50,000.00",
        originalPrice: "₹80,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1 : Introduction to Quantum Computing",
                lessons: [
                    "Classical vs Quantum Computing",
                    "History & Evolution of Quantum Technologies",
                    "Basic Quantum Mechanics Concepts (Superposition, Entanglement)",
                    "Quantum Bits (Qubits) and Quantum States",
                    "Quantum Logic Gates & Circuits Overview",
                    "Real-World Applications"
                ]
            },
            {
                title: "Module 2 : Mathematics for Quantum Computing",
                lessons: [
                    "Linear Algebra Essentials (Vectors, Matrices, Tensor Products)",
                    "Probability & Complex Numbers",
                    "Quantum State Representation (Bra-Ket Notation)",
                    "Quantum Operators and Measurement",
                    "Unitary Transformations"
                ]
            },
            {
                title: "Module 3 : Quantum Mechanics for Engineers",
                lessons: [
                    "Postulates of Quantum Mechanics",
                    "Schrödinger Equation Concepts",
                    "Quantum State Evolution",
                    "Density Matrices and Mixed States"
                ]
            },
            {
                title: "Module 4 : Quantum Circuits & Algorithms",
                lessons: [
                    "Quantum Circuit Model",
                    "Quantum Gates: Hadamard, Pauli, CNOT, Toffoli",
                    "Quantum Teleportation & Superdense Coding",
                    "Grover’s Search Algorithm",
                    "Shor’s Algorithm for Factorization"
                ]
            },
            {
                title: "Module 5 : Quantum Programming with Qiskit",
                lessons: [
                    "Setting up IBM Quantum Experience",
                    "Installing and Using Qiskit SDK",
                    "Building and Visualizing Quantum Circuits",
                    "Running Simulations and Real Hardware Jobs",
                    "Measurement and Error Handling"
                ]
            },
            {
                title: "Module 6 : Advanced Frameworks (Cirq & PennyLane)",
                lessons: [
                    "Introduction to Google’s Cirq Framework",
                    "Quantum Machine Learning using PennyLane",
                    "Hybrid Classical-Quantum Workflows",
                    "Noise Models and Error Correction"
                ]
            },
            {
                title: "Module 7 : Quantum Cryptography & AI",
                lessons: [
                    "Quantum Key Distribution (QKD) Protocols",
                    "Post-Quantum Cryptography Concepts",
                    "Quantum Neural Networks (QNN)",
                    "Variational Quantum Circuits (VQC)"
                ]
            }
        ]
    },
    {
        id: 9,
        slug: "qa-automation",
        title: "QA Automation",
        category: "Software Testing",
        image: qaImg,
        description: "Learn automated software testing using Selenium, Java, and modern testing frameworks for quality assurance.",
        fullDescription: "Kick-start your journey into quality assurance with our QA Automation course at Academy of Tech Masters. Learn to build robust automated test frameworks and ensure flawless software delivery — faster and smarter.",
        duration: "3 Months",
        level: "Intermediate",
        trainer: "Divya Rani",
        price: "₹25,000.00",
        originalPrice: "₹40,000.00",
        rating: 4,
        curriculum: [
            {
                title: "Module 1: Introduction to QA & Automation",
                lessons: [
                    "Basics of Software Testing",
                    "Manual Testing vs Automation Testing",
                    "SDLC & STLC Phases",
                    "Defect Lifecycle & Bug Tracking"
                ]
            },
            {
                title: "Module 2: Core Java for Automation",
                lessons: [
                    "Java Basics: Variables, Operators, Loops",
                    "OOP Concepts for Testing",
                    "Exception Handling",
                    "Collections Framework (List, Set, Map)",
                    "File Handling in Java"
                ]
            },
            {
                title: "Module 3: Selenium WebDriver",
                lessons: [
                    "Introduction to Selenium Tools",
                    "Locators: ID, Name, CSS, XPath",
                    "Handling Web Elements: Buttons, Dropdowns",
                    "Waits in Selenium: Implicit, Explicit",
                    "Page Object Model (POM) Design",
                    "Data-Driven Testing with Apache POI"
                ]
            },
            {
                title: "Module 4: TestNG Framework",
                lessons: [
                    "Introduction to TestNG Annotations",
                    "Parallel Test Execution",
                    "Grouping & Prioritizing Tests",
                    "TestNG Reporting"
                ]
            },
            {
                title: "Module 5: Automation Framework Design",
                lessons: [
                    "Hybrid Framework Implementation",
                    "Keyword-Driven & Data-Driven Frameworks",
                    "Utilities & Reusable Components"
                ]
            },
            {
                title: "Module 6: Advanced Automation Tools",
                lessons: [
                    "Selenium Grid Parallel Execution",
                    "BDD with Cucumber & Gherkin",
                    "API Testing with Postman & Rest Assured",
                    "Mobile Automation Intro (Appium)"
                ]
            },
            {
                title: "Module 7: CI/CD & DevOps for QA",
                lessons: [
                    "Jenkins for Automation CI/CD",
                    "Git & GitHub for Version Control",
                    "Maven/Gradle Build Management"
                ]
            }
        ]
    },
    {
        id: 10,
        slug: "embedded-systems",
        title: "Embedded Systems",
        category: "Hardware & Systems",
        image: embeddedImg,
        description: "Design and develop embedded systems using C/C++, microcontrollers, and real-time operating systems.",
        fullDescription: "This course provides a complete foundation in Embedded Systems, covering both hardware and software aspects. You’ll learn how microcontrollers, sensors, and real-time operating systems work together to create devices used in IoT, robotics, healthcare, and automotive industries.",
        duration: "4 Months",
        level: "All Levels",
        trainer: "Anand Kumar",
        price: "₹32,000.00",
        originalPrice: "₹48,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1: Introduction to Embedded Systems",
                lessons: [
                    "What is an Embedded System?",
                    "Characteristics & Applications (IoT, Robotics)",
                    "Embedded vs. General-Purpose Systems",
                    "System-on-Chip (SoC) Overview"
                ]
            },
            {
                title: "Module 2: Digital Electronics Basics",
                lessons: [
                    "Number Systems (Binary, Hexadecimal)",
                    "Logic Gates & Boolean Algebra",
                    "Combinational & Sequential Circuits",
                    "ADC/DAC Converters"
                ]
            },
            {
                title: "Module 3: Microcontrollers & Microprocessors",
                lessons: [
                    "Introduction to 8051, ARM, PIC, AVR",
                    "Harvard vs Von Neumann Architecture",
                    "GPIO, Timers, Interrupts",
                    "Case Study: ARM Cortex-M"
                ]
            },
            {
                title: "Module 4: Peripheral Devices & Sensors",
                lessons: [
                    "Input/Output Devices (Switches, LEDs, Displays)",
                    "Sensor Integration (Temp, Motion, Pressure)",
                    "Memory Types: EEPROM, Flash, SRAM",
                    "Battery Management Basics"
                ]
            },
            {
                title: "Module 5: Programming Embedded Systems",
                lessons: [
                    "Embedded C vs Standard C",
                    "Assembly Language Basics",
                    "Memory Management in C",
                    "Embedded Data Structures"
                ]
            },
            {
                title: "Module 6: Development Tools & IDEs",
                lessons: [
                    "Keil, MPLAB, STM32CubeIDE",
                    "Debuggers & Emulators (JTAG, SWD)",
                    "Version Control with Git for Hardware"
                ]
            },
            {
                title: "Module 7: Communication Protocols",
                lessons: [
                    "UART, SPI, I2C Protocols",
                    "CAN Bus & USB Basics",
                    "Wireless: Bluetooth, Wi-Fi, LoRaWAN",
                    "MQTT for IoT Applications"
                ]
            },
            {
                title: "Module 9: Real-Time Operating Systems (RTOS)",
                lessons: [
                    "What is RTOS? Task Scheduling",
                    "Multithreading & Synchronization",
                    "FreeRTOS Overview",
                    "Semaphores and Queues"
                ]
            }
        ]
    },
    {
        id: 11,
        slug: "ai",
        title: "AI",
        category: "Data Science & AI",
        image: aiImg,
        description: "Explore the world of Artificial Intelligence and Generative AI models like GPT, Stable Diffusion, and LLMs.",
        fullDescription: "AI Training equips learners with the skills to design, build, and deploy intelligent systems using machine learning, deep learning, and data-driven techniques, enabling automation, advanced decision-making, and innovative solutions across diverse domains.",
        duration: "4 Months",
        level: "Intermediate",
        trainer: "Dr. Kiran",
        price: "₹48,000.00",
        originalPrice: "₹70,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1: Foundations of AI",
                lessons: [
                    "History and Evolution of AI",
                    "Search Algorithms & Problem Solving",
                    "Knowledge Representation & Reasoning",
                    "Agent-Based Systems"
                ]
            },
            {
                title: "Module 2: Mathematics for AI",
                lessons: [
                    "Linear Algebra & Matrix Operations",
                    "Calculus for Optimization",
                    "Probability & Bayesian Theory",
                    "Statistics for AI Models"
                ]
            },
            {
                title: "Module 3: Machine Learning Foundations",
                lessons: [
                    "Supervised, Unsupervised & Reinforcement Learning",
                    "Regression & Classification Algorithms",
                    "Clustering & Dimensionality Reduction",
                    "Model Evaluation & Tuning"
                ]
            },
            {
                title: "Module 4: Deep Learning & Neural Networks",
                lessons: [
                    "Artificial Neural Networks (ANN)",
                    "Convolutional Neural Networks (CNN) for Computer Vision",
                    "Recurrent Neural Networks (RNN) for NLP",
                    "Transformers & Attention Mechanisms"
                ]
            },
            {
                title: "Module 5: Generative AI",
                lessons: [
                    "Introduction to LLMs (GPT, Llama)",
                    "Prompt Engineering Techniques",
                    "Fine-tuning Models for Business",
                    "AI Ethics & Safety"
                ]
            }
        ]
    },
    {
        id: 12,
        slug: "machine-learning",
        title: "Machine Learning",
        category: "Data Science & AI",
        image: mlImg,
        description: "Master Machine Learning algorithms, predictive modeling, and deep learning using Python and TensorFlow.",
        fullDescription: "AI Training equips learners with the skills to design, build, and deploy intelligent systems using machine learning, deep learning, and data-driven techniques, enabling automation, advanced decision-making, and innovative solutions.",
        duration: "4 Months",
        level: "Intermediate",
        trainer: "Ravi Teja",
        price: "₹42,000.00",
        originalPrice: "₹65,000.00",
        rating: 5,
        curriculum: [
            {
                title: "Module 1: Linear Algebra for ML",
                lessons: [
                    "Matrix Multiplication & Factorization",
                    "Eigenvalues and Eigenvectors",
                    "Principal Component Analysis (PCA)",
                    "Recommendation Systems Fundamentals"
                ]
            },
            {
                title: "Module 2: Calculus & Optimization",
                lessons: [
                    "Gradients and Backpropagation",
                    "Jacobian and Hessian Matrices",
                    "Gradient Descent Variants",
                    "Stochastic Optimization"
                ]
            },
            {
                title: "Module 3: Probability & Statistics",
                lessons: [
                    "Probability Distributions",
                    "Bayesian Probability & Inference",
                    "Hypothesis Testing",
                    "Markov Chains"
                ]
            },
            {
                title: "Module 6: ML Pipeline Development",
                lessons: [
                    "Data Preparation & Model Selection",
                    "Cross-Validation Techniques",
                    "Hyperparameter Tuning",
                    "Deployment Planning"
                ]
            },
            {
                title: "Module 7: Supervised Learning",
                lessons: [
                    "Logistic Regression & SVM",
                    "Decision Trees & Random Forests",
                    "XGBoost & LightGBM",
                    "Time Series Forecasting"
                ]
            }
        ]
    }
];
