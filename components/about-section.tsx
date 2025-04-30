import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About FeedsGramBot</h2>
          <p className="text-lg text-muted-foreground mb-8">
            At Feedsgram, we're dedicated to revolutionizing how businesses interact with their customers. Our Telegram bot solution simplifies customer communication while maintaining a personal touch. 
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                With years of experience in Telegram bot development, we understand the needs of content creators and community managers. Our platform is built to be reliable, scalable, and user-friendly.
              </p>
              <div className="flex justify-center mt-6">
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}