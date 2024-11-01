import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function TrainingSection() {
  const sessions = [
    {
      date: "Dec 27, 2024",
      venu: "ShangB N202",
      title: "Introduction to AI",
      instructor: "student A",
      time: "6:00 PM - 8:00 PM",
      level: "Beginner"
    },
    {
      date: "Jan 05, 2025",
      venu: "ShangB N202",
      title: "Backend Dev...",
      instructor: "student B",
      time: "6:00 PM - 8:00 PM",
      level: "Beginner, Intermediate"
    },
    {
      date: "Jan 11, 2025",
      venu: "ShangB N202",
      title: "API Integration and Data Handeling",
      instructor: "student B",
      time: "6:00 PM - 8:00 PM",
      level: "Beginner, Intermediate"
    },
    {
      date: "Jan 20, 2025",
      venu: "ShangB N202",
      title: "How To Workshop",
      instructor: "student C",
      time: "6:00 PM - 8:00 PM",
      level: "Beginner"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 rounded-lg" id="training">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Pre-Hackathon Training[Workshops] <span className="text-xl text-gray-400 font-normal">(in progress)</span></h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Get ready for the hackathon with our expert-led training WORKSHOPS
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{session.date}</span>
                </div>
                <CardTitle>{session.title}</CardTitle>
                <CardDescription>By {session.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>🕒 {session.time}</p>
                  <p>📍 {session.venu}</p>
                  <p>📊 Level: {session.level}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}