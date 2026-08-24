import type { Tour } from "@/types/booking";

export const TOURS: Tour[] = [
  {
    id: "ciudad-perdida",

    nombre: "Trek a Ciudad Perdida",

    descripcion:
      "Expedición de cuatro días por los caminos de la Sierra Nevada hasta llegar a Ciudad Perdida, atravesando selva tropical, ríos y antiguos senderos de montaña con acompañamiento de guías locales.",

    duracion: "4 días / 3 noches",

    duracionDias: 4,

    nivel: "Exigente",

    precio: "$1.450.000 COP",

    cupoPorSalida: 8,

    imagen: "/images/tours/ciudad-perdida.jpeg",

    fechasMantenimiento: [
      "2026-09-14",
      "2026-10-12",
    ],
  },

  {
    id: "tayrona-esencial",

    nombre: "Costa Tayrona esencial",

    descripcion:
      "Recorrido de tres días por la costa del Parque Tayrona, combinando senderos de bosque tropical, playas y espacios de descanso para conocer algunos de los paisajes más representativos del Caribe colombiano.",

    duracion: "3 días / 2 noches",

    duracionDias: 3,

    nivel: "Moderado",

    precio: "$890.000 COP",

    cupoPorSalida: 12,

    imagen: "/images/tours/tayrona-esencial.jpeg",

    fechasMantenimiento: [
      "2026-09-08",
      "2026-10-06",
    ],
  },

  {
    id: "cafe-montana-kogui",

    nombre: "Café y montaña Kogui",

    descripcion:
      "Experiencia de dos días en las montañas de la Sierra Nevada para conocer fincas cafeteras, recorrer caminos rurales y acercarse a prácticas tradicionales de las comunidades de la región.",

    duracion: "2 días / 1 noche",

    duracionDias: 2,

    nivel: "Ligero",

    precio: "$540.000 COP",

    cupoPorSalida: 10,

    imagen: "/images/tours/cafe-montana-kogui.jpeg",

    fechasMantenimiento: [
      "2026-09-17",
      "2026-10-15",
    ],
  },

  {
    id: "sierra-nevada-profunda",

    nombre: "Sierra Nevada profunda",

    descripcion:
      "Expedición de cinco días por diferentes paisajes de la Sierra Nevada de Santa Marta, combinando caminos de montaña, bosques, ríos y comunidades rurales.",

    duracion: "5 días / 4 noches",

    duracionDias: 5,

    nivel: "Exigente",

    precio: "$1.850.000 COP",

    cupoPorSalida: 8,

    imagen: "/images/tours/sierra-nevada-profunda.jpeg",

    fechasMantenimiento: [
      "2026-09-21",
      "2026-10-19",
    ],
  },

  {
    id: "mamey-ciudad-perdida",

    nombre: "Mamey y Ciudad Perdida",

    descripcion:
      "Ruta de trekking hacia Ciudad Perdida iniciando desde la zona de El Mamey y recorriendo caminos de montaña, ríos y selva hasta llegar al complejo arqueológico.",

    duracion: "4 días / 3 noches",

    duracionDias: 4,

    nivel: "Exigente",

    precio: "$1.380.000 COP",

    cupoPorSalida: 10,

    imagen: "/images/tours/mamey-ciudad-perdida.jpeg",

    fechasMantenimiento: [
      "2026-09-28",
      "2026-10-26",
    ],
  },

  {
    id: "cabo-san-juan",

    nombre: "Cabo San Juan",

    descripcion:
      "Escapada de dos días por el Parque Tayrona para recorrer senderos de bosque tropical, visitar playas de la costa y disfrutar de una noche cercana al entorno natural del parque.",

    duracion: "2 días / 1 noche",

    duracionDias: 2,

    nivel: "Moderado",

    precio: "$490.000 COP",

    cupoPorSalida: 14,

    imagen: "/images/tours/cabo-san-juan.jpeg",

    fechasMantenimiento: [
      "2026-09-10",
      "2026-10-08",
    ],
  },

  {
    id: "rios-cascadas-sierra",

    nombre: "Ríos y cascadas de la Sierra",

    descripcion:
      "Caminata de dos días por caminos rurales de las estribaciones de la Sierra Nevada, visitando ríos, pozos naturales y cascadas rodeadas de bosque tropical.",

    duracion: "2 días / 1 noche",

    duracionDias: 2,

    nivel: "Moderado",

    precio: "$420.000 COP",

    cupoPorSalida: 12,

    imagen: "/images/tours/rios-cascadas-sierra.jpeg",

    fechasMantenimiento: [
      "2026-09-16",
      "2026-10-14",
    ],
  },

  {
    id: "pueblito-tayrona",

    nombre: "Pueblito Tayrona",

    descripcion:
      "Ruta de un día por antiguos caminos del territorio Tayrona, atravesando bosque tropical y senderos de montaña para conocer vestigios arqueológicos y paisajes de la Sierra.",

    duracion: "1 día",

    duracionDias: 1,

    nivel: "Moderado",

    precio: "$280.000 COP",

    cupoPorSalida: 15,

    imagen: "/images/tours/pueblito-tayrona.jpeg",

    fechasMantenimiento: [
      "2026-09-18",
      "2026-10-16",
    ],
  },

  {
    id: "amanecer-sierra",

    nombre: "Amanecer en la Sierra",

    descripcion:
      "Experiencia de un día para contemplar el amanecer desde las montañas, caminar por senderos rurales y descubrir paisajes de la Sierra Nevada de Santa Marta.",

    duracion: "1 día",

    duracionDias: 1,

    nivel: "Ligero",

    precio: "$220.000 COP",

    cupoPorSalida: 15,

    imagen: "/images/tours/amanecer-sierra.jpeg",

    fechasMantenimiento: [
      "2026-09-22",
      "2026-10-20",
    ],
  },

  {
    id: "experiencia-cafetera",

    nombre: "Experiencia cafetera de la Sierra",

    descripcion:
      "Visita de un día a una finca cafetera de montaña para conocer el proceso del café, recorrer cultivos y disfrutar de los paisajes de altura de la Sierra Nevada.",

    duracion: "1 día",

    duracionDias: 1,

    nivel: "Ligero",

    precio: "$190.000 COP",

    cupoPorSalida: 12,

    imagen: "/images/tours/experiencia-cafetera.jpeg",

    fechasMantenimiento: [
      "2026-09-15",
      "2026-10-13",
    ],
  },
];