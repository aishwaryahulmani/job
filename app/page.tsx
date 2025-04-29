import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Search, FileText, Zap, BarChart, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b sticky top-0 z-40 bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Tech Job Match
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    JobScraperAI automatically matches job listings to your tech stack and resume, saving you time and
                    helping you find the perfect role.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[400px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="JobScraperAI Dashboard"
                    fill
                    className="object-contain rounded-lg shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  <Zap className="mr-1 h-4 w-4" />
                  Smart Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How JobScraperAI Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform uses advanced algorithms to match your skills and experience with the most relevant job
                  opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Resume Analysis</h3>
                <p className="text-center text-muted-foreground">
                  Upload your resume and our AI will extract your skills, experience, and tech stack.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Job Scraping</h3>
                <p className="text-center text-muted-foreground">
                  We scrape multiple job portals to find opportunities matching your profile.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Matching</h3>
                <p className="text-center text-muted-foreground">
                  Our algorithm ranks jobs based on how well they match your skills and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Streamlined Job Search Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  JobScraperAI simplifies your job search with a few easy steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Account</h3>
                <p className="text-center text-muted-foreground">Sign up and create your profile</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Upload Resume</h3>
                <p className="text-center text-muted-foreground">Upload your resume and select your tech stack</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Set Preferences</h3>
                <p className="text-center text-muted-foreground">Customize your job search preferences</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold">Get Matched</h3>
                <p className="text-center text-muted-foreground">Receive personalized job recommendations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hear from developers who found their dream jobs using JobScraperAI
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "JobScraperAI helped me find a job that perfectly matched my React and Node.js skills. I was hired
                    within 2 weeks!"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The resume analysis feature saved me hours of searching. It automatically matched me with roles
                    that fit my experience."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "As a data scientist, finding roles that match my specific skills was challenging until I found
                    JobScraperAI."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Priya Patel</p>
                    <p className="text-sm text-muted-foreground">Data Scientist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Find Your Perfect Tech Job?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join thousands of developers who have streamlined their job search with JobScraperAI
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1">
                    Get Started for Free <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

