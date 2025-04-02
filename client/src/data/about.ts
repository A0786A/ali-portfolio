export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export const biography: string[] = [
  "With over 6 years of experience in AI and machine learning, I specialize in developing intelligent solutions that solve real-world problems. My background combines strong theoretical understanding with practical implementation skills.",
  "I completed my Master's in Computer Science with a focus on Artificial Intelligence from Stanford University, where I researched neural network architectures for natural language understanding. This academic foundation, combined with industry experience, allows me to bridge the gap between cutting-edge research and practical applications.",
  "My expertise includes developing machine learning models, implementing neural networks, and creating end-to-end AI systems integrated with modern web technologies. I'm particularly passionate about making AI accessible through intuitive user interfaces and clear data visualization.",
];

export const education: EducationItem[] = [
  {
    institution: "Stanford University",
    degree: "M.S. Computer Science, AI Specialization",
    period: "2016 - 2018",
  },
  {
    institution: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    period: "2012 - 2016",
  },
];

export const certifications: CertificationItem[] = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2021",
  },
  {
    name: "AWS Certified Machine Learning",
    issuer: "Amazon Web Services",
    year: "2020",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    year: "2019",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Machine Learning Model Development",
    description: "Building custom ML models for specific business needs and use cases.",
    icon: "monitor",
  },
  {
    title: "AI-Powered Web Applications",
    description: "Integrating AI models with modern web interfaces for seamless user experience.",
    icon: "code",
  },
  {
    title: "Natural Language Processing",
    description: "Implementing NLP solutions for chatbots, sentiment analysis, and text processing.",
    icon: "monitor",
  },
  {
    title: "Data Analysis & Visualization",
    description: "Transforming complex data into actionable insights with clear visualizations.",
    icon: "code",
  },
];
