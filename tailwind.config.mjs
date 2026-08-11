/** @type {import('tailwindcss').Config} */
// Tokens de marca de Study and Beyond — rediseño visual de agosto 2026.
// Dirección: fresco y joven. Azul y turquesa, mucho blanco, tipografía grande.
//
// Fuentes: el brief pide Clash Display y Satoshi (Fontshare). El entorno
// bloquea Fontshare, así que se autoalojan sustitutos libres muy cercanos desde
// Google Fonts: Space Grotesk (display, análogo a Clash Display) y Plus Jakarta
// Sans (texto, análogo a Satoshi). DM Mono es exacta y solo se usa en el
// calendario. Para las originales, deja sus .woff2 en /public/fonts y cambia las
// @font-face de Base.astro. Ver PENDIENTE.md.
//
// Los nombres de token heredados (ink, marine, frost, deadline...) se conservan
// para no reescribir clases en todo el sitio, pero apuntan a la paleta nueva.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de marca: blanco + azules como principales; rojo (bandera
        // danesa) SOLO como acento. Gris para texto secundario.
        // Navy: texto principal y secciones oscuras.
        ink: { DEFAULT: '#1d3461', 900: '#142644' },
        navy: '#1d3461',
        // Azul de marca: enlaces, etiquetas y botones estructurales.
        marine: { DEFAULT: '#1f487e', 700: '#163760', 300: '#7FA3C4' },
        blue: { DEFAULT: '#1f487e', 700: '#163760', 300: '#7FA3C4' },
        // Azul cielo brillante: acentos grandes (distintivos, puntos del
        // calendario, línea). Solo con texto blanco y en elementos grandes.
        cielo: { DEFAULT: '#247ba0', 300: '#8FC0DB', 700: '#1c6182' },
        // Alias heredado -> azul cielo (para clases existentes bg-turq/text-turq).
        turq: { DEFAULT: '#247ba0', 600: '#1c6182', 700: '#1c6182' },
        // Rojo bandera danesa: ACENTO. Botón de conversión y plazos del
        // calendario. Uso medido.
        rojo: { DEFAULT: '#c42017', 700: '#9d1a12', 100: '#F7DDDB' },
        deadline: { DEFAULT: '#c42017', 700: '#9d1a12', 100: '#F7DDDB' },
        sun: { DEFAULT: '#c42017', 700: '#9d1a12', 100: '#F7DDDB' },
        // Fondo tintado en cerúleo claro (con vida, no gris ni crema).
        aqua: '#DCEEF6',
        frost: '#DCEEF6',
        crema: '#DCEEF6',
        // Arena cálida (acento suave opcional).
        arena: { DEFAULT: '#E7D6BC', 700: '#8a6d43' },
        paper: '#FFFFFF',
        // Texto secundario (gris de marca).
        slate: { DEFAULT: '#5b6b78', 400: '#84929d' },
        // Filetes y bordes.
        hairline: '#CFE0EA',
        line: '#CFE0EA',
        // Alias heredado (verde retirado) -> azul cielo/aqua.
        verde: { DEFAULT: '#247ba0', 100: '#E9F1F7', 700: '#1c6182' },
      },
      fontFamily: {
        // Una sola familia (Plus Jakarta Sans) para titulares y texto: aspecto
        // editorial y sobrio, no de landing generada. Space Grotesk queda
        // disponible por si se quiere un display con más carácter.
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        grotesk: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        // Datos: SOLO fechas del calendario de admisión.
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escala con energía pero sin gigantismo. Móvil -> escritorio.
        'h1': ['clamp(2.25rem, 3.6vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.625rem, 2.4vw, 2.25rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'cifra': ['clamp(2rem, 3.2vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        // Compatibilidad con clases previas.
        'display-lg': ['clamp(2.25rem, 3.6vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        display: ['clamp(1.625rem, 2.4vw, 2.25rem)', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prosa: '68ch',
        contenido: '1180px',
      },
      // Formas amables: esquinas redondeadas y generosas.
      borderRadius: {
        DEFAULT: '0.625rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        tarjeta: '18px',
        imagen: '22px',
      },
      boxShadow: {
        // Sin sombra en reposo; esta aparece solo en hover.
        flotante: '0 12px 32px rgba(11, 37, 64, 0.10)',
        suave: '0 12px 32px rgba(11, 37, 64, 0.10)',
      },
      keyframes: {
        flotar: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        // Pulso lento del punto del 15 de marzo.
        pulso: {
          '0%,100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.18)', opacity: '0.85' },
        },
        // Aparición de sección: 12px de desplazamiento, una vez.
        aparecer: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulso: 'pulso 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
