import {useEffect, useState} from 'react'
import {assets} from '../assets/assets'
const slides=[
    {
        id: 1,
        title:'Fast & Trustable Courier ',
        desc:'Deliver',
        image:assets.hero1
    },
    {
        id: 2,
        title:'Fast & Trustable Courier ',
        desc:'Deliver',
        image: assets.hero2
    },
    {
        id: 3,
        title:'Fast & Trustable Courier ',
        desc:'Deliver',
        image: assets.hero3
    }
]
const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
{slides.map((slide, index) => (<div
          key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${ index === current ? "opacity-100 z-10" : "opacity-0 z-0"  }`} >
             <img src={slide.image} alt="" className="w-full h-full object-cover"/>
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
<div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                {slide.desc}
              </p>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition font-medium">
                  Get Started
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/40 hover:bg-white/10 transition">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-emerald-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;

