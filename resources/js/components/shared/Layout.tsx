import React from "react"
import { Header, Footer } from "./"

interface LayoutAppProps {
    children: React.ReactNode
}

export const LayoutApp = ({ children }: LayoutAppProps) => {
    return (
        <>
            <main className="container mx-auto h-full px-4 sm:px-6 relative z-10 sm:border-x-2 border-border border-dashed">
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}
