'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Garage() {
    const [activeTab, setActiveTab] = useState('POWER');

    const specs = {
        POWER: [
            { label: 'BLOCK', value: 'SR20DET 2.2L STROKER' },
            { label: 'TURBO', value: 'GARRETT G30-660' },
            { label: 'OUTPUT', value: '540 WHP' },
            { label: 'BOOST', value: '2.4 BAR' },
        ],
        CHASSIS: [
            { label: 'COILOVERS', value: 'KW CLUBSPORT V3' },
            { label: 'ANGLE KIT', value: 'WISEFAB V2 LOCK' },
            { label: 'RUBBER', value: 'VALINO PERGEA 08RS' },
            { label: 'BRAKES', value: 'ENDLESS 6-POT' },
        ],
        AERO: [
            { label: 'BODY KIT', value: 'VERTEX EDGE WIDEBODY' },
            { label: 'REAR WING', value: 'BIG COUNTRY LABS 1850' },
            { label: 'DIFFUSER', value: 'CUSTOM CARBON REAR' },
            { label: 'HOOD', value: 'D-MAX VENTED CARBON' },
        ]
    };

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 lg:pl-80 min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
                {/* BACKGROUND DECOR */}
                <div className="fixed inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonPink/20 rounded-full blur-[120px]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asphalt-dark.png')] opacity-50"></div>
                </div>

                <div className="w-full max-w-6xl relative z-10">
                    {/* HEADER */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-2 py-1 bg-neonPink text-white text-[10px] font-black uppercase tracking-widest">RANK 01</span>
                                <span className="text-toxicGreen font-mono text-[10px] tracking-[0.3em] uppercase underline decoration-toxicGreen/30">SHIBUYA DISTRICT SPEC</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white">S15 SILVIA <span className="text-neonPink">"NIGHTFALL"</span></h1>
                        </div>
                        <div className="text-right">
                            <p className="font-mono text-[10px] text-white/40 tracking-[0.4em] uppercase mb-1">Telemetry Status</p>
                            <p className="font-mono text-toxicGreen text-xs animate-pulse">● SYNCHRONIZED // EBISU_CIRCUIT</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* VEHICLE VISUAL REPRESENTATION */}
                        <div className="relative aspect-video w-full bg-midnightBlack border border-white/5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-neonPink/5 to-transparent"></div>
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqA10Z_83nCHvG1X8i7vXGv7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7YvH7"
                                alt="Vehicle Silhouette"
                                className="w-full h-full object-contain opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                            />
                            <div className="absolute top-4 left-4 font-mono text-[8px] text-white/30 space-y-1">
                                <p>[X_COORD: 142.99]</p>
                                <p>[Y_COORD: 35.68]</p>
                                <p>[Z_COORD: 0.00]</p>
                            </div>
                            <div className="absolute bottom-4 right-4 flex flex-col items-end">
                                <span className="text-neonPink text-4xl font-black italic">540</span>
                                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">WHP_LIMITER</span>
                            </div>
                            <div className="absolute inset-y-0 left-0 w-[1px] bg-neonPink/40 shadow-[0_0_10px_#ff007f] animate-scanline-horizontal"></div>
                        </div>

                        {/* SPECIFICATION SELECTOR */}
                        <div className="space-y-8">
                            <div className="flex gap-4 border-b border-white/10">
                                {Object.keys(specs).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 px-2 text-xs font-mono tracking-widest transition-all relative ${activeTab === tab ? 'text-neonPink' : 'text-white/40 hover:text-white'}`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neonPink shadow-[0_0_10px_#ff007f]"></span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {specs[activeTab as keyof typeof specs].map((spec, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-4 hover:border-neonPink/30 transition-colors group">
                                        <p className="text-[9px] font-mono text-toxicGreen/60 uppercase tracking-widest mb-1">{spec.label}</p>
                                        <p className="text-sm font-black italic uppercase tracking-wider group-hover:text-neonPink text-white transition-colors">{spec.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* TUNING LOGS */}
                            <div className="pt-8">
                                <h3 className="text-xs font-mono text-white/60 tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-toxicGreen animate-pulse"></span>
                                    TUNING_LOGS_v0.8.4
                                </h3>
                                <div className="space-y-2 font-mono text-[10px] text-white/30 lowercase">
                                    <p className="border-l-2 border-neonPink pl-3 py-1 bg-neonPink/5">Initializing telemetry synchronization with Ebisu Circuit ECU...</p>
                                    <p className="pl-3 py-1 hover:text-white/60 transition-colors cursor-default">Adjusting boost mapping for high-altitude technical sectors.</p>
                                    <p className="pl-3 py-1 hover:text-white/60 transition-colors cursor-default">Monitoring rubber degradation on Sector 3 hairpin entry.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM NAV / FOOTER */}
                    <div className="mt-20 flex justify-between items-center text-[9px] font-mono text-white/20 uppercase tracking-[0.5em]">
                        <span>BUILD_ID: 99x-SILVIA-S15</span>
                        <span>SYSTEM_VERSION: 1.0.2</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
