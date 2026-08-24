export type Tour = {
  id: string;
  nombre: string;
  descripcion: string;
  duracion: string;
  duracionDias: number;
  nivel: "Ligero" | "Moderado" | "Exigente";
  precio: string;
  cupoPorSalida: number;
  imagen: string;
  fechasMantenimiento: string[];
};

export type BookingData = {
  nombre: string;
  correo: string;
  personas: number;
};