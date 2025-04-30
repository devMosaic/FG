import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

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

export default function PricingPage() {
  return (
    <div className="container px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground">
          Choose the plan that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm rounded-bl-lg">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-muted-foreground">/month</span>}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
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
        ))}
      </div>
    </div>
  );
}