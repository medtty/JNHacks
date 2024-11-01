import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { OrganizersSection } from "@/components/sections/organizers";
import { TopicsSection } from "@/components/sections/topics";
import { ScheduleSection } from "@/components/sections/schedule";
import { TrainingSection } from "@/components/sections/training";
import { JudgesSection } from "@/components/sections/judges";
import { VenueSection } from "@/components/sections/venue";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <HeroSection />
      <div className="container mx-auto px-4">
        <FeaturesSection />
        <VenueSection />
        <TopicsSection />
        <TrainingSection />
        <ScheduleSection />
        <JudgesSection />
        <OrganizersSection />
      </div>
    </div>
  );
}