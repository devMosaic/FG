"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How do I start using FeedsGram?",
    answer:
      "Send the /start command to the FeedsGram Bot. You’ll be asked to accept the Terms of Service and Privacy Policy. Once accepted, you can choose your preferred language and start creating or managing your feedback bots."
  },
  {
    question: "What is a feedback bot and what can it do?",
    answer:
      "A feedback bot created through FeedsGram lets others send you private messages or feedback anonymously. You can view, manage, and reply to these messages directly within Telegram."
  },
  {
    question: "How can I create a new feedback bot?",
    answer:
      "Click the “Create Bot” or similar button in the FeedsGram menu. You’ll be guided to authorize a new bot through BotFather and link it with FeedsGram for enhanced features."
  },
  {
    question: "Is FeedsGram free to use?",
    answer:
      "Yes, FeedsGram offers a Free plan with basic features. However, for advanced features like more filters, groups, and storage, you can upgrade to a Pro or Ultra plan."
  },
  {
    question: "How do I upgrade my plan?",
    answer:
      "Click on the “Upgrade” option in the bot menu. You’ll be shown available plans and redirected to payment. Once successful, your account and all linked bots will be upgraded instantly."
  },
  {
    question: "What happens when my subscription ends?",
    answer:
      "You’ll be notified when your plan is close to expiration (3, 2, and 1 day before). If it expires, your account will be downgraded to the Free plan. Extra bots or filters over the Free limit may be archived or removed automatically."
  },
  {
    question: "How can I change my language in the bot?",
    answer:
      "Use the “Change Language” option in the menu. A list of supported languages will be shown—choose one to update your interface instantly."
  },
  {
    question: "Can I translate or summarize messages with AI?",
    answer:
      "Yes! If your bot has AI features enabled, you can use commands like /tr [language] to translate a message, or /su [tone] to summarize it. AI credits are required to use these features."
  },
  {
    question: "What are AI credits and how do I get them?",
    answer:
      "AI credits allow you to use GenAI-based features like translations and smart replies. You start with some free credits, and more can be added by admins manually or included in premium plans."
  },
  {
    question: "I accidentally blocked a user—how do I unblock them?",
    answer:
      "Reply to a message from the banned user and use /unban to remove the block. You can also view user info using /info or fetch users with /fetch [id/@username]."
  },
  {
    question: "What if someone sends abusive content?",
    answer:
      "You can configure blocked words in your bot. If any message contains a blocked word, it will be stopped from being delivered. Use the admin panel of your bot to manage this list."
  },
  {
    question: "What happens if I exceed my limits on the Free plan?",
    answer:
      "If you exceed limits (e.g., too many bots, groups, or blocked words), some bots may be archived or filters disabled until you reduce usage or upgrade your plan."
  },
  {
    question: "How do I know which users sent messages?",
    answer:
      "Users remain anonymous unless they choose to share their identity. However, as a bot owner, you can enable features like anonymous analytics or track via threads if needed."
  },
  {
    question: "Can I delete my bot or restart it?",
    answer:
      "Yes. Use the “My Bots” panel, then choose “Reboot”, “Update”, or “Delete” options for the selected bot. Deleted bots are archived and can be restored if needed."
  },
  {
    question: "I need help—how can I get support?",
    answer:
      "Use the /help command or tap the “Help” button in the menu. You’ll get FAQs, links, and possibly contact options for the admin or support team."
  }
];


export default function FAQPage() {
  return (
    <div className="container px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions about FeedsGramBot
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </div>
  );
}