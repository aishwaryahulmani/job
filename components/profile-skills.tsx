"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Plus } from "lucide-react"

// Mock data
const initialSkillCategories = [
  {
    id: "1",
    name: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    id: "2",
    name: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS"],
  },
  {
    id: "3",
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    id: "4",
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub"],
  },
]

export function ProfileSkills() {
  const [skillCategories, setSkillCategories] = useState(initialSkillCategories)
  const [newSkill, setNewSkill] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialSkillCategories[0].id)

  const handleAddSkill = () => {
    if (!newSkill.trim()) return

    setSkillCategories(
      skillCategories.map((category) => {
        if (category.id === selectedCategoryId) {
          return {
            ...category,
            skills: [...category.skills, newSkill],
          }
        }
        return category
      }),
    )
    setNewSkill("")
  }

  const handleRemoveSkill = (categoryId: string, skill: string) => {
    setSkillCategories(
      skillCategories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            skills: category.skills.filter((s) => s !== skill),
          }
        }
        return category
      }),
    )
  }

  const handleAddCategory = () => {
    if (!newCategory.trim()) return

    const newCategoryObj = {
      id: Date.now().toString(),
      name: newCategory,
      skills: [],
    }
    setSkillCategories([...skillCategories, newCategoryObj])
    setSelectedCategoryId(newCategoryObj.id)
    setNewCategory("")
  }

  const handleRemoveCategory = (categoryId: string) => {
    setSkillCategories(skillCategories.filter((category) => category.id !== categoryId))
    if (selectedCategoryId === categoryId && skillCategories.length > 1) {
      setSelectedCategoryId(skillCategories[0].id)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills & Expertise</CardTitle>
        <CardDescription>Add your skills to help us match you with relevant job opportunities</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategoryId === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategoryId(category.id)}
              >
                {category.name}
              </Button>
            ))}
            <div className="flex items-center gap-2">
              <Input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="New category"
                className="h-9 w-40"
              />
              <Button size="sm" variant="outline" onClick={handleAddCategory}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {skillCategories.map((category) => (
            <div key={category.id} className={selectedCategoryId === category.id ? "block" : "hidden"}>
              <div className="flex items-center justify-between mb-2">
                <Label>{category.name}</Label>
                {skillCategories.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveCategory(category.id)}
                    className="h-8 px-2 text-destructive hover:text-destructive"
                  >
                    Remove Category
                  </Button>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm">
                    {skill}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-1 h-4 w-4"
                      onClick={() => handleRemoveSkill(category.id, skill)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add skill"
                    className="h-8 w-40"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleAddSkill()
                      }
                    }}
                  />
                  <Button size="sm" variant="outline" onClick={handleAddSkill}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <Label>Skill Proficiency</Label>
            <p className="text-sm text-muted-foreground mt-1">
              Drag skills to reorder them by proficiency level (most proficient at the top)
            </p>
          </div>
          <div className="rounded-lg border p-4 text-center text-sm text-muted-foreground">
            Drag and drop functionality will be implemented in a future update
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

