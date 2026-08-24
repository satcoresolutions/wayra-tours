"use client";

import { useRef } from "react";
import type { Tour } from "@/types/booking";

type Props = {
  tours: Tour[];
  seleccionado: Tour;
  onSelect: (tour: Tour) => void;
};

export default function TourSelector({
  tours,
  seleccionado,
  onSelect,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  function mover(direccion: number) {
    trackRef.current?.scrollBy({
      left: direccion * 280,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative mb-6">

      {/* Flecha izquierda */}
      <button
        type="button"
        onClick={() => mover(-1)}
        aria-label="Ver tours anteriores"
        className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-musgo/60 bg-noche px-3 py-2 text-xl text-oroSuave shadow-lg transition hover:border-oro hover:bg-selva md:flex"
      >
        ‹
      </button>

      {/* Selector */}
      <div
        ref={trackRef}
        className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tours.map((tour) => {
          const activo = seleccionado.id === tour.id;

          return (
            <button
              key={tour.id}
              type="button"
              onClick={() => onSelect(tour)}
              className={`shrink-0 snap-start rounded-full border px-5 py-2.5 text-sm whitespace-nowrap transition-all ${
                activo
                  ? "border-oro bg-oro text-noche shadow-[0_0_18px_rgba(227,199,126,0.15)]"
                  : "border-musgo/60 bg-selva/40 text-arena hover:border-oro/70 hover:text-oroSuave"
              }`}
            >
              {tour.nombre}
            </button>
          );
        })}
      </div>

      {/* Flecha derecha */}
      <button
        type="button"
        onClick={() => mover(1)}
        aria-label="Ver siguientes tours"
        className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-musgo/60 bg-noche px-3 py-2 text-xl text-oroSuave shadow-lg transition hover:border-oro hover:bg-selva md:flex"
      >
        ›
      </button>

    </div>
  );
}