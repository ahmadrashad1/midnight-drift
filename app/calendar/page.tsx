import Sidebar from '../components/Sidebar';

export default function Calendar() {
    return (
        <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen pt-16">
            <div className="flex min-h-[calc(100vh-64px)]">
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 lg:pl-80 asphalt-texture p-6 lg:p-12 min-h-screen">
                    <header className="mb-12">
                        <div className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 font-mono text-xs mb-4">SYSTEM_LIVE // SIGNAL_STRENGTH_MAX</div>
                        <h2 className="text-6xl md:text-8xl font-headline font-black uppercase italic tracking-tighter text-on-surface leading-none">
                            PINDI <span className="text-primary tracking-normal">MEETS</span>
                        </h2>
                        <div className="mt-6 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                            <span className="shrink-0 bg-surface-container-high border border-outline-variant/20 px-4 py-2 text-xs font-mono uppercase tracking-widest text-secondary">FILTER: ALL_REGIONS</span>
                            <span className="shrink-0 bg-surface-container-low border border-outline-variant/20 px-4 py-2 text-xs font-mono uppercase tracking-widest text-on-surface/40">FILTER: DRIFT_ONLY</span>
                            <span className="shrink-0 bg-surface-container-low border border-outline-variant/20 px-4 py-2 text-xs font-mono uppercase tracking-widest text-on-surface/40">FILTER: PINDI_RUNS</span>
                        </div>
                    </header>

                    {/* Event List */}
                    <div className="grid grid-cols-1 gap-8 max-w-5xl">
                        {/* Event Card 1 */}
                        <article className="relative group bg-surface-container-lowest custom-clip border-l-4 border-primary-container overflow-hidden">
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKU6e8A_9gM8MQm84M2VdrGSgYyxFxBI5qfw4qsau5ZGY8hdQG2x5NEg0LNeztHj4W2YXu4qhOEUdHWOFvBQaAY3btru_LR_V1t9HeA03u__v6Wz5Acfcnx2fMWl8XRihwk9X_yqo3YJ4uvXDseOgmx5pkqf-C7FKPttZO8ehM7QbOrAv6x1e-G90ecF6qqhrRVokYBMwchdTYlVUef8TzRLq9q4OAkWpPtm8VEBS2Sk-KvzpRWM9RC-Wy306yIhgL_mnKR_HyVJYC" />
                                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
                            </div>
                            <div className="relative p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-secondary text-sm tracking-widest uppercase font-bold">THE_GATHERING // 24_OCT_02:00AM</span>
                                        <span className="h-px w-8 bg-secondary/30"></span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-headline font-black uppercase italic text-on-surface group-hover:text-primary transition-colors">MIDNIGHT_RUN</h3>
                                    <div className="flex items-center gap-2 text-secondary font-mono tracking-tighter">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <span className="uppercase">SECTOR_7_PARKING // TOKYO_BAY</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="bg-surface-container-lowest/80 backdrop-blur-md p-4 border border-outline-variant/20 flex flex-col items-end">
                                        <span className="text-[10px] font-mono text-on-surface/40 uppercase mb-1">T_MINUS_START</span>
                                        <div className="text-3xl font-headline font-black text-on-surface tracking-tighter">
                                            02<span className="text-primary">:</span>14<span className="text-primary">:</span>55
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full md:w-auto bg-transparent border-2 border-secondary/40 text-secondary hover:bg-secondary hover:text-surface px-8 py-3 font-headline font-bold uppercase transition-all tracking-widest">ENCRYPTED_RSVP</button>
                                </div>
                            </div>
                        </article>

                        {/* Event Card 2 */}
                        <article className="relative group bg-surface-container-lowest custom-clip border-l-4 border-tertiary overflow-hidden">
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVSLqTpior48P2FAXBY9ea_D-J4EO3_daLYXAkIR6UE_GIsykGI8O-dFysC7NOrS-qS2KYGHnmBiw-liPHNvwltbN558UzAHNJsRjfgHU2NMMoLNG8nSFFRRh47lzq6LEgiepvvTyHi4QIp3aTWZxa-spWUlVFlB4wWTBYN_YPrBom7XFWWOPMwidogT2fGExvio4KpESDLhTi68bP4HgxvcfGxd9kZ8TJkvNM9K6YTEiIYRefWiZJP2UxlHPGQzlDzWr9BXVo0RD0" />
                                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
                            </div>
                            <div className="relative p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-secondary text-sm tracking-widest uppercase font-bold">THE_GATHERING // 26_OCT_11:45PM</span>
                                        <span className="h-px w-8 bg-secondary/30"></span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-headline font-black uppercase italic text-on-surface group-hover:text-tertiary transition-colors">HAKONE_GHOST_RUN</h3>
                                    <div className="flex items-center gap-2 text-secondary font-mono tracking-tighter">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <span className="uppercase">PEAK_OBSERVATORY // MOUNT_HAKONE</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="bg-surface-container-lowest/80 backdrop-blur-md p-4 border border-outline-variant/20 flex flex-col items-end">
                                        <span className="text-[10px] font-mono text-on-surface/40 uppercase mb-1">T_MINUS_START</span>
                                        <div className="text-3xl font-headline font-black text-on-surface tracking-tighter">
                                            04<span className="text-tertiary">:</span>22<span className="text-tertiary">:</span>09
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full md:w-auto bg-transparent border-2 border-secondary/40 text-secondary hover:bg-secondary hover:text-surface px-8 py-3 font-headline font-bold uppercase transition-all tracking-widest">ENCRYPTED_RSVP</button>
                                </div>
                            </div>
                        </article>

                        {/* Event Card 3 */}
                        <article className="relative group bg-surface-container-lowest custom-clip border-l-4 border-primary-container overflow-hidden">
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRcEBWjRU5FLHOIpjHv86-KOUlUdWaGO0jOpqrQYMZUsUwZ5vrz8AAjhLa5cluT8yftPRM5zw0jiFu3ZOY1xsbiZw_f2NA8-QrEfMMq58mVOU-EPlTAz-Vg7wqZ9klON5gPEb4SrOGeIFJ8o46MPqsFy9Im9jbPTJ599ogufNr9IoombG1fNGfe3zydU6aSmn2pJ49civM9Ms_m3DlXaFzxvc4EFbn1zyOmSBJCaqhm3JXpaYN223gRLn_YmKLo3iWQ2G7u3suERiK" />
                                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
                            </div>
                            <div className="relative p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-secondary text-sm tracking-widest uppercase font-bold">THE_GATHERING // 30_OCT_03:15AM</span>
                                        <span className="h-px w-8 bg-secondary/30"></span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-headline font-black uppercase italic text-on-surface group-hover:text-primary transition-colors">DOCK_SIDE_DRIFT</h3>
                                    <div className="flex items-center gap-2 text-secondary font-mono tracking-tighter">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <span className="uppercase">DAIKOKU_PIER // YOKOHAMA</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="bg-surface-container-lowest/80 backdrop-blur-md p-4 border border-outline-variant/20 flex flex-col items-end">
                                        <span className="text-[10px] font-mono text-on-surface/40 uppercase mb-1">T_MINUS_START</span>
                                        <div className="text-3xl font-headline font-black text-on-surface tracking-tighter">
                                            08<span className="text-primary">:</span>09<span className="text-primary">:</span>41
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full md:w-auto bg-transparent border-2 border-secondary/40 text-secondary hover:bg-secondary hover:text-surface px-8 py-3 font-headline font-bold uppercase transition-all tracking-widest">ENCRYPTED_RSVP</button>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Contextual Information */}
                    <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-surface-container-low p-6 border-t-2 border-secondary/20">
                            <h4 className="font-mono text-xs text-secondary uppercase tracking-widest mb-4">DRIVING_RULES</h4>
                            <p className="text-sm text-on-surface/60 font-body">No high beams on mountain passes. Keep headlights off until initiation. Respect the silence of the valley.</p>
                        </div>
                        <div className="bg-surface-container-low p-6 border-t-2 border-primary/20">
                            <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">POLICE_SCANNER</h4>
                            <div className="flex items-center gap-2 text-sm text-on-surface">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
                                </span>
                                ACTIVITY_DETECTED: OME-HIGHWAY_PATROL
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-6 border-t-2 border-tertiary/20">
                            <h4 className="font-mono text-xs text-tertiary uppercase tracking-widest mb-4">WEATHER_REPORT</h4>
                            <p className="text-sm text-on-surface/60 font-body">DRY // TEMP: 12°C // VISIBILITY: HIGH. Optimal conditions for soft compound tires.</p>
                        </div>
                    </section>
                </main>
            </div>

            {/* Footer */}
            <footer className="w-full py-8 px-10 flex flex-col md:flex-row justify-between items-end bg-[#1C1B1B] border-t-4 border-double border-[#5C3F46] bg-[url('https://www.transparenttextures.com/patterns/asphalt-dark.png')]">
                <div className="flex flex-col gap-2">
                    <span className="text-[#FFB1C4] font-bold text-lg font-headline">PINDI_UNDERGROUND</span>
                    <p className="text-[#E5E2E1] font-mono text-[10px] tracking-tighter uppercase">©2024_MIDNIGHT_PINDI_INDUSTRIAL_GRIT.ALL_RIGHTS_RESERVED.</p>
                </div>
                <div className="flex gap-6 mt-6 md:mt-0">
                    <a className="text-[#E5E2E1]/40 font-mono text-[10px] tracking-tighter uppercase hover:text-[#D7FFC5] hover:tracking-widest transition-all" href="#">DISCORD_LINK</a>
                    <a className="text-[#E5E2E1]/40 font-mono text-[10px] tracking-tighter uppercase hover:text-[#D7FFC5] hover:tracking-widest transition-all" href="#">GARAGE_SPECS</a>
                    <a className="text-[#E5E2E1]/40 font-mono text-[10px] tracking-tighter uppercase hover:text-[#D7FFC5] hover:tracking-widest transition-all" href="#">LEGAL_MODS</a>
                </div>
            </footer>

        </div>
    );
}
