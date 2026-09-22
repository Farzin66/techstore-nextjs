
"use client";

import { ShieldCheck, Zap, Award } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/hero-slides";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const currentHero = heroSlides[currentSlide];

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setIsVisible(false);

      timeOut = setTimeout(() => {
        setCurrentSlide((prev) =>
          prev === heroSlides.length - 1 ? 0 : prev + 1,
        );
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden bg-white pb-6 pt-6 lg:h-[75vh] lg:pb-0 lg:pt-10">
      <div className="absolute inset-0 -z-10 bg-green-50" />

      <div className="absolute left-[-5%] top-10 h-48 w-48 animate-pulse rounded-full bg-green-200/30 blur-3xl lg:h-64 lg:w-64" />

      <div className="absolute bottom-5 right-[-5%] h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl lg:h-96 lg:w-96" />

      <div className="container-custom relative z-10 flex h-full items-center px-4 sm:px-6">
        <div className="w-full">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div
              className={`order-2 text-center transition-all duration-500 ease-in-out lg:order-1 lg:col-span-12 lg:text-left xl:col-span-6 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-sm lg:mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 sm:text-[12px]">
                  {currentHero.badge}
                </span>
              </div>

              <h1 className="mb-4 text-3xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:mb-6 lg:text-7xl">
                {currentHero.primaryTitle}
                <br className="hidden sm:block" />
                <span className="text-green-600">
                  {currentHero.secondaryTitle}
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-xl px-2 text-sm font-medium leading-relaxed text-slate-700 sm:text-lg md:text-xl lg:mx-0 lg:mb-10 lg:px-0">
                {currentHero.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:mt-10 lg:justify-start">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="rounded-full bg-green-100 p-1.5 text-green-600">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>

                  <span className="text-[10px] font-bold sm:text-sm">
                    1 Year Warranty
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <div className="rounded-full bg-green-100 p-1.5 text-green-600">
                    <Zap className="h-3.5 w-3.5" />
                  </div>

                  <span className="text-[10px] font-bold sm:text-sm">
                    Next-Day Delivery
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`relative order-1 mt-4 w-full transition-all duration-500 ease-in-out lg:order-2 lg:col-span-12 lg:mt-0 xl:col-span-6 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative z-10 mx-auto max-w-full p-2">
                <div className="group relative flex h-62.5 w-full items-center justify-center sm:h-112.5 lg:h-137.5">
                  <div className="absolute inset-0 -z-10 rounded-[30px] bg-white/20 blur-3xl sm:rounded-[40px]" />

                  <div className="absolute left-0 top-[10%] hidden rounded-xl border border-green-50 bg-white p-2 shadow-lg sm:block">
                    <Award className="h-4 w-4 text-yellow-500" />
                  </div>

                  <Image
                    src={currentHero.image}
                    alt={currentHero.imageAlt}
                    width={800}
                    height={800}
                    priority={currentSlide === 0}
                    className="max-h-[85%] max-w-[85%] object-contain p-4 drop-shadow-[0_15px_30px_rgba(34,197,94,0.1)] lg:p-0"
                  />

                  <div className="absolute bottom-[10%] right-0 hidden rounded-lg bg-slate-900 px-3 py-1 text-white shadow-xl sm:block">
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

