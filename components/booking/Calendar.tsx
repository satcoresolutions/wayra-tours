import {
  DIAS_SEMANA,
  NOMBRES_MES,
  esFechaMantenimiento,
  esFechaPasada,
  esMismaFecha,
  obtenerFechasDelTour,
  obtenerPrimerDiaSemana,
  obtenerTotalDias,
  puedeIniciarTour,
} from "@/lib/booking/calendar";

import type { Tour } from "@/types/booking";

type Props = {
  anio: number;
  mes: number;
  hoy: Date;
  tour: Tour;
  fechaSeleccionada: Date | null;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onSelectDate: (fecha: Date) => void;
};

export default function Calendar({
  anio,
  mes,
  hoy,
  tour,
  fechaSeleccionada,
  onPreviousMonth,
  onNextMonth,
  onSelectDate,
}: Props) {
  const primerDiaSemana =
    obtenerPrimerDiaSemana(anio, mes);

  const totalDias =
    obtenerTotalDias(anio, mes);

  const celdas: Array<number | null> = [
    ...Array(primerDiaSemana).fill(null),

    ...Array.from(
      { length: totalDias },
      (_, i) => i + 1
    ),
  ];

  return (
    <div className="rounded-2xl border border-musgo/40 bg-selva/60 p-6">

      {/* =========================
          HEADER
      ========================= */}

      <div className="mb-5 flex items-center justify-between">

        <button
          type="button"
          onClick={onPreviousMonth}
          aria-label="Mes anterior"
          className="rounded-full border border-musgo/50 px-3 py-1 text-oroSuave transition-colors hover:border-oro"
        >
          ‹
        </button>

        <div className="text-center">

          <p className="font-display text-xl tracking-wide">
            {NOMBRES_MES[mes]}{" "}
            <span className="text-niebla">
              {anio}
            </span>
          </p>

          <p className="mt-1 text-xs text-niebla">
            {tour.nombre}
          </p>

        </div>

        <button
          type="button"
          onClick={onNextMonth}
          aria-label="Mes siguiente"
          className="rounded-full border border-musgo/50 px-3 py-1 text-oroSuave transition-colors hover:border-oro"
        >
          ›
        </button>

      </div>

      {/* =========================
          DÍAS DE LA SEMANA
      ========================= */}

      <div className="grid grid-cols-7 gap-1 font-mono text-xs text-niebla">
        {DIAS_SEMANA.map((dia) => (
          <div
            key={dia}
            className="py-2 text-center"
          >
            {dia}
          </div>
        ))}
      </div>

      {/* =========================
          CALENDARIO
      ========================= */}

      <div className="grid grid-cols-7 gap-1 font-mono text-sm">

        {celdas.map((dia, index) => {

          /*
           * Espacio vacío antes del primer
           * día del mes.
           */
          if (dia === null) {
            return (
              <div
                key={`vacio-${index}`}
              />
            );
          }

          const fecha = new Date(
            anio,
            mes,
            dia
          );

          /*
           * ¿La fecha ya pasó?
           */
          const pasado =
            esFechaPasada(
              fecha,
              hoy
            );

          /*
           * ¿La fecha está marcada
           * específicamente como mantenimiento?
           */
          const mantenimiento =
            esFechaMantenimiento(
              fecha,
              tour.fechasMantenimiento
            );

          /*
           * ¿El tour completo puede
           * comenzar en esta fecha?
           *
           * Esto es importante para tours
           * de 2, 3, 4 o 5 días.
           */
          const recorridoDisponible =
            puedeIniciarTour(
              fecha,
              tour.duracionDias,
              tour.fechasMantenimiento
            );

          /*
           * La fecha puede seleccionarse
           * únicamente si:
           *
           * - no pasó
           * - no está en mantenimiento
           * - todo el recorrido está disponible
           */
          const disponible =
            !pasado &&
            !mantenimiento &&
            recorridoDisponible;

          /*
           * ¿Es la fecha actualmente
           * seleccionada?
           */
          const seleccionado =
            fechaSeleccionada !== null &&
            esMismaFecha(
              fechaSeleccionada,
              fecha
            );

          /*
           * Determinamos si el bloqueo
           * viene porque el recorrido
           * atraviesa una fecha de mantenimiento.
           */
          const recorridoBloqueado =
            !pasado &&
            !mantenimiento &&
            !recorridoDisponible;

          return (
            <button
              key={dia}
              type="button"
              disabled={!disponible}
              onClick={() =>
                onSelectDate(fecha)
              }
              title={
                mantenimiento
                  ? "Mantenimiento"
                  : recorridoBloqueado
                  ? `No disponible para un recorrido de ${tour.duracionDias} días`
                  : disponible
                  ? "Salida disponible"
                  : pasado
                  ? "Fecha pasada"
                  : undefined
              }
              className={`aspect-square rounded-lg transition-colors ${
                seleccionado
                  ? "bg-oro font-semibold text-noche"

                  : pasado
                  ? "text-niebla/20"

                  : mantenimiento
                  ? "bg-red-500/20 text-red-400"

                  : recorridoBloqueado
                  ? "bg-red-500/10 text-red-300/60"

                  : disponible
                  ? "bg-musgo/30 text-oroSuave hover:bg-oro/30"

                  : "text-niebla/50"
              }`}
            >
              {dia}
            </button>
          );
        })}

      </div>

      {/* =========================
          INFORMACIÓN DEL TOUR
      ========================= */}

      <div className="mt-5 space-y-2">

        <div className="flex items-center gap-2 text-xs text-niebla">

          <span className="h-2.5 w-2.5 rounded-full bg-musgo/70" />

          <span>
            Salida disponible
          </span>

        </div>

        <div className="flex items-center gap-2 text-xs text-niebla">

          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />

          <span>
            Mantenimiento
          </span>

        </div>

        <div className="flex items-center gap-2 text-xs text-niebla">

          <span className="h-2.5 w-2.5 rounded-full bg-red-300/40" />

          <span>
            El recorrido atraviesa una fecha no disponible
          </span>

        </div>

        <div className="flex items-center gap-2 text-xs text-niebla">

          <span className="h-2.5 w-2.5 rounded-full bg-niebla/20" />

          <span>
            Fecha pasada
          </span>

        </div>

      </div>

      {/* =========================
          RESUMEN
      ========================= */}

      <div className="mt-4 border-t border-musgo/30 pt-4">

        <p className="text-xs text-niebla">
          Salidas disponibles todos los días,
          sujetas a disponibilidad del recorrido.
        </p>

        <p className="mt-1 text-xs text-niebla">
          Duración:{" "}
          <span className="text-arena">
            {tour.duracion}
          </span>
          {" · "}
          Cupo máximo:{" "}
          <span className="text-arena">
            {tour.cupoPorSalida} personas
          </span>
        </p>

      </div>

    </div>
  );
}