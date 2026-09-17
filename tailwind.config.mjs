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
        // Paleta de marca (Brand Manual 2026). Rojo de marca + pasteles nórdicos
        // + charcoal, sobre off-white casi blanco.
        // Charcoal: texto y secciones oscuras.
        ink: { DEFAULT: '#1E1E1E', 900: '#121212' },
        navy: '#1E1E1E',
        charcoal: '#1E1E1E',
        // Copenhagen Red: color de marca (CTA, ampersand, acentos).
        rojo: { DEFAULT: '#B52B32', 700: '#93222a', 600: '#a3272e', 300: '#e2a7aa', 100: '#F3E3E3' },
        marine: { DEFAULT: '#B52B32', 700: '#93222a', 300: '#e2a7aa' },
        blue: { DEFAULT: '#B52B32', 700: '#93222a', 300: '#e2a7aa' },
        deadline: { DEFAULT: '#B52B32', 700: '#93222a', 100: '#F3E3E3' },
        sun: { DEFAULT: '#B52B32', 700: '#93222a', 100: '#F3E3E3' },
        // Secundarios pastel nórdicos (fondos suaves, texto charcoal encima).
        nordic: '#D7E6F3',   // Nordic Blue: datos / información
        sage: '#C7D3C7',     // Sage: vida en Dinamarca
        sand: '#F6E6B8',     // Sand: acento cálido / editorial
        // Aliases heredados -> pasteles.
        cielo: { DEFAULT: '#D7E6F3', 300: '#D7E6F3', 100: '#EAF2F9', 700: '#2a5f86' },
        turq: { DEFAULT: '#D7E6F3', 600: '#2a5f86', 700: '#2a5f86' },
        verde: { DEFAULT: '#C7D3C7', 100: '#E4EEE6', 700: '#3b5145' },
        arena: { DEFAULT: '#F6E6B8', 700: '#8a6d43' },
        // Off-white casi blanco (fondo principal) y papel blanco (tarjetas).
        hueso: '#FBFBF9',
        paper: '#FFFFFF',
        // Banda tintada genérica (separación sutil).
        aqua: '#F1EEE7',
        frost: '#F1EEE7',
        crema: '#F1EEE7',
        // Texto secundario (gris cálido).
        slate: { DEFAULT: '#57534d', 400: '#8a857c' },
        // Filetes y bordes.
        hairline: '#E7E3DB',
        line: '#E7E3DB',
      },
      fontFamily: {
        // DM Sans para titulares y texto (grotesk europea limpia con carácter);
        // Instrument Serif para acentos editoriales en cursiva;
        // DM Mono para datos, etiquetas y fechas.
        display: ['DM Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Escala editorial con mucho contraste de tamaño.
        'h1': ['clamp(2.5rem, 6vw, 4.75rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'cifra': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        // Titular monumental (portada editorial) y numeral gigante como grafismo.
        'monumento': ['clamp(3rem, 9vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'numeral': ['clamp(4.5rem, 15vw, 12rem)', { lineHeight: '0.82', letterSpacing: '-0.05em' }],
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
