import { TicketEntryMock } from "@/components/brochure/TicketEntryMock";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TicketPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al brochure
          </Link>
        </div>

        <TicketEntryMock />
      </div>
    </main>
  );
}
