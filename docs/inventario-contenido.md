# Inventario de contenido reutilizable (fase 1)

Extraído de los PDF de partida. Fecha: 2026-08-08.
Todo el material corresponde al **curso 2022-2023**.

## Archivos de partida

| Archivo | Páginas | Qué es | Estado |
|---|---|---|---|
| `A5_Folleto_impresion.pdf` | 180 | Tríptico comercial (imposición de imprenta: la misma hoja repetida) | Redundante con el booklet de Dinamarca |
| `IMP_Booklet_Dinamarca_compressed_1.pdf` | 32 | Booklet de país + servicios + honorarios + proceso | Único |
| `52baba22-...Dinamarca...pdf` | 32 | **Duplicado byte a byte** del anterior (mismo MD5) | Descartar |
| `IMP_Booklet_carreras_ciencias...pdf` | 40 | 19 programas de ciencias/tecnología/ingeniería/diseño | Único |
| `Booklet_carreras_sociales_COMP...pdf` | 42 | 22 programas de negocios/sociales/humanidades/moda | Único |

**Documentos únicos reales: 4** (el tríptico y un booklet de Dinamarca son duplicados/redundantes).

## Guías de país documentadas (booklet Dinamarca)

Materia prima directa para `/estudiar-en-dinamarca/`:

- **Dinamarca, el país** — capital Copenhague, población 5,9 M, idioma danés,
  moneda corona danesa; inventos daneses; ranking de felicidad.
- **Sistema educativo** — 100% en inglés, educación práctica, "gratis" + beca SU
  *(reescribir con las condiciones — ver PENDIENTE §3)*.
- **Alojamiento** — residencias públicas gestionadas por ayuntamiento o
  universidad; tipos de habitación; **300–550 €/mes**; empezar pronto.
- **Servicios / proceso** — asesoramiento académico, proceso de admisión,
  alojamiento, acompañamiento "una vez en Dinamarca" (banco, trabajo, SU).
- **Honorarios** — **1.400 €** con garantía de éxito, en dos pagos de 700 €
  (tras orientación / tras plaza ofertada). Precio único sin importar nº de
  solicitudes.
- **El proceso en 6 pasos** — (1) asesoramiento, (2) contrato + 50%,
  (3) documentación y matrículas + traducciones juradas, (4) alojamiento,
  (5) admisión y preparación, (6) llegada a Dinamarca.
- **Sobre nosotros** — el proyecto nació en 2020 cuando **Nerea** llegó a
  **Aarhus**; se formalizó como TFG en 2022; construido con estudiantes
  voluntarios de varias ramas.
- **Contacto** — 635 369 915 · info@studyandbeyond.es · studyandbeyond.es

Cobertura frente a la arquitectura pedida de `/estudiar-en-dinamarca/`:

| Guía objetivo | ¿Materia prima en los PDF? |
|---|---|
| proceso-de-admision | Parcial (6 pasos, sin plazos/cuotas reales) |
| su-beca-estudiantes | Sí, pero mal enfocada (reescribir con condiciones) |
| alojamiento | Sí (genérico, sin desglose por ciudad) |
| coste-de-vida | **No** (solo el rango de alojamiento) |
| trabajar-estudiando | Mínimo (solo "10-12 h/semana" ligado a la SU) |
| primeros-pasos (CPR, MitID, banco…) | **No** (solo mención a banco y permiso) |

## Base de datos de grados — 41 programas extraídos

Campos disponibles en los booklets: nombre, nivel, duración, ECTS, comienzo
(agosto), plazo/matrícula (febrero), descripción, plan de estudios, ramas de
especialización (algunos), requisitos de inglés, horas mínimas por materia,
nota media mínima (algunos), examen/entrevista (algunos), salidas laborales,
másteres afines (genéricos).

**Campos ausentes en TODOS**: universidad, ciudad, url_oficial, cuota_admision
(1/2), plazo exacto, fecha de verificación real. → ver `PENDIENTE.md §1`.

### Patrón común de requisitos de inglés

Casi todos: **TOEFL ≥ 83 / IELTS ≥ 6.5 / Cambridge CAE (A-B-C) o FCE (A)**;
exención con IB o IGCSE + A-Levels.
Excepción (nivel más alto, **TOEFL ≥ 90 / IELTS ≥ 7**): ramas de Asia,
Negocios-Idioma-Cultura, ADE+Sociología/Digital/Servicios, Negocios
Internacionales (y variantes), Transporte Mercantil Marítimo.

### Ciencias, Tecnología e Ingenierías (19)

