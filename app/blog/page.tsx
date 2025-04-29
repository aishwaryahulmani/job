import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">JobScraperAI Blog</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Insights, tips, and trends for your job search and career development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Featured Blog Post"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
                  <span>Featured</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  10 Tech Skills Most in Demand for 2023
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Discover which technical skills employers are looking for this year and how you can develop them to
                  boost your career prospects.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <div>June 15, 2023</div>
                </div>
                <Link href="/blog/tech-skills-2023">
                  <Button className="w-fit">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest Articles</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Stay updated with our latest insights and tips
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>How to Optimize Your Resume for ATS Systems</CardTitle>
                  <CardDescription>
                    Learn how to format your resume to pass through Applicant Tracking Systems and reach human
                    recruiters.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>4 min read</span>
                    </div>
                    <div>May 28, 2023</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/blog/optimize-resume-ats">
                    <Button variant="ghost" className="p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Remote Work vs. Office: What's Best for Tech Professionals?</CardTitle>
                  <CardDescription>
                    Explore the pros and cons of remote and in-office work environments for tech roles.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>6 min read</span>
                    </div>
                    <div>May 15, 2023</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/blog/remote-vs-office">
                    <Button variant="ghost" className="p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Negotiating Your Tech Salary: A Complete Guide</CardTitle>
                  <CardDescription>
                    Tips and strategies for negotiating the best compensation package for your next tech role.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>7 min read</span>
                    </div>
                    <div>April 30, 2023</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/blog/salary-negotiation">
                    <Button variant="ghost" className="p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Transitioning to Tech: Career Change Success Stories</CardTitle>
                  <CardDescription>
                    Inspiring stories of professionals who successfully switched careers into the tech industry.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>8 min read</span>
                    </div>
                    <div>April 18, 2023</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/blog/career-change-tech">
                    <Button variant="ghost" className="p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>The Future of AI in Recruitment and Job Searching</CardTitle>
                  <CardDescription>
                    How artificial intelligence is transforming the recruitment process and job search experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                    <div>April 5, 2023</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/blog/ai-recruitment">
                    <Button variant="ghost" className="p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Blog Post" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Mastering Technical Interviews: From Preparation to Offer</CardTitle>
                  <CardDescription>
                    A comprehensive guide to preparing for and excelling in technical interviews.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>9 min read</span>
                    </div>
                    <div>March 22, 2023</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/blog/technical-interviews">
                    <Button variant="ghost" className="p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Our Newsletter</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get the latest job search tips, industry insights, and career advice delivered to your inbox
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

