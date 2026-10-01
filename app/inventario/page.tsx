import { DashboardMock } from "@/components/brochure/DashboardMock";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function InventarioPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al brochure
          </Link>
          <p className="text-xs text-slate-500">
            Vista inventario · sin modales · captura a 1440px+
          </p>
        </div>

        <DashboardMock variant="inventory-only" showOverlays={false} fullHeight />
      </div>
    </main>
  );
}
