import { motion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Best Innovation Award 2023",
      organization: "Tech Excellence Awards",
      description: "Recognized for developing an AI-powered code review system that improved team productivity by 35%."
    },
    {
      icon: Medal,
      title: "Published Research Paper",
      organization: "International Journal of Computer Science",
      description: "Research on 'Optimizing Microservices Architecture for Scale' published in a peer-reviewed journal."
    },
    {
      icon: Award,
      title: "Open Source Contributor",
      organization: "Various Projects",
      description: "Active contributor to multiple open-source projects with over 500+ contributions on GitHub."
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
          <h1 className="text-4xl font-bold text-white mb-8">Achievements</h1>

          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-500/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-indigo-400 mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
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
            <h2 className="text-2xl font-bold text-white mb-4">Certifications</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <div className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></div>
                AWS Certified Solutions Architect
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></div>
                Google Cloud Professional Developer
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></div>
                Microsoft Certified: Azure Developer Associate
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}