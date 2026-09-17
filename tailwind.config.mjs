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
        // Identidad "Modern Danish editorial": rojo danés profundo como color de
        // marca, off-white cálido de fondo, charcoal para texto, y UN azul cielo
        // como acento secundario inesperado.
        // Charcoal: texto y secciones oscuras.
        ink: { DEFAULT: '#202020', 900: '#141414' },
        navy: '#202020',
        charcoal: '#202020',
        // Rojo danés profundo: color de marca (botones, etiquetas, acentos).
        // Los alias heredados (marine/blue) apuntan aquí para no reescribir clases.
        rojo: { DEFAULT: '#B52B32', 700: '#93222a', 600: '#a3272e', 300: '#e0a6a9', 100: '#F3E3E3' },
        marine: { DEFAULT: '#B52B32', 700: '#93222a', 300: '#e0a6a9' },
        blue: { DEFAULT: '#B52B32', 700: '#93222a', 300: '#e0a6a9' },
        deadline: { DEFAULT: '#B52B32', 700: '#93222a', 100: '#F3E3E3' },
        sun: { DEFAULT: '#B52B32', 700: '#93222a', 100: '#F3E3E3' },
        // Azul cielo/cobalto: único acento secundario.
        cielo: { DEFAULT: '#2E6F9E', 300: '#9FC1DA', 700: '#234f74', 100: '#E4EEF5' },
        turq: { DEFAULT: '#2E6F9E', 600: '#234f74', 700: '#234f74' },
        verde: { DEFAULT: '#2E6F9E', 100: '#E4EEF5', 700: '#234f74' },
        // Off-white cálido (fondo principal) y papel blanco (tarjetas).
        hueso: '#F7F5F0',
        paper: '#FFFFFF',
        // Bandas tintadas: off-white un punto más profundo (separación sutil).
        aqua: '#EFEBE1',
        frost: '#EFEBE1',
        crema: '#EFEBE1',
        arena: { DEFAULT: '#E7D6BC', 700: '#8a6d43' },
        // Texto secundario (gris cálido).
        slate: { DEFAULT: '#5c574f', 400: '#8a857c' },
        // Filetes y bordes (cálidos).
        hairline: '#E2DCD0',
        line: '#E2DCD0',
      },
      fontFamily: {
        // DM Sans para titulares y texto (sans europea limpia con carácter);
        // DM Mono para datos, etiquetas y fechas.
        display: ['DM Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escala editorial: titulares enormes.
        'h1': ['clamp(2.5rem, 6vw, 4.75rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'cifra': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.75rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        display: ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        prosa: '68ch',
        contenido: '1180px',
      },
      // Formas amables: esquinas redondeadas y generosas.
      borderRadius: {
        DEFAULT: '0.375rem',
        xl: '0.625rem',
        '2xl': '0.75rem',
        '3xl': '1rem',
        tarjeta: '10px',
        imagen: '12px',
      },
      boxShadow: {
        // Sin sombra en reposo; esta aparece solo en hover.
        flotante: '0 14px 34px rgba(32, 32, 32, 0.10)',
        suave: '0 14px 34px rgba(32, 32, 32, 0.10)',
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
