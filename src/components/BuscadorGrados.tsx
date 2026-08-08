import { useEffect, useMemo, useState } from 'preact/hooks';
import type { GradoIndice } from '@/lib/grados';

interface Props {
  grados: GradoIndice[];
}

interface Filtros {
  q: string;
  area: string;
  nivel: string;
  ciudad: string;
  idioma: string;
  cuota: string;
}

const VACIO: Filtros = { q: '', area: '', nivel: '', ciudad: '', idioma: '', cuota: '' };

// Lee los filtros de la URL (para que cada combinación sea compartible).
function desdeUrl(): Filtros {
  if (typeof window === 'undefined') return { ...VACIO };
  const p = new URLSearchParams(window.location.search);
  return {
    q: p.get('q') ?? '',
    area: p.get('area') ?? '',
    nivel: p.get('nivel') ?? '',
    ciudad: p.get('ciudad') ?? '',
    idioma: p.get('idioma') ?? '',
    cuota: p.get('cuota') ?? '',
  };
}

function normaliza(s: string): string {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
}

function opciones(grados: GradoIndice[], clave: 'area' | 'nivel' | 'ciudad' | 'idioma') {
  const mapa = new Map<string, string>();
  for (const g of grados) {
    const valor = g[clave];
    if (!valor) continue;
    const etiqueta =
      clave === 'area' ? g.areaEtiqueta : clave === 'nivel' ? g.nivelEtiqueta : valor;
    mapa.set(valor, etiqueta);
  }
  return [...mapa.entries()].sort((a, b) => a[1].localeCompare(b[1], 'es'));
}

