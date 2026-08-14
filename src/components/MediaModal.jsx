import React, { useEffect } from 'react';

const MediaModal = ({ items, currentIndex, setCurrentIndex, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    if (!items || items.length === 0) return null;

    const currentItem = items[currentIndex];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-solar-red transition-colors z-50 drop-shadow-lg"
            >
                <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,2 C17.5,2.5 21.5,6.5 22,12 C22.5,17.5 17.5,21.5 12,22 C6.5,22.5 2.5,17.5 2,12 C1.5,6.5 6.5,2.5 12,2 Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5,8.5 Q12,11.5 15.5,15.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5,8.5 Q12,11.5 8.5,15.5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-10 bottom-30 md:bottom-0 md:left-10 text-white hover:text-solar-yellow transition-colors z-50 drop-shadow-lg"
            >
                <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15,20 Q12,14 7,12 Q11,9 15,4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div
                className="relative w-[90%] max-w-6xl h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {currentItem.isVideo ? (
                    <video
                        src={currentItem.url}
                        controls
                        autoPlay
                        className="max-w-full max-h-full object-contain rounded-xl border-4 border-solar-dark shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                    />
                ) : (
                    <img
                        src={currentItem.url}
                        alt="Arte em destaque"
                        className="max-w-full max-h-full object-contain rounded-xl border-4 border-solar-dark shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                    />
                )}

                <div className="absolute -bottom-8 md:-bottom-10 w-full text-center pointer-events-none">
                    <span className="font-kalam text-white text-xl md:text-2xl font-bold tracking-widest capitalize drop-shadow-md">
                        {currentItem.title}
                    </span>
                </div>
            </div>

            <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-10 bottom-30 md:bottom-0 md:right-10 text-white hover:text-solar-yellow transition-colors z-50 drop-shadow-lg"
            >
                <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,20 Q12,14 17,12 Q13,9 9,4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default MediaModal;