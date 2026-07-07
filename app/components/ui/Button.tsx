import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "accent" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-lift focus-visible:outline-primary",
  accent:
    "bg-accent text-white hover:bg-accent-dark shadow-soft hover:shadow-lift focus-visible:outline-accent",
  outline:
    "border border-primary/30 text-primary bg-white/60 hover:bg-primary hover:text-white hover:border-primary focus-visible:outline-primary",
  ghost:
    "text-primary hover:bg-primary-soft/60 focus-visible:outline-primary",
  white:
    "bg-white text-ink hover:bg-cream shadow-soft hover:shadow-lift focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false,
  ...rest
}: CommonProps & {
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} group ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
