import { Bot } from "lucide-react";

export function Loading() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="animate-spin">
        <Bot className="h-12 w-12 text-primary" />
      </div>
    </div>
  );
}