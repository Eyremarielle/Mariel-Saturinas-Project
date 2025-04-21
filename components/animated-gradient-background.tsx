"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create gradient circles
    const circles: Circle[] = []
    const colors = [
      "rgba(59, 130, 246, 0.5)", // blue
      "rgba(139, 92, 246, 0.5)", // purple
      "rgba(236, 72, 153, 0.5)", // pink
    ]

    for (let i = 0; i < 3; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 300 + 100,
        color: colors[i],
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
      })
    }

    const animate = () => {
      // Clear canvas with slight fade effect
      ctx.fillStyle = "rgba(var(--background), 0.05)"
      ctx.fillRect(0, 0, width, height)

      // Update and draw circles
      circles.forEach((circle) => {
        // Move circle
        circle.x += circle.vx
        circle.y += circle.vy

        // Bounce off edges
        if (circle.x < 0 || circle.x > width) circle.vx *= -1
        if (circle.y < 0 || circle.y > height) circle.vy *= -1

        // Draw gradient
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
        gradient.addColorStop(0, circle.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 dark:opacity-10" />
}

interface Circle {
  x: number
  y: number
  radius: number
  color: string
  vx: number
  vy: number
}
