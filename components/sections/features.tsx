import { Calendar, Users, Trophy, Sparkles } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "24 Hours",
      description: "Full day of hacking, learning, and building"
    },
    {
      icon: Users,
      title: "100+ Student",
      description: "Connect with talented developers"
    },
    {
      icon: Trophy,
      title: "Prizes \"maybe\"",
      description: "Amazing prizes for top projects"
    },
    {
      icon: Sparkles,
      title: "Workshops",
      description: "Learn from industry \"experts\""
    }
  ];

  return (
    <section className="py-20" id="about">
      {/* <h2 className="text-3xl font-bold tracking-tighter mb-8">Hackathon Tracks</h2> */}
      <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Features</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
          JNHacks2024 is a 24-hour hackathon focused on AI-powered projects, held at <a href="https://nuist.edu.cn" target="_blank" className="text-blue-600">NUIST</a>'s Jinniuhu campus. It encourages students to innovate, collaborate, and create AI-driven applications across diverse domains.
          </p>
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-background rounded-lg shadow-lg">
              <feature.icon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}