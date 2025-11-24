'use client'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Braces, Bug, CircleGauge, GitCompareArrows, Home, Instagram, Rss, Send, Terminal, UserPen } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function AppSidebar() {
  const pathName = usePathname()
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                navbar_items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathName === item.href}>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup >
        <SidebarGroup>
          <SidebarGroupLabel>Startups</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                startup_items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathName === item.href}>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar

const navbar_items = [
  {
    title: 'Home',
    href: '/',
    icon: Home
  },
  {
    title: 'Courses',
    href: '/courses',
    icon: Braces
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: Terminal
  },
  {
    title: 'Source codes',
    href: '/source-codes',
    icon: Bug
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: CircleGauge
  },
]


const startup_items = [
  {
    title: "Blogs",
    href: '/blogs',
    icon: Rss
  },
  {
    title: "Resume builder",
    href: '/resume-builder',
    icon: UserPen
  },
  {
    title: "Beautiful code",
    href: '/beautiful-code',
    icon: GitCompareArrows
  },
]


const social_items = [
  {
    title: 'Telegram',
    href: 'https://t.me/HSRasul',
    icon: Send
  },
  {
    title: 'Instagramm',
    href: 'https://www.instagram.com/hojiakbarrs/',
    icon: Instagram
  },
  {
    title: 'LinkdIn',
    href: 'https://www.instagram.com/hojiakbarrs/',
    icon: Instagram
  },
]
