# Wayra Tours — Landing de turismo con calendario de reservas

Landing page de ejemplo para una agencia de turismo (datos inventados),
construida con Next.js 14 (App Router) + TypeScript + Tailwind CSS.
Incluye un calendario funcional para elegir fecha de salida y un
formulario de reserva (sin backend, solo estado en el cliente).

## Cómo correrlo

```bash
npm install
npm run dev
```

Luego abre http://localhost:3000

## Estructura

- `app/page.tsx` — hero, listado de tours y sección de reserva.
- `app/layout.tsx` — fuentes (Fraunces, Work Sans, IBM Plex Mono) y metadata.
- `components/BookingCalendar.tsx` — calendario mensual + formulario de reserva.
- `app/globals.css` — estilos base y accesibilidad (foco visible, reduced motion).

## Personalizar

- Cambia los tours inventados en `TOURS` dentro de `app/page.tsx` y
  `components/BookingCalendar.tsx`.
- La disponibilidad de fechas se genera en `generarSalidasDisponibles`
  (por defecto: todos los jueves y sábados del mes). Reemplázala por
  datos reales o una llamada a tu API cuando tengas backend.
- La paleta de colores y tipografías están definidas en `tailwind.config.js`.
