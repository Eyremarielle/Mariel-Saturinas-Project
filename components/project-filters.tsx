"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "open-source", label: "Open Source" },
  { id: "design", label: "UI/UX Design" },
]

interface ProjectFiltersProps {
  onFilterChange: (filter: string) => void
}

export function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange(filterId)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {FILTERS.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilterChange(filter.id)}
          className="rounded-full relative"
        >
          {activeFilter === filter.id && (
            <motion.span
              layoutId="activeFilterIndicator"
              className="absolute inset-0 bg-primary rounded-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {filter.label}
        </Button>
      ))}
    </div>
  )
}
