# Study and Beyond — sitio web

Sitio de [studyandbeyond.es](https://studyandbeyond.es): ayudamos a estudiantes
españoles a acceder a grados en Dinamarca. El sitio es estático, rápido y
pensado para posicionar en Google con contenido útil en español.

- **Astro** (estático, cero JS por defecto) con **content collections tipadas (Zod)**.
- **Tailwind** con los tokens de marca en `tailwind.config.mjs` (ver `DISENO.md`).
- Contenido en **MDX** (guías y blog) y **JSON** (base de datos de grados).
- Una única isla interactiva: el **buscador de grados** (Preact).
- Formulario sin backend con **Netlify Forms**. Despliegue en **Netlify**.

## Arrancar en local

Necesitas **Node 22** o superior.

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio en dist/
npm run preview  # sirve dist/ para revisarlo antes de desplegar
```

## Cómo añadir un grado nuevo (sin tocar código)

Crea un archivo JSON en `src/content/grados/`. El nombre del archivo es el
*slug* (la URL): `mi-grado-nuevo.json` → `/grados/mi-grado-nuevo/`.

Copia esta plantilla y rellena lo que sepas. Lo que no esté confirmado, déjalo
en `null`: la ficha mostrará «Por confirmar», nunca un dato inventado.

```json
{
  "nombre_oficial": "Grado en Ejemplo",
  "nombre_es": "Grado en Ejemplo",
  "descripcion": "Una o dos frases claras sobre el grado.",
  "universidad": null,
  "ciudad": null,
  "area": "ciencias-ingenieria",
  "nivel": "grado",
  "duracion_anios": 3,
  "ects": 180,
  "idioma": "Inglés",
  "ramas_especializacion": ["Rama A", "Rama B"],
  "requisitos": {
    "ingles": {
      "toefl": 83,
      "ielts": 6.5,
      "cambridge": "CAE (A, B o C) o FCE (A)",
      "exenciones": "Exento con Bachillerato Internacional (IB) o IGCSE + A-Levels"
    },
    "asignaturas": [
      { "materia": "Matemáticas", "horas_minimas": 375, "antiguedad": "cursadas en los últimos 3 años" }
    ],
    "nota_media_minima": null,
    "examen_admision": false
  },
  "cuota_admision": null,
  "comienzo": "Agosto",
  "plazo_solicitud": null,
  "salidas_laborales": ["Salida A", "Salida B"],
  "masteres_afines": ["Máster afín"],
  "url_oficial": null,
  "ultima_verificacion": "Agosto de 2026",
  "destacado": false
}
```

Valores permitidos:

- **area**: `ciencias-ingenieria` · `negocios` · `sociales-humanidades` · `diseno-creativo`
- **nivel**: `grado` · `master` · `profesionsbachelor` · `top-up`
- **cuota_admision**: `1`, `2` o `null`
- **destacado**: `true` para que aparezca en la portada.

Guarda, `git commit` y `git push`. Netlify reconstruye el sitio solo. Si algún
campo no cumple el esquema, el `build` fallará indicando qué corregir.

## Cómo añadir una guía o una entrada de blog

- **Guía**: crea un `.mdx` en `src/content/guias/`. Campos: `titulo`,
  `descripcion`, `orden`, `ultima_verificacion` y, opcional, `faq`.
- **Blog**: crea un `.mdx` en `src/content/blog/`. Campos: `titulo`,
  `descripcion`, `fecha` (`AAAA-MM-DD`), `autor`, `etiquetas`.
- Pon `borrador: true` para que no se publique todavía.

## Reglas de contenido (no negociables)

- **Beca SU**: nunca una cifra suelta. Siempre con su condición (estatus de
  trabajador con horas documentadas o cinco años de residencia; revisión
  retroactiva). Ver `src/content/guias/su-beca-estudiantes.mdx`.
- **«Matrícula gratuita»**: siempre con a quién aplica (UE/EEE/Suiza) y qué no
  cubre.
- Datos con caducidad (plazos, tasas, cifras): con **fecha de verificación**
  visible.
- Ortografía impecable, con tildes también en mayúsculas. Voz activa, frases
  cortas.

## Analítica

La analítica está **desactivada** por defecto: el sitio no carga scripts de
terceros ni pone cookies, así que no muestra banner. Para activarla:

1. Da de alta el dominio en Plausible (o similar, sin cookies).
2. En `src/config/sitio.ts`, pon `analitica.habilitada: true` y ajusta `dominio`
   y `script`.

Entonces aparece el banner de consentimiento y la analítica solo se carga si el
visitante acepta.

## Despliegue (GitHub + Netlify)

1. Sube el repositorio a GitHub.
2. En Netlify, **New site from Git** → elige el repositorio.
3. Netlify lee `netlify.toml`: comando `npm run build`, carpeta `dist`.
4. **Formularios**: Netlify detecta el formulario de `/contacto/` en el HTML.
   En *Site settings → Forms*, activa una notificación por correo a
   `info@studyandbeyond.es` para recibir cada solicitud.
5. **Dominio**: en *Domain settings*, añade `studyandbeyond.es` y sigue las
   instrucciones de DNS.

## Pendientes

Todo lo que falta por confirmar o revisar (universidades, datos legales,
testimonios, cifras) está en **`PENDIENTE.md`**. Los textos legales necesitan
revisión de una persona con criterio jurídico antes de publicarse.
