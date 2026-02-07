import type { CourseData } from "../../types/course"

export const courses: CourseData[] =[
    {
  "course_details": {
    "course_id": "CRS-AGNT-001",
    "course_uid": "uid-agentic-ai-pro",
    "course_title": "Agentic AI",
    "course_subtitle": "Design, Build & Deploy Autonomous AI Agents Using LLMs, Tools, and Orchestration Frameworks",
    "course_slug": "agentic-ai",
    "course_thumbnail": "/images/courses/coursecover.avif",
    "course_short_description": "Learn to build autonomous AI agents that can reason, plan, use tools, and execute multi-step workflows independently.",
    "course_long_description": "This Agentic AI course is designed to teach engineers how to build autonomous AI agents. Unlike traditional LLM training, this program focuses on Agentic AI systems—AI agents that combine Large Language Models, memory, tools, and orchestration frameworks to act independently in real-world environments.",
    "about_course": [
      "This Agentic AI course is designed to teach engineers how to build autonomous AI agents that can reason, plan, use tools, retrieve information, and execute multi-step workflows.",
      "Unlike traditional LLM training that focuses on prompt-response systems, this program focuses on Agentic AI systems.",
      "You’ll learn how modern AI agent architectures are designed, deployed, and monitored in production-grade AI applications.",
      "Focuses on practical AI engineering, not theoretical machine learning, helping you build systems that work reliably in production."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate to Advanced",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 1,
    "course_category": {
      "category_id": "CAT_AI",
      "category_title": "Artificial Intelligence",
      "category_url": "/courses/artificial-intelligence"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Business process automation focus",
      "AI copilots & Internal enterprise tools",
      "Practical AI engineering approach",
      "Production-first mindset",
      "Syllabus available for download"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/agentic-ai",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Agentic AI Specialist Certification",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/sample-ai.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Working knowledge of Python for AI engineering",
      "Familiarity with LLM concepts and prompt engineering",
      "Basic understanding of APIs and cloud platforms"
    ],
    "key_learnings": [
      "Design scalable AI agent architectures",
      "Build tool-using autonomous AI agents",
      "Implement RAG-based AI systems",
      "Orchestrate and deploy agentic workflows",
      "Monitor and optimize AI agents in production"
    ],
    "ideal_candidates": [
      "AI Engineers and Generative AI Engineers",
      "Software and Full Stack Developers",
      "Cloud and DevOps Engineers working with AI workloads",
      "Data Engineers building GenAI pipelines",
      "Teams building AI-powered products and platforms"
    ],
    "skills_gained": {
      "core_skills": [
        "Agentic AI",
        "Autonomous AI Agents",
        "AI Agent Architectures",
        "Tool-Using AI Systems",
        "RAG Architectures for AI"
      ],
      "supporting_skills": [
        "Memory Management",
        "Agent Orchestration in AI",
        "Production Deployment and Monitoring"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Python for AI Engineering",
        "LLM APIs (OpenAI / Azure OpenAI concepts)",
        "AI Agent Frameworks (LangChain, LlamaIndex)"
      ],
      "secondary": [
        "Vector Databases",
        "APIs and Web Services",
        "Cloud Platforms"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Agentic AI Engineer",
      "Generative AI Engineer",
      "Applied AI Engineer",
      "AI Solutions Architect"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "SaaS Product Companies",
      "Enterprise IT & Automation",
      "FinTech & Banking",
      "AI & Data Platforms",
      "Cloud & DevOps Teams"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 5,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Autonomous AI Agent System. You will build a real-world system that can plan and execute tasks autonomously, use tools dynamically, retrieve knowledge using RAG, and maintain memory."
  },
  "curriculum": {
    "summary": {
      "total_modules": 8,
      "total_lectures": 24,
      "difficulty_level": "Intermediate to Advanced"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Foundations of Agentic AI",
        "module_duration": "Week 1",
        "topics": ["What Agentic AI really means", "Autonomous AI agents vs chatbots", "Core AI agent architectures and lifecycle"]
      },
      {
        "module_number": 2,
        "module_name": "LLM Reasoning and Planning",
        "module_duration": "Week 2",
        "topics": ["Reasoning strategies with Large Language Models", "Planning and execution loops", "Decision-making workflows in AI agents"]
      },
      {
        "module_number": 3,
        "module_name": "Tool-Using AI Systems",
        "module_duration": "Week 3",
        "topics": ["Tool calling and function execution patterns", "Integrating APIs and external services", "Error handling, retries, and reliability"]
      },
      {
        "module_number": 4,
        "module_name": "Memory and Context in AI Agents",
        "module_duration": "Week 4",
        "topics": ["Short-term vs long-term memory", "Vector memory and retrieval strategies", "State management for autonomous agents"]
      },
      {
        "module_number": 5,
        "module_name": "RAG Architectures for AI Agents",
        "module_duration": "Week 5",
        "topics": ["Retrieval-Augmented Generation (RAG) for agentic systems", "Document ingestion and indexing", "Hybrid and contextual search patterns"]
      },
      {
        "module_number": 6,
        "module_name": "AI Agent Frameworks and Orchestration",
        "module_duration": "Week 6",
        "topics": ["Building agents using LangChain", "Building agents using LlamaIndex", "Agent orchestration in AI and multi-agent systems"]
      },
      {
        "module_number": 7,
        "module_name": "Security, Safety, and Observability",
        "module_duration": "Week 7",
        "topics": ["Guardrails and output validation", "Monitoring autonomous AI agents", "Managing cost, latency, and failures"]
      },
      {
        "module_number": 8,
        "module_name": "Production Deployment of Agentic AI",
        "module_duration": "Week 8",
        "topics": ["Scaling autonomous AI agents", "Deployment patterns and architectures", "Enterprise use cases and design reviews"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 5,
    "total_reviews": 2400,
    "total_students_enrolled": 25000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is an Agentic AI course?",
      "answer": "An Agentic AI course teaches how to design and build autonomous AI agents that can plan tasks, use tools, retrieve information, maintain memory, and execute multi-step workflows using LLMs, RAG, and orchestration frameworks."
    },
    {
      "faq_id": 2,
      "question": "How is Agentic AI different from Generative AI or chatbots?",
      "answer": "Generative AI focuses on content generation, while Agentic AI focuses on decision-making and action. Agentic AI systems go beyond chatbots by planning steps, calling tools, using memory, and executing tasks autonomously."
    },
    {
      "faq_id": 3,
      "question": "What are autonomous AI agents?",
      "answer": "Autonomous AI agents are AI systems that can reason, plan, and act independently by combining LLMs with tools, APIs, memory, and retrieval systems to complete complex tasks with minimal human input."
    },
    {
      "faq_id": 4,
      "question": "What skills will I learn in an Agentic AI course?",
      "answer": "You will learn AI agent architectures, tool-using AI systems, agent orchestration, RAG architectures, memory management, and Python-based AI engineering for building production-ready agentic systems."
    },
    {
      "faq_id": 5,
      "question": "Which AI agent frameworks are covered in this course?",
      "answer": "The course covers modern AI agent frameworks such as LangChain and LlamaIndex, along with orchestration patterns for building single-agent and multi-agent systems."
    },
    {
      "faq_id": 6,
      "question": "Is Python required for learning Agentic AI?",
      "answer": "Yes. Python is the primary language used for AI engineering, agent development, tool integration, and orchestration in Agentic AI systems. A working knowledge of Python is recommended."
    },
    {
      "faq_id": 7,
      "question": "What is agent orchestration in AI?",
      "answer": "Agent orchestration refers to coordinating how AI agents plan tasks, call tools, retrieve data, manage memory, and execute actions in a controlled, scalable, and reliable manner."
    },
    {
      "faq_id": 8,
      "question": "How is RAG used in Agentic AI systems?",
      "answer": "RAG (Retrieval-Augmented Generation) allows AI agents to retrieve relevant information from documents or databases and use it during reasoning and decision-making, enabling accurate and context-aware autonomous agents."
    },
    {
      "faq_id": 9,
      "question": "Who should take an Agentic AI course?",
      "answer": "This course is ideal for AI engineers, generative AI engineers, software developers, cloud engineers, and professionals building AI-powered products or automation systems using LLMs."
    }
  ],
  "target_audience": [
    "AI Engineers",
    "Generative AI Engineers",
    "Software and Full Stack Developers",
    "Cloud and DevOps Engineers",
    "Data Engineers",
    "Product Teams"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Agentic AI Course: Build Autonomous AI Agents with LLMs & RAG | Proximsoft",
    "meta_description": "Master Agentic AI engineering. Learn to build autonomous agents using LangChain, LlamaIndex, and Python. Designed for software and AI engineers.",
    "meta_url": "/courses/artificial-intelligence/agentic-ai-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AIENG-002",
    "course_uid": "uid-ai-engineering-pro",
    "course_title": "AI Engineering Course",
    "course_subtitle": "Build, Deploy & Scale Production-Ready AI Systems with GenAI & Cloud Architectures",
    "course_slug": "ai-engineering-course",
    "course_thumbnail": "/images/courses/coursecover.avif",
    "course_short_description": "Master applied AI engineering. Build production-ready systems combining GenAI, RAG, and AI agents with cloud-native architectures.",
    "course_long_description": "This AI Engineering course is designed to teach professionals how to build, deploy, and scale production-ready artificial intelligence systems used in real-world enterprise environments. Unlike traditional machine learning courses that focus heavily on theory or algorithms, this program focuses on applied AI engineering — combining Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI agents, and cloud-native architectures.",
    "about_course": [
      "This AI Engineering course is designed to teach professionals how to build, deploy, and scale production-ready artificial intelligence systems used in real-world enterprise environments.",
      "Unlike traditional machine learning courses that focus heavily on theory or algorithms, this program focuses on applied AI engineering.",
      "You’ll learn how modern artificial intelligence systems are architected end-to-end, from data ingestion and model interaction to deployment, monitoring, and optimization in production systems.",
      "Focuses on practical AI engineering, helping you move from learning about machine learning to building real AI systems in the cloud."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate to Advanced",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 2,
    "course_category": {
      "category_id": "CAT_AI",
      "category_title": "Artificial Intelligence",
      "category_url": "/courses/artificial-intelligence"
    }
  },
  "course_structure": {
    "course_timeline": "8 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "10–12 Hours",
    "modules_included": true,
    "course_features": [
      "Business process automation focus",
      "AI copilots & Internal enterprise tools",
      "Practical AI engineering approach",
      "Production-first mindset",
      "Syllabus available for download"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/ai-engineering",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Certified AI Engineering Specialist",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/ai-eng.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Working knowledge of Python",
      "Familiarity with APIs and web applications",
      "Basic understanding of cloud platforms and services"
    ],
    "key_learnings": [
      "Design real-world AI system architectures",
      "Build RAG-based and agentic AI applications",
      "Deploy and scale AI systems in the cloud",
      "Apply monitoring, security, and optimization best practices"
    ],
    "ideal_candidates": [
      "Software Engineers & Full Stack Developers",
      "Cloud & DevOps Engineers working with AI systems",
      "Data Engineers moving into AI roles",
      "Professionals building GenAI-powered products",
      "Teams implementing AI features in production systems"
    ],
    "skills_gained": {
      "core_skills": [
        "AI Engineering",
        "Artificial Intelligence Systems",
        "LLMs and RAG Pipelines",
        "AI System Design"
      ],
      "supporting_skills": [
        "AI Agents and Orchestration",
        "Deployment and Monitoring",
        "Cloud AI Systems"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Python for AI Engineering",
        "LLM APIs (OpenAI / Azure OpenAI concepts)",
        "RAG Frameworks"
      ],
      "secondary": [
        "Vector Databases",
        "Docker",
        "Cloud Platforms (AWS / Azure concepts)"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "AI Engineer",
      "Generative AI Engineer",
      "Applied AI Engineer",
      "AI Solutions Architect"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "SaaS Product Companies",
      "Enterprise IT & Platforms",
      "FinTech & Banking",
      "AI & Data Platforms",
      "Cloud & DevOps Teams"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 12,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Production AI Application. You will build a production-ready AI application that includes LLM-based workflows, RAG architecture with vector search, agent-based task execution, API integration, cloud deployment, and monitoring for cost, performance, and safety."
  },
  "curriculum": {
    "summary": {
      "total_modules": 12,
      "total_lectures": 36,
      "difficulty_level": "Intermediate to Advanced"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "AI Engineering Foundations",
        "module_duration": "Week 1",
        "topics": [
          "Artificial intelligence vs machine learning vs Generative AI",
          "AI engineering lifecycle",
          "Real-world AI system architectures"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Python for AI Engineering",
        "module_duration": "Week 1",
        "topics": [
          "Python essentials for AI systems",
          "Virtual environments and dependency management",
          "Working with APIs"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Generative AI & LLM Fundamentals",
        "module_duration": "Week 2",
        "topics": [
          "Transformer concepts (high-level)",
          "LLM capabilities and limitations",
          "Prompt engineering fundamentals"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Working with LLM APIs",
        "module_duration": "Week 2",
        "topics": [
          "OpenAI and Azure OpenAI concepts",
          "Chat, completion, and embedding APIs",
          "Cost and latency considerations"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Embeddings & Vector Databases",
        "module_duration": "Week 3",
        "topics": [
          "Embedding generation",
          "Vector similarity search",
          "Introduction to vector databases"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Retrieval-Augmented Generation (RAG)",
        "module_duration": "Week 4",
        "topics": [
          "RAG architecture patterns",
          "Document ingestion pipelines",
          "Query-time retrieval strategies"
        ]
      },
      {
        "module_number": 7,
        "module_name": "AI Agents & Tool Calling",
        "module_duration": "Week 5",
        "topics": [
          "Agentic AI concepts",
          "Tool and function calling",
          "Multi-step reasoning workflows"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Orchestration Frameworks",
        "module_duration": "Week 6",
        "topics": [
          "LangChain and LlamaIndex overview",
          "Prompt pipelines and chains",
          "Agent orchestration patterns"
        ]
      },
      {
        "module_number": 9,
        "module_name": "AI Application Development",
        "module_duration": "Week 6",
        "topics": [
          "Backend integration using APIs",
          "Chatbots and AI copilots",
          "AI-powered business workflows"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Deployment & Scaling",
        "module_duration": "Week 7",
        "topics": [
          "Containerization basics",
          "Cloud deployment strategies",
          "Performance and cost optimization"
        ]
      },
      {
        "module_number": 11,
        "module_name": "Monitoring, Security & Governance",
        "module_duration": "Week 8",
        "topics": [
          "Observability for AI systems",
          "Prompt and output monitoring",
          "Data privacy and security"
        ]
      },
      {
        "module_number": 12,
        "module_name": "Production Best Practices & Use Cases",
        "module_duration": "Week 8",
        "topics": [
          "Enterprise AI patterns",
          "Common failure modes",
          "Case studies and system design"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1850,
    "total_students_enrolled": 12000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is an AI Engineering course?",
      "answer": "An AI Engineering course teaches how to design, build, deploy, and scale production-ready artificial intelligence systems using Generative AI, LLMs, RAG pipelines, agents, and cloud architectures."
    },
    {
      "faq_id": 2,
      "question": "How is AI engineering different from machine learning?",
      "answer": "Machine learning focuses on building models, while AI engineering focuses on integrating models into real systems, deploying them in the cloud, and managing performance, cost, and reliability."
    },
    {
      "faq_id": 3,
      "question": "Do I need machine learning knowledge for AI engineering?",
      "answer": "Basic machine learning understanding helps, but AI engineering focuses more on system design, APIs, cloud deployment, and production workflows than deep ML theory."
    },
    {
      "faq_id": 4,
      "question": "What tools are used in AI engineering?",
      "answer": "AI engineering uses Python, LLM APIs, vector databases, RAG frameworks, Docker, cloud platforms, and orchestration tools to build scalable AI systems."
    },
    {
      "faq_id": 5,
      "question": "Is this course suitable for prompt engineers?",
      "answer": "Yes. Prompt engineers looking to move beyond prompting into end-to-end AI system development will benefit from this course."
    },
    {
      "faq_id": 6,
      "question": "What is the role of agents in AI engineering?",
      "answer": "Agents in AI enable multi-step reasoning, tool usage, and autonomous task execution within AI-powered applications."
    },
    {
      "faq_id": 7,
      "question": "How is AI used in cloud environments?",
      "answer": "AI systems are deployed in the cloud using containers, APIs, and managed services to ensure scalability, reliability, and cost control."
    },
    {
      "faq_id": 8,
      "question": "What is RAG in AI engineering?",
      "answer": "RAG (Retrieval-Augmented Generation) allows AI systems to retrieve external knowledge from documents or databases before generating responses."
    },
    {
      "faq_id": 9,
      "question": "Who should learn AI engineering?",
      "answer": "Software engineers, cloud engineers, data professionals, and teams building AI-powered products should learn AI engineering."
    },
    {
      "faq_id": 10,
      "question": "What careers can AI engineering skills lead to?",
      "answer": "AI engineering skills lead to roles such as AI Engineer, Generative AI Engineer, Applied AI Engineer, and AI Solutions Architect."
    }
  ],
  "target_audience": [
    "Software Engineers",
    "Full Stack Developers",
    "Cloud Engineers",
    "DevOps Professionals",
    "Data Engineers",
    "Product Teams"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "AI Engineering Course: Build & Scale Production AI Systems | Proximsoft",
    "meta_description": "Master AI Engineering. Learn to build production-ready systems using GenAI, RAG, and AI agents with cloud-native architectures.",
    "meta_url": "/courses/artificial-intelligence/ai-engineering-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AIML-003",
    "course_uid": "uid-ai-ml-foundation",
    "course_title": "AI & Machine Learning (AI ML) Course",
    "course_subtitle": "Build Intelligent Systems Using AI & Machine Learning with Real-World Applications",
    "course_slug": "ai-machine-learning-course",
    "course_thumbnail": "/images/courses/coursecover.avif",
    "course_short_description": "Build a strong foundation in AI and ML. Learn to design, train, and evaluate real-world machine learning models using Python.",
    "course_long_description": "This AI & Machine Learning course is designed to provide strong foundations in artificial intelligence and machine learning with a practical, application-first approach. Unlike purely theoretical courses, this program focuses on building real machine learning models using Python and applying them to real-world problems such as predictive analytics and recommendation systems.",
    "about_course": [
      "Designed to provide strong foundations in artificial intelligence and machine learning with a practical, application-first approach.",
      "Focuses on building real machine learning models using Python rather than just theoretical concepts.",
      "Covers the entire AI/ML lifecycle, from data preprocessing and exploratory data analysis to model tuning and validation.",
      "Provides hands-on experience with supervised learning, unsupervised learning, and neural network fundamentals."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 3,
    "course_category": {
      "category_id": "CAT_AI",
      "category_title": "Artificial Intelligence",
      "category_url": "/courses/artificial-intelligence"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Weekdays & Weekends options",
      "Practical implementation focus",
      "Predictive analytics labs",
      "Syllabus available for download",
      "Customized training availability"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/ai-machine-learning",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "AI & Machine Learning Professional Certification",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/aiml-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of Python programming",
      "Familiarity with mathematics and statistics (helpful but not mandatory)"
    ],
    "key_learnings": [
      "Understand artificial intelligence and machine learning fundamentals",
      "Build machine learning models using Python",
      "Apply AI and ML techniques to real-world problems",
      "Evaluate and improve model performance using hyperparameter tuning"
    ],
    "ideal_candidates": [
      "Aspiring AI & ML Engineers",
      "Software Developers",
      "Data Analysts and Data Science beginners",
      "Engineering students and recent graduates",
      "Professionals transitioning into AI/ML roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Artificial Intelligence",
        "Machine Learning",
        "Python Programming"
      ],
      "supporting_skills": [
        "Data Preprocessing",
        "Feature Engineering",
        "Basic Deep Learning",
        "Model Validation"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Python",
        "Scikit-learn"
      ],
      "secondary": [
        "NumPy",
        "Pandas",
        "TensorFlow / Keras (Basics)"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "AI/ML Engineer (Junior)",
      "Machine Learning Engineer",
      "Data Analyst",
      "Associate Data Scientist"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "IT & Software Services",
      "Finance & FinTech",
      "Healthcare & Life Sciences",
      "Retail & E-commerce",
      "Manufacturing & Operations"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End AI/ML Solution. Develop a complete solution including data preprocessing, exploratory data analysis, model building, and evaluation for a real-world problem."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30,
      "difficulty_level": "Beginner to Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to AI & Machine Learning",
        "module_duration": "Week 1",
        "topics": ["AI vs ML vs Deep Learning", "Real-world applications", "AI/ML lifecycle"]
      },
      {
        "module_number": 2,
        "module_name": "Python for AI & ML",
        "module_duration": "Week 2",
        "topics": ["Python fundamentals", "NumPy and Pandas", "Data handling techniques"]
      },
      {
        "module_number": 3,
        "module_name": "Data Preprocessing & Analysis",
        "module_duration": "Week 3",
        "topics": ["Data cleaning", "Feature engineering", "Exploratory Data Analysis (EDA)"]
      },
      {
        "module_number": 4,
        "module_name": "Supervised Learning – Regression",
        "module_duration": "Week 4",
        "topics": ["Linear and polynomial regression", "Model evaluation metrics"]
      },
      {
        "module_number": 5,
        "module_name": "Supervised Learning – Classification",
        "module_duration": "Week 5",
        "topics": ["Logistic regression", "Decision Trees and KNN"]
      },
      {
        "module_number": 6,
        "module_name": "Ensemble Learning",
        "module_duration": "Week 6",
        "topics": ["Random Forest", "Gradient Boosting overview"]
      },
      {
        "module_number": 7,
        "module_name": "Unsupervised Learning",
        "module_duration": "Week 7",
        "topics": ["Clustering using K-Means", "Dimensionality reduction techniques"]
      },
      {
        "module_number": 8,
        "module_name": "Model Tuning & Validation",
        "module_duration": "Week 8",
        "topics": ["Hyperparameter tuning", "Cross-validation techniques"]
      },
      {
        "module_number": 9,
        "module_name": "Introduction to Deep Learning",
        "module_duration": "Week 9",
        "topics": ["Neural network fundamentals", "Introduction to TensorFlow and Keras"]
      },
      {
        "module_number": 10,
        "module_name": "Applied AI Use Cases",
        "module_duration": "Week 10",
        "topics": ["Recommendation systems", "Predictive analytics", "Real-world case studies"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 2100,
    "total_students_enrolled": 18000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is an AI & Machine Learning course?",
      "answer": "An AI & Machine Learning course teaches artificial intelligence and machine learning concepts, algorithms, and practical implementation using Python to build intelligent systems."
    },
    {
      "faq_id": 2,
      "question": "Is this course suitable for beginners?",
      "answer": "Yes. This course is designed for beginners with basic programming knowledge and gradually progresses to intermediate machine learning concepts."
    },
    {
      "faq_id": 3,
      "question": "What is the difference between AI and machine learning?",
      "answer": "Artificial intelligence is the broader field of building intelligent systems, while machine learning is a subset that focuses on learning patterns from data."
    },
    {
      "faq_id": 4,
      "question": "Do I need strong mathematics for AI & ML?",
      "answer": "Basic understanding helps, but this course focuses more on practical implementation than heavy mathematical theory."
    },
    {
      "faq_id": 5,
      "question": "What programming language is used in this course?",
      "answer": "Python is the primary language used for implementing AI and machine learning models."
    },
    {
      "faq_id": 6,
      "question": "What tools are covered in this AI & ML course?",
      "answer": "The course covers Python, NumPy, Pandas, Scikit-learn, and introductory TensorFlow/Keras."
    },
    {
      "faq_id": 7,
      "question": "Will I work on real-world AI projects?",
      "answer": "Yes. The course includes hands-on labs and a capstone project based on real-world use cases."
    },
    {
      "faq_id": 8,
      "question": "Can this course help me get an AI job?",
      "answer": "Yes. The course builds strong foundational skills required for entry-level AI, ML, and data-related roles."
    },
    {
      "faq_id": 9,
      "question": "Is this an online AI & ML course?",
      "answer": "Yes. This course is delivered through flexible, instructor-led online training formats."
    },
    {
      "faq_id": 10,
      "question": "What careers can AI & Machine Learning skills lead to?",
      "answer": "AI & Machine Learning skills can lead to roles such as AI/ML Engineer, Machine Learning Engineer, Data Analyst, and Associate Data Scientist."
    }
  ],
  "target_audience": [
    "Aspiring AI & ML Engineers",
    "Software Developers",
    "Data Analysts",
    "Engineering Students",
    "Career Transitioners"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "AI & Machine Learning Course: Build Intelligent Systems | Proximsoft",
    "meta_description": "Master AI and Machine Learning. Learn to build, train, and evaluate ML models using Python with a practical, application-first approach.",
    "meta_url": "/courses/artificial-intelligence/ai-machine-learning-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-DAPY-004",
    "course_uid": "uid-data-science-python",
    "course_title": "Data Science with Python Course",
    "course_subtitle": "Analyze Data, Build Insights & Create Data-Driven Solutions Using Python",
    "course_slug": "data-science-with-python-course",
    "course_thumbnail": "/images/courses/coursecover.avif",
    "course_short_description": "Master the data science lifecycle. Learn to analyze complex datasets, visualize insights, and build machine learning solutions using Python.",
    "course_long_description": "This Data Science with Python course is designed to teach learners how to analyze data, extract insights, and build data-driven solutions using Python. The course follows the complete data science lifecycle, covering data collection, cleaning, exploratory analysis, visualization, statistics, and machine learning. It focuses on practical implementation using industry-standard Python libraries.",
    "about_course": [
      "Teaches the complete data science lifecycle including collection, cleaning, and exploratory analysis.",
      "Focuses on practical implementation using Python libraries widely used in the industry.",
      "Enables learners to work with real-world datasets to identify patterns and visualize insights.",
      "Provides a strong foundation in applying machine learning techniques to solve complex business problems."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 4,
    "course_category": {
      "category_id": "CAT_AI",
      "category_title": "Artificial Intelligence",
      "category_url": "/courses/artificial-intelligence"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Industry-standard Python libraries",
      "Predictive modeling focus",
      "Insight-driven decision support",
      "Syllabus available for download",
      "Customized training availability"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/data-science-python",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Data Science with Python Professional Certification",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/ds-python-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of Python programming",
      "Familiarity with mathematics and statistics (helpful but not mandatory)"
    ],
    "key_learnings": [
      "Analyze and interpret complex datasets using Python",
      "Perform professional data visualization and storytelling",
      "Build and evaluate machine learning models for business problems",
      "Apply the end-to-end data science workflow to real-world datasets"
    ],
    "ideal_candidates": [
      "Aspiring Data Scientists",
      "Data Analysts and Business Analysts",
      "Software Engineers",
      "Engineering and Science students",
      "Professionals transitioning into data roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Data Science",
        "Data Analysis",
        "Machine Learning"
      ],
      "supporting_skills": [
        "Statistics",
        "Data Visualization",
        "Feature Engineering",
        "Storytelling with Data"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Python",
        "Pandas",
        "Scikit-learn"
      ],
      "secondary": [
        "NumPy",
        "Matplotlib",
        "Seaborn"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Data Scientist (Junior)",
      "Data Analyst",
      "Business Analyst",
      "Associate Data Scientist"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "IT & Software Services",
      "Finance & Banking",
      "Healthcare & Life Sciences",
      "Retail & E-commerce",
      "Analytics & Consulting"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End Data Science Solution. Build a complete project including data cleaning, EDA, visualization, and machine learning model development to present business insights."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30,
      "difficulty_level": "Beginner to Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Data Science",
        "module_duration": "Week 1",
        "topics": ["What is data science?", "Data science lifecycle", "Real-world applications"]
      },
      {
        "module_number": 2,
        "module_name": "Python for Data Science",
        "module_duration": "Week 2",
        "topics": ["Python fundamentals", "NumPy and Pandas", "Working with datasets"]
      },
      {
        "module_number": 3,
        "module_name": "Data Cleaning & Preprocessing",
        "module_duration": "Week 3",
        "topics": ["Handling missing data", "Data transformation", "Feature engineering basics"]
      },
      {
        "module_number": 4,
        "module_name": "Exploratory Data Analysis (EDA)",
        "module_duration": "Week 4",
        "topics": ["Descriptive statistics", "Visualization techniques", "Pattern discovery"]
      },
      {
        "module_number": 5,
        "module_name": "Data Visualization",
        "module_duration": "Week 5",
        "topics": ["Matplotlib and Seaborn", "Advanced plotting", "Storytelling with data"]
      },
      {
        "module_number": 6,
        "module_name": "Statistics for Data Science",
        "module_duration": "Week 6",
        "topics": ["Probability concepts", "Hypothesis testing", "Statistical inference"]
      },
      {
        "module_number": 7,
        "module_name": "Supervised Machine Learning",
        "module_duration": "Week 7",
        "topics": ["Regression algorithms", "Classification algorithms", "Model evaluation"]
      },
      {
        "module_number": 8,
        "module_name": "Unsupervised Machine Learning",
        "module_duration": "Week 8",
        "topics": ["Clustering techniques", "Dimensionality reduction"]
      },
      {
        "module_number": 9,
        "module_name": "Model Optimization & Pipelines",
        "module_duration": "Week 9",
        "topics": ["Hyperparameter tuning", "Cross-validation", "ML pipelines"]
      },
      {
        "module_number": 10,
        "module_name": "Applied Data Science Use Cases",
        "module_duration": "Week 10",
        "topics": ["Business analytics case studies", "End-to-end workflow presentation"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 1950,
    "total_students_enrolled": 22000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Data Science with Python course?",
      "answer": "A Data Science with Python course teaches how to analyze data, visualize insights, and build machine learning models using Python and real-world datasets."
    },
    {
      "faq_id": 2,
      "question": "Is this Data Science course suitable for beginners?",
      "answer": "Yes. This course is designed for beginners with basic Python knowledge and gradually progresses to intermediate data science concepts."
    },
    {
      "faq_id": 3,
      "question": "What programming language is used in this course?",
      "answer": "Python is the primary programming language used for data analysis, visualization, and machine learning."
    },
    {
      "faq_id": 4,
      "question": "Do I need strong mathematics for data science?",
      "answer": "Basic understanding of mathematics and statistics is helpful, but the course focuses more on practical implementation."
    },
    {
      "faq_id": 5,
      "question": "What tools are covered in this Data Science course?",
      "answer": "The course covers Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn."
    },
    {
      "faq_id": 6,
      "question": "Will I work on real-world data projects?",
      "answer": "Yes. The course includes hands-on labs and a capstone project using real-world datasets."
    },
    {
      "faq_id": 7,
      "question": "What is exploratory data analysis (EDA)?",
      "answer": "EDA is the process of analyzing datasets to summarize patterns, trends, and insights using statistics and visualization techniques."
    },
    {
      "faq_id": 8,
      "question": "Can this course help me get a data analyst or data scientist role?",
      "answer": "Yes. The course builds foundational skills required for entry-level data analyst and junior data scientist roles."
    },
    {
      "faq_id": 9,
      "question": "Is this an online Data Science with Python course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online training options."
    },
    {
      "faq_id": 10,
      "question": "What careers can Data Science with Python skills lead to?",
      "answer": "These skills can lead to roles such as Data Scientist, Data Analyst, Business Analyst, and Associate Data Scientist."
    }
  ],
  "target_audience": [
    "Aspiring Data Scientists",
    "Data Analysts",
    "Business Analysts",
    "Software Engineers",
    "Science & Engineering Students"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Data Science with Python Course: Analyze & Build Insights | Proximsoft",
    "meta_description": "Learn Data Science with Python. Master EDA, data visualization, and machine learning with Scikit-learn, Pandas, and real-world datasets.",
    "meta_url": "/courses/artificial-intelligence/data-science-with-python-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-GENAI-005",
    "course_uid": "uid-generative-ai-pro",
    "course_title": "Generative AI (Gen AI) Course",
    "course_subtitle": "Build, Customize & Deploy Generative AI Applications Using LLMs and Modern AI Architectures",
    "course_slug": "generative-ai-course",
    "course_thumbnail": "/images/courses/generative-ai.avif",
    "course_short_description": "Master Generative AI engineering. Build and deploy real-world applications using LLMs, prompt engineering, RAG, and modern AI architectures.",
    "course_long_description": "This Generative AI course is designed to help professionals build, customize, and deploy real-world Generative AI applications using Large Language Models (LLMs) and modern AI architectures. Unlike generic courses, this program emphasizes hands-on implementation of chatbots, copilots, and RAG systems used in enterprise environments.",
    "about_course": [
      "Designed to help professionals build, customize, and deploy real-world Generative AI applications using LLMs.",
      "Emphasizes hands-on implementation of GenAI systems like chatbots, copilots, and document Q&A systems.",
      "Covers critical production practices including prompt engineering, embeddings, and RAG pipelines.",
      "Teaches learners to design, develop, and deploy scalable solutions for real-world enterprise workflows."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 5,
    "course_category": {
      "category_id": "CAT_AI",
      "category_title": "Artificial Intelligence",
      "category_url": "/courses/artificial-intelligence"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Conversational AI focus",
      "AI copilots & Assistants",
      "Production-ready deployment",
      "Syllabus available for download",
      "Flexible learning schedule"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/generative-ai",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Certified Generative AI Professional",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/genai-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Working knowledge of Python",
      "Familiarity with APIs and web applications",
      "Basic understanding of AI concepts (helpful but not mandatory)"
    ],
    "key_learnings": [
      "Understand Generative AI and LLM concepts in depth",
      "Build complex GenAI applications using RAG pipelines",
      "Design safe, scalable, and reliable AI systems",
      "Deploy and optimize Generative AI solutions for enterprise use"
    ],
    "ideal_candidates": [
      "Software Developers and Full Stack Engineers",
      "AI / ML Engineers",
      "Data Engineers and Cloud Engineers",
      "Product teams building AI features",
      "Professionals transitioning into GenAI roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Generative AI",
        "LLM Development",
        "AI Application Design"
      ],
      "supporting_skills": [
        "Prompt Engineering",
        "Embeddings and Vector Search",
        "Deployment and Optimization"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Python",
        "LLM APIs (OpenAI / Azure OpenAI concepts)"
      ],
      "secondary": [
        "Vector Databases",
        "LangChain (Intro)",
        "Cloud Platforms (AWS / Azure concepts)"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Generative AI Engineer",
      "AI Engineer",
      "Applied AI Engineer",
      "AI Application Developer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "SaaS & Product Companies",
      "Enterprise IT & Platforms",
      "AI & Data Teams",
      "Cloud & DevOps Organizations",
      "Automation & Digital Transformation Teams"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 8,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Production-Ready Generative AI Application. Build a document-based Q&A system or AI copilot including prompt engineering, vector search, RAG architecture, and deployment optimization."
  },
  "curriculum": {
    "summary": {
      "total_modules": 8,
      "total_lectures": 24,
      "difficulty_level": "Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Generative AI",
        "module_duration": "Week 1",
        "topics": ["What is Generative AI?", "Evolution of Large Language Models", "Common GenAI use cases"]
      },
      {
        "module_number": 2,
        "module_name": "Large Language Models (LLMs)",
        "module_duration": "Week 2",
        "topics": ["LLM fundamentals (conceptual)", "Capabilities and limitations", "Inference basics"]
      },
      {
        "module_number": 3,
        "module_name": "Prompt Engineering",
        "module_duration": "Week 3",
        "topics": ["Prompt design techniques", "System prompts vs user prompts", "Optimization strategies"]
      },
      {
        "module_number": 4,
        "module_name": "Working with LLM APIs",
        "module_duration": "Week 4",
        "topics": ["OpenAI and Azure OpenAI concepts", "Chat and completion APIs", "Cost and latency"]
      },
      {
        "module_number": 5,
        "module_name": "Embeddings & Vector Search",
        "module_duration": "Week 5",
        "topics": ["Embedding generation", "Vector similarity search", "Introduction to vector databases"]
      },
      {
        "module_number": 6,
        "module_name": "Retrieval-Augmented Generation (RAG)",
        "module_duration": "Week 6-7",
        "topics": ["RAG architecture patterns", "Document ingestion pipelines", "Query-time retrieval"]
      },
      {
        "module_number": 7,
        "module_name": "Building Generative AI Applications",
        "module_duration": "Week 8",
        "topics": ["Backend integration", "Chatbots and AI copilots", "AI-powered workflows"]
      },
      {
        "module_number": 8,
        "module_name": "Security, Safety & Optimization",
        "module_duration": "Week 9-10",
        "topics": ["Prompt safety and guardrails", "Data privacy considerations", "Performance optimization"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1540,
    "total_students_enrolled": 9500
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Generative AI course?",
      "answer": "A Generative AI course teaches how to build applications using Large Language Models, prompt engineering, embeddings, and RAG pipelines for real-world use cases."
    },
    {
      "faq_id": 2,
      "question": "How is Generative AI different from traditional AI or machine learning?",
      "answer": "Generative AI focuses on creating content and responses using LLMs, while traditional machine learning focuses on prediction and classification tasks."
    },
    {
      "faq_id": 3,
      "question": "Do I need machine learning knowledge for Generative AI?",
      "answer": "Basic understanding helps, but this course focuses more on application development than deep machine learning theory."
    },
    {
      "faq_id": 4,
      "question": "What tools are used in Generative AI development?",
      "answer": "Generative AI development uses Python, LLM APIs, vector databases, RAG frameworks, and cloud platforms."
    },
    {
      "faq_id": 5,
      "question": "What is prompt engineering in Generative AI?",
      "answer": "Prompt engineering is the process of designing and optimizing prompts to guide LLMs toward accurate and useful outputs."
    },
    {
      "faq_id": 6,
      "question": "What is RAG in Generative AI?",
      "answer": "RAG (Retrieval-Augmented Generation) enables AI systems to retrieve external knowledge before generating responses, improving accuracy and relevance."
    },
    {
      "faq_id": 7,
      "question": "Will I build real Generative AI applications in this course?",
      "answer": "Yes. The course includes hands-on labs and a capstone project based on real-world GenAI use cases."
    },
    {
      "faq_id": 8,
      "question": "Is this an online Generative AI course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 9,
      "question": "Can this course help me become a Generative AI Engineer?",
      "answer": "Yes. The course builds the core skills required for entry and mid-level Generative AI engineering roles."
    },
    {
      "faq_id": 10,
      "question": "What careers can Generative AI skills lead to?",
      "answer": "Generative AI skills can lead to roles such as Generative AI Engineer, AI Engineer, Applied AI Engineer, and AI Application Developer."
    }
  ],
  "target_audience": [
    "Software Developers",
    "AI / ML Engineers",
    "Data & Cloud Engineers",
    "Product Teams",
    "Career Transitioners"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Generative AI Course: Build & Deploy LLM Applications | Proximsoft",
    "meta_description": "Learn Generative AI. Master prompt engineering, RAG, and vector search to build production-ready AI copilots and applications using LLM APIs.",
    "meta_url": "/courses/artificial-intelligence/generative-ai-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-MLPY-006",
    "course_uid": "uid-machine-learning-python",
    "course_title": "Machine Learning with Python Course",
    "course_subtitle": "Build Practical Machine Learning Models Using Python for Real-World Applications",
    "course_slug": "machine-learning-with-python-course",
    "course_thumbnail": "/images/courses/ml-python.avif",
    "course_short_description": "Learn to build, evaluate, and deploy practical machine learning models. Master supervised and unsupervised learning algorithms using Python and real-world datasets.",
    "course_long_description": "This Machine Learning with Python course is designed to teach learners how to build practical machine learning models using Python and apply them to real-world datasets. Unlike theory-heavy programs, this course follows an application-oriented approach, focusing on implementing algorithms using industry-standard libraries.",
    "about_course": [
      "Designed to teach learners how to build practical machine learning models using Python and real-world datasets.",
      "Follows an application-oriented approach focusing on implementing supervised and unsupervised learning algorithms.",
      "Provides hands-on experience with data preprocessing, feature engineering, model training, and evaluation.",
      "Prepares learners to independently design and prepare machine learning models for real-world deployment."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 6,
    "course_category": {
      "category_id": "CAT_AI",
      "category_title": "Artificial Intelligence",
      "category_url": "/courses/artificial-intelligence"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "Practical ML implementation",
      "Job Assistance",
      "Flexible Training Options"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/ml-with-python",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Machine Learning with Python Specialist Certification",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/ml-python-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of Python programming",
      "Familiarity with statistics concepts (helpful but not mandatory)"
    ],
    "key_learnings": [
      "Understand core machine learning concepts and lifecycle",
      "Build machine learning models using Python and Scikit-learn",
      "Evaluate and tune model performance using validation techniques",
      "Apply ML techniques to real-world datasets and business problems"
    ],
    "ideal_candidates": [
      "Software Developers",
      "Data Analysts and Aspiring Data Scientists",
      "Engineers transitioning into ML roles",
      "Students and working professionals",
      "Anyone interested in applied machine learning"
    ],
    "skills_gained": {
      "core_skills": [
        "Machine Learning",
        "Data Analysis",
        "Python Programming"
      ],
      "supporting_skills": [
        "Data Preprocessing",
        "Feature Engineering",
        "Model Deployment Basics",
        "EDA"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Python",
        "Scikit-learn"
      ],
      "secondary": [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Machine Learning Engineer (Junior)",
      "Data Analyst",
      "Associate Data Scientist"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "IT & Software Services",
      "Data & Analytics Teams",
      "Finance & FinTech",
      "Healthcare & Life Sciences",
      "AI & Product Companies"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End Machine Learning Solution. Build a complete project including data preprocessing, feature engineering, model training, evaluation, tuning, and deployment-ready workflows."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30,
      "difficulty_level": "Beginner to Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Machine Learning",
        "module_duration": "Week 1",
        "topics": ["What is machine learning?", "Types of ML and applications", "Machine learning lifecycle"]
      },
      {
        "module_number": 2,
        "module_name": "Python for Machine Learning",
        "module_duration": "Week 2",
        "topics": ["Python refreshers", "NumPy and Pandas fundamentals", "Data handling techniques"]
      },
      {
        "module_number": 3,
        "module_name": "Data Preprocessing & EDA",
        "module_duration": "Week 3",
        "topics": ["Data cleaning", "Feature engineering", "Exploratory Data Analysis (EDA)"]
      },
      {
        "module_number": 4,
        "module_name": "Supervised Learning – Regression",
        "module_duration": "Week 4",
        "topics": ["Linear regression", "Model evaluation metrics", "Hands-on implementation"]
      },
      {
        "module_number": 5,
        "module_name": "Supervised Learning – Classification",
        "module_duration": "Week 5",
        "topics": ["Logistic regression", "KNN and Decision Trees", "Evaluation techniques"]
      },
      {
        "module_number": 6,
        "module_name": "Ensemble Learning",
        "module_duration": "Week 6",
        "topics": ["Random Forest", "Gradient Boosting concepts", "Model optimization"]
      },
      {
        "module_number": 7,
        "module_name": "Unsupervised Learning",
        "module_duration": "Week 7",
        "topics": ["Clustering using K-Means", "Dimensionality reduction techniques"]
      },
      {
        "module_number": 8,
        "module_name": "Model Tuning & Validation",
        "module_duration": "Week 8",
        "topics": ["Hyperparameter tuning", "Cross-validation"]
      },
      {
        "module_number": 9,
        "module_name": "Machine Learning Pipelines",
        "module_duration": "Week 9",
        "topics": ["End-to-end ML pipelines", "Reusable workflows"]
      },
      {
        "module_number": 10,
        "module_name": "Model Deployment Basics",
        "module_duration": "Week 10",
        "topics": ["Saving and loading models", "Introduction to deployment approaches"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 2250,
    "total_students_enrolled": 19500
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Machine Learning with Python course?",
      "answer": "A Machine Learning with Python course teaches how to build, evaluate, and apply machine learning models using Python and real-world datasets."
    },
    {
      "faq_id": 2,
      "question": "Is this Machine Learning course suitable for beginners?",
      "answer": "Yes. This course is designed for beginners with basic Python knowledge and gradually progresses to intermediate machine learning concepts."
    },
    {
      "faq_id": 3,
      "question": "What programming language is used in this course?",
      "answer": "Python is the primary language used for implementing machine learning models."
    },
    {
      "faq_id": 4,
      "question": "Do I need strong mathematics for machine learning?",
      "answer": "Basic understanding helps, but this course focuses more on practical implementation than heavy mathematical theory."
    },
    {
      "faq_id": 5,
      "question": "What tools are covered in this ML course?",
      "answer": "The course covers Python, NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn."
    },
    {
      "faq_id": 6,
      "question": "Will I work on real-world machine learning projects?",
      "answer": "Yes. The course includes hands-on labs and a capstone project using real-world datasets."
    },
    {
      "faq_id": 7,
      "question": "What is supervised and unsupervised learning?",
      "answer": "Supervised learning uses labeled data for prediction tasks, while unsupervised learning finds patterns in unlabeled data."
    },
    {
      "faq_id": 8,
      "question": "Does this course cover model deployment?",
      "answer": "Yes. The course introduces basic deployment concepts such as saving, loading, and preparing models for production."
    },
    {
      "faq_id": 9,
      "question": "Can this course help me get a machine learning job?",
      "answer": "Yes. The course builds foundational skills required for junior machine learning and data-related roles."
    },
    {
      "faq_id": 10,
      "question": "What careers can Machine Learning with Python skills lead to?",
      "answer": "These skills can lead to roles such as Machine Learning Engineer (Junior), Data Analyst, and Associate Data Scientist."
    }
  ],
  "target_audience": [
    "Software Developers",
    "Data Analysts",
    "Engineers",
    "Students",
    "Career Transitioners"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Machine Learning with Python Course: Practical Training | Proximsoft",
    "meta_description": "Learn practical Machine Learning with Python. Build and deploy supervised and unsupervised models using Scikit-learn and real-world data.",
    "meta_url": "/courses/artificial-intelligence/machine-learning-with-python-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-PYPRG-007",
    "course_uid": "uid-python-programming-core",
    "course_title": "Python Programming Course",
    "course_subtitle": "Learn Python from Basics to Advanced with Real-World Applications",
    "course_slug": "python-programming-course",
    "course_thumbnail": "/images/courses/python-programming.avif",
    "course_short_description": "Build strong programming foundations. Learn Python from scratch, including OOP, file handling, and APIs, to create clean and efficient applications.",
    "course_long_description": "This Python Programming course is designed to help beginners and professionals build strong programming foundations using Python and apply them to real-world applications. The course covers core Python concepts including variables, control flow, data structures, object-oriented programming, file handling, and exception handling. The focus is on hands-on learning, enabling learners to write clean, efficient, and reusable Python code.",
    "about_course": [
      "Designed to help beginners and professionals build strong programming foundations using Python.",
      "Covers core concepts including variables, data structures, object-oriented programming, and file handling.",
      "Enables learners to write clean, efficient, and reusable Python code through hands-on learning.",
      "Prepares learners for advanced domains such as Data Science, Machine Learning, AI, and Automation."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 7,
    "course_category": {
      "category_id": "CAT_AI",
      "category_title": "Artificial Intelligence",
      "category_url": "/courses/artificial-intelligence"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Flexible Training Options",
      "Hands-on Labs",
      "Real-world Applications",
      "Syllabus available for download",
      "Customized training availability"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/python-programming",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Python Programming Professional Certification",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/python-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "No prior programming experience is required",
      "Basic computer knowledge is sufficient to get started"
    ],
    "key_learnings": [
      "Write clean and efficient Python code",
      "Apply object-oriented programming (OOP) concepts",
      "Work with files, libraries, and APIs",
      "Build real-world Python applications with confidence"
    ],
    "ideal_candidates": [
      "Beginners with no programming background",
      "Software Developers and Test Engineers",
      "Data Science and AI aspirants",
      "Automation and scripting professionals",
      "Students and working professionals"
    ],
    "skills_gained": {
      "core_skills": [
        "Python Programming",
        "Software Development",
        "Automation"
      ],
      "supporting_skills": [
        "Object-Oriented Programming (OOP)",
        "API Integration",
        "Debugging and Problem Solving"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Python",
        "VS Code"
      ],
      "secondary": [
        "PyCharm",
        "NumPy (Basics)",
        "Pandas (Basics)"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Python Developer",
      "Junior Software Engineer",
      "Automation Engineer",
      "Data Analyst (Entry-Level)"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "IT & Software Development",
      "Data & Analytics",
      "AI & Machine Learning",
      "Automation & DevOps",
      "Finance & Cloud Computing"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Real-World Python Application. Develop an application that includes data handling, file operations, object-oriented design, error handling, and automation features based on a practical business use case."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30,
      "difficulty_level": "Beginner to Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Python",
        "module_duration": "Week 1",
        "topics": ["What is Python?", "Installing Python and IDE setup", "Writing your first Python program"]
      },
      {
        "module_number": 2,
        "module_name": "Python Basics",
        "module_duration": "Week 2",
        "topics": ["Variables and data types", "Operators", "Input and output"]
      },
      {
        "module_number": 3,
        "module_name": "Control Flow",
        "module_duration": "Week 3",
        "topics": ["Conditional statements", "Loops", "Control statements"]
      },
      {
        "module_number": 4,
        "module_name": "Data Structures",
        "module_duration": "Week 4",
        "topics": ["Lists and Tuples", "Sets and Dictionaries", "Practical use cases"]
      },
      {
        "module_number": 5,
        "module_name": "Functions & Modules",
        "module_duration": "Week 5",
        "topics": ["Defining functions", "Arguments and return values", "Python modules and packages"]
      },
      {
        "module_number": 6,
        "module_name": "Object-Oriented Programming (OOP)",
        "module_duration": "Week 6",
        "topics": ["Classes and objects", "Inheritance and polymorphism", "Encapsulation and abstraction"]
      },
      {
        "module_number": 7,
        "module_name": "File Handling & Exceptions",
        "module_duration": "Week 7",
        "topics": ["Reading and writing files", "Exception handling", "Logging basics"]
      },
      {
        "module_number": 8,
        "module_name": "Working with Libraries",
        "module_duration": "Week 8",
        "topics": ["NumPy basics", "Pandas introduction", "Virtual environments"]
      },
      {
        "module_number": 9,
        "module_name": "Python for Automation & APIs",
        "module_duration": "Week 9",
        "topics": ["Scripting basics", "Working with APIs", "Automation use cases"]
      },
      {
        "module_number": 10,
        "module_name": "Best Practices & Project Readiness",
        "module_duration": "Week 10",
        "topics": ["Code optimization", "Debugging techniques", "Python project structure"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 3200,
    "total_students_enrolled": 28000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Python Programming course?",
      "answer": "A Python Programming course teaches the fundamentals of Python, object-oriented programming, file handling, and application development using real-world examples."
    },
    {
      "faq_id": 2,
      "question": "Is this Python course suitable for beginners?",
      "answer": "Yes. This course is designed for beginners with no prior programming experience."
    },
    {
      "faq_id": 3,
      "question": "What programming concepts will I learn in this course?",
      "answer": "You will learn Python basics, data structures, OOP, file handling, exception handling, libraries, APIs, and automation concepts."
    },
    {
      "faq_id": 4,
      "question": "Do I need prior coding experience to learn Python?",
      "answer": "No. Basic computer knowledge is enough to start learning Python."
    },
    {
      "faq_id": 5,
      "question": "What tools are used in this Python course?",
      "answer": "The course uses Python, VS Code, PyCharm, NumPy, and Pandas."
    },
    {
      "faq_id": 6,
      "question": "Will I work on real-world Python projects?",
      "answer": "Yes. The course includes hands-on labs and a capstone project based on real-world use cases."
    },
    {
      "faq_id": 7,
      "question": "Can Python help me move into data science or AI?",
      "answer": "Yes. Python is the primary language used in data science, machine learning, and AI."
    },
    {
      "faq_id": 8,
      "question": "Is this an online Python programming course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online training options."
    },
    {
      "faq_id": 9,
      "question": "How long does it take to learn Python through this course?",
      "answer": "The course can be completed in 8–10 weeks with consistent practice."
    },
    {
      "faq_id": 10,
      "question": "What careers can Python programming skills lead to?",
      "answer": "Python skills can lead to roles such as Python Developer, Software Engineer, Automation Engineer, and Entry-Level Data Analyst."
    }
  ],
  "target_audience": [
    "Beginners",
    "Software Developers",
    "Data & AI Aspirants",
    "Students",
    "Working Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Python Programming Course: From Basics to Advanced | Proximsoft",
    "meta_description": "Master Python Programming. Learn core concepts, OOP, file handling, and automation through hands-on labs and real-world projects. No prior coding required.",
    "meta_url": "/courses/artificial-intelligence/python-programming-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AWSDA-008",
    "course_uid": "uid-aws-data-analytics-specialty",
    "course_title": "AWS Data Analytics Specialty Course",
    "course_subtitle": "Design, Build & Optimize Scalable Data Analytics Solutions on AWS",
    "course_slug": "aws-data-analytics-specialty-course",
    "course_thumbnail": "/images/courses/aws-data-analytics.avif",
    "course_short_description": "Master the complete AWS analytics lifecycle. Learn to design, build, and secure scalable data lakes and warehouses using S3, Glue, Redshift, and EMR.",
    "course_long_description": "The AWS Data Analytics Specialty course is designed to help professionals design, build, and operate end-to-end data analytics solutions on Amazon Web Services. This course focuses on the complete analytics lifecycle—from data ingestion and storage to processing, querying, visualization, security, and optimization. Learners gain hands-on experience with AWS-native analytics services used in real enterprise data platforms.",
    "about_course": [
      "Helps professionals design, build, and operate end-to-end data analytics solutions on AWS.",
      "Focuses on the complete analytics lifecycle including ingestion, storage, processing, and visualization.",
      "Provides hands-on experience with enterprise AWS services like Redshift, EMR, and Glue.",
      "Teaches the design of scalable, secure, and cost-efficient architectures for batch and real-time workloads."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate to Advanced",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 8,
    "course_category": {
      "category_id": "CAT_CLOUD",
      "category_title": "Cloud Computing",
      "category_url": "/courses/cloud-computing"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Cloud Data Lakehouse architectures",
      "Real-time streaming pipelines",
      "Enterprise security & governance",
      "Syllabus available for download",
      "Exam preparation readiness"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/aws-data-analytics",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "AWS Certified Data Analytics Specialty (Industry Recognized)",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/aws-da-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Understanding of databases and SQL",
      "Basic knowledge of data warehousing concepts",
      "Familiarity with AWS or cloud platforms (helpful but not mandatory)"
    ],
    "key_learnings": [
      "Design scalable data lakes and warehouses on AWS",
      "Build batch and real-time analytics pipelines using Kinesis and Glue",
      "Optimize analytics performance and cost across S3 and Redshift",
      "Implement secure and governed data platforms using Lake Formation"
    ],
    "ideal_candidates": [
      "Data Engineers and Data Analysts",
      "Cloud Engineers working with data platforms",
      "BI and Analytics professionals",
      "Software Engineers handling data pipelines",
      "IT professionals moving into cloud data roles"
    ],
    "skills_gained": {
      "core_skills": [
        "AWS Data Analytics",
        "Data Engineering on AWS",
        "Cloud Analytics Architecture"
      ],
      "supporting_skills": [
        "ETL and Data Pipelines",
        "Streaming Analytics",
        "BI and Performance Optimization",
        "Data Lifecycle Management"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Amazon S3",
        "AWS Glue",
        "Amazon Athena",
        "Amazon Redshift"
      ],
      "secondary": [
        "Amazon EMR",
        "AWS Kinesis",
        "Amazon QuickSight",
        "AWS IAM and Lake Formation"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "AWS Data Engineer",
      "Data Analytics Engineer",
      "Cloud Data Engineer",
      "BI / Analytics Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "Cloud & SaaS Companies",
      "Data Engineering Teams",
      "FinTech & Banking",
      "Healthcare & Analytics Platforms",
      "Cloud Consulting Firms"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End AWS Data Analytics Platform. Design and implement a complete platform including data ingestion, ETL using Glue, querying with Athena/Redshift, and BI visualization with QuickSight."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40,
      "difficulty_level": "Intermediate to Advanced"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Data Analytics Fundamentals & AWS Overview",
        "module_duration": "Week 1",
        "topics": ["Data analytics concepts", "Batch vs real-time analytics", "AWS global infrastructure", "Shared responsibility model"]
      },
      {
        "module_number": 2,
        "module_name": "Data Storage on AWS",
        "module_duration": "Week 2",
        "topics": ["Amazon S3 for data lakes", "Storage formats (Parquet, ORC, JSON)", "Data lifecycle and cost optimization"]
      },
      {
        "module_number": 3,
        "module_name": "Data Ingestion & Streaming",
        "module_duration": "Week 3",
        "topics": ["AWS Kinesis (Data Streams, Firehose)", "Batch vs streaming ingestion", "Real-time processing patterns"]
      },
      {
        "module_number": 4,
        "module_name": "Data Processing & ETL",
        "module_duration": "Week 4",
        "topics": ["AWS Glue fundamentals", "Crawlers, Jobs, and Data Catalog", "ETL best practices"]
      },
      {
        "module_number": 5,
        "module_name": "Big Data Processing with EMR",
        "module_duration": "Week 5",
        "topics": ["Amazon EMR architecture", "Apache Spark basics", "Performance tuning techniques"]
      },
      {
        "module_number": 6,
        "module_name": "Querying & Analytics",
        "module_duration": "Week 6",
        "topics": ["Amazon Athena", "Amazon Redshift and Redshift Spectrum", "Query optimization techniques"]
      },
      {
        "module_number": 7,
        "module_name": "Data Warehousing on AWS",
        "module_duration": "Week 7",
        "topics": ["Redshift architecture", "Data modeling for analytics", "Scaling and concurrency management"]
      },
      {
        "module_number": 8,
        "module_name": "Data Visualization & BI",
        "module_duration": "Week 8",
        "topics": ["Amazon QuickSight", "Dashboards and insights", "BI tool integration"]
      },
      {
        "module_number": 9,
        "module_name": "Security, Governance & Compliance",
        "module_duration": "Week 9",
        "topics": ["AWS Lake Formation", "IAM and data access control", "Encryption and auditing"]
      },
      {
        "module_number": 10,
        "module_name": "Monitoring, Optimization & Best Practices",
        "module_duration": "Week 10",
        "topics": ["Performance monitoring", "Cost optimization strategies", "Real-world analytics architectures"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 2400,
    "total_students_enrolled": 15000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is the AWS Data Analytics Specialty course?",
      "answer": "The AWS Data Analytics Specialty course teaches how to design, build, and optimize scalable data analytics solutions on AWS using services like S3, Glue, Athena, Redshift, and EMR."
    },
    {
      "faq_id": 2,
      "question": "Who should take the AWS Data Analytics course?",
      "answer": "Data engineers, analysts, cloud engineers, BI professionals, and IT professionals working with analytics workloads on AWS should take this course."
    },
    {
      "faq_id": 3,
      "question": "Do I need AWS experience for this course?",
      "answer": "Basic familiarity with AWS helps, but the course covers concepts and services from the ground up."
    },
    {
      "faq_id": 4,
      "question": "What AWS services are covered in this course?",
      "answer": "The course covers Amazon S3, Glue, Athena, Redshift, EMR, Kinesis, QuickSight, and Lake Formation."
    },
    {
      "faq_id": 5,
      "question": "Is this course aligned with real-world AWS analytics use cases?",
      "answer": "Yes. The curriculum and projects are aligned with real enterprise data analytics architectures on AWS."
    },
    {
      "faq_id": 6,
      "question": "Does this course include real-world projects?",
      "answer": "Yes. The course includes multiple projects and a comprehensive capstone project."
    },
    {
      "faq_id": 7,
      "question": "What is the difference between batch and real-time analytics on AWS?",
      "answer": "Batch analytics processes large datasets at intervals, while real-time analytics processes streaming data continuously for immediate insights."
    },
    {
      "faq_id": 8,
      "question": "Will I learn data lake and data warehouse design?",
      "answer": "Yes. The course covers designing and operating data lakes and data warehouses on AWS."
    },
    {
      "faq_id": 9,
      "question": "Is this an online AWS Data Analytics course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 10,
      "question": "What careers can AWS Data Analytics skills lead to?",
      "answer": "AWS data analytics skills can lead to roles such as AWS Data Engineer, Data Analytics Engineer, Cloud Data Engineer, and BI Engineer."
    }
  ],
  "target_audience": [
    "Data Engineers",
    "Data Analysts",
    "Cloud Architects",
    "BI Professionals",
    "IT Systems Engineers"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "AWS Data Analytics Specialty Course: Master Cloud Analytics | Proximsoft",
    "meta_description": "Design and build scalable AWS analytics solutions. Learn S3 Data Lakes, Redshift Warehousing, and Glue ETL through hands-on enterprise projects.",
    "meta_url": "/courses/cloud-computing/aws-data-analytics-specialty-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AWSDV-009",
    "course_uid": "uid-aws-devops-engineer-pro",
    "course_title": "AWS DevOps Engineer Course",
    "course_subtitle": "Automate, Deploy & Manage Scalable CI/CD Pipelines on AWS",
    "course_slug": "aws-devops-engineer-course",
    "course_thumbnail": "/images/courses/aws-devops.avif",
    "course_short_description": "Master modern DevOps workflows on AWS. Learn to automate CI/CD pipelines, infrastructure as code, and containerized deployments using EKS and Docker.",
    "course_long_description": "The AWS DevOps Engineer course is designed to help professionals build, automate, and manage modern DevOps workflows on Amazon Web Services. This course focuses on implementing CI/CD pipelines, infrastructure as code, containerization, monitoring, security, and reliability engineering using AWS-native DevOps services and real production scenarios.",
    "about_course": [
      "Designed to help professionals build, automate, and manage modern DevOps workflows on AWS.",
      "Focuses on CI/CD pipelines, infrastructure as code (IaC), and containerization.",
      "Provides hands-on experience designing scalable deployment pipelines and operating cloud-native applications.",
      "Teaches high availability, security, and reliability engineering using real production scenarios."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate to Advanced",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 9,
    "course_category": {
      "category_id": "CAT_CLOUD",
      "category_title": "Cloud Computing",
      "category_url": "/courses/cloud-computing"
    }
  },
  "course_structure": {
    "course_timeline": "12 Weeks",
    "total_duration": "100-120 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Infrastructure Automation (IaC)",
      "Continuous Integration & Delivery",
      "Containerization & Orchestration",
      "Syllabus available for download",
      "Production-ready architecture scenarios"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/aws-devops-engineer",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "AWS DevOps Engineer Professional Certification Readiness",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/aws-devops-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of AWS or cloud platforms",
      "Knowledge of Linux fundamentals",
      "Familiarity with Git and basic scripting (helpful but not mandatory)"
    ],
    "key_learnings": [
      "Build end-to-end CI/CD pipelines on AWS",
      "Automate infrastructure using CloudFormation and Terraform",
      "Deploy and manage containerized applications using Docker and EKS",
      "Implement monitoring, logging, and security best practices"
    ],
    "ideal_candidates": [
      "DevOps Engineers and Cloud Engineers",
      "System Administrators transitioning to DevOps",
      "Software Developers working with cloud deployments",
      "IT professionals managing CI/CD pipelines",
      "Professionals aiming for DevOps roles on AWS"
    ],
    "skills_gained": {
      "core_skills": [
        "AWS DevOps",
        "CI/CD Pipeline Engineering",
        "Containerization with Docker and Kubernetes"
      ],
      "supporting_skills": [
        "Infrastructure Automation",
        "Monitoring and Observability",
        "Security and Compliance in DevOps"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "AWS CodePipeline",
        "AWS CodeBuild",
        "AWS CodeDeploy",
        "AWS CodeCommit"
      ],
      "secondary": [
        "Docker",
        "Amazon EKS (Kubernetes)",
        "AWS CloudFormation",
        "Terraform (Basics)",
        "Amazon CloudWatch",
        "Git & Linux"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "AWS DevOps Engineer",
      "Cloud DevOps Engineer",
      "Site Reliability Engineer (SRE)",
      "Platform Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "SaaS & Product Companies",
      "Cloud & Platform Engineering Teams",
      "FinTech & Digital Enterprises",
      "Startups & Scaleups",
      "Cloud Consulting Firms"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 12,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Production-Grade AWS DevOps Pipeline. Design and implement a complete pipeline including source control, containerized deployment, CI/CD orchestration, monitoring, and auto-scaling strategies."
  },
  "curriculum": {
    "summary": {
      "total_modules": 12,
      "total_lectures": 48,
      "difficulty_level": "Intermediate to Advanced"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "DevOps Fundamentals & AWS Overview",
        "module_duration": "Week 1",
        "topics": ["DevOps principles and culture", "CI/CD concepts", "AWS global infrastructure", "Shared responsibility model"]
      },
      {
        "module_number": 2,
        "module_name": "Linux, Git & Scripting Basics",
        "module_duration": "Week 2",
        "topics": ["Linux commands and shell scripting", "Git version control", "Git branching strategies"]
      },
      {
        "module_number": 3,
        "module_name": "Infrastructure as Code (IaC)",
        "module_duration": "Week 3",
        "topics": ["AWS CloudFormation", "Terraform basics", "Automating infrastructure provisioning"]
      },
      {
        "module_number": 4,
        "module_name": "Continuous Integration (CI)",
        "module_duration": "Week 4",
        "topics": ["AWS CodeCommit", "AWS CodeBuild", "Build automation and artifacts"]
      },
      {
        "module_number": 5,
        "module_name": "Continuous Deployment (CD)",
        "module_duration": "Week 5",
        "topics": ["AWS CodeDeploy", "AWS CodePipeline", "Blue-Green and Rolling deployments"]
      },
      {
        "module_number": 6,
        "module_name": "Containerization & Docker",
        "module_duration": "Week 6",
        "topics": ["Docker fundamentals", "Docker images and containers", "Docker with AWS"]
      },
      {
        "module_number": 7,
        "module_name": "Kubernetes on AWS (EKS)",
        "module_duration": "Week 7",
        "topics": ["Kubernetes architecture", "Amazon EKS setup", "Deploying applications on EKS"]
      },
      {
        "module_number": 8,
        "module_name": "Configuration Management",
        "module_duration": "Week 8",
        "topics": ["AWS Systems Manager", "Parameter Store and Secrets Manager", "Configuration best practices"]
      },
      {
        "module_number": 9,
        "module_name": "Monitoring, Logging & Alerting",
        "module_duration": "Week 9",
        "topics": ["Amazon CloudWatch", "CloudTrail and AWS Config", "Log analysis and alerts"]
      },
      {
        "module_number": 10,
        "module_name": "Security & Compliance in DevOps",
        "module_duration": "Week 10",
        "topics": ["IAM best practices", "DevSecOps concepts", "Secure pipelines and secrets management"]
      },
      {
        "module_number": 11,
        "module_name": "High Availability & Reliability Engineering",
        "module_duration": "Week 11",
        "topics": ["Auto Scaling strategies", "Load Balancers", "Disaster recovery and backup"]
      },
      {
        "module_number": 12,
        "module_name": "Real-World DevOps Projects",
        "module_duration": "Week 12",
        "topics": ["CI/CD pipeline implementation", "End-to-end AWS DevOps workflows", "Production-ready architecture scenarios"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1850,
    "total_students_enrolled": 12500
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is an AWS DevOps Engineer course?",
      "answer": "An AWS DevOps Engineer course teaches how to automate, deploy, and manage CI/CD pipelines, infrastructure, and cloud-native applications on AWS."
    },
    {
      "faq_id": 2,
      "question": "Who should take the AWS DevOps course?",
      "answer": "DevOps engineers, cloud engineers, system administrators, and developers working with AWS deployments should take this course."
    },
    {
      "faq_id": 3,
      "question": "Do I need AWS experience for this course?",
      "answer": "Basic AWS knowledge helps, but the course covers AWS DevOps services from fundamentals to advanced workflows."
    },
    {
      "faq_id": 4,
      "question": "What AWS DevOps tools are covered in this course?",
      "answer": "The course covers CodeCommit, CodeBuild, CodeDeploy, CodePipeline, CloudFormation, Docker, Kubernetes (EKS), and CloudWatch."
    },
    {
      "faq_id": 5,
      "question": "Is this course aligned with real-world DevOps practices?",
      "answer": "Yes. The curriculum and projects reflect real production DevOps pipelines used in enterprise environments."
    },
    {
      "faq_id": 6,
      "question": "Will I work on real AWS DevOps projects?",
      "answer": "Yes. The course includes multiple hands-on projects and a production-grade capstone."
    },
    {
      "faq_id": 7,
      "question": "Does this course cover containerization and Kubernetes?",
      "answer": "Yes. Docker fundamentals and Kubernetes deployment using Amazon EKS are included."
    },
    {
      "faq_id": 8,
      "question": "Will I learn infrastructure as code (IaC)?",
      "answer": "Yes. The course covers AWS CloudFormation and Terraform basics for infrastructure automation."
    },
    {
      "faq_id": 9,
      "question": "Is this an online AWS DevOps course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 10,
      "question": "What careers can AWS DevOps skills lead to?",
      "answer": "AWS DevOps skills can lead to roles such as AWS DevOps Engineer, Cloud DevOps Engineer, Site Reliability Engineer, and Platform Engineer."
    }
  ],
  "target_audience": [
    "DevOps Professionals",
    "Cloud Engineers",
    "System Administrators",
    "Full-Stack Developers",
    "IT Operations Managers"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "AWS DevOps Engineer Course: Automate & Scale CI/CD | Proximsoft",
    "meta_description": "Master AWS DevOps. Learn to automate deployment pipelines, manage EKS clusters, and implement IaC with CloudFormation and Terraform in a production environment.",
    "meta_url": "/courses/cloud-computing/aws-devops-engineer-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AWSSA-010",
    "course_uid": "uid-aws-solutions-architect-assoc",
    "course_title": "AWS Solutions Architect – Associate Course",
    "course_subtitle": "Design, Deploy & Secure Scalable Cloud Architectures on AWS",
    "course_slug": "aws-solutions-architect-associate-course",
    "course_thumbnail": "/images/courses/aws-solutions-architect.avif",
    "course_short_description": "Master the fundamentals of AWS cloud architecture. Learn to design secure, scalable, and cost-optimized solutions while preparing for the SAA-C03 certification.",
    "course_long_description": "The AWS Solutions Architect – Associate course is designed to help you build strong cloud architecture fundamentals and confidently design scalable, secure, and cost-optimized solutions on Amazon Web Services (AWS). This course focuses on architecting applications using core AWS services and blends real-world scenarios with the latest SAA-C03 exam blueprint.",
    "about_course": [
      "Designed to help build strong cloud architecture fundamentals and design scalable, secure, and cost-optimized solutions on AWS.",
      "Focuses on core services such as EC2, VPC, S3, RDS, IAM, Load Balancers, and Auto Scaling.",
      "Blends real-world architecture scenarios and AWS best practices mapped to the latest SAA-C03 blueprint.",
      "Prepares learners to clear the AWS Certified Solutions Architect – Associate exam and apply skills to enterprise projects."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 10,
    "course_category": {
      "category_id": "CAT_CLOUD",
      "category_title": "Cloud Computing",
      "category_url": "/courses/cloud-computing"
    }
  },
  "course_structure": {
    "course_timeline": "12 Weeks",
    "total_duration": "100-120 Hours",
    "weekly_commitment_duration": "6–8 Hours (Live + Practice)",
    "modules_included": true,
    "course_features": [
      "Highly available & fault-tolerant design",
      "Enterprise security best practices",
      "Cost optimization & management",
      "SAA-C03 Exam Alignment",
      "Syllabus available for download"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/aws-solutions-architect",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "AWS Certified Solutions Architect – Associate (SAA-C03)",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/aws-saa-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Understanding of basic networking concepts (IP, DNS, subnets)",
      "Familiarity with operating systems (Linux or Windows)",
      "Basic knowledge of application or software deployment (helpful)",
      "No prior AWS experience required"
    ],
    "key_learnings": [
      "Design scalable and fault-tolerant AWS architectures",
      "Implement secure networking and IAM strategies",
      "Optimize AWS cost and performance using Well-Architected frameworks",
      "Choose appropriate AWS services for complex business needs"
    ],
    "ideal_candidates": [
      "Aspiring Cloud Architects",
      "Software Developers moving to cloud-based architectures",
      "System Administrators and DevOps Engineers",
      "IT professionals preparing for AWS certification",
      "Fresh graduates starting a career in Cloud Computing"
    ],
    "skills_gained": {
      "core_skills": [
        "Cloud Architecture Design",
        "AWS Core Services",
        "Security and Cost Optimization"
      ],
      "supporting_skills": [
        "Monitoring and Observability",
        "Disaster Recovery",
        "Architecture Decision Making"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Amazon EC2",
        "Amazon S3",
        "Amazon VPC",
        "AWS IAM"
      ],
      "secondary": [
        "Amazon RDS",
        "Amazon DynamoDB",
        "AWS Lambda",
        "CloudWatch",
        "CloudTrail",
        "AWS CLI"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "AWS Solutions Architect",
      "Cloud Engineer",
      "DevOps / Infrastructure Engineer",
      "Cloud Consultant"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "Cloud Consulting Firms",
      "SaaS & Product Companies",
      "IT Services & Enterprises",
      "Startups & Scaleups",
      "FinTech & Digital Platforms"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 12,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Enterprise AWS Architecture. Design and implement a highly available, secure, and cost-optimized architecture including networking/VPC design, compute selection, and IAM strategies."
  },
  "curriculum": {
    "summary": {
      "total_modules": 12,
      "total_lectures": 48,
      "difficulty_level": "Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Cloud Computing & AWS",
        "module_duration": "Week 1",
        "topics": ["Cloud models (IaaS, PaaS, SaaS)", "Benefits of AWS", "Global Infrastructure", "Shared Responsibility"]
      },
      {
        "module_number": 2,
        "module_name": "Identity & Access Management (IAM)",
        "module_duration": "Week 2",
        "topics": ["Users, groups, roles, policies", "MFA", "AWS Organizations"]
      },
      {
        "module_number": 3,
        "module_name": "Compute Services",
        "module_duration": "Week 3",
        "topics": ["EC2 fundamentals", "Instance types & pricing", "Auto Scaling", "Load Balancers (ALB, NLB)"]
      },
      {
        "module_number": 4,
        "module_name": "Storage Services",
        "module_duration": "Week 4",
        "topics": ["S3 storage classes", "S3 lifecycle & versioning", "EBS and EFS", "AWS Backup"]
      },
      {
        "module_number": 5,
        "module_name": "Networking & VPC",
        "module_duration": "Week 5",
        "topics": ["VPC design", "Security Groups vs NACLs", "Peering & Endpoints", "Hybrid connectivity"]
      },
      {
        "module_number": 6,
        "module_name": "Databases",
        "module_duration": "Week 6",
        "topics": ["RDS and Aurora", "DynamoDB fundamentals", "HA and backups", "Database selection strategies"]
      },
      {
        "module_number": 7,
        "module_name": "High Availability & Fault Tolerance",
        "module_duration": "Week 7",
        "topics": ["Multi-AZ/Region designs", "Load balancing strategies", "Disaster recovery patterns"]
      },
      {
        "module_number": 8,
        "module_name": "Security & Monitoring",
        "module_duration": "Week 8",
        "topics": ["Shield, WAF, and KMS", "CloudWatch and CloudTrail", "AWS Config"]
      },
      {
        "module_number": 9,
        "module_name": "Application Integration & Migration",
        "module_duration": "Week 9",
        "topics": ["SNS, SQS, and EventBridge", "AWS Lambda", "Migration strategies & tools"]
      },
      {
        "module_number": 10,
        "module_name": "Cost Management & Optimization",
        "module_duration": "Week 10",
        "topics": ["Cost Explorer & Budgets", "Reserved Instances & Savings Plans", "Cost-optimized design"]
      },
      {
        "module_number": 11,
        "module_name": "Architecture Design Scenarios",
        "module_duration": "Week 11",
        "topics": ["Real-world case studies", "Exam-style architecture questions", "Whiteboarding solutions"]
      },
      {
        "module_number": 12,
        "module_name": "Certification Preparation",
        "module_duration": "Week 12",
        "topics": ["SAA-C03 structure", "Mock tests", "Exam tips & best practices"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 4500,
    "total_students_enrolled": 25000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is the AWS Solutions Architect – Associate course?",
      "answer": "It teaches how to design, deploy, and secure scalable cloud architectures on AWS and prepares learners for the SAA-C03 certification."
    },
    {
      "faq_id": 2,
      "question": "Is this course aligned with the SAA-C03 exam?",
      "answer": "Yes. The curriculum is fully aligned with the latest AWS Solutions Architect – Associate exam blueprint."
    },
    {
      "faq_id": 3,
      "question": "Do I need prior AWS experience?",
      "answer": "No. The course starts from cloud fundamentals and gradually builds advanced architecture skills."
    },
    {
      "faq_id": 4,
      "question": "What AWS services are covered in this course?",
      "answer": "EC2, S3, VPC, IAM, RDS, DynamoDB, Load Balancers, Auto Scaling, CloudWatch, and more."
    },
    {
      "faq_id": 5,
      "question": "Will I work on real-world AWS architecture projects?",
      "answer": "Yes. The course includes multiple hands-on projects and a production-grade capstone."
    },
    {
      "faq_id": 6,
      "question": "Is this course suitable for beginners in cloud computing?",
      "answer": "It is best suited for learners with basic IT and networking knowledge."
    },
    {
      "faq_id": 7,
      "question": "Does the course include cost optimization strategies?",
      "answer": "Yes. Cost management and optimization are core parts of the curriculum."
    },
    {
      "faq_id": 8,
      "question": "Is this an online AWS certification course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 9,
      "question": "Can this course help me get a cloud job?",
      "answer": "Yes. The skills taught align with real-world AWS architecture roles."
    },
    {
      "faq_id": 10,
      "question": "What careers can AWS Solutions Architect skills lead to?",
      "answer": "Roles include AWS Solutions Architect, Cloud Engineer, DevOps Engineer, and Cloud Consultant."
    }
  ],
  "target_audience": [
    "Aspiring Cloud Architects",
    "Systems Administrators",
    "DevOps Engineers",
    "Solutions Architects",
    "IT Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "AWS Solutions Architect Associate (SAA-C03) Course | Proximsoft",
    "meta_description": "Get certified as an AWS Solutions Architect. Master VPC, EC2, S3, and RDS while designing secure, scalable enterprise architectures for the SAA-C03 exam.",
    "meta_url": "/courses/cloud-computing/aws-solutions-architect-associate-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AZ104-011",
    "course_uid": "uid-azure-administrator-pro",
    "course_title": "Azure Administrator (AZ-104) Course",
    "course_subtitle": "Manage, Secure & Monitor Microsoft Azure Infrastructure",
    "course_slug": "azure-administrator-az-104-course",
    "course_thumbnail": "/images/courses/azure-administrator.avif",
    "course_short_description": "Master Microsoft Azure administration. Learn to manage identities, governance, storage, compute, and virtual networks in real enterprise settings.",
    "course_long_description": "The Azure Administrator (AZ-104) course is designed to help IT professionals manage and operate Microsoft Azure environments efficiently in real production settings. This course focuses on day-to-day Azure administration responsibilities including identity management, governance, virtual networking, compute, storage, security, monitoring, and backup.",
    "about_course": [
      "Designed to help IT professionals manage and operate Microsoft Azure environments efficiently in real production settings.",
      "Focuses on day-to-day Azure administration responsibilities including identity management, governance, and virtual networking.",
      "Utilizes hands-on labs and real enterprise scenarios to build confidence in managing Azure subscriptions and resources.",
      "Enables learners to administer Azure infrastructure, optimize resources, and ensure secure and reliable cloud operations."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 11,
    "course_category": {
      "category_id": "CAT_CLOUD",
      "category_title": "Cloud Computing",
      "category_url": "/courses/cloud-computing"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "60-80 Hours",
    "weekly_commitment_duration": "6–8 Hours",
    "modules_included": true,
    "course_features": [
      "Role-based administration workflows",
      "Identity management (Azure AD) focus",
      "Subscription & Governance control",
      "Syllabus available for download",
      "Flexible learning schedule"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/azure-administrator",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/azure-admin-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Understanding of networking fundamentals (IP, DNS, subnets)",
      "Basic knowledge of virtualization concepts",
      "Familiarity with Windows Server or Linux (helpful)"
    ],
    "key_learnings": [
      "Manage Azure subscriptions and implement governance",
      "Configure and secure Azure virtual networking",
      "Deploy and manage compute and storage resources",
      "Monitor, back up, and secure Azure environments"
    ],
    "ideal_candidates": [
      "Azure Administrators",
      "System and Network Administrators",
      "IT Support and Operations Engineers",
      "Cloud Engineers",
      "Professionals moving to Microsoft Azure"
    ],
    "skills_gained": {
      "core_skills": [
        "Azure Administration",
        "Cloud Operations",
        "Infrastructure Management"
      ],
      "supporting_skills": [
        "Monitoring and Observability",
        "Security and Compliance",
        "Automation with CLI and PowerShell"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Microsoft Azure Portal",
        "Azure Virtual Machines",
        "Azure Virtual Networks",
        "Azure Active Directory"
      ],
      "secondary": [
        "Azure Storage Accounts",
        "Azure Monitor",
        "Azure Backup",
        "Azure CLI and PowerShell"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Azure Administrator",
      "Cloud Administrator",
      "Cloud Operations Engineer",
      "IT Infrastructure Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "Enterprise IT & Operations",
      "Cloud & Infrastructure Teams",
      "Microsoft-centric Organizations",
      "Consulting & Managed Services",
      "Hybrid Cloud Environments"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 8,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Enterprise Azure Administration. Design, deploy, secure, and monitor a complete Azure infrastructure including Azure AD, Virtual Networking, NSGs, VM scaling, and backup controls."
  },
  "curriculum": {
    "summary": {
      "total_modules": 8,
      "total_lectures": 32,
      "difficulty_level": "Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Azure Fundamentals & Governance",
        "module_duration": "Week 1",
        "topics": ["Azure architecture and subscriptions", "Resource groups and management groups", "Azure policies and RBAC"]
      },
      {
        "module_number": 2,
        "module_name": "Identity & Access Management",
        "module_duration": "Week 2",
        "topics": ["Azure Active Directory (Azure AD)", "Users, groups, and roles", "Conditional access and MFA"]
      },
      {
        "module_number": 3,
        "module_name": "Azure Virtual Networking",
        "module_duration": "Week 3",
        "topics": ["Virtual networks and subnets", "Network Security Groups (NSG)", "Azure Load Balancer and Application Gateway"]
      },
      {
        "module_number": 4,
        "module_name": "Compute Services",
        "module_duration": "Week 4",
        "topics": ["Azure Virtual Machines", "VM availability and scaling", "Azure App Services overview"]
      },
      {
        "module_number": 5,
        "module_name": "Azure Storage",
        "module_duration": "Week 5",
        "topics": ["Storage accounts and blob storage", "File shares and disks", "Storage security and lifecycle management"]
      },
      {
        "module_number": 6,
        "module_name": "Monitoring & Backup",
        "module_duration": "Week 6",
        "topics": ["Azure Monitor and Log Analytics", "Alerts and diagnostics", "Azure Backup and Recovery Services Vault"]
      },
      {
        "module_number": 7,
        "module_name": "Security & Compliance",
        "module_duration": "Week 7",
        "topics": ["Microsoft Defender for Cloud", "Azure Key Vault", "Security best practices"]
      },
      {
        "module_number": 8,
        "module_name": "Automation & Administration Tools",
        "module_duration": "Week 8",
        "topics": ["Azure PowerShell and CLI", "ARM templates (overview)", "Administrative automation"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1200,
    "total_students_enrolled": 8500
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is the Azure Administrator (AZ-104) course?",
      "answer": "It teaches how to manage Azure subscriptions, networking, compute, storage, security, and monitoring for real-world Azure environments."
    },
    {
      "faq_id": 2,
      "question": "Is this course aligned with the AZ-104 exam?",
      "answer": "Yes. The curriculum aligns with the responsibilities of the Azure Administrator role and the AZ-104 exam objectives."
    },
    {
      "faq_id": 3,
      "question": "Do I need prior Azure experience?",
      "answer": "Basic IT and networking knowledge helps, but prior Azure experience is not mandatory."
    },
    {
      "faq_id": 4,
      "question": "What Azure services are covered in this course?",
      "answer": "Azure AD, Virtual Machines, Virtual Networks, Storage Accounts, Azure Monitor, Backup, and security services."
    },
    {
      "faq_id": 5,
      "question": "Will I work on real Azure administration projects?",
      "answer": "Yes. The course includes hands-on labs and a production-style capstone project."
    },
    {
      "faq_id": 6,
      "question": "Is this course suitable for system administrators?",
      "answer": "Yes. System and network administrators transitioning to Azure will benefit greatly."
    },
    {
      "faq_id": 7,
      "question": "Does the course include automation tools?",
      "answer": "Yes. Azure CLI, PowerShell, and ARM template basics are included."
    },
    {
      "faq_id": 8,
      "question": "Is this an online Azure Administrator course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 9,
      "question": "Can this course help me get an Azure admin job?",
      "answer": "Yes. The skills taught match real Azure Administrator job requirements."
    },
    {
      "faq_id": 10,
      "question": "What careers can Azure Administrator skills lead to?",
      "answer": "Roles include Azure Administrator, Cloud Administrator, Cloud Operations Engineer, and IT Infrastructure Engineer."
    }
  ],
  "target_audience": [
    "Azure Administrators",
    "Systems Administrators",
    "IT Operations Engineers",
    "Cloud Operations Professionals",
    "Network Engineers"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Azure Administrator AZ-104 Course: Master Cloud Ops | Proximsoft",
    "meta_description": "Become a certified Azure Administrator. Learn AZ-104 skills including Azure AD, virtual networking, VM management, and cloud security through hands-on labs.",
    "meta_url": "/courses/cloud-computing/azure-administrator-az-104-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-DP203-012",
    "course_uid": "uid-azure-data-engineer-pro",
    "course_title": "Azure Data Engineer (DP-203) Course",
    "course_subtitle": "Design, Build & Optimize Modern Data Engineering Solutions on Microsoft Azure",
    "course_slug": "azure-data-engineer-dp-203-course",
    "course_thumbnail": "/images/courses/azure-data-engineer.avif",
    "course_short_description": "Master the Azure data lifecycle. Learn to design, build, and operate scalable pipelines using Data Factory, Databricks, and Synapse Analytics.",
    "course_long_description": "The Azure Data Engineer (DP-203) course is designed to help professionals design, build, and operate modern data engineering solutions on Microsoft Azure. This course covers the complete data engineering lifecycle on Azure — from data ingestion and transformation to orchestration, analytics, security, and optimization using production-ready patterns.",
    "about_course": [
      "Designed to help professionals design, build, and operate modern data engineering solutions on Microsoft Azure.",
      "Covers the complete data engineering lifecycle including ingestion, transformation, and orchestration.",
      "Provides hands-on experience with Azure-native services like Synapse, Databricks, and Data Factory.",
      "Teaches the design of scalable, secure, and cost-optimized data pipelines for batch and streaming workloads."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate to Advanced",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 12,
    "course_category": {
      "category_id": "CAT_CLOUD",
      "category_title": "Cloud Computing",
      "category_url": "/courses/cloud-computing"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Modern Data Lakehouse architectures",
      "Batch & Streaming pipeline design",
      "Enterprise data security patterns",
      "Syllabus available for download",
      "DP-203 Exam Readiness"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/azure-data-engineer",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Microsoft Certified: Azure Data Engineer Associate (DP-203)",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/azure-de-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Strong understanding of SQL",
      "Basic knowledge of Python",
      "Familiarity with Azure or cloud platforms (helpful but not mandatory)"
    ],
    "key_learnings": [
      "Build scalable batch and streaming data pipelines on Azure",
      "Design modern data lakes (ADLS Gen2) and data warehouses (Synapse)",
      "Optimize data engineering performance, security, and cost",
      "Implement enterprise-grade transformation using Databricks and Spark"
    ],
    "ideal_candidates": [
      "Data Engineers and Analytics Engineers",
      "BI Developers moving to cloud data platforms",
      "Cloud Engineers handling data workloads",
      "Software Engineers working with data pipelines",
      "IT professionals transitioning into data engineering"
    ],
    "skills_gained": {
      "core_skills": [
        "Azure Data Engineering",
        "Cloud Data Platforms",
        "Analytics Engineering"
      ],
      "supporting_skills": [
        "ETL and Data Pipelines",
        "Streaming Data Processing",
        "Performance Optimization",
        "Data Security"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Azure Data Factory",
        "Azure Data Lake Storage (ADLS)",
        "Azure Synapse Analytics"
      ],
      "secondary": [
        "Azure Databricks",
        "Azure SQL",
        "Azure Event Hubs"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Azure Data Engineer",
      "Cloud Data Engineer",
      "Analytics Engineer",
      "Data Platform Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "Data & Analytics Teams",
      "Cloud & Platform Engineering",
      "SaaS & Product Companies",
      "FinTech & Healthcare",
      "Cloud Consulting Firms"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 8,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End Azure Data Engineering Platform. Design and implement a complete solution including batch/streaming ingestion, transformation with Databricks, storage in ADLS, and analytics via Azure Synapse."
  },
  "curriculum": {
    "summary": {
      "total_modules": 8,
      "total_lectures": 32,
      "difficulty_level": "Intermediate to Advanced"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Data Engineering Fundamentals & Azure Overview",
        "module_duration": "Week 1",
        "topics": ["Data engineering concepts", "Batch vs streaming pipelines", "Azure data ecosystem overview"]
      },
      {
        "module_number": 2,
        "module_name": "Data Storage on Azure",
        "module_duration": "Week 2",
        "topics": ["Azure Data Lake Storage (ADLS Gen2)", "Data formats (Parquet, Delta)", "Data lifecycle and cost optimization"]
      },
      {
        "module_number": 3,
        "module_name": "Data Ingestion with Azure Data Factory",
        "module_duration": "Week 3",
        "topics": ["ADF pipelines and activities", "Linked services and datasets", "Batch data ingestion patterns"]
      },
      {
        "module_number": 4,
        "module_name": "Data Transformation & Processing",
        "module_duration": "Week 4",
        "topics": ["Azure Databricks fundamentals", "Apache Spark basics", "Data transformation strategies"]
      },
      {
        "module_number": 5,
        "module_name": "Data Warehousing with Azure Synapse",
        "module_duration": "Week 5",
        "topics": ["Azure Synapse architecture", "Dedicated vs serverless SQL pools", "Data modeling and performance tuning"]
      },
      {
        "module_number": 6,
        "module_name": "Streaming Data Processing",
        "module_duration": "Week 6",
        "topics": ["Azure Event Hubs", "Stream analytics concepts", "Real-time ingestion patterns"]
      },
      {
        "module_number": 7,
        "module_name": "Security, Governance & Monitoring",
        "module_duration": "Week 7",
        "topics": ["Azure identity and access control", "Data security and encryption", "Monitoring and logging best practices"]
      },
      {
        "module_number": 8,
        "module_name": "Optimization & Best Practices",
        "module_duration": "Week 8",
        "topics": ["Performance optimization techniques", "Cost management strategies", "Real-world architecture scenarios"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 1100,
    "total_students_enrolled": 7200
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is the Azure Data Engineer (DP-203) course?",
      "answer": "It teaches how to design, build, and optimize data engineering solutions on Microsoft Azure using services like Data Factory, Databricks, Synapse, and Data Lake."
    },
    {
      "faq_id": 2,
      "question": "Is this course aligned with the DP-203 certification?",
      "answer": "Yes. The curriculum aligns with real Azure Data Engineer responsibilities and DP-203 exam objectives."
    },
    {
      "faq_id": 3,
      "question": "Do I need Azure experience for this course?",
      "answer": "Basic familiarity helps, but the course covers Azure data services from fundamentals to advanced use cases."
    },
    {
      "faq_id": 4,
      "question": "What Azure services are covered in this course?",
      "answer": "Azure Data Factory, ADLS Gen2, Azure Synapse Analytics, Azure Databricks, Azure SQL, and Event Hubs."
    },
    {
      "faq_id": 5,
      "question": "Will I build real-world Azure data pipelines?",
      "answer": "Yes. The course includes hands-on labs and a production-style capstone project."
    },
    {
      "faq_id": 6,
      "question": "Does the course include streaming data processing?",
      "answer": "Yes. Real-time ingestion using Event Hubs and streaming concepts are covered."
    },
    {
      "faq_id": 7,
      "question": "Is SQL required for Azure data engineering?",
      "answer": "Yes. Strong SQL knowledge is essential for analytics and warehouse workloads."
    },
    {
      "faq_id": 8,
      "question": "Is this an online Azure Data Engineer course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 9,
      "question": "Can this course help me get a data engineering job?",
      "answer": "Yes. The skills taught align with real Azure Data Engineer job requirements."
    },
    {
      "faq_id": 10,
      "question": "What careers can Azure Data Engineer skills lead to?",
      "answer": "Roles include Azure Data Engineer, Cloud Data Engineer, Analytics Engineer, and Data Platform Engineer."
    }
  ],
  "target_audience": [
    "Data Engineers",
    "BI Developers",
    "Cloud Engineers",
    "Software Engineers",
    "IT Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Azure Data Engineer DP-203 Course: Build Modern Data Solutions | Proximsoft",
    "meta_description": "Master Azure Data Engineering. Learn DP-203 skills including Synapse Analytics, Azure Databricks, and Data Factory through hands-on labs and real-world pipelines.",
    "meta_url": "/courses/cloud-computing/azure-data-engineer-dp-203-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-ADB-013",
    "course_uid": "uid-azure-databricks-mastery",
    "course_title": "Azure Databricks Course",
    "course_subtitle": "Build, Optimize & Scale Big Data and AI Workloads on Azure Databricks",
    "course_slug": "azure-databricks-course",
    "course_thumbnail": "/images/courses/azure-databricks.avif",
    "course_short_description": "Master the unified analytics platform. Learn to build, optimize, and scale big data engineering and AI workloads using Apache Spark and Delta Lake on Microsoft Azure.",
    "course_long_description": "The Azure Databricks course is designed to help professionals build, optimize, and scale large-scale data engineering and analytics solutions on Microsoft Azure using Apache Spark. This course focuses on Azure Databricks architecture, big data processing, ETL pipelines, Delta Lake optimization, and integration with Azure data services.",
    "about_course": [
      "Designed for building, optimizing, and scaling large-scale data engineering solutions on Azure using Apache Spark.",
      "Covers fundamental architecture, cluster management, and big data processing workflows.",
      "Emphasis on Delta Lake for high-performance data lakes with ACID transactions.",
      "Integrates deeply with Azure ecosystem services like Data Factory, Synapse, and Data Lake Storage."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 13,
    "course_category": {
      "category_id": "CAT_CLOUD",
      "category_title": "Cloud Computing",
      "category_url": "/courses/cloud-computing"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Unified Analytics Platform",
      "Delta Lake Architecture",
      "Apache Spark Optimization",
      "Syllabus available for download",
      "Production-ready data workflows"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/azure-databricks",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Databricks Certified Data Engineer Associate Readiness",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/databricks-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Understanding of SQL and databases",
      "Basic knowledge of Python or Scala",
      "Familiarity with Azure or cloud platforms (helpful but not mandatory)"
    ],
    "key_learnings": [
      "Build scalable data pipelines using Azure Databricks and Spark",
      "Process and transform large datasets with high performance",
      "Optimize storage and reliability using Delta Lake ACID transactions",
      "Implement lakehouse architectures on Microsoft Azure"
    ],
    "ideal_candidates": [
      "Data Engineers and Analytics Engineers",
      "Big Data Developers",
      "Cloud Engineers working with data platforms",
      "BI professionals transitioning into big data",
      "Software Engineers handling large-scale data"
    ],
    "skills_gained": {
      "core_skills": [
        "Big Data Processing",
        "Data Engineering",
        "Cloud Analytics"
      ],
      "supporting_skills": [
        "Apache Spark Optimization",
        "Data Lake and Lakehouse Architecture",
        "Performance Tuning for Analytics Workloads"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Azure Databricks",
        "Apache Spark",
        "Delta Lake"
      ],
      "secondary": [
        "Azure Data Lake Storage (ADLS)",
        "Azure Data Factory (ADF)",
        "Azure Synapse Analytics"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Azure Data Engineer",
      "Databricks Engineer",
      "Big Data Engineer",
      "Analytics Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "Data Engineering Teams",
      "Data Analytics & BI Platforms",
      "Cloud & Platform Engineering",
      "SaaS & Product Companies",
      "Enterprise Data Science Teams"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 8,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End Azure Databricks Data Pipeline. Ingest data from ADLS, transform using Apache Spark, and optimize storage with Delta Lake for analytics-ready outputs."
  },
  "curriculum": {
    "summary": {
      "total_modules": 8,
      "total_lectures": 32,
      "difficulty_level": "Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Big Data & Azure Databricks Overview",
        "module_duration": "Week 1",
        "topics": ["Big data concepts", "Apache Spark overview", "Architecture", "Cluster management"]
      },
      {
        "module_number": 2,
        "module_name": "Databricks Workspace & Notebooks",
        "module_duration": "Week 2",
        "topics": ["Databricks notebooks", "Python/SQL usage", "Jobs & workflows", "DBUtils"]
      },
      {
        "module_number": 3,
        "module_name": "Apache Spark Fundamentals",
        "module_duration": "Week 3",
        "topics": ["RDDs, DataFrames, Datasets", "Transformations & actions", "Spark SQL"]
      },
      {
        "module_number": 4,
        "module_name": "Data Ingestion & ETL",
        "module_duration": "Week 4",
        "topics": ["Ingesting from ADLS", "Working with Parquet/JSON", "ETL pipelines"]
      },
      {
        "module_number": 5,
        "module_name": "Delta Lake & Data Optimization",
        "module_duration": "Week 5",
        "topics": ["Delta architecture", "ACID transactions", "Time travel", "Versioning"]
      },
      {
        "module_number": 6,
        "module_name": "Advanced Spark & Performance Tuning",
        "module_duration": "Week 6",
        "topics": ["Partitioning & caching", "Broadcast joins", "Cluster tuning"]
      },
      {
        "module_number": 7,
        "module_name": "Integration with Azure Services",
        "module_duration": "Week 7",
        "topics": ["ADLS connectivity", "Synapse integration", "Data Factory orchestration"]
      },
      {
        "module_number": 8,
        "module_name": "Security, Monitoring & Best Practices",
        "module_duration": "Week 8",
        "topics": ["Security model", "Access control", "Secrets management", "Monitoring"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1100,
    "total_students_enrolled": 6800
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is an Azure Databricks course?",
      "answer": "An Azure Databricks course teaches how to build and optimize big data and analytics pipelines using Apache Spark on Azure."
    },
    {
      "faq_id": 2,
      "question": "Is Azure Databricks used for data science and data analytics?",
      "answer": "Yes. Azure Databricks is widely used for data science, data analytics, and large-scale data processing workloads."
    },
    {
      "faq_id": 3,
      "question": "Do I need Apache Spark experience for Azure Databricks?",
      "answer": "No. This course covers Apache Spark fundamentals from scratch."
    },
    {
      "faq_id": 4,
      "question": "What is Delta Lake in Azure Databricks?",
      "answer": "Delta Lake adds ACID transactions, versioning, and performance optimization to data lakes."
    },
    {
      "faq_id": 5,
      "question": "Will I work on real-world data engineering projects?",
      "answer": "Yes. The course includes hands-on labs and a production-style capstone project."
    },
    {
      "faq_id": 6,
      "question": "Which languages are used in Azure Databricks?",
      "answer": "Python and SQL are primarily used, with optional Scala exposure."
    },
    {
      "faq_id": 7,
      "question": "Is this an online Azure Databricks course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 8,
      "question": "Can this course help me get a Databricks Engineer role?",
      "answer": "Yes. The skills taught align with real-world Databricks and big data engineering roles."
    },
    {
      "faq_id": 9,
      "question": "Does the course cover performance and cost optimization?",
      "answer": "Yes. Advanced Spark tuning and cluster optimization are included."
    },
    {
      "faq_id": 10,
      "question": "What careers can Azure Databricks skills lead to?",
      "answer": "Roles include Azure Data Engineer, Databricks Engineer, Big Data Engineer, and Analytics Engineer."
    }
  ],
  "target_audience": [
    "Data Engineers",
    "Big Data Developers",
    "Analytics Engineers",
    "Cloud Architects",
    "Software Engineers"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Azure Databricks Course: Big Data & Spark Training | Proximsoft",
    "meta_description": "Master Azure Databricks and Apache Spark. Learn Delta Lake architecture, ETL pipelines, and high-performance big data processing on Microsoft Azure.",
    "meta_url": "/courses/cloud-computing/azure-databricks-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AZ400-014",
    "course_uid": "uid-azure-devops-engineer-expert",
    "course_title": "Azure DevOps Engineer (AZ-400) Course",
    "course_subtitle": "Design, Implement & Optimize DevOps Practices on Microsoft Azure",
    "course_slug": "azure-devops-engineer-az-400-course",
    "course_thumbnail": "/images/courses/azure-devops-az400.avif",
    "course_short_description": "Master end-to-end DevOps on Azure. Learn to design CI/CD pipelines, automate infrastructure with IaC, and manage containerized apps using AKS and GitHub Actions.",
    "course_long_description": "The Azure DevOps Engineer (AZ-400) course is designed to help professionals design, implement, and manage end-to-end DevOps practices on Microsoft Azure. This course focuses on building CI/CD pipelines, managing source control, automating infrastructure using Infrastructure as Code (IaC), deploying containerized applications, and implementing monitoring and security using Azure-native DevOps tools.",
    "about_course": [
      "Designed to help professionals design, implement, and manage end-to-end DevOps practices on Microsoft Azure.",
      "Focuses on building CI/CD pipelines, source control, and infrastructure automation using ARM and Terraform.",
      "Utilizes Azure-native tools including Azure Pipelines, GitHub Actions, and Azure Kubernetes Service (AKS).",
      "Teaches the design of secure, reliable, and automated DevOps workflows for modern cloud-native applications."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate to Advanced",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 14,
    "course_category": {
      "category_id": "CAT_CLOUD",
      "category_title": "Cloud Computing",
      "category_url": "/courses/cloud-computing"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "CI/CD Pipeline Engineering",
      "Infrastructure as Code (IaC)",
      "Containerization & Orchestration",
      "Syllabus available for download",
      "AZ-400 Exam Readiness"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/azure-devops-expert",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Microsoft Certified: Azure DevOps Engineer Expert (AZ-400)",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/azure-devops-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of Microsoft Azure services",
      "Familiarity with Git and version control",
      "Knowledge of basic scripting and application deployment concepts"
    ],
    "key_learnings": [
      "Build end-to-end CI/CD pipelines on Azure using Azure Pipelines and GitHub Actions",
      "Automate infrastructure using ARM templates and Terraform basics",
      "Deploy and manage containerized applications on Azure Kubernetes Service (AKS)",
      "Implement advanced monitoring, security, and DevSecOps practices"
    ],
    "ideal_candidates": [
      "DevOps Engineers and Cloud Engineers",
      "Azure Administrators moving into DevOps roles",
      "Software Developers involved in CI/CD pipelines",
      "System Administrators transitioning to DevOps",
      "IT professionals managing cloud application deployments"
    ],
    "skills_gained": {
      "core_skills": [
        "Azure DevOps Engineering",
        "CI/CD Pipeline Design",
        "Infrastructure as Code"
      ],
      "supporting_skills": [
        "Containers and Kubernetes",
        "Monitoring and Security",
        "Automation and Reliability Engineering"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Azure DevOps Services",
        "Azure Pipelines",
        "GitHub Actions"
      ],
      "secondary": [
        "ARM Templates",
        "Terraform (Basics)",
        "Docker",
        "Azure Kubernetes Service (AKS)",
        "Azure Monitor"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Azure DevOps Engineer",
      "Cloud DevOps Engineer",
      "Site Reliability Engineer (SRE)",
      "Platform Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "Cloud & Platform Engineering Teams",
      "SaaS & Product Companies",
      "Enterprise IT & DevOps Teams",
      "Cloud Consulting Firms",
      "DevSecOps and SRE Teams"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 8,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End Azure DevOps CI/CD Pipeline. Design and implement a complete pipeline including Git/GitHub source control, automated build/release, AKS container deployment, and IaC infrastructure automation."
  },
  "curriculum": {
    "summary": {
      "total_modules": 8,
      "total_lectures": 32,
      "difficulty_level": "Intermediate to Advanced"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "DevOps Fundamentals & Azure Overview",
        "module_duration": "Week 1",
        "topics": ["DevOps culture and practices", "Azure DevOps ecosystem", "Agile collaboration"]
      },
      {
        "module_number": 2,
        "module_name": "Source Control Management",
        "module_duration": "Week 2",
        "topics": ["Git fundamentals", "Azure Repos vs GitHub", "Branching and Pull Requests"]
      },
      {
        "module_number": 3,
        "module_name": "Continuous Integration (CI)",
        "module_duration": "Week 3",
        "topics": ["Azure Pipelines", "Build pipelines and artifacts", "YAML-based pipelines"]
      },
      {
        "module_number": 4,
        "module_name": "Continuous Delivery (CD)",
        "module_duration": "Week 4",
        "topics": ["Release pipelines", "Blue-Green & Canary strategies", "Gates and approvals"]
      },
      {
        "module_number": 5,
        "module_name": "Infrastructure as Code (IaC)",
        "module_duration": "Week 5",
        "topics": ["ARM templates", "Terraform on Azure", "Automated provisioning"]
      },
      {
        "module_number": 6,
        "module_name": "Containers & Kubernetes",
        "module_duration": "Week 6",
        "topics": ["Docker fundamentals", "Azure Container Registry (ACR)", "Azure Kubernetes Service (AKS)"]
      },
      {
        "module_number": 7,
        "module_name": "Monitoring, Security & Compliance",
        "module_duration": "Week 7",
        "topics": ["Azure Monitor & App Insights", "DevSecOps practices", "Azure Key Vault"]
      },
      {
        "module_number": 8,
        "module_name": "Collaboration, Testing & Optimization",
        "module_duration": "Week 8",
        "topics": ["Test automation", "Work item tracking", "Reliability engineering"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1450,
    "total_students_enrolled": 9200
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is the Azure DevOps Engineer (AZ-400) course?",
      "answer": "It teaches how to design and implement DevOps practices on Azure, including CI/CD pipelines, automation, containers, and monitoring."
    },
    {
      "faq_id": 2,
      "question": "Is this course aligned with the AZ-400 certification?",
      "answer": "Yes. The curriculum aligns with real Azure DevOps Engineer responsibilities and the AZ-400 exam objectives."
    },
    {
      "faq_id": 3,
      "question": "Do I need DevOps experience to take this course?",
      "answer": "Basic cloud and Git knowledge helps, but DevOps concepts are taught step by step."
    },
    {
      "faq_id": 4,
      "question": "What tools are covered in this Azure DevOps course?",
      "answer": "Azure DevOps Services, Azure Pipelines, GitHub Actions, ARM templates, Terraform basics, Docker, and AKS."
    },
    {
      "faq_id": 5,
      "question": "Will I build real CI/CD pipelines?",
      "answer": "Yes. The course includes hands-on labs and a production-style capstone project."
    },
    {
      "faq_id": 6,
      "question": "Does the course cover Infrastructure as Code?",
      "answer": "Yes. ARM templates and Terraform basics are included."
    },
    {
      "faq_id": 7,
      "question": "Is Kubernetes included in this course?",
      "answer": "Yes. Containerization with Docker and deployment on Azure Kubernetes Service (AKS) are covered."
    },
    {
      "faq_id": 8,
      "question": "Is this an online Azure DevOps course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 9,
      "question": "Can this course help me become a DevOps Engineer?",
      "answer": "Yes. The skills taught align with real Azure DevOps and cloud engineering roles."
    },
    {
      "faq_id": 10,
      "question": "What careers can Azure DevOps skills lead to?",
      "answer": "Roles include Azure DevOps Engineer, Cloud DevOps Engineer, SRE, and Platform Engineer."
    }
  ],
  "target_audience": [
    "DevOps Engineers",
    "Cloud Engineers",
    "Software Developers",
    "System Administrators",
    "Site Reliability Engineers"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Azure DevOps Engineer AZ-400 Course: Master CI/CD | Proximsoft",
    "meta_description": "Design and implement end-to-end DevOps on Azure. Master AZ-400 skills including Azure Pipelines, GitHub Actions, Docker, AKS, and Terraform for cloud automation.",
    "meta_url": "/courses/cloud-computing/azure-devops-engineer-az-400-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-DV-AZ-015",
    "course_uid": "uid-devops-with-azure-implementation",
    "course_title": "DevOps with Azure Course",
    "course_subtitle": "Build, Automate & Deploy Scalable Applications Using Azure DevOps Practices",
    "course_slug": "devops-with-azure-course",
    "course_thumbnail": "/images/courses/devops-with-azure.avif",
    "course_short_description": "Bridge the gap between development and operations. Learn to automate the full software lifecycle on Azure using CI/CD pipelines, IaC, and containerization.",
    "course_long_description": "The DevOps with Azure course is designed to help professionals implement modern DevOps practices on Microsoft Azure for building, deploying, and managing cloud-native applications. This course covers the complete DevOps lifecycle on Azure — from source control and CI/CD pipelines to infrastructure automation, containerization, monitoring, and security.",
    "about_course": [
      "Designed to help professionals implement modern DevOps practices on Microsoft Azure for cloud-native applications.",
      "Covers the complete DevOps lifecycle from source control to infrastructure automation and monitoring.",
      "Focuses on practical DevOps implementation for real-world reliability in enterprise environments.",
      "Provides hands-on experience with core tools like Azure Pipelines, GitHub, Bicep, and Terraform."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 15,
    "course_category": {
      "category_id": "CAT_CLOUD",
      "category_title": "Cloud Computing",
      "category_url": "/courses/cloud-computing"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Practical DevOps implementation focus",
      "End-to-end CI/CD automation",
      "Infrastructure as Code (IaC) labs",
      "Syllabus available for download",
      "Production-ready deployment workflows"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.0,
    "discounted_price": 0.0,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/devops-with-azure",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "DevOps with Azure Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/devops-azure-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Understanding of Azure fundamentals",
      "Basic knowledge of Git and source control",
      "Familiarity with scripting (PowerShell or Bash is helpful)"
    ],
    "key_learnings": [
      "Implement end-to-end CI/CD pipelines on Azure ",
      "Automate infrastructure using ARM/Bicep and Terraform",
      "Deploy and manage containerized applications using AKS",
      "Apply DevSecOps and monitoring best practices with Application Insights"
    ],
    "ideal_candidates": [
      "DevOps Engineers and Cloud Engineers",
      "Azure Administrators",
      "Software Developers involved in CI/CD",
      "Site Reliability Engineers (SREs)",
      "IT professionals transitioning into DevOps roles"
    ],
    "skills_gained": {
      "core_skills": [
        "DevOps Engineering on Azure",
        "CI/CD Pipeline Design",
        "Cloud Automation"
      ],
      "supporting_skills": [
        "Containers and Kubernetes",
        "Monitoring and Reliability",
        "Security and DevSecOps"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Azure DevOps",
        "Azure Pipelines",
        "Azure Kubernetes Service (AKS)"
      ],
      "secondary": [
        "GitHub",
        "Docker",
        "ARM / Bicep",
        "Terraform (Basics)",
        "Azure Monitor"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Azure DevOps Engineer",
      "Cloud DevOps Engineer",
      "Site Reliability Engineer (SRE)",
      "Platform Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    },
    "top_hiring_domains": [
      "Cloud & Platform Engineering Teams",
      "SaaS & Product Companies",
      "Enterprise IT & DevOps Teams",
      "Cloud Consulting Firms",
      "SRE and DevSecOps Teams"
    ]
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 8,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Azure DevOps CI/CD Pipeline with AKS. Design and implement a complete pipeline that builds/tests a cloud-native app, automates infrastructure using IaC, and deploys to AKS with integrated monitoring."
  },
  "curriculum": {
    "summary": {
      "total_modules": 8,
      "total_lectures": 32,
      "difficulty_level": "Intermediate"
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "DevOps Fundamentals & Azure Overview",
        "module_duration": "Week 1",
        "topics": ["DevOps principles and culture", "Azure DevOps ecosystem", "CI/CD concepts"]
      },
      {
        "module_number": 2,
        "module_name": "Source Control & Collaboration",
        "module_duration": "Week 2",
        "topics": ["Git fundamentals", "Azure Repos and GitHub", "Branching and collaboration strategies"]
      },
      {
        "module_number": 3,
        "module_name": "Continuous Integration (CI)",
        "module_duration": "Week 3",
        "topics": ["Azure Pipelines fundamentals", "Build pipelines", "Artifact management"]
      },
      {
        "module_number": 4,
        "module_name": "Continuous Delivery (CD)",
        "module_duration": "Week 4",
        "topics": ["Release pipelines", "Environment strategies", "Deployment approvals"]
      },
      {
        "module_number": 5,
        "module_name": "Infrastructure as Code (IaC)",
        "module_duration": "Week 5",
        "topics": ["ARM templates and Bicep", "Introduction to Terraform", "Azure resource automation"]
      },
      {
        "module_number": 6,
        "module_name": "Containers & Kubernetes on Azure",
        "module_duration": "Week 6",
        "topics": ["Docker fundamentals", "Azure Container Registry (ACR)", "Azure Kubernetes Service (AKS)"]
      },
      {
        "module_number": 7,
        "module_name": "Monitoring, Security & Reliability",
        "module_duration": "Week 7",
        "topics": ["Azure Monitor and Application Insights", "DevSecOps basics", "Secrets and key management"]
      },
      {
        "module_number": 8,
        "module_name": "Optimization & Enterprise DevOps Practices",
        "module_duration": "Week 8",
        "topics": ["Pipeline optimization", "Cost management strategies", "Real-world architectures"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 980,
    "total_students_enrolled": 6500
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is the DevOps with Azure course?",
      "answer": "It teaches how to implement DevOps practices on Microsoft Azure, including CI/CD pipelines, automation, containers, and monitoring."
    },
    {
      "faq_id": 2,
      "question": "How is DevOps with Azure different from AZ-400?",
      "answer": "This course focuses on hands-on DevOps implementation, while AZ-400 is more certification-oriented."
    },
    {
      "faq_id": 3,
      "question": "Do I need Azure experience for this course?",
      "answer": "Basic Azure knowledge helps, but core concepts are explained step by step."
    },
    {
      "faq_id": 4,
      "question": "What tools are covered in DevOps with Azure?",
      "answer": "Azure DevOps, Azure Pipelines, GitHub, ARM/Bicep, Terraform basics, Docker, and AKS."
    },
    {
      "faq_id": 5,
      "question": "Will I build real CI/CD pipelines?",
      "answer": "Yes. The course includes hands-on labs and a production-style capstone project."
    },
    {
      "faq_id": 6,
      "question": "Does this course include Kubernetes on Azure?",
      "answer": "Yes. Docker and Azure Kubernetes Service (AKS) are covered."
    },
    {
      "faq_id": 7,
      "question": "Is this an online Azure DevOps course?",
      "answer": "Yes. The course is delivered through flexible, instructor-led online batches."
    },
    {
      "faq_id": 8,
      "question": "Is this course suitable for SRE roles?",
      "answer": "Yes. Monitoring, reliability, and DevSecOps concepts are included."
    },
    {
      "faq_id": 9,
      "question": "Can this course help me move into a DevOps role?",
      "answer": "Yes. The skills taught align with real-world Azure DevOps job requirements."
    },
    {
      "faq_id": 10,
      "question": "What careers can DevOps with Azure skills lead to?",
      "answer": "Roles include Azure DevOps Engineer, Cloud DevOps Engineer, SRE, and Platform Engineer."
    }
  ],
  "target_audience": [
    "Azure Administrators",
    "DevOps Engineers",
    "Software Developers",
    "Site Reliability Engineers",
    "IT Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "DevOps with Azure Course: Automate & Deploy on Cloud | Proximsoft",
    "meta_description": "Master DevOps on Azure. Learn CI/CD pipelines, ARM templates, Terraform, and AKS to automate and scale your cloud-native applications with confidence.",
    "meta_url": "/courses/cloud-computing/devops-with-azure-course"
  }
},

]