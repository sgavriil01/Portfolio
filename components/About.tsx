"use client"

import { useEffect, useState } from "react"
import { MapPin, Download } from "lucide-react"

const About = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText =
    "I'm a Computer Science undergraduate at the University of Cyprus, passionate about Software Engineering and AI/ML."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <img
                src="/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
          Spyros Gavriil
        </h1>

        <div className="flex items-center justify-center mb-6 text-gray-600 dark:text-gray-400">
          <MapPin className="w-5 h-5 mr-2" />
          <span className="text-lg">Limassol, Cyprus</span>
        </div>

        {/* Typing Animation */}
        <div className="mb-8">
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-4 min-h-[3rem]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Currently interning at CYENS Centre of Excellence, contributing to generative AI research.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8 animate-fade-in-up">
          <p className="text-lg text-gray-700 dark:text-gray-300 italic">
            "Bridging the gap between innovative technology and practical solutions through continuous learning and
            creative problem-solving."
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
          <a
            href="/Resume.pdf"
            download
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
