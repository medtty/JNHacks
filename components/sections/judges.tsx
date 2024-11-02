import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function JudgesSection() {
  const judges = [
    {
      name: "Prof. ...",
      role: "role",
      image: "",
      expertise: "expertise"
    },
    {
      name: "Stud. ...",
      role: "role",
      image: "",
      expertise: "expertise"
    },
    {
      name: "Prof. ...",
      role: "role",
      image: "",
      expertise: "expertise"
    },
    {
      name: "Stud. ...",
      role: "role",
      image: "",
      expertise: "expertise"
    }
  ];

  return (
    <section className="py-20 mx-12" id="judges">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Meet Our Judges</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Industry experts who will evaluate your projects
          </p>
        </div>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {judges.map((judge, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={judge.image} alt={judge.name} />
                        <AvatarFallback>{judge.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle>{judge.name}</CardTitle>
                    <CardDescription className="text-primary">{judge.role}</CardDescription>
                    {/* <CardDescription>{judge.company}</CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Expert in {judge.expertise}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="mr-4" />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}