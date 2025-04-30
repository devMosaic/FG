import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Bot className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl font-bold mb-4">About FeedsGramBot</h1>
          <p className="text-lg text-muted-foreground">
            Your all-in-one solution for Telegram customer support
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              Empowering Telegram communities with powerful automation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              At Feedsgram, we're dedicated to revolutionizing how businesses interact with their customers. Our Telegram bot solution simplifies customer communication while maintaining a personal touch.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Started in 2023, FeedsGramBot has grown from a simple automation tool to a comprehensive platform serving thousands of Telegram users and groups worldwide.
            </p>
            <p className="text-muted-foreground">
              Our commitment to innovation and user experience has made us the go-to solution for Telegram feed management, trusted by content creators, businesses, and communities alike.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <strong>Innovation:</strong>
                <p className="text-muted-foreground">
                  Constantly improving and adding new features to serve you better
                </p>
              </li>
              <li>
                <strong>Reliability:</strong>
                <p className="text-muted-foreground">
                  Maintaining high uptime and fast response times
                </p>
              </li>
              <li>
                <strong>Security:</strong>
                <p className="text-muted-foreground">
                  Protecting your data with industry-standard security measures
                </p>
              </li>
              <li>
                <strong>User-Centric:</strong>
                <p className="text-muted-foreground">
                  Building features based on user feedback and needs
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}