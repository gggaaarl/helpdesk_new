import { Sidebar } from "@/components/brochure/Sidebar";
import { TicketEntryForm } from "@/components/brochure/TicketEntryForm";
import { Bell, ChevronDown, Plus, UserCircle2 } from "lucide-react";

export function TicketEntryMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-float">
      <div className="flex">
        <Sidebar active="Mesa de ayuda" />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-800">
                Mesa de ayuda
              </span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-50"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
              </button>
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 py-1 pl-1 pr-2">
                <UserCircle2 className="h-7 w-7 text-slate-400" />
                <span className="hidden text-xs font-medium text-slate-700 sm:inline">
                  Admin IT
                </span>
              </div>
            </div>
          </header>

          <div className="flex flex-col gap-3 bg-slate-50/80 p-3 md:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                {["Cola de tickets", "Nuevo ticket", "Mis solicitudes"].map(
                  (tab, i) => (
                    <button
                      key={tab}
                      type="button"
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
                        i === 1
                          ? "bg-brand-50 text-brand-700"
                          : "text-slate-500 hover:bg-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ),
                )}
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm"
              >
                <Plus className="h-4 w-4" />
                Nuevo
              </button>
            </div>

            <div className="mx-auto w-full max-w-3xl">
              <TicketEntryForm layout="page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
