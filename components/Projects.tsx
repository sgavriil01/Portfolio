"use client"

import { ExternalLink, Github, Smartphone, TrendingUp } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Digital Wardrobe",
      description:
        "AI-powered wardrobe planner with outfit logging, smart suggestions, and image uploads. Features intelligent outfit recommendations based on weather, occasion, and personal style preferences.",
      technologies: ["Supabase", "Spring Boot", "Java", "JavaScript", "React Native"],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      features: ["AI Outfit Suggestions", "Image Upload", "Weather Integration", "Style Analytics"],
    },
    {
      title: "AI-Powered Finance Tracker",
      description:
        "Intelligent transaction classification and analytics dashboard for comprehensive financial management. Automatically categorizes expenses and provides insights for better financial decisions.",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "JavaScript", "HTML", "CSS"],
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-green-500 to-blue-500",
      githubUrl: "https://github.com/SpyrosGavriil/Finance-Tracker",
      features: ["AI Classification", "Analytics Dashboard", "Budget Tracking", "Expense Insights"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology with practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div
                className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-white opacity-20 absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 transform rotate-12">{project.icon}</div>
                </div>
                <div className="text-white z-10">{project.icon}</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
