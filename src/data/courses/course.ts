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
{
  "course_details": {
    "course_id": "CRS-AWS-DE-016",
    "course_uid": "uid-aws-data-engineering-pro",
    "course_title": "AWS Data Engineering Course",
    "course_subtitle": "Design, Build & Optimize Scalable Data Pipelines on Amazon Web Services",
    "course_slug": "aws-data-engineering-course",
    "course_thumbnail": "assets/images/courses/aws-data-engineering.jpg",
    "course_short_description": "Master the AWS data engineering lifecycle. Build scalable pipelines, data lakes, and warehouses using S3, Glue, Redshift, and Athena.",
    "course_long_description": "This AWS Data Engineering course is designed to help professionals build scalable, secure, and high-performance data pipelines on Amazon Web Services. The program focuses on the complete data engineering lifecycle—from data ingestion and transformation to storage, orchestration, analytics, and optimization using AWS-native services.",
    "about_course": [
      "Focuses on the complete data engineering lifecycle using AWS-native services.",
      "Teaches how modern cloud data platforms are designed and operated in real enterprise environments.",
      "Hands-on experience with Amazon S3, AWS Glue, Amazon Redshift, and Amazon Athena.",
      "Prepares learners to build production-ready pipelines for analytics, BI, and AI workloads."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 1,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
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
      "Production-first mindset",
      "Syllabus Available",
      "Flexible learning schedule"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/aws-data-engineering",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "AWS Data Engineering Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/aws-de-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Strong understanding of SQL",
      "Basic database concepts",
      "Prior cloud exposure is helpful but not mandatory"
    ],
    "key_learnings": [
      "Design AWS-based data architectures ",
      "Build scalable and secure data pipelines using AWS Glue",
      "Transform and optimize data for cloud-native analytics",
      "Serve data for BI tools like Power BI and Tableau"
    ],
    "ideal_candidates": [
      "Aspiring AWS Data Engineers",
      "Data Analysts transitioning into cloud data engineering",
      "SQL and BI professionals moving to AWS",
      "Software Engineers working with data pipelines"
    ],
    "skills_gained": {
      "core_skills": [
        "AWS Data Engineering",
        "Cloud Data Pipelines",
        "Data Warehousing"
      ],
      "supporting_skills": [
        "Data Lake Architecture",
        "SQL Optimization",
        "Orchestration & Workflow Management"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Amazon S3",
        "AWS Glue",
        "Amazon Redshift"
      ],
      "secondary": [
        "Amazon Athena",
        "Power BI",
        "Tableau"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "AWS Data Engineer",
      "Cloud Data Engineer",
      "Analytics Engineer",
      "BI Data Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: AWS Data Engineering Pipeline. Build a solution to ingest raw data into S3, transform using AWS Glue, store in Redshift, and serve to BI tools for reporting."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to AWS Data Engineering",
        "module_duration": "Week 1",
        "topics": ["Role of a Data Engineer", "AWS data ecosystem", "Modern cloud architectures"]
      },
      {
        "module_number": 2,
        "module_name": "Data Storage on AWS",
        "module_duration": "Week 2",
        "topics": ["Amazon S3 fundamentals", "Data partitioning", "Lifecycle management"]
      },
      {
        "module_number": 3,
        "module_name": "Data Ingestion on AWS",
        "module_duration": "Week 3",
        "topics": ["Batch ingestion concepts", "AWS Glue Crawlers", "Source integration"]
      },
      {
        "module_number": 4,
        "module_name": "Data Transformation with AWS Glue",
        "module_duration": "Week 4",
        "topics": ["AWS Glue ETL jobs", "PySpark overview", "Best practices"]
      },
      {
        "module_number": 5,
        "module_name": "Data Warehousing with Amazon Redshift",
        "module_duration": "Week 5",
        "topics": ["Redshift architecture", "Loading data from S3", "Performance optimization"]
      },
      {
        "module_number": 6,
        "module_name": "Querying Data with Amazon Athena",
        "module_duration": "Week 6",
        "topics": ["Serverless SQL with Athena", "S3 Data Querying", "Optimization"]
      },
      {
        "module_number": 7,
        "module_name": "Orchestration & Workflow Management",
        "module_duration": "Week 7",
        "topics": ["AWS Glue workflows", "Scheduling and triggers", "Error handling"]
      },
      {
        "module_number": 8,
        "module_name": "Security, Governance & Cost Optimization",
        "module_duration": "Week 8",
        "topics": ["IAM for data engineers", "Security best practices", "Cost strategies"]
      },
      {
        "module_number": 9,
        "module_name": "Analytics & BI Integration",
        "module_duration": "Week 9",
        "topics": ["BI tool integration", "Data preparation", "Reporting best practices"]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": ["End-to-end solution", "Business use cases", "Final presentation"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 1250,
    "total_students_enrolled": 8500
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is AWS Data Engineering?",
      "answer": "AWS Data Engineering involves designing and managing data pipelines on Amazon Web Services using tools like S3, Glue, Redshift, and Athena."
    },
    {
      "faq_id": 2,
      "question": "Is this AWS Data Engineering course beginner-friendly?",
      "answer": "This course is best suited for learners with basic SQL and data knowledge. It is designed at an intermediate level."
    },
    {
      "faq_id": 3,
      "question": "Do I need prior AWS experience to take this course?",
      "answer": "Prior AWS experience is helpful but not mandatory. Core AWS concepts are introduced as part of the course."
    },
    {
      "faq_id": 4,
      "question": "What tools are covered in this AWS Data Engineering course?",
      "answer": "The course covers Amazon S3, AWS Glue, Amazon Redshift, Amazon Athena, and BI tool integration."
    },
    {
      "faq_id": 5,
      "question": "Does this course include hands-on projects?",
      "answer": "Yes. The course includes multiple labs and one end-to-end capstone project."
    }
  ],
  "target_audience": [
    "Aspiring Data Engineers",
    "Data Analysts",
    "SQL Professionals",
    "Software Engineers"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "AWS Data Engineering Course: Build Scalable Data Pipelines | Proximsoft",
    "meta_description": "Learn AWS Data Engineering. Master Amazon S3, AWS Glue, Redshift, and Athena to build end-to-end cloud data pipelines for enterprise analytics.",
    "meta_url": "/courses/data-analytics/aws-data-engineering-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AZ-DE-017",
    "course_uid": "uid-azure-data-engineering-pro",
    "course_title": "Azure Data Engineering Course",
    "course_subtitle": "Design, Build & Optimize Scalable Data Pipelines on Microsoft Azure",
    "course_slug": "azure-data-engineering-course",
    "course_thumbnail": "assets/images/courses/azure-data-engineering.jpg",
    "course_short_description": "Master the Azure-native data lifecycle. Learn to build scalable pipelines, data lakes, and warehouses using Data Factory, Synapse Analytics, and Spark.",
    "course_long_description": "This Azure Data Engineering course is designed to help professionals build scalable, secure, and high-performance data pipelines on Microsoft Azure. The program focuses on the complete data engineering lifecycle including data ingestion, transformation, storage, orchestration, analytics, and optimization using Azure-native services.",
    "about_course": [
      "Focuses on the complete data engineering lifecycle using Azure-native services.",
      "Emphasizes real-world cloud data engineering practices used in enterprise environments.",
      "Hands-on experience with Azure Data Factory, Azure Data Lake Storage Gen2, and Azure Synapse Analytics.",
      "Prepares learners to design production-ready platforms that support analytics, BI, and AI workloads."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 2,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
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
      "Production-first mindset",
      "Syllabus Available",
      "Flexible learning schedule"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/azure-data-engineering",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Azure Data Engineering Professional Certificate (DP-203 Aligned)",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/azure-de-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Strong understanding of SQL",
      "Basic knowledge of databases and data concepts",
      "Prior cloud exposure is helpful but not mandatory"
    ],
    "key_learnings": [
      "Design Azure-based data architectures ",
      "Build scalable data pipelines using Azure Data Factory",
      "Transform and store data efficiently using mapping data flows and Synapse",
      "Serve analytics-ready data to Power BI for business intelligence"
    ],
    "ideal_candidates": [
      "Aspiring Azure Data Engineers",
      "Data Analysts moving into engineering roles",
      "SQL and BI professionals upgrading to cloud platforms",
      "Software Engineers working with data pipelines"
    ],
    "skills_gained": {
      "core_skills": [
        "Azure Data Engineering",
        "Cloud Data Pipelines",
        "Data Warehousing"
      ],
      "supporting_skills": [
        "Data Lake Architecture",
        "Data Modeling",
        "Pipeline Orchestration & Monitoring"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Azure Data Factory",
        "Azure Data Lake Storage Gen2",
        "Azure Synapse Analytics"
      ],
      "secondary": [
        "Power BI",
        "Azure Databricks",
        "Apache Spark"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Azure Data Engineer",
      "Cloud Data Engineer",
      "Analytics Engineer",
      "BI Data Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Azure Data Engineering Pipeline. Build a solution to ingest raw data using ADF, transform with Azure-native services, store in a Synapse warehouse, and expose to Power BI."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Azure Data Engineering",
        "module_duration": "Week 1",
        "topics": ["Role of a Data Engineer", "Azure data ecosystem overview", "Modern cloud data architectures"]
      },
      {
        "module_number": 2,
        "module_name": "Azure Data Storage Fundamentals",
        "module_duration": "Week 2",
        "topics": ["Azure Data Lake Storage Gen2", "Blob Storage concepts", "Data organization and partitioning"]
      },
      {
        "module_number": 3,
        "module_name": "Data Ingestion with Azure Data Factory",
        "module_duration": "Week 3",
        "topics": ["Azure Data Factory architecture", "Linked services and datasets", "Batch ingestion pipelines"]
      },
      {
        "module_number": 4,
        "module_name": "Data Transformation Techniques",
        "module_duration": "Week 4",
        "topics": ["Mapping data flows", "ELT vs ETL in Azure", "Transformation best practices"]
      },
      {
        "module_number": 5,
        "module_name": "Azure Synapse Analytics",
        "module_duration": "Week 5",
        "topics": ["Dedicated vs serverless SQL pools", "Data warehousing concepts", "Querying data lake using Synapse"]
      },
      {
        "module_number": 6,
        "module_name": "Data Processing with Spark (Overview)",
        "module_duration": "Week 6",
        "topics": ["Spark basics for data engineers", "Azure Synapse Spark pools", "Introduction to Databricks concepts"]
      },
      {
        "module_number": 7,
        "module_name": "Data Orchestration & Monitoring",
        "module_duration": "Week 7",
        "topics": ["Pipeline scheduling", "Triggers and dependencies", "Monitoring and error handling"]
      },
      {
        "module_number": 8,
        "module_name": "Security, Governance & Optimization",
        "module_duration": "Week 8",
        "topics": ["Data security and access control", "Cost optimization strategies", "Performance tuning"]
      },
      {
        "module_number": 9,
        "module_name": "Analytics & BI Integration",
        "module_duration": "Week 9",
        "topics": ["Power BI integration", "Serving data for analytics", "Reporting best practices"]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": ["End-to-end Azure data solution", "Real-world business case", "Final presentation"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 1100,
    "total_students_enrolled": 7800
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is Azure Data Engineering?",
      "answer": "Azure Data Engineering involves building and managing data pipelines on Microsoft Azure using services like Azure Data Factory, Data Lake, and Synapse Analytics."
    },
    {
      "faq_id": 2,
      "question": "Is this Azure Data Engineering course beginner-friendly?",
      "answer": "The course is designed at an intermediate level and is best suited for learners with basic SQL and data knowledge."
    },
    {
      "faq_id": 3,
      "question": "Do I need prior Azure experience to take this course?",
      "answer": "Prior Azure experience is helpful but not mandatory. Core Azure concepts are covered during the course."
    },
    {
      "faq_id": 4,
      "question": "What tools are covered in this Azure Data Engineering course?",
      "answer": "The course covers Azure Data Factory, Azure Data Lake Storage Gen2, Azure Synapse Analytics, Spark concepts, and Power BI integration."
    },
    {
      "faq_id": 5,
      "question": "Does this course include hands-on projects?",
      "answer": "Yes. The course includes multiple hands-on labs and one end-to-end capstone project."
    }
  ],
  "target_audience": [
    "Aspiring Data Engineers",
    "Data Analysts",
    "SQL Professionals",
    "Software Engineers"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Azure Data Engineering Course: Master Cloud Data Pipelines | Proximsoft",
    "meta_description": "Learn Azure Data Engineering. Master Azure Data Factory, Synapse Analytics, and Data Lake Storage to build production-ready cloud data platforms.",
    "meta_url": "/courses/data-analytics/azure-data-engineering-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-BD-018",
    "course_uid": "uid-big-data-engineering-hadoop-spark",
    "course_title": "Big Data Engineering Course (Hadoop & Spark)",
    "course_subtitle": "Process, Analyze & Scale Big Data Using Hadoop Ecosystem and Apache Spark",
    "course_slug": "big-data-engineering-hadoop-spark-course",
    "course_thumbnail": "assets/images/courses/big-data-hadoop-spark.jpg",
    "course_short_description": "Master massive-scale data processing. Learn to design and build scalable big data pipelines using Hadoop, HDFS, and Apache Spark.",
    "course_long_description": "This Big Data Engineering course is designed to teach professionals how to process, store, and analyze massive datasets using the Hadoop ecosystem and Apache Spark. The program focuses on distributed data processing, scalable storage, and high-performance analytics using industry-standard big data tools. You will learn how large-scale data systems are architected and how data flows through distributed pipelines.",
    "about_course": [
      "Teaches processing, storage, and analysis of massive datasets using distributed systems.",
      "Focuses on big data engineering fundamentals and scalable system architecture.",
      "Deep dive into Hadoop ecosystem tools including HDFS and MapReduce.",
      "Master high-performance analytics using Spark, Spark SQL, and PySpark."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 3,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80-100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Distributed data processing focus",
      "Production-first mindset",
      "Real-world architecture design",
      "Syllabus Available",
      "Hands-on labs across modules"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/big-data-engineering",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Big Data Engineering Professional (Hadoop & Spark)",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/big-data-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of SQL and databases",
      "Familiarity with data processing concepts",
      "Prior programming exposure (Python or Java is helpful)"
    ],
    "key_learnings": [
      "Understand and design distributed big data architectures ",
      "Build scalable data pipelines using HDFS and Apache Spark",
      "Process large-scale structured and unstructured datasets efficiently",
      "Optimize performance for distributed systems through partitioning and caching"
    ],
    "ideal_candidates": [
      "Aspiring Big Data Engineers",
      "Data Engineers and Analytics Engineers",
      "Software Engineers working with large datasets",
      "Data Analysts moving into big data roles",
      "Professionals working with Hadoop or Spark platforms"
    ],
    "skills_gained": {
      "core_skills": [
        "Big Data Engineering",
        "Hadoop Ecosystem",
        "Apache Spark"
      ],
      "supporting_skills": [
        "Distributed Data Processing",
        "Data Pipeline Design",
        "Performance Optimization"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Apache Hadoop",
        "HDFS",
        "Apache Spark"
      ],
      "secondary": [
        "Spark SQL",
        "PySpark",
        "MapReduce",
        "YARN"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Big Data Engineer",
      "Data Engineer",
      "Analytics Engineer",
      "Hadoop Developer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Big Data Engineering Pipeline. Design a real-world pipeline that stores data in HDFS, processes large-scale datasets using Spark, and applies transformations for analytics-ready outputs."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Big Data",
        "module_duration": "Week 1",
        "topics": ["What is Big Data?", "Characteristics and challenges", "Architecture overview"]
      },
      {
        "module_number": 2,
        "module_name": "Hadoop Ecosystem Overview",
        "module_duration": "Week 2",
        "topics": ["Hadoop architecture", "HDFS concepts", "YARN and MapReduce overview"]
      },
      {
        "module_number": 3,
        "module_name": "HDFS – Distributed Storage",
        "module_duration": "Week 3",
        "topics": ["Blocks and replication", "Fault tolerance", "Working with HDFS commands"]
      },
      {
        "module_number": 4,
        "module_name": "MapReduce Fundamentals",
        "module_duration": "Week 4",
        "topics": ["Programming model", "Map and Reduce phases", "Batch processing use cases"]
      },
      {
        "module_number": 5,
        "module_name": "Apache Spark Fundamentals",
        "module_duration": "Week 5",
        "topics": ["Spark architecture", "RDDs, DataFrames, and Datasets", "Execution model"]
      },
      {
        "module_number": 6,
        "module_name": "Spark SQL & Data Processing",
        "module_duration": "Week 6",
        "topics": ["Spark SQL basics", "Structured data handling", "Query optimization"]
      },
      {
        "module_number": 7,
        "module_name": "PySpark for Big Data Processing",
        "module_duration": "Week 7",
        "topics": ["PySpark fundamentals", "Data transformations", "Building scalable pipelines"]
      },
      {
        "module_number": 8,
        "module_name": "Big Data Analytics & Optimization",
        "module_duration": "Week 8",
        "topics": ["Performance tuning in Spark", "Partitioning strategies", "Caching and Persistence"]
      },
      {
        "module_number": 9,
        "module_name": "Big Data Pipeline Design",
        "module_duration": "Week 9",
        "topics": ["End-to-end workflows", "Batch processing design", "Integration with analytics"]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": ["Real-world big data solution", "Processing massive datasets", "Final assessment"]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.7,
    "total_reviews": 1400,
    "total_students_enrolled": 9200
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is Big Data Engineering?",
      "answer": "Big Data Engineering involves designing and managing systems that process large-scale datasets using distributed technologies like Hadoop and Apache Spark."
    },
    {
      "faq_id": 2,
      "question": "What is the difference between Hadoop and Spark?",
      "answer": "Hadoop focuses on distributed storage (HDFS) and batch processing (MapReduce), while Spark enables fast, in-memory data processing and analytics."
    },
    {
      "faq_id": 3,
      "question": "Is Spark replacing Hadoop?",
      "answer": "Spark complements Hadoop. Spark often uses HDFS for storage while providing faster data processing capabilities compared to MapReduce."
    },
    {
      "faq_id": 4,
      "question": "Do I need coding knowledge for this course?",
      "answer": "Basic programming knowledge is helpful, especially Python for PySpark, but the course focuses on practical implementation."
    },
    {
      "faq_id": 5,
      "question": "What tools are covered in this course?",
      "answer": "The course covers Hadoop, HDFS, MapReduce, Apache Spark, Spark SQL, and PySpark."
    }
  ],
  "target_audience": [
    "Aspiring Big Data Engineers",
    "Data Engineers",
    "Software Engineers",
    "Data Analysts"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Big Data Engineering Course: Hadoop & Spark Training | Proximsoft",
    "meta_description": "Master Big Data Engineering. Learn Apache Hadoop, HDFS, and Apache Spark to process and analyze massive datasets at enterprise scale.",
    "meta_url": "/courses/data-analytics/big-data-engineering-hadoop-spark-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-MSBI-019",
    "course_uid": "uid-sql-bi-msbi-enterprise",
    "course_title": "SQL BI / MSBI (Microsoft Business Intelligence) Course",
    "course_subtitle": "Build Enterprise-Grade BI Solutions using SQL Server & Microsoft BI Stack",
    "course_slug": "sql-bi-msbi-course",
    "course_thumbnail": "assets/images/courses/msbi-thumbnail.jpg",
    "course_short_description": "Master end-to-end Microsoft BI. Learn to design data warehouses, build ETL pipelines with SSIS, create analytical models with SSAS, and deliver SSRS reports.",
    "course_long_description": "This SQL BI / MSBI course is designed to help professionals build end-to-end enterprise Business Intelligence solutions using the Microsoft BI stack. The course focuses on designing data warehouses, building ETL pipelines, creating analytical models, and delivering enterprise-level reports using SQL Server, SSIS, SSAS, and SSRS.",
    "about_course": [
      "Teaches end-to-end enterprise BI solutions using the Microsoft stack (SSIS, SSAS, SSRS).",
      "Focuses on transforming raw transactional data into structured, optimized data warehouses.",
      "Emphasis on practical implementation for production environments rather than pure theory.",
      "Covers multidimensional and tabular data modeling along with enterprise reporting."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 4,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
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
      "Enterprise Data Warehousing focus",
      "Syllabus Available",
      "Flexible learning schedule"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/sql-bi-msbi",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Microsoft Business Intelligence (MSBI) Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/msbi-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic knowledge of SQL",
      "Understanding of databases and tables",
      "Familiarity with writing basic SQL queries"
    ],
    "key_learnings": [
      "Design enterprise data warehouses using Star and Snowflake schemas",
      "Build and optimize reliable ETL pipelines using SSIS",
      "Create high-performance analytical cubes and semantic models with SSAS",
      "Develop and deploy complex enterprise reports and dashboards using SSRS"
    ],
    "ideal_candidates": [
      "Aspiring BI and Data Warehouse Developers",
      "SQL Developers transitioning into BI roles",
      "Data Analysts working with Microsoft tools",
      "IT professionals involved in reporting and analytics"
    ],
    "skills_gained": {
      "core_skills": [
        "Microsoft BI (MSBI)",
        "SQL BI and Data Warehousing",
        "ETL Development"
      ],
      "supporting_skills": [
        "BI Architecture",
        "Data Modeling",
        "Enterprise Reporting"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "SQL Server",
        "SSIS",
        "SSAS",
        "SSRS"
      ],
      "secondary": [
        "Visual Studio (SSDT)",
        "Power BI (Integration)",
        "T-SQL"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "MSBI Developer",
      "BI Developer",
      "Data Warehouse Developer",
      "SQL BI Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "High",
      "student_completion_rate": "N/A",
      "placement_rate": "N/A"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Enterprise MSBI Solution. Build a complete end-to-end system including an optimized Data Warehouse in SQL Server, ETL pipelines with SSIS, an analytical model in SSAS, and a suite of SSRS reports."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Business Intelligence & MSBI",
        "module_duration": "Week 1",
        "topics": ["BI concepts and architecture", "MSBI ecosystem overview", "OLTP vs OLAP"]
      },
      {
        "module_number": 2,
        "module_name": "SQL Server Fundamentals for BI",
        "module_duration": "Week 2",
        "topics": ["Architecture", "Advanced SELECT queries", "Indexing for performance"]
      },
      {
        "module_number": 3,
        "module_name": "Data Warehousing Concepts",
        "module_duration": "Week 3",
        "topics": ["Fact and dimension tables", "Star and Snowflake schemas", "Data warehouse design"]
      },
      {
        "module_number": 4,
        "module_name": "ETL with SSIS (Integration Services)",
        "module_duration": "Week 4",
        "topics": ["SSIS architecture", "Data flow vs Control flow", "Transformations and errors"]
      },
      {
        "module_number": 5,
        "module_name": "Advanced SSIS & Optimization",
        "module_duration": "Week 5",
        "topics": ["Incremental data loads", "Logging and custom tasks", "Performance tuning"]
      },
      {
        "module_number": 6,
        "module_name": "Data Modeling with SSAS (Analysis Services)",
        "module_duration": "Week 6",
        "topics": ["Multidimensional vs Tabular models", "Cube design", "Measures and KPIs"]
      },
      {
        "module_number": 7,
        "module_name": "Advanced SSAS & DAX",
        "module_duration": "Week 7",
        "topics": ["Calculations and hierarchies", "DAX basics", "Model optimization"]
      },
      {
        "module_number": 8,
        "module_name": "Reporting with SSRS (Reporting Services)",
        "module_duration": "Week 8",
        "topics": ["Report types and datasets", "Parameters and expressions", "Deployment"]
      },
      {
        "module_number": 9,
        "module_name": "Security, Deployment & Best Practices",
        "module_duration": "Week 9",
        "topics": ["Role-based security", "BI deployment lifecycle", "Enterprise best practices"]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": ["End-to-end implementation", "ETL orchestration", "Reporting solution"]
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
      "question": "What is SQL BI / MSBI?",
      "answer": "SQL BI / MSBI refers to Microsoft Business Intelligence technologies used to build data warehouses, ETL pipelines, analytical models, and enterprise reports using SQL Server."
    },
    {
      "faq_id": 2,
      "question": "How is MSBI different from Power BI?",
      "answer": "MSBI focuses on backend BI systems like data warehouses and cubes (SSIS/SSAS), while Power BI is primarily a visualization and reporting tool."
    },
    {
      "faq_id": 3,
      "question": "Is SQL required for MSBI?",
      "answer": "Yes. Strong SQL knowledge is essential for data warehousing, ETL, and analytical queries in MSBI."
    },
    {
      "faq_id": 4,
      "question": "What careers can MSBI skills lead to?",
      "answer": "Roles include MSBI Developer, BI Developer, Data Warehouse Developer, and SQL BI Engineer."
    },
    {
      "faq_id": 5,
      "question": "Is MSBI still relevant in modern data platforms?",
      "answer": "Yes. MSBI is still heavily used in enterprises for governed BI and structured corporate reporting."
    }
  ],
  "target_audience": [
    "Aspiring BI Developers",
    "SQL Developers",
    "Data Analysts",
    "IT Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "SQL BI / MSBI Course: Build Enterprise BI Solutions | Proximsoft",
    "meta_description": "Master Microsoft Business Intelligence. Learn to design data warehouses, build SSIS pipelines, create SSAS models, and deploy SSRS reports.",
    "meta_url": "/courses/data-analytics/sql-bi-msbi-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-DA-020",
    "course_uid": "uid-data-analytics-business-insights",
    "course_title": "Data Analytics Course",
    "course_subtitle": "Analyze, Visualize & Transform Data into Actionable Business Insights",
    "course_slug": "data-analytics-course",
    "course_thumbnail": "assets/images/courses/data-analytics-thumb.jpg",
    "course_short_description": "Turn raw data into meaningful business insights. Master Excel, SQL, Python, and Power BI/Tableau through hands-on, real-world projects.",
    "course_long_description": "This Data Analytics course is designed to help learners turn raw data into meaningful business insights using industry-standard tools and real-world datasets. The program covers the complete analytics lifecycle—from data collection and cleaning to analysis, visualization, and reporting. Unlike theory-heavy programs, this course focuses on practical analytics skills used in modern business environments.",
    "about_course": [
      "Designed to help learners turn raw data into meaningful business insights using industry-standard tools.",
      "Covers the complete analytics lifecycle including collection, cleaning, visualization, and reporting.",
      "Focuses on practical skills used in business environments rather than purely academic theory.",
      "Enables learners to independently analyze data and create interactive dashboards to support decision-making."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 5,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/data-analytics",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Data Analytics Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/data-analytics-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic computer skills",
      "Interest in working with data and numbers",
      "No prior analytics experience required"
    ],
    "key_learnings": [
      "Analyze datasets using Excel, SQL, and Python",
      "Build interactive dashboards and reports using Power BI or Tableau",
      "Identify business trends and key performance indicators (KPIs)",
      "Communicate data-driven findings effectively to stakeholders"
    ],
    "ideal_candidates": [
      "Aspiring Data Analysts",
      "Business Analysts and MIS professionals",
      "Students and fresh graduates",
      "Professionals transitioning into analytics roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Data Analytics",
        "Business Analytics",
        "Data Visualization"
      ],
      "supporting_skills": [
        "SQL Querying",
        "Python Basics for Analytics",
        "Business Reporting"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Microsoft Excel",
        "SQL",
        "Power BI",
        "Tableau"
      ],
      "secondary": [
        "Python (Pandas, NumPy)",
        "Matplotlib",
        "Seaborn"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Data Analyst",
      "Business Analyst",
      "Reporting Analyst",
      "Junior BI Developer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "90%",
      "placement_rate": "85%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Data Analytics Business Case. Build a real-world solution that cleans raw data, performs analysis using SQL/Python, and creates interactive dashboards to present actionable insights."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Data Analytics",
        "module_duration": "Week 1",
        "topics": [
          "What is data analytics?",
          "Types of analytics (Descriptive, Diagnostic, Predictive)",
          "Analytics lifecycle"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Excel for Data Analysis",
        "module_duration": "Week 2",
        "topics": [
          "Data cleaning and formatting",
          "Formulas and functions",
          "Pivot tables and charts"
        ]
      },
      {
        "module_number": 3,
        "module_name": "SQL for Data Analysis",
        "module_duration": "Week 3",
        "topics": [
          "Database fundamentals",
          "Writing SQL queries",
          "Joins, subqueries, and aggregations"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Data Cleaning & Preparation",
        "module_duration": "Week 4",
        "topics": [
          "Handling missing values",
          "Data transformation techniques",
          "Data quality checks"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Python for Data Analysis (Basics)",
        "module_duration": "Week 5",
        "topics": [
          "Python fundamentals for analytics",
          "NumPy and Pandas",
          "Data manipulation"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Data Visualization",
        "module_duration": "Week 6",
        "topics": [
          "Data visualization principles",
          "Charts and dashboards",
          "Storytelling with data"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Business Analytics & KPIs",
        "module_duration": "Week 7",
        "topics": [
          "Business metrics and KPIs",
          "Analytical thinking",
          "Case-based analysis"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Power BI / Tableau Fundamentals",
        "module_duration": "Week 8",
        "topics": [
          "Connecting to data sources",
          "Dashboard creation",
          "Interactive visualizations"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Analytics Best Practices & Reporting",
        "module_duration": "Week 9",
        "topics": [
          "Insight communication",
          "Reporting standards",
          "Stakeholder-ready dashboards"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": [
          "End-to-end analytics project",
          "Dashboard and insights presentation"
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
      "question": "What is a Data Analytics course?",
      "answer": "A Data Analytics course teaches how to collect, clean, analyze, and visualize data to generate business insights using tools like Excel, SQL, Python, and BI platforms."
    },
    {
      "faq_id": 2,
      "question": "Is this Data Analytics course beginner-friendly?",
      "answer": "Yes. The course starts from fundamentals and gradually builds toward real-world analytics projects."
    },
    {
      "faq_id": 3,
      "question": "Do I need coding knowledge to learn data analytics?",
      "answer": "Basic coding helps, but the course starts with Excel and SQL and introduces Python at a beginner level."
    },
    {
      "faq_id": 4,
      "question": "What tools will I learn in this course?",
      "answer": "You will learn Excel, SQL, Python basics, and Power BI or Tableau for dashboards and reporting."
    },
    {
      "faq_id": 5,
      "question": "Does this course include real-world projects?",
      "answer": "Yes. The course includes hands-on labs and a real-world capstone project."
    }
  ],
  "target_audience": [
    "Aspiring Data Analysts",
    "Business Analysts",
    "MIS Professionals",
    "Fresh Graduates"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Data Analytics Course: Master Business Insights | Proximsoft",
    "meta_description": "Learn Data Analytics from scratch. Master Excel, SQL, Python, and Power BI to transform raw data into actionable business insights.",
    "meta_url": "/courses/data-analytics/data-analytics-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-DE-FUND-021",
    "course_uid": "uid-data-engineering-fundamentals",
    "course_title": "Data Engineering Fundamentals Course",
    "course_subtitle": "Build Strong Foundations in Data Pipelines, Warehousing & Modern Data Platforms",
    "course_slug": "data-engineering-fundamentals-course",
    "course_thumbnail": "assets/images/courses/de-fundamentals-thumb.jpg",
    "course_short_description": "Master the core concepts of data engineering. Learn how data is ingested, transformed, and stored using ETL/ELT pipelines and modern data architectures.",
    "course_long_description": "The Data Engineering Fundamentals course is designed to help learners understand how modern data engineering systems are built from the ground up. This program focuses on the core concepts that power analytics, business intelligence, and data-driven applications. You’ll learn how data is ingested, transformed, stored, and served using ETL and ELT pipelines and data warehousing principles.",
    "about_course": [
      "Designed to help learners understand modern data engineering systems from the ground up.",
      "Focuses on core concepts like ingestion, transformation, storage, and analytics serving.",
      "Teaches both ETL and ELT pipeline approaches used in real-world analytics systems.",
      "Prepares learners for advanced platforms like Snowflake, Databricks, and Microsoft Fabric."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 6,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/de-fundamentals",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Data Engineering Fundamentals Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/de-fundamentals-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of SQL",
      "Familiarity with data concepts",
      "No prior data engineering experience is required"
    ],
    "key_learnings": [
      "Understand how raw data becomes analytics-ready ",
      "Design reliable ETL and ELT pipelines",
      "Build scalable data warehouses using Star Schema principles",
      "Prepare data for analytics, BI, and downstream AI use cases"
    ],
    "ideal_candidates": [
      "Aspiring Data Engineers",
      "Data Analysts transitioning into engineering roles",
      "Software Engineers working with data systems",
      "Students entering data and analytics careers"
    ],
    "skills_gained": {
      "core_skills": [
        "Data Engineering Fundamentals",
        "ETL and ELT Concepts",
        "Data Pipelines"
      ],
      "supporting_skills": [
        "SQL Transformations",
        "Data Warehousing",
        "Pipeline Design"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "SQL",
        "Data Warehousing Concepts",
        "Data Pipeline Concepts"
      ],
      "secondary": [
        "Cloud Storage Concepts",
        "Snowflake (Concepts)",
        "Databricks (Concepts)",
        "Microsoft Fabric (Overview)"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Junior Data Engineer",
      "Analytics Engineer",
      "Data Engineer (Entry Level)",
      "BI Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "92%",
      "placement_rate": "88%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Data Engineering Foundation Pipeline. You will build a real-world solution that ingests raw business data, applies SQL transformations, stores it in a data warehouse, and prepares analytics-ready datasets."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Data Engineering",
        "module_duration": "Week 1",
        "topics": [
          "What is data engineering?",
          "Data engineering vs data analytics",
          "Modern data architecture overview"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Data Sources & Ingestion",
        "module_duration": "Week 2",
        "topics": [
          "Structured vs semi-structured data",
          "Batch vs streaming ingestion",
          "Data ingestion patterns"
        ]
      },
      {
        "module_number": 3,
        "module_name": "ETL & ELT Concepts",
        "module_duration": "Week 3",
        "topics": [
          "ETL vs ELT approaches ",
          "Data transformation basics",
          "Pipeline design principles"
        ]
      },
      {
        "module_number": 4,
        "module_name": "SQL for Data Engineering",
        "module_duration": "Week 4",
        "topics": [
          "Advanced SQL concepts",
          "Transformations using SQL",
          "Performance considerations"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Data Warehousing Fundamentals",
        "module_duration": "Week 5",
        "topics": [
          "OLTP vs OLAP systems",
          "Fact and dimension tables",
          "Star schema design "
        ]
      },
      {
        "module_number": 6,
        "module_name": "Data Pipelines & Orchestration",
        "module_duration": "Week 6",
        "topics": [
          "Pipeline components",
          "Scheduling and dependencies",
          "Error handling concepts"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Cloud Data Platforms Overview",
        "module_duration": "Week 7",
        "topics": [
          "Cloud data architectures",
          "Snowflake, Databricks, BigQuery overview",
          "Lakehouse concepts"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Data Quality, Security & Governance",
        "module_duration": "Week 8",
        "topics": [
          "Data validation techniques",
          "Access control and security",
          "Data governance basics"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Performance & Cost Optimization",
        "module_duration": "Week 9",
        "topics": [
          "Query optimization strategies",
          "Storage and compute optimization",
          "Pipeline monitoring"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": [
          "End-to-end data engineering pipeline",
          "Real-world business data use case"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1200,
    "total_students_enrolled": 9500
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is Data Engineering Fundamentals?",
      "answer": "Data Engineering Fundamentals covers the core concepts of building data pipelines, ETL processes, SQL transformations, and data warehouses used in modern analytics systems."
    },
    {
      "faq_id": 2,
      "question": "Is this course suitable for beginners?",
      "answer": "Yes. This course is designed for beginners and professionals transitioning into data engineering roles."
    },
    {
      "faq_id": 3,
      "question": "Do I need prior cloud experience?",
      "answer": "No. Cloud concepts are introduced at a high level and do not require prior experience."
    },
    {
      "faq_id": 4,
      "question": "What is the difference between data engineering and data analytics?",
      "answer": "Data engineering focuses on building data pipelines and infrastructure, while data analytics focuses on analyzing and visualizing prepared data."
    },
    {
      "faq_id": 5,
      "question": "Is SQL required for data engineering?",
      "answer": "Yes. SQL is a core skill for data transformations and data warehousing in data engineering."
    }
  ],
  "target_audience": [
    "Aspiring Data Engineers",
    "Data Analysts",
    "Software Engineers",
    "Students"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Data Engineering Fundamentals Course | Learn Data Pipelines",
    "meta_description": "Build a strong foundation in data engineering. Learn ETL/ELT, data warehousing, SQL transformations, and pipeline orchestration from scratch.",
    "meta_url": "/courses/data-analytics/data-engineering-fundamentals-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-ETL-022",
    "course_uid": "uid-etl-data-pipelines-pro",
    "course_title": "ETL & Data Pipelines Course",
    "course_subtitle": "Design, Build & Manage Reliable ETL Pipelines for Modern Data Platforms",
    "course_slug": "etl-data-pipelines-course",
    "course_thumbnail": "assets/images/courses/etl-pipelines-thumb.jpg",
    "course_short_description": "Master the core of data engineering. Learn to build reliable ETL and ELT pipelines that move, transform, and orchestrate data at scale.",
    "course_long_description": "The ETL & Data Pipelines course is designed to teach professionals how to design, build, and manage reliable data pipelines that move data from source systems to analytics platforms. This program dives into the engineering side of data movement—how data is ingested, transformed, validated, orchestrated, and monitored across enterprise systems.",
    "about_course": [
      "Teaches the design and management of reliable data pipelines from source to analytics.",
      "Focuses on Extract, Transform, Load (ETL) and ELT concepts for modern data engineering.",
      "Covers critical engineering aspects: ingestion, transformation, orchestration, and monitoring.",
      "Enables learners to support analytics, business intelligence, and downstream AI workloads."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 7,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/etl-data-pipelines",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "ETL & Data Pipeline Engineering Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/etl-pipelines-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of SQL",
      "Familiarity with databases and tables",
      "Basic knowledge of data concepts"
    ],
    "key_learnings": [
      "Design reliable ETL and ELT pipelines ",
      "Apply SQL-based transformations for data cleaning and business logic",
      "Orchestrate and monitor automated data workflows with retries and error handling",
      "Build production-ready data pipelines for enterprise-scale environments"
    ],
    "ideal_candidates": [
      "Aspiring Data Engineers",
      "Data Analysts transitioning into engineering roles",
      "SQL Developers working with data systems",
      "BI professionals working with data pipelines"
    ],
    "skills_gained": {
      "core_skills": [
        "ETL & ELT Pipelines",
        "Data Pipeline Engineering",
        "Data Transformation"
      ],
      "supporting_skills": [
        "SQL Optimization",
        "Workflow Orchestration",
        "Data Quality Management"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "SQL",
        "ETL Concepts",
        "Data Pipeline Design"
      ],
      "secondary": [
        "Workflow Orchestration Tools (Concepts)",
        "Cloud Data Pipeline Patterns",
        "Data Validation Tools"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Data Engineer",
      "Analytics Engineer",
      "BI Engineer",
      "ETL Developer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "96%",
      "student_completion_rate": "94%",
      "placement_rate": "89%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End ETL Data Pipeline. Build a real-world pipeline that extracts data from multiple sources, applies transformations using SQL, loads it into an analytics system, and implements logging and monitoring."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to ETL & Data Pipelines",
        "module_duration": "Week 1",
        "topics": [
          "What is ETL and ELT?",
          "Role of data pipelines in analytics",
          "Modern data pipeline architectures "
        ]
      },
      {
        "module_number": 2,
        "module_name": "Data Sources & Extraction",
        "module_duration": "Week 2",
        "topics": [
          "Structured and unstructured sources",
          "Database extraction techniques",
          "File-based and API-based ingestion"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Data Transformation Concepts",
        "module_duration": "Week 3",
        "topics": [
          "Data cleaning and normalization",
          "Business logic transformations",
          "Handling data quality issues"
        ]
      },
      {
        "module_number": 4,
        "module_name": "SQL-Based Transformations",
        "module_duration": "Week 4",
        "topics": [
          "SQL transformations for ETL",
          "Joins, aggregations, and validations",
          "Performance considerations"
        ]
      },
      {
        "module_number": 5,
        "module_name": "ETL Pipeline Design",
        "module_duration": "Week 5",
        "topics": [
          "Pipeline components and flow",
          "Incremental vs full loads",
          "Idempotent pipeline design"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Orchestration & Scheduling",
        "module_duration": "Week 6",
        "topics": [
          "Workflow orchestration concepts",
          "Scheduling and dependencies",
          "Handling retries and failures"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Data Validation & Quality Checks",
        "module_duration": "Week 7",
        "topics": [
          "Data completeness and accuracy",
          "Schema validation",
          "Logging and audit trails"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Monitoring & Performance Optimization",
        "module_duration": "Week 8",
        "topics": [
          "Pipeline monitoring strategies",
          "Performance bottlenecks",
          "Cost and resource optimization"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Cloud-Based ETL Pipelines (Concepts)",
        "module_duration": "Week 9",
        "topics": [
          "ETL in cloud platforms",
          "Batch pipelines in modern data stacks",
          "Overview of cloud ETL tools"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": [
          "End-to-end ETL pipeline development",
          "Real-world data engineering use case"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1150,
    "total_students_enrolled": 8800
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is an ETL & Data Pipelines course?",
      "answer": "An ETL & Data Pipelines course teaches how to design, build, and manage data pipelines that extract, transform, and load data for analytics and reporting."
    },
    {
      "faq_id": 2,
      "question": "What is the difference between ETL and ELT?",
      "answer": "ETL transforms data before loading it into the target system, while ELT loads raw data first and performs transformations within the data platform."
    },
    {
      "faq_id": 3,
      "question": "Is SQL important for ETL pipelines?",
      "answer": "Yes. SQL is a core skill for transformations, validations, and analytics-ready data preparation within a pipeline."
    },
    {
      "faq_id": 4,
      "question": "Can this course help me transition to Data Engineering?",
      "answer": "Absolutely. Data analysts and SQL developers can use this course to build the specialized engineering skills needed for Data Engineering roles."
    },
    {
      "faq_id": 5,
      "question": "Will I learn about orchestration?",
      "answer": "Yes. The course covers orchestration concepts, scheduling, and handling automated workflow dependencies."
    }
  ],
  "target_audience": [
    "Aspiring Data Engineers",
    "Data Analysts",
    "SQL Developers",
    "BI Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "ETL & Data Pipelines Course | Build Reliable Data Workflows",
    "meta_description": "Learn to design and manage enterprise-grade ETL and ELT pipelines. Master data ingestion, transformation, orchestration, and monitoring for modern analytics platforms.",
    "meta_url": "/courses/data-analytics/etl-data-pipelines-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-FABRIC-023",
    "course_uid": "uid-microsoft-fabric-unified-analytics",
    "course_title": "Microsoft Fabric Course",
    "course_subtitle": "Unified Analytics with Data Engineering, BI & AI on Microsoft Fabric",
    "course_slug": "microsoft-fabric-course",
    "course_thumbnail": "assets/images/courses/microsoft-fabric-thumb.jpg",
    "course_short_description": "Master Microsoft's unified analytics platform. Learn to integrate data engineering, BI, and AI workflows through OneLake and Fabric workloads.",
    "course_long_description": "The Microsoft Fabric course is designed to help professionals build end-to-end analytics solutions using Microsoft’s unified analytics platform. This program focuses on how data engineering, data integration, data science, real-time analytics, and business intelligence come together inside a single platform powered by Microsoft Fabric and OneLake.",
    "about_course": [
      "Designed to help professionals build end-to-end analytics solutions using a unified platform.",
      "Focuses on the integration of data engineering, data science, and BI inside Microsoft Fabric.",
      "Teaches modern lakehouse-based analytics architectures with seamless Power BI integration.",
      "Enables learners to design and manage complete analytics systems for real-world enterprise environments."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 8,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/microsoft-fabric",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Microsoft Fabric Analytics Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/fabric-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of data and analytics concepts",
      "Familiarity with SQL or Power BI is helpful",
      "No prior Microsoft Fabric experience is required"
    ],
    "key_learnings": [
      "Understand Microsoft Fabric architecture and the OneLake concept ",
      "Build unified analytics solutions integrating engineering, BI, and AI workflows",
      "Implement real-time and batch analytics solutions using Fabric workloads",
      "Deliver Power BI insights directly using Direct Lake mode from OneLake"
    ],
    "ideal_candidates": [
      "Data Analysts and BI Professionals",
      "Data Engineers",
      "Power BI Developers",
      "Analytics and Cloud Professionals"
    ],
    "skills_gained": {
      "core_skills": [
        "Microsoft Fabric",
        "Unified Analytics Platforms",
        "Data Engineering on Fabric"
      ],
      "supporting_skills": [
        "Lakehouse Architecture",
        "Spark and SQL",
        "BI Integration",
        "Real-time Analytics"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Microsoft Fabric",
        "OneLake",
        "Power BI"
      ],
      "secondary": [
        "Spark",
        "SQL",
        "Delta Lake",
        "Notebooks"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Fabric Data Engineer",
      "Analytics Engineer",
      "BI Engineer",
      "Data Platform Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "97%",
      "student_completion_rate": "95%",
      "placement_rate": "91%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Microsoft Fabric Unified Analytics Solution. You will build a real-world solution that ingests data into OneLake, builds lakehouse-based analytics, and creates Power BI dashboards directly from Fabric workloads."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Microsoft Fabric",
        "module_duration": "Week 1",
        "topics": [
          "Microsoft Fabric overview",
          "Fabric architecture and workloads",
          "OneLake concept "
        ]
      },
      {
        "module_number": 2,
        "module_name": "Data Ingestion & Integration",
        "module_duration": "Week 2",
        "topics": [
          "Data ingestion patterns",
          "Fabric data pipelines",
          "Connecting multiple data sources"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Lakehouse & OneLake",
        "module_duration": "Week 3",
        "topics": [
          "Lakehouse architecture ",
          "Delta tables",
          "Managing data in OneLake"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Data Engineering with Fabric",
        "module_duration": "Week 4",
        "topics": [
          "Spark basics in Fabric",
          "Data transformations",
          "Notebooks and pipelines"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Data Warehousing in Fabric",
        "module_duration": "Week 5",
        "topics": [
          "Fabric data warehouse",
          "SQL analytics endpoint",
          "Performance considerations"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Real-Time Analytics",
        "module_duration": "Week 6",
        "topics": [
          "Event streams",
          "KQL basics",
          "Real-time dashboards"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Data Science & AI Workloads",
        "module_duration": "Week 7",
        "topics": [
          "Data science in Fabric",
          "Machine learning overview",
          "Model experimentation basics"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Power BI in Microsoft Fabric",
        "module_duration": "Week 8",
        "topics": [
          "Semantic models",
          "Direct Lake mode",
          "Power BI integration "
        ]
      },
      {
        "module_number": 9,
        "module_name": "Security, Governance & Optimization",
        "module_duration": "Week 9",
        "topics": [
          "Access control and security",
          "Cost management",
          "Monitoring and optimization"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": [
          "End-to-end Microsoft Fabric analytics solution",
          "Real-world enterprise use case"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1100,
    "total_students_enrolled": 7800
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is Microsoft Fabric?",
      "answer": "Microsoft Fabric is a unified analytics platform that combines data engineering, data integration, data science, real-time analytics, and business intelligence in a single environment."
    },
    {
      "faq_id": 2,
      "question": "How is Microsoft Fabric different from Power BI?",
      "answer": "Power BI focuses on visualization, while Microsoft Fabric provides an end-to-end analytics platform including storage, engineering, warehousing, and BI."
    },
    {
      "faq_id": 3,
      "question": "What is OneLake in Microsoft Fabric?",
      "answer": "OneLake is the unified data lake in Microsoft Fabric that stores data for all Fabric workloads, acting like 'OneDrive for data'."
    },
    {
      "faq_id": 4,
      "question": "Does this course include hands-on projects?",
      "answer": "Yes. The course includes multiple hands-on labs and a real-world capstone project using the Fabric environment."
    },
    {
      "faq_id": 5,
      "question": "Is Microsoft Fabric a future-proof skill?",
      "answer": "Yes. Microsoft Fabric is positioned as the primary strategic analytics platform in the Microsoft ecosystem, integrating all modern data roles."
    }
  ],
  "target_audience": [
    "Data Analysts",
    "Data Engineers",
    "BI Professionals",
    "Analytics Managers"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Microsoft Fabric Course: Unified Analytics Training | Proximsoft",
    "meta_description": "Master Microsoft Fabric. Learn to unify data engineering, BI, and AI workflows using OneLake, Spark, and Power BI in this hands-on enterprise course.",
    "meta_url": "/courses/data-analytics/microsoft-fabric-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-PWR-APPS-024",
    "course_uid": "uid-microsoft-power-apps-lowcode",
    "course_title": "Microsoft Power Apps Course",
    "course_subtitle": "Build Low-Code Business Applications Using Microsoft Power Platform",
    "course_slug": "microsoft-power-apps-course",
    "course_thumbnail": "assets/images/courses/power-apps-thumb.jpg",
    "course_short_description": "Master low-code application development. Learn to build, secure, and deploy enterprise-grade business apps using Power Apps, Dataverse, and M365.",
    "course_long_description": "This Microsoft Power Apps course is designed to teach professionals how to build scalable, low-code business applications using the Microsoft Power Platform. The program focuses on creating real-world enterprise applications using Power Apps, Dataverse, SharePoint, and Microsoft 365 integrations, without requiring traditional software development skills.",
    "about_course": [
      "Teaches scalable, low-code business application development using Microsoft Power Platform.",
      "Focuses on real-world enterprise apps using Dataverse, SharePoint, and Microsoft 365.",
      "Emphasizes business logic, data modeling, security, governance, and deployment.",
      "Prepares learners to build production-ready solutions that integrate with existing enterprise systems."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 9,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80 Hours",
    "weekly_commitment_duration": "6–8 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/microsoft-power-apps",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Microsoft Power Apps App Maker Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/power-apps-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic computer knowledge",
      "Familiarity with Microsoft 365 tools (helpful, not mandatory)",
      "No prior coding experience required"
    ],
    "key_learnings": [
      "Build low-code Canvas and Model-Driven business applications ",
      "Integrate Power Apps with enterprise data sources like SharePoint and SQL",
      "Apply security, roles, and governance best practices for app management",
      "Design complex logic using Power Fx formulas and conditional statements"
    ],
    "ideal_candidates": [
      "Business Analysts",
      "IT Professionals & Administrators",
      "Power Platform beginners",
      "Professionals automating business processes",
      "Teams building internal enterprise applications"
    ],
    "skills_gained": {
      "core_skills": [
        "Microsoft Power Apps",
        "Low-Code Application Development",
        "Business App Design"
      ],
      "supporting_skills": [
        "Power Fx formulas",
        "Dataverse data modeling",
        "Business process automation"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Microsoft Power Apps",
        "Power Fx",
        "Microsoft Dataverse"
      ],
      "secondary": [
        "SharePoint",
        "Microsoft 365",
        "Power Automate (overview)"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Power Apps Developer",
      "Power Platform Consultant",
      "Business Application Developer",
      "Low-Code Developer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "94%",
      "student_completion_rate": "92%",
      "placement_rate": "86%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Power Apps Business Application. Design and implement a real-world solution that automates a complex workflow, integrates with Dataverse/SharePoint, and implements role-based security."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 40
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Microsoft Power Platform",
        "module_duration": "Week 1",
        "topics": [
          "Power Platform overview",
          "Power Apps use cases",
          "Platform architecture "
        ]
      },
      {
        "module_number": 2,
        "module_name": "Power Apps Fundamentals",
        "module_duration": "Week 2",
        "topics": [
          "Types of Power Apps (Canvas vs Model-Driven)",
          "Environment setup",
          "App building basics"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Canvas Apps Development",
        "module_duration": "Week 3",
        "topics": [
          "Canvas app components",
          "Controls and layouts",
          "Navigation and UX design"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Data Sources & Integration",
        "module_duration": "Week 4",
        "topics": [
          "SharePoint integration",
          "Excel and SQL connections",
          "Dataverse fundamentals "
        ]
      },
      {
        "module_number": 5,
        "module_name": "Formulas & Logic in Power Apps",
        "module_duration": "Week 5",
        "topics": [
          "Power Fx basics",
          "Conditional logic",
          "Data validation"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Model-Driven Apps",
        "module_duration": "Week 6",
        "topics": [
          "Model-driven app concepts",
          "Tables, forms, and views",
          "Business rules"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Security & Governance",
        "module_duration": "Week 7",
        "topics": [
          "Roles and permissions",
          "Data Loss Prevention (DLP)",
          "Environment management"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Integrations & Automation Overview",
        "module_duration": "Week 8",
        "topics": [
          "Power Automate integration ",
          "Trigger-based workflows",
          "Automation scenarios"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Deployment & Best Practices",
        "module_duration": "Week 9",
        "topics": [
          "Testing and debugging",
          "Publishing and sharing apps",
          "Performance optimization"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": [
          "End-to-end Power Apps solution",
          "Real-world enterprise use case presentation"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 950,
    "total_students_enrolled": 6800
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Microsoft Power Apps course?",
      "answer": "A Microsoft Power Apps course teaches how to design, build, secure, and deploy low-code business applications using Microsoft Power Platform, Dataverse, and Microsoft 365 integrations."
    },
    {
      "faq_id": 2,
      "question": "Do I need coding experience to learn Power Apps?",
      "answer": "No. Power Apps is a low-code platform. This course is designed for learners without traditional programming backgrounds."
    },
    {
      "faq_id": 3,
      "question": "What is Dataverse in Power Apps?",
      "answer": "Dataverse is Microsoft’s secure data platform used to store, manage, and model data for Power Apps and other Power Platform services."
    },
    {
      "faq_id": 4,
      "question": "Can I build mobile apps with Power Apps?",
      "answer": "Yes. Power Apps allows you to build responsive applications that work seamlessly on web browsers, tablets, and mobile devices."
    },
    {
      "faq_id": 5,
      "question": "How does it help with digital transformation?",
      "answer": "It allows organizations to rapidly build custom tools to replace legacy paper processes or Excel-based tracking without high development costs."
    }
  ],
  "target_audience": [
    "Business Analysts",
    "IT Administrators",
    "Project Managers",
    "Operational Teams",
    "Low-Code Enthusiasts"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Microsoft Power Apps Course | Build Business Apps Without Coding",
    "meta_description": "Master Microsoft Power Apps. Learn to build low-code enterprise applications, integrate data sources, and automate business processes with Power Platform.",
    "meta_url": "/courses/data-analytics/microsoft-power-apps-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-PWRBI-025",
    "course_uid": "uid-power-bi-beginner-advanced",
    "course_title": "Power BI Course (Beginner to Advanced)",
    "course_subtitle": "Master Data Visualization, DAX & Business Intelligence with Power BI",
    "course_slug": "power-bi-course",
    "course_thumbnail": "assets/images/courses/power-bi-thumb.jpg",
    "course_short_description": "Transform raw data into actionable insights. Master data modeling, DAX, and interactive dashboarding using Microsoft Power BI.",
    "course_long_description": "This Power BI course is designed to help learners transform raw data into actionable business insights using Microsoft Power BI. The program takes you from fundamentals to advanced data modeling, DAX calculations, and enterprise BI reporting workflows, focusing on end-to-end solutions from ingestion to governance.",
    "about_course": [
      "Takes learners from Power BI fundamentals to advanced data modeling and DAX calculations.",
      "Focuses on end-to-end business intelligence solutions including data ingestion and transformation.",
      "Teaches enterprise-level BI reporting workflows, sharing, and governance.",
      "Designed around practical BI skills used by professional data analysts to drive business decisions."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Advanced",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 10,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80 Hours",
    "weekly_commitment_duration": "6–8 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/power-bi-mastery",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Power BI Data Analyst Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/power-bi-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic computer literacy",
      "Familiarity with Excel (helpful but not mandatory)",
      "Interest in data analysis and visualization"
    ],
    "key_learnings": [
      "Build professional Power BI dashboards from scratch",
      "Perform complex data modeling and star schema transformations",
      "Write advanced DAX calculations for business analytics",
      "Publish, share, and secure BI reports using Power BI Service"
    ],
    "ideal_candidates": [
      "Aspiring Data Analysts",
      "Business Analysts & MIS professionals",
      "Working professionals handling reports",
      "Students entering analytics roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Power BI",
        "Data Visualization",
        "Business Intelligence Reporting"
      ],
      "supporting_skills": [
        "DAX & Data Modeling",
        "Data Storytelling",
        "BI Performance Optimization"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Microsoft Power BI Desktop",
        "Power BI Service",
        "DAX"
      ],
      "secondary": [
        "Power Query",
        "Excel",
        "SQL (optional)"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Reporting Analyst",
      "Power BI Developer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "96%",
      "student_completion_rate": "94%",
      "placement_rate": "90%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Power BI Business Dashboard. Build a real-world dashboard that cleans raw business data, applies data modeling best practices, uses advanced DAX measures, and delivers interactive insights."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to BI & Power BI",
        "module_duration": "Week 1",
        "topics": [
          "Business intelligence concepts",
          "Power BI Desktop overview",
          "Data sources & connectors"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Data Loading & Transformation",
        "module_duration": "Week 2",
        "topics": [
          "Power Query fundamentals",
          "Cleaning & transforming data",
          "Data shaping best practices"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Data Modeling Fundamentals",
        "module_duration": "Week 3",
        "topics": [
          "Relationships & cardinality",
          "Star schema concepts",
          "Model optimization techniques"
        ]
      },
      {
        "module_number": 4,
        "module_name": "DAX Basics",
        "module_duration": "Week 4",
        "topics": [
          "Calculated columns vs measures",
          "Common DAX functions",
          "Aggregations & logical functions"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Advanced DAX",
        "module_duration": "Week 5",
        "topics": [
          "Time intelligence functions",
          "CALCULATE & filter context",
          "Performance optimization"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Data Visualization Essentials",
        "module_duration": "Week 6",
        "topics": [
          "Charts, tables & KPIs",
          "Choosing the right visuals",
          "Data storytelling"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Interactive Dashboards & Reports",
        "module_duration": "Week 7",
        "topics": [
          "Filters, slicers & drill-through",
          "Tooltips & bookmarks",
          "UX best practices"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Power BI Service & Sharing",
        "module_duration": "Week 8",
        "topics": [
          "Publishing reports",
          "Dashboards & apps",
          "Workspace management"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Advanced Features & Optimization",
        "module_duration": "Week 9",
        "topics": [
          "Incremental refresh",
          "Row-level security (RLS)",
          "Performance analyzer"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": [
          "End-to-end business dashboard",
          "Real-world analytics use case"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 2100,
    "total_students_enrolled": 15000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Power BI course?",
      "answer": "A Power BI course teaches how to analyze data, create dashboards, write DAX formulas, and build business intelligence reports using Microsoft Power BI."
    },
    {
      "faq_id": 2,
      "question": "Is Power BI suitable for beginners?",
      "answer": "Yes. This Power BI course starts from basic concepts and gradually progresses to advanced dashboarding and analytics."
    },
    {
      "faq_id": 3,
      "question": "What is DAX in Power BI?",
      "answer": "DAX (Data Analysis Expressions) is a formula language used in Power BI to create calculations, measures, and advanced analytics."
    },
    {
      "faq_id": 4,
      "question": "Will I work on real-world projects?",
      "answer": "Yes. The course includes hands-on labs and a capstone project based on real business data."
    }
  ],
  "target_audience": [
    "Aspiring Data Analysts",
    "Business Analysts",
    "MIS Professionals",
    "Fresh Graduates"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Power BI Course: Master Data Visualization & DAX | Proximsoft",
    "meta_description": "Master Microsoft Power BI. Learn data modeling, advanced DAX, and professional dashboard design through hands-on labs and real-world BI projects.",
    "meta_url": "/courses/data-analytics/power-bi-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-SNOW-026",
    "course_uid": "uid-snowflake-data-platform-cloud",
    "course_title": "Snowflake Data Platform Course",
    "course_subtitle": "Cloud Data Warehousing & Analytics with Snowflake",
    "course_slug": "snowflake-data-platform-course",
    "course_thumbnail": "assets/images/courses/snowflake-thumb.jpg",
    "course_short_description": "Master the world's leading cloud data platform. Learn to build scalable data warehouses, optimize compute costs, and manage secure data sharing.",
    "course_long_description": "This Snowflake Data Platform course is designed to help learners build modern, cloud-native data warehouses and analytics solutions using Snowflake. The course focuses on how organizations store, process, and analyze large volumes of data using Snowflake’s unique separation of compute and storage architecture.",
    "about_course": [
      "Designed for building modern, cloud-native data warehouses using Snowflake's unique architecture.",
      "Focuses on the separation of compute and storage for high-performance data processing.",
      "Covers data loading, SQL-based transformations, performance optimization, and security.",
      "Emphasizes real-world Snowflake implementations used by enterprise analytics teams."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 11,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "100 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/snowflake-data-platform",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Snowflake Pro Core Certification Readiness",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/snowflake-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Working knowledge of SQL",
      "Understanding of relational databases",
      "Basic familiarity with cloud concepts (helpful, not mandatory)"
    ],
    "key_learnings": [
      "Understand Snowflake architecture and separation of storage/compute ",
      "Load and transform large datasets efficiently using COPY and SQL",
      "Optimize query performance and warehouse costs through scaling and caching",
      "Implement secure data sharing, Time Travel, and robust data governance"
    ],
    "ideal_candidates": [
      "Data Engineers",
      "Data Analysts & BI Professionals",
      "SQL Developers",
      "Cloud & Analytics Professionals"
    ],
    "skills_gained": {
      "core_skills": [
        "Snowflake Data Platform",
        "Cloud Data Warehousing",
        "SQL Analytics"
      ],
      "supporting_skills": [
        "Performance Optimization",
        "Secure Data Sharing",
        "BI Integration",
        "Semi-structured Data Handling"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Snowflake",
        "SQL"
      ],
      "secondary": [
        "AWS S3",
        "Azure Blob Storage",
        "Power BI",
        "Tableau"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Snowflake Developer",
      "Data Engineer",
      "Analytics Engineer",
      "BI Engineer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "97%",
      "student_completion_rate": "95%",
      "placement_rate": "92%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Snowflake Analytics Platform. Build an end-to-end solution that ingests data from cloud storage, transforms it using SQL, optimizes warehouse sizing, and implements Time Travel and security policies."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 29
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Snowflake",
        "module_duration": "Week 1",
        "topics": [
          "Snowflake overview & use cases",
          "Cloud data warehousing concepts",
          "Snowflake editions & architecture"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Snowflake Architecture Deep Dive",
        "module_duration": "Week 2",
        "topics": [
          "Virtual warehouses",
          "Databases, schemas & tables",
          "Separation of storage, compute & services"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Data Loading & Ingestion",
        "module_duration": "Week 3",
        "topics": [
          "Loading data from cloud storage",
          "COPY command & stages",
          "File formats & ingestion best practices"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Data Transformation & SQL Analytics",
        "module_duration": "Week 4",
        "topics": [
          "Advanced SQL in Snowflake",
          "Views & materialized views",
          "Data transformation patterns"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Performance Optimization",
        "module_duration": "Week 5",
        "topics": [
          "Query performance tuning",
          "Warehouse sizing & scaling",
          "Caching & clustering"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Security & Data Governance",
        "module_duration": "Week 6",
        "topics": [
          "Roles & access control",
          "Data masking & row access policies",
          "Secure data sharing"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Semi-Structured Data Handling",
        "module_duration": "Week 7",
        "topics": [
          "Working with JSON, AVRO & PARQUET",
          "VARIANT data type",
          "Flattening semi-structured data"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Snowflake & BI Integration",
        "module_duration": "Week 8",
        "topics": [
          "Integrating Power BI & Tableau",
          "Query optimization for BI",
          "Analytics reporting workflows"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Advanced Snowflake Features",
        "module_duration": "Week 9",
        "topics": [
          "Secure data sharing",
          "Time travel & fail-safe",
          "Streams & tasks"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": [
          "End-to-end Snowflake analytics solution",
          "Real-world enterprise use case"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1100,
    "total_students_enrolled": 8200
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is Snowflake Data Platform?",
      "answer": "Snowflake is a cloud-native data platform used for data warehousing, analytics, and secure data sharing with independent compute and storage."
    },
    {
      "faq_id": 2,
      "question": "Is SQL important for Snowflake?",
      "answer": "Yes. SQL is the primary language used for querying, transforming, and analyzing data in Snowflake."
    },
    {
      "faq_id": 3,
      "question": "Can Snowflake handle semi-structured data?",
      "answer": "Yes. Snowflake supports JSON, AVRO, PARQUET, and other semi-structured data formats using its unique VARIANT data type."
    },
    {
      "faq_id": 4,
      "question": "What is Snowflake Time Travel?",
      "answer": "Time Travel allows you to access data as it existed at any point in the past within a defined retention period, helping with data recovery and auditing."
    },
    {
      "faq_id": 5,
      "question": "Will I work on real-world projects?",
      "answer": "Yes. The course includes hands-on labs and a capstone project based on real enterprise analytics scenarios."
    }
  ],
  "target_audience": [
    "Data Engineers",
    "Data Analysts",
    "SQL Developers",
    "Analytics Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Snowflake Data Platform Course | Cloud Data Warehousing",
    "meta_description": "Master Snowflake for enterprise analytics. Learn cloud data warehousing, performance tuning, data sharing, and semi-structured data handling.",
    "meta_url": "/courses/data-analytics/snowflake-data-platform-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-SQL-DA-027",
    "course_uid": "uid-sql-for-data-analytics-mastery",
    "course_title": "SQL for Data Analytics Course",
    "course_subtitle": "Master SQL to Analyze, Query & Transform Data for Business Insights",
    "course_slug": "sql-for-data-analytics-course",
    "course_thumbnail": "assets/images/courses/sql-analytics-thumb.jpg",
    "course_short_description": "Master the most essential skill for data professionals. Learn to query large datasets, perform complex joins, and use window functions for business insights.",
    "course_long_description": "This SQL for Data Analytics course is designed to help learners use SQL as a core tool for data analysis, reporting, and business decision-making. Unlike database administration-focused training, this program is tailored specifically for analytics use cases, emphasizing real-world SQL usage daily in BI and data teams.",
    "about_course": [
      "Tailored specifically for analytics use cases rather than database administration.",
      "Teaches how to query large datasets and transform raw data into actionable insights.",
      "Focuses on real-world SQL usage including complex joins, subqueries, and window functions.",
      "Designed to help you answer real business questions through data querying and reporting."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 12,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80 Hours",
    "weekly_commitment_duration": "6–8 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/sql-for-data-analytics",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "SQL for Data Analytics Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/sql-analytics-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic computer skills",
      "Interest in data analysis and reporting",
      "No prior SQL or coding experience is required"
    ],
    "key_learnings": [
      "Write efficient SQL queries for complex data analysis ",
      "Analyze data relationships using multiple types of Joins",
      "Apply Window Functions for advanced insights like ranking and running totals",
      "Prepare and optimize datasets specifically for BI tools and reporting"
    ],
    "ideal_candidates": [
      "Aspiring Data Analysts",
      "Business & MIS Analysts",
      "Data Science beginners",
      "Professionals working with data and reports"
    ],
    "skills_gained": {
      "core_skills": [
        "SQL Analytics",
        "Data Querying",
        "Business Reporting"
      ],
      "supporting_skills": [
        "Query Optimization",
        "Analytical Thinking",
        "Data Preparation for BI"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "SQL",
        "MySQL",
        "PostgreSQL"
      ],
      "secondary": [
        "SQL Editors",
        "Database Clients",
        "T-SQL / PL-SQL concepts"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Data Analyst",
      "Business Analyst",
      "Reporting Analyst",
      "Junior Data Scientist"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "92%",
      "placement_rate": "88%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 8,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: SQL Analytics & Reporting. Build a real-world solution that queries large datasets, applies complex logic with window functions, and generates actionable business reports."
  },
  "curriculum": {
    "summary": {
      "total_modules": 8,
      "total_lectures": 24
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "SQL & Database Fundamentals",
        "module_duration": "Week 1",
        "topics": [
          "What is SQL?",
          "Databases, tables & schemas",
          "Basic SELECT queries"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Filtering, Sorting & Functions",
        "module_duration": "Week 2",
        "topics": [
          "WHERE, ORDER BY clauses",
          "Built-in SQL functions",
          "Handling NULL values"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Aggregations & Grouping",
        "module_duration": "Week 3",
        "topics": [
          "COUNT, SUM, AVG",
          "GROUP BY & HAVING",
          "Business metrics analysis"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Joins & Relationships",
        "module_duration": "Week 4",
        "topics": [
          "INNER, LEFT, RIGHT joins ",
          "Multi-table queries",
          "Real-world join scenarios"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Subqueries & CTEs",
        "module_duration": "Week 5",
        "topics": [
          "Nested queries",
          "Common Table Expressions (CTEs)",
          "Query readability & optimization"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Window Functions for Analytics",
        "module_duration": "Week 6",
        "topics": [
          "OVER & PARTITION BY",
          "Ranking & running totals",
          "Time-based analysis"
        ]
      },
      {
        "module_number": 7,
        "module_name": "SQL for Reporting & Dashboards",
        "module_duration": "Week 7",
        "topics": [
          "Query optimization for reports",
          "Preparing data for BI tools",
          "SQL best practices"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 8",
        "topics": [
          "End-to-end SQL analytics project",
          "Business reporting use case",
          "Final insights presentation"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1500,
    "total_students_enrolled": 11000
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is SQL for Data Analytics?",
      "answer": "SQL for Data Analytics focuses on using SQL to analyze data, generate reports, and support business decision-making rather than database administration."
    },
    {
      "faq_id": 2,
      "question": "Is SQL required for data analyst jobs?",
      "answer": "Yes. SQL is one of the most important and foundational skills for data analyst and business analyst roles."
    },
    {
      "faq_id": 3,
      "question": "Do I need programming knowledge to learn SQL?",
      "answer": "No prior programming experience is required to learn SQL; it is an intuitive, English-like language for data querying."
    },
    {
      "faq_id": 4,
      "question": "What is a window function in SQL?",
      "answer": "Window functions perform calculations across rows related to the current row, commonly used for complex trend analysis and ranking."
    },
    {
      "faq_id": 5,
      "question": "Is SQL used with Power BI and Tableau?",
      "answer": "Yes. SQL is commonly used to prepare, clean, and query data before it is visualized in major BI tools."
    }
  ],
  "target_audience": [
    "Aspiring Data Analysts",
    "Business Analysts",
    "MIS Professionals",
    "Students"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "SQL for Data Analytics Course | Master Data Querying",
    "meta_description": "Learn SQL for data analysis. Master Joins, Aggregations, Subqueries, and Window Functions to transform raw data into actionable business insights.",
    "meta_url": "/courses/data-analytics/sql-for-data-analytics-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-TAB-028",
    "course_uid": "uid-tableau-mastery-beginner-advanced",
    "course_title": "Tableau Course (Beginner to Advanced)",
    "course_subtitle": "Build Interactive Dashboards & Data Stories with Tableau",
    "course_slug": "tableau-course",
    "course_thumbnail": "assets/images/courses/tableau-thumb.jpg",
    "course_short_description": "Master end-to-end data visualization. Learn to build enterprise-ready dashboards, perform visual analytics, and master data storytelling with Tableau.",
    "course_long_description": "This Tableau course is designed to help learners visualize, analyze, and communicate data effectively using Tableau. The program starts from fundamentals and progresses to advanced visual analytics, calculated fields, parameters, and performance optimization, focusing on how analysts turn raw data into interactive dashboards that support real business decisions.",
    "about_course": [
      "Starts from Tableau fundamentals and progresses to advanced visual analytics and data storytelling.",
      "Focuses on end-to-end usage—from connecting and preparing data to building enterprise dashboards.",
      "Teaches practical skills for designing dashboards that are visually strong and analytically sound.",
      "Emphasis on real-world business intelligence reporting and secure sharing of insights."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Advanced",
    "batch_type": "Flexible | Instructor-Led",
    "course_priority": "high",
    "course_sequence": 13,
    "course_category": {
      "category_id": "CAT_DATA",
      "category_title": "Data Analytics",
      "category_url": "/courses/data-analytics"
    }
  },
  "course_structure": {
    "course_timeline": "8–10 Weeks",
    "total_duration": "80 Hours",
    "weekly_commitment_duration": "6–8 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/tableau-mastery",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Tableau Desktop Specialist Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/tableau-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic computer knowledge",
      "Familiarity with Excel or data concepts (helpful, not mandatory)",
      "Interest in data visualization and analytics"
    ],
    "key_learnings": [
      "Build complex interactive dashboards with Tableau ",
      "Apply advanced visualization techniques using Sets, Parameters, and LOD expressions",
      "Design business-focused data stories to communicate insights to executives",
      "Optimize dashboard performance for large enterprise datasets"
    ],
    "ideal_candidates": [
      "Aspiring Data Analysts",
      "Business Intelligence Professionals",
      "MIS & Reporting Analysts",
      "Working professionals working with data"
    ],
    "skills_gained": {
      "core_skills": [
        "Tableau",
        "Data Visualization",
        "Business Intelligence Reporting"
      ],
      "supporting_skills": [
        "Data Storytelling",
        "Analytical Thinking",
        "Dashboard Performance Optimization"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "Tableau Desktop",
        "Tableau Server",
        "Tableau Cloud"
      ],
      "secondary": [
        "Excel",
        "CSV Sources",
        "SQL (for data preparation)"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Reporting Analyst",
      "Tableau Developer"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "93%",
      "placement_rate": "89%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 10,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Tableau Business Dashboard. You will build a professional dashboard that connects to real-world business data, utilizes calculated fields and parameters, and delivers clear actionable insights for decision-makers."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Data Visualization & Tableau",
        "module_duration": "Week 1",
        "topics": [
          "BI and data visualization concepts",
          "Tableau Desktop overview",
          "Connecting to data sources"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Data Connections & Preparation",
        "module_duration": "Week 2",
        "topics": [
          "Connecting to files and databases",
          "Data types, joins, and unions",
          "Data preparation basics"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Building Basic Visualizations",
        "module_duration": "Week 3",
        "topics": [
          "Charts, graphs, and tables",
          "Dimensions vs measures ",
          "Filters and sorting"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Calculated Fields & Analytics",
        "module_duration": "Week 4",
        "topics": [
          "Calculated fields",
          "Table calculations",
          "Quick table calculations"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Advanced Visual Analytics",
        "module_duration": "Week 5",
        "topics": [
          "Parameters and sets",
          "Advanced chart types",
          "Reference lines and bands"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Dashboards & Interactivity",
        "module_duration": "Week 6",
        "topics": [
          "Dashboard design principles",
          "Actions and filters ",
          "User interaction techniques"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Data Storytelling with Tableau",
        "module_duration": "Week 7",
        "topics": [
          "Creating stories",
          "Storytelling best practices",
          "Business-focused dashboards"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Performance Optimization",
        "module_duration": "Week 8",
        "topics": [
          "Extracts vs live connections",
          "Dashboard performance tuning",
          "Best practices"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Tableau Server & Sharing",
        "module_duration": "Week 9",
        "topics": [
          "Publishing dashboards",
          "Tableau Cloud basics",
          "User access and permissions"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 10",
        "topics": [
          "End-to-end Tableau dashboard project",
          "Real-world business analytics use case",
          "Insights presentation"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1250,
    "total_students_enrolled": 8900
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Tableau course?",
      "answer": "A Tableau course teaches how to visualize data, build dashboards, and create business intelligence reports using Tableau."
    },
    {
      "faq_id": 2,
      "question": "Do I need coding to learn Tableau?",
      "answer": "No coding is required. Basic SQL is optional for data preparation but not mandatory for using Tableau's visualization features."
    },
    {
      "faq_id": 3,
      "question": "What is data storytelling in Tableau?",
      "answer": "Data storytelling combines visuals, context, and insights into a sequenced narrative to communicate findings clearly to business users."
    },
    {
      "faq_id": 4,
      "question": "Can Tableau handle large datasets?",
      "answer": "Yes. Tableau can work with large datasets effectively using Data Extracts, live connection optimizations, and performance tuning techniques."
    },
    {
      "faq_id": 5,
      "question": "Will I work on real-world projects?",
      "answer": "Yes. The course includes multiple hands-on exercises and a capstone dashboard project based on real business requirements."
    }
  ],
  "target_audience": [
    "Aspiring Data Analysts",
    "BI Professionals",
    "Reporting Analysts",
    "MIS Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Tableau Course: Master Data Visualization & Dashboards | Proximsoft",
    "meta_description": "Learn Tableau from beginner to advanced. Master data visualization, calculated fields, dashboard design, and data storytelling through real-world projects.",
    "meta_url": "/courses/data-analytics/tableau-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-AGBA-029",
    "course_uid": "uid-agile-business-analyst-pro",
    "course_title": "Agile Business Analyst Course",
    "course_subtitle": "Agile BA, Scrum Practices & Requirements Management in Agile Projects",
    "course_slug": "agile-business-analyst-course",
    "course_thumbnail": "assets/images/courses/agile-ba-thumb.jpg",
    "course_short_description": "Bridge the gap between business needs and Agile delivery. Learn to write user stories, manage backlogs, and collaborate effectively within Scrum teams.",
    "course_long_description": "This Agile Business Analyst course is designed to help professionals perform the Business Analyst role effectively within Agile and Scrum environments. Unlike traditional programs, this course focuses on iterative delivery models—working closely with Product Owners, Scrum Masters, and developers to translate business needs into actionable user stories.",
    "about_course": [
      "Designed to help BAs operate effectively in fast-moving Agile and Scrum delivery models.",
      "Teaches how to translate complex business needs into high-quality user stories.",
      "Focuses on practical backlog refinement, sprint planning support, and Agile UAT.",
      "Emphasizes collaboration across Scrum roles including developers, QA, and Product Owners."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Live",
    "course_priority": "high",
    "course_sequence": 1,
    "course_category": {
      "category_id": "CAT_MGMT",
      "category_title": "Management",
      "category_url": "/courses/management"
    }
  },
  "course_structure": {
    "course_timeline": "8 Weeks",
    "total_duration": "40 Hours",
    "weekly_commitment_duration": "5-6 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/agile-business-analyst",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Agile Business Analyst Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/agile-ba-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of business requirements",
      "Familiarity with software or IT environments",
      "No prior Agile experience required"
    ],
    "key_learnings": [
      "Work effectively as a BA in Agile and Scrum teams ",
      "Write clear, high-quality user stories and acceptance criteria",
      "Manage and refine product backlogs using prioritization techniques",
      "Support sprint execution and lead User Acceptance Testing (UAT) activities"
    ],
    "ideal_candidates": [
      "Business Analysts working in Agile projects",
      "QA professionals transitioning into BA roles",
      "Product & Functional Analysts",
      "Professionals working with Scrum or Agile teams"
    ],
    "skills_gained": {
      "core_skills": [
        "Agile Business Analysis",
        "Scrum Practices",
        "Requirements Management"
      ],
      "supporting_skills": [
        "Stakeholder Collaboration",
        "Backlog Grooming",
        "Agile Documentation",
        "JIRA/Confluence Proficiency"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "JIRA",
        "Confluence"
      ],
      "secondary": [
        "Scrum Framework",
        "Wireframing Tools",
        "Mockup Tools"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Agile Business Analyst",
      "Scrum Business Analyst",
      "Functional Analyst",
      "Junior Product Analyst"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "94%",
      "student_completion_rate": "92%",
      "placement_rate": "88%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 1,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Agile Business Analysis Project. You will work on a simulated Agile project writing user stories, managing a product backlog in JIRA, and supporting a full sprint lifecycle including UAT."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 29
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Agile Fundamentals for Business Analysts",
        "module_duration": "Week 1",
        "topics": [
          "Agile manifesto & principles",
          "Agile vs Waterfall",
          "Role of BA in Agile teams"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Scrum Framework Deep Dive",
        "module_duration": "Week 2",
        "topics": [
          "Scrum roles, events & artifacts",
          "BA vs Product Owner responsibilities",
          "Working with Scrum teams"
        ]
      },
      {
        "module_number": 3,
        "module_name": "User Stories & Acceptance Criteria",
        "module_duration": "Week 3",
        "topics": [
          "Writing effective user stories",
          "INVEST principles ",
          "Acceptance criteria & definition of done"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Backlog Management & Grooming",
        "module_duration": "Week 4",
        "topics": [
          "Product backlog creation",
          "Prioritization techniques",
          "Backlog refinement sessions"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Agile Requirements Modeling",
        "module_duration": "Week 5",
        "topics": [
          "Use cases & story mapping ",
          "Wireframes & mockups",
          "Lightweight Agile documentation"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Sprint Planning & Execution",
        "module_duration": "Week 6",
        "topics": [
          "Supporting sprint planning",
          "Sprint reviews & retrospectives",
          "BA responsibilities during sprints"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Stakeholder Collaboration",
        "module_duration": "Week 7",
        "topics": [
          "Stakeholder identification",
          "Agile communication techniques",
          "Managing change in Agile projects"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Agile Testing & UAT",
        "module_duration": "Week 8",
        "topics": [
          "BA role in Agile testing",
          "UAT planning & execution",
          "Collaboration with QA teams"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Agile Tools & Metrics",
        "module_duration": "Week 8",
        "topics": [
          "JIRA & Confluence usage ",
          "Agile metrics & KPIs",
          "Progress tracking & reporting"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project Development",
        "module_duration": "Week 8",
        "topics": [
          "End-to-end Agile BA project",
          "Final project presentation"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.8,
    "total_reviews": 850,
    "total_students_enrolled": 5400
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is an Agile Business Analyst?",
      "answer": "An Agile Business Analyst works within Scrum or Agile teams to translate business needs into user stories, manage backlogs, and support sprint delivery."
    },
    {
      "faq_id": 2,
      "question": "How is Agile BA different from traditional BA?",
      "answer": "Agile BAs focus on iterative delivery, continuous collaboration, and lightweight documentation instead of heavy, upfront requirements documents."
    },
    {
      "faq_id": 3,
      "question": "What tools are used by Agile Business Analysts?",
      "answer": "Common tools include JIRA for task management, Confluence for documentation, and various wireframing tools like Figma or Balsamiq."
    },
    {
      "faq_id": 4,
      "question": "Is this course suitable for QA professionals?",
      "answer": "Yes. QA professionals often have a deep understanding of product logic, making them excellent candidates for transitioning into Agile BA roles."
    },
    {
      "faq_id": 5,
      "question": "Do I need coding knowledge?",
      "answer": "No coding knowledge is required. The focus is on business logic, requirement translation, and project orchestration."
    }
  ],
  "target_audience": [
    "Business Analysts",
    "QA Professionals",
    "Product Analysts",
    "Scrum Team Members"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Agile Business Analyst Course | Scrum BA Training | Proximsoft",
    "meta_description": "Master the role of a Business Analyst in Agile and Scrum teams. Learn to write user stories, manage backlogs in JIRA, and lead Agile delivery projects.",
    "meta_url": "/courses/management/agile-business-analyst-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-BAPMP-030",
    "course_uid": "uid-business-analyst-with-pmp-expert",
    "course_title": "Business Analyst with PMP Course",
    "course_subtitle": "Business Analysis & Project Management (PMP-Oriented) for IT Projects",
    "course_slug": "business-analyst-with-pmp-course",
    "course_thumbnail": "assets/images/courses/ba-pmp-thumb.jpg",
    "course_short_description": "Combine business analysis expertise with PMP-aligned project management. Master requirements elicitation, scope control, and risk management in enterprise IT projects.",
    "course_long_description": "The Business Analyst with PMP course is designed for professionals who want to combine business analysis expertise with PMP-aligned project management practices used in IT and enterprise projects. This program focuses on how Business Analysts operate within structured project environments governed by PMI® standards, teaching requirement elicitation, BRD/FRD preparation, stakeholder communication, and delivery frameworks.",
    "about_course": [
      "Combines BA expertise with PMP-aligned project management practices for enterprise environments.",
      "Teaches how requirements and project execution work together in real-world IT delivery.",
      "Aligned with PMI® standards for scope control, risk management, and process groups.",
      "Covers Agile, Waterfall, and hybrid models to prepare for leadership in digital transformation."
    ],
    "course_status": "published",
    "difficulty_level": "Intermediate",
    "batch_type": "Live",
    "course_priority": "high",
    "course_sequence": 2,
    "course_category": {
      "category_id": "CAT_MGMT",
      "category_title": "Management",
      "category_url": "/courses/management"
    }
  },
  "course_structure": {
    "course_timeline": "8 Weeks",
    "total_duration": "40 Hours",
    "weekly_commitment_duration": "5-6 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/ba-with-pmp",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Business Analysis & Project Management Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/ba-pmp-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of business requirements",
      "Familiarity with IT or software projects",
      "Prior BA, QA, or PM exposure is helpful but not mandatory"
    ],
    "key_learnings": [
      "Perform BA roles within PMP-aligned projects",
      "Manage scope, requirements, and stakeholders effectively",
      "Understand PMP process groups and knowledge areas",
      "Support structured and successful project delivery"
    ],
    "ideal_candidates": [
      "Business Analysts aiming for leadership roles",
      "Project Coordinators & Associate Project Managers",
      "QA or Technical professionals transitioning into BA–PM roles",
      "Professionals planning PMP certification in the future"
    ],
    "skills_gained": {
      "core_skills": [
        "Business Analysis",
        "PMP-Aligned Project Management",
        "Requirements & Scope Management"
      ],
      "supporting_skills": [
        "Stakeholder Communication",
        "Risk & Quality Management",
        "Delivery Governance"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "JIRA",
        "Confluence"
      ],
      "secondary": [
        "MS Project (overview)",
        "Agile / Scrum Frameworks",
        "BA & PM templates"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Business Analyst",
      "Business Systems Analyst",
      "Project Coordinator",
      "Associate Project Manager"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "93%",
      "placement_rate": "89%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 1,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: BA with PMP Project Simulation. You will manage a real-world IT project simulation involving elicitation, documentation, risk planning, and progress tracking."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "BA & PMP Overview",
        "module_duration": "Week 1",
        "topics": [
          "Role of Business Analyst vs Project Manager",
          "PMI® project lifecycle",
          "How BA activities fit into PMP framework"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Business Analysis Fundamentals",
        "module_duration": "Week 2",
        "topics": [
          "Requirement elicitation techniques",
          "Functional & non-functional requirements",
          "BA deliverables and documentation"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Scope & Requirements Management",
        "module_duration": "Week 3",
        "topics": [
          "Scope definition and control",
          "Work Breakdown Structure (WBS) basics",
          "Requirement Traceability Matrix (RTM)"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Stakeholder & Communication Management",
        "module_duration": "Week 4",
        "topics": [
          "Stakeholder identification and analysis",
          "Communication planning",
          "Managing expectations and conflicts"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Schedule & Cost Management",
        "module_duration": "Week 5",
        "topics": [
          "Project scheduling concepts",
          "Estimation techniques",
          "Budgeting and cost control basics"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Risk & Quality Management",
        "module_duration": "Week 6",
        "topics": [
          "Risk identification and mitigation",
          "Quality planning and assurance",
          "Change and issue management"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Agile & Waterfall Delivery Models",
        "module_duration": "Week 7",
        "topics": [
          "Waterfall delivery approach",
          "Agile & Scrum overview",
          "Hybrid project models"
        ]
      },
      {
        "module_number": 8,
        "module_name": "PMP Knowledge Areas & Process Groups",
        "module_duration": "Week 8",
        "topics": [
          "Initiating, Planning, Executing",
          "Monitoring & Controlling",
          "Closing process group"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Tools, Documentation & Governance",
        "module_duration": "Week 8",
        "topics": [
          "JIRA & Confluence usage",
          "BA and PM templates",
          "Reporting and dashboards"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project",
        "module_duration": "Week 8",
        "topics": [
          "End-to-end BA + PM project",
          "Requirements and planning execution",
          "Final delivery tracking"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 600,
    "total_students_enrolled": 4200
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Business Analyst with PMP course?",
      "answer": "It is a course that combines business analysis practices with PMP-aligned project management concepts for IT projects."
    },
    {
      "faq_id": 2,
      "question": "Does this course replace PMP certification training?",
      "answer": "No. This course is PMP-aligned but does not replace official PMP certification preparation."
    },
    {
      "faq_id": 3,
      "question": "Who should take a BA with PMP course?",
      "answer": "Business Analysts, Project Coordinators, QA professionals, and those planning PMP certification."
    },
    {
      "faq_id": 4,
      "question": "What skills will I learn in this course?",
      "answer": "You’ll learn requirements management, stakeholder communication, scope control, and PMP process awareness."
    },
    {
      "faq_id": 5,
      "question": "Is Agile covered in this course?",
      "answer": "Yes. The course covers Agile, Waterfall, and hybrid delivery models."
    },
    {
      "faq_id": 6,
      "question": "What tools are used in this course?",
      "answer": "Tools include JIRA, Confluence, MS Project (overview), and BA/PM templates."
    },
    {
      "faq_id": 7,
      "question": "Is this course suitable for beginners?",
      "answer": "It is best suited for professionals with basic BA or IT project exposure."
    },
    {
      "faq_id": 8,
      "question": "Will I work on real-world projects?",
      "answer": "Yes. The capstone project simulates an end-to-end BA + PM project lifecycle."
    },
    {
      "faq_id": 9,
      "question": "What jobs can I apply for after this course?",
      "answer": "Roles include Business Analyst, Project Coordinator, Associate Project Manager, and Systems Analyst."
    },
    {
      "faq_id": 10,
      "question": "How does PMP knowledge help Business Analysts?",
      "answer": "PMP knowledge helps BAs align requirements with scope, schedule, risk, and delivery constraints."
    }
  ],
  "target_audience": [
    "Business Analysts",
    "Project Coordinators",
    "QA Professionals",
    "IT Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Business Analyst with PMP Course | BA & PM Certification | Proximsoft",
    "meta_description": "Advance your career by combining Business Analysis with PMP-aligned project management. Master requirements, scope, and stakeholder management for IT projects.",
    "meta_url": "/courses/management/business-analyst-with-pmp-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-DBA-031",
    "course_uid": "uid-data-business-analyst-insights",
    "course_title": "Data Business Analyst Course",
    "course_subtitle": "Business Analysis, Data Analytics & Insights for Decision Making",
    "course_slug": "data-business-analyst-course",
    "course_thumbnail": "assets/images/courses/data-ba-thumb.jpg",
    "course_short_description": "Combine business analysis with data analytics. Learn to translate business requirements into data questions and drive decisions using SQL, Excel, and Power BI.",
    "course_long_description": "The Data Business Analyst course is designed to help professionals combine business analysis skills with data analytics techniques to drive informed decision-making in organizations. This program focuses on how business requirements are translated into data questions, analyzed using SQL and Excel, and communicated through dashboards and insights using Power BI or Tableau.",
    "about_course": [
      "Combines core business analysis skills with modern data analytics techniques.",
      "Focuses on translating business requirements into technical data questions.",
      "Teaches data analysis using SQL and Excel followed by visualization in Power BI or Tableau.",
      "Emphasizes the business context behind data to act as a bridge between business and analytics teams."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Live",
    "course_priority": "high",
    "course_sequence": 3,
    "course_category": {
      "category_id": "CAT_MGMT",
      "category_title": "Management",
      "category_url": "/courses/management"
    }
  },
  "course_structure": {
    "course_timeline": "8 Weeks",
    "total_duration": "40 Hours",
    "weekly_commitment_duration": "5 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/data-business-analyst",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Data Business Analyst Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/data-ba-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic computer skills",
      "Interest in data and business problem-solving",
      "Prior Excel knowledge is helpful but not mandatory"
    ],
    "key_learnings": [
      "Translate business requirements into data-driven insights",
      "Analyze business data using SQL and Excel",
      "Build interactive dashboards for management decision-making",
      "Communicate complex data insights clearly to non-technical stakeholders"
    ],
    "ideal_candidates": [
      "IT Business Analysts moving into data-focused roles",
      "Data Analysts seeking stronger business context",
      "Reporting & MIS professionals",
      "Freshers interested in analytics and business roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Data Business Analysis",
        "Business Analytics",
        "Insight Generation"
      ],
      "supporting_skills": [
        "SQL Querying",
        "Excel-Based Analysis",
        "Data Visualization & Storytelling"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "SQL",
        "MS Excel"
      ],
      "secondary": [
        "Power BI",
        "Tableau",
        "JIRA",
        "Confluence"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Data Business Analyst",
      "Business Intelligence Analyst",
      "Reporting Analyst",
      "Functional Data Analyst"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "93%",
      "placement_rate": "88%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 1,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Data Business Analysis Project. You will work on a real-world business scenario: understanding requirements, analyzing data with SQL/Excel, and presenting dashboard-driven insights."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 29
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Data Business Analysis",
        "module_duration": "Week 1",
        "topics": [
          "Role of a Data Business Analyst",
          "BA vs Data Analyst vs BI Analyst",
          "Analytics lifecycle"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Business Requirements & KPIs",
        "module_duration": "Week 2",
        "topics": [
          "Requirement elicitation techniques",
          "Business metrics and KPIs",
          "Translating business needs into data questions"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Data Fundamentals",
        "module_duration": "Week 3",
        "topics": [
          "Types of data",
          "Data sources",
          "Data quality and governance basics"
        ]
      },
      {
        "module_number": 4,
        "module_name": "SQL for Business Analysis",
        "module_duration": "Week 4",
        "topics": [
          "SQL fundamentals",
          "Data querying and filtering",
          "Business-focused SQL use cases"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Excel for Data Analysis",
        "module_duration": "Week 5",
        "topics": [
          "Data cleaning and transformation",
          "Pivot tables and formulas",
          "Business reporting with Excel"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Data Visualization",
        "module_duration": "Week 6",
        "topics": [
          "Dashboard design principles",
          "Power BI / Tableau basics",
          "Storytelling with data"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Business Process & Data Mapping",
        "module_duration": "Week 7",
        "topics": [
          "Business process flows",
          "Data mapping techniques",
          "Impact analysis"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Agile Analytics & Stakeholder Communication",
        "module_duration": "Week 8",
        "topics": [
          "Agile analytics concepts",
          "Communicating insights effectively",
          "Stakeholder presentations"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Tools, Documentation & Best Practices",
        "module_duration": "Week 8",
        "topics": [
          "JIRA and Confluence usage",
          "BA documentation standards",
          "Data analysis best practices"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project",
        "module_duration": "Week 8",
        "topics": [
          "End-to-end data business analysis project",
          "Insights presentation"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 520,
    "total_students_enrolled": 3800
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Data Business Analyst?",
      "answer": "A Data Business Analyst combines business analysis skills with data analytics to turn business requirements into actionable insights."
    },
    {
      "faq_id": 2,
      "question": "How is a Data Business Analyst different from a Data Analyst?",
      "answer": "A Data Business Analyst focuses more on business context, KPIs, and stakeholder communication, while Data Analysts focus more on technical analysis."
    },
    {
      "faq_id": 3,
      "question": "Do I need programming skills for this course?",
      "answer": "No advanced programming is required. The course focuses on SQL and Excel for analytics."
    },
    {
      "faq_id": 4,
      "question": "What tools will I learn in this course?",
      "answer": "You’ll work with SQL, Excel, Power BI or Tableau, and BA collaboration tools like JIRA."
    },
    {
      "faq_id": 5,
      "question": "Is this course suitable for freshers?",
      "answer": "Yes. The course is beginner-friendly and designed for freshers and career switchers."
    },
    {
      "faq_id": 6,
      "question": "Will I learn dashboard creation?",
      "answer": "Yes. Dashboard building using Power BI or Tableau is a key part of the curriculum."
    },
    {
      "faq_id": 7,
      "question": "Does this course include real-world projects?",
      "answer": "Yes. The capstone project simulates an end-to-end data business analysis workflow."
    },
    {
      "faq_id": 8,
      "question": "What jobs can I apply for after completing this course?",
      "answer": "You can apply for Data Business Analyst, BI Analyst, Reporting Analyst, and similar roles."
    },
    {
      "faq_id": 9,
      "question": "Is business analysis important for data roles?",
      "answer": "Yes. Understanding business requirements is critical for delivering meaningful analytics and insights."
    },
    {
      "faq_id": 10,
      "question": "Is Data Business Analyst a growing role?",
      "answer": "Yes. As organizations rely more on data-driven decisions, the demand for Data Business Analysts continues to grow."
    }
  ],
  "target_audience": [
    "IT Business Analysts",
    "Data Analysts",
    "MIS Professionals",
    "Fresh Graduates"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Data Business Analyst Course | Business Analytics Training | Proximsoft",
    "meta_description": "Master Data Business Analysis. Learn to define KPIs, analyze data using SQL and Excel, and communicate business insights via Power BI dashboards.",
    "meta_url": "/courses/management/data-business-analyst-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-ITBA-032",
    "course_uid": "uid-it-business-analyst-pro",
    "course_title": "IT Business Analyst Course",
    "course_subtitle": "Business Analysis, Requirements Engineering & Stakeholder Management for IT Projects",
    "course_slug": "it-business-analyst-course",
    "course_thumbnail": "assets/images/courses/it-ba-thumb.jpg",
    "course_short_description": "Bridge the gap between business and technology. Master requirement gathering, documentation (BRD/FRD), and process modeling for enterprise IT projects.",
    "course_long_description": "This IT Business Analyst course is designed to help professionals build end-to-end business analysis skills required to bridge the gap between business stakeholders and technical teams in IT projects. The course focuses on requirements elicitation, documentation (BRD/FRD), process modeling, Agile and Waterfall practices, stakeholder communication, and data-driven decision making.",
    "about_course": [
      "Designed to help professionals bridge the gap between business stakeholders and technical teams.",
      "Focuses on requirements elicitation, documentation (BRD/FRD), and process modeling.",
      "Teaches both Agile and Waterfall practices aligned with real IT delivery environments.",
      "Practical and role-oriented training involving software systems and digital transformation initiatives."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Flexible, Instructor-Led",
    "course_priority": "high",
    "course_sequence": 4,
    "course_category": {
      "category_id": "CAT_MGMT",
      "category_title": "Management",
      "category_url": "/courses/management"
    }
  },
  "course_structure": {
    "course_timeline": "8 Weeks",
    "total_duration": "80 Hours",
    "weekly_commitment_duration": "8–10 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/it-business-analyst",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "IT Business Analyst Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/it-ba-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic computer knowledge",
      "Interest in business processes and problem-solving",
      "Willingness to communicate and document requirements",
      "No coding or technical experience is mandatory"
    ],
    "key_learnings": [
      "Gather and document business requirements effectively using BRD and FRD standards",
      "Analyze and model business processes using BPMN fundamentals",
      "Communicate with both technical and non-technical stakeholders confidently",
      "Support UAT, change management, and Agile delivery teams"
    ],
    "ideal_candidates": [
      "Fresh graduates & non-technical professionals",
      "QA, support, operations, and reporting professionals",
      "Data & MIS professionals moving into BA roles",
      "Professionals transitioning into IT Business Analyst roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Business Analysis",
        "Requirements Engineering",
        "Stakeholder Management"
      ],
      "supporting_skills": [
        "Process Modeling",
        "Agile Business Analysis",
        "Data Interpretation for Business",
        "UAT Planning"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "JIRA",
        "Confluence"
      ],
      "secondary": [
        "MS Excel",
        "SQL (Basics)",
        "BPMN Modeling Tools",
        "Wireframing Tools"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "IT Business Analyst",
      "Business Systems Analyst",
      "Functional Analyst",
      "Junior Product Analyst"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "93%",
      "placement_rate": "90%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 1,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: IT Business Analysis Case Study. You will work on a complete IT project scenario: stakeholder gathering, BRD/FRD documentation, process modeling, user stories, and UAT planning."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 29
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Business Analysis",
        "module_duration": "Week 1",
        "topics": [
          "Role of an IT Business Analyst",
          "BA vs PM vs QA roles",
          "IT project lifecycle overview"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Business Process Modeling",
        "module_duration": "Week 2",
        "topics": [
          "AS-IS and TO-BE processes",
          "BPMN fundamentals",
          "Process improvement techniques"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Requirement Elicitation Techniques",
        "module_duration": "Week 3",
        "topics": [
          "Stakeholder interviews",
          "Workshops and brainstorming",
          "Use cases and user stories"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Requirement Documentation",
        "module_duration": "Week 4",
        "topics": [
          "BRD and FRD preparation",
          "Functional vs non-functional requirements",
          "Acceptance criteria"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Stakeholder & Communication Management",
        "module_duration": "Week 5",
        "topics": [
          "Stakeholder identification and analysis",
          "Communication planning",
          "Conflict resolution"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Agile Business Analysis",
        "module_duration": "Week 6",
        "topics": [
          "Agile and Scrum fundamentals",
          "BA role in Agile teams",
          "Backlog grooming and user stories"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Data Analysis for Business Analysts",
        "module_duration": "Week 7",
        "topics": [
          "Excel for business analysis",
          "SQL basics",
          "Interpreting data for decision making"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Tools & Documentation Standards",
        "module_duration": "Week 8",
        "topics": [
          "JIRA and Confluence usage",
          "Wireframes and mockups",
          "BA templates and best practices"
        ]
      },
      {
        "module_number": 9,
        "module_name": "UAT & Change Management",
        "module_duration": "Week 8",
        "topics": [
          "User Acceptance Testing (UAT)",
          "Change requests and impact analysis",
          "Release and deployment support"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project",
        "module_duration": "Week 8",
        "topics": [
          "End-to-end IT Business Analysis project",
          "Final documentation and UAT support"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1100,
    "total_students_enrolled": 7200
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What does an IT Business Analyst do?",
      "answer": "An IT Business Analyst gathers, analyzes, and documents business requirements, communicates with stakeholders, and ensures IT solutions meet business objectives."
    },
    {
      "faq_id": 2,
      "question": "Is IT Business Analyst a technical role?",
      "answer": "No. IT Business Analysts focus more on requirements, communication, and process understanding rather than coding."
    },
    {
      "faq_id": 3,
      "question": "Can non-technical professionals become IT Business Analysts?",
      "answer": "Yes. This course is designed specifically for beginners and non-technical professionals transitioning into BA roles."
    },
    {
      "faq_id": 4,
      "question": "What skills are required to become an IT Business Analyst?",
      "answer": "Key skills include requirement gathering, documentation, stakeholder communication, process modeling, and basic data analysis."
    },
    {
      "faq_id": 5,
      "question": "Is SQL required for IT Business Analysts?",
      "answer": "Basic SQL is useful but not mandatory. This course covers SQL fundamentals required for analysis and reporting."
    },
    {
      "faq_id": 6,
      "question": "How is IT Business Analysis different from Data Analysis?",
      "answer": "IT Business Analysis focuses on requirements and processes, while Data Analysis focuses on interpreting datasets and metrics."
    },
    {
      "faq_id": 7,
      "question": "Does this course cover Agile Business Analysis?",
      "answer": "Yes. The course includes Agile BA practices, Scrum fundamentals, and user story creation."
    },
    {
      "faq_id": 8,
      "question": "What tools do IT Business Analysts commonly use?",
      "answer": "Common tools include JIRA, Confluence, Excel, SQL, and BPMN modeling tools."
    },
    {
      "faq_id": 9,
      "question": "What jobs can I get after this course?",
      "answer": "You can apply for IT Business Analyst, Business Systems Analyst, or Functional Analyst roles."
    },
    {
      "faq_id": 10,
      "question": "Is this course suitable for fresh graduates?",
      "answer": "Yes. The course starts from basics and includes hands-on projects suitable for freshers."
    }
  ],
  "target_audience": [
    "Fresh Graduates",
    "Non-technical professionals",
    "QA/Support Professionals",
    "MIS professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "IT Business Analyst Course | Requirements & BA Training | Proximsoft",
    "meta_description": "Master the role of an IT Business Analyst. Learn requirement gathering, BRD/FRD documentation, Agile BA, and stakeholder management for IT projects.",
    "meta_url": "/courses/management/it-business-analyst-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-MGMT-033",
    "course_uid": "uid-project-management-it-delivery",
    "course_title": "Project Management Course",
    "course_subtitle": "IT Project Management, Agile & Waterfall Methodologies for Successful Delivery",
    "course_slug": "project-management-course",
    "course_thumbnail": "assets/images/courses/project-management-thumb.jpg",
    "course_short_description": "Master end-to-end IT project management. Learn to plan, execute, and deliver projects using Agile, Scrum, and Waterfall methodologies with tools like JIRA.",
    "course_long_description": "This Project Management course is designed to help learners master end-to-end IT project management skills, covering planning, execution, monitoring, and successful delivery of real-world projects. This program focuses on practical project execution—combining Agile, Scrum, and Waterfall methodologies with hands-on tools and real delivery scenarios.",
    "about_course": [
      "Covers the end-to-end IT project lifecycle from initiation to successful delivery.",
      "Integrates Agile, Scrum, and Waterfall methodologies for a holistic management approach.",
      "Focuses on practical execution using industry-standard tools like JIRA and MS Project.",
      "Emphasizes leadership, stakeholder communication, and risk control in enterprise settings."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Live",
    "course_priority": "high",
    "course_sequence": 5,
    "course_category": {
      "category_id": "CAT_MGMT",
      "category_title": "Management",
      "category_url": "/courses/management"
    }
  },
  "course_structure": {
    "course_timeline": "8 Weeks",
    "total_duration": "40 Hours",
    "weekly_commitment_duration": "5-6 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/project-management",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "IT Project Management Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/pm-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "Basic understanding of IT or business workflows",
      "Interest in leadership and coordination",
      "Strong communication skills",
      "No prior project management experience required"
    ],
    "key_learnings": [
      "Plan and manage IT projects effectively using structured frameworks",
      "Apply Agile, Scrum, and Waterfall methodologies to real-world delivery",
      "Manage project risks, scope, and stakeholder expectations",
      "Track project progress using industry-standard reporting and dashboards"
    ],
    "ideal_candidates": [
      "Aspiring Project Managers",
      "Business Analysts & Agile BAs",
      "QA Leads / Tech Leads moving into management",
      "Professionals managing IT projects",
      "Freshers aiming for coordination roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Project Management",
        "Agile & Waterfall Methodologies",
        "Stakeholder Communication"
      ],
      "supporting_skills": [
        "Risk Management",
        "Scheduling & Cost Control",
        "Reporting & Delivery Tracking"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "JIRA",
        "MS Project"
      ],
      "secondary": [
        "Agile & Scrum Frameworks",
        "Waterfall Methodology",
        "Project Templates"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "IT Project Manager (Junior)",
      "Project Coordinator",
      "Scrum Project Manager",
      "Delivery Manager (Entry-Level)"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "92%",
      "placement_rate": "89%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 1,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: End-to-End IT Project Delivery. Manage a complete project lifecycle including scope planning, risk management, and delivery reporting."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Introduction to Project Management",
        "module_duration": "Week 1",
        "topics": [
          "What project management really means",
          "Role of a Project Manager",
          "Project lifecycle & methodologies"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Project Initiation & Scope Management",
        "module_duration": "Week 2",
        "topics": [
          "Project charter creation",
          "Scope definition",
          "Work Breakdown Structure (WBS)"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Schedule & Cost Management",
        "module_duration": "Week 3",
        "topics": [
          "Project scheduling techniques",
          "Effort estimation methods",
          "Budgeting & cost control"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Risk & Quality Management",
        "module_duration": "Week 4",
        "topics": [
          "Risk identification & mitigation",
          "Quality planning",
          "Issue tracking"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Stakeholder & Communication Management",
        "module_duration": "Week 5",
        "topics": [
          "Stakeholder analysis",
          "Communication planning",
          "Conflict resolution"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Waterfall Project Management",
        "module_duration": "Week 6",
        "topics": [
          "Waterfall lifecycle",
          "Documentation & governance",
          "When to use Waterfall"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Agile & Scrum Project Management",
        "module_duration": "Week 7",
        "topics": [
          "Agile principles",
          "Scrum roles & ceremonies",
          "Project Manager vs Scrum Master"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Project Tools & Reporting",
        "module_duration": "Week 8",
        "topics": [
          "JIRA fundamentals",
          "MS Project overview",
          "Status reporting & dashboards"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Project Monitoring & Control",
        "module_duration": "Week 8",
        "topics": [
          "Tracking progress",
          "Change management",
          "Project closure & retrospectives"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project",
        "module_duration": "Week 8",
        "topics": [
          "End-to-end IT project delivery",
          "Planning to execution workflow",
          "Project delivery reporting"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 750,
    "total_students_enrolled": 4800
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Project Management course?",
      "answer": "A Project Management course teaches how to plan, execute, monitor, and deliver projects using structured frameworks like Agile, Scrum, and Waterfall."
    },
    {
      "faq_id": 2,
      "question": "Is this course suitable for beginners?",
      "answer": "Yes. This course starts from fundamentals and gradually covers real-world project execution."
    },
    {
      "faq_id": 3,
      "question": "What methodologies are covered in this course?",
      "answer": "Agile, Scrum, and Waterfall project management methodologies are all covered."
    },
    {
      "faq_id": 4,
      "question": "Will I learn Agile and Scrum in this course?",
      "answer": "Yes. The course includes Agile principles, Scrum roles, ceremonies, and practical execution."
    },
    {
      "faq_id": 5,
      "question": "What tools will I learn?",
      "answer": "You’ll work with tools like JIRA and MS Project used in real IT projects."
    },
    {
      "faq_id": 6,
      "question": "Do I need prior project management experience?",
      "answer": "No prior experience is required."
    },
    {
      "faq_id": 7,
      "question": "Is this course useful for Business Analysts?",
      "answer": "Yes. Business Analysts benefit greatly from understanding project execution and delivery frameworks."
    },
    {
      "faq_id": 8,
      "question": "Does this course include real-world projects?",
      "answer": "Yes. A full capstone project simulates real IT project delivery."
    },
    {
      "faq_id": 9,
      "question": "What jobs can I apply for after this course?",
      "answer": "Junior Project Manager, Project Coordinator, Scrum Project Manager, or Delivery roles."
    },
    {
      "faq_id": 10,
      "question": "Is this course aligned with real IT industry practices?",
      "answer": "Yes. The curriculum is designed around real enterprise project environments."
    }
  ],
  "target_audience": [
    "Aspiring Project Managers",
    "Business Analysts",
    "QA Leads",
    "Tech Leads"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "IT Project Management Course | Agile & Waterfall | Proximsoft",
    "meta_description": "Master end-to-end IT project delivery. Learn Agile, Scrum, and Waterfall methodologies using JIRA and MS Project in a hands-on, enterprise-focused course.",
    "meta_url": "/courses/management/project-management-course"
  }
},
{
  "course_details": {
    "course_id": "CRS-SCM-034",
    "course_uid": "uid-scrum-master-agile-leadership",
    "course_title": "Scrum Master Course",
    "course_subtitle": "Agile Scrum Framework, Facilitation & Team Leadership",
    "course_slug": "scrum-master-course",
    "course_thumbnail": "assets/images/courses/scrum-master-thumb.jpg",
    "course_short_description": "Lead high-performing Agile teams. Master the Scrum framework, facilitate ceremonies, and remove impediments to drive continuous delivery.",
    "course_long_description": "The Scrum Master course is designed to help professionals understand, apply, and lead Agile Scrum practices in real-world project environments. This program goes beyond theory to focus on how Scrum actually works inside teams—covering Agile mindset, Scrum roles, ceremonies, artifacts, backlog management, and facilitation techniques.",
    "about_course": [
      "Provides hands-on exposure to supporting product teams and removing impediments.",
      "Teaches practical Scrum implementation used in modern IT, product, and business teams.",
      "Covers critical facilitation techniques for Scrum ceremonies and continuous improvement.",
      "Prepares learners for industry-standard certifications such as CSM®, PSM®, and SAFe®."
    ],
    "course_status": "published",
    "difficulty_level": "Beginner to Intermediate",
    "batch_type": "Live",
    "course_priority": "high",
    "course_sequence": 6,
    "course_category": {
      "category_id": "CAT_MGMT",
      "category_title": "Management",
      "category_url": "/courses/management"
    }
  },
  "course_structure": {
    "course_timeline": "8 Weeks",
    "total_duration": "40 Hours",
    "weekly_commitment_duration": "6–8 Hours",
    "modules_included": true,
    "course_features": [
      "Lifetime Access",
      "Hands-on Projects",
      "1-on-1 Mentorship",
      "Job Assistance",
      "Mobile Friendly"
    ]
  },
  "pricing_and_enrollment": {
    "currency": "USD",
    "base_price": 0.00,
    "discounted_price": 0.00,
    "discount_percentage": 0,
    "discount_code": "",
    "enrollment_link": "/enroll/scrum-master",
    "is_free": false
  },
  "certification_details": {
    "is_certified": true,
    "certificate_name": "Scrum Master Professional Certificate",
    "is_shareable": true,
    "certificate_image_url": "assets/images/certificates/scrum-master-cert.jpg"
  },
  "learning_content": {
    "prerequisites": [
      "No mandatory technical prerequisites",
      "Basic understanding of software development concepts recommended",
      "Interest in Agile methodologies"
    ],
    "key_learnings": [
      "Apply Scrum framework in real project environments",
      "Facilitate Agile ceremonies effectively including Sprint Planning and Retrospectives",
      "Coach and support Agile teams as a servant leader",
      "Remove technical and process impediments to improve team delivery"
    ],
    "ideal_candidates": [
      "Aspiring Scrum Masters",
      "Project Managers transitioning to Agile",
      "Business Analysts working in Agile projects",
      "QA Engineers & Developers seeking leadership roles"
    ],
    "skills_gained": {
      "core_skills": [
        "Agile Scrum Framework",
        "Scrum Facilitation",
        "Servant Leadership"
      ],
      "supporting_skills": [
        "Agile Metrics & Reporting",
        "Team Coaching",
        "Conflict Resolution"
      ]
    },
    "tools_and_technologies": {
      "primary": [
        "JIRA",
        "Agile Boards"
      ],
      "secondary": [
        "Confluence",
        "Planning Poker",
        "Burndown/Burnup Charts"
      ]
    }
  },
  "career_outcomes": {
    "career_roles": [
      "Scrum Master",
      "Agile Project Coordinator",
      "Junior Agile Coach",
      "Delivery Manager (Agile)"
    ],
    "outcome_metrics": {
      "students_placed": 0,
      "students_internships": 0,
      "student_success_rate": "95%",
      "student_completion_rate": "93%",
      "placement_rate": "89%"
    }
  },
  "project_details": {
    "has_projects": true,
    "total_projects": 1,
    "has_capstone_project": true,
    "total_capstone_projects": 1,
    "project_description": "Capstone Project: Scrum Implementation. Facilitate Scrum ceremonies, manage backlog and sprints in JIRA, and track Agile metrics to deliver working increments."
  },
  "curriculum": {
    "summary": {
      "total_modules": 10,
      "total_lectures": 30
    },
    "modules": [
      {
        "module_number": 1,
        "module_name": "Agile & Scrum Fundamentals",
        "module_duration": "Week 1",
        "topics": [
          "Agile values & principles",
          "Agile vs Waterfall",
          "Introduction to Scrum framework"
        ]
      },
      {
        "module_number": 2,
        "module_name": "Scrum Roles & Responsibilities",
        "module_duration": "Week 2",
        "topics": [
          "Scrum Master role",
          "Product Owner role",
          "Development Team responsibilities"
        ]
      },
      {
        "module_number": 3,
        "module_name": "Scrum Events (Ceremonies)",
        "module_duration": "Week 3",
        "topics": [
          "Sprint planning",
          "Daily Scrum",
          "Sprint review & retrospective"
        ]
      },
      {
        "module_number": 4,
        "module_name": "Scrum Artifacts",
        "module_duration": "Week 4",
        "topics": [
          "Product backlog",
          "Sprint backlog",
          "Increment & Definition of Done"
        ]
      },
      {
        "module_number": 5,
        "module_name": "Backlog & Estimation Techniques",
        "module_duration": "Week 5",
        "topics": [
          "User stories & acceptance criteria",
          "Story points",
          "Planning poker"
        ]
      },
      {
        "module_number": 6,
        "module_name": "Scrum Master Skills & Facilitation",
        "module_duration": "Week 6",
        "topics": [
          "Servant leadership",
          "Coaching Agile teams",
          "Conflict resolution techniques"
        ]
      },
      {
        "module_number": 7,
        "module_name": "Agile Metrics & Reporting",
        "module_duration": "Week 7",
        "topics": [
          "Burndown & burnup charts",
          "Velocity tracking",
          "Sprint metrics"
        ]
      },
      {
        "module_number": 8,
        "module_name": "Scaling Scrum & Agile Frameworks",
        "module_duration": "Week 8",
        "topics": [
          "Scrum of Scrums",
          "SAFe overview",
          "LeSS & Nexus"
        ]
      },
      {
        "module_number": 9,
        "module_name": "Tools & Real-World Scrum Implementation",
        "module_duration": "Week 8",
        "topics": [
          "JIRA boards",
          "Sprint tracking",
          "Agile dashboards & reports"
        ]
      },
      {
        "module_number": 10,
        "module_name": "Capstone Project",
        "module_duration": "Week 8",
        "topics": [
          "End-to-end Scrum implementation",
          "Sprint planning and execution",
          "Final Sprint Review"
        ]
      }
    ]
  },
  "course_metrics": {
    "avg_rating": 4.9,
    "total_reviews": 1150,
    "total_students_enrolled": 9200
  },
  "faqs": [
    {
      "faq_id": 1,
      "question": "What is a Scrum Master course?",
      "answer": "A Scrum Master course teaches Agile Scrum principles, roles, ceremonies, artifacts, and real-world Scrum implementation to help professionals lead Agile teams effectively."
    },
    {
      "faq_id": 2,
      "question": "Who should take a Scrum Master course?",
      "answer": "This course is ideal for project managers, business analysts, developers, QA professionals, and anyone transitioning into Agile or Scrum roles."
    },
    {
      "faq_id": 3,
      "question": "Do I need prior Agile experience to become a Scrum Master?",
      "answer": "No. This course starts from Agile fundamentals and gradually covers advanced Scrum practices."
    },
    {
      "faq_id": 4,
      "question": "Is this course suitable for Scrum Master certification preparation?",
      "answer": "Yes. The course prepares learners for certifications such as CSM®, PSM®, and SAFe® Scrum Master."
    },
    {
      "faq_id": 5,
      "question": "What tools are used in Scrum Master training?",
      "answer": "You’ll work with tools like JIRA, Agile boards, and reporting dashboards commonly used in Scrum teams."
    },
    {
      "faq_id": 6,
      "question": "What skills does a Scrum Master need?",
      "answer": "Key skills include facilitation, servant leadership, Agile coaching, conflict resolution, and Scrum process management."
    },
    {
      "faq_id": 7,
      "question": "What is the role of a Scrum Master in Agile projects?",
      "answer": "A Scrum Master facilitates Scrum ceremonies, removes impediments, supports teams, and ensures Agile principles are followed."
    },
    {
      "faq_id": 8,
      "question": "Can non-technical professionals become Scrum Masters?",
      "answer": "Yes. Scrum Masters focus on process and team facilitation, not coding."
    },
    {
      "faq_id": 9,
      "question": "How long does it take to learn Scrum Master skills?",
      "answer": "This course is designed to be completed in about 8 weeks with hands-on practice."
    },
    {
      "faq_id": 10,
      "question": "What career opportunities are available after Scrum Master training?",
      "answer": "Common roles include Scrum Master, Agile Coach (Junior), Delivery Manager, and Agile Project Coordinator."
    }
  ],
  "target_audience": [
    "Aspiring Scrum Masters",
    "Project Managers",
    "QA/Developers",
    "IT Professionals"
  ],
  "metadata": {
    "course_date": "2024-06-01",
    "latest_update_date": "2024-06-01"
  },
  "seo_metadata": {
    "meta_title": "Scrum Master Course | Agile Leadership Training | Proximsoft",
    "meta_description": "Master the Scrum framework and Agile leadership. Learn to facilitate ceremonies, manage backlogs in JIRA, and prepare for CSM/PSM certifications.",
    "meta_url": "/courses/management/scrum-master-course"
  }
},

]