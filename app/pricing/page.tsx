import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function PricingPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your job search needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Free Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">Free</CardTitle>
                  <CardDescription>Get started with basic job matching</CardDescription>
                  <div className="mt-4 flex items-baseline text-primary">
                    <span className="text-4xl font-extrabold tracking-tight">$0</span>
                    <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Resume parsing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic job matching</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>10 job recommendations per week</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Email notifications</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup" className="w-full">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit mx-auto mb-2">
                    Most Popular
                  </div>
                  <CardTitle className="text-xl">Pro</CardTitle>
                  <CardDescription>Advanced features for serious job seekers</CardDescription>
                  <div className="mt-4 flex items-baseline text-primary">
                    <span className="text-4xl font-extrabold tracking-tight">$19</span>
                    <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced job matching</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited job recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Real-time job alerts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Application tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>One-click apply</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup" className="w-full">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Premium Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">Premium</CardTitle>
                  <CardDescription>Maximum features for career advancement</CardDescription>
                  <div className="mt-4 flex items-baseline text-primary">
                    <span className="text-4xl font-extrabold tracking-tight">$39</span>
                    <span className="ml-1 text-sm font-medium text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority job matching</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Resume optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Interview preparation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Salary insights</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Career coaching (1 session/month)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup" className="w-full">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardFooter>
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
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our pricing and features
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I change plans later?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing
                  cycle.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is there a free trial for paid plans?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 14-day free trial for both our Pro and Premium plans. No credit card required to
                  start.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How often are new jobs added?</h3>
                <p className="text-muted-foreground">
                  We scrape job boards multiple times daily to ensure you have access to the latest opportunities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I cancel my subscription anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll continue to have access to your plan until
                  the end of your current billing period.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer discounts for annual billing?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 20% discount when you choose annual billing for any of our paid plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Find Your Perfect Job?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Start your job search journey with JobScraperAI today
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

