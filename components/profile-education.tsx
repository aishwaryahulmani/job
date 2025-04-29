"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GraduationCap, Plus, Trash2 } from "lucide-react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data
const initialEducation = [
  {
    id: "1",
    school: "Stanford University",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    startDate: "2012-09",
    endDate: "2016-06",
    current: false,
    description: "Graduated with honors. Specialized in Human-Computer Interaction and Artificial Intelligence.",
  },
  {
    id: "2",
    school: "Udacity",
    degree: "Nanodegree",
    fieldOfStudy: "Front End Web Developer",
    startDate: "2016-01",
    endDate: "2016-04",
    current: false,
    description: "Completed a comprehensive program on modern front-end development techniques and frameworks.",
  },
]

export function ProfileEducation() {
  const [education, setEducation] = useState(initialEducation)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newEducation, setNewEducation] = useState({
    id: "",
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
  })

  const handleAddEducation = () => {
    const educationWithId = {
      ...newEducation,
      id: Date.now().toString(),
    }
    setEducation([educationWithId, ...education])
    setNewEducation({
      id: "",
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    })
    setIsAddDialogOpen(false)
  }

  const handleDeleteEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  const handleCurrentChange = (checked: boolean) => {
    setNewEducation({
      ...newEducation,
      current: checked,
      endDate: checked ? "" : newEducation.endDate,
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Education</CardTitle>
          <CardDescription>Add your educational background to enhance your profile</CardDescription>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Education
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Add Education</DialogTitle>
              <DialogDescription>Add details about your educational background</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="school">School/University</Label>
                <Input
                  id="school"
                  value={newEducation.school}
                  onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
                  placeholder="e.g. Stanford University"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="degree">Degree</Label>
                <Select
                  onValueChange={(value) => setNewEducation({ ...newEducation, degree: value })}
                  defaultValue={newEducation.degree}
                >
                  <SelectTrigger id="degree">
                    <SelectValue placeholder="Select degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High School Diploma">High School Diploma</SelectItem>
                    <SelectItem value="Associate's Degree">Associate's Degree</SelectItem>
                    <SelectItem value="Bachelor of Arts">Bachelor of Arts</SelectItem>
                    <SelectItem value="Bachelor of Science">Bachelor of Science</SelectItem>
                    <SelectItem value="Master of Arts">Master of Arts</SelectItem>
                    <SelectItem value="Master of Science">Master of Science</SelectItem>
                    <SelectItem value="MBA">MBA</SelectItem>
                    <SelectItem value="Ph.D.">Ph.D.</SelectItem>
                    <SelectItem value="Certificate">Certificate</SelectItem>
                    <SelectItem value="Diploma">Diploma</SelectItem>
                    <SelectItem value="Nanodegree">Nanodegree</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="field-of-study">Field of Study</Label>
                <Input
                  id="field-of-study"
                  value={newEducation.fieldOfStudy}
                  onChange={(e) => setNewEducation({ ...newEducation, fieldOfStudy: e.target.value })}
                  placeholder="e.g. Computer Science"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edu-start-date">Start Date</Label>
                  <Input
                    id="edu-start-date"
                    type="month"
                    value={newEducation.startDate}
                    onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edu-end-date">End Date</Label>
                  <Input
                    id="edu-end-date"
                    type="month"
                    value={newEducation.current ? "" : newEducation.endDate}
                    onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                    disabled={newEducation.current}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="edu-current" checked={newEducation.current} onCheckedChange={handleCurrentChange} />
                <Label htmlFor="edu-current">I am currently studying here</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edu-description">Description</Label>
                <Textarea
                  id="edu-description"
                  value={newEducation.description}
                  onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
                  placeholder="Describe your studies, achievements, or activities"
                  rows={4}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddEducation}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">
                    {edu.degree} in {edu.fieldOfStudy}
                  </h3>
                  <div className="text-sm text-muted-foreground">{edu.school}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(edu.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
                    {edu.current
                      ? "Present"
                      : new Date(edu.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </div>
                  <p className="mt-2 text-sm">{edu.description}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDeleteEducation(edu.id)}>
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

