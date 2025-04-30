import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/typing-effect";
import { PlanCard } from "@/components/plan-card";
import { FeatureCard } from "@/components/feature-card";
import { AboutSection } from "@/components/about-section";
import Link from "next/link";
import { Bot, ArrowRight, Zap, Users, MessageSquare, BarChart3, Workflow, Brain, Shield, Command, Globe } from "lucide-react";

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

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started with support tool",
    features: [
      "Only 3 bots",
      "Only 5 filters",
      "Only 5 blocked words",
      "Limited to 1 Group",
      "All advanced admin panel",
      "Only 1 saved ai prompt",
      "Standard speed limit",
      "Full community support"
    ]
  },
  {
    name: "Pro",
    price: "29 Rs",
    description: "Ideal for growing channels and businesses",
    features: [
      "Upto 6 bots",
      "Upto 15 filters",
      "Upto 15 blocked words",
      "Limited to 2 Group",
      "All advanced admin panel",
      "Only 2 saved ai prompt",
      "Improved speed limit",
      "Full community support"
    ],
    popular: true
  },
  {
    name: "Ultra",
    price: "79 Rs",
    description: "For power business who need it all",
    features: [
      "10 bots",
      "25 filters",
      "25 blocked words",
      "Upto 3 Group",
      "All advanced admin panel",
      "Only 3 saved ai prompt",
      "Faster speed ",
      "24/7 priority support",
    ]
  }
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 py-20 sm:py-32 bg-background">
        <div className="container relative">
          <div className="mx-auto max-w-10xl text-center">
            <div className="flex justify-center mb-8">
              <Bot className="h-16 w-20 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
             Simplify Customer Interactions with FeedsGram
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Powerful automation for your <TypingEffect />
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Button asChild size="lg">
                <Link href="https://t.me/FeedsGramBot">
                  Try Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-10 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Your Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(0, 6).map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-10 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/pricing">Compare Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
    </div>
  );
}