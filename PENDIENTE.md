# PENDIENTE

Registro vivo de todo lo que falta, está sin verificar o necesita una decisión
antes de publicar. Nada de esto se inventa: o se confirma, o aparece como
`TODO` visible en el sitio.

Última actualización: 2026-08-08 (fase 1 — inventario).

---

## 1. Bloqueantes para la ficha de grado (el núcleo del sitio)

La ficha de grado no se puede completar con lo que hay en los booklets. Falta:

- **Universidad de cada programa.** Ninguno de los 41 programas nombra la
  universidad. `TODO` en los 41.
- **Ciudad de cada programa.** Tampoco aparece. `TODO` en los 41.
- **`url_oficial`.** No hay enlaces a webs oficiales. `TODO` en los 41.
- **`cuota_admision` (1 ó 2).** Los booklets no distinguen cuota por programa;
  solo dicen "matrícula: febrero". La cuota determina el plazo real, así que es
  imprescindible. `TODO`.
- **`plazo_solicitud` real.** Los booklets dicen "febrero", que no coincide con
  los plazos daneses habituales (Cuota 2 ≈ 15 de marzo; Cuota 1 ≈ 5 de julio).
  Sin verificar. `TODO`.
- **`ultima_verificacion`.** Todo el material es del **curso 2022-2023**. Hasta
  reverificar contra la web oficial, la fecha de verificación es esa y debe
  mostrarse como antigua.

## 2. Datos con caducidad — sin verificar (curso 2022-2023)

Requieren revisión contra las webs oficiales antes de publicar como vigentes:

- Requisitos de inglés (TOEFL/IELTS/Cambridge y exenciones IB/IGCSE+A-Level).
- Horas mínimas por materia (mates, física, química, historia, economía).
- Notas medias mínimas.
- Créditos ECTS y duración.
- "Más de 40 grados y 100 másters en inglés" (cifra del tríptico).
- "Clases reducidas con 25 alumnos".
- Plazos y comienzo de curso.

## 3. Beca SU — regla de contenido innegociable

El material impreso la presenta mal: *"beca de 800 € al mes si trabajas entre
10 y 12 horas semanales"* y *"educación gratis"*, sin condiciones. **No se puede
reutilizar tal cual.**

- La SU **nunca** aparece como beneficio automático ni con una cifra suelta.
- Siempre con su condición al lado: se concede a ciudadanos de la UE que
  acreditan estatus de trabajador con un mínimo de horas semanales
  documentadas, o tras cinco años de residencia; la administración danesa la
  revisa y puede reclamarla retroactivamente.
- Confirmar la **cifra actual** (¿siguen siendo ~800 €/mes?) y las **horas
  mínimas** vigentes. `TODO`.

## 4. Contenido que falta por completo

- **Másters.** El tríptico dice "Bachiller, Carrera o Master" y "100 másters",
  pero en los booklets hay **0 másters documentados**. Solo 41 programas de
  grado / AP / top-up. Decidir si entran en v1.
- **Testimonios.** No hay ninguno en el material. `TODO` (¿reales disponibles?).
- **Fichas de universidad.** Dependen de saber qué universidades son (ver §1).
- **OG images, favicon, logo.** El logo (didone "Study And Beyond") aparece en
  los PDF pero falta el archivo vectorial y el nombre de la tipografía.

## 5. Legales — REQUIERE REVISIÓN DE ALGUIEN CON CRITERIO LEGAL

Las plantillas de aviso legal, privacidad y cookies se generarán conformes a
RGPD y LSSI-CE, pero con huecos y **sin valor legal hasta que las revise una
persona con criterio jurídico**. Faltan:

- **Razón social**, **CIF/NIF** y **domicilio** de la empresa. `TODO`.
- Forma jurídica (¿autónoma / SL?). `TODO`.
- Encargados de tratamiento (formularios, analítica, hosting) para la política
  de privacidad. `TODO`.
- Tratamiento de datos de **menores potenciales** (estudiantes de 17): base
  legal y consentimiento. Revisar con criterio legal.

Datos de contacto conocidos (del material): tel. **635 369 915**,
**info@studyandbeyond.es**, **studyandbeyond.es**.

## 6. Erratas del material impreso (a NO heredar)

El material anterior tiene faltas que contradicen el rigor que vendemos. Al
reescribir hay que corregirlas. Ejemplos detectados:

- "SOBRE NOSOSTROS" → NOSOTROS
- "DINAMARCA, EL PAIS VIKINGO" → PAÍS
- "¿QUE TE OFRECEMOS?" / "CALIDAD ACADEMICA" → QUÉ / ACADÉMICA
- "GRADO PERSONALIZADO EN HUMNIDADES" → HUMANIDADES (¡en un título de grado!)
- "TOP-UP EN DESAROLLO..." → DESARROLLO (dos títulos)
- Cuerpo: "Miccrobiología", "Esadística", "Electrónicaa", "curadas"
  (cursadas), "vaalor", "Bijing".
- **Posible error de contenido**: la rama Japón de "Negocios entre Europa y
  Asia" indica estancia obligatoria en **Beijing** (debería ser Japón/Tokio).
  Verificar.

---

## Preguntas abiertas para Nerea

1. ¿Sigue activo el negocio y sigue vigente el precio (1.400 €, 700+700, con
   garantía de éxito)?
2. **Mapeo programa → universidad → ciudad** (bloqueante, ver §1).
3. ¿Grados y másters en v1, o solo grados? (hay 0 másters documentados).
4. ¿Testimonios reales disponibles, con permiso de uso?
5. ¿Blog desde el día uno?
6. Datos legales para las plantillas (razón social, CIF, domicilio, forma
   jurídica).
7. Confirmar cifra y condiciones actuales de la beca SU.
8. ¿Reverificamos requisitos/plazos 2025-2026 antes de publicar, o publicamos
   con lo del curso 2022-2023 marcado como "sin verificar"?
9. Analítica (¿Plausible?), hosting (¿Netlify / Cloudflare Pages?) y acceso al
   DNS de studyandbeyond.es.
10. Archivo del logo y nombre de la tipografía didone del logotipo.
