import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Terms of Service</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Last Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">February 23, 2025</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Welcome</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Welcome to FeedsGram! By using this bot, you agree to the following terms and conditions. These terms are designed to ensure a safe, efficient, and productive experience for all users. Please read them carefully before proceeding.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>1. Purpose of the Bot</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>FeedsGram is developed to assist Telegram user administrators in managing their groups effectively. Its key features include:</p>
              <ul className="list-disc pl-6">
                <li>Moderating group chats by deleting unwanted messages and issuing warnings.</li>
                <li>Managing member permissions, such as muting, kicking, or banning users.</li>
                <li>Enforcing group-specific rules and regulations automatically.</li>
                <li>Sending alerts, notifications, or pre-configured responses to specific events.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li>Compliance with Laws: You must adhere to all applicable laws and Telegram’s terms.</li>
                <li>Proper Configuration: You're responsible for the bot’s settings in your group.</li>
                <li>Prohibited Uses:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Spreading spam or unsolicited content.</li>
                    <li>Harassment, threats, or bullying.</li>
                    <li>Sharing illegal or offensive material.</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Data Collection and Usage</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li>What Data is Collected: Activity logs, user IDs, and moderated messages.</li>
                <li>Purpose: Executing commands, enforcing rules, and improving functionality.</li>
                <li>Privacy: No sensitive data is stored or used beyond what’s required.</li>
                <li>Log Usage: Logs are used only for debugging and performance improvements.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li>Sharing or promoting illegal, offensive, or harmful content.</li>
                <li>Exploiting vulnerabilities or unauthorized access attempts.</li>
                <li>Impersonating the bot or misrepresenting its purpose.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Bot Permissions</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li>Message Reading: For moderation of actionable content only.</li>
                <li>Message Deletion: To remove flagged or inappropriate content.</li>
                <li>Member Management: Auto actions like muting, banning, kicking.</li>
                <li>Admin Rights: Required for certain configurations and actions.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Liability and Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li>No Warranties: Bot is provided "as is" without warranties.</li>
                <li>Limited Liability: Not liable for:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Data loss</li>
                    <li>Unintended bans or errors</li>
                    <li>User misuse</li>
                  </ul>
                </li>
                <li>Testing: You should test the bot in a controlled group before full deployment.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Termination of Access</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Bot access may be terminated or restricted if users violate terms, misuse permissions, or due to technical issues or maintenance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Updates and Changes</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                These terms may be updated over time. Continued use implies acceptance of changes. Users are encouraged to review them regularly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Support and Feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                For support or suggestions, please contact us. Your feedback helps us improve FeedsGram.
              </p>
              <p className="mt-2">
                <strong>Contact:</strong>{" "}
                <a href="mailto:am.42.mail@gmail.com" className="text-blue-600 underline">am.42.mail@gmail.com</a> or{" "}
                <a href="https://t.me/FeedsGramSupport" className="text-blue-600 underline">@FeedsGramSupport</a>
              </p>
              <p className="mt-4">
                By using FeedsGram, you confirm that you have read, understood, and agreed to these terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
