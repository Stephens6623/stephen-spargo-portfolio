import React from 'react';
import { motion } from 'framer-motion';
import launchlylogo from '../assets/images/launchly-logo.png';
import reactlogo from '../assets/images/react.js-logo.png';
import jeopardylogo from '../assets/images/jeopardy-logo.jpg';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Launchly',
      description: 'Launchly is a full-stack crowdfunding platform designed to help new software developers share and fund their app ideas.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'CSS', 'Reactstrap'],
      image: launchlylogo,
      github: 'https://github.com/zgoodman27/Capstone-Launchly.io',
      demo: '#'
    },
    {
      id: 2,
      title: 'Jeopardy Game',
      description: 'A web-based version of the classic Jeopardy game, built with JavaScript and HTML/CSS.',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      image: jeopardylogo,
      github: 'https://github.com/uprighted-learners/unit-1-project-jeopardy-Stephens6623',
      demo: '#'
    },
    {
      id: 3,
      title: 'Full Stack React Chat App',
      description: 'A real-time chat application built with React, Node.js, and Express.js, featuring user authentication and live messaging.',
      technologies: ['JavaScript', 'React', 'Node.js', 'Express.js'],
      image: reactlogo,
      github: 'https://github.com/zgoodman27/units-6-7-project-react-chat-backend',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">My Projects</h1>
          <p className="text-xl text-gray-300 mb-12">
            Here are some of the projects I've worked on, including my capstone project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`${project.title} Logo`}
                    className="h-full object-contain"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="text-green-400 hover:text-green-300 font-medium"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;