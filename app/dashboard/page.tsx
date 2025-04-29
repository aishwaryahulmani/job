"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { jwtDecode } from "jwt-decode"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Briefcase, CheckCircle2, Clock, FileText, ThumbsUp, Users } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)
  const [jobMatches, setJobMatches] = useState<any[]>([]) // To store job match data
  const [analytics, setAnalytics] = useState<any>([]) // To store analytics data

  // Redirect if no valid token in localStorage or if token has expired
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (!token) {
      router.push("/")
    } else {
      try {
        const decoded: { exp: number } = jwtDecode(token)
        const currentTime = Date.now() / 1000 // current time in seconds
        if (decoded.exp < currentTime) {
          localStorage.removeItem("authToken") // Remove expired token
          router.push("/") // Redirect to home page
        } else {
          setUserData(decoded)
          // Call functions to fetch job matches and analytics data
          fetchJobMatches()
          fetchAnalytics()
        }
      } catch (error) {
        console.error("Invalid token:", error)
        localStorage.removeItem("token") // Remove invalid token
        router.push("/") // Redirect to home page
      }
    }
  }, [router])

  // Fetch job matches (example function)
  const fetchJobMatches = async () => {
    // Replace this with actual API call to fetch job matches
    setJobMatches([
      { title: "Senior Frontend Developer", company: "TechCorp Inc.", matchRate: 92, postedDate: "2 days ago" },
      { title: "Full Stack Engineer", company: "InnovateSoft", matchRate: 88, postedDate: "1 day ago" },
      { title: "React Developer", company: "WebSolutions Ltd", matchRate: 85, postedDate: "3 days ago" },
    ])
  }

  // Fetch analytics (example function)
  const fetchAnalytics = async () => {
    // Replace this with actual API call to fetch analytics data
    setAnalytics([
      { skill: "React.js", percentage: 95 },
      { skill: "Node.js", percentage: 85 },
      { skill: "TypeScript", percentage: 80 },
      { skill: "MongoDB", percentage: 75 },
    ])
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Update Resume
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="matches">Job Matches</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Job Matches</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+4 since last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Applications</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 since yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Interviews</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 scheduled this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Match Rate</CardTitle>
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">+2% since last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Job Matches</CardTitle>
                <CardDescription>Jobs that match your skills and experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobMatches.map((job, index) => (
                    <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{job.title}</p>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{job.postedDate}</span>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>{job.matchRate}% Match</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Skills Analysis</CardTitle>
                <CardDescription>Your top skills from resume analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div>{item.skill}</div>
                        <div className="font-medium">{item.percentage}%</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Job Matches Tab */}
        <TabsContent value="matches">
          <div className="grid gap-4">
            <h3 className="text-xl font-semibold">Your Job Matches</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {jobMatches.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{job.postedDate}</span>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{job.matchRate}% Match</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid gap-4">
            <h3 className="text-xl font-semibold">Analytics</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {analytics.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.skill}</CardTitle>
                    <CardDescription>{item.percentage}% Skill Match</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
      </Tabs>
    </div>
  )
}
