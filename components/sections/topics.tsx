import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, DollarSign, Edit, Calendar, Heart, BookOpen, Dumbbell, Sun, Globe, Utensils, Plane } from 'lucide-react';

export function TopicsSection() {
  const tracks = [
    {
        icon: Book,
        title: "Library App",
        description: "An application that manages and recommends books, tracks reading progress, and allows users to borrow and return books.",
        tags: ["JavaScript", "Node.js", "MongoDB", "React"]
    },
    {
        icon: DollarSign,
        title: "Finance App",
        description: "A personal finance management tool that helps users track expenses, create budgets, and analyze spending habits.",
        tags: ["Python", "Flask", "SQLite", "Data Visualization"]
    },
    {
        icon: Edit,
        title: "Blog Posting App",
        description: "A platform for users to create, publish, and manage blog posts, featuring user authentication and comment functionality.",
        tags: ["Django", "PostgreSQL", "HTML", "CSS"]
    },
    {
        icon: Calendar,
        title: "Task Scheduler App",
        description: "An application that allows users to create, manage, and schedule tasks with reminders and notifications.",
        tags: ["Java", "Spring Boot", "MySQL", "React"]
    },
    {
        icon: Heart,
        title: "Health App",
        description: "An app that lets users input symptoms and receive suggestions on possible health conditions and advice.",
        tags: ["Machine Learning", "Python", "Flask", "Health Informatics"]
    },
    {
        icon: BookOpen,
        title: "Study App",
        description: "A study aid that summarizes notes and creates quizzes to help users reinforce learning material.",
        tags: ["JavaScript", "Node.js", "NLP", "MongoDB"]
    },
    {
        icon: Dumbbell,
        title: "Fitness/Nutrition App",
        description: "A comprehensive health app that tracks workouts and nutrition, providing personalized meal and exercise plans.",
        tags: ["React Native", "Firebase", "Health Data", "Nutrition"]
    },
    {
        icon: Sun,
        title: "Weather App",
        description: "An application that provides real-time weather updates and forecasts based on the user's location.",
        tags: ["JavaScript", "APIs", "React", "Data Visualization"]
    },
    {
        icon: Globe,
        title: "Language Practice App",
        description: "An interactive app for users to practice languages through exercises, quizzes, and progress tracking.",
        tags: ["Flutter", "Dart", "API Integration", "Language Learning"]
    },
    {
        icon: Utensils,
        title: "Kitchen Aid App",
        description: "A cooking companion that suggests recipes based on the ingredients users have on hand.",
        tags: ["Python", "Flask", "Web Scraping", "Recipe API"]
    },
    {
        icon: Plane,
        title: "Travel Guide App",
        description: "An app that provides users with travel guides, itinerary suggestions, and local attractions based on their interests.",
        tags: ["React", "Node.js", "API Integration", "Travel Data"]
    }
];


  return (
    <section className="py-20" id="tracks">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Hackathon Topics</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Choose from our carefully selected topics or innovate in your own direction
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <track.icon className="w-8 h-8 text-primary mb-2" />
                <CardTitle>{track.title}</CardTitle>
                <CardDescription>{track.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {track.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
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