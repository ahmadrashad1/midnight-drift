import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import BackgroundMusic from './components/BackgroundMusic';

const space = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space',
    display: 'swap',
});

const mono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'TOUGE_UNDERGROUND | Midnight Override',
    description: 'Where rubber meets rebellion. Join the global Touge network.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full dark">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
            </head>
            <body className={`${space.variable} ${mono.variable} ${inter.variable} font-space bg-midnightBlack text-white overflow-x-hidden selection:bg-neonPink selection:text-white`}>
                <div className="static-overlay"></div>
                <div className="scanline-overlay animate-scanline"></div>
                <Navigation />
                {children}
                <BackgroundMusic />
            </body>
        </html>
    );
}
