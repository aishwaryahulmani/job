import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Users, Building2, Globe, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b sticky top-0 z-40 bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About JobScraperAI</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our mission is to simplify the job search process for tech professionals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Building2 className="h-4 w-4" />
                  <span>Our Story</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How We Started</h2>
                <p className="text-muted-foreground md:text-lg">
                  JobScraperAI was founded in 2022 by a team of tech professionals who experienced firsthand the
                  challenges of finding relevant job opportunities in the saturated tech job market.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  After spending countless hours manually searching through job boards and applying to positions that
                  didn't match their skills, our founders decided to build a solution that would automate and streamline
                  the job search process.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Today, JobScraperAI has helped thousands of tech professionals find their perfect job match, saving
                  them time and connecting them with opportunities that truly align with their skills and experience.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our Story"
                    fill
                    className="object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex items-center justify-center lg:order-last">
                <div className="relative h-[300px] w-full md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our Mission"
                    fill
                    className="object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Globe className="h-4 w-4" />
                  <span>Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Drives Us</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our mission is to empower job seekers by connecting them with opportunities that truly match their
                  skills, experience, and career aspirations.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We believe that finding the right job shouldn't be a full-time job itself. By leveraging technology to
                  automate the search and matching process, we help professionals focus on what matters most: preparing
                  for interviews and showcasing their talents.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  We're committed to continuously improving our platform to provide the most accurate job matches and
                  the best user experience for job seekers in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Users className="h-4 w-4" />
                  <span>Our Team</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet the People Behind JobScraperAI</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our diverse team of engineers, data scientists, and industry experts is dedicated to transforming the
                  job search experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Alex Johnson</h3>
                  <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Samantha Chen</h3>
                  <p className="text-sm text-muted-foreground">CTO & Co-Founder</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">David Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Head of Engineering</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Priya Patel</h3>
                  <p className="text-sm text-muted-foreground">Lead Data Scientist</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Michael Lee</h3>
                  <p className="text-sm text-muted-foreground">Product Manager</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="Team Member" fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Emma Wilson</h3>
                  <p className="text-sm text-muted-foreground">Head of Customer Success</p>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Be part of the revolution in job searching and find your perfect tech role with JobScraperAI
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
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

