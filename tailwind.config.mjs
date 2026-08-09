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
        // Navy: texto principal y secciones oscuras.
        ink: { DEFAULT: '#0B2540', 900: '#081B30' },
        navy: '#0B2540',
        // Azul de marca: enlaces y botones primarios.
        marine: { DEFAULT: '#1466C4', 700: '#0F4E97', 300: '#7FB0E6' },
        blue: { DEFAULT: '#1466C4', 700: '#0F4E97', 300: '#7FB0E6' },
        // Turquesa: acento principal. Nunca como texto sobre blanco (no llega a
        // AA). Va en rellenos, botones, etiquetas, subrayados y fondos.
        turq: { DEFAULT: '#12BFB6', 600: '#0FA69E', 700: '#0C8079' },
        // Aqua: fondo tintado muy claro (una zona grande por página).
        aqua: '#E4F7F5',
        // Alias heredado -> aqua.
        frost: '#E4F7F5',
        paper: '#FFFFFF',
        // Texto secundario.
        slate: { DEFAULT: '#5B7183', 400: '#8194A3' },
        // Filetes y bordes.
        hairline: '#D3E1E8',
        line: '#D3E1E8',
        // Sun: SOLO calendario y fechas límite. Texto oscuro sobre sun.
        deadline: { DEFAULT: '#FFC24B', 700: '#7A5200', 100: '#FFF1D6' },
        sun: { DEFAULT: '#FFC24B', 700: '#7A5200', 100: '#FFF1D6' },
        // Aliases heredados de colores retirados (menta/crema) -> paleta nueva,
        // para que ninguna clase quede sin fondo mientras se migra.
        crema: '#E4F7F5',
        verde: { DEFAULT: '#12BFB6', 100: '#E4F7F5', 700: '#0C8079' },
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
        // Escala contenida, móvil -> escritorio. Titulares serios, no gigantes.
        'h1': ['clamp(2rem, 3.2vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.5rem, 2.2vw, 2.125rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'cifra': ['clamp(1.75rem, 2.6vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        // Compatibilidad con clases previas.
        'display-lg': ['clamp(2rem, 3.2vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        display: ['clamp(1.5rem, 2.2vw, 2.125rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prosa: '68ch',
        contenido: '1180px',
      },
      // Formas: radio moderado (aspecto de web real, no burbujas).
      borderRadius: {
        DEFAULT: '0.5rem',
        xl: '0.75rem',
        '2xl': '0.875rem',
        '3xl': '1rem',
        tarjeta: '12px',
        imagen: '14px',
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
