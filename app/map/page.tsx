'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function EventMap() {
    const [selectedPin, setSelectedPin] = useState('DAIKOKU');

    const locations = [
        { id: 'DAIKOKU', name: 'DAIKOKU FUTO', status: 'ACTIVE', drifters: 142, coords: '35.4419° N, 139.6789° E', desc: 'Typical underground weekend gathering. High police presence after 1:00 AM.' },
        { id: 'SHUTO', name: 'SHUTO EXPRESSWAY', status: 'ONGOING', drifters: 28, coords: 'C1 INNER LOOP', desc: 'High-speed trials. Avoid the Wangan interchange due to construction.' },
        { id: 'HAKONE', name: 'HAKONE TURNPIKE', status: 'PLANNED', drifters: 0, coords: 'MT. HAKONE', desc: 'Technical downhill session starting tomorrow at 02:00.' }
    ];

    return (
        <div className="flex text-white">
            <Sidebar />
            <main className="flex-1 lg:pl-80 min-h-screen pt-24 pb-12 px-6 flex flex-col items-center overflow-x-hidden">
                <div className="w-full max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-4 mb-8">
                        <h1 className="text-4xl font-black italic tracking-tighter uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            EVENT_MAP // <span className="text-neonPink">TOKYO_OVERRIDE</span>
                        </h1>
                        <p className="font-mono text-[10px] text-toxicGreen tracking-[0.3em] uppercase">SYSTEM_TIME: 02:24:11 // NIGHT_LEVEL_05</p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        {/* MAP DISPLAY AREA */}
                        <div className="xl:col-span-2 relative aspect-[16/9] w-full bg-midnightBlack border border-white/5 overflow-hidden rounded-sm group shadow-2xl">
                            <div className="absolute inset-0 opacity-40 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDRBvEqvG3-L8uV_N_A7G7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7')] bg-cover bg-center grayscale contrast-125"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            {/* PINS */}
                            <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2">
                                <button
                                    onClick={() => setSelectedPin('DAIKOKU')}
                                    className={`w-6 h-6 rounded-full border-2 border-neonPink flex items-center justify-center transition-all duration-300 ${selectedPin === 'DAIKOKU' ? 'bg-neonPink scale-125 shadow-[0_0_20px_#ff007f]' : 'bg-transparent hover:bg-neonPink/20'}`}
                                >
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                                </button>
                                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] text-neonPink uppercase tracking-widest bg-black/80 px-1">DAIKOKU_PA</span>
                            </div>

                            <div className="absolute top-[25%] left-[45%] -translate-x-1/2 -translate-y-1/2 opacity-60">
                                <button
                                    onClick={() => setSelectedPin('SHUTO')}
                                    className={`w-4 h-4 rounded-full border-2 border-toxicGreen flex items-center justify-center transition-all duration-300 ${selectedPin === 'SHUTO' ? 'bg-toxicGreen scale-125 shadow-[0_0_20px_#D7FFC5]' : 'bg-transparent hover:bg-toxicGreen/20'}`}
                                >
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                </button>
                            </div>

                            <div className="absolute bottom-6 left-6 font-mono text-[10px] text-toxicGreen space-y-1 bg-black/40 p-2 backdrop-blur-md">
                                <p>LAT: 35.6895 // LONG: 139.6917</p>
                                <p className="text-white/40">SCANNING_ACTIVE...</p>
                            </div>
                        </div>

                        {/* EVENT LISTSIDEBAR */}
                        <div className="flex flex-col gap-4">
                            {locations.map((loc) => (
                                <div
                                    key={loc.id}
                                    onClick={() => setSelectedPin(loc.id)}
                                    className={`p-6 border transition-all duration-500 cursor-pointer relative overflow-hidden group ${selectedPin === loc.id ? 'border-neonPink bg-neonPink/5 translate-x-1' : 'border-white/5 bg-white/2 hover:border-white/20'}`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className={`text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ${loc.status === 'ACTIVE' ? 'bg-toxicGreen text-black' : 'bg-white/10 text-white/40'}`}>
                                                {loc.status}
                                            </span>
                                            <h3 className="text-xl font-black italic uppercase mt-2 tracking-tighter text-white">{loc.name}</h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-mono text-white/30 uppercase">{loc.drifters} DRIFTERS</p>
                                        </div>
                                    </div>
                                    <p className="font-mono text-[10px] text-white/50 lowercase leading-relaxed mb-4">{loc.desc}</p>
                                    <div className="flex justify-between items-center text-[9px] font-mono text-neonPink tracking-widest uppercase">
                                        <span>{loc.coords}</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                                    </div>
                                    {selectedPin === loc.id && (
                                        <div className="absolute -right-12 -top-12 w-24 h-24 bg-neonPink/20 blur-3xl rounded-full"></div>
                                    )}
                                </div>
                            ))}
                            <div className="mt-auto p-4 border border-toxicGreen/10 bg-toxicGreen/5">
                                <p className="font-mono text-[9px] text-toxicGreen/60 uppercase tracking-widest mb-2">Network Hub Status</p>
                                <div className="h-1 w-full bg-white/5">
                                    <div className="h-full w-2/3 bg-toxicGreen shadow-[0_0_10px_#D7FFC5] animate-pulse"></div>
                                </div>
                                <p className="font-mono text-[8px] text-toxicGreen/40 mt-2">ENCRYPTED_TUNNEL: ESTABLISHED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
