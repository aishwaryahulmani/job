
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { jwtDecode } from "jwt-decode"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [jobMatches, setJobMatches] = useState<any[]>([])

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (!token) {
      router.push("/login")
    } else {
      try {
        const decoded: { exp: number } = jwtDecode(token)
        const currentTime = Date.now() / 1000
        if (decoded.exp < currentTime) {
          localStorage.removeItem("authToken")
          router.push("/login")
        } else {
          fetchJobMatches(token)
        }
      } catch (error) {
        console.error("Invalid token:", error)
        localStorage.removeItem("authToken")
        router.push("/")
      }
    }
  }, [router])

  const fetchJobMatches = async (token: string) => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/fetchJobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()

      // Enhance data with mock matchRate and fallback postedDate
      const enhanced = data.map((job: any) => ({
        title: job.title,
        company: job.company,
        url: job.link,
        // matchRate: Math.floor(Math.random() * 21) + 80, // 80-100%
        postedDate: job.posted || "Recently",
      }))

      setJobMatches(enhanced)
    } catch (err) {
      console.error("Error fetching jobs:", err)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight mb-4">Recent Job Matches</h2>
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
            {/* <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              <CheckCircle2 className="h-3 w-3" />
              <span>{job.matchRate}% Match</span>
            </div> */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(job.url, "_blank")}
            >
              View
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
