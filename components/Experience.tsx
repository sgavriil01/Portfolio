"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "CYENS Centre of Excellence",
      location: "Cyprus",
      period: "Jun 2025 – Present",
      description:
        "R&D on generative AI, contributing to a multimodal storytelling platform using LLMs, TTS, and image generation.",
      highlights: [
        "Developed multimodal AI storytelling platform",
        "Implemented LLM integration for content generation",
        "Worked with TTS and image generation technologies",
        "Contributed to cutting-edge AI research",
      ],
      current: true,
    },
    {
      title: "Operations Assistant",
      company: "Corina Snacks Ltd.",
      location: "Cyprus",
      period: "Jun 2024 – Aug 2024",
      description: "Managed inventory operations and optimized internal processes.",
      highlights: [
        "Streamlined inventory management systems",
        "Optimized operational workflows",
        "Improved process efficiency",
        "Collaborated with cross-functional teams",
      ],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building expertise through hands-on experience in software development and AI research
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="relative flex items-start mb-12 last:mb-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  experience.current
                    ? "bg-blue-500 border-blue-200 dark:border-blue-800"
                    : "bg-gray-300 dark:bg-gray-600 border-gray-100 dark:border-gray-700"
                }`}
              ></div>

              {/* Content Card */}
              <div className="ml-16 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {experience.company}
                    </div>
                  </div>
                  {experience.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-2 sm:mt-0">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 text-sm mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experience.location}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
