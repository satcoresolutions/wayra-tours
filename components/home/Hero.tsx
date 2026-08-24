"use client";

import type { Tour } from "@/types/booking";

import HeroContent from "./HeroContent";

type Props = {
  tour: Tour | null;
  onExplore: () => void;
  onReserve: () => void;
  onClearTour: () => void;
};

const HERO_INICIAL = "/images/hero/sierra-nevada.jpeg";

export default function Hero({
  tour,
  onExplore,
  onReserve,
  onClearTour,
}: Props) {
  const imagen = tour?.imagen ?? HERO_INICIAL;
  const alt = tour?.nombre ?? "Sierra Nevada de Santa Marta";

  return (
    <section className="relative min-h-[680px] overflow-hidden px-6 py-20 sm:px-10 lg:px-20">

      {/* =================================
          IMAGEN DEL HERO
      ================================= */}

      <div className="absolute inset-0">

        <img
          src={imagen}
          alt={alt}
          className="h-full w-full object-cover"
        />

        {/* Oscurecimiento general */}
        <div className="absolute inset-0 bg-noche/55" />

        {/* Degradado inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/35 to-transparent" />

        {/* Degradado lateral para mejorar lectura */}
        <div className="absolute inset-0 bg-gradient-to-r from-noche/70 via-noche/20 to-transparent" />

      </div>

      {/* =================================
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

      {/* =================================
          VOLVER AL HERO PRINCIPAL
      ================================= */}

      {tour && (
        <button
          type="button"
          onClick={onClearTour}
          className="
            absolute right-6 top-6 z-20
            rounded-full
            border border-musgo/60
            bg-noche/70
            px-4 py-2
            font-mono text-xs
            text-arena
            backdrop-blur-sm
            transition
            hover:border-oro
            hover:text-oro
          "
        >
          ← Ver todas las rutas
        </button>
      )}

    </section>
  );
}