"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

interface StatusData {
  status: "operational" | "degraded" | "down";
  response_time_ms: number;
  uptime: string;
  last_checked: string;
}

export default function StatusPage() {
  const [status, setStatus] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        // Simulated API response
        const data: StatusData = {
          status: "operational",
          response_time_ms: 152,
          uptime: "99.98%",
          last_checked: new Date().toISOString()
        };
        setStatus(data);
      } catch (error) {
        console.error("Error fetching status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case "degraded":
        return <Clock className="h-8 w-8 text-yellow-500" />;
      case "down":
        return <AlertCircle className="h-8 w-8 text-red-500" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="container px-4 py-20">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">System Status</h1>
        <p className="text-lg text-muted-foreground">
          Current status and performance metrics for FeedsGramBot
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>System Status</CardTitle>
              {status && getStatusIcon(status.status)}
            </div>
            <CardDescription>
              Last updated: {status?.last_checked ? new Date(status.last_checked).toLocaleString() : "N/A"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Current Status</p>
                <p className="text-muted-foreground capitalize">{status?.status}</p>
              </div>
              <div>
                <p className="font-medium">Response Time</p>
                <p className="text-muted-foreground">{status?.response_time_ms}ms</p>
              </div>
              <div>
                <p className="font-medium">Uptime</p>
                <p className="text-muted-foreground">{status?.uptime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}