"use client";

import { useEffect, useState } from "react";

const features = [
  "Automated Responses",
  "Broadcast Messages",
  "Advanced Analytics",
  "AI Integration",
  "Customer Management",
  "Easy Integration",
];

export function TypingEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const current = loopNum % features.length;
    const fullText = features[current];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      } else {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(75);
      }
    }, typingSpeed);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="text-primary min-h-[1.5em] inline-block">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}