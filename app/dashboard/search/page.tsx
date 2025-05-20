"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {jwtDecode} from "jwt-decode"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SlidersHorizontal, MapPin, Briefcase } from "lucide-react"

interface Job {
  title: string
  company: string
  url: string
  postedDate: string
  location: string
  experience: string
}

export default function SearchPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [postedFilter, setPostedFilter] = useState("any")
  const [experienceFilter, setExperienceFilter] = useState("any")
  const [showFilters, setShowFilters] = useState(false) // Start with filters shown by default
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (!token) {
      router.push("/login")
      return
    }

    try {
      const decoded: { exp: number } = jwtDecode(token)
      const currentTime = Date.now() / 1000

      if (decoded.exp < currentTime) {
        router.push("/login")
      } else {
        fetchJobMatches(token)
      }
    } catch (error) {
      console.error("Invalid token:", error)
      router.push("/")
    }
  }, [router])

  const fetchJobMatches = async (token: string) => {
    try {
      const res = await axios.get("http://localhost:5001/api/auth/fetchJobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = res.data
      const jobsArray = Array.isArray(data) ? data : data.jobs
      if (!Array.isArray(jobsArray)) throw new Error("Invalid jobs format")

      const enhanced = jobsArray.map((job: any) => ({
        title: job.title,
        company: job.company,
        url: job.link,
        postedDate: job.posted || "Recently",
        location: job.location || "Not specified",
        experience: job.exp || "Not specified",
      }))

      setJobs(enhanced)
    } catch (err) {
      console.error("Error fetching jobs:", err)
    }
  }

  const filterByPostedDate = (jobDate: string) => {
    if (postedFilter === "any") return true
    if (postedFilter === "24h") {
      return jobDate.includes("1 Day Ago") || jobDate.toLowerCase().includes("recent")
    }
    if (postedFilter === "7d") {
      const match = jobDate.match(/(\d+)\s+Day/)
      if (match) {
        const days = parseInt(match[1])
        return days >= 1 && days <= 7
      }
    }
    return false
  }

  const filterByExperience = (jobExp: string) => {
    if (experienceFilter === "any") return true

    if (experienceFilter === "fresher") {
      return jobExp.toLowerCase().includes("fresher") || jobExp.toLowerCase().includes("entry")
    }

    if (experienceFilter === "3") {
      const match = jobExp.match(/(\d+)/)
      if (match) {
        const years = parseInt(match[1])
        return years >= 3
      }
      return false
    }

    return jobExp.includes(experienceFilter)
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      filterByPostedDate(job.postedDate) &&
      filterByExperience(job.experience)
  )

  return (
    <div className="flex-1 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold tracking-tight">Job Search</h2>

        {/* Filters button visible on all screen sizes */}
        <Button
          variant="outline"
          className="flex items-center"
          onClick={() => setShowFilters((v) => !v)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="flex gap-4">
        {/* Filters panel visible only if showFilters is true */}
        {showFilters && (
          <Card className="h-fit p-4 md:w-[300px]">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Refine your job search</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search Input */}
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search for jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Posted Filter */}
              <div className="space-y-2">
                <Label htmlFor="posted">Posted</Label>
                <select
                  id="posted"
                  value={postedFilter}
                  onChange={(e) => setPostedFilter(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="any">Any time</option>
                  <option value="24h">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                </select>
              </div>

              {/* Experience Filter */}
              <div className="space-y-2">
                <Label htmlFor="experience">Experience</Label>
                <select
                  id="experience"
                  value={experienceFilter}
                  onChange={(e) => setExperienceFilter(e.target.value)}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="any">Any</option>
                  <option value="fresher">Fresher</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3+ Years</option>
                </select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Job Results */}
        <div className="flex-1 space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {job.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {job.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm space-y-1">
                  <div className="flex gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500">{job.postedDate}</span>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Job
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
