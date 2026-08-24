export default function Footer() {
  return (
    <footer className="border-t border-musgo/30 px-6 py-10 text-xs text-niebla sm:px-10 lg:px-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Marca */}
        <div>
          <p className="text-arena">
            Wayra Tours · Sierra Nevada de Santa Marta, Colombia
          </p>

          <p className="mt-1">
            contacto@wayratours.example · +57 300 000 0000
          </p>
        </div>

        {/* Desarrollo */}
        <p className="text-left sm:text-right">
          Página desarrollada por{" "}
          <a
            href="https://www.satcore.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-oroSuave transition-colors hover:text-oro"
          >
            SatCore Solutions
          </a>
        </p>

      </div>
    </footer>
  );
}