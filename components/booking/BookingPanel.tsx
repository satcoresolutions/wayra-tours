import type { Tour } from "@/types/booking";

import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";

type Props = {
  tour: Tour;
  fecha: Date | null;

  nombre: string;
  correo: string;
  personas: number;

  confirmado: boolean;

  onNombreChange: (value: string) => void;
  onCorreoChange: (value: string) => void;
  onPersonasChange: (value: number) => void;

  onSubmit: (e: React.FormEvent) => void;
};

export default function BookingPanel({
  tour,
  fecha,
  nombre,
  correo,
  personas,
  confirmado,
  onNombreChange,
  onCorreoChange,
  onPersonasChange,
  onSubmit,
}: Props) {
  if (confirmado && fecha) {
    return (
      <BookingConfirmation
        tour={tour}
        fecha={fecha}
        nombre={nombre}
        correo={correo}
        personas={personas}
      />
    );
  }

  return (
    <BookingForm
      tour={tour}
      fecha={fecha}
      nombre={nombre}
      correo={correo}
      personas={personas}
      onNombreChange={onNombreChange}
      onCorreoChange={onCorreoChange}
      onPersonasChange={onPersonasChange}
      onSubmit={onSubmit}
    />
  );
}