export interface ProficiencySkill {
  name: string;
  level: number;
}

export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const skills = {
  ai: [
    "Neural Networks",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Reinforcement Learning",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "scikit-learn",
  ],
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "JavaScript",
    "HTML5/CSS3",
  ],
  backend: [
    "Python",
    "Node.js",
    "FastAPI",
    "Docker",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
  ],
  proficiency: [
    {
      name: "Machine Learning & Neural Networks",
      level: 95,
    },
    {
      name: "Natural Language Processing",
      level: 90,
    },
    {
      name: "Computer Vision",
      level: 85,
    },
    {
      name: "React & Next.js",
      level: 92,
    },
    {
      name: "Backend Development",
      level: 88,
    },
    {
      name: "Cloud Infrastructure (AWS, GCP)",
      level: 80,
    },
  ],
};

export const timelineItems: TimelineItem[] = [
  {
    title: "Senior AI Developer",
    company: "TechNova Labs",
    period: "2022 - Present",
    description: "Leading AI initiatives and building scalable machine learning solutions.",
  },
  {
    title: "Machine Learning Engineer",
    company: "DataVision AI",
    period: "2020 - 2022",
    description: "Developed computer vision models and NLP systems for enterprise clients.",
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Inc.",
    period: "2018 - 2020",
    description: "Built responsive web applications using React and modern frontend technologies.",
  },
];
