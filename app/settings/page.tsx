'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Settings() {
    const [overrideEnabled, setOverrideEnabled] = useState(true);

    return (
        <div className="flex text-white">
            <Sidebar />
            <main className="flex-1 lg:pl-80 min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
                <div className="w-full max-w-4xl relative z-10">
                    <div className="mb-12 border-l-4 border-neonPink pl-6 py-2 bg-neonPink/5">
                        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white leading-none">
                            SETTINGS // <span className="text-neonPink">SYSTEM_OVERRIDE</span>
                        </h1>
                        <p className="font-mono text-[10px] text-white/40 tracking-[0.4em] uppercase mt-2 italic underline decoration-neonPink/30">CORE_CONFIGURATION_ACCESS_LEVEL_05</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex flex-col gap-6">
                            <div className="bg-black/90 border border-toxicGreen/20 p-6 font-mono text-xs text-toxicGreen space-y-2 h-72 overflow-y-auto shadow-[0_0_30px_rgba(215,255,197,0.05)] relative group">
                                <div className="absolute top-2 right-4 text-[8px] opacity-30 animate-pulse">TERMINAL_ACTIVE</div>
                                <p>&gt; INITIATING SYSTEM_OVERRIDE...</p>
                                <p>&gt; FETCHING DRIVER_DATA: <span className="text-white">DK_SHIBUYA</span></p>
                                <p>&gt; ASSET_LOAD: <span className="text-neonPink">S15_SILVIA_SPEC_R</span></p>
                                <p>&gt; TELEMETRY: <span className="text-neonPink">STANDBY</span></p>
                                <p className="animate-pulse">&gt; _</p>
                            </div>
                            <div className="p-6 bg-white/2 border border-white/5 space-y-4">
                                <h3 className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">Acoustic_Link</h3>
                                <div className="flex justify-between items-center group">
                                    <span className="text-xs font-mono text-white/80 lowercase">Engine Rev Simulation</span>
                                    <div className="w-12 h-6 bg-toxicGreen/10 border border-toxicGreen/30 relative cursor-pointer" onClick={() => setOverrideEnabled(!overrideEnabled)}>
                                        <div className={`absolute top-1 left-1 bottom-1 w-4 transition-all duration-300 ${overrideEnabled ? 'left-6 bg-toxicGreen shadow-[0_0_10px_#D7FFC5]' : 'bg-white/20'}`}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center opacity-40 grayscale group">
                                    <span className="text-xs font-mono text-white/80 lowercase">Tire Squeal Response</span>
                                    <div className="w-12 h-6 bg-white/5 border border-white/10 relative"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Driver_Profile</span>
                                    <span className="text-sm font-black italic text-white uppercase tracking-wider">SHB-9920-EXT</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Vehicle_Config</span>
                                    <span className="text-sm font-black italic text-white uppercase tracking-wider">MANUAL_OVERRIDE</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Session_Time</span>
                                    <span className="text-sm font-black italic text-toxicGreen uppercase tracking-wider tabular-nums">04:12:44</span>
                                </div>
                            </div>
                            <div className="mt-auto p-8 border-2 border-dashed border-red-900/40 bg-red-950/10 group hover:border-red-600 transition-colors">
                                <h4 className="text-red-600 font-black italic uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">warning</span>
                                    DATA_PURGE
                                </h4>
                                <button className="w-full py-4 bg-red-600/10 border border-red-600/40 text-red-600 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-red-600 hover:text-white transition-all">
                                    INITIATE_OVERWRITE_001
                                </button>
                            </div>
                            <div className="flex justify-between items-center text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                                <span>CORE_TEMP: OPTIMAL</span>
                                <span>v0.8.4-BETA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
