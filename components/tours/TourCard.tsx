"use client";

import type { Tour } from "@/types/booking";

type Props = {
  tour: Tour;
  seleccionado: boolean;
  onSelect: (tour: Tour) => void;
};

export default function TourCard({
  tour,
  seleccionado,
  onSelect,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(tour)}
      aria-pressed={seleccionado}
      className={`
        w-[85%]
        shrink-0
        snap-start
        text-left
        transition-all
        sm:w-[60%]
        md:w-[45%]
        lg:w-[32%]
        ${
          seleccionado
            ? "scale-[1.02]"
            : "opacity-80 hover:opacity-100"
        }
      `}
    >
      <article
        className={`
          h-full
          overflow-hidden
          rounded-2xl
          border
          transition-all
          ${
            seleccionado
              ? "border-oro/70 bg-selva shadow-lg shadow-oro/5"
              : "border-musgo/40 bg-selva/50 hover:border-musgo"
          }
        `}
      >

        {/* ================================
            IMAGEN
        ================================= */}

        <div className="overflow-hidden">
          <img
            src={tour.imagen}
            alt={tour.nombre}
            className="
              h-48
              w-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>

        {/* ================================
            CONTENIDO
        ================================= */}

        <div className="p-6">

          {/* Etiqueta */}

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-oroSuave">
            Experiencia Wayra
          </p>

          {/* Nombre */}

          <h3
            className={`
              mt-2
              font-display
              text-xl
              ${
                seleccionado
                  ? "text-oro"
                  : "text-oroSuave"
              }
            `}
          >
            {tour.nombre}
          </h3>

          {/* Descripción */}

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-niebla">
            {tour.descripcion}
          </p>

          {/* Información */}

          <div className="mt-6 flex items-center justify-between gap-4 font-mono text-xs text-niebla">

            <span>
              {tour.duracion}
            </span>

            <span>
              {tour.nivel}
            </span>

          </div>

          {/* Precio */}

          <div className="mt-4 border-t border-musgo/30 pt-4">

            <p className="font-mono text-sm text-arena">
              {tour.precio}
            </p>

          </div>

          {/* Estado */}

          {seleccionado && (
            <div className="mt-4">

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-oro
                  px-3 py-1
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-noche
                "
              >
                Seleccionado
              </span>

            </div>
          )}

        </div>

      </article>
    </button>
  );
}