| # | Nombre | Nivel | Dur. | ECTS | Notas de requisitos |
|---|---|---|---|---|---|
| 1 | Ciencias Cognitivas | grado | 3 | 180 | Mates 200 h + Historia 200 h; 4 ramas |
| 2 | Tecnología de la Arquitectura y Gestión de la Construcción | grado | 3,5 | 210 | Mates 150 h |
| 3 | Animación de Personajes | grado | 3,5 | 210 | Examen + entrevista de dibujo (mayo); portfolio |
| 4 | Ingeniería Climática y de Suministros | grado | 3,5 | 210 | Mates 375 h + Quím o Fís 150 h |
| 5 | Artes Gráficas Digitales | grado | 3,5 | 210 | Mates 375 h + Quím/Fís 150 h *(req. dudoso, revisar)* |
| 6 | Ingeniería Tecnológica de Software | grado | 3,5 | 210 | Mates 375 h + Fís 150 h |
| 7 | Ingeniería Electrónica | grado | 3 | 180 | Mates 375 h + Fís 200 h; examen optativo |
| 8 | Ingeniería Mecánica | grado | 3 | 180 | Mates 375 h + Fís 200 h |
| 9 | Ingeniería Mecatrónica | grado | 3 | 180 | Mates 375 h + Fís 200 h |
| 10 | Ingeniería, Innovación y Negocios | grado | 3 | 180 | Mates 375 h + Fís 200 h |
| 11 | Ingeniería General | grado | 3 | 180 | Mates 375 h + Fís 200 h; 4 ramas |
| 12 | Electrónica Industrial | grado | 3 | 180 | Mates 375 h + Fís 200 h |
| 13 | Ingeniería Química | grado | 3 | 180 | Mates 375 h + Fís 200 h + Quím 200 h |
| 14 | Grado Personalizado de Ciencias Naturales | grado | 3 | 180 | Mates 375 h + Fís 200 h + Quím 200 h; 6 ramas |
| 15 | Ingeniería Química y Biotecnológica | grado | 3,5 | 210 | Mates 375 h + Fís 200 h + Quím 200 h |
| 16 | Ciencia de Datos | grado | 3 | 180 | Mates 375 h (nota mín. 7) |
| 17 | AP en Diseño Multimedia | profesionsbachelor (AP) | 2 | 120 | Mates 125 h; enlaza con top-ups 18/19 |
| 18 | Top-up en Desarrollo de Conceptos Digitales | top-up | 1,5 | 90 | Requiere AP/CFS afín |
| 19 | Top-up en Desarrollo de Páginas Web | top-up | 1,5 | 90 | Requiere AP/CFS afín |

### Sociales, Humanísticas y Económicas (22)

| # | Nombre | Nivel | Dur. | ECTS | Notas de requisitos |
|---|---|---|---|---|---|
| 20 | Economía y Administración de Empresas | grado | 3 | 180 | Mates 200 h + Econ/Hist 200 h; 3 ramas |
| 21 | Administración y Negocios Globales | grado | 3 | 180 | + nota media 7/10; examen optativo |
| 22 | Estudios Europeos | grado | 3 | 180 | Mates 200 h + Hist 200 h; nota media 7/10 |
| 23 | Antropología de Mercados y Gestión | grado | 3 | 180 | Mates 200 h + Hist 200 h |
| 24 | Negocios entre Europa y Asia – Rama China | grado | 4 | 240 | Estancia en Beijing; TOEFL 90/IELTS 7; Mates 250 h |
| 25 | Negocios entre Europa y Asia – Rama Japón | grado | 4 | 240 | Dice estancia en **Beijing** *(error a verificar)* |
| 26 | Negocios, Idioma y Cultura – Rama Española | grado | 3 | 180 | Estancia España/Latam |
| 27 | Negocios, Idioma y Cultura – Rama Francesa | grado | 3 | 180 | Estancia francófona; DELF B1 |
| 28 | Negocios, Idioma y Cultura – Rama Alemana | grado | 3 | 180 | Estancia Alemania; Goethe B1 |
| 29 | Administración de Empresas y Sociología | grado | 3 | 180 | Mates 250 h (nota 7) + Econ/Hist 200 h |
| 30 | Administración de Empresas y Gestión Digital | grado | 3 | 180 | Mates 250 h (nota 7) + Econ/Hist 200 h |
| 31 | Administración de Empresas y Gestión de Servicios | grado | 3 | 180 | 3 ramas; Mates 250 h |
| 32 | Negocios Internacionales y Política | grado | 3 | 180 | Mates 250 h + Econ/Hist 200 h |
| 33 | Negocios Internacionales | grado | 3 | 180 | Mates 250 h + Econ/Hist 200 h |
| 34 | Transporte Mercantil Marítimo | grado | 3 | 180 | Semestre en Singapur o Texas |
| 35 | Grado Personalizado en Humanidades | grado | 3 | 180 | 3 ramas; Hist 200 h + otro idioma en bachiller |
| 36 | Grado Personalizado en Ciencias Sociales | grado | 3 | 180 | 3 ramas; Mates 200 h + Econ/Hist 200 h + media 7/10 |
| 37 | AP en Diseño de Moda | profesionsbachelor (AP) | 2 | 120 | Mates 125 h; enlaza con top-ups 39-41 |
| 38 | AP en Marketing y Branding de Moda | profesionsbachelor (AP) | 2 | 120 | Mates 125 h |
| 39 | Top-up en Diseño de Moda | top-up | 1,5 | 90 | Requiere AP/CFS afín |
| 40 | Top-up en Marketing y Branding de Moda | top-up | 1,5 | 90 | Requiere AP/CFS afín |
| 41 | Top-up en Emprendimiento e Innovación de Moda | top-up | 1,5 | 90 | Requiere AP/CFS afín |

### Áreas propuestas (`area` del esquema)

Los booklets agrupan en dos, pero para el buscador propongo cuatro:
`ciencias-ingenieria`, `negocios`, `sociales-humanidades`, `diseno-creativo`
(Animación, Artes Gráficas, Diseño Multimedia, Diseño/Marketing de Moda).
A validar.

### Niveles (`nivel` del esquema)

Aparecen tres: **grado** (180-240 ECTS), **AP / profesionsbachelor** (120 ECTS,
2 años) y **top-up** (90 ECTS, 1,5 años, requiere un AP/CFS previo). El esquema
del brief contempla `grado | máster | profesionsbachelor`; conviene añadir
`top-up` (o tratarlo como profesionsbachelor de continuación).
