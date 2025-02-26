import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Hashigo Technologies",
      position: "Software Intern",
      period: "2 months",
      description: "Worked on development of microservices architecture, used React.js and postgreSQL.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      company: "Forum Of Data Science Engineers",
      position: "Strategic Analyst",
      period: "2023-Present",
      description: "Management and Leadership role in the organization.",
      technologies: ["React", "Python", "firebase", "PowerBI"]
    },
    {
      company: "StartUp Inc",
      position: "Junior Developer",
      period: "2018 - 2019",
      description: "Worked on frontend development and participated in agile development processes.",
      technologies: ["JavaScript", "HTML/CSS"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-6 w-6 text-indigo-500" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.position}
                      </h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}