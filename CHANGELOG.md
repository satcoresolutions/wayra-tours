# Changelog

Todos los cambios importantes de **Wayra Tours** serán documentados en este archivo.

El formato sigue una estructura basada en versiones y categorías de cambios.

---

## [Unreleased]

### Added

- Espacio reservado para nuevas funcionalidades de la landing page turística.
- Mejoras futuras para la presentación y personalización de tours.
- Posibles ampliaciones del calendario de salidas y del formulario de reserva.
- Espacio reservado para futuras integraciones con una API o un backend de reservas.

### Changed

- Espacio reservado para mejoras en la interfaz, la experiencia de usuario y el diseño responsive.
- Espacio reservado para ajustes en la presentación de los tours y la navegación del calendario.
- Espacio reservado para mejoras en la organización y el mantenimiento de los datos turísticos.

### Fixed

- Espacio reservado para correcciones de errores en el calendario, la selección de fechas y el formulario.
- Espacio reservado para correcciones visuales, de accesibilidad y de compatibilidad.

### Removed

- Espacio reservado para la eliminación de componentes, estilos o funcionalidades obsoletas.

### Security

- Espacio reservado para mejoras en la validación y el tratamiento de los datos del formulario.
- Espacio reservado para futuras medidas de protección de datos si se incorpora un backend.
- Espacio reservado para la revisión y actualización de dependencias.

---

## [1.1.0] - 2026-10-21

### Added

- Implementación de la landing page de demostración de Wayra Tours.
- Construcción de la página principal mediante Next.js 14 y App Router.
- Integración de TypeScript para el desarrollo de la aplicación.
- Estilización de la interfaz mediante Tailwind CSS.
- Sección principal o _hero_ para la presentación de la propuesta turística.
- Listado de tours con datos ficticios para demostrar la presentación de experiencias turísticas.
- Sección de reserva integrada en la landing page.
- Componente `BookingCalendar.tsx` para la visualización mensual y selección de fechas de salida.
- Función `generarSalidasDisponibles` para generar fechas de demostración, con salidas predeterminadas los jueves y sábados.
- Formulario de reserva gestionado mediante estado en el cliente.
- Configuración de fuentes tipográficas Fraunces, Work Sans e IBM Plex Mono.
- Configuración de metadatos en `app/layout.tsx`.
- Estilos globales en `app/globals.css`.
- Consideraciones de accesibilidad mediante indicadores de foco visible y soporte para preferencias de movimiento reducido.
- Configuración de personalización visual mediante `tailwind.config.js`.
- Documentación para la instalación, ejecución, personalización de tours y configuración de fechas disponibles.
- Documentación de las limitaciones del calendario y del formulario por la ausencia de un backend.

### Changed

- No aplica si esta versión corresponde al lanzamiento inicial del proyecto.

### Fixed

- No aplica si esta versión corresponde al lanzamiento inicial del proyecto.

### Removed

- No aplica si esta versión corresponde al lanzamiento inicial del proyecto.

### Security

- Se documentó que los datos turísticos y las fechas disponibles son ficticios y no representan disponibilidad real.
- Se aclaró que la selección de una fecha y el envío del formulario de demostración no constituyen una reserva confirmada.
- Se documentó que el calendario y el formulario funcionan en el cliente, sin un backend para procesar reservas.
- Se estableció la necesidad de validar los datos en el servidor si se implementa un sistema de reservas real.
- Se incluyeron recomendaciones para proteger datos personales y revisar las dependencias antes de una futura publicación comercial.

---

## Historial de versiones

| Versión      | Fecha         | Descripción                                                       |
| ------------ | ------------- | ----------------------------------------------------------------- |
| `1.1.0`      | `2026-10-21`  | Versión documentada de la landing page turística de demostración. |
| `Unreleased` | En desarrollo | Cambios futuros pendientes de publicación.                        |

---

## Convenciones

- **Added:** nuevas funcionalidades, componentes o capacidades.
- **Changed:** modificaciones en funcionalidades o estructuras existentes.
- **Fixed:** correcciones de errores.
- **Removed:** funcionalidades, componentes o configuraciones eliminadas.
- **Security:** cambios relacionados con la seguridad, la privacidad y la protección de los datos.

---

<p align="center">
  <strong>Wayra Tours</strong>
</p>

<p align="center">
  Landing de turismo · Calendario de salidas · Formulario de reserva de demostración
</p>

<p align="center">
  <sub>Proyecto de demostración. Las fechas y los datos turísticos no representan disponibilidad ni reservas reales.</sub>
</p>
