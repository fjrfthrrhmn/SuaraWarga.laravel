import React from 'react';
import { Footer, Header } from './';

interface LayoutAppProps {
    children: React.ReactNode;
    className: string;
}

export const LayoutApp = ({ children, className }: LayoutAppProps) => {
    return (
        <>
            <main
                className={`relative z-10 container mx-auto h-full border-dashed border-border px-4 shadow shadow-zinc-50/50 sm:border-x-2 sm:px-6 dark:shadow-zinc-950/50 ${className}`}
            >
                <Header />
                {children}
                <Footer />
            </main>
        </>
    );
};
