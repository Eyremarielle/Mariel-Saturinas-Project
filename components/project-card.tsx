"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    demoUrl: string
    repoUrl: string
    stars: number
    category: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useMobile()

  return (
    <Card
      className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-opacity-50 hover:border-opacity-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-70" : ""}`}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="w-4 h-4" />
          <span>{project.stars}</span>
        </div>
        <div className="flex gap-2">
          <Button asChild size="sm" variant="outline" className="transition-all duration-300 hover:bg-secondary">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-1" />
              {!isMobile && "Code"}
            </Link>
          </Button>
          <Button asChild size="sm" className="transition-all duration-300">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              {!isMobile && "Demo"}
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
