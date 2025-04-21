"use client"

import { useState } from "react"
import { ProjectGrid } from "@/components/project-grid"
import { ProjectFilters } from "@/components/project-filters"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="relative">
      <AnimatedGradientBackground />
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4 overflow-hidden">
            <AnimatedText text="My Projects" className="inline-block" />
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <AnimatedText
              text="A collection of software projects I've built, from web applications to mobile apps and open-source contributions."
              className="inline-block"
            />
          </p>
        </header>

        <ProjectFilters onFilterChange={setActiveFilter} />
        <ProjectGrid activeFilter={activeFilter} />
      </div>
    </div>
  )
}
