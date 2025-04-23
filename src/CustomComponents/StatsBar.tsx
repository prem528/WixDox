type Stat = { value: string; label: string; };
export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="w-full bg-yellow-400/90 text-gray-900 flex flex-col md:flex-row justify-center items-center text-center py-5 gap-8 md:gap-0 font-semibold text-xl tracking-wider">
      {stats.map((s) => (
        <div key={s.label} className="flex-1">
          <div className="text-3xl font-extrabold animate-scale-in">{s.value}</div>
          <div className="text-sm uppercase">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
