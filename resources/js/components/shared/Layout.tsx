import React from "react"
import { Header, Footer } from "./"

interface LayoutAppProps {
    children: React.ReactNode
    className: string
}

export const LayoutApp = ({ children, className }: LayoutAppProps) => {
    return (
        <>
            <main className={`container mx-auto h-full px-4 sm:px-6 relative z-10 sm:border-x-2 border-border border-dashed shadow shadow-zinc-50/50 dark:shadow-zinc-950/50 ${className}`}>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}
