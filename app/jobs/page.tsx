import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Building2,
  Clock,
  DollarSign,
  ExternalLink,
  Filter,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react"
import { JobFilterSidebar } from "@/components/job-filter-sidebar"

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b sticky top-0 z-40 bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Find Your Perfect Job</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Browse through thousands of job listings tailored to your skills and experience
                </p>
              </div>
              <div className="w-full max-w-3xl">
                <div className="flex w-full max-w-3xl items-center space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search jobs, skills, or companies" className="pl-8" />
                  </div>
                  <div className="relative flex-1">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="text" placeholder="Location" className="pl-8" />
                  </div>
                  <Button type="submit">Search</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Filters Sidebar */}
              <div className="md:w-1/4 lg:w-1/5">
                <div className="hidden md:block sticky top-24">
                  <JobFilterSidebar />
                </div>
                <div className="md:hidden">
                  <Button variant="outline" className="w-full mb-4" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Show Filters
                  </Button>
                </div>
              </div>

              {/* Jobs List */}
              <div className="md:w-3/4 lg:w-4/5">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">1,245 Jobs Found</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Sort
                    </Button>
                    <Tabs defaultValue="all">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="saved">Saved</TabsTrigger>
                        <TabsTrigger value="applied">Applied</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Job Cards */}
                  {[
                    {
                      id: 1,
                      title: "Senior Frontend Developer",
                      company: "TechCorp Inc.",
                      location: "San Francisco, CA",
                      type: "Full-time",
                      salary: "$120K - $150K",
                      posted: "2 days ago",
                      description: "Join our team to build cutting-edge web applications using React and TypeScript.",
                      logo: "/placeholder.svg?height=40&width=40",
                      match: 95,
                      source: "LinkedIn",
                    },
                    {
                      id: 2,
                      title: "Full Stack Engineer",
                      company: "InnovateSoft",
                      location: "Remote",
                      type: "Full-time",
                      salary: "$110K - $140K",
                      posted: "1 day ago",
                      description: "Looking for a skilled developer to work on our MERN stack applications.",
                      logo: "/placeholder.svg?height=40&width=40",
                      match: 92,
                      source: "Indeed",
                    },
                    {
                      id: 3,
                      title: "React Developer",
                      company: "WebSolutions Ltd",
                      location: "New York, NY",
                      type: "Contract",
                      salary: "$100K - $130K",
                      posted: "3 days ago",
                      description: "Help us build responsive and performant user interfaces with React and Next.js.",
                      logo: "/placeholder.svg?height=40&width=40",
                      match: 88,
                      source: "Glassdoor",
                    },
                    {
                      id: 4,
                      title: "JavaScript Developer",
                      company: "CodeMasters",
                      location: "Austin, TX",
                      type: "Full-time",
                      salary: "$90K - $120K",
                      posted: "4 days ago",
                      description: "Join our team to develop modern web applications using JavaScript frameworks.",
                      logo: "/placeholder.svg?height=40&width=40",
                      match: 85,
                      source: "Monster",
                    },
                    {
                      id: 5,
                      title: "UI/UX Developer",
                      company: "DesignHub",
                      location: "Seattle, WA",
                      type: "Full-time",
                      salary: "$95K - $125K",
                      posted: "5 days ago",
                      description: "Looking for a developer with strong design skills to create beautiful interfaces.",
                      logo: "/placeholder.svg?height=40&width=40",
                      match: 82,
                      source: "ZipRecruiter",
                    },
                  ].map((job) => (
                    <Card key={job.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="p-6 flex-1">
                            <div className="flex items-start gap-4">
                              <div className="hidden md:block">
                                <div className="h-12 w-12 rounded-md overflow-hidden border">
                                  <Image
                                    src={job.logo || "/placeholder.svg"}
                                    alt={job.company}
                                    width={48}
                                    height={48}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-bold text-lg">{job.title}</h3>
                                  <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                                    {job.match}% Match
                                  </Badge>
                                </div>
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
                                    <Briefcase className="mr-1 h-3.5 w-3.5" />
                                    {job.type}
                                  </div>
                                  <div className="flex items-center">
                                    <DollarSign className="mr-1 h-3.5 w-3.5" />
                                    {job.salary}
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="mr-1 h-3.5 w-3.5" />
                                    {job.posted}
                                  </div>
                                </div>
                                <p className="mt-2 text-sm">{job.description}</p>
                                <div className="mt-4 flex items-center text-xs text-muted-foreground">
                                  <span>Source: {job.source}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col justify-between border-t md:border-t-0 md:border-l p-4 bg-muted/30">
                            <Link href={`/jobs/${job.id}`}>
                              <Button variant="outline" size="sm" className="w-full mb-2">
                                Details
                              </Button>
                            </Link>
                            <Link href={`https://example.com/apply/${job.id}`} target="_blank">
                              <Button size="sm" className="w-full">
                                Apply
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Pagination */}
                  <div className="flex items-center justify-center space-x-2 py-4">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="px-3 bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      ...
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      10
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

