import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/countdown-timer";

export function HeroSection() {
  return (
    <section className="h-[90vh] flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="pix-font">JN</span>Hacks<span className="pix-font text-6xl">2024</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Join us for 24 hours of innovation, creativity, and coding. Build something amazing with fellow students!
            </p>
          </div>
          <CountdownTimer />
          <div className="space-x-4">
            <Button size="lg"><a href="https://forms.gle/vnfjkiF3WZfzNQ958">Register Now</a></Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}