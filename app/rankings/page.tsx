'use client';

import Sidebar from '../components/Sidebar';

export default function CrewRankings() {
    const crews = [
        { rank: '01', name: 'MIDNIGHT_KINGS', tag: 'MKNG', score: '1,420,950', pilots: 12, drift_stars: 45, status: 'DOMINATING' },
        { rank: '02', name: 'TOUGE_MONSTERS', tag: 'TGMN', score: '1,385,220', pilots: 18, drift_stars: 38, status: 'RISING' },
        { rank: '03', name: 'SHIBUYA_SYNDICATE', tag: 'SHSY', score: '1,120,400', pilots: 10, drift_stars: 22, status: 'STABLE' },
        { rank: '04', name: 'WANGAN_WARRIORS', tag: 'WWRI', score: '950,230', pilots: 15, drift_stars: 15, status: 'STABLE' },
        { rank: '05', name: 'NEON_DRIFTERS', tag: 'NDFT', score: '820,110', pilots: 8, drift_stars: 10, status: 'RELEGATED' }
    ];

    return (
        <div className="flex text-white">
            <Sidebar />
            <main className="flex-1 lg:pl-80 min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
                <div className="w-full max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b-4 border-double border-white/20 pb-4">
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white">
                            CREW_RANKINGS. <span className="text-neonPink">S04</span>
                        </h1>
                        <p className="font-mono text-[11px] text-toxicGreen tracking-[0.4em] uppercase">Global_Competitive_Circuit // Tokyo_District</p>
                    </div>

                    <div className="bg-white/2 border border-white/5 backdrop-blur-sm shadow-2xl overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="px-6 py-4 text-left font-mono text-[10px] text-white/40 uppercase tracking-widest">Rank</th>
                                    <th className="px-6 py-4 text-left font-mono text-[10px] text-white/40 uppercase tracking-widest">Crew Name</th>
                                    <th className="px-6 py-4 text-left font-mono text-[10px] text-white/40 uppercase tracking-widest">Score (RP)</th>
                                    <th className="px-6 py-4 text-left font-mono text-[10px] text-white/40 uppercase tracking-widest">Pilots</th>
                                    <th className="px-6 py-4 text-left font-mono text-[10px] text-white/40 uppercase tracking-widest">Drift Stars</th>
                                    <th className="px-6 py-4 text-right font-mono text-[10px] text-white/40 uppercase tracking-widest">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {crews.map((crew, i) => (
                                    <tr key={crew.rank} className={`border-b border-white/5 hover:bg-white/5 transition-colors group cursor-default ${i === 2 ? 'bg-neonPink/5' : ''}`}>
                                        <td className="px-6 py-6 text-3xl font-black italic text-white/20 group-hover:text-neonPink transition-colors">{crew.rank}</td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 border flex items-center justify-center font-black italic text-xs ${i === 0 ? 'bg-neonPink border-neonPink text-white' : 'border-white/20'}`}>
                                                    {crew.tag}
                                                </div>
                                                <span className="text-lg font-black italic uppercase tracking-wider group-hover:text-white transition-colors">{crew.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 font-mono text-xl text-white/80">{crew.score}</td>
                                        <td className="px-6 py-6 font-mono text-white/40">{crew.pilots}</td>
                                        <td className="px-6 py-6">
                                            <div className="flex gap-1">
                                                {[1, 2, 3].map(s => (
                                                    <span key={s} className={`material-symbols-outlined text-sm ${s * 10 <= crew.drift_stars ? 'text-neonPink' : 'text-white/10'}`}>star</span>
                                                ))}
                                                <span className="ml-2 font-mono text-[10px] text-white/30">{crew.drift_stars}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-right">
                                            <span className={`text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1 border rounded-sm ${crew.status === 'DOMINATING' ? 'border-neonPink text-neonPink animate-pulse' : 'border-white/10 text-white/30'}`}>
                                                {crew.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row gap-8">
                        <div className="flex-1 p-6 border border-white/10 bg-black/40 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-toxicGreen/5 blur-2xl"></div>
                            <h4 className="font-mono text-[10px] text-toxicGreen tracking-[0.3em] uppercase mb-4">Live_Circuit_Telemetry</h4>
                            <div className="space-y-3 font-mono text-[9px] text-white/40 lowercase italic">
                                <p className="border-l border-neonPink pl-2">MIDNIGHT_KINGS detected at Wangan Interchange_ Sector_04.</p>
                                <p className="border-l border-white/20 pl-2 opacity-50">TOUGE_MONSTERS initiated downhill run_ Mt_Haruna.</p>
                                <p className="border-l border-white/20 pl-2 opacity-50">SHIBUYA_SYNDICATE telemetry synchronization failed_ Sector_01.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-64 p-6 bg-neonPink flex flex-col justify-center items-center text-center">
                            <p className="text-white text-xs font-black italic uppercase tracking-widest mb-2 shadow-sm">REGISTER_CREW</p>
                            <div className="w-full h-[1px] bg-white opacity-20 mb-4"></div>
                            <p className="text-white/70 text-[8px] font-mono lowercase tracking-tighter">Application for Season 05 pending_ System override required.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
