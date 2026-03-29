'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const volume = 0.3; // Constant volume as UI is removed

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        const attemptPlay = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    cleanup();
                }).catch(() => {
                    // Still blocked by browser
                });
            }
        };

        const cleanup = () => {
            window.removeEventListener('click', attemptPlay);
            window.removeEventListener('keydown', attemptPlay);
            window.removeEventListener('touchstart', attemptPlay);
            window.removeEventListener('scroll', attemptPlay);
        };

        // Try immediately
        attemptPlay();

        // Also listen for any interaction
        window.addEventListener('click', attemptPlay);
        window.addEventListener('keydown', attemptPlay);
        window.addEventListener('touchstart', attemptPlay);
        window.addEventListener('scroll', attemptPlay);

        return cleanup;
    }, [isPlaying]);

    return (
        <audio ref={audioRef} src="/car-road-music.mp3" loop />
    );
}
