import {
  Headphones,
  Laptop,
  Monitor,
  Server,
  Smartphone,
  Video,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  laptop: Laptop,
  monitor: Monitor,
  server: Server,
  phone: Smartphone,
  headset: Headphones,
  webcam: Video,
};

export function AssetTypeIcon({ type }: { type: string }) {
  const Icon = map[type] ?? Laptop;
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
      <Icon className="h-4 w-4" strokeWidth={1.75} />
    </span>
  );
}
