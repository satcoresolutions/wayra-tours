<p align="center">
  <img src="./public/logo.png" alt="Wayra Tours Logo" width="180" />
</p>

<p align="center">
  <strong>WAYRA TOURS</strong>
</p>

<p align="center">
  Descubre nuevos destinos, explora experiencias y planifica tu próxima aventura.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-Enabled-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-Enabled-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Booking-Client--Side-orange" alt="Client-side booking" />
  <img src="https://img.shields.io/badge/Backend-Not_Implemented-lightgrey" alt="Backend not implemented" />
  <img src="https://img.shields.io/badge/Project-Demo-blueviolet" alt="Demo project" />
</p>

<p align="center">
  <strong>Turismo · Experiencias · Calendario de salidas · Formulario de reserva de demostración</strong>
</p>

---

## 1. Acerca del proyecto

**Wayra Tours** es una landing page de demostración para una agencia de turismo ficticia. Está construida con Next.js 14, App Router, TypeScript y Tailwind CSS, y presenta una estructura orientada a mostrar destinos, experiencias turísticas y opciones de reserva.

La aplicación incorpora un calendario mensual para seleccionar fechas de salida y un formulario de reserva que administra la interacción mediante el estado del cliente.

El proyecto permite explorar una experiencia de usuario de turismo sin necesidad de configurar un servidor backend. Sin embargo, las reservas no se envían a un sistema externo, no se almacenan en una base de datos y no representan disponibilidad turística real.

### Objetivos principales

- Presentar una landing page de turismo con una estructura visual atractiva.
- Mostrar un listado de tours de ejemplo.
- Permitir la selección de fechas mediante un calendario mensual.
- Ofrecer un formulario de reserva de demostración.
- Facilitar la personalización de tours, fechas, colores y tipografías.
- Proporcionar una base para futuras integraciones con una API o un backend.

> **Importante:** los destinos, tours, precios, fechas y demás datos comerciales deben considerarse ficticios mientras no sean sustituidos y verificados con información real.

## 2. Identidad del proyecto

| Propiedad             | Descripción                                 |
| --------------------- | ------------------------------------------- |
| Nombre                | Wayra Tours                                 |
| Tipo                  | Landing page turística de demostración      |
| Propósito             | Presentación de tours y selección de fechas |
| Framework             | Next.js 14                                  |
| Arquitectura de rutas | App Router                                  |
| Lenguaje              | TypeScript                                  |
| Estilos               | Tailwind CSS                                |
| Calendario            | Selección mensual de fechas en el cliente   |
| Reservas              | Formulario de demostración sin backend      |
| Datos                 | Información turística ficticia              |

Wayra Tours es el nombre del proyecto de ejemplo. No se ha proporcionado información que permita afirmar que representa una agencia turística real o que presta servicios comerciales efectivos.

## 3. Características principales

### Landing page turística

- Sección principal o _hero_.
- Listado de tours de ejemplo.
- Sección de reserva.
- Presentación de información turística mediante contenido de demostración.
- Estructura basada en componentes de Next.js.

### Calendario de reservas

El componente `BookingCalendar.tsx` incorpora un calendario mensual para visualizar y seleccionar fechas de salida.

Entre sus características documentadas se encuentran:

- Visualización mensual.
- Selección de fecha de salida.
- Generación de fechas disponibles mediante una función configurable.
- Integración con el formulario de reserva.

Por defecto, la función `generarSalidasDisponibles` genera salidas para los jueves y sábados del mes. Este comportamiento es una regla de demostración y no representa la disponibilidad confirmada de un operador turístico.

### Formulario de reserva

- Formulario integrado con el calendario.
- Selección de una fecha de salida.
- Gestión de interacciones mediante estado en el cliente.
- Base para incorporar posteriormente validaciones y envío a un backend.

El formulario no confirma reservas reales ni garantiza la disponibilidad de un tour.

### Diseño y accesibilidad

- Estilos mediante Tailwind CSS.
- Fuentes Fraunces, Work Sans e IBM Plex Mono.
- Estilos base definidos en `app/globals.css`.
- Indicadores de foco visible.
- Consideraciones para usuarios que prefieren movimiento reducido.

## 4. Tecnologías utilizadas

