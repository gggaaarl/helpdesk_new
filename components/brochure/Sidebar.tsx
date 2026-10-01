import {
  Activity,
  Boxes,
  Cloud,
  FileText,
  LayoutDashboard,
  Package,
  Settings,
  Ticket,
} from "lucide-react";

const nav = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Package, label: "Activos" },
  { icon: Boxes, label: "Software" },
  { icon: FileText, label: "Contratos" },
  { icon: Cloud, label: "CMDB" },
  { icon: Activity, label: "Actividades" },
  { icon: Ticket, label: "Mesa de ayuda", badge: "3" },
  { icon: Settings, label: "Ajustes" },
];

type SidebarProps = {
  active?: "Activos" | "Mesa de ayuda";
};

export function Sidebar({ active = "Activos" }: SidebarProps) {
  return (
    <aside className="flex w-[52px] shrink-0 flex-col items-center gap-1 bg-sidebar py-3 md:w-14">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-xs font-bold text-white">
        HD
      </div>
      {nav.map((item) => {
        const isActive = item.label === active;
        return (
          <button
            key={item.label}
            type="button"
            title={item.label}
            className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              isActive
                ? "bg-sidebar-active text-white"
                : "text-slate-400 hover:bg-sidebar-hover hover:text-white"
            }`}
          >
            <item.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            {item.badge ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-semibold text-white">
                {item.badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </aside>
  );
}
