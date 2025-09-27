import React from "react"
import { Header, Footer } from "./"

interface LayoutAppProps {
    children: React.ReactNode
}

export const LayoutApp = ({ children }: LayoutAppProps) => {
    return (
        <>
            <main className="container mx-auto px-4 relative z-10">
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}
