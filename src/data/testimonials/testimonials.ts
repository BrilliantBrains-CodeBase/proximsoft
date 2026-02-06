export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  linkText: string;
  linkUrl: string;
}

export const testimonials: TestimonialData[] = [
  {
    id: "1",
    quote: "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow's 2023 Developer survey.",
    author: "Stack Overflow",
    role: "Industry Report 2023",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=stack",
    linkText: "View Web Development courses",
    linkUrl: "/courses/software-development"
  },
  {
    id: "2",
    quote: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life. The depth of the iOS content is unmatched.",
    author: "Alvin Lim",
    role: "Technical Co-Founder, CTO at Dimensional",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alvin",
    linkText: "View this iOS & Swift course",
    linkUrl: "/courses/ios-development"
  },
  {
    id: "3",
    quote: "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
    author: "William A. Wachlin",
    role: "Partner Account Manager at Amazon Web Services",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=William",
    linkText: "View this AWS course",
    linkUrl: "/courses/cloud-computing"
  },
  {
    id: "4",
    quote: "With Udemy Business, employees were able to marry the two together: technology and consultant soft skills... to help drive their careers forward.",
    author: "Ian Stevens",
    role: "Head of Capability Development, North America at Publicis Sapient",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ian",
    linkText: "Read full story",
    linkUrl: "/stories/publicis-sapient"
  },
  {
    id: "5",
    quote: "The SQL and Data Analytics bootcamp helped our entire marketing team become data-driven. We no longer wait for engineering to run our reports.",
    author: "Sarah Jenkins",
    role: "Director of Marketing at TechFlow",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    linkText: "Explore Data Analytics",
    linkUrl: "/courses/data-analytics"
  },
  {
    id: "6",
    quote: "The Artificial Intelligence track allowed me to transition from a standard software engineer to a Machine Learning specialist in six months.",
    author: "Marcus Chen",
    role: "AI Researcher at DeepLogic",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    linkText: "View AI Courses",
    linkUrl: "/courses/artificial-intelligence"
  },
  {
    id: "7",
    quote: "I used the Management courses to prepare for my PMP certification. The real-world case studies were much better than standard textbook learning.",
    author: "Elena Rodriguez",
    role: "Senior Project Manager at BuildRight",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    linkText: "See Management courses",
    linkUrl: "/courses/management"
  },
  {
    id: "8",
    quote: "The Salesforce training was essential for our sales ops team. We reduced our lead conversion time by 40% after implementing the new workflows.",
    author: "David Thompson",
    role: "Operations Manager at CloudScale",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    linkText: "View Salesforce training",
    linkUrl: "/courses/salesforce"
  },
  {
    id: "9",
    quote: "Switching to SAP was daunting until I found these modules. The hands-on practice labs gave me the confidence to handle our enterprise migration.",
    author: "Priya Kapoor",
    role: "ERP Specialist at Global Logistics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    linkText: "Explore SAP modules",
    linkUrl: "/courses/sap"
  },
  {
    id: "10",
    quote: "The Cybersecurity certification path is rigorous but worth it. It covers everything from network security to ethical hacking in great detail.",
    author: "James Wilson",
    role: "Security Analyst at SecureNet",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    linkText: "View Security courses",
    linkUrl: "/courses/cybersecurity"
  }
];