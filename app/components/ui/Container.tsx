import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const max =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-[1320px]"
        : "max-w-[1200px]";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
