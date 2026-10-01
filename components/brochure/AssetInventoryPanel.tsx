import { AssetTypeIcon } from "@/components/icons/AssetTypeIcon";
import { SlaBadge } from "@/components/brochure/SlaBadge";
import { SITE_LOCATION } from "@/lib/site";
import {
  Check,
  ChevronDown,
  Download,
  Maximize2,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  SlidersHorizontal,
  Tag,
} from "lucide-react";

const assets = [
  {
    type: "monitor",
    name: "COM-0075",
    status: "Asignado",
    owner: "María González",
    location: SITE_LOCATION,
    tags: ["computadora", "VIP"],
    manufacturer: "Dell",
    model: "P2422H",
    sla: { label: "6h 20m", tone: "ok" as const },
    tickets: 1,
  },
  {
    type: "laptop",
    name: "COM-0076",
    status: "Asignado",
    owner: "Carlos Ruiz",
    location: SITE_LOCATION,
    tags: ["computadora"],
    manufacturer: "Lenovo",
    model: "ThinkPad T14",
    sla: { label: "2h 05m", tone: "warn" as const },
    tickets: 0,
  },
  {
    type: "headset",
    name: "PER-0041",
    status: "Nuevo",
    owner: "Sin asignar",
    location: "Almacén IT",
    tags: ["periféricos"],
    manufacturer: "Logitech",
    model: "H390",
    sla: { label: "24h", tone: "neutral" as const },
    tickets: 0,
  },
  {
    type: "server",
    name: "SRV-0012",
    status: "En servicio",
    owner: "Infraestructura",
    location: SITE_LOCATION,
    tags: ["crítico"],
    manufacturer: "HPE",
    model: "ProLiant DL380",
    sla: { label: "Vencido", tone: "danger" as const },
    tickets: 2,
  },
  {
    type: "phone",
    name: "MOV-0088",
    status: "Asignado",
    owner: "Ana Torres",
    location: SITE_LOCATION,
    tags: ["móvil"],
    manufacturer: "Samsung",
    model: "Galaxy A54",
    sla: { label: "12h", tone: "ok" as const },
    tickets: 0,
  },
];

const tagColors: Record<string, string> = {
  computadora: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  VIP: "bg-amber-50 text-amber-800 ring-amber-600/20",
  periféricos: "bg-sky-50 text-sky-700 ring-sky-600/20",
  crítico: "bg-rose-50 text-rose-700 ring-rose-600/20",
  móvil: "bg-violet-50 text-violet-700 ring-violet-600/20",
};

const COLUMN_COUNT = 12;

export function AssetInventoryPanel() {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-panel">
      <div className="border-b border-slate-100 px-4 py-3 md:px-5">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex min-w-[200px] flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="text-sm text-slate-500">Buscar activos…</span>
            <span className="ml-1 inline-flex max-w-[min(100%,280px)] items-center gap-1 truncate rounded-md bg-white px-2 py-0.5 text-[11px] text-slate-600 ring-1 ring-slate-200">
              Ubicación: {SITE_LOCATION}
              <span className="text-slate-400">×</span>
            </span>
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
          >
            <Tag className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-sm hover:bg-emerald-600"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-4 py-2.5 md:px-5">
        <div className="flex items-center gap-1">
          {["Activos", "Reparación", "Baja"].map((tab, i) => (
            <button
              key={tab}
              type="button"
              className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
                i === 0
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <button type="button" className="rounded-lg p-2 hover:bg-slate-50 hover:text-slate-600">
            <Download className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-lg p-2 hover:bg-slate-50 hover:text-slate-600">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-lg p-2 hover:bg-slate-50 hover:text-slate-600">
            <Maximize2 className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-lg p-2 hover:bg-slate-50 hover:text-slate-600">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2 md:px-5">
        <button type="button" className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50">
          <MoreHorizontal className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-2 py-1 text-xs text-slate-500"
        >
          <Plus className="h-3 w-3" /> Vista sin guardar
        </button>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
          Filtros actualizados
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-auto">
        <table className="w-full min-w-[980px] border-collapse text-left text-sm">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="border-b border-slate-100 text-xs font-medium uppercase tracking-wide text-slate-400">
              <th className="w-10 px-3 py-2">
                <input type="checkbox" className="rounded border-slate-300" readOnly />
              </th>
              <th className="px-2 py-2">Tipo</th>
              <th className="px-2 py-2">OK</th>
              <th className="px-2 py-2">Inventario</th>
              <th className="px-2 py-2">Estado</th>
              <th className="px-2 py-2">SLA</th>
              <th className="px-2 py-2">Responsable</th>
              <th className="px-2 py-2">Ubicación</th>
              <th className="px-2 py-2">Etiquetas</th>
              <th className="px-2 py-2">Tickets</th>
              <th className="px-2 py-2">Fabricante</th>
              <th className="px-2 py-2">Modelo</th>
            </tr>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
                <th key={i} className="px-2 py-1.5 font-normal">
                  {i > 2 ? (
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-400"
                    >
                      Filtrar
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assets.map((row, idx) => (
              <tr
                key={row.name}
                className={`border-b border-slate-50 transition-colors hover:bg-brand-50/40 ${
                  idx === 0 ? "bg-brand-50/20 ring-1 ring-inset ring-brand-100" : ""
                }`}
              >
                <td className="px-3 py-2.5">
                  <input type="checkbox" className="rounded border-slate-300" readOnly checked={idx === 0} />
                </td>
                <td className="px-2 py-2.5">
                  <AssetTypeIcon type={row.type} />
                </td>
                <td className="px-2 py-2.5">
                  <Check className="h-4 w-4 text-emerald-500" strokeWidth={2.5} />
                </td>
                <td className="px-2 py-2.5 font-semibold text-slate-800">{row.name}</td>
                <td className="px-2 py-2.5 text-slate-600">{row.status}</td>
                <td className="px-2 py-2.5">
                  <SlaBadge label={row.sla.label} tone={row.sla.tone} />
                </td>
                <td className="px-2 py-2.5 text-slate-600">{row.owner}</td>
                <td className="max-w-[140px] px-2 py-2.5 text-[11px] leading-snug text-slate-600">
                  {row.location}
                </td>
                <td className="px-2 py-2.5">
                  <div className="flex flex-wrap gap-1">
                    {row.tags.map((t) => (
                      <span
                        key={t}
                        className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${tagColors[t] ?? "bg-slate-100 text-slate-600 ring-slate-200"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-2 py-2.5">
                  {row.tickets > 0 ? (
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700">
                      {row.tickets}
                    </span>
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </td>
                <td className="px-2 py-2.5 text-slate-600">{row.manufacturer}</td>
                <td className="px-2 py-2.5 text-slate-600">{row.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
