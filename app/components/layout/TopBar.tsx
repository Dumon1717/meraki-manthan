import { Mail, Phone } from "lucide-react";
import { org } from "@/app/data/content";
import { SocialIcon } from "../ui/SocialIcon";
import { Container } from "../ui/Container";

export function TopBar() {
  return (
    <div className="hidden bg-primary-dark text-white/90 lg:block">
      <Container className="flex h-10 items-center justify-between text-[0.8rem]">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${org.email}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="size-3.5" />
            {org.email}
          </a>
          <a
            href={`tel:${org.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="size-3.5" />
            {org.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/60">Follow us</span>
          <div className="flex items-center gap-1">
            {org.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid size-7 place-items-center rounded-full transition-colors hover:bg-white/15"
              >
                <SocialIcon name={s.icon} className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
