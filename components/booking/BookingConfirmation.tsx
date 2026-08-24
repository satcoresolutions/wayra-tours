import type { Tour } from "@/types/booking";

type Props = {
  tour: Tour;
  fecha: Date;
  nombre: string;
  correo: string;
  personas: number;
};

export default function BookingConfirmation({
  tour,
  fecha,
  nombre,
  correo,
  personas,
}: Props) {
  return (
    <div className="rounded-lg border border-oro/50 bg-oro/10 p-4">

      <p className="font-display text-lg text-oroSuave">
        Reserva registrada
      </p>

      <p className="mt-2 text-sm text-arena">
        Gracias, {nombre}. Guardamos tu cupo para{" "}
        <span className="text-oroSuave">
          {tour.nombre}
        </span>{" "}
        el{" "}
        {fecha.toLocaleDateString(
          "es-CO",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        )}{" "}
        para {personas}{" "}
        {personas === 1
          ? "persona"
          : "personas"}.
      </p>

      <p className="mt-2 text-xs text-niebla">
        Enviaremos la confirmación a {correo}.
      </p>

    </div>
  );
}