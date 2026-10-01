import { AssetInventoryPanel } from "@/components/brochure/AssetInventoryPanel";
import { PdfActaPanel } from "@/components/brochure/PdfActaPanel";
import { Sidebar } from "@/components/brochure/Sidebar";
import { TicketLinkPanel } from "@/components/brochure/TicketLinkPanel";
import { Bell, ChevronDown, UserCircle2 } from "lucide-react";

type DashboardMockProps = {
  variant?: "full" | "inventory-only";
  showOverlays?: boolean;
  fullHeight?: boolean;
};

export function DashboardMock({
  variant = "full",
  showOverlays = true,
  fullHeight = false,
}: DashboardMockProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-float">
      <div
        className={`flex min-h-[520px] ${
          fullHeight ? "h-[min(900px,calc(100vh-5rem))]" : "h-[min(720px,85vh)]"
        }`}
      >
        <Sidebar />

        <div className="relative flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-800">
                Parque informático
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

          <div className="relative flex min-h-0 flex-1 gap-0 bg-slate-50/80 p-3 md:p-4">
            <AssetInventoryPanel />

            {variant === "full" && showOverlays ? (
              <div className="pointer-events-none absolute inset-0 hidden items-start justify-end gap-3 p-4 lg:flex">
                <div className="mt-8 translate-x-2 scale-[0.92] opacity-[0.97]">
                  <TicketLinkPanel />
                </div>
                <div className="mt-24 -translate-x-1 scale-[0.88] opacity-[0.95]">
                  <PdfActaPanel />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
