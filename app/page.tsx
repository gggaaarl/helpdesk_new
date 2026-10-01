import { DashboardMock } from "@/components/brochure/DashboardMock";
import { PdfActaPanel } from "@/components/brochure/PdfActaPanel";
import { TicketEntryMock } from "@/components/brochure/TicketEntryMock";
import {
  FileSignature,
  Link2,
  MonitorSmartphone,
  Ticket,
  TreePine,
} from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Inventario unificado",
    desc: "Hardware, software y ubicación en una sola vista, al estilo ITAM enterprise.",
  },
  {
    icon: Link2,
    title: "Ticket ↔ activo",
    desc: "Cada solicitud se vincula al programa y al equipo para resolver más rápido.",
  },
  {
    icon: FileSignature,
    title: "Actas PDF firmadas",
    desc: "Entregas y desplazamientos con firma digital y trazabilidad, sin imprimir.",
  },
  {
    icon: TreePine,
    title: "Proceso sin papel",
    desc: "Menos costos, menos pérdida de documentos y auditorías más simples.",
  },
];

export default function BrochurePage() {
  return (
    <main className="min-h-screen brochure-gradient">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200">
            <Ticket className="h-3.5 w-3.5" />
            Maqueta para brochure
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Mesa de ayuda + parque informático
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Interfaz ultra limpia inspirada en plataformas ITAM modernas: tickets
            ligados a equipos y software, e{" "}
            <strong className="font-semibold text-slate-800">
              actas digitales con firma
            </strong>{" "}
            para todo el ciclo de entrega y movimiento de activos.
          </p>
        </div>

        <DashboardMock variant="inventory-only" showOverlays={false} />
      </section>

      <section className="border-t border-slate-200/60 bg-white/60 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
            Pantallas individuales para el folleto
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-slate-700">1 · Inventario</p>
              <DashboardMock variant="inventory-only" showOverlays={false} />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-slate-700">
                2 · Ingreso de ticket
              </p>
              <TicketEntryMock />
            </div>
            <div className="mx-auto flex w-full max-w-md flex-col items-center gap-3">
              <p className="text-sm font-medium text-slate-700">3 · Acta PDF</p>
              <PdfActaPanel />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <f.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-900 px-4 py-8 text-center text-sm text-slate-400">
        Stack objetivo: Next.js + Tailwind CSS · UI de referencia estilo{" "}
        <a
          href="https://invgate.com/es/itsm/it-asset-management/it-asset-inventory"
          className="text-brand-100 underline decoration-brand-500/50 underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          InvGate ITAM
        </a>
      </footer>
    </main>
  );
}
