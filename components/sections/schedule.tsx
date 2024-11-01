import { Button } from "@/components/ui/button";

export function ScheduleSection() {
  const scheduleItems = [
    {
      time: "8:00 AM",
      title: "Check-in & Registration",
      description: "Teams forming"
    },
    {
      time: "9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome and kickoff"
    },
    {
      time: "10:00 AM",
      title: "Hacking Begins!",
      description: "Start working on your projects"
    }
  ];

  return (
    <section className="py-20" id="schedule">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Event Schedule <span className="text-xl text-gray-400 font-normal">(in progress)</span></h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="min-w-[100px] text-right text-muted-foreground">{item.time}</div>
              <div className="flex-1 bg-card p-4 rounded-lg">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-8">
          <Button variant="outline">View Full Schedule</Button>
        </div> */}
      </div>
    </section>
  );
}