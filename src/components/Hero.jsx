import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Fast & Reliable Courier Services",
    desc: "Delivering parcels safely and on time, across cities and borders.",
    image: assets.hero1,
  },
  {
    id: 2,
    title: "Seamless Logistics, Smarter Shipping",
    desc: "Optimized routes and real-time tracking for complete peace of mind.",
    image: assets.hero2,
  },
  {
    id: 3,
    title: "Your Trusted Delivery Partner",
    desc: "From local deliveries to nationwide shipping, we handle it all.",
    image: assets.hero3,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden mt-2">
      {slides.map((slide, index) => (
        <div
  key={slide.id}
  className={`absolute inset-0 transition-opacity duration-1000 ${
    index === current ? "opacity-100 z-10" : "opacity-0 z-0"
  }`}
>
  
  <img
    src={slide.image}
    alt={slide.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

  
  <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
    <div className="max-w-xl text-white">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {slide.title}
      </h1>
      <p className="mt-4 text-lg text-gray-200">
        {slide.desc}
      </p>

      
    </div>
  </div>
</div>

      ))}

      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-emerald-500 scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
