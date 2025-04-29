import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Search,
  BarChart,
  Zap,
  CheckCircle2,
  Bell,
  Clock,
  Filter,
  BookMarked,
  ArrowRight,
} from "lucide-react"

export default function FeaturesPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features to Streamline Your Job Search
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover how JobScraperAI helps you find the perfect job match with our innovative features
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <FileText className="h-4 w-4" />
                  <span>Resume Analysis</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Smart Resume Parsing</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our advanced resume parsing technology extracts your skills, experience, and qualifications
                  automatically. No more manual data entry or tedious form filling.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Automatic skill extraction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Experience level detection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Tech stack identification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Education and certification recognition</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Resume Analysis"
                    fill
                    className="object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex items-center justify-center lg:order-last">
                <div className="relative h-[300px] w-full md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Job Scraping"
                    fill
                    className="object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Search className="h-4 w-4" />
                  <span>Job Scraping</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Multi-Platform Job Aggregation</h2>
                <p className="text-muted-foreground md:text-lg">
                  We scrape job listings from multiple platforms including LinkedIn, Indeed, and Naukri.com, bringing
                  all relevant opportunities to one dashboard.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Real-time job scraping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Multiple job board integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Duplicate job detection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Comprehensive job details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <BarChart className="h-4 w-4" />
                  <span>Smart Matching</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Intelligent Job Matching</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our algorithm analyzes job descriptions and matches them to your skills and experience, ranking
                  opportunities by relevance to your profile.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Skill-based matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Experience level filtering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Personalized match scores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Preference-based recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Smart Matching"
                    fill
                    className="object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">More Powerful Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover all the tools JobScraperAI offers to streamline your job search
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Job Alerts</h3>
                <p className="text-center text-muted-foreground">
                  Receive notifications when new jobs matching your profile are found.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Advanced Filtering</h3>
                <p className="text-center text-muted-foreground">
                  Filter jobs by location, salary, company size, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BookMarked className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Saved Jobs</h3>
                <p className="text-center text-muted-foreground">
                  Save interesting jobs to review later and track your applications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Application Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Keep track of all your job applications in one place.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="text-center text-muted-foreground">
                  Visualize your job search progress and identify trends.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">One-Click Apply</h3>
                <p className="text-center text-muted-foreground">
                  Apply to jobs directly from our platform with a single click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Job Search?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join thousands of professionals who have found their perfect job match with JobScraperAI
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

