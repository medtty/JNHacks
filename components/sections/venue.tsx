import Image from "next/image";
import { MapPin } from "lucide-react";

export function VenueSection() {
  return (
    <section className="py-20 bg-secondary/30 rounded-lg" id="venue">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">... Building</h2>
            <p className="text-muted-foreground">
              Join us.
            </p>
            <ul className="space-y-2 text-sm">
              <li>📍 Nxxx Avenue</li>
              <li>🏢 Just beside you (5 min walk)</li>
              <li>🍔 Free Food</li>
              <li>♿ Fully accessible venue</li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/img/image.png"
              alt="University Campus"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}