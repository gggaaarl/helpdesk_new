# Maqueta UI — HelpDesk + Parque informático

Maqueta visual para **brochure** (Next.js + Tailwind): inventario ITAM, tickets vinculados a equipo/software y actas PDF con firma digital.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Error 500 o diseño sin estilos

Suele pasar si hay **más de un** `npm run dev` abierto a la vez (comparten la carpeta `.next`).

1. Cierra todas las terminales con el servidor.
2. Ejecuta una sola vez: `npm run dev:clean`
3. Recarga el navegador con **Ctrl+Shift+R**.

## Capturas para folleto

- **Hero**: primera sección con vista compuesta (inventario + paneles flotantes).
- **Sección inferior**: tres paneles separados (inventario, ticket, acta PDF).
- Resolución recomendada: **1440×900** o superior.

## Estructura

- `components/brochure/` — componentes de la maqueta
- `app/page.tsx` — página única del brochure
