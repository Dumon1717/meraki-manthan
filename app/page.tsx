import { Hero } from "./components/home/Hero";
import { StatBand } from "./components/home/StatBand";
import { CampaignCards } from "./components/home/CampaignCards";
import { MissionTeaser } from "./components/home/MissionTeaser";
import { Programs } from "./components/home/Programs";
import { Approach } from "./components/home/Approach";
import { Stories } from "./components/home/Stories";
import { Testimonial } from "./components/home/Testimonial";
import { Partners } from "./components/home/Partners";
import { DonateBand } from "./components/shared/DonateBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBand />
      <CampaignCards />
      <MissionTeaser />
      <Programs />
      <Approach />
      <Stories />
      <Testimonial />
      <Partners />
      <DonateBand />
    </>
  );
}
