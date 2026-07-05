import {
  BellRing,
  CheckCircle2,
  FileText,
  Link2,
  ListChecks,
  ReceiptText,
  Send,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Create the invoice",
    copy: "Add the client, project details, amount, due date, and payment instructions in one focused flow.",
    previewTitle: "New invoice",
    previewMeta: "Brand identity package",
    previewAmount: "NGN 280,000",
  },
  {
    icon: Link2,
    step: "02",
    title: "Share a clean payment link",
    copy: "Send the invoice through WhatsApp, email, or chat, while Settled keeps the official record attached.",
    previewTitle: "Invoice link ready",
    previewMeta: "settled.app/inv/0428",
    previewAmount: "Copied",
  },
  {
    icon: BellRing,
    step: "03",
    title: "Let reminders stay professional",
    copy: "Settled helps you follow up with clear reminders, so the message feels calm instead of personal.",
    previewTitle: "Reminder scheduled",
    previewMeta: "Due tomorrow at 9:00 AM",
    previewAmount: "Soft follow-up",
  },
  {
    icon: ReceiptText,
    step: "04",
    title: "Confirm and keep the trail",
    copy: "Once payment lands, the invoice, receipt, reminders, and confirmation stay together for easy reference.",
    previewTitle: "Payment confirmed",
    previewMeta: "Receipt saved to invoice",
    previewAmount: "Settled",
  },
];

function HowItWorks() {
  return (
    <section id="HowItWorks" className="pb-32 pt-20 border-t border-[#edf1f5]">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-8 py-1.5 font-sans text-sm text-surface">
            <ListChecks size={14} /> How it works
          </div>

          <div className="my-8 space-y-4">
            <h2 className="font-nunito text-5xl font-medium  tracking-tight text-surface md:text-[4vw]">
              Four simple steps from done work to paid work.
            </h2>
            <p className="max-w-lg font-sans text-sm leading-6 text-muted">
              Each step stays visible long enough to understand the flow before
              the next one takes over, so visitors can feel how simple Settled
              makes the invoice process.
            </p>
          </div>
          <Link
            href={""}
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/80"
          >
            Get Started Now
          </Link>
        </div>

        <div className="space-y-8 lg:min-h-[220vh]">
          {steps.map(
            (
              {
                icon: Icon,
                step,
                title,
                copy,
                previewTitle,
                previewMeta,
                previewAmount,
              },
              index,
            ) => (
              <article
                key={title}
                className="rounded-2xl border border-surface/10 bg-white px-8 py-5 shadow-2xl shadow-black/10 lg:sticky"
                style={{
                  top: `${112 + index * 18}px`,
                  zIndex: index + 1,
                }}
              >
                <div className="grid gap-6 md:grid-cols-[0.92fr_1.08fr] md:items-center">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-white">
                        <Icon size={18} />
                      </div>
                      <span className="font-syne text-sm text-muted">
                        {step}
                      </span>
                    </div>

                    <h3 className="font-nunito text-3xl font-semibold leading-tight text-surface">
                      {title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-6 text-muted">
                      {copy}
                    </p>
                  </div>

                  <div className="rounded-xl border border-surface/10 bg-background p-4">
                    <div className="rounded-xl bg-white p-4 shadow-2xl shadow-black/5">
                      <div className="flex items-start justify-between border-b border-gray-100 pb-4">
                        <div>
                          <p className="font-sans text-xs uppercase tracking-wide text-gray-400">
                            Step {step}
                          </p>
                          <p className="mt-1 font-nunito text-xl font-semibold text-surface">
                            {previewTitle}
                          </p>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle2 size={16} />
                        </div>
                      </div>

                      <div className="space-y-4 pt-4">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-sans text-sm text-muted">
                            {previewMeta}
                          </span>
                          <span className="shrink-0 font-sans text-sm font-semibold text-surface">
                            {previewAmount}
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                          {steps.map((item) => (
                            <div
                              key={item.step}
                              className={`h-2 rounded-full ${
                                Number(item.step) <= Number(step)
                                  ? "bg-primary"
                                  : "bg-gray-100"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center justify-between rounded-xl bg-surface/5 p-3">
                          <div>
                            <p className="font-sans text-xs text-gray-400">
                              Current status
                            </p>
                            <p className="mt-1 font-sans text-sm font-semibold text-surface">
                              Ready for the next step
                            </p>
                          </div>
                          <Send size={17} className="text-surface" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