| Tecnología    | Función                                             |
| ------------- | --------------------------------------------------- |
| Next.js 14    | Framework web y App Router.                         |
| React         | Construcción de componentes e interfaces.           |
| TypeScript    | Tipado estático.                                    |
| Tailwind CSS  | Estilización de la interfaz.                        |
| Fraunces      | Tipografía utilizada por el proyecto.               |
| Work Sans     | Tipografía utilizada por el proyecto.               |
| IBM Plex Mono | Tipografía monoespaciada utilizada por el proyecto. |

Las versiones exactas de React, TypeScript, Tailwind CSS y las demás dependencias deben verificarse en `package.json` y en el archivo de bloqueo del proyecto.

## 5. Requisitos previos

Para ejecutar el proyecto necesitas:

- Node.js en una versión compatible con Next.js 14.
- npm.
- Un editor de código compatible con TypeScript.
- Git, si vas a clonar el repositorio.

Se recomienda utilizar una versión de Node.js compatible con las dependencias instaladas y mantener consistencia entre los entornos de desarrollo.

## 6. Instalación

### 6.1. Obtener el proyecto

Si el código está disponible en un repositorio Git:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <DIRECTORIO_DEL_PROYECTO>
```

Sustituye los valores de ejemplo por la URL y el directorio reales.

### 6.2. Instalar dependencias

```bash
npm install
```

Este comando instala las dependencias declaradas en el proyecto.

### 6.3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre la aplicación en el navegador:

http://localhost:3000

Si el puerto está ocupado, Next.js puede mostrar una dirección alternativa en la terminal.

## 7. Comandos disponibles

Los comandos disponibles dependen de los scripts definidos en `package.json`. El flujo básico documentado es el siguiente.

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo local.

### Compilación de producción

```bash
npm run build
```

Genera una compilación optimizada para producción, siempre que el script esté configurado.

### Ejecución de producción

```bash
npm run start
```

Ejecuta la compilación de producción previamente generada.

### Otros comandos

No se han proporcionado los scripts de análisis estático, pruebas o formateo del proyecto. Antes de documentarlos o utilizarlos, verifica cuáles están definidos en `package.json`.

## 8. Estructura del proyecto

La estructura descrita para Wayra Tours es:

```text
app/
├── page.tsx
├── layout.tsx
└── globals.css

components/
└── BookingCalendar.tsx

