/** @type {import('tailwindcss').Config} */
// Tokens de marca de Study and Beyond. Definidos aquí, no como valores sueltos.
// Ver DISENO.md para el porqué de cada uno.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Azul profundo casi tinta. Titulares, fondos oscuros, footer.
        tinta: {
          DEFAULT: '#0B2A4A',
          900: '#081F38',
          700: '#0B2A4A',
          500: '#164066',
        },
        // Cian nórdico. Enlaces, acentos fríos, estados activos.
        cian: {
          DEFAULT: '#1E7FA8',
          600: '#186A8D',
          400: '#2E97C2',
        },
        // Azul hielo para fondos de sección y cebra de tablas.
        hielo: '#EAF2F6',
        // Fondo base: blanco frío, no blanco puro.
        'blanco-frio': '#F8FAFB',
        // Único acento cálido: plazos, cuenta atrás, CTA. Usar con avaricia.
        ambar: {
          DEFAULT: '#E08A1E',
          700: '#B96E12',
          100: '#FBEBD5',
        },
        // Gris azulado para texto secundario y letra pequeña.
        pizarra: {
          DEFAULT: '#4A5A68',
          400: '#6B7A87',
        },
      },
      fontFamily: {
        // Display editorial (no la didone del logo).
        display: ['Fraunces', 'Georgia', 'serif'],
        // Texto: excelente en pantalla pequeña.
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala tipográfica sobria.
        'display-lg': ['clamp(2.4rem, 5vw, 3.6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(1.9rem, 3.5vw, 2.6rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prosa: '68ch',
      },
    },
  },
  plugins: [],
};
