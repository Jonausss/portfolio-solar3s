import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';

const Navbar = () => {
    return (
        <nav className="relative w-full bg-solar-dark flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-4 md:py-3 gap-4 md:gap-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat bg-[length:400px] opacity-20 pointer-events-none z-0"></div>

            <Link to="/" className="relative z-10 flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform scale-90 md:scale-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-solar-yellow rounded-full border-[3px] border-black overflow-hidden flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <img
                        src="/icon.png"
                        alt="Logo OC Solar3s"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h1 className="font-inter text-white text-3xl md:text-[40px] font-black uppercase tracking-widest drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
                    SOLAR<span className="text-solar-red">3</span>S
                </h1>
            </Link>

            <div className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-6">
                <NavButton name="SOBRE MIM" link="/" />
                <NavButton name="MINHAS ARTES" link="/artes" />
                <NavButton name="CONTATO" link="/contato" />
            </div>
        </nav>
    )
}

export default Navbar;