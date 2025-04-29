"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function ProfilePreferences() {
  const [salaryRange, setSalaryRange] = useState([80, 150])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Job Preferences</CardTitle>
          <CardDescription>Set your job search preferences to get better matches</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="job-title">Desired Job Title</Label>
            <Input id="job-title" defaultValue="Senior Frontend Developer" />
          </div>

          <div className="space-y-2">
            <Label>Job Type</Label>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-time" defaultChecked />
                <Label htmlFor="full-time" className="font-normal">
                  Full-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-time" />
                <Label htmlFor="part-time" className="font-normal">
                  Part-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <Label htmlFor="contract" className="font-normal">
                  Contract
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="freelance" />
                <Label htmlFor="freelance" className="font-normal">
                  Freelance
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <Label htmlFor="internship" className="font-normal">
                  Internship
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Location Preference</Label>
            <RadioGroup defaultValue="remote">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="remote" id="remote" />
                <Label htmlFor="remote" className="font-normal">
                  Remote
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hybrid" id="hybrid" />
                <Label htmlFor="hybrid" className="font-normal">
                  Hybrid
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="on-site" id="on-site" />
                <Label htmlFor="on-site" className="font-normal">
                  On-site
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferred-location">Preferred Location</Label>
            <Input id="preferred-location" defaultValue="San Francisco, CA" />
            <p className="text-sm text-muted-foreground">
              For hybrid or on-site roles, specify your preferred location
            </p>
          </div>

          <div className="space-y-2">
            <Label>Relocation</Label>
            <RadioGroup defaultValue="not-willing">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="willing" id="willing" />
                <Label htmlFor="willing" className="font-normal">
                  Willing to relocate
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-willing" id="not-willing" />
                <Label htmlFor="not-willing" className="font-normal">
                  Not willing to relocate
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Salary Expectation (USD)</Label>
            <Slider defaultValue={[80, 150]} max={300} step={5} value={salaryRange} onValueChange={setSalaryRange} />
            <div className="flex items-center justify-between">
              <div className="text-sm">${salaryRange[0]}K</div>
              <div className="text-sm">${salaryRange[1]}K</div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience-level">Experience Level</Label>
            <Select defaultValue="senior">
              <SelectTrigger id="experience-level">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="lead">Lead</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Customize how and when you receive job alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Email Notifications</Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="new-matches" defaultChecked />
                  <Label htmlFor="new-matches" className="font-normal">
                    New job matches
                  </Label>
                </div>
                <Select defaultValue="daily">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="application-updates" defaultChecked />
                  <Label htmlFor="application-updates" className="font-normal">
                    Application updates
                  </Label>
                </div>
                <Select defaultValue="immediately">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="saved-searches" defaultChecked />
                  <Label htmlFor="saved-searches" className="font-normal">
                    Saved search alerts
                  </Label>
                </div>
                <Select defaultValue="weekly">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Privacy Settings</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="profile-visible" defaultChecked />
                <Label htmlFor="profile-visible" className="font-normal">
                  Make my profile visible to employers
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="anonymous-applications" />
                <Label htmlFor="anonymous-applications" className="font-normal">
                  Apply anonymously (hide personal details)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="data-collection" defaultChecked />
                <Label htmlFor="data-collection" className="font-normal">
                  Allow data collection to improve job matches
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full">Save Preferences</Button>
    </div>
  )
}

