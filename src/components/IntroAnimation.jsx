import React, { useState, useEffect, useRef } from 'react';

const IntroAnimation = ({ onComplete }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const testVideo = document.createElement('video');
        const supportLevel = testVideo.canPlayType('video/quicktime');

        if (supportLevel === '') {
            console.warn('❌ Seu navegador atual NÃO suporta o formato .mov (video/quicktime). O vídeo ficará invisível/travado.');
        }
        else {
            console.log(`✅ Suporte ao formato .mov: "${supportLevel}". O vídeo deveria tocar normalmente.`);
        }

        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                if (error.name !== 'AbortError') {
                    console.error("O navegador bloqueou o autoplay ou deu erro:", error);
                    handleVideoEnd();
                }
            });
        }
    }, []);

    const handleVideoEnd = () => {
        setIsPlaying(false);
        if (onComplete) onComplete();
    };

    if (!isPlaying) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-transparent pointer-events-none">
            <video
                ref={videoRef}
                muted
                playsInline
                onEnded={handleVideoEnd}
                onError={handleVideoEnd}
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/intro.mov" type="video/quicktime" />

                Seu navegador não suporta vídeos HTML5.
            </video>
        </div>
    );
}

export default IntroAnimation