import { useState } from "react";
import { TOURS } from "@/data/tours";
import type { Tour } from "@/types/booking";

export function useBooking() {
  const hoy = new Date();

  const [anio, setAnio] = useState(hoy.getFullYear());
  const [mes, setMes] = useState(hoy.getMonth());

  const [tour, setTour] = useState<Tour>(TOURS[0]);

  const [fecha, setFecha] = useState<Date | null>(null);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [personas, setPersonas] = useState(2);

  const [confirmado, setConfirmado] = useState(false);

  function seleccionarTour(nuevoTour: Tour) {
    setTour(nuevoTour);
    setFecha(null);
    setConfirmado(false);
  }

  function seleccionarFecha(nuevaFecha: Date) {
    setFecha(nuevaFecha);
    setConfirmado(false);
  }

  function mesAnterior() {
    setFecha(null);
    setConfirmado(false);

    if (mes === 0) {
      setMes(11);
      setAnio((actual) => actual - 1);
      return;
    }

    setMes((actual) => actual - 1);
  }

  function mesSiguiente() {
    setFecha(null);
    setConfirmado(false);

    if (mes === 11) {
      setMes(0);
      setAnio((actual) => actual + 1);
      return;
    }

    setMes((actual) => actual + 1);
  }

  function reservar(e: React.FormEvent) {
    e.preventDefault();

    if (!fecha || !nombre.trim() || !correo.trim()) {
      return;
    }

    setConfirmado(true);
  }

  return {
    hoy,

    anio,
    mes,

    tour,
    fecha,

    nombre,
    correo,
    personas,

    confirmado,

    seleccionarTour,
    seleccionarFecha,

    mesAnterior,
    mesSiguiente,

    setNombre,
    setCorreo,
    setPersonas,

    reservar,
  };
}