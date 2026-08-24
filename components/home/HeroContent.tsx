import type { Tour } from "@/types/booking";

type Props = {
  tour: Tour | null;
  onExplore: () => void;
  onReserve: () => void;
};

export default function HeroContent({
  tour,
  onExplore,
  onReserve,
}: Props) {

  // HERO INICIAL
  if (!tour) {
    return (
      <>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-oroSuave">
          Sierra Nevada de Santa Marta · Colombia
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
          El viento de la Sierra
          <span className="block italic text-oroSuave">
            guía cada salida.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-niebla">
          Wayra Tours conecta viajeros con experiencias de
          naturaleza, montaña y cultura en la Sierra Nevada
          de Santa Marta, con grupos pequeños y acompañamiento
          local.
        </p>

        <button
          type="button"
          onClick={onExplore}
          className="mt-10 rounded-full bg-oro px-8 py-3 font-semibold text-noche transition hover:opacity-90"
        >
          Explorar rutas
        </button>
      </>
    );
  }

  // HERO CUANDO SE SELECCIONA UN TOUR
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-oroSuave">
        Experiencia Wayra Tours
      </p>

      <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
        {tour.nombre}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-niebla">
        {tour.descripcion}
      </p>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-arena">
        <span>{tour.duracion}</span>
        <span>{tour.nivel}</span>
        <span>{tour.precio}</span>
        <span>Hasta {tour.cupoPorSalida} personas</span>
      </div>

      <button
        type="button"
        onClick={onReserve}
        className="mt-10 rounded-full bg-oro px-8 py-3 font-semibold text-noche transition hover:opacity-90"
      >
        Ver disponibilidad
      </button>
    </>
  );
}