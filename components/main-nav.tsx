"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
// import Router, { useRouter } from "next"
import { useRouter } from "next/navigation"


export function MainNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem("authToken")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    router.push("http://localhost:3000/")
    window.location.reload()

  }

  return (
    <div className="flex justify-between items-center py-4 md:py-6 container">
      <div className="flex items-center gap-6 md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          <BriefcaseBusiness className="h-6 w-6" />
          <span className="font-bold text-xl hidden sm:inline-block">JobScraperAI</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/features" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Features
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/about" ? "text-primary" : "text-muted-foreground",
            )}
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Dashboard
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        )}
        <ModeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b z-50 md:hidden">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>

            {isLoggedIn ? (
              <Button
                className="w-full mt-2"
                variant="outline"
                onClick={() => {
                  handleLogout()
                  setIsMenuOpen(false)
                }}
              >
                Logout
              </Button>
            ) : (
              <div className="flex gap-2 pt-2">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="flex-1">
                  <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
            <ModeToggle />
          </div>
        </div>
      )}
    </div>
  )
}
