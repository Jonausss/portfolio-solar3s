import { useEffect, useState } from 'react';

const mediaFiles = import.meta.glob('../assets/portfolio/**/*.{png,jpg,jpeg,mp4,webm,ogg}', {
    eager: true,
    import: 'default'
});
const MediaList = Object.values(mediaFiles);

const HomeCarousel = () => {
    const [randomizedMedia, setRandomizedMedia] = useState([]);

    useEffect(() => {
        const shuffled = [...MediaList].sort(() => 0.5 - Math.random());
        setRandomizedMedia(shuffled);
    }, []);

    return (
        <div className="relative flex w-full h-full overflow-hidden">

            <style>
                {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}
            </style>

            <div className="flex w-max h-full animate-marquee">
                {[...randomizedMedia, ...randomizedMedia].map((media, index) => {
                    const isVideo = media.match(/\.(mp4|webm|ogg)$/i);

                    return (
                        <div
                            key={index}
                            className="relative h-full shrink-0"
                        >
                            <div
                                className="absolute inset-0 z-10 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(rgba(255, 188, 34, 0.6), rgba(255, 188, 34, 0.6)), rgba(255, 255, 255, 0.3)'
                                }}
                            ></div>

                            {isVideo ? (
                                <video
                                    src={media}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="h-full w-auto object-cover"
                                />
                            ) : (
                                <img
                                    src={media}
                                    alt={`Portfólio ${index}`}
                                    className="h-full w-auto object-cover"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomeCarousel