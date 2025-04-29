"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function JobFilterSidebar() {
  const [salaryRange, setSalaryRange] = useState([50, 150])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Filters</h3>
        <Button variant="outline" size="sm" className="w-full">
          Clear All Filters
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["job-type", "experience", "salary", "skills"]}>
        <AccordionItem value="job-type">
          <AccordionTrigger>Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-time" />
                <Label htmlFor="full-time">Full-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-time" />
                <Label htmlFor="part-time">Part-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <Label htmlFor="contract">Contract</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="freelance" />
                <Label htmlFor="freelance">Freelance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <Label htmlFor="internship">Internship</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger>Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="entry-level" />
                <Label htmlFor="entry-level">Entry Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mid-level" />
                <Label htmlFor="mid-level">Mid Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior-level" />
                <Label htmlFor="senior-level">Senior Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="manager" />
                <Label htmlFor="manager">Manager</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="director" />
                <Label htmlFor="director">Director</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salary">
          <AccordionTrigger>Salary Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[50, 150]} max={300} step={5} value={salaryRange} onValueChange={setSalaryRange} />
              <div className="flex items-center justify-between">
                <div className="text-sm">${salaryRange[0]}K</div>
                <div className="text-sm">${salaryRange[1]}K</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <Label htmlFor="remote">Remote</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybrid" />
                <Label htmlFor="hybrid">Hybrid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="on-site" />
                <Label htmlFor="on-site">On-site</Label>
              </div>
              <div className="mt-3">
                <Label htmlFor="city" className="text-xs mb-1 block">
                  City or Zip Code
                </Label>
                <Input id="city" placeholder="e.g. New York, 10001" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="javascript" />
                <Label htmlFor="javascript">JavaScript</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="react" />
                <Label htmlFor="react">React</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="typescript" />
                <Label htmlFor="typescript">TypeScript</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="node" />
                <Label htmlFor="node">Node.js</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="python" />
                <Label htmlFor="python">Python</Label>
              </div>
              <div className="mt-3">
                <Label htmlFor="other-skills" className="text-xs mb-1 block">
                  Other Skills
                </Label>
                <Input id="other-skills" placeholder="e.g. Docker, AWS" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="companies">
          <AccordionTrigger>Companies</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="google" />
                <Label htmlFor="google">Google</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="microsoft" />
                <Label htmlFor="microsoft">Microsoft</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="amazon" />
                <Label htmlFor="amazon">Amazon</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="meta" />
                <Label htmlFor="meta">Meta</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="apple" />
                <Label htmlFor="apple">Apple</Label>
              </div>
              <div className="mt-3">
                <Label htmlFor="other-companies" className="text-xs mb-1 block">
                  Other Companies
                </Label>
                <Input id="other-companies" placeholder="e.g. Netflix, Airbnb" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="date-posted">
          <AccordionTrigger>Date Posted</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="past-24h" />
                <Label htmlFor="past-24h">Past 24 hours</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="past-week" />
                <Label htmlFor="past-week">Past week</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="past-month" />
                <Label htmlFor="past-month">Past month</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="anytime" />
                <Label htmlFor="anytime">Anytime</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}

