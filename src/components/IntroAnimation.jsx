import React, { useState, useEffect, useRef } from 'react';

const IntroAnimation = ({ onComplete }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef(null);

    const iniciarVideo = () => {
        setIsLoading(false);
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                if (error.name !== 'AbortError') {
                    console.error("O navegador bloqueou o autoplay ou deu erro:", error);
                    handleVideoEnd();
                }
            });
        }
    };

    useEffect(() => {
        if (videoRef.current && videoRef.current.readyState >= 3) {
            iniciarVideo();
        }
    }, []);

    const handleVideoEnd = () => {
        setIsPlaying(false);
        if (onComplete) onComplete();
    };

    if (!isPlaying) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-transparent pointer-events-none">
            <div className={`absolute inset-0 flex items-center justify-center z-50 pointer-events-auto bg-solar-yellow transition-all duration-1100 
                ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-12 h-12 border-4 border-solar-red border-t-transparent rounded-full animate-spin"></div>
            </div>

            <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                onCanPlayThrough={iniciarVideo}
                onEnded={handleVideoEnd}
                onError={handleVideoEnd}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            >
                <source src="/intro.webm" type="video/webm" />
                <source src="/intro.mp4" type="video/mp4" />

                Seu navegador não suporta vídeos HTML5.
            </video>
        </div>
    )
}

export default IntroAnimation