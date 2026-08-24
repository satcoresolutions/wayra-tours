export const NOMBRES_MES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const DIAS_SEMANA = [
  "Lu",
  "Ma",
  "Mi",
  "Ju",
  "Vi",
  "Sa",
  "Do",
];

/**
 * Obtiene la posición del primer día del mes.
 *
 * JavaScript:
 * Domingo = 0
 * Lunes   = 1
 * Martes  = 2
 * ...
 *
 * Nuestro calendario comienza en lunes,
 * por eso convertimos el valor.
 */
export function obtenerPrimerDiaSemana(
  anio: number,
  mes: number
): number {
  const dia = new Date(
    anio,
    mes,
    1
  ).getDay();

  return (dia + 6) % 7;
}

/**
 * Obtiene el número total de días del mes.
 */
export function obtenerTotalDias(
  anio: number,
  mes: number
): number {
  return new Date(
    anio,
    mes + 1,
    0
  ).getDate();
}

/**
 * Determina si una fecha ya pasó.
 *
 * La comparación ignora la hora.
 */
export function esFechaPasada(
  fecha: Date,
  hoy: Date
): boolean {
  const fechaComparar = new Date(
    hoy.getFullYear(),
    hoy.getMonth(),
    hoy.getDate()
  );

  const fechaEvaluar = new Date(
    fecha.getFullYear(),
    fecha.getMonth(),
    fecha.getDate()
  );

  return fechaEvaluar < fechaComparar;
}

/**
 * Determina si dos fechas representan
 * exactamente el mismo día.
 */
export function esMismaFecha(
  a: Date,
  b: Date
): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/**
 * Convierte una fecha a formato YYYY-MM-DD.
 *
 * Este formato coincide con las fechas
 * almacenadas en la información del tour.
 */
export function obtenerFechaISO(
  fecha: Date
): string {
  return [
    fecha.getFullYear(),
    String(fecha.getMonth() + 1).padStart(2, "0"),
    String(fecha.getDate()).padStart(2, "0"),
  ].join("-");
}

/**
 * Comprueba si una fecha específica
 * está marcada como mantenimiento.
 */
export function esFechaMantenimiento(
  fecha: Date,
  fechasMantenimiento: string[]
): boolean {
  const fechaISO = obtenerFechaISO(fecha);

  return fechasMantenimiento.includes(fechaISO);
}

/**
 * Obtiene todas las fechas que ocupa un tour
 * a partir de su fecha de inicio.
 *
 * Ejemplo:
 *
 * Inicio: 20 de agosto
 * Duración: 4 días
 *
 * Resultado:
 * 20, 21, 22 y 23 de agosto.
 */
export function obtenerFechasDelTour(
  fechaInicio: Date,
  duracionDias: number
): Date[] {
  return Array.from(
    { length: duracionDias },
    (_, index) => {
      const fecha = new Date(fechaInicio);

      fecha.setDate(
        fecha.getDate() + index
      );

      return fecha;
    }
  );
}

/**
 * Comprueba si un tour puede comenzar
 * en determinada fecha.
 *
 * Una salida solamente es válida si
 * ninguno de los días del recorrido
 * está en mantenimiento.
 */
export function puedeIniciarTour(
  fechaInicio: Date,
  duracionDias: number,
  fechasMantenimiento: string[]
): boolean {
  const fechasTour = obtenerFechasDelTour(
    fechaInicio,
    duracionDias
  );

  return fechasTour.every(
    (fecha) =>
      !esFechaMantenimiento(
        fecha,
        fechasMantenimiento
      )
  );
}