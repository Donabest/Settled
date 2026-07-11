"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const questionAndAnswer = [
  {
    question: "Is Settled really free?",
    answer:
      "Yes! Create up to 10 invoices per month completely free. No credit card required.",
  },
  {
    question: "How does my client pay?",
    answer:
      "Every invoice has a Paystack payment link,your client clicks and pays directly online.",
  },
  {
    question: "Can I share invoices on WhatsApp?",
    answer:
      "Yes! Every invoice gets a shareable link you can send anywhere including WhatsApp.",
  },
  {
    question: "What happens when my client pays?",
    answer:
      "You get notified instantly and the invoice is automatically marked as paid.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes! All your data is encrypted and stored securely. We never share your information.",
  },
  {
    question: "Can I use Settled without a Paystack account?",
    answer:
      "Yes! You can create and share invoices manually and mark them paid yourself.",
  },
];

function Faqs() {
  const [showAns, setShowAns] = useState<number | null>(0);

  return (
    <section id="Faq" className="pb-20">
      <h3 className="w-fit mx-auto bg-blue-50 text-blue-600 text-sm font-nunito px-4 py-1 text-center">
        FAQ
      </h3>
      <div className="flex flex-col justify-center items-center space-y-2 mt-6">
        <h1 className="text-3xl font-semibold font-nunito md:text-5xl ">
          Frequently Asked Questions
        </h1>
        <p className=" font-nunito text-xs text-center text-muted md:w-130 md:text-sm">
          We complied a list of answer to address your most pressing question
          regarding the services.
        </p>
      </div>

      <div className="md:max-w-3xl mx-auto mt-8 space-y-1">
        {questionAndAnswer.map((faq, index) => (
          <div
            key={faq.question}
            className="border border-stone-100 bg-white/20 p-6 font-monserrat rounded-lg shadow-2xs"
          >
            <div className="flex justify-between items-center space-y-2">
              <h3 className="font-medium">{faq.question}</h3>
              <span
                onClick={() =>
                  setShowAns((prev) => (prev === index ? null : index))
                }
                className="cursor-pointer text-muted"
              >
                {showAns === index ? <Minus /> : <Plus />}
              </span>
            </div>
            {showAns === index && (
              <div className="pt-2 text-sm md:pt-0">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;
