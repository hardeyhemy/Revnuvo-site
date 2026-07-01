// components/live-status.tsx
export function LiveStatus({ edgeLocation = "SFO" }: { edgeLocation?: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      Live Service
      <span className="text-muted-foreground">· {edgeLocation} Edge</span>
    </div>
  );
}
