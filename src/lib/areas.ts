// Fuente única del color por familia académica.
// Se usa en el buscador, en las tarjetas del home y en la ficha de cada grado,
// para que un área tenga siempre el mismo color en todo el sitio.
// Todos los tonos son claros: el texto encima va en charcoal y pasa AA.
export const AREA_BG: Record<string, string> = {
  negocios: 'bg-nordic',
  'ciencias-ingenieria': 'bg-sand',
  'sociales-humanidades': 'bg-rosa',
  'diseno-creativo': 'bg-sage',
};

export const bgArea = (area: string): string => AREA_BG[area] ?? 'bg-lavanda';

// Paleta de apoyo para listas sin área (ventajas, preguntas, guías…), de modo
// que los bloques de color roten siempre en el mismo orden en todo el sitio.
export const TONOS = ['bg-nordic', 'bg-sand', 'bg-rosa', 'bg-sage', 'bg-lavanda', 'bg-coral'] as const;

export const tono = (i: number): string => TONOS[i % TONOS.length];
