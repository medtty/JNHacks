import { Construction } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6 animate-in fade-in duration-500">
      <Construction className="h-24 w-24 text-muted-foreground animate-pulse" />
      <h1 className="text-4xl font-bold tracking-tight">Coming Soon</h1>
      <p className="text-muted-foreground text-lg text-center max-w-[500px]">
        Projects will be displayed here during the hackathon. Stay tuned to see what amazing things our participants create!
      </p>
    </div>
  );
}