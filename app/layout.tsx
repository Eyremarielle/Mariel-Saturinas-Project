import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mariel Saturinas | Software Developer",
  description: "Portfolio and professional profile of Mariel Saturinas, Software Developer based in Sydney, Australia",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background">
            <nav className="border-b sticky top-0 z-50 backdrop-blur-sm bg-background/80">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="font-bold text-xl relative group">
                  <span className="relative z-10">Mariel Saturinas</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <div className="flex items-center gap-6">
                  <div className="hidden sm:flex gap-6">
                    <Link href="/" className="hover:text-primary transition-colors relative group">
                      <span>Projects</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/about" className="hover:text-primary transition-colors relative group">
                      <span>About</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/contact" className="hover:text-primary transition-colors relative group">
                      <span>Contact</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
            <main>{children}</main>
            <footer className="border-t py-8 mt-12">
              <div className="container mx-auto px-4 text-center text-muted-foreground">
                © {new Date().getFullYear()} Mariel Saturinas. All rights reserved.
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
