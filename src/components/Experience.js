import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Venture Scout",
      company: "LvlUp Ventures",
      duration: "June 2025 - Present",
      location: "Remote",
      description: [
        "Sourced 100+ deals for LvlUp Ventures VC funding and investment opportunities",
        "Analyzed startup viability, market potential, and investment readiness",
        "Built relationships with founders and entrepreneurs in the tech ecosystem",
        "Contributed to investment decision-making processes and due diligence"
      ],
      technologies: ["Deal Sourcing", "Investment Analysis", "Startup Evaluation", "VC Operations"]
    },
    {
      title: "Growth (Clipping & Content)",
      company: "Cluely",
      duration: "April 2025 - Present",
      location: "Remote",
      description: [
        "Create and publish engaging clips and content for the platform",
        "Develop content strategies to drive user engagement and growth",
        "Collaborate with the team to optimize content performance",
        "Examples available in Google Drive folder for reference"
      ],
      technologies: ["Content Creation", "Growth Marketing", "Video Editing", "Social Media"]
    },
    {
      title: "Figma Student Creator",
      company: "Figma",
      duration: "July 2025 - Present",
      location: "Remote",
      description: [
        "Attend Figma-sponsored events and participate in the creator community",
        "Produce design content and tutorials for the Figma ecosystem",
        "Collaborate with other creators and designers globally",
        "Contribute to the growth of the Figma design community"
      ],
      technologies: ["Figma", "Design", "Content Creation", "Community Building"]
    },
    {
      title: "Growth & Management",
      company: "Ultra",
      duration: "May 2025 - August 2025",
      location: "Remote",
      description: [
        "Supported growth targets and helped build the Ultra Community",
        "Managed the Ultra Club Initiative and community engagement programs",
        "Developed strategies to increase user acquisition and retention",
        "Collaborated with cross-functional teams to optimize growth metrics"
      ],
      technologies: ["Growth Marketing", "Community Management", "User Acquisition", "Strategy"]
    },
    {
      title: "Climate Leaders Fellow",
      company: "Stanford Deliberative Democracy Lab",
      duration: "February 2025 - August 2025",
      location: "Stanford, CA",
      description: [
        "Selected from 3,000+ applicants across 28+ countries for climate waste-mitigation software solutions",
        "Authored research on climate-destructive laws and their environmental impact",
        "Presented findings on textile waste and its contribution to climate change",
        "Developed software tools to address climate waste challenges"
      ],
      technologies: ["Climate Research", "Software Development", "Data Analysis", "Policy Research"]
    },
    {
      title: "SWE Resident",
      company: "Headstarter",
      duration: "March 2025 - July 2025",
      location: "Remote",
      description: [
        "Built multiple full-stack applications focused on AI and Finance",
        "Mentored by professionals from Google, Two Sigma, Stanford, Citadel, Tesla, and more",
        "Developed technical skills in modern web development and AI integration",
        "Collaborated with peers on innovative projects and solutions"
      ],
      technologies: ["Full-Stack Development", "AI/ML", "Finance", "React", "Python", "Node.js"]
    },
    {
      title: "AI Research Fellow & Stanford DDL Project Lead",
      company: "Perrin Research Institution",
      duration: "December 2024 - July 2025",
      location: "Remote",
      description: [
        "Project Lead for Stanford DDL paper on climate initiatives and textile pollution",
        "Researched AI technology and impacts for Harvard Ventures paper",
        "Collaborated with Stanford Climate Fellowship on research initiatives",
        "Published research findings in academic and industry publications"
      ],
      technologies: ["AI Research", "Climate Science", "Research Methods", "Academic Writing"]
    },
    {
      title: "Director of Sales & Marketing",
      company: "VenturEd",
      duration: "December 2024 - June 2025",
      location: "Remote",
      description: [
        "Conducted comprehensive marketing research and analyzed trends in the student ecosystem",
        "Developed marketing strategies to increase brand awareness and engagement",
        "Managed sales operations and customer relationship management",
        "Analyzed market data to inform business decisions and growth strategies"
      ],
      technologies: ["Marketing Research", "Sales Management", "Market Analysis", "Strategy"]
    },
    {
      title: "Grey Swan AI Arena Global Champion",
      company: "Gray Swan AI",
      duration: "March 2025 - May 2025",
      location: "Global Competition",
      description: [
        "Global Champion in Agent Red-Teaming Cybersecurity Challenge",
        "Successfully broke and pen-tested models modeled after ChatGPT, Gemini, and Claude",
        "Winner from a $171,800 prize pool sponsored by UK AISI, OpenAI, Anthropic, Google DeepMind",
        "Demonstrated advanced AI security testing and red-teaming capabilities"
      ],
      technologies: ["AI Security", "Red-Teaming", "Cybersecurity", "Penetration Testing"]
    },
    {
      title: "Discover Curator",
      company: "Perplexity",
      duration: "October 2024 - April 2025",
      location: "Remote",
      description: [
        "Accumulated 20k+ total views across pieces on niche topics and subjects",
        "Curated and created content for the Perplexity platform",
        "Developed expertise in content creation and audience engagement",
        "Contributed to platform growth through quality content curation"
      ],
      technologies: ["Content Creation", "Content Curation", "SEO", "Audience Engagement"]
    },
    {
      title: "Student Climate Ambassador & Intern",
      company: "Acterra",
      duration: "July 2024 - April 2025",
      location: "San Francisco Bay Area",
      description: [
        "Lobbied for congressional change and promoted sustainability initiatives",
        "Engaged with policymakers to advocate for climate action",
        "Organized community events and educational programs on sustainability",
        "Contributed to local and national climate policy discussions"
      ],
      technologies: ["Policy Advocacy", "Community Organizing", "Sustainability", "Public Speaking"]
    },
    {
      title: "State & Local Champion (1st Place FTDM) & Finance Lead",
      company: "DECA Inc.",
      duration: "August 2022 - April 2025",
      location: "California",
      description: [
        "1st Place SVCDC and 1st Place SCDC in Financial Team Decision Making",
        "Served as Finance Lead, managing team financial strategies and decisions",
        "Competed at state and local levels in business and finance competitions",
        "Developed strong analytical and decision-making skills in financial scenarios"
      ],
      technologies: ["Financial Analysis", "Team Leadership", "Competition Strategy", "Business Acumen"]
    },
    {
      title: "Multimodal AI Research",
      company: "Safe AI Lab (CMU)",
      duration: "February 2024 - March 2025",
      location: "Carnegie Mellon University",
      description: [
        "Completed multimodal AI research under CMU/MIT/UPenn graduate mentors",
        "Developed AI systems that can process and understand multiple types of data",
        "Contributed to cutting-edge research in artificial intelligence and machine learning",
        "Collaborated with researchers from top institutions on innovative AI projects"
      ],
      technologies: ["Multimodal AI", "Machine Learning", "Research", "Python", "TensorFlow"]
    },
    {
      title: "Research Intern",
      company: "NASA (SEES Program)",
      duration: "May 2024 - August 2024",
      location: "NASA/UT Austin",
      description: [
        "Selected for SEES (UT Austin CSR × NASA) program",
        "Collaborated with Subject Matter Experts and peers to detect and characterize exoplanet transits",
        "Used photometry and Python-based computing for astronomical data analysis",
        "Contributed to NASA's exoplanet research and discovery efforts"
      ],
      technologies: ["Astronomy", "Python", "Data Analysis", "Photometry", "Exoplanet Research"]
    },
    {
      title: "Autonomous Systems",
      company: "Penn Engineering AI (xLab, F1TENTH)",
      duration: "March 2024 - August 2024",
      location: "University of Pennsylvania",
      description: [
        "Built an autonomous race car as part of UPenn's F1TENTH program",
        "Developed autonomous navigation and control systems for racing applications",
        "Worked with cutting-edge robotics and AI technologies",
        "Contributed to the advancement of autonomous vehicle technology"
      ],
      technologies: ["Autonomous Systems", "Robotics", "AI", "Control Systems", "Hardware Integration"]
    },
    {
      title: "AI Governance Student Representative",
      company: "UN IGF PNAI",
      duration: "March 2024 - June 2024",
      location: "United Nations",
      description: [
        "Published a paper and opinion piece as a student AI governance representative",
        "Contributed to international discussions on AI policy and governance",
        "Represented student perspectives in global AI governance forums",
        "Advocated for responsible AI development and deployment"
      ],
      technologies: ["AI Governance", "Policy Analysis", "International Relations", "Research"]
    },
    {
      title: "AI Policy Fellow",
      company: "Berkeley AI Safety Student Initiative",
      duration: "January 2024 - May 2024",
      location: "UC Berkeley",
      description: [
        "Studied AI, AI Policy, and AI Safety under Berkeley graduate and undergraduate mentors",
        "Researched the implications of AI development on society and safety",
        "Contributed to discussions on responsible AI development and deployment",
        "Developed expertise in AI safety and policy considerations"
      ],
      technologies: ["AI Safety", "Policy Research", "Ethics", "Risk Assessment"]
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

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="gradient-text">Experience</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-transparent transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full transform -translate-x-1/2 mt-6 z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`glass-effect p-6 rounded-xl ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } flex-1`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-accent-500 mb-1">{exp.title}</h3>
                        <p className="text-lg font-semibold mb-2">{exp.company}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-dark-300">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-dark-300 flex items-start">
                          <span className="text-accent-500 mr-2 flex-shrink-0 mt-0.5">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent-500/10 text-accent-500 text-sm rounded-full border border-accent-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;