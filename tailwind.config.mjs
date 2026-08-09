/** @type {import('tailwindcss').Config} */
// Tokens de marca de Study and Beyond — brief visual de agosto 2026.
// Nota de fuentes: el brief pide Cabinet Grotesk y Switzer (Fontshare). El
// entorno bloquea Fontshare, así que se autoalojan sustitutos cercanos y libres:
// Space Grotesk (display) y Inter (texto). JetBrains Mono (datos) es exacto.
// Para usar las originales, basta dejar sus .woff2 en /public/fonts y cambiar
// las dos @font-face de Base.astro.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Texto principal, casi negro con azul dentro.
        ink: { DEFAULT: '#0E2233', 900: '#0A1926' },
        // Azul de marca: titulares, enlaces, elementos activos.
        marine: { DEFAULT: '#16537E', 700: '#0F4062', 300: '#8FB6D3' },
        // Fondo tintado frío para bloques y tablas (luz de norte).
        frost: '#EAF1F6',
        // Fondo base.
        paper: '#FFFFFF',
        // Texto secundario, etiquetas.
        slate: { DEFAULT: '#516472', 400: '#7C8B96' },
        // Filetes y bordes.
        hairline: '#C6D2DA',
        // Ámbar cálido: acento alegre (plazos, cifras destacadas, detalles).
        deadline: { DEFAULT: '#C2701B', 700: '#8F5210', 100: '#F7E7D2' },
        // Verde fresco: acento de apoyo (una de las ventajas, acentos vivos).
        verde: { DEFAULT: '#1F7A54', 700: '#155C3F', 100: '#DDEFE6' },
        // Fondo cálido, para romper el azul y dar alegría.
        crema: '#FBF6EE',
      },
      fontFamily: {
        // Display (sustituto de Cabinet Grotesk).
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        // Texto (sustituto de Switzer).
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Datos: fechas, ECTS, notas, horas, importes.
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-lg': ['clamp(2rem, 5vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        display: ['clamp(1.5rem, 3.5vw, 2.125rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prosa: '68ch',
        contenido: '1120px',
      },
      borderRadius: {
        // Geometría contenida: radio máximo 4 px.
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '4px',
        xl: '4px',
        '2xl': '4px',
        '3xl': '4px',
      },
      boxShadow: {
        // Sin sombras: la separación se resuelve con filetes.
        none: 'none',
        sm: 'none',
        DEFAULT: 'none',
        md: 'none',
        lg: 'none',
      },
    },
  },
  plugins: [],
};
