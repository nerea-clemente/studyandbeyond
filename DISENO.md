# Plan de diseño — Study and Beyond

Media página, para revisar **antes** de codificar. Cada decisión está atada al
brief: dos audiencias (estudiante de noche en el móvil / madre o padre que paga
en escritorio) y un producto cuyo valor es el **rigor administrativo**.

## Paleta

Parte del azul del material (azul profundo casi tinta + cian nórdico) sobre
blanco frío. Un solo acento cálido, con avaricia, para plazos y CTA. Sin
gradientes ni manchas orgánicas.

| Token | Hex | Rol |
|---|---|---|
| `tinta` | `#0B2A4A` | Azul casi tinta. Texto de titulares, fondos oscuros, footer. |
| `cian` | `#1E7FA8` | Cian nórdico. Enlaces, acentos fríos, filtros activos. |
| `hielo` | `#EAF2F6` | Azul hielo. Fondos de sección y tablas cebra. |
| `blanco-frio` | `#F8FAFB` | Fondo base (no blanco puro). |
| `ambar` | `#E08A1E` | **Único acento cálido**: plazos, cuenta atrás, botón de CTA. |
| `pizarra` | `#4A5A68` | Gris azulado para texto secundario y letra pequeña. |

Contraste AA mínimo garantizado: `tinta`/`pizarra` sobre claros, blanco sobre
`tinta` y `cian`. El ámbar solo sobre oscuro o en bloque, nunca texto ámbar
fino sobre blanco.

Evitado a propósito (defaults del momento): crema + serif de alto contraste +
terracota; y casi-negro + acento ácido.

## Tipografía

Tres roles, todas autoalojadas, subsetadas y con `font-display: swap`. **La
didone del logo se queda solo en el logo.**

- **Display — Fraunces** (variable, óptico): carácter editorial sin caer en la
  didone-plantilla; funciona en titulares grandes.
- **Texto — Inter**: excelente en pantalla pequeña, que es donde llega el
  estudiante. Cuerpo, navegación, formularios.
- **Datos — Inter con `font-variant-numeric: tabular-nums`** (o IBM Plex Mono
  en las tablas de requisitos si hace falta más rejilla): media web son cifras
  —ECTS, horas, notas, plazos— y tienen que alinear en columna.

## Layout

- **Móvil primero de verdad.** Una columna, tipografía generosa, CTA de
  asesoramiento siempre alcanzable con el pulgar. En escritorio (donde lee quien
  paga) me permito **tablas densas** de requisitos a dos columnas y fichas con
  barra lateral de datos.
- **Rejilla sobria**, mucho aire, reglas finas en `cian`/`hielo` en vez de
  cajas. Nada de tarjetas con sombra de plantilla.
- **La ficha de grado manda**: cabecera con nombre + nivel + duración/ECTS +
  idioma, tabla de requisitos escaneable, ramas, salidas, plazo, enlace oficial
  (cuando exista) y CTA. La letra pequeña (fecha de verificación, matices de la
  SU) es visible pero discreta: es una señal de seriedad, no se esconde.

## Elemento firma (el único riesgo estético)

**El carril de admisión.** Una banda-calendario horizontal que muestra los
meses hasta el plazo, con una única marca en `ambar` sobre el día límite y una
cuenta atrás cuando está cerca. Aparece en la ficha de grado y en la guía de
proceso de admisión.

Por qué esta y no otra: el brief acierta en que *el plazo es lo que más
angustia y lo que nadie visualiza bien*. Consideré alternativas del mundo del
sujeto (el dossier-tipo-expediente para cada ficha; un "semáforo de
requisitos"; jugar con las horas de luz danesas), pero el carril es el que
además **hace un trabajo**: reduce la ansiedad de las dos audiencias a la vez y
es dato, no decoración. El expediente y el semáforo quedan como recursos
secundarios dentro de la ficha, no como firma.

## Suelo de calidad (sin anunciarlo)

Responsive real, foco de teclado visible, `prefers-reduced-motion` respetado
(la cuenta atrás no anima si se pide reducir movimiento), contraste AA mínimo,
imágenes WebP con dimensiones explícitas para no tener CLS.
