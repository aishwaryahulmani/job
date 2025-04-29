import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Upload, X } from "lucide-react"
import { ProfileEducation } from "@/components/profile-education"
import { ProfileExperience } from "@/components/profile-experience"
import { ProfileSkills } from "@/components/profile-skills"
import { ProfilePreferences } from "@/components/profile-preferences"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b sticky top-0 z-40 bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <Button>Save Changes</Button>
          </div>

          <Tabs defaultValue="personal" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="headline">Professional Headline</Label>
                    <Input id="headline" defaultValue="Senior Frontend Developer with 5+ years of experience" />
                    <p className="text-sm text-muted-foreground">
                      This will appear at the top of your profile and in search results
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="San Francisco, CA" />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <Input id="linkedin" defaultValue="https://linkedin.com/in/johndoe" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label htmlFor="github">GitHub Profile</Label>
                      <Input id="github" defaultValue="https://github.com/johndoe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio Website</Label>
                    <Input id="portfolio" defaultValue="https://johndoe.dev" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Summary</Label>
                    <Textarea
                      id="bio"
                      rows={6}
                      defaultValue="Experienced Frontend Developer with a passion for creating responsive and user-friendly web applications. Proficient in React, TypeScript, and modern frontend frameworks. Strong problem-solving skills and a track record of delivering high-quality code on time."
                    />
                    <p className="text-sm text-muted-foreground">
                      Briefly describe your professional background, skills, and career goals
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resume Tab */}
            <TabsContent value="resume">
              <Card>
                <CardHeader>
                  <CardTitle>Resume</CardTitle>
                  <CardDescription>Upload and manage your resume</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-dashed p-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-10 w-10 text-primary" />
                    </div>
                    <div className="space-y-1 text-center">
                      <p className="text-sm font-medium">Drag and drop your resume here</p>
                      <p className="text-xs text-muted-foreground">Supports PDF, DOCX, up to 5MB</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Browse Files
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Current Resume</h3>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-sm font-medium">John_Doe_Resume.pdf</p>
                          <p className="text-xs text-muted-foreground">Uploaded on May 15, 2023</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Resume Parsing Results</h3>
                    <div className="rounded-lg border p-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium">Skills Detected</h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {[
                              "React",
                              "TypeScript",
                              "JavaScript",
                              "HTML",
                              "CSS",
                              "Node.js",
                              "Redux",
                              "GraphQL",
                              "REST APIs",
                              "Webpack",
                            ].map((skill) => (
                              <div
                                key={skill}
                                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium">Experience Level</h4>
                          <p className="text-sm text-muted-foreground mt-1">Senior (5+ years)</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium">Education</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Bachelor of Science in Computer Science, Stanford University
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience">
              <ProfileExperience />
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <ProfileEducation />
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <ProfileSkills />
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences">
              <ProfilePreferences />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

