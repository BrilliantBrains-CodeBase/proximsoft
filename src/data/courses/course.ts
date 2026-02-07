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
    "meta_title": "Agentic AI Course: Build Autonomous AI Agents with LLMs & RAG",
    "meta_description": "Master Agentic AI engineering. Learn to build autonomous agents using LangChain, LlamaIndex, and Python. Designed for software and AI engineers.",
    "meta_url": "/courses/artificial-intelligence/agentic-ai-course"
  }
}
]