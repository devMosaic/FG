import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, Users, MessageSquare, BarChart3, Workflow, Brain, Shield, Command, Globe } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Automated Responses",
    description: "Set up intelligent auto-replies for common queries and save time."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer Management",
    description: "Efficiently manage and organize your subscriber base."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Broadcast Messages",
    description: "Send updates to all your subscribers with one click."
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "Track engagement and growth with detailed insights."
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Easy Integration",
    description: "Seamlessly connect with your existing workflow."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Blazing Speed",
    description: "Lightning-fast response times for better engagement."
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Integration",
    description: "Leverage artificial intelligence for smarter responses."
  },
  {
    icon: <Command className="h-8 w-8" />,
    title: "Advanced Admin Panel",
    description: "Powerful tools to manage your bot effectively."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "All-in-One Solution",
    description: "Everything you need in one powerful platform."
  }
];

export default function FeaturesPage() {
  return (
    <div className="container px-4 py-20">
      <div className="text-center mb-12">
        <Bot className="h-16 w-16 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-lg text-muted-foreground">
          Discover what makes FeedsGramBot the perfect choice for your Telegram feed management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} className="relative overflow-hidden">
            <CardHeader>
              <div className="mb-4 text-primary">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}