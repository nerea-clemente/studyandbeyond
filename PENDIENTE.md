# PENDIENTE

Registro vivo de todo lo que falta, está sin verificar o necesita una decisión
antes de publicar. Nada de esto se inventa: o se confirma, o aparece como
`TODO` visible en el sitio.

Última actualización: 2026-08-08 (fase 1 — inventario).

## Decisiones tomadas por Nerea (2026-08-08)

- **Universidades**: se publica **sin universidad/ciudad** en v1 → ambos campos
  opcionales, se muestran como "Por confirmar". `/universidades/` queda como
  stub sin fichas hasta tener los nombres.
- **Alcance v1**: **solo grados** (41 programas). Los másters, a v2.
- **Vigencia de datos**: el cliente confirma que los datos del curso 2022-2023
  **siguen vigentes hoy**. Se publican como válidos; se conserva
  `ultima_verificacion` con la referencia del curso.
- **Blog**: **sí** desde el día uno.

### Datos verificados (2026-08-08, del contrato + cliente)

- **Entidad legal**: **Study and Beyond ApS** — empresa **danesa** (ApS, no
  española), **CVR 43172794**. Titular: Nerea Clemente Palacios. Domicilio del
  contrato: Karen Blixens Boulevard 10, 2.º/3.º, 8220 Brabrand (Aarhus,
  Dinamarca). ⚠️ Parece domicilio particular → **confirmar si se publica esa
  dirección** en el aviso legal o se usa otra.
- **Precio actual**: **1.900 €** (IVA incl.), pago **50 % / 50 %** con garantía
  de éxito. (El contrato adjunto aún dice 1.400 € y 700+700 → contrato
  desactualizado respecto al precio nuevo; usar 1.900 € en el sitio.)
- **Mecánica de la garantía de éxito** (del contrato): el primer pago es a
  fondo perdido y cubre las gestiones; el segundo solo se abona si se obtiene
  admisión (en firme o condicionada), en 7 días hábiles desde la oferta, y es
  debido aunque el cliente no acepte la plaza. Si no hay admisión, no se paga
  el segundo. → base honesta para "qué pasa si no entras".
- **Beca SU**: **7.426 DKK/mes antes de impuestos**, condicionada a trabajar
  **10-12 h/semana** (más las condiciones de estatus de trabajador UE / 5 años
  de residencia y revisión retroactiva). Presentar SIEMPRE con la condición.
- **Testimonios**: existen 3 reales — **Nuria**, **Javi**, **Helena**. Falta el
  **texto de cada testimonio** y el **permiso de uso / apellido o inicial**.
- **Hosting/deploy**: **GitHub + Netlify** (Netlify Forms para el formulario).
- **Servicios** (contrato): orientación individual, traducciones juradas,
  alojamiento, consejos pre/post llegada (seguro médico, CPR, cuenta bancaria,
  vuelos, teléfono, empleo, solicitud SU).

### ⚠️ Corrección de fondo para los legales

El brief asumía "empresa española". **Es una empresa danesa (ApS)** que presta
servicios a clientes en España. Implicaciones a resolver con criterio legal:
- El responsable del tratamiento es una entidad danesa bajo RGPD (aplica en
  toda la UE), no necesariamente bajo LSSI-CE española. Revisar qué normativa
  y qué textos legales corresponden.
- Cláusula sensible del contrato: el cliente autoriza a Study and Beyond a
  **acceder con sus credenciales** a las plataformas de las universidades para
  verificar solicitudes. Esto debe reflejarse y revisarse en la política de
  privacidad.
- Datos de **menores potenciales** (17 años): base legal y consentimiento.

### Decisiones adicionales (2026-08-08, segunda ronda)

- **Universidad y ciudad**: **no se muestran en ninguna parte** de la web (ni en
  la ficha ni en el buscador). Los campos siguen en el esquema para uso interno
  y v-futura, pero no se renderizan.
- **Dirección postal de Aarhus**: **no se publica**. En los legales solo aparece
  ciudad/país y «dirección postal por confirmar».
- **Testimonios**: redactados a partir de las indicaciones del cliente (Nuria —
  Ingeniería General, DTU, Copenhague; Javier — Economía y ADE, Aarhus, Erasmus
  Canadá; Helena — IB en internado). Ya publicados en «Sobre nosotros».

### Sigue pendiente (no bloquea)

- Analítica concreta (cookieless). Confirmar proveedor y activar.
- Logo: **el cliente se plantea cambiarlo** → wordmark provisional swappable.
- Datos oficiales por grado (universidad/ciudad/url/cuota/plazo) — uso interno.
- **Coste de vida**: cifras reales por partida (comida, transporte, ocio). Solo
  tenemos alojamiento (300-550 €). La guía las deja como "por confirmar".
- **Salario de facto** por sector para la guía de trabajar-estudiando (no hay
  salario mínimo legal en Dinamarca; falta el dato orientativo por convenio).

### Hoja de ruta futura (fuera de v1, indicado por el cliente)

- Másters.
- **Estudiar el bachillerato en Dinamarca** (gymnasium) como nueva línea.

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
