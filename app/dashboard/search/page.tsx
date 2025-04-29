import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SlidersHorizontal } from "lucide-react"

export default function SearchPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Job Search</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[300px_1fr]">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Refine your job search</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <Input id="search" placeholder="Search for jobs..." />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

