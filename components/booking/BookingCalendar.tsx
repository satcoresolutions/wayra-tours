"use client";

import { TOURS } from "@/data/tours";

import Calendar from "./Calendar";
import TourSelector from "./TourSelector";
import BookingPanel from "./BookingPanel";

import { useBooking } from "./hooks/useBooking";

export default function BookingCalendar() {
  const booking = useBooking();

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">

      {/* =======================================
          IZQUIERDA
          Selector de tour + calendario
      ======================================= */}

      <section className="min-w-0 space-y-6">

        <TourSelector
          tours={TOURS}
          seleccionado={booking.tour}
          onSelect={booking.seleccionarTour}
        />

        <Calendar
          anio={booking.anio}
          mes={booking.mes}
          hoy={booking.hoy}
          tour={booking.tour}
          fechaSeleccionada={booking.fecha}
          onPreviousMonth={booking.mesAnterior}
          onNextMonth={booking.mesSiguiente}
          onSelectDate={booking.seleccionarFecha}
        />

      </section>

      {/* =======================================
          DERECHA
          Panel de reserva
      ======================================= */}

      <section className="min-w-0">

        <BookingPanel
          tour={booking.tour}
          fecha={booking.fecha}
          nombre={booking.nombre}
          correo={booking.correo}
          personas={booking.personas}
          confirmado={booking.confirmado}
          onNombreChange={booking.setNombre}
          onCorreoChange={booking.setCorreo}
          onPersonasChange={booking.setPersonas}
          onSubmit={booking.reservar}
        />

      </section>

    </div>
  );
}