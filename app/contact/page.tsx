import { MainNav } from "@/components/main-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b sticky top-0 z-40 bg-background">
        <MainNav />
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We'd love to hear from you. Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">support@jobscraperai.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                \

