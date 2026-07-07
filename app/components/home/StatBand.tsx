import { Container } from "../ui/Container";
import { StatCounter } from "../ui/StatCounter";
import { stats } from "@/app/data/content";

export function StatBand() {
  return (
    <section className="relative -mt-14 z-20">
      <Container>
        <div className="grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-lift ring-1 ring-line sm:p-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              raw={s.raw}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
