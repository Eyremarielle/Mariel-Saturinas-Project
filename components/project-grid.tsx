"use client"

import { useState, useEffect } from "react"
import { ProjectCard } from "@/components/project-card"

// Sample project data - replace with your actual projects
const PROJECTS = [
  {
    id: 1,
    title: "House Renovation Project",
    description:
      "We turn your vision into reality with professional home renovation services.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
    demoUrl: "https://eyremarielle.github.io/house-Renovation/",
    repoUrl: "https://github.com/Eyremarielle/house-Renovation",
    stars: 24,
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A mobile application for managing tasks, with reminders, categories, and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/task-app",
    stars: 18,
    category: "mobile",
  },
  {
    id: 3,
    title: "Open Source UI Library",
    description: "A collection of reusable UI components built with React and styled with Tailwind CSS.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/ui-library",
    stars: 156,
    category: "open-source",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions and forecasts for multiple locations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "Weather API", "Chart.js"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/weather-app",
    stars: 12,
    category: "web",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern design.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/portfolio",
    stars: 8,
    category: "design",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and fitness progress with visualization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Flutter", "Firebase", "Charts"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/fitness-tracker",
    stars: 32,
    category: "mobile",
  },
]

export function ProjectGrid({ activeFilter = "all" }) {
  const [visibleProjects, setVisibleProjects] = useState<typeof PROJECTS>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Reset visibility when filter changes
    setVisibleProjects([])
    setIsLoaded(false)

    // Filter projects
    const filteredProjects =
      activeFilter === "all" ? PROJECTS : PROJECTS.filter((project) => project.category === activeFilter)

    // Animate in projects one by one
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Stagger the appearance of projects
    let currentProjects: typeof PROJECTS = []
    filteredProjects.forEach((project, index) => {
      setTimeout(
        () => {
          currentProjects = [...currentProjects, project]
          setVisibleProjects([...currentProjects])
        },
        100 + index * 100,
      )
    })

    return () => clearTimeout(timer)
  }, [activeFilter])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleProjects.map((project, index) => (
        <div
          key={project.id}
          className="transition-all duration-500 transform"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}
