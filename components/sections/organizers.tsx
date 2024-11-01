import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function OrganizersSection() {
  const organizers = [
    {
      name: "CESS",
      role: "Lead Organizer",
      description: "Student-led organization promoting tech innovation",
      members: [
        {
          name: "Medy",
          role: "President",
          image: ""
        },
        {
          name: "Osmund",
          role: "Vice President",
          image: ""
        },
        {
          name: "Ola",
          role: "Organizer",
          image: ""
        }
      ]
    },
    {
      name: "AAD",
      role: "Lead Organizer",
      description: "Student-led organization promoting tech innovation",
      members: [
        {
          name: "Mehdi",
          role: "President",
          image: ""
        },
        {
          name: "Thelma",
          role: "Vice President",
          image: ""
        },
        {
          name: "Ndzalama",
          role: "org",
          image: ""
        },
        {
          name: "Suohail",
          role: "...",
          image: ""
        },
        {
          name: "Wassim",
          role: "...",
          image: ""
        },
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 rounded-lg" id="organizers">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Organizing Team</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Meet the dedicated team making JNHacks2024 possible
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {organizers.map((org, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{org.name}</CardTitle>
                <CardDescription className="text-primary">{org.role}</CardDescription>
                <CardDescription>{org.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {org.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{member.name}</p>
                        <p className="text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}