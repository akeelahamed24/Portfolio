import { motion } from 'framer-motion';
import { Code, Database, Globe, BookOpen, Users, Coffee } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: "Frontend Development",
      icon: Globe,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend Development",
      icon: Database,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Other Skills",
      icon: Code,
      technologies: ["Git", "Docker", "AWS", "CI/CD"]
    }
  ];

  const stats = [
    { icon: Coffee, value: "5+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Clients Worldwide" },
    { icon: BookOpen, value: "30+", label: "Projects Completed" }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg p-6 text-center"
                >
                  <Icon className="h-8 w-8 text-indigo-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a passionate Computer Science Engineer with over 5 years of experience
              in full-stack development. I specialize in building scalable web applications
              and solving complex technical challenges. My journey in tech started during
              my university years, and I've been continuously learning and growing ever since.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices.
              My experience includes working with diverse teams, mentoring junior developers,
              and delivering high-impact projects for clients worldwide.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-indigo-500 mr-2" />
                    <h3 className="text-xl font-semibold text-white">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.technologies.map((tech) => (
                      <li key={tech} className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></div>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Master of Science in Computer Science</h3>
                <p className="text-indigo-400">Stanford University</p>
                <p className="text-gray-400">2016 - 2018</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Bachelor of Engineering in Computer Science</h3>
                <p className="text-indigo-400">MIT</p>
                <p className="text-gray-400">2012 - 2016</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}