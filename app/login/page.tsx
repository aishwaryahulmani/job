"use client"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BriefcaseBusiness, Github, Linkedin } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      })

      const { token } = response.data
      localStorage.setItem("authToken", token)
      router.push("/dashboard")
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b sticky top-0 z-40 bg-background">
        <MainNav />
      </header>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto grid w-full max-w-md gap-6">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex justify-center">
              <BriefcaseBusiness className="h-10 w-10" />
            </div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button className="w-full" onClick={handleSubmit}>
              Sign In
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            {/* <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div> */}
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" className="w-full">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div> */}
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary underline-offset-4 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
