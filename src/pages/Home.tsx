import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Code, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Resume from '../assets/resume.pdf';
import Akeel from '../assets/Akeel.png';

export default function Home() {
  const skills = [
    { icon: Code, label: "Frontend Development", color: "from-blue-500 to-cyan-500" },
    { icon: Database, label: "Backend Development", color: "from-purple-500 to-pink-500" },
    { icon: Globe, label: "Cloud Services", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        <img
          src={Akeel}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-indigo-500 shadow-lg shadow-indigo-500/20"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Akeel Ahamed R S
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          Computer Science Engineer
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        Prefinal-year CS student passionate about app development, 
        analytics, and problem-solving. Eager to collaborate, innovate, 
        and impact real-world challenges.
        </p>
        
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:john@example.com"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors"
          >
            <span>View My Work</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors"
          >
            <span>View Resume</span>
            <Download className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
            >
              <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                <skill.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}