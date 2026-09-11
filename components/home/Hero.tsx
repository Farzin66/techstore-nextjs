"use client";
import { ShieldCheck, Zap, Award } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/hero-slides";


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const currentHero = heroSlides[currentSlide];

  useEffect(()=>{
    let timeOut: ReturnType<typeof setTimeout>;
    const interval = setInterval(()=>{
      setIsVisible(false)
      timeOut = setTimeout(()=>{
        setCurrentSlide(prev=> prev===heroSlides.length-1 ? 0 : prev + 1)
        setIsVisible(true)
        },500)
      },5000)
    return () => {clearInterval(interval); clearTimeout(timeOut);} 
  },[])


  return (
    <section className="relative flex items-center overflow-hidden bg-white pt-6 pb-6 lg:pt-10 lg:pb-0 lg:h-[75vh]">
      <div className="absolute inset-0 -z-10 bg-green-50" />

      <div className="absolute top-10 left-[-5%] w-48 h-48 lg:w-64 lg:h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-5 right-[-5%] w-64 h-64 lg:w-96 lg:h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="container-custom px-4 sm:px-6 relative z-10 h-full flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className={`lg:col-span-12 xl:col-span-6 text-center lg:text-left order-2 lg:order-1 transition-all duration-500 ease-in-out
                 ${isVisible? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-emerald-100 shadow-sm mb-4 lg:mb-6">
                <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-emerald-700">
                  {currentHero.badge}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-4 lg:mb-6 leading-[1.1]">
                {currentHero.primaryTitle}
                <br className="hidden sm:block" />
                <span className="text-green-600">
                  {currentHero.secondaryTitle}
                </span>
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-slate-700 max-w-xl mb-8 lg:mb-10 leading-relaxed font-medium mx-auto lg:mx-0 px-2 lg:px-0">
                {currentHero.description}
              </p>
              <div className="mt-8 lg:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] sm:text-sm font-bold">
                    1 Year Warranty
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] sm:text-sm font-bold">
                    Next-Day Delivery
                  </span>
                </div>
              </div>
            </div>
            <div className={`lg:col-span-12 xl:col-span-6 relative w-full mt-4 lg:mt-0 order-1 lg:order-2 transition-all duration-500 ease-in-out
               ${isVisible? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="relative z-10 p-2 max-w-full mx-auto">
                <div className="relative group h-62.5 sm:h-112.5 lg:h-137.5 w-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 rounded-[30px] sm:rounded-[40px] blur-3xl -z-10"></div>
                  <div className="absolute top-[10%] left-0 bg-white p-2 rounded-xl shadow-lg border border-green-50 hidden sm:block">
                    <Award className="w-4 h-4 text-yellow-500" />
                  </div>
                  <Image
                    src={currentHero.image}
                    alt={currentHero.imageAlt}
                    width={800}
                    height={800}
                    priority
                    className="max-w-[85%] max-h-[85%] object-contain p-4 lg:p-0 drop-shadow-[0_15px_30px_rgba(34,197,94,0.1) ]"
                  />
                  <div className="absolute bottom-[10%] right-0 bg-slate-900 text-white px-3 py-1 rounded-lg shadow-xl hidden sm:block">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-400">
                      Best Seller
                    </p>
                    <p className="text-[10px] font-black">2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
