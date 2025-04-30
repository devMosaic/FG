import Link from "next/link";
import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <span className="font-bold">FeedsGramBot</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your all-in-one Telegram customer support solution.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="hover:text-primary">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">Pricing</Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-primary">Status</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-primary">FAQ</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">About</Link>
              </li>
              <li>
                <Link href="https://t.me/FeedsGramBot" className="hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FeedsGramBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}