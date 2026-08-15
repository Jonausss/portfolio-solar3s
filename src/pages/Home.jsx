import { Link } from 'react-router-dom';
import TitleText from '../components/TitleText'
import NavButton from '../components/NavButton'
import HomeCarousel from '../components/HomeCarousel'
import Navbar from '../components/NavBar';

function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white font-inter overflow-hidden">
      <Navbar />

      <div className="relative w-full h-37 bg-solar-yellow flex items-start justify-end overflow-hidden">
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

      <div className="relative w-full bg-solar-dark flex flex-col items-center justify-center pb-8 pt-12 md:pt-12">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat bg-size-[400px] opacity-30 pointer-events-none z-0"></div>

        <h1
          className="absolute -top-8 scale-[0.60] md:scale-90 z-10"
        >
          <TitleText
            segments={[
              {
                text: 'SOLAR',
                classes: 'bg-gradient-to-b from-white to-solar-yellow to-50% text-transparent bg-clip-text'
              },
              {
                text: '3',
                classes: 'bg-gradient-to-b from-white to-solar-red to-50% text-transparent bg-clip-text'
              },
              {
                text: 'S',
                classes: 'bg-gradient-to-b from-white to-solar-yellow to-50% text-transparent bg-clip-text'
              }
            ]}
          />
        </h1>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-0 md:mt-4 relative z-10 px-4">
          <NavButton name="SOBRE MIM" rotation={-2} />
          <NavButton name="MINHAS ARTES" rotation={-1} link='artes' />
          <NavButton name="CONTATO" rotation={2} link='contato' />
        </div>
      </div>

      <div className="w-full h-40 md:h-56 bg-solar-yellow border-y-4 border-solar-dark flex items-center justify-center overflow-hidden shadow-[inset_0px_4px_10px_rgba(0,0,0,0.3)]">
        <HomeCarousel />
      </div>

      <div className="relative w-full min-h-125 bg-solar-dark flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-32 py-8 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat bg-size-[400px] opacity-20 pointer-events-none z-0"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 55%)',
            maskImage: 'linear-gradient(to bottom, black 10%, transparent 55%)'
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center md:items-start max-w-2xl text-center md:text-left">
          <div className="mb-8 md:mb-10 flex flex-col items-center md:items-start" style={{ filter: 'drop-shadow(0px 0px 40px rgba(255, 26, 0, 0.6))' }}>
            <h2 className="font-kalam text-white text-4xl md:text-5xl font-bold tracking-wide -rotate-2 -mb-2 md:-mb-2.5">
              EAE, EU SOU
            </h2>

            <div className="relative inline-block ml-0 md:ml-5 mt-2 md:mt-0">
              <h1 className="font-inter text-white text-5xl md:text-7xl font-bold uppercase tracking-[0.00001em]">
                SOLAR3S!
              </h1>

              <svg
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-solar-red"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,15 Q50,2 100,10 T198,15"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          <p className="font-inter text-white text-lg md:text-2xl font-bold leading-relaxed mb-6 md:mb-8">
            Artista digital, animador e storyboarder com um estilo cartoon mais focado para o público jovem adulto (mas nada me impede de trabalhar para outros públicos tambem).
          </p>
          <p className="font-inter text-white text-lg md:text-2xl font-bold leading-relaxed">
            Desenho desde que me conheço por gente, então exercito essa minha paixão e habilidade a muito tempo.
          </p>
        </div>

        <div className="relative z-10 mt-16 md:mt-0 shrink-0">
          <div className="w-80 h-80 md:w-150 md:h-150 overflow-hidden flex items-center justify-center relative">
            <img
              src="/oc.png"
              alt="OC Solar3s"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home