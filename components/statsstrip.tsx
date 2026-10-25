"use client";

import { useCallback, useRef, useState } from "react";

type StatItem = {
  value: string;
  label: string;
  color: string;
};

const stats: StatItem[] = [
  {
    value: "+ de 30",
    label: "Muestras realizadas\ncon artistas contemporáneos",
    color: "#ff6f61",
  },
  {
    value: "+ de 50",
    label: "Artistas",
    color: "#ffaaff",
  },
  {
    value: "+ de 20",
    label: "Alianzas y proyectos\ncon gestores culturales",
    color: "#000000",
  },
  {
    value: "+ de 30",
    label: "Textos curatoriales",
    color: "#d4e64d",
  },
  {
    value: "+ de 7",
    label: "Proyectos de\nMecenazgo",
    color: "#b6a194",
  },
  {
    value: "+ de 10",
    label: "Articulaciones\nPúblico-Privadas",
    color: "#b6ff00",
  },
  {
    value: "+ de 200",
    label: "Artículos especializados\nde arte",
    color: "#a97c4f",
  },
  {
    value: "+ de 10",
    label: "Proyectos\nde infancia",
    color: "#ffaaff",
  },
  {
    value: "+ de 10",
    label: "Colaboraciones\nen libros de artistas",
    color: "#ff6f61",
  },
];

export default function StatsStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const element = scrollRef.current;

    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 2);

    setCanScrollRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 2,
    );
  }, []);

  const scroll = (direction: "left" | "right") => {
    const element = scrollRef.current;

    if (!element) return;

    element.scrollBy({
      left:
        direction === "right"
          ? element.clientWidth * 0.75
          : -element.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Estadísticas y trayectoria"
      className="relative w-full px-4 md:px-12 mt-8"
    >
      {/* Flecha izquierda: solo desktop */}
      <button
        type="button"
        aria-label="Desplazar hacia la izquierda"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className="
          absolute left-4 top-1/2 z-20 hidden
          h-10 w-10 -translate-y-1/2 items-center
          justify-center rounded-full bg-white/95
          text-gray-800 shadow-md transition
          hover:bg-white disabled:pointer-events-none
          disabled:opacity-0 md:flex
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="m15 18-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Contenedor desplazable */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        onLoad={updateScrollState}
        className="
          stats-strip-scroll flex w-full
          overflow-x-auto overscroll-x-contain
          scroll-smooth
        "
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={`${stat.label}-${index}`}
            className="
              relative flex w-[190px] shrink-0
              flex-col text-center sm:w-[210px]
              lg:w-[220px]
            "
          >
            {/* Franja de color */}
            <div
              className="relative h-[19px] w-full"
              style={{ backgroundColor: stat.color }}
            >
              {/* Separador verde tramado */}
              {index < stats.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    absolute right-[-10px] top-0 z-10
                    h-[19px] w-[20px]
                    border-x border-black/20
                  "
                  style={{
                    backgroundColor: "#c4ed00",
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent 0px, transparent 2px, rgba(0,0,0,0.65) 2px, rgba(0,0,0,0.65) 3px)",
                  }}
                />
              )}
            </div>

            {/* Cifra */}
            <p
              className="
                mt-2 whitespace-nowrap text-2xl md:text-4xl
                font-semibold leading-tight tracking-tight
                 text-red
              "
            >
              {stat.value}
            </p>

            {/* Descripción */}
            <p
              className="
                mt-0.5 whitespace-pre-line px-2
                text-xl leading-6 font-medium
              "
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Flecha derecha: solo desktop */}
      <button
        type="button"
        aria-label="Desplazar hacia la derecha"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className="
          absolute right-4 top-1/2 z-20 hidden
          h-10 w-10 -translate-y-1/2 items-center
          justify-center rounded-full bg-white/95
          text-gray-800 shadow-md transition
          hover:bg-white disabled:pointer-events-none
          disabled:opacity-0 md:flex
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="m9 18 6-6-6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
