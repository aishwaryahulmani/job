"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Award, Plus, Trash2 } from "lucide-react"
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
const initialCertifications = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "2022-03",
    expirationDate: "2025-03",
    hasExpiration: true,
    credentialId: "AWS-123456",
    credentialURL: "https://aws.amazon.com/verification",
  },
  {
    id: "2",
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    issueDate: "2021-06",
    expirationDate: "",
    hasExpiration: false,
    credentialId: "PSM-123456",
    credentialURL: "https://www.scrum.org/certificates",
  },
]

export function ProfileCertifications() {
  const [certifications, setCertifications] = useState(initialCertifications)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newCertification, setNewCertification] = useState({
    id: "",
    name: "",
    issuer: "",
    issueDate: "",
    expirationDate: "",
    hasExpiration: false,
    credentialId: "",
    credentialURL: "",
  })

  const handleAddCertification = () => {
    const certificationWithId = {
      ...newCertification,
      id: Date.now().toString(),
    }
    setCertifications([certificationWithId, ...certifications])
    setNewCertification({
      id: "",
      name: "",
      issuer: "",
      issueDate: "",
      expirationDate: "",
      hasExpiration: false,
      credentialId: "",
      credentialURL: "",
    })
    setIsAddDialogOpen(false)
  }

  const handleDeleteCertification = (id: string) => {
    setCertifications(certifications.filter((cert) => cert.id !== id))
  }

  const handleHasExpirationChange = (checked: boolean) => {
    setNewCertification({
      ...newCertification,
      hasExpiration: checked,
      expirationDate: checked ? newCertification.expirationDate : "",
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Certifications & Licenses</CardTitle>
          <CardDescription>Add professional certifications to showcase your expertise</CardDescription>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Certification
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Add Certification</DialogTitle>
              <DialogDescription>Add details about your professional certifications and licenses</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="cert-name">Certification Name</Label>
                <Input
                  id="cert-name"
                  value={newCertification.name}
                  onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
                  placeholder="e.g. AWS Certified Solutions Architect"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="issuer">Issuing Organization</Label>
                <Input
                  id="issuer"
                  value={newCertification.issuer}
                  onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
                  placeholder="e.g. Amazon Web Services"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="issue-date">Issue Date</Label>
                  <Input
                    id="issue-date"
                    type="month"
                    value={newCertification.issueDate}
                    onChange={(e) => setNewCertification({ ...newCertification, issueDate: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="expiration-date">Expiration Date</Label>
                  <Input
                    id="expiration-date"
                    type="month"
                    value={newCertification.expirationDate}
                    onChange={(e) => setNewCertification({ ...newCertification, expirationDate: e.target.value })}
                    disabled={!newCertification.hasExpiration}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="has-expiration"
                  checked={newCertification.hasExpiration}
                  onCheckedChange={handleHasExpirationChange}
                />
                <Label htmlFor="has-expiration">This certification expires</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="credential-id">Credential ID</Label>
                <Input
                  id="credential-id"
                  value={newCertification.credentialId}
                  onChange={(e) => setNewCertification({ ...newCertification, credentialId: e.target.value })}
                  placeholder="e.g. AWS-123456"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="credential-url">Credential URL</Label>
                <Input
                  id="credential-url"
                  value={newCertification.credentialURL}
                  onChange={(e) => setNewCertification({ ...newCertification, credentialURL: e.target.value })}
                  placeholder="e.g. https://aws.amazon.com/verification"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddCertification}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="space-y-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{cert.name}</h3>
                  <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                  <div className="text-sm text-muted-foreground">
                    Issued: {new Date(cert.issueDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    {cert.hasExpiration &&
                      cert.expirationDate &&
                      ` • Expires: ${new Date(cert.expirationDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}`}
                  </div>
                  {cert.credentialId && (
                    <div className="text-sm text-muted-foreground">Credential ID: {cert.credentialId}</div>
                  )}
                  {cert.credentialURL && (
                    <div className="mt-1">
                      <a
                        href={cert.credentialURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View Credential
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDeleteCertification(cert.id)}>
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

