import React from 'react';

const TitleText = ({
    segments = [],
    sizeClass = "text-[65px]",
    strokeColor = "#212025",
    strokeWidth = "25px"
}) => {
    const baseClasses = `font-inter font-black ${sizeClass} tracking-widest uppercase leading-none`;
    const foregroundRefinementWidth = "0.5px";

    return (
        <div className={`relative inline-flex items-center justify-center ${baseClasses}`}>

            <div
                className="absolute inset-0 z-0 opacity-100 flex"
                style={{
                    WebkitTextFillColor: strokeColor,
                    WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
                }}
            >
                {segments.map((seg, index) => (
                    <span key={`bg-${index}`}>{seg.text}</span>
                ))}
            </div>

            <div
                className="relative z-10 flex"
                style={{ WebkitTextStroke: `${foregroundRefinementWidth} transparent` }}
            >
                {segments.map((seg, index) => (
                    <span key={`fg-${index}`} className={seg.classes}>
                        {seg.text}
                    </span>
                ))}
            </div>

        </div>
    );
}

export default TitleText