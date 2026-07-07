function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

// Deterministic gradient pick so avatars are stable but varied
const gradients = [
  "from-primary to-primary-light",
  "from-accent to-accent-dark",
  "from-primary-dark to-primary",
];

export function Monogram({
  name,
  index = 0,
  className = "",
}: {
  name: string;
  index?: number;
  className?: string;
}) {
  const g = gradients[index % gradients.length];
  return (
    <div
      aria-hidden
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${g} font-display font-extrabold text-white ${className}`}
    >
      {initials(name)}
    </div>
  );
}
