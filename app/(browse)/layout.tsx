import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'
import AppSidebar from './_components/App.sidebar'


interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    )
}

export default Layout
