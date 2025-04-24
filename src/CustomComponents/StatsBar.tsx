import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

type Stat = { value: string; label: string };

export default function StatsBar({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full bg-blue-400/70 text-gray-900 flex flex-col md:flex-row justify-center items-center text-center py-5 gap-8 md:gap-0 font-semibold text-xl tracking-wider"
    >
      {stats.map((s) => {
        const numericValue = parseFloat(s.value.replace(/,/g, ""));
        return (
          <div key={s.label} className="flex-1">
            <div className="text-4xl font-semibold animate-scale-in">
              {startCount ? (
                <CountUp end={numericValue} start={0}/>
              ) : (
                "0"
              )}
            </div>
            <div className="text-lg uppercase">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}
