import { SITE_LOCATION } from "@/lib/site";
import {
  ArrowRight,
  Clock,
  Link2,
  Monitor,
  Paperclip,
  Send,
  Sparkles,
} from "lucide-react";

type TicketEntryFormProps = {
  layout?: "compact" | "page";
};

const fieldBox =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800";

export function TicketEntryForm({ layout = "compact" }: TicketEntryFormProps) {
  const isPage = layout === "page";

  return (
    <div
      className={`flex flex-col overflow-hidden bg-white ${
        isPage ? "rounded-xl shadow-panel" : "rounded-xl shadow-float"
      }`}
    >
      <div className="border-b border-slate-100 bg-gradient-to-r from-brand-600 to-brand-700 px-5 py-4 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-brand-100">
              Nuevo ticket
            </p>
            <p className="text-base font-semibold">#TK-2026-0847</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs">
              <Clock className="h-3.5 w-3.5" />
              SLA objetivo: 8 h
            </span>
            <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium">
              Prioridad alta
            </span>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col ${isPage ? "gap-4 p-5 md:p-6" : "gap-5 p-4"}`}
      >
        {isPage ? (
          <div className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                  Categoría
                </label>
                <div className={fieldBox}>Aplicaciones / Software</div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                  Área solicitante
                </label>
                <div className={fieldBox}>Farmacia hospitalaria</div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                  Apellidos
                </label>
                <div className={fieldBox}>González</div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-500">
                  Nombres
                </label>
                <div className={fieldBox}>María</div>
              </div>
            </div>
          </div>
        ) : null}

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-500">
            Asunto
          </label>
          <div className={fieldBox}>
            Error al descargar archivos del SGD
          </div>
        </div>

        <div className="rounded-xl border border-brand-100 bg-brand-50/50 p-4">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
            <Link2 className="h-3.5 w-3.5" />
            Vincular programa ↔ equipo
          </div>

          <div className={`grid gap-3 ${isPage ? "md:grid-cols-[1fr_auto_1fr]" : ""}`}>
            <div className="flex items-center gap-2 rounded-lg border border-white bg-white p-3 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-xs font-bold tracking-tight text-violet-700">
                SGD
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500">Software</p>
                <p className="truncate text-sm font-medium text-slate-800">SGD</p>
              </div>
              {!isPage ? (
                <ArrowRight className="h-4 w-4 shrink-0 text-brand-500" />
              ) : null}
            </div>

            {isPage ? (
              <div className="hidden items-center justify-center text-brand-500 md:flex">
                <ArrowRight className="h-5 w-5" />
              </div>
            ) : null}

            <div className="flex items-center gap-2 rounded-lg border-2 border-brand-500 bg-white p-3 shadow-sm ring-2 ring-brand-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                <Monitor className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500">Equipo</p>
                <p className="truncate text-sm font-semibold text-slate-800">
                  COM-0075 · Dell P2422H
                </p>
                <p className="text-[11px] leading-snug text-slate-500">
                  María González · {SITE_LOCATION}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-3 flex items-start gap-1.5 text-[11px] leading-relaxed text-brand-800/80">
            <Sparkles className="mt-0.5 h-3 w-3 shrink-0" />
            El historial del activo y las licencias se adjuntan automáticamente al
            ticket.
          </p>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-500">
            Descripción
          </label>
          <div className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm leading-relaxed text-slate-600">
            No me permite descargar archivos del SGD. Icono del inicio en rojo.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <Paperclip className="h-3.5 w-3.5" />
            Captura de pantalla.png
          </span>
          {isPage ? (
            <button
              type="button"
              className="rounded-lg border border-dashed border-slate-300 px-3 py-2 text-slate-500 hover:border-brand-300 hover:text-brand-600"
            >
              + Adjuntar archivo
            </button>
          ) : null}
        </div>
      </div>

      <div
        className={`flex gap-2 border-t border-slate-100 bg-slate-50/80 ${
          isPage ? "px-6 py-4 md:px-8" : "p-3"
        }`}
      >
        <button
          type="button"
          className="flex-1 rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-medium text-slate-700"
        >
          Guardar borrador
        </button>
        <button
          type="button"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Crear ticket
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
