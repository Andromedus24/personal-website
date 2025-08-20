import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Globe, Smartphone, Brain, Hand } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Finlo - AI CFO & Finance OS",
      description: "AI CFO & finance OS that auto-logs expenses, balances books, flags anomalies, and forecasts cash flow—freeing SMBs from spreadsheets and pricey consultants. Forked for experimentation and customization.",
      image: "/img/port1.jpg",
      technologies: ["TypeScript", "Next.js", "AI/ML", "Finance", "Automation", "Full-Stack"],
      github: "https://github.com/ronakprabhu/finlo",
      demo: null,
      category: "AI/ML"
    },
    {
      title: "House Price Predictor",
      description: "Linear Regression model predicting California housing prices with standard preprocessing, training, and evaluation. Built with scikit-learn, NumPy, and Pandas.",
      image: "/img/port2.jpg",
      technologies: ["Python", "Machine Learning", "scikit-learn", "NumPy", "Pandas", "Jupyter"],
      github: "https://github.com/ronakprabhu/House-Price-Predictor",
      demo: null,
      category: "AI/ML"
    },
    {
      title: "AI Call Assistant",
      description: "Rule/intent-based assistant with simple NLU and training script. Built for handling customer service calls and inquiries with natural language processing.",
      image: "/img/port3.jpg",
      technologies: ["Python", "NLP", "NLTK", "Intent Recognition", "Chatbot", "AI"],
      github: "https://github.com/ronakprabhu/AI-Call-Assistant",
      demo: null,
      category: "AI/ML"
    },
    {
      title: "Hand Controlled Object",
      description: "Computer vision prototype with camera capture and 3D object loading utilities. Demonstrates hand gesture recognition and 3D object manipulation.",
      image: "/img/port4.jpg",
      technologies: ["Python", "Computer Vision", "OpenCV", "3D Graphics", "Gesture Recognition"],
      github: "https://github.com/ronakprabhu/Hand-Controlled-Object",
      demo: null,
      category: "Computer Vision"
    },
    {
      title: "Nuero Wheelchair",
      description: "Neuro/gesture-driven wheelchair controller prototype. Combines Python utilities with Arduino for brain-computer interface applications.",
      image: "/img/port5.jpg",
      technologies: ["Python", "C++", "Arduino", "Brain-Computer Interface", "Hardware", "Embedded Systems"],
      github: "https://github.com/ronakprabhu/Nuero-Wheelchair",
      demo: null,
      category: "Hardware/IoT"
    },
    {
      title: "Finance Analysis API",
      description: "Unified financial analysis + ledger API with AI-powered insights using OpenRouter. Designed for Vercel deployment with CI/CD and real-time validation.",
      image: "/img/port6.jpg",
      technologies: ["TypeScript", "Next.js", "AI", "Finance", "API", "Vercel", "OpenRouter"],
      github: "https://github.com/ronakprabhu/Finance-Analysis",
      demo: null,
      category: "Web Development"
    },
    {
      title: "Finance Cluster",
      description: "React webapp scaffolded with Create React App, intended to connect to a Visual Learning AI model to create clusters from financial data.",
      image: "/img/port1.jpg",
      technologies: ["React", "JavaScript", "AI/ML", "Data Visualization", "Financial Analysis"],
      github: "https://github.com/ronakprabhu/Finance-Cluster",
      demo: null,
      category: "Web Development"
    },
    {
      title: "Firebase Android Quiz App",
      description: "Android quiz app using Firebase for auth, realtime-database, storage, and notifications. Features timer-bound tests, detailed solutions, and admin features.",
      image: "/img/port2.jpg",
      technologies: ["Java", "Android", "Firebase", "Realtime Database", "Push Notifications", "Mobile"],
      github: "https://github.com/ronakprabhu/firebase-android-quiz-app",
      demo: null,
      category: "Mobile Development"
    },
    {
      title: "Financial Model Evaluator",
      description: "JavaScript front-end base intended to connect to a distilled/trained AI model for financial model evaluation. Includes sample data and testing framework.",
      image: "/img/port3.jpg",
      technologies: ["JavaScript", "HTML", "CSS", "AI/ML", "Financial Modeling", "Testing"],
      github: "https://github.com/ronakprabhu/Financial-Model-Eval",
      demo: null,
      category: "Web Development"
    },
    {
      title: "AgentHacks Clone",
      description: "Minimal clone project bootstrapped for experimentation. Built for testing and developing AI agent capabilities and workflows.",
      image: "/img/port4.jpg",
      technologies: ["JavaScript", "React", "AI Agents", "Experimentation", "Prototyping"],
      github: "https://github.com/ronakprabhu/AgentHacks_Clone",
      demo: null,
      category: "AI/ML"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development":
        return Globe;
      case "Mobile Development":
        return Smartphone;
      case "Hardware/IoT":
        return Code;
      case "AI/ML":
        return Brain;
      case "Computer Vision":
        return Hand;
      case "Developer Tools":
        return Code;
      case "Climate Tech":
        return Globe;
      case "Robotics":
        return Code;
      case "Research":
        return Brain;
      default:
        return Code;
    }
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative glass-effect rounded-xl overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-primary-500/20 z-10"></div>
                    <div className="absolute inset-0 bg-dark-900/50 z-20 flex items-center justify-center">
                      <CategoryIcon size={48} className="text-accent-500" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-accent-500 font-mono">{project.category}</span>
                      <div className="flex space-x-2">
                        <motion.a
                          href="https://github.com/ronakprabhu"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-dark-700 hover:bg-accent-500 rounded-full transition-colors duration-200"
                          title="View GitHub Profile"
                        >
                          <Github size={16} />
                        </motion.a>
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-dark-700 hover:bg-accent-500 rounded-full transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent-500 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-dark-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent-500/10 text-accent-500 text-xs rounded-full border border-accent-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              );
            })}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/ronakprabhu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-full font-semibold transition-all duration-300"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;