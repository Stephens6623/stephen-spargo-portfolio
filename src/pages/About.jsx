import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h1>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Welcome! I'm Stephen, I'm a creative problem-solver who spent over a decade managing professional kitchens before transitioning into software development. That background taught me how to stay calm under pressure, lead teams, and turn complex problems into clear, efficient systems — all skills that translate beautifully into code.
            </p>
            
            <p>
              I recently completed a 24 week full-stack software development program where I learned MERN-stack development, working with technologies like React, Node.js, Express, and MongoDB. This intensive experience solidified my passion for building efficient and scalable web applications.
            </p>
            
            <p>
              When I'm not coding, you can find me spending time with my fiance and preparing ourselves for parenthood, cooking, and enjoying the outdoors. I believe in continuous learning and am always excited to take on new challenges.
            </p>
            
            <p>
                Currently learning: TypeScript, Tailwind CSS, SQL<br/>
                Location: Canton, GA <br/>
                Available for: Junior Developer roles or collaborative projects
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'JavaScript', 'Node.js', 'Express.js', 'Git', 'CSS', 'HTML', 'MongoDB'].map((skill) => (
                <div key={skill} className="bg-gray-800 px-4 py-2 rounded-lg text-center text-gray-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;