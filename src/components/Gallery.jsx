import React, { useState } from 'react';

const rawMediaFiles = import.meta.glob('../assets/portfolio/**/*.{png,jpg,jpeg,mp4,webm,ogg}', {
    eager: true,
    import: 'default'
});

const galleryItems = [];
const categoriesSet = new Set();

Object.keys(rawMediaFiles).forEach((path) => {
    const parts = path.split('/');
    const category = parts[3];

    if (category) {
        categoriesSet.add(category);
        galleryItems.push({
            url: rawMediaFiles[path],
            category: category,
            isVideo: !!path.match(/\.(mp4|webm|ogg)$/i)
        });
    }
});

const categories = Array.from(categoriesSet);

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('TODOS');

    const filteredItems = activeFilter === 'TODOS'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    const renderMediaCard = (item, uniqueKey) => (
        <div key={uniqueKey} className="w-full rounded-sm overflow-hidden bg-solar-dark shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {item.isVideo ? (
                <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
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

            <div className="w-full flex md:hidden flex-col gap-4 px-4">
                {filteredItems.map((item, index) => renderMediaCard(item, `mob-${index}`))}
            </div>

            <div className="hidden md:flex w-[50%] gap-4 px-4">
                
                <div className="flex-1 flex flex-col gap-4">
                    {filteredItems.filter((_, i) => i % 2 === 0).map((item, index) => renderMediaCard(item, `col1-${index}`))}
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                    {filteredItems.filter((_, i) => i % 2 !== 0).map((item, index) => renderMediaCard(item, `col2-${index}`))}
                </div>
                
            </div>
        </div>
    );
}

export default Gallery;