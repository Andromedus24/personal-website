import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Globe, Smartphone, Brain, Radio, Hand } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Finlo - AI CFO & Finance OS",
      description: "Built an AI CFO & finance OS that auto-logs expenses, balances books, flags anomalies, and forecasts cash flow—freeing SMBs from spreadsheets and pricey consultants. Winner of AgentHacks 2025 with comprehensive financial automation capabilities.",
      image: "/img/port1.jpg",
      technologies: ["Python", "AI/ML", "Finance", "Automation", "Full-Stack", "React", "Node.js"],
      github: "https://github.com/ronakprabhu/finlo",
      demo: "https://devpost.com/software/finlo-finance-flow",
      category: "AI/ML"
    },
    {
      title: "Climate Waste-Mitigation Software",
      description: "Developed climate waste-mitigation software solutions as Stanford Climate Leaders Fellow. Built tools to address textile waste and climate-destructive laws, contributing to environmental sustainability research and policy.",
      image: "/img/port2.jpg",
      technologies: ["Python", "Climate Tech", "Data Analysis", "Policy Research", "Software Development"],
      github: "https://github.com/ronakprabhu/climate-waste-mitigation",
      demo: null,
      category: "Climate Tech"
    },
    {
      title: "Multimodal AI Research Platform",
      description: "Completed multimodal AI research under CMU/MIT/UPenn graduate mentors at Safe AI Lab. Developed AI systems that can process and understand multiple types of data, contributing to cutting-edge AI research.",
      image: "/img/port3.jpg",
      technologies: ["Python", "TensorFlow", "Multimodal AI", "Machine Learning", "Research", "Deep Learning"],
      github: "https://github.com/ronakprabhu/multimodal-ai-research",
      demo: "https://safeai-lab.github.io/",
      category: "AI/ML"
    },
    {
      title: "Autonomous Race Car (F1TENTH)",
      description: "Built an autonomous race car as part of UPenn's F1TENTH program. Developed autonomous navigation and control systems for racing applications using cutting-edge robotics and AI technologies.",
      image: "/img/port4.jpg",
      technologies: ["Python", "Robotics", "Autonomous Systems", "Control Systems", "Hardware Integration", "AI"],
      github: "https://github.com/ronakprabhu/f1tenth-autonomous",
      demo: null,
      category: "Robotics"
    },
    {
      title: "Exoplanet Detection System",
      description: "Collaborated with NASA SEES program to detect and characterize exoplanet transits using photometry and Python-based computing. Contributed to NASA's exoplanet research and discovery efforts.",
      image: "/img/port5.jpg",
      technologies: ["Python", "Astronomy", "Data Analysis", "Photometry", "Exoplanet Research", "NASA"],
      github: "https://github.com/ronakprabhu/exoplanet-detection",
      demo: null,
      category: "Research"
    },
    {
      title: "AI Governance Research Platform",
      description: "Published research and opinion pieces as UN IGF PNAI student representative. Contributed to international discussions on AI policy and governance, advocating for responsible AI development.",
      image: "/img/port6.jpg",
      technologies: ["Research", "AI Governance", "Policy Analysis", "International Relations", "Academic Writing"],
      github: "https://github.com/ronakprabhu/ai-governance-research",
      demo: null,
      category: "Research"
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
      case "Radio Astronomy":
        return Radio;
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
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-dark-700 hover:bg-accent-500 rounded-full transition-colors duration-200"
                          >
                            <Github size={16} />
                          </motion.a>
                        )}
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