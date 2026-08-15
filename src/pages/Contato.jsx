import { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import TitleText from '../components/TitleText'

function Contato() {
    const [charState, setCharState] = useState('neutral')
    const [copiedText, setCopiedText] = useState('')

    const handleCopy = (text, e) => {
        e.stopPropagation()
        navigator.clipboard.writeText(text)
        setCopiedText(text)
        setTimeout(() => setCopiedText(''), 2000)
    }

    const getCharImage = () => {
        if (charState === 'left') return '/contato/contatoEsquerda.png'
        if (charState === 'right') return '/contato/contatoDireita.png'
        return '/contato/contatoNeutro.png'
    }

    return (
        <div className="relative min-h-screen bg-solar-dark text-white font-inter overflow-hidden">
            <Navbar />

            <div className='h-22'></div>

            <div className="relative w-full h-32 md:h-37 bg-solar-yellow flex items-start justify-end overflow-hidden">
                <img
                    src="/fundo1.gif"
                    alt="Fundo animado do topo"
                    className="absolute inset-0 w-full h-full object-cover object-right md:object-center pointer-events-none z-0"
                />

                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(rgba(255, 188, 34, 0.6), rgba(255, 188, 34, 0.6)), rgba(255, 255, 255, 0.3)'
                    }}
                ></div>

                <div
                    className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            <div className="relative w-full flex flex-col items-center">
                <div className="absolute w-150 md:w-auto -top-8 md:-top-10 flex items-center justify-center z-30 scale-[0.55] md:scale-100">
                    <div className="absolute -top-13 left-30 md:-left-12 -rotate-1 md:-rotate-3 scale-60 origin-bottom-left z-20">
                        <TitleText
                            strokeWidth="15px"
                            segments={[
                                { text: 'SOLAR', classes: 'text-solar-yellow' },
                                { text: '3', classes: 'text-solar-red' },
                                { text: 'S', classes: 'text-solar-yellow' }
                            ]}
                        />
                    </div>

                    <div className="relative z-10 scale-90">
                        <TitleText
                            sizeClass="text-[60px] md:text-[80px]"
                            segments={[
                                {
                                    text: 'CONTATO',
                                    classes: 'bg-gradient-to-b from-white from-50% to-[#FF8A8A] text-transparent bg-clip-text'
                                }
                            ]}
                        />
                    </div>
                </div>

                <div
                    className="absolute h-100 md:h-100 inset-0 bg-[url('/pattern.svg')] bg-repeat bg-size-[400px] opacity-20 pointer-events-none z-0"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 50%)',
                        maskImage: 'linear-gradient(to bottom, black 10%, transparent 50%)'
                    }}
                ></div>                
            </div>

            <div className="relative w-full max-w-6xl mx-auto px-4 mt-50 md:mt-40 flex flex-row items-center justify-center gap-10 md:gap-120 z-20">
                <div 
                    className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer w-50 md:w-[320px] z-10"
                    onMouseEnter={() => setCharState('left')}
                    onMouseLeave={() => setCharState('neutral')}
                    onClick={() => {
                        setCharState('left');
                        window.location.href = 'mailto:solar3scommissions@gmail.com';
                    }}
                >
                    <svg className="w-9 h-9 text-solar-red md:mb-4 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <h2 className="text-xl md:text-3xl font-black mb-2 uppercase tracking-wide">E-mail</h2>
                    <p className="hidden md:inline text-lg text-gray-300 mb-6 font-medium text-center break-all">solar3scommissions@gmail.com</p>
                    
                    <button 
                        onClick={(e) => handleCopy('solar3scommissions@gmail.com', e)} 
                        className="bg-solar-yellow text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                        {copiedText === 'solar3scommissions@gmail.com' ? 'Copiado!' : 'Copiar'}
                    </button>
                </div>

                <div 
                    className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer w-50 md:w-[320px] z-10"
                    onMouseEnter={() => setCharState('right')}
                    onMouseLeave={() => setCharState('neutral')}
                    onClick={() => {
                        setCharState('right');
                        window.open('https://www.instagram.com/solar3s_art/', '_blank');
                    }}
                >
                    <svg className="w-10 h-10 text-solar-red md:mb-4 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect width="14" height="14" x="5" y="5" rx="4" strokeLinecap="round" strokeLinejoin="round"></rect>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeLinecap="round" strokeLinejoin="round"></line>
                    </svg>
                    <h2 className="text-xl md:text-3xl font-black mb-2 uppercase tracking-wide">Instagram</h2>
                    <p className="hidden md:inline text-lg text-gray-300 mb-6 font-medium text-center break-all">@solar3s_art</p>
                    
                    <button 
                        onClick={(e) => handleCopy('@solar3s_art', e)} 
                        className="bg-solar-yellow text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                        {copiedText === '@solar3s_art' ? 'Copiado!' : 'Copiar'}
                    </button>
                </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-90 h-120 md:w-125 md:h-150 z-0 pointer-events-none flex items-center justify-center">
                <img 
                    src={getCharImage()} 
                    alt="Personagem Interativo" 
                    className="w-full h-full object-contain object-bottom transition-opacity duration-300"
                />
            </div>
        </div>
    )
}

export default Contato