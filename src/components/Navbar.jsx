import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavButton from './NavButton';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowNav(true);
            } 
            else {
                setShowNav(false);
            }
        };

        if (location.pathname === '/') {
            handleScroll()
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        } 
        else {
            setShowNav(true);
        }
    }, [location.pathname]);

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 bg-solar-dark px-4 md:px-16 py-4 md:py-3 overflow-hidden transition-all duration-500 transform ${
                showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
        >
            <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat bg-size-[400px] opacity-10 pointer-events-none z-0"></div>

            <div className="relative z-10 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform scale-90 md:scale-100">
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

                <button
                    className="md:hidden text-white hover:text-solar-yellow focus:outline-none z-20"
                    onClick={toggleMenu}
                >
                    <div className={`transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}>
                        {isMenuOpen ? (
                            <svg className="w-10 h-10 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-10 h-10 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </div>
                </button>

                <div className="hidden md:flex flex-wrap justify-center gap-6">
                    <NavButton name="SOBRE MIM" link="/" />
                    <NavButton name="MINHAS ARTES" link="/artes" />
                    <NavButton name="CONTATO" link="/contato" />
                </div>
            </div>

            <div 
                className={`relative z-10 md:hidden grid transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                }`}
            >
                <div className="overflow-hidden flex flex-col items-center">
                    <div className="flex flex-col items-center gap-4 w-full pb-4">
                        <div onClick={toggleMenu}><NavButton name="SOBRE MIM" link="/" /></div>
                        <div onClick={toggleMenu}><NavButton name="MINHAS ARTES" link="/artes" /></div>
                        <div onClick={toggleMenu}><NavButton name="CONTATO" link="/contato" /></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;