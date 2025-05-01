"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Settings, Search, Bell, BookMarked, BarChart } from "lucide-react"

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Profile",
    href: "/dashboard/profile",
    icon: FileText,
  },
  {
    title: "Job Search",
    href: "/search",
    icon: Search,
  },
  {
    title: "Saved Jobs",
    href: "/saved",
    icon: BookMarked,
  },
  // {
  //   title: "Notifications",
  //   href: "/dashboard/notifications",
  //   icon: Bell,
  // }
  // {
  //   title: "Analytics",
  //   href: "/dashboard/analytics",
  //   icon: BarChart,
  // },
  // {
  //   title: "Settings",
  //   href: "/dashboard/settings",
  //   icon: Settings,
  // },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 py-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}

