import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, FileText, User, Settings, Bell, BookMarked, ArrowRight } from "lucide-react"

export default function HelpPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Help Center</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Find answers to your questions and learn how to get the most out of JobScraperAI
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search for help..." className="pl-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Topics</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">Quick answers to common questions</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Resume Upload</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    Learn how to upload and manage your resume, supported file formats, and troubleshooting tips.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href="/help/resume-upload">
                    <Button variant="ghost" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-primary" />
                    <CardTitle>Account Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    How to update your profile, change your password, and manage your subscription settings.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href="/help/account-management">
                    <Button variant="ghost" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Search className="h-5 w-5 text-primary" />
                    <CardTitle>Job Search</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    Tips for using filters, saving searches, and getting the most relevant job recommendations.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href="/help/job-search">
                    <Button variant="ghost" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <CardTitle>Notifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    How to set up and customize job alerts, email preferences, and notification settings.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href="/help/notifications">
                    <Button variant="ghost" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BookMarked className="h-5 w-5 text-primary" />
                    <CardTitle>Saved Jobs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    How to save jobs, organize your saved listings, and track application status.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href="/help/saved-jobs">
                    <Button variant="ghost" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <CardTitle>Billing & Subscription</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    Information about payment methods, subscription plans, and managing your billing.
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href="/help/billing">
                    <Button variant="ghost" className="p-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">Quick answers to common questions</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How does JobScraperAI match me with jobs?</h3>
                <p className="text-muted-foreground">
                  Our algorithm analyzes your resume and profile to extract your skills, experience, and preferences. It
                  then compares this information with job listings from multiple sources to find the most relevant
                  matches for you.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How often are new jobs added to the platform?</h3>
                <p className="text-muted-foreground">
                  We scrape job boards multiple times daily to ensure you have access to the latest opportunities. The
                  frequency may vary depending on your subscription plan.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I use JobScraperAI on mobile devices?</h3>
                <p className="text-muted-foreground">
                  Yes, JobScraperAI is fully responsive and works on all devices including smartphones and tablets. We
                  also offer mobile apps for iOS and Android for a more optimized experience.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do I cancel my subscription?</h3>
                <p className="text-muted-foreground">
                  You can cancel your subscription at any time from your account settings. Navigate to Settings >
                  Billing & Subscription > Cancel Subscription. You'll continue to have access to your plan until the
                  end of your current billing period.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is my personal information secure?</h3>
                <p className="text-muted-foreground">
                  Yes, we take data security very seriously. All personal information is encrypted and stored securely.
                  We never share your information with third parties without your explicit consent. You can review our
                  Privacy Policy for more details.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/help/all-faqs">
                <Button variant="outline">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Still Need Help?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">Our support team is here to assist you</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg">Contact Support</Button>
                </Link>
                <Link href="/help/live-chat">
                  <Button size="lg" variant="outline">
                    Live Chat
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">Support hours: Monday-Friday, 9am-6pm EST</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

