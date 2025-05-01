"use client"

import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BriefcaseBusiness, Github, Linkedin } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    if (!form.terms) {
      alert("You must agree to the terms and privacy policy")
      return
    }

    try {
      const res = await axios.post("http://localhost:5001/api/auth/signup", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password
      })

      // Store token in localStorage
      localStorage.setItem("authToken", res.data.token)

      alert("Account created!")
      console.log(res.data)

      // Redirect the user after successful signup (optional)
      window.location.href = "/dashboard"  // Example redirect to a dashboard or another page

    } catch (err: any) {
      console.error(err)
      alert(err.response?.data?.message || "Signup failed")
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
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to get started</p>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" type="text" value={form.firstName} onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" type="text" value={form.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={form.password} onChange={handleChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={form.terms} onCheckedChange={(checked) => setForm(prev => ({ ...prev, terms: !!checked }))} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
                  terms of service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                  privacy policy
                </Link>
              </label>
            </div>
            <Button className="w-full" onClick={handleSubmit}>Create Account</Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            {/* <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div> */}
          </div>
          {/* <div className="grid grid-cols-2 gap-4"> */}
            {/* <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" className="w-full">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline-offset-4 hover:underline">
              Sign in
            </Link>
          </div> */}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
