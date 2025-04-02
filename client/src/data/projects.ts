export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Predictive Analytics Dashboard",
    description:
      "A machine learning model that predicts customer behavior patterns for e-commerce platforms.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813170d3",
    category: "ML",
    technologies: ["TensorFlow", "Python", "Next.js", "React"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Sentiment Analysis API",
    description:
      "Natural language processing tool that analyzes customer feedback and social media mentions.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    category: "NLP",
    technologies: ["BERT", "PyTorch", "FastAPI", "React"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Object Detection System",
    description:
      "Real-time object detection system for security applications with browser-based monitoring.",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef",
    category: "CV",
    technologies: ["YOLOv5", "OpenCV", "Next.js", "WebSockets"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
];
