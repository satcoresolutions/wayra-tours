"use client";

import type { Tour } from "@/types/booking";

import HeroContent from "./HeroContent";

type Props = {
  tour: Tour | null;
  onExplore: () => void;
  onReserve: () => void;
  onClearTour: () => void;
};

export default function Hero({
  tour,
  onExplore,
  onReserve,
  onClearTour,
}: Props) {
  return (
    <section className="relative min-h-[680px] overflow-hidden px-6 py-20 sm:px-10 lg:px-20">

      {/* ================================
          IMAGEN DEL HERO
      ================================= */}

      {tour?.imagen ? (
        <div className="absolute inset-0">
          <img
            src={tour.imagen}
            alt={tour.nombre}
            className="h-full w-full object-cover"
          />

          {/* Oscurecer imagen */}
          <div className="absolute inset-0 bg-noche/70" />

          {/* Degradado inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/40 to-transparent" />
        </div>
      ) : (
        /* ================================
           HERO INICIAL
        ================================= */
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <svg
            viewBox="0 0 1200 700"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <polygon
              points="0,700 180,350 320,500 500,180 680,450 850,250 1050,420 1200,180 1200,700"
              fill="#16352E"
            />

            <polygon
              points="250,700 450,400 600,550 780,300 950,500 1200,350 1200,700"
              fill="#2F6E5E"
              opacity="0.6"
            />

            <circle
              cx="950"
              cy="120"
              r="55"
              fill="#E3C77E"
              opacity="0.85"
            />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/30 to-transparent" />
        </div>
      )}

      {/* ================================
          CONTENIDO
      ================================= */}

      <div className="relative z-10 flex min-h-[600px] items-center">

        <div className="max-w-4xl">

          <HeroContent
            tour={tour}
            onExplore={onExplore}
            onReserve={onReserve}
          />

        </div>

      </div>

      {/* ================================
          VOLVER A HERO PRINCIPAL
      ================================= */}

      {tour && (
        <button
          type="button"
          onClick={onClearTour}
          className="absolute right-6 top-6 z-20 rounded-full border border-musgo/60 bg-noche/70 px-4 py-2 font-mono text-xs text-arena backdrop-blur-sm transition hover:border-oro hover:text-oro"
        >
          ← Ver todas las rutas
        </button>
      )}

    </section>
  );
}