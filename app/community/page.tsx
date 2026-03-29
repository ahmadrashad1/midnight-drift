import Sidebar from '../components/Sidebar';

export default function Community() {
    return (
        <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen pt-16">
            <div className="flex min-h-[calc(100vh-64px)]">
                <Sidebar />

                {/* MAIN CONTENT CANVAS */}
                <main className="lg:pl-80 flex-1 flex flex-col relative overflow-x-hidden asphalt-texture min-h-screen">
                    {/* TOP APP BAR (Local to main) */}
                    <header className="sticky top-0 z-[90] flex justify-between items-center w-full px-4 h-16 bg-[#131313] dark:bg-[#131313] border-b-2 border-[#FF4A8D]/20 shadow-[0_0_20px_rgba(255,74,141,0.15)]">
                        <div className="flex items-center gap-4">
                            <button className="text-[#FFB1C4] hover:animate-pulse lg:hidden">
                                <span className="material-symbols-outlined" data-icon="menu">menu</span>
                            </button>
                            <h1 className="text-xl font-black italic tracking-widest text-[#FFB1C4] hover:animate-pulse font-headline uppercase">PINDI_UNDERGROUND</h1>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a className="text-[#D7FFC5] font-headline font-bold uppercase tracking-tighter text-sm hover:text-[#FFB1C4] transition-all duration-75" href="#">LIVE_FEED</a>
                            <a className="text-[#E5E2E1] font-headline font-bold uppercase tracking-tighter text-sm hover:text-[#FFB1C4] transition-all duration-75" href="#">GLOBAL_RANK</a>
                            <a className="text-[#E5E2E1] font-headline font-bold uppercase tracking-tighter text-sm hover:text-[#FFB1C4] transition-all duration-75" href="#">TUNER_OPS</a>
                        </div>
                        <button className="bg-primary-container text-on-primary-fixed font-headline font-black uppercase tracking-tighter px-6 py-2 hover:shadow-[0_0_15px_#FF4A8D] transition-all">
                            JOIN THE CREW
                        </button>
                    </header>

                    {/* RAW_FEED HEADER */}
                    <section className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant/10">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-secondary text-on-secondary-fixed px-2 py-0.5 font-label text-[10px] font-black uppercase tracking-widest">LIVE_NOW</span>
                                <span className="text-secondary font-label text-xs tracking-widest">SIGNAL_STRENGTH: 98%</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-none text-on-surface">RAW_FEED</h2>
                            <p className="mt-4 text-on-surface-variant max-w-xl font-body text-sm leading-relaxed opacity-70">Unfiltered community sightings from the Gunma peaks to the Wangan straights. Upload your latest run or spectate the high-stakes drift sessions across the globe.</p>
                        </div>
                        <button className="flex items-center gap-3 bg-secondary-container text-on-secondary-fixed font-headline font-black uppercase tracking-widest px-8 py-4 hover:bg-secondary transition-all group">
                            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform" data-icon="add_a_photo">add_a_photo</span>
                            POST_SIGHTING
                        </button>
                    </section>

                    {/* FEED GRID/LIST */}
                    <section className="p-4 md:p-8 flex flex-col gap-12 max-w-5xl mx-auto w-full">
                        {/* FEED ITEM 1 */}
                        <article className="relative flex flex-col md:flex-row gap-0 group">
                            <div className="relative w-full md:w-3/5 aspect-video overflow-hidden bg-surface-container-lowest">
                                <div className="scanline-overlay absolute inset-0 z-10"></div>
                                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAla1bgGSGrcFQMPSNLf__UpCF6uClYVsD8i7f-9XagT-FXYYCE02689UM5o5OE3OaTjd381TpfI1eDwOZqn5YfjYZ-UN8wtLy4qycwukLu369xXfMb8ZVcwadd3NHm7AtXe7OEjmqMAF0c078VRCxCfwCFVNlS2dAQ9w9w4SQVP74tWZ7Zj5qmbdDo8X9GdQMUMQ4GwrPUPz7VZWqTd6OZTv35W91xGzzyU4-wDaKwzkd5fyDyMTmN1B-pJ0BWCzW23DHqWcQIMTqA" />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-secondary text-on-secondary-fixed px-3 py-1 font-label text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-on-secondary-fixed animate-pulse"></span>
                                        NEW_SIGHTING
                                    </span>
                                </div>
                                <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                                    <div className="bg-surface-container-lowest/80 backdrop-blur-md p-2 border border-outline-variant/20">
                                        <span className="font-label text-[10px] text-tertiary block leading-none">ISO</span>
                                        <span className="font-headline font-bold text-xs">3200</span>
                                    </div>
                                    <div className="bg-surface-container-lowest/80 backdrop-blur-md p-2 border border-outline-variant/20">
                                        <span className="font-label text-[10px] text-tertiary block leading-none">SHUTTER</span>
                                        <span className="font-headline font-bold text-xs">1/60s</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/5 p-6 bg-surface-container-low flex flex-col relative border-l-0 md:border-l border-primary/20">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center">
                                            <span className="material-symbols-outlined text-secondary" data-icon="person">person</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline font-black text-on-surface uppercase tracking-tight text-sm">AKIRA_ZERO</h4>
                                            <p className="font-label text-[10px] text-on-surface-variant/50">4M_AGO // MT_HARUNA</p>
                                        </div>
                                    </div>
                                    <button className="text-primary hover:text-primary-container transition-colors group">
                                        <span className="material-symbols-outlined" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                    </button>
                                </div>
                                <p className="text-on-surface-variant font-body text-sm mb-6 leading-relaxed italic">"Caught this Silvia S15 pushing the hairpins near the summit. The turbo flutter was deafening. #pindi #silvia #midnight"</p>
                                <div className="mt-auto flex flex-col gap-2">
                                    <div className="flex items-center justify-between text-[10px] font-label text-on-surface-variant tracking-widest uppercase mb-2 border-b border-outline-variant/20 pb-1">
                                        <span>COMMENTS [12]</span>
                                        <span>REACTIONS [442]</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex gap-2">
                                            <span className="text-secondary font-black text-[10px] whitespace-nowrap">SHIFT_KID:</span>
                                            <span className="text-[10px] text-on-surface-variant uppercase">Clean line through the third hairpin.</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-[#FF4A8D] font-black italic tracking-widest text-lg sm:text-2xl drop-shadow-[0_0_10px_rgba(255,74,141,0.5)]">
                                                PINDI_UNDERGROUND <span className="text-[#E5E2E1]/60 px-2 font-mono text-sm opacity-50 font-normal not-italic tracking-normal">LIVE_FEED</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <input className="flex-grow bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-tertiary focus:ring-0 text-[10px] font-headline uppercase p-2 placeholder:text-on-surface-variant/30" placeholder="ADD_INTEL..." type="text" />
                                        <button className="bg-surface-container-high px-4 text-tertiary hover:bg-tertiary hover:text-on-tertiary transition-all">
                                            <span className="material-symbols-outlined text-sm" data-icon="send">send</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* BENTO STYLE GALLERY BREAK */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-2 aspect-video bg-surface-container group overflow-hidden relative">
                                <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCb5if2ZFl824G86LvdQQHIDvBTCutGZ0VzTFdpAalMTjIubv0khof7pD3FKWiuAmtj9e4rfrkShPvNjkAXNxg-QY3W1C5FZMlZPG0fVWTOh4eqsTxUvOJXf8lIArQJQWq75Xx4jcU4dzuRqfgHuy5pc1r6FQo7l52TKp6g1vqso1bIVLXCMlO4K7NX88YAj-lcRBphDkXYJlZhSzSS_ykm2frhZ4fOFEVCJgatVyiRzNekYf0PP_rdLWQ25eWmqWhX2oPVdt12UzP" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-surface to-transparent">
                                    <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 font-label text-[10px] font-bold w-fit mb-2">TECH_DETAIL</span>
                                    <h4 className="font-headline font-black text-xl uppercase tracking-tighter">THERMAL_OVERLOAD</h4>
                                </div>
                            </div>
                            <div className="aspect-square bg-surface-container group overflow-hidden relative">
                                <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0hF306I6R75XOpFFIfYQQs9pRlMKl4cSbVHoZoTCjcPhA693oHczGj4kNE7wY1YItBzfpEOx24_PB_c_KZad1oNBrX6voa6A0TL_wa1mGw52CB54ZUTY6jEorTOBZlzZv72ekWv4alJhp2rVyE2uJN8Fy-KbtAe2NKLZJusQJox9pJh4soUXWe-AYenq554yFdjtX7t4nXxXg2ZULzIr9yk5gSSq_WrmtDbPCxLN_3pqw3yvUGaYqB1YieQeImGtnr1vyVu8yKFYx" />
                                <div className="absolute inset-0 p-4 flex flex-col justify-between items-end">
                                    <span className="material-symbols-outlined text-primary" data-icon="videocam">videocam</span>
                                    <span className="font-label text-[10px] uppercase text-secondary font-black">0.15s_CLIP</span>
                                </div>
                            </div>
                            <div className="aspect-square bg-surface-container group overflow-hidden relative">
                                <img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUHQsJRPc_hO_r1HVEaGkrItINxuIyAjKHK1du2_WGQTPRTN3QfM5eDPlQOfeedYn8qEypiPqTkUMfCJTp82Ztdygg9WTwcCFz1nzWaZYE4Q7yXSAEw5byRZJER74vrogalJpFXvqxjaYwxhK6mkFBORKs0T4vp-Swxgj-N7-3g4Q8tHWAtZKAerAA2EK5YL2rJGxpuk3W-wUAKRHXkOeAljNElwaR1QgUQD7qRY2eIteQOsZ92eI-tLKTqyAiG-Pn1Sh83hJNuuky" />
                                <div className="absolute inset-0 p-4">
                                    <span className="bg-error-container text-on-error-container px-2 py-0.5 font-label text-[10px] font-bold w-fit">WARNING_AREA</span>
                                </div>
                            </div>
                        </div>

                        {/* FEED ITEM 2 */}
                        <article className="relative flex flex-col md:flex-row-reverse gap-0 group">
                            <div className="relative w-full md:w-3/5 aspect-video overflow-hidden bg-surface-container-lowest">
                                <div className="scanline-overlay absolute inset-0 z-10"></div>
                                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGRc5cOj8Ydln71qwU9dS6reVcHWgJQpMbYLErJ-XsVjj6xP5J0GnDDJfmEyG3SZ3NoU-zcNdHY7s4WJeN4IGMt1PvlmzjULbec4mA-fMRy-9-9FLTJIlETXa7GiP7orqL5yPKQFQY7tgQDBCl6_zFasjhn-RAsh6LZ7oJ5RLsGDZe67YRNrJKKYQj2Oiy_saiGwFTms3vLKhAzxnQ4NOFlk5ZM1LpY2bi6EQrfc-SCoduOLWq_Y-_C14wSAWdaiGq-AxSs0VvORVE" />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="bg-primary-container text-on-primary-fixed px-3 py-1 font-label text-xs font-black uppercase tracking-widest">CREW_PICK</span>
                                </div>
                            </div>
                            <div className="w-full md:w-2/5 p-6 bg-surface-container-low flex flex-col relative border-r-0 md:border-r border-tertiary/20">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center">
                                            <span className="material-symbols-outlined text-tertiary" data-icon="bolt">bolt</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline font-black text-on-surface uppercase tracking-tight text-sm">NITRO_RAT</h4>
                                            <p className="font-label text-[10px] text-on-surface-variant/50">2H_AGO // WANGAN_EXP_B</p>
                                        </div>
                                    </div>
                                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                                    </button>
                                </div>
                                <p className="text-on-surface-variant font-body text-sm mb-6 leading-relaxed">High speed run through the tunnels. Managed to keep up with the R34 group for about 3 kilometers before they vanished into the smog.</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-surface-container-highest text-tertiary font-label text-[10px] px-2 py-1 uppercase">300KM/H</span>
                                    <span className="bg-surface-container-highest text-tertiary font-label text-[10px] px-2 py-1 uppercase">TWIN_TURBO</span>
                                    <span className="bg-surface-container-highest text-tertiary font-label text-[10px] px-2 py-1 uppercase">MIDNIGHT_CLUB</span>
                                </div>
                                <div className="mt-auto flex flex-col gap-2">
                                    <button className="w-full border-2 border-outline-variant/30 py-3 font-headline text-xs font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-sm" data-icon="forum">forum</span>
                                        OPEN_COMM_LINK
                                    </button>
                                </div>
                            </div>
                        </article>
                    </section>

                    {/* FOOTER */}
                    <footer className="w-full py-8 px-10 flex flex-col md:flex-row justify-between items-end bg-[#1C1B1B] dark:bg-[#1C1B1B] border-t-4 border-double border-[#5C3F46] bg-[url('https://www.transparenttextures.com/patterns/asphalt-dark.png')] mt-auto">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-8 bg-[#FFB1C4]"></div>
                                <span className="text-[#FFB1C4] font-bold font-headline text-xl italic tracking-widest uppercase">PINDI_UNDERGROUND</span>
                            </div>
                            <p className="text-[#E5E2E1] font-mono text-[10px] tracking-tighter uppercase max-w-xs opacity-60">©2024_MIDNIGHT_PINDI_INDUSTRIAL_GRIT.ALL_RIGHTS_RESERVED.</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-6 mt-8 md:mt-0">
                            <div className="flex gap-8">
                                <a className="text-[#E5E2E1]/40 font-mono text-[10px] tracking-tighter uppercase hover:text-[#D7FFC5] hover:tracking-widest transition-all" href="#">DISCORD_LINK</a>
                                <a className="text-[#E5E2E1]/40 font-mono text-[10px] tracking-tighter uppercase hover:text-[#D7FFC5] hover:tracking-widest transition-all" href="#">GARAGE_SPECS</a>
                                <a className="text-[#E5E2E1]/40 font-mono text-[10px] tracking-tighter uppercase hover:text-[#D7FFC5] hover:tracking-widest transition-all" href="#">LEGAL_MODS</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-[#D7FFC5] font-headline text-[10px] uppercase font-bold underline underline-offset-4">STATUS: ENCRYPTED_CONNECTION</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-secondary"></div>
                                    <div className="w-1 h-1 bg-secondary animate-ping"></div>
                                    <div className="w-1 h-1 bg-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>

        </div>
    );
}
