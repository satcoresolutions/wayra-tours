"use client";

import { useState } from "react";

import BookingCalendar from "@/components/booking/BookingCalendar";
import Hero from "@/components/home/Hero";
import TourCarousel from "@/components/tours/TourCarousel";
import Footer from "@/components/layout/Footer";

import { TOURS } from "@/data/tours";
import type { Tour } from "@/types/booking";

export default function Home() {
  const [tourSeleccionado, setTourSeleccionado] =
    useState<Tour | null>(null);

  function seleccionarTour(tour: Tour) {
    setTourSeleccionado(tour);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function limpiarTour() {
    setTourSeleccionado(null);
  }

  function explorarRutas() {
    document
      .getElementById("rutas")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  function irAReserva() {
    document
      .getElementById("reservar")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  return (
    <main className="min-h-screen bg-gradiente-noche">

      {/* =========================================
          HERO
      ========================================= */}

      <Hero
        tour={tourSeleccionado}
        onExplore={explorarRutas}
        onReserve={irAReserva}
        onClearTour={limpiarTour}
      />

      {/* =========================================
          TOURS
      ========================================= */}

      <section
        id="rutas"
        className="px-6 py-16 sm:px-10 lg:px-20"
      >
        <div className="flex items-end justify-between gap-6">

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-oroSuave">
              Wayra Tours
            </p>

            <h2 className="mt-2 font-display text-3xl text-arena">
              Rutas activas
            </h2>
          </div>

          <p className="hidden max-w-md text-right text-sm text-niebla md:block">
            Explora nuestras experiencias y selecciona una ruta
            para conocer todos sus detalles.
          </p>

        </div>

        <div className="mt-10">
          <TourCarousel
            tours={TOURS}
            seleccionado={tourSeleccionado}
            onSelect={seleccionarTour}
          />
        </div>
      </section>

      {/* =========================================
          RESERVA
      ========================================= */}

      <section
        id="reservar"
        className="border-t border-musgo/30 px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="max-w-2xl">

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-oroSuave">
            Disponibilidad
          </p>

          <h2 className="mt-2 font-display text-3xl text-arena">
            Reserva tu salida
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-niebla">
            Selecciona una ruta, elige una fecha disponible y
            confirma tus datos para solicitar tu reserva.
          </p>

        </div>

        <div className="mt-10">
          <BookingCalendar />
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />

    </main>
  );
}