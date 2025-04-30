import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Effective Date</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">25 December 2024</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Welcome to FeedsGram. Protecting your privacy and ensuring the security of your personal data is our top priority. This Privacy Policy explains how we collect, use, store, and safeguard the information you share with us through the Bot. By using the Bot, you consent to the practices described in this document.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>1. Scope of the Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This Privacy Policy applies to all interactions with the Bot on Telegram. It governs the data collection, processing, and usage practices specifically related to the Bot's functionalities. Please note that this policy does not apply to any other Telegram bots, applications, or services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>
                <strong>a. User Information</strong>
                <ul className="list-disc pl-6">
                  <li>Telegram Username</li>
                  <li>User ID</li>
                  <li>Profile Photo (Optional)</li>
                </ul>
              </div>
              <div>
                <strong>b. Group Information</strong>
                <ul className="list-disc pl-6">
                  <li>Group Name and ID</li>
                  <li>Messages Sent to the Bot</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li>Administrative and Moderation Tasks</li>
                <li>User Support</li>
                <li>Performance Monitoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li>Encryption: All data transmitted is encrypted by default.</li>
                <li>Access Control: Only authorized personnel have access to collected data.</li>
                <li>Secure Storage: Stored in secure databases with strong protections.</li>
              </ul>
              <p>
                While we strive to protect your data, no digital system is completely secure. Users are encouraged to avoid sharing sensitive or unnecessary personal information through the Bot.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. User Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li><strong>Right to Access:</strong> Request details of your information.</li>
                <li><strong>Right to Rectification:</strong> Request corrections to your data.</li>
                <li><strong>Right to Data Deletion:</strong> Request deletion of your data, including user info and message logs.</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how your data is processed (may affect Bot functionality).</li>
              </ul>
              <p>To exercise any of these rights, please contact us through the details provided in Section 8.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-6">
                <li>Do not share sensitive personal information with the Bot.</li>
                <li>Use the Bot only for its intended purposes.</li>
                <li>Report any misuse or unauthorized access immediately.</li>
              </ul>
              <p>Failure to adhere may result in limited functionality or removal of the Bot.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Amendments to the Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We reserve the right to update or modify this Privacy Policy as necessary. In case of significant changes, we will notify users through the Update Channel. Please review this policy periodically to stay informed.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>Email: <a href="mailto:am.42.mail@gmail.com" className="text-blue-600 underline">am.42.mail@gmail.com</a></p>
              <p>Telegram: <a href="https://t.me/FeedsGramSupport" className="text-blue-600 underline">@FeedsGramSupport</a></p>
              <p>By using FeedsGram, you acknowledge that you have read, understood, and agreed to this Privacy Policy. Your trust is important to us, and we are committed to safeguarding your data while delivering the best possible service.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
