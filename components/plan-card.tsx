import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PlanCard({ name, price, description, features, popular }: PlanCardProps) {
  return (
    <Card className={`relative ${popular ? 'border-primary' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm rounded-bl-lg">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground">/month</span>}
        </div>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="https://t.me/FeedsGramBot">Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}