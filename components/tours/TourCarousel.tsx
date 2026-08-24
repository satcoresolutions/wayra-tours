"use client";

import { useRef } from "react";
import type { Tour } from "@/types/booking";

import TourCard from "./TourCard";

type Props = {
  tours: Tour[];
  seleccionado: Tour | null;
  onSelect: (tour: Tour) => void;
};

export default function TourCarousel({
  tours,
  seleccionado,
  onSelect,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  function mover(direccion: number) {
    trackRef.current?.scrollBy({
      left: direccion * 360,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">

      {/* =================================
          BOTÓN ANTERIOR
      ================================= */}

      <button
        type="button"
        onClick={() => mover(-1)}
        aria-label="Ver tour anterior"
        className="
          absolute left-0 top-1/2 z-10
          hidden -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-full
          border border-musgo/60
          bg-noche
          px-4 py-3
          text-2xl text-oroSuave
          transition
          hover:border-oro
          hover:bg-selva
          md:flex
        "
      >
        ‹
      </button>

      {/* =================================
          TRACK
      ================================= */}

      <div
        ref={trackRef}
        className="
          flex gap-6
          overflow-x-auto
          scroll-smooth
          pb-4
          snap-x snap-mandatory
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
            seleccionado={
              seleccionado?.id === tour.id
            }
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* =================================
          BOTÓN SIGUIENTE
      ================================= */}

      <button
        type="button"
        onClick={() => mover(1)}
        aria-label="Ver siguiente tour"
        className="
          absolute right-0 top-1/2 z-10
          hidden translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-full
          border border-musgo/60
          bg-noche
          px-4 py-3
          text-2xl text-oroSuave
          transition
          hover:border-oro
          hover:bg-selva
          md:flex
        "
      >
        ›
      </button>

    </div>
  );
}