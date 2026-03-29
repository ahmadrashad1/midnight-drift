'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: 'DRIFT_FEED', href: '/community', icon: 'speed' },
        { name: 'THE_GARAGE', href: '/garage', icon: 'directions_car' },
        { name: 'EVENT_MAP', href: '/map', icon: 'map' },
        { name: 'CREW_RANKINGS', href: '/rankings', icon: 'leaderboard' },
        { name: 'SETTINGS', href: '/settings', icon: 'settings' },
    ];

    return (
        <>
            {/* DESKTOP SIDEBAR */}
            <aside className="fixed left-0 top-0 h-full w-80 z-[90] p-6 pt-24 flex-col bg-[#0E0E0E] border-r-4 border-toxicGreen/10 hidden lg:flex">
                <div className="mb-12">
                    <h2 className="text-toxicGreen font-black italic text-2xl tracking-widest uppercase">SYSTEM_OVERRIDE</h2>
                </div>
                <nav className="flex flex-col space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3 transition-all group ${isActive
                                    ? 'bg-toxicGreen text-[#131313] font-black italic scale-105'
                                    : 'text-[#E5E2E1] opacity-70 hover:bg-[#1C1B1B] hover:pl-6'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                <span className="uppercase text-sm tracking-widest font-headline">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
                <div className="mt-auto pt-8">
                    <div className="bg-[#1C1B1B] p-4 border-b-2 border-neonPink/30">
                        <p className="text-[10px] text-neonPink/60 mb-2 font-mono uppercase tracking-widest">CURRENT_OPERATOR</p>
                        <p className="font-black italic text-white uppercase tracking-tighter">GHOST_RUNNER_99</p>
                    </div>
                </div>
            </aside>

            {/* MOBILE BOTTOM NAVIGATION */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[110] bg-[#0E0E0E] flex justify-around items-center h-16 border-t border-white/10 px-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex flex-col items-center justify-center transition-all ${isActive ? 'text-toxicGreen' : 'text-[#E5E2E1] opacity-50'
                                }`}
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="text-[8px] uppercase tracking-widest font-headline mt-1">
                                {item.name.split('_')[0]}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