tailwind.config.js
package.json
```

Esta estructura representa los archivos proporcionados en la descripción. El repositorio real puede incluir otros archivos y directorios.

### Responsabilidad de los archivos

| Archivo                          | Responsabilidad                                                        |
| -------------------------------- | ---------------------------------------------------------------------- |
| `app/page.tsx`                   | Página principal, sección hero, listado de tours y sección de reserva. |
| `app/layout.tsx`                 | Layout raíz, fuentes y configuración de metadatos.                     |
| `app/globals.css`                | Estilos globales, accesibilidad y preferencias de movimiento reducido. |
| `components/BookingCalendar.tsx` | Calendario mensual, selección de fechas y formulario de reserva.       |
| `tailwind.config.js`             | Configuración indicada para la paleta de colores y las tipografías.    |
| `package.json`                   | Dependencias y scripts disponibles para ejecutar el proyecto.          |

## 9. Arquitectura y funcionamiento

La aplicación utiliza Next.js App Router para organizar la página principal y el layout, mientras que el calendario y el formulario se gestionan mediante componentes de React.

### Flujo general

1. El usuario abre la landing page.
2. Explora el listado de tours de ejemplo.
3. Accede a la sección de reserva.
4. Visualiza el calendario mensual.
5. Selecciona una fecha de salida disponible.
6. Interactúa con el formulario de reserva.
7. La aplicación gestiona el estado de la interacción en el cliente.

El flujo descrito corresponde a una experiencia de demostración. No se ha especificado una integración con servicios externos para procesar o confirmar reservas.

### Estado del cliente

El calendario y el formulario no requieren un backend para la interacción documentada.

Por tanto, el estado gestionado en el cliente no debe confundirse con almacenamiento persistente. No se ha indicado que los datos sobrevivan a una recarga de página ni que se compartan entre dispositivos.

## 10. Personalización de tours

Los datos de los tours pueden modificarse en la constante `TOURS` indicada en:

- `app/page.tsx`
- `components/BookingCalendar.tsx`

### Procedimiento recomendado

1. Localiza la constante `TOURS` en los archivos indicados.
2. Identifica la estructura de datos utilizada por cada tour.
3. Modifica los datos de ejemplo respetando los campos esperados por los componentes.
4. Comprueba que el listado y el calendario mantengan la coherencia.
5. Ejecuta el proyecto y verifica la presentación de los cambios.

### Sustitución de datos ficticios

Antes de utilizar la landing page en un contexto comercial, reemplaza y verifica la información de demostración, incluyendo cuando corresponda:

- Nombres y descripciones de los tours.
- Destinos y puntos de encuentro.
- Duración de las experiencias.
- Precios y moneda.
- Fotografías y derechos de uso.
- Fechas de salida.
- Condiciones de reserva, cancelación y reembolso.
- Datos de contacto y responsable del servicio.

La estructura exacta de los campos depende de la implementación existente de `TOURS`.

## 11. Configuración de fechas disponibles

La función `generarSalidasDisponibles` controla la generación de fechas disponibles para el calendario.

Por defecto, genera salidas para los jueves y sábados del mes.

### Comportamiento de demostración

Esta regla sirve para probar el calendario sin depender de una API. No consulta inventarios, cupos, calendarios de operadores ni restricciones de transporte.

### Incorporación de disponibilidad real

Para trabajar con disponibilidad real, se recomienda sustituir la lógica de demostración por una fuente de datos fiable.

Una posible evolución sería:

1. Definir un modelo de datos para las salidas.
2. Obtener las fechas desde una API o un backend.
3. Validar la fecha seleccionada en el servidor.
4. Comprobar la disponibilidad y los cupos antes de aceptar una reserva.
5. Gestionar errores, cambios de disponibilidad y respuestas del servicio.
6. Mostrar al usuario el estado real de su solicitud.

La integración deberá diseñarse según el proveedor turístico y los requisitos operativos de la aplicación.

## 12. Personalización visual

La paleta de colores y las tipografías están indicadas en `tailwind.config.js`.

Los estilos base y las reglas de accesibilidad se encuentran en `app/globals.css`.

### Elementos personalizables

- Paleta de colores.
- Tipografías.
- Estilos globales.
- Presentación del hero.
- Distribución visual de los tours.
- Apariencia del calendario.
- Presentación del formulario.
- Adaptación a diferentes tamaños de pantalla.

### Tipografías

El proyecto utiliza las siguientes familias tipográficas:

- **Fraunces:** tipografía de carácter expresivo para jerarquías visuales.
- **Work Sans:** tipografía para una lectura general clara.
- **IBM Plex Mono:** tipografía monoespaciada para elementos que requieran ese estilo.

La función exacta de cada familia dentro de la interfaz debe confirmarse en los estilos y componentes.

### Recomendaciones

- Mantener una jerarquía tipográfica consistente.
- Verificar el contraste entre texto y fondo.
- Probar el calendario en dispositivos móviles.
- Evitar depender únicamente del color para indicar disponibilidad.
- Mantener indicadores de foco visibles.
- Respetar la preferencia del sistema por movimiento reducido.

## 13. Accesibilidad

Los estilos descritos contemplan indicadores de foco visible y soporte para preferencias de movimiento reducido.

Se recomienda mantener estas consideraciones durante cualquier modificación de la interfaz.

### Buenas prácticas

- Permitir el uso del calendario mediante teclado.
- Proporcionar etiquetas comprensibles a los controles.
- Identificar de forma clara la fecha seleccionada.
- Diferenciar visualmente fechas disponibles, no disponibles y seleccionadas.
- Mantener contraste suficiente entre texto y fondo.
- Asociar los mensajes de validación con sus respectivos campos.
- Evitar animaciones innecesarias cuando el usuario solicita movimiento reducido.
- Probar el formulario con tecnologías de asistencia cuando sea posible.

Estas recomendaciones no sustituyen una auditoría formal de accesibilidad.

## 14. SEO y metadatos

El archivo `app/layout.tsx` contiene la configuración de fuentes y metadatos descrita para la aplicación.

Antes de publicar una versión definitiva, se recomienda revisar:

- Título y descripción de la página.
- Metadatos Open Graph, si se incorporan.
- Imagen para compartir en redes sociales.
- URL canónica cuando corresponda.
- Configuración de indexación.
- Semántica de encabezados.
- Textos alternativos de las imágenes.
- Rendimiento y carga de recursos visuales.

No se ha confirmado que todas estas configuraciones estén implementadas. Deben verificarse en el código antes de considerarlas disponibles.

## 15. Datos, privacidad y reservas

La aplicación de ejemplo no incorpora un backend para procesar las reservas. El calendario y el formulario utilizan estado en el cliente.

### Implicaciones

- La selección de una fecha no confirma una reserva.
- La disponibilidad generada no representa inventario turístico real.
- No se ha indicado un sistema de persistencia remota.
- No se ha indicado una integración con un proveedor de pagos.
- No se ha indicado un sistema de autenticación.
- No debe asumirse que los datos del formulario se envían a un servidor.

### Antes de utilizar datos reales

Si se adapta el proyecto para recibir solicitudes reales, será necesario evaluar:

- Qué datos personales se recopilan.
- Para qué se utilizan y durante cuánto tiempo se conservan.
- Dónde se almacenan y quién puede acceder a ellos.
- Cómo se protege la información durante su transmisión.
- Cómo se gestionan el consentimiento y las solicitudes de los titulares, según corresponda.
- Qué obligaciones legales aplican al servicio turístico.

No se deben introducir datos personales reales en una demostración sin una justificación y unas medidas de protección adecuadas.

## 16. Seguridad

La versión descrita es una landing page de demostración con interacciones del lado del cliente.

Si el proyecto evoluciona hacia una aplicación de reservas real, se recomienda:

- Validar los datos también en el servidor.
- No confiar en la disponibilidad calculada por el cliente.
- Proteger los endpoints de reserva.
- Aplicar controles contra solicitudes automatizadas abusivas cuando sea necesario.
- Gestionar los secretos mediante variables de entorno seguras.
- Evitar exponer información personal o de pago en los registros.
- Mantener actualizadas las dependencias.
- Implementar controles de autorización si existen áreas privadas.
- Verificar la disponibilidad antes de confirmar cualquier reserva.

### Reporte de vulnerabilidades

Si el proyecto se mantiene bajo la organización SatCore Solutions, los posibles problemas de seguridad pueden comunicarse a:

**Correo:** satcoresolutions@gmail.com

El canal y los procedimientos definitivos deben confirmarse con el responsable del proyecto.

## 17. Desarrollo y contribuciones

Para ampliar el proyecto, se recomienda mantener la separación entre la página principal, el calendario, los estilos globales y la configuración visual.

### Flujo de trabajo

1. Identificar el cambio requerido.
2. Revisar la implementación existente.
3. Actualizar los componentes afectados.
4. Comprobar el comportamiento del calendario y del formulario.
5. Validar los estilos en diferentes tamaños de pantalla.
6. Revisar la accesibilidad de los controles.
7. Ejecutar las comprobaciones disponibles.
8. Probar la compilación antes de integrar los cambios.

### Criterios de calidad

- Código legible y mantenible.
- Tipado consistente.
- Componentes con responsabilidades claras.
- Ausencia de datos comerciales ficticios en una publicación comercial.
- Validaciones apropiadas para los datos del formulario.
- Comportamiento responsive.
- Documentación actualizada.

## 18. Proyectos derivados

Wayra Tours puede utilizarse como base de experimentación o como punto de partida para una solución turística más completa.

Si se crea una versión derivada, se recomienda documentar:

- El nombre y el propósito del proyecto.
- Las funcionalidades añadidas.
- La fuente de los datos turísticos.
- La estrategia de disponibilidad.
- El mecanismo de envío y almacenamiento de reservas.
- Los proveedores externos y sus dependencias.
- Los requisitos de privacidad y seguridad.
- El proceso de despliegue.
- La versión y el historial de cambios.
- Las condiciones de licencia y distribución.

La adaptación de este ejemplo a un servicio comercial requiere validar tanto los datos como los procesos reales de reserva.

## 19. Atribución

La información proporcionada identifica a Wayra Tours como un proyecto de ejemplo. No se ha confirmado si fue generado mediante SatCore Forge ni si pertenece formalmente a una organización determinada.

Si se confirma que el proyecto forma parte del ecosistema de SatCore Solutions, la atribución corporativa y la información sobre su generación deben ajustarse a las condiciones reales del repositorio.

## 20. Marca y propiedad intelectual

El nombre Wayra Tours, los recursos gráficos, las fotografías, las tipografías y cualquier otro activo deben utilizarse conforme a los derechos que les correspondan.

Antes de distribuir o publicar el proyecto:

- Verifica la titularidad y los permisos de uso del logotipo.
- Confirma que las imágenes puedan utilizarse en el contexto previsto.
- Revisa las licencias de las tipografías y dependencias.
- Sustituye los datos de ejemplo por contenido autorizado.
- Evita utilizar marcas de terceros de una manera que sugiera una afiliación no confirmada.

No se ha proporcionado información suficiente para atribuir la titularidad de la marca Wayra Tours o establecer sus condiciones específicas de uso.

## 21. Dependencias de terceros

El proyecto utiliza las tecnologías indicadas en su descripción:

- Next.js.
- React.
- TypeScript.
- Tailwind CSS.

También incorpora las familias tipográficas Fraunces, Work Sans e IBM Plex Mono, cuya forma de carga y distribución debe verificarse en la implementación.

Cada dependencia y recurso externo mantiene sus propios términos y condiciones. Se recomienda revisar las licencias efectivamente utilizadas antes de distribuir el proyecto.

## 22. Despliegue

La aplicación puede prepararse para producción utilizando los scripts disponibles en el proyecto.

### Preparar la compilación

```bash
npm install
npm run build
```

### Iniciar el servidor de producción

```bash
npm run start
```

El comando de inicio requiere una compilación previa y que el script correspondiente esté configurado en `package.json`.

### Lista de comprobación

- Verificar las versiones de Node.js y las dependencias.
- Sustituir los datos turísticos ficticios cuando corresponda.
- Revisar el calendario y las fechas generadas.
- Comprobar la presentación en dispositivos móviles.
- Revisar los metadatos.
- Confirmar los derechos de uso de imágenes y tipografías.
- Validar la compilación de producción.
- Si se incorporan reservas reales, probar la validación del servidor y la gestión de errores.

No se ha especificado una plataforma de alojamiento obligatoria.

## 23. Estado del proyecto

| Propiedad            | Información                            |
| -------------------- | -------------------------------------- |
| Proyecto             | Wayra Tours                            |
| Tipo                 | Landing page turística de demostración |
| Framework            | Next.js 14                             |
| Enrutamiento         | App Router                             |
| Lenguaje             | TypeScript                             |
| Estilos              | Tailwind CSS                           |
| Calendario           | Interactivo, gestionado en el cliente  |
| Formulario           | Demostración sin backend               |
| Datos turísticos     | Ficticios                              |
| Persistencia remota  | No especificada                        |
| Integración de pagos | No especificada                        |
| Versión              | No especificada                        |
| Fecha de lanzamiento | No especificada                        |

## 24. Hoja de ruta

Las siguientes propuestas representan posibles mejoras y no funcionalidades confirmadas como implementadas.

- [ ] Centralizar los datos de los tours en una fuente única.
- [ ] Mejorar las validaciones del calendario y el formulario.
- [ ] Incorporar pruebas para la generación de fechas disponibles.
- [ ] Añadir pruebas de accesibilidad para la selección de fechas.
- [ ] Integrar una API para consultar disponibilidad real.
- [ ] Implementar un backend para gestionar solicitudes de reserva.
- [ ] Incorporar confirmaciones de reserva con estados claros.
- [ ] Evaluar notificaciones por correo electrónico.
- [ ] Definir mecanismos de persistencia y protección de datos.
- [ ] Documentar el proceso de despliegue y mantenimiento.

Las prioridades deben definirse según las necesidades reales y los recursos disponibles.

## 25. Licencia y distribución

La información proporcionada no especifica una licencia formal para Wayra Tours.

Antes de redistribuir el proyecto, debe verificarse el archivo `LICENSE` o la autorización aplicable al repositorio.

La ausencia de una licencia explícita no debe interpretarse como una autorización automática para reutilizar el código, las imágenes, las marcas o los demás recursos.

## 26. Autoría y contacto

**Proyecto:** Wayra Tours — Landing de turismo con calendario de reservas.

**Descripción:** landing page de demostración para explorar tours ficticios y seleccionar fechas mediante un calendario interactivo.

No se ha proporcionado un repositorio oficial, una dirección de contacto específica ni información que confirme la titularidad comercial del proyecto.

---

<p align="center">
  <strong>Wayra Tours</strong>
</p>

<p align="center">
  Explora destinos. Descubre experiencias. Planifica tu próxima aventura.
</p>

<p align="center">
  <sub>Proyecto de demostración. Las fechas y los datos turísticos no representan disponibilidad ni reservas reales.</sub>
</p>
