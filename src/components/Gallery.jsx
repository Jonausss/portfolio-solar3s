import React, { useState } from 'react';
import MediaModal from './MediaModal';

const rawMediaFiles = import.meta.glob('../assets/portfolio/**/*.{png,jpg,jpeg,mp4,webm,ogg}', {
    eager: true,
    import: 'default'
});

const galleryItems = [];
const categoriesSet = new Set();

Object.keys(rawMediaFiles).forEach((path) => {
    const parts = path.split('/');
    const category = parts[3];

    const fullFilename = parts[parts.length - 1];
    const title = fullFilename.split('.').slice(0, -1).join('.');

    if (category) {
        categoriesSet.add(category);
        galleryItems.push({
            url: rawMediaFiles[path],
            category: category,
            title: title,
            isVideo: !!path.match(/\.(mp4|webm|ogg)$/i)
        });
    }
});

const categories = Array.from(categoriesSet);

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('TODOS');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);

    const filteredItems = activeFilter === 'TODOS'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    const openModal = (index) => {
        setClickedIndex(index);
        setIsModalOpen(true);
    };

    const renderMediaCard = (item, index, uniqueKey) => (
        <div
            key={uniqueKey}
            onClick={() => openModal(index)}
            className="group relative w-full rounded-xl overflow-hidden bg-solar-dark shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer hover:scale-[1.02] transition-all duration-300"
        >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                <svg viewBox="0 0 24 24" className="w-16 h-16 text-white drop-shadow-md scale-50 group-hover:scale-100 transition-transform duration-300" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {item.isVideo ? (
                <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover pointer-events-none"
                />
            ) : (
                <img
                    src={item.url}
                    alt={`${item.category} arte`}
                    className="w-full h-auto object-cover"
                />
            )}
        </div>
    );

    return (
        <div className="w-full flex flex-col items-center mt-32 mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
                <button
                    onClick={() => setActiveFilter('TODOS')}
                    className={`px-6 py-2 font-inter font-bold text-lg rounded-[20px] border-4 transition-transform hover:scale-105 ${activeFilter === 'TODOS'
                        ? 'bg-solar-red text-solar-dark border-transparent cursor-default'
                        : 'bg-transparent text-white border-solar-red hover:bg-white/10'
                        }`}
                >
                    TODOS
                </button>

                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveFilter(category)}
                        className={`px-6 py-2 font-inter font-bold text-lg rounded-[20px] border-4 uppercase transition-transform hover:scale-105 ${activeFilter === category
                            ? 'bg-solar-yellow text-solar-dark border-transparent cursor-default'
                            : 'bg-transparent text-white border-white hover:bg-white/10'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="flex w-[50%] gap-4 px-4">
                <div className="flex-1 flex flex-col gap-4">
                    {filteredItems.map((item, index) => index % 2 === 0 ? renderMediaCard(item, index, `col1-${index}`) : null)}
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    {filteredItems.map((item, index) => index % 2 !== 0 ? renderMediaCard(item, index, `col2-${index}`) : null)}
                </div>
            </div>

            {isModalOpen && (
                <MediaModal
                    items={filteredItems}
                    currentIndex={clickedIndex}
                    setCurrentIndex={setClickedIndex}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Gallery;