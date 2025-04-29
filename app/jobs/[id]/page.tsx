import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Bookmark,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  ExternalLink,
  Globe,
  MapPin,
  Share2,
  Users,
} from "lucide-react"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  // This would normally fetch the job data based on the ID
  const jobId = params.id

  // Mock job data
  const job = {
    id: jobId,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    posted: "2 days ago",
    description: "Join our team to build cutting-edge web applications using React and TypeScript.",
    logo: "/placeholder.svg?height=80&width=80",
    match: 95,
    source: "LinkedIn",
    companySize: "501-1000 employees",
    industry: "Software Development",
    website: "https://example.com",
    founded: "2010",
    about:
      "TechCorp is a leading software development company specializing in creating innovative solutions for businesses of all sizes. Our mission is to transform how companies operate through cutting-edge technology.",
    responsibilities: [
      "Develop and maintain responsive web applications using React, TypeScript, and Next.js",
      "Collaborate with designers to implement UI/UX designs with pixel-perfect accuracy",
      "Work with backend developers to integrate frontend with APIs and services",
      "Optimize applications for maximum speed and scalability",
      "Implement automated testing to ensure code quality and reliability",
      "Participate in code reviews and contribute to technical documentation",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
      "Thorough understanding of React.js and its core principles",
      "Experience with TypeScript, Next.js, and modern frontend build pipelines",
      "Familiarity with RESTful APIs and GraphQL",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token",
      "Experience with common frontend development tools such as Babel, Webpack, NPM, etc.",
      "Good understanding of browser rendering behavior and performance optimization",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work hours and remote work options",
      "Professional development budget",
      "Generous paid time off",
      "Parental leave",
      "Modern office with snacks and beverages",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Next.js",
      "Redux",
      "GraphQL",
      "REST APIs",
      "Webpack",
      "Jest",
      "Testing Library",
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b sticky top-0 z-40 bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        {/* Job Header */}
        <section className="border-b">
          <div className="container px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Link href="/jobs" className="inline-flex items-center text-sm font-medium">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Jobs
              </Link>
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-md overflow-hidden border">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building2 className="mr-1 h-3.5 w-3.5" />
                        {job.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-3.5 w-3.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm">
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <Tabs defaultValue="description">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="description">Description</TabsTrigger>
                        <TabsTrigger value="company">Company</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                      </TabsList>
                      <TabsContent value="description" className="space-y-6 pt-6">
                        <div>
                          <h2 className="text-xl font-bold mb-4">Job Description</h2>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold mb-3">Responsibilities</h3>
                          <ul className="space-y-2">
                            {job.responsibilities.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle2 className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold mb-3">Requirements</h3>
                          <ul className="space-y-2">
                            {job.requirements.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle2 className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold mb-3">Benefits</h3>
                          <ul className="space-y-2">
                            {job.benefits.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle2 className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold mb-3">Required Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="company" className="space-y-6 pt-6">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded-md overflow-hidden border">
                            <Image
                              src={job.logo || "/placeholder.svg"}
                              alt={job.company}
                              width={80}
                              height={80}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">{job.company}</h2>
                            <div className="text-sm text-muted-foreground">{job.industry}</div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold mb-3">About {job.company}</h3>
                          <p className="text-muted-foreground">{job.about}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="text-sm font-medium">Company Size</div>
                              <div className="text-sm text-muted-foreground">{job.companySize}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="text-sm font-medium">Founded</div>
                              <div className="text-sm text-muted-foreground">{job.founded}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="text-sm font-medium">Website</div>
                              <a
                                href={job.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                              >
                                {job.website.replace("https://", "")}
                              </a>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="text-sm font-medium">Location</div>
                              <div className="text-sm text-muted-foreground">{job.location}</div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="reviews" className="pt-6">
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                          <Users className="h-12 w-12 text-muted-foreground mb-4" />
                          <h3 className="text-lg font-medium mb-2">No reviews yet</h3>
                          <p className="text-muted-foreground max-w-md">
                            Be the first to review {job.company} and help other job seekers make informed decisions.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Job Overview</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Job Type</div>
                          <div className="text-sm text-muted-foreground">{job.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Salary</div>
                          <div className="text-sm text-muted-foreground">{job.salary}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Location</div>
                          <div className="text-sm text-muted-foreground">{job.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Posted</div>
                          <div className="text-sm text-muted-foreground">{job.posted}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full">
                        Apply Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Match Score</h3>
                    <div className="flex items-center justify-center">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-3xl font-bold">{job.match}%</div>
                        </div>
                        <svg className="h-full w-full" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="10"
                            className="text-muted"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeDasharray="283"
                            strokeDashoffset={283 - (283 * job.match) / 100}
                            className="text-primary"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      This job matches {job.match}% of your skills and preferences
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Similar Jobs</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <Link href={`/jobs/${i}`} key={i} className="block">
                          <div className="flex items-start gap-3 group">
                            <div className="h-10 w-10 rounded overflow-hidden border shrink-0">
                              <Image
                                src="/placeholder.svg?height=40&width=40"
                                alt="Company logo"
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors">
                                {["Frontend Developer", "React Engineer", "UI Developer"][i - 1]}
                              </h4>
                              <div className="text-xs text-muted-foreground">
                                {["WebTech Inc.", "DevSolutions", "UX Masters"][i - 1]} •{" "}
                                {["Remote", "New York, NY", "Seattle, WA"][i - 1]}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

