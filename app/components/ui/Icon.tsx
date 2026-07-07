import {
  HeartPulse,
  GraduationCap,
  Briefcase,
  Users,
  LifeBuoy,
  Leaf,
  Landmark,
  FlaskConical,
  Scale,
  Sprout,
  Megaphone,
  HandHeart,
  Heart,
  Handshake,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  heartPulse: HeartPulse,
  graduationCap: GraduationCap,
  briefcase: Briefcase,
  users: Users,
  lifeBuoy: LifeBuoy,
  leaf: Leaf,
  landmark: Landmark,
  flaskConical: FlaskConical,
  scale: Scale,
  sprout: Sprout,
  megaphone: Megaphone,
  handHeart: HandHeart,
  heart: Heart,
  handshake: Handshake,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Heart;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
