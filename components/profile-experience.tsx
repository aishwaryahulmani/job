"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, Plus, Trash2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock data
const initialExperiences = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    startDate: "2020-06",
    endDate: "Present",
    current: true,
    description:
      "Led the development of the company's flagship product using React and TypeScript. Implemented state management with Redux and integrated with GraphQL APIs. Mentored junior developers and participated in code reviews.",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "WebSolutions Ltd",
    location: "New York, NY",
    startDate: "2018-03",
    endDate: "2020-05",
    current: false,
    description:
      "Developed responsive web applications using React and JavaScript. Collaborated with designers to implement UI/UX designs. Worked with backend developers to integrate RESTful APIs.",
  },
  {
    id: "3",
    title: "Junior Web Developer",
    company: "Digital Creations",
    location: "Boston, MA",
    startDate: "2016-09",
    endDate: "2018-02",
    current: false,
    description:
      "Built and maintained websites using HTML, CSS, and JavaScript. Assisted in the development of web applications using jQuery and Bootstrap. Participated in client meetings and requirement gathering.",
  },
]

export function ProfileExperience() {
  const [experiences, setExperiences] = useState(initialExperiences)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newExperience, setNewExperience] = useState({
    id: "",
    title: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  })

  const handleAddExperience = () => {
    const experienceWithId = {
      ...newExperience,
      id: Date.now().toString(),
    }
    setExperiences([experienceWithId, ...experiences])
    setNewExperience({
      id: "",
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    })
    setIsAddDialogOpen(false)
  }

  const handleDeleteExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const handleCurrentChange = (checked: boolean) => {
    setNewExperience({
      ...newExperience,
      current: checked,
      endDate: checked ? "Present" : "",
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Work Experience</CardTitle>
          <CardDescription>Add your work history to help us find relevant job matches</CardDescription>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Experience
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Add Work Experience</DialogTitle>
              <DialogDescription>Add details about your work experience to improve job matching</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input
                  id="job-title"
                  value={newExperience.title}
                  onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
                  placeholder="e.g. Frontend Developer"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={newExperience.company}
                  onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                  placeholder="e.g. Acme Inc."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newExperience.location}
                  onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
                  placeholder="e.g. San Francisco, CA"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    type="month"
                    value={newExperience.startDate}
                    onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    id="end-date"
                    type="month"
                    value={newExperience.current ? "" : newExperience.endDate}
                    onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
                    disabled={newExperience.current}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="current" checked={newExperience.current} onCheckedChange={handleCurrentChange} />
                <Label htmlFor="current">I currently work here</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newExperience.description}
                  onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                  placeholder="Describe your responsibilities and achievements"
                  rows={4}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddExperience}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((experience) => (
          <div key={experience.id} className="rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{experience.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    {experience.company} • {experience.location}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(experience.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
                    {experience.current
                      ? "Present"
                      : new Date(experience.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </div>
                  <p className="mt-2 text-sm">{experience.description}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDeleteExperience(experience.id)}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

