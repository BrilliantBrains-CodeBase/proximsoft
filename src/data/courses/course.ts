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
}
]