export default function BuscadorGrados({ grados }: Props) {
  const [filtros, setFiltros] = useState<Filtros>(() => desdeUrl());

  // Sincroniza la URL sin recargar.
  useEffect(() => {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(filtros)) if (v) p.set(k, v);
    const qs = p.toString();
    const url = qs ? `?${qs}` : window.location.pathname;
    window.history.replaceState(null, '', url);
  }, [filtros]);

  // Soporta atrás/adelante del navegador.
  useEffect(() => {
    const onPop = () => setFiltros(desdeUrl());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const areas = useMemo(() => opciones(grados, 'area'), [grados]);
  const niveles = useMemo(() => opciones(grados, 'nivel'), [grados]);
  const ciudades = useMemo(() => opciones(grados, 'ciudad'), [grados]);
  const idiomas = useMemo(() => opciones(grados, 'idioma'), [grados]);
  const cuotas = useMemo(
    () => [...new Set(grados.map((g) => g.cuota).filter((c): c is number => c != null))].sort(),
    [grados],
  );

  const resultados = useMemo(() => {
    const q = normaliza(filtros.q.trim());
    return grados.filter((g) => {
      if (filtros.area && g.area !== filtros.area) return false;
      if (filtros.nivel && g.nivel !== filtros.nivel) return false;
      if (filtros.ciudad && g.ciudad !== filtros.ciudad) return false;
      if (filtros.idioma && g.idioma !== filtros.idioma) return false;
      if (filtros.cuota && String(g.cuota ?? '') !== filtros.cuota) return false;
      if (q) {
        const heno = normaliza(`${g.nombre} ${g.descripcion} ${g.areaEtiqueta}`);
        if (!heno.includes(q)) return false;
      }
      return true;
    });
  }, [grados, filtros]);

  const set = (clave: keyof Filtros) => (e: Event) =>
    setFiltros((f) => ({ ...f, [clave]: (e.target as HTMLInputElement | HTMLSelectElement).value }));

  const hayFiltros = Object.values(filtros).some(Boolean);

  const selectClase =
    'w-full rounded-lg border border-hielo bg-white px-3 py-2 text-sm text-tinta focus-visible:outline-none';

  return (
    <div>
      <form class="rounded-2xl border border-hielo bg-white p-4 sm:p-5" onSubmit={(e) => e.preventDefault()}>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label class="sm:col-span-2 lg:col-span-4">
            <span class="mb-1 block text-xs font-semibold text-pizarra">Buscar</span>
            <input
              type="search"
              value={filtros.q}
              onInput={set('q')}
              placeholder="Nombre del grado, palabra clave…"
              class={selectClase}
              aria-label="Buscar grados"
            />
          </label>

          <label>
            <span class="mb-1 block text-xs font-semibold text-pizarra">Área</span>
            <select value={filtros.area} onChange={set('area')} class={selectClase}>
              <option value="">Todas</option>
              {areas.map(([v, t]) => (<option value={v}>{t}</option>))}
            </select>
          </label>

          <label>
            <span class="mb-1 block text-xs font-semibold text-pizarra">Nivel</span>
            <select value={filtros.nivel} onChange={set('nivel')} class={selectClase}>
              <option value="">Todos</option>
              {niveles.map(([v, t]) => (<option value={v}>{t}</option>))}
            </select>
          </label>

          {ciudades.length > 0 && (
            <label>
              <span class="mb-1 block text-xs font-semibold text-pizarra">Ciudad</span>
              <select value={filtros.ciudad} onChange={set('ciudad')} class={selectClase}>
                <option value="">Todas</option>
                {ciudades.map(([v, t]) => (<option value={v}>{t}</option>))}
              </select>
            </label>
          )}

          {idiomas.length > 1 && (
            <label>
              <span class="mb-1 block text-xs font-semibold text-pizarra">Idioma</span>
              <select value={filtros.idioma} onChange={set('idioma')} class={selectClase}>
                <option value="">Todos</option>
                {idiomas.map(([v, t]) => (<option value={v}>{t}</option>))}
              </select>
            </label>
          )}

          {cuotas.length > 0 && (
            <label>
              <span class="mb-1 block text-xs font-semibold text-pizarra">Cuota</span>
              <select value={filtros.cuota} onChange={set('cuota')} class={selectClase}>
                <option value="">Todas</option>
                {cuotas.map((c) => (<option value={String(c)}>Cuota {c}</option>))}
              </select>
            </label>
          )}
        </div>

        <div class="mt-3 flex items-center justify-between">
          <p class="text-sm text-pizarra tabular" aria-live="polite">
            {resultados.length} {resultados.length === 1 ? 'grado' : 'grados'}
          </p>
          {hayFiltros && (
            <button
              type="button"
              onClick={() => setFiltros({ ...VACIO })}
              class="text-sm font-semibold text-cian underline underline-offset-2"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </form>

      <ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resultados.map((g) => (
          <li>
            <a
              href={g.url}
              class="flex h-full flex-col rounded-2xl border border-hielo bg-white p-5 transition-colors hover:border-cian"
            >
              <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-hielo px-2.5 py-0.5 text-xs font-semibold text-tinta">{g.nivelEtiqueta}</span>
                <span class="rounded-full bg-hielo px-2.5 py-0.5 text-xs font-semibold text-tinta">{g.areaEtiqueta}</span>
              </div>
              <h3 class="mt-3 font-display text-lg font-semibold text-tinta">{g.nombre}</h3>
              {g.descripcion && <p class="mt-2 line-clamp-3 text-sm text-pizarra">{g.descripcion}</p>}
              <dl class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-pizarra tabular">
                <div><dt class="inline">Duración: </dt><dd class="inline font-semibold text-tinta">{g.duracion}</dd></div>
                <div><dt class="inline">ECTS: </dt><dd class="inline font-semibold text-tinta">{g.ects}</dd></div>
                {g.ingles && <div><dt class="inline">Inglés: </dt><dd class="inline font-semibold text-tinta">{g.ingles}</dd></div>}
              </dl>
            </a>
          </li>
        ))}
      </ul>

      {resultados.length === 0 && (
        <p class="mt-10 rounded-2xl border border-hielo bg-white p-8 text-center text-pizarra">
          No hay grados con esos filtros. Prueba a quitar alguno.
        </p>
      )}
    </div>
  );
}
