'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'COMMUNITY', href: '/community' },
        { name: 'PILOTS', href: '/profile' },
        { name: 'EVENTS', href: '/calendar' },
        { name: 'GARAGE', href: '/garage' },
        { name: 'MAP', href: '/map' },
        { name: 'RANKINGS', href: '/rankings' },
        { name: 'SETTINGS', href: '/settings' },
    ];

    return (
        <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center mix-blend-difference pointer-events-none">
            <Link href="/" className="pointer-events-auto group">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-black text-xl italic group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        P_U
                    </div>
                    <div className="leading-none hidden sm:block">
                        <span className="text-xl md:text-2xl font-black italic tracking-tighter text-[#E5E2E1] uppercase">PINDI_UNDERGROUND</span>
                        <div className="text-[8px] font-mono tracking-[0.3em] text-neonPink uppercase">Underground</div>
                    </div>
                </div>
            </Link>

            <div className="flex gap-4 md:gap-6 items-center pointer-events-auto">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-[9px] md:text-[10px] font-mono tracking-[0.1em] hover:text-neonPink transition-colors uppercase relative py-1 ${pathname === link.href ? 'text-neonPink' : 'text-white'}`}
                    >
                        {link.name}
                        {pathname === link.href && (
                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-neonPink animate-glitch-border"></span>
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
