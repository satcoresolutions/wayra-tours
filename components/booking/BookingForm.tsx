import type { Tour } from "@/types/booking";

type Props = {
  tour: Tour;
  fecha: Date | null;
  nombre: string;
  correo: string;
  personas: number;
  onNombreChange: (value: string) => void;
  onCorreoChange: (value: string) => void;
  onPersonasChange: (value: number) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function BookingForm({
  tour,
  fecha,
  nombre,
  correo,
  personas,
  onNombreChange,
  onCorreoChange,
  onPersonasChange,
  onSubmit,
}: Props) {

  if (!fecha) {
    return (
      <div className="rounded-2xl border border-musgo/40 bg-selva/60 p-6">
        <p className="font-display text-xl">
          Confirmar reserva
        </p>

        <p className="mt-1 text-sm text-niebla">
          {tour.nombre} · {tour.duracion} · {tour.precio}
        </p>

        <div className="my-5 h-px bg-musgo/30" />

        <p className="text-sm text-niebla">
          Elige una fecha disponible en el calendario para continuar.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-musgo/40 bg-selva/60 p-6">

      <p className="font-display text-xl">
        Confirmar reserva
      </p>

      <p className="mt-1 text-sm text-niebla">
        {tour.nombre} · {tour.duracion} · {tour.precio}
      </p>

      <div className="my-5 h-px bg-musgo/30" />

      <form
        onSubmit={onSubmit}
        className="space-y-4"
      >

        <p className="font-mono text-sm text-oroSuave">
          Fecha elegida:{" "}
          {fecha.toLocaleDateString(
            "es-CO",
            {
              weekday: "long",
              day: "numeric",
              month: "long",
            }
          )}
        </p>

        <div>
          <label
            htmlFor="nombre"
            className="mb-1 block text-sm text-niebla"
          >
            Nombre completo
          </label>

          <input
            id="nombre"
            required
            value={nombre}
            onChange={(e) =>
              onNombreChange(e.target.value)
            }
            className="w-full rounded-lg border border-musgo/50 bg-noche/60 px-3 py-2 text-arena outline-none focus:border-oro"
            placeholder="Escribe tu nombre"
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="mb-1 block text-sm text-niebla"
          >
            Correo electrónico
          </label>

          <input
            id="correo"
            type="email"
            required
            value={correo}
            onChange={(e) =>
              onCorreoChange(e.target.value)
            }
            className="w-full rounded-lg border border-musgo/50 bg-noche/60 px-3 py-2 text-arena outline-none focus:border-oro"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div>
          <label
            htmlFor="personas"
            className="mb-1 block text-sm text-niebla"
          >
            Número de viajeros
          </label>

          <input
            id="personas"
            type="number"
            min={1}
            max={tour.cupoPorSalida}
            required
            value={personas}
            onChange={(e) =>
              onPersonasChange(
                Number(e.target.value)
              )
            }
            className="w-full rounded-lg border border-musgo/50 bg-noche/60 px-3 py-2 text-arena outline-none focus:border-oro"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-oro py-3 font-semibold text-noche transition-opacity hover:opacity-90"
        >
          Reservar salida
        </button>

      </form>

    </div>
  );
}