"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export function AnimatedText({ text, className, once = true }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <span className={cn("inline-block overflow-hidden", className)}>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={cn(
            "inline-block transition-transform duration-700 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
          )}
          style={{ transitionDelay: `${index * 30}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}
