"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const taillightRef = useRef<HTMLDivElement>(null);
    const smokeContainerRef = useRef<HTMLDivElement>(null);
    const heroContainerRef = useRef<HTMLElement>(null);

    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const [systemStatus, setSystemStatus] = useState("SYSTEM_STATUS: COLD_START");

    const sndStartRef = useRef<HTMLAudioElement | null>(null);
    const sndScreechRef = useRef<HTMLAudioElement | null>(null);
    const sndLimiterRef = useRef<HTMLAudioElement | null>(null);

    const sequenceStartedRef = useRef(false);

    useEffect(() => {
        sndStartRef.current = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-sports-car-engine-start-1536.mp3");
        sndScreechRef.current = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-car-tire-screech-732.mp3");
        sndLimiterRef.current = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-racing-car-engine-loop-1582.mp3");
        if (sndLimiterRef.current) sndLimiterRef.current.loop = true;

        // Rain Animation
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        const particles: any[] = [];
        const particleCount = 150;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        class RainDrop {
            x!: number;
            y!: number;
            l!: number;
            v!: number;
            color!: string;

            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.l = Math.random() * 20 + 10;
                this.v = Math.random() * 15 + 10;
                this.color = 'rgba(215, 255, 197, 0.3)';
            }

            draw() {
                ctx!.beginPath();
                ctx!.strokeStyle = this.color;
                ctx!.lineWidth = 1;
                ctx!.moveTo(this.x, this.y);
                ctx!.lineTo(this.x + (this.v * 0.1), this.y + this.l);
                ctx!.stroke();
            }

            update() {
                this.y += this.v;
                this.x += (this.v * 0.1);
                if (this.y > h) {
                    this.y = -this.l;
                    this.x = Math.random() * w;
                }
                this.draw();
            }
        }

        const initRain = () => {
            resize();
            for (let i = 0; i < particleCount; i++) {
                particles.push(new RainDrop());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => p.update());
            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        initRain();
        animate();

        setTimeout(() => {
            if (!sequenceStartedRef.current && videoRef.current && taillightRef.current) {
                videoRef.current.classList.remove('grayscale-[0.4]');
                taillightRef.current.style.opacity = '0.3';
                taillightRef.current.classList.add('bg-neonPink/30');
                setInterval(createSmoke, 200);
            }
        }, 5000);

        return () => window.removeEventListener('resize', resize);
    }, []);

    const createSmoke = () => {
        if (!smokeContainerRef.current) return;
        const smoke = document.createElement('div');
        smoke.className = 'smoke-particle';
        const size = Math.random() * 150 + 100;
        smoke.style.width = `${size}px`;
        smoke.style.height = `${size}px`;
        smoke.style.left = `${Math.random() * 100}%`;
        smoke.style.bottom = `-50px`;
        smoke.style.opacity = '0.6';

        smokeContainerRef.current.appendChild(smoke);

        const anim = smoke.animate([
            { transform: 'translateY(0) scale(1) rotate(0deg)', opacity: "0.6" },
            { transform: `translateY(-${Math.random() * 400 + 200}px) scale(2) rotate(${Math.random() * 360}deg)`, opacity: "0" }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'ease-out'
        });

        anim.onfinish = () => smoke.remove();
    };

    const startCinematicSequence = () => {
        if (sequenceStartedRef.current) return;
        sequenceStartedRef.current = true;

        setSystemStatus("SYSTEM_STATUS: IGNITION_PENDING");

        setTimeout(() => {
            if (isAudioEnabled && sndStartRef.current) sndStartRef.current.play();
            if (heroContainerRef.current) heroContainerRef.current.classList.add('animate-engine-shake');
            if (videoRef.current) videoRef.current.classList.remove('grayscale-[0.4]');
            setSystemStatus("SYSTEM_STATUS: ENGINE_CRANKING");

            setTimeout(() => {
                if (taillightRef.current) {
                    taillightRef.current.style.opacity = '0.4';
                    taillightRef.current.classList.add('bg-neonPink/40');
                }
                setSystemStatus("SYSTEM_STATUS: LIGHTS_ACTIVE");

                setTimeout(() => {
                    if (isAudioEnabled && sndScreechRef.current) sndScreechRef.current.play();
                    setSystemStatus("SYSTEM_STATUS: TRACTION_LOSS");

                    setTimeout(() => {
                        setInterval(createSmoke, 50);
                        setSystemStatus("SYSTEM_STATUS: BURNOUT_MAX");

                        setTimeout(() => {
                            if (isAudioEnabled && sndLimiterRef.current) sndLimiterRef.current.play();
                            if (taillightRef.current) {
                                taillightRef.current.style.opacity = '0.8';
                                taillightRef.current.classList.replace('bg-neonPink/40', 'bg-neonPink/60');
                            }
                            setSystemStatus("SYSTEM_STATUS: REDLINE_REACHED");
                        }, 1000);
                    }, 500);
                }, 1500);
            }, 1000);
        }, 1000);
    };

    const toggleAudio = () => {
        const newState = !isAudioEnabled;
        setIsAudioEnabled(newState);
        if (newState) {
            if (!sequenceStartedRef.current) startCinematicSequence();
        } else {
            [sndStartRef.current, sndScreechRef.current, sndLimiterRef.current].forEach(a => {
                if (a) {
                    a.pause();
                    a.currentTime = 0;
                }
            });
        }
    };

    return (
        <section ref={heroContainerRef} className="relative h-screen w-full overflow-hidden flex flex-col" data-purpose="hero-container" id="hero-main">

            <div className="absolute inset-0 z-0 overflow-hidden" id="video-stage-container">
                <video ref={videoRef} autoPlay className="w-full h-full object-cover grayscale-[0.4] transition-all duration-[3000ms]" loop muted playsInline poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCUR1V_habdFjjGzfYyxLLoSDNHR7-Mgk4CxhFILDJt391GGOixHd3JOJqlxE4hefcei3PbfQA5lPXE02uujK3QASUVejo7Ym52R7x1ev8Oya28LZVgTryKy5-vqX8wxWUPh9G47NWWuG-pQj_pETUH6Jizp8VhH3i1fmqoEMjNX9Q0I4D6As27jgMbSyNrItAFm71wLPNILuu8mKE7APqRT9GeqVm_wDjAy2BRxgxFpvwKqj7PiSfrLZYnDW1G2HQHU_y9jgOo2BsH">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-car-drifting-at-night-on-a-wet-road-4301-large.mp4" type="video/mp4" />
                </video>
                <div ref={taillightRef} className="absolute inset-0 bg-neonPink/0 transition-opacity duration-1000 z-[5] pointer-events-none mix-blend-screen" id="taillight-glow"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-midnightBlack via-midnightBlack/40 to-midnightBlack/80 z-10"></div>
            </div>

            <canvas ref={canvasRef} className="rain-canvas" data-purpose="rain-animation" id="rainCanvas"></canvas>
            <div ref={smokeContainerRef} className="absolute inset-0 pointer-events-none z-[21]" id="smoke-container"></div>

            <main className="relative z-30 flex-grow flex flex-col justify-center items-center text-center px-4" data-purpose="hero-main-content">
                <div className="max-w-5xl space-y-8">
                    <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none drop-shadow-2xl" data-purpose="main-headline">
                        <span className="block text-white opacity-95">MIDNIGHT</span>
                        <span className="block text-neonPink animate-flicker drop-shadow-[0_0_20px_rgba(255,0,127,0.8)] header-glow">OVERRIDE</span>
                    </h1>
                    <div className="flex justify-center">
                        <p className="max-w-2xl font-mono text-toxicGreen text-xs md:text-base tracking-[0.2em] border-y border-toxicGreen/20 py-4 uppercase bg-midnightBlack/40 backdrop-blur-sm" data-purpose="subheadline">
                            WHERE RUBBER MEETS REBELLION. JOIN THE GLOBAL TOUGE NETWORK.
                        </p>
                    </div>
                    <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/community">
                            <button className="group relative px-12 py-5 bg-neonPink text-white font-black italic text-xl tracking-widest uppercase btn-neon-glow glitch-text industrial-border" id="cta-button">
                                ENTER THE DRIFT
                            </button>
                        </Link>
                        <div className="font-mono text-[10px] text-gray-400 flex items-center gap-4 uppercase tracking-widest bg-midnightBlack/60 px-4 py-1 rounded-full">
                            <span className="text-toxicGreen" id="status-light">● ONLINE</span>
                            <span id="active-count">4,281 DRIFTERS ACTIVE</span>
                        </div>
                    </div>
                </div>
            </main>

            <div className="relative z-30 px-6 py-8 flex justify-between items-end" data-purpose="hero-footer">
                <div className="hidden md:block border-l-2 border-toxicGreen pl-4 py-2">
                    <p className="text-[10px] font-mono text-toxicGreen/60 tracking-widest" id="system-status">{systemStatus}</p>
                    <p className="text-[10px] font-mono text-toxicGreen/60 tracking-widest">LOC: Pindi_DISTRICT_03</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-neonPink to-transparent opacity-50"></div>
                    <span className="text-[10px] font-mono text-neonPink/70 tracking-tighter uppercase">Est. 1996 // DRIFT_OR_DIE</span>
                </div>
            </div>
        </section>
    );
}
