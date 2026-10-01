import { Leaf, PenLine, ShieldCheck } from "lucide-react";

export function PdfActaPanel() {
  return (
    <div className="flex w-full max-w-[340px] shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-float">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-800">Acta de entrega</p>
          <p className="text-xs text-slate-500">PDF · Firma digital</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-600/15">
          <Leaf className="h-3 w-3" />
          Sin papel
        </span>
      </div>

      <div className="brochure-gradient p-4">
        <div className="rounded-lg border border-slate-200/80 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-start justify-between border-b border-slate-100 pb-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Acta de desplazamiento / entrega
              </p>
              <p className="mt-1 text-sm font-bold text-slate-800">ACT-2026-0312</p>
            </div>
            <div className="h-8 w-8 rounded bg-slate-100" aria-hidden />
          </div>

          <dl className="space-y-2 text-[11px]">
            <div className="flex justify-between gap-2">
              <dt className="text-slate-500">Equipo</dt>
              <dd className="font-medium text-slate-800">COM-0075</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-slate-500">Tipo</dt>
              <dd className="text-slate-700">Monitor Dell P2422H</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-slate-500">Origen → Destino</dt>
              <dd className="text-right text-slate-700">
                Almacén IT → Of. 4·Piso 2
              </dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-slate-500">Responsable</dt>
              <dd className="text-slate-700">María González</dd>
            </div>
          </dl>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-3">
            <div>
              <p className="mb-1 text-[10px] text-slate-400">Entrega (IT)</p>
              <div className="flex h-12 items-end rounded border border-dashed border-slate-200 bg-slate-50 px-2 pb-1">
                <span className="font-serif text-lg italic text-slate-600">J. Pérez</span>
              </div>
              <p className="mt-1 flex items-center gap-1 text-[9px] text-emerald-600">
                <ShieldCheck className="h-3 w-3" />
                Certificado válido
              </p>
            </div>
            <div>
              <p className="mb-1 text-[10px] text-slate-400">Recibe (Usuario)</p>
              <div className="relative flex h-12 items-center justify-center rounded border-2 border-brand-400 bg-brand-50/50">
                <PenLine className="h-4 w-4 text-brand-600" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[9px] text-white">
                  ✓
                </span>
              </div>
              <p className="mt-1 text-[9px] text-slate-500">Firmado 01/10/2026 13:04</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-3">
        <button
          type="button"
          className="w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
        >
          Descargar PDF firmado
        </button>
      </div>
    </div>
  );
}
