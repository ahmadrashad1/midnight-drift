import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Hero colors
                neonPink: '#ff007f',
                toxicGreen: '#D7FFC5',
                midnightBlack: '#0a0a0a',

                // Stitch Design System colors
                "on-surface": "#e5e2e1",
                "on-primary": "#65002e",
                "surface-container": "#201f1f",
                "on-error": "#690005",
                "on-error-container": "#ffdad6",
                "on-primary-container": "#590028",
                "secondary-container": "#2ff801",
                "on-secondary-fixed": "#022100",
                "secondary-fixed-dim": "#2ae500",
                "surface-bright": "#393939",
                "inverse-on-surface": "#313030",
                "tertiary-container": "#00a1a1",
                "surface-container-low": "#1c1b1b",
                "surface-dim": "#131313",
                "on-tertiary-container": "#002f2f",
                "tertiary-fixed": "#00fbfb",
                "on-tertiary-fixed": "#002020",
                "outline": "#ac878f",
                "on-secondary-container": "#0f6d00",
                "surface-container-high": "#2a2a2a",
                "primary-container": "#ff4a8d",
                "on-background": "#e5e2e1",
                "on-secondary": "#053900",
                "inverse-primary": "#ba005b",
                "inverse-surface": "#e5e2e1",
                "on-primary-fixed-variant": "#8f0044",
                "background": "#131313",
                "error": "#ffb4ab",
                "on-tertiary-fixed-variant": "#004f4f",
                "secondary": "#d7ffc5",
                "primary-fixed-dim": "#ffb1c4",
                "on-surface-variant": "#e5bcc5",
                "surface-tint": "#ffb1c4",
                "outline-variant": "#5c3f46",
                "surface-container-lowest": "#0e0e0e",
                "error-container": "#93000a",
                "on-secondary-fixed-variant": "#095300",
                "primary": "#ffb1c4",
                "on-tertiary": "#003737",
                "primary-fixed": "#ffd9e1",
                "surface-container-highest": "#353534",
                "on-primary-fixed": "#3f001a",
                "tertiary": "#00dddd",
                "secondary-fixed": "#79ff5b",
                "surface": "#131313",
                "tertiary-fixed-dim": "#00dddd",
                "surface-variant": "#353534"
            },
            fontFamily: {
                space: ['var(--font-space)', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
                headline: ['var(--font-space)', 'sans-serif'],
                body: ['var(--font-inter)', 'sans-serif'],
                label: ['var(--font-space)', 'sans-serif'],
            },
            animation: {
                'glitch': 'glitch 1s infinite linear alternate-reverse',
                'flicker': 'flicker 2s infinite',
                'scanline': 'scanline 10s linear infinite',
                'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
                'engine-shake': 'engineShake 0.1s infinite',
            },
            keyframes: {
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                },
                flicker: {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: "1", textShadow: '0 0 10px #ff007f' },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: "0.4", textShadow: 'none' },
                },
                scanline: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                slowZoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                engineShake: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(1px, -1px)' },
                    '50%': { transform: 'translate(-1px, 1px)' },
                    '75%': { transform: 'translate(1px, 1px)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
