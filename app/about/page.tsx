"use client"

import Image from "next/image"
import { MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="relative">
      <AnimatedGradientBackground />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-20">
                <div className="aspect-square relative rounded-xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Mariel Saturinas"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Sydney, Australia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />
                    <span>Software Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <span>Computer Science</span>
                  </div>

                  <Button asChild className="w-full mt-4 transition-all duration-300 hover:scale-105">
                    <a href="/contact">Contact Me</a>
                  </Button>

                  <Button variant="outline" asChild className="w-full transition-all duration-300 hover:bg-secondary">
                    <a href="/Mariel_Saturinas_Resume.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-4">
                <AnimatedText text="Mariel Saturinas" />
              </h1>
              <h2 className="text-2xl text-muted-foreground mb-6">
                <AnimatedText text="Software Developer" />
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg">
                  Passionate software developer with expertise in building robust web applications and services.
                  Experienced in full-stack development with a focus on creating efficient, scalable, and user-friendly
                  solutions.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">About Me</h3>
                <p>
                  I'm a software developer based in Sydney, Australia, with a strong background in web development. I
                  specialize in creating responsive and accessible web applications using modern technologies and
                  frameworks. My approach to development focuses on writing clean, maintainable code that delivers
                  exceptional user experiences.
                </p>

                <Separator className="my-8" />

                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "HTML/CSS",
                    "Tailwind CSS",
                    "Git",
                    "CI/CD",
                    "AWS",
                    "Docker",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Badge className="transition-all duration-300 hover:scale-110">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>

                <Separator className="my-8" />

                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Card className="transition-all duration-300 hover:shadow-md">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">Senior Software Developer</h4>
                            <p className="text-muted-foreground">Tech Company Pty Ltd</p>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>2021 - Present</span>
                          </div>
                        </div>
                        <p className="mt-2">
                          Led development of key features for enterprise web applications. Collaborated with
                          cross-functional teams to deliver high-quality software solutions.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Card className="transition-all duration-300 hover:shadow-md">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">Software Developer</h4>
                            <p className="text-muted-foreground">Digital Solutions Inc.</p>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>2018 - 2021</span>
                          </div>
                        </div>
                        <p className="mt-2">
                          Developed and maintained web applications using React and Node.js. Implemented responsive
                          designs and improved application performance.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <Separator className="my-8" />

                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Card className="transition-all duration-300 hover:shadow-md">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Bachelor of Computer Science</h4>
                          <p className="text-muted-foreground">University of Technology</p>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>2014 - 2018</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
