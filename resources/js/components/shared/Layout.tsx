import React from "react"
import { Header, Footer } from "./"

interface LayoutAppProps {
    children: React.ReactNode
}

export const LayoutApp = ({ children }: LayoutAppProps) => {
    return (
        <>
            <main className="container mx-auto h-dvh px-4 sm:px-6 relative z-10 sm:border-x border-border">
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}
