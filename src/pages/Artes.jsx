import Navbar from '../components/Navbar'
import TitleText from '../components/TitleText'
import Gallery from '../components/Gallery'

function Artes() {
    return (
        <div className="min-h-screen bg-solar-dark text-white font-inter">
            <Navbar />

            <div className="relative w-full h-37 bg-solar-yellow flex items-start justify-end overflow-hidden">
                <img
                    src="/fundo1.gif"
                    alt="Fundo animado do topo"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
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
                <div className="absolute -top-10 flex items-center justify-center z-30 scale-75 md:scale-100">
                    <div className="absolute -top-10 -left-12 -rotate-3 scale-60 origin-bottom-left z-20">
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
                            sizeClass = "text-[80px]"
                            segments={[
                                {
                                    text: 'MINHAS ARTES',
                                    classes: 'bg-gradient-to-b from-white from-50% to-[#FF8A8A] text-transparent bg-clip-text'
                                }
                            ]}
                        />
                    </div>
                </div>
                
                <Gallery />
            </div>
        </div>
    )
}

export default Artes