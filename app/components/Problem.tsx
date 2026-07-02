import {
  BellRing,
  Clock3,
  MessageCircleWarning,
  ShieldAlert,
  WalletCards,
} from "lucide-react";

const problems = [
  {
    icon: MessageCircleWarning,
    title: "Awkward follow-ups",
    copy: "You finish the work, then lose energy writing reminder messages that still feel too pushy.",
  },
  {
    icon: Clock3,
    title: "Late payment guesswork",
    copy: "Invoices disappear into chats and emails, so you never know what was seen, due, or ignored.",
  },
  {
    icon: WalletCards,
    title: "Messy payment records",
    copy: "Bank alerts, screenshots, and client promises sit in different places when you need one clear trail.",
  },
];

function Problem() {
  return (
    <section className="mt-28 pb-24">
      <div className="flex items-center gap-2 w-fit mx-auto px-8 py-1.5 border border-surface/20 rounded-full text-sm font-sans text-surface  ">
        <ShieldAlert size={14} /> Problems
      </div>

      <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="font-nunito text-5xl font-medium leading-tight tracking-tight text-surface md:text-6xl">
              Getting paid should not feel like a second job.
            </h2>
            <p className="max-w-xl font-sans text-sm leading-6 text-muted">
              Freelancers and small teams do the hard part first: deliver the
              work. The stress usually starts after, when invoices, reminders,
              and payment confirmations become scattered manual chores.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 ">
            {problems.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="rounded-xl border border-surface/10 bg-white p-4 shadow-2xl shadow-black/5 lg:rotate-3 lg:mt-4"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-surface/5 text-surface">
                  <Icon size={17} />
                </div>
                <h3 className="font-nunito text-base font-semibold text-surface">
                  {title}
                </h3>
                <p className="mt-2 font-sans text-xs leading-5 text-muted">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-6 top-10 hidden rounded-xl border border-gray-100 bg-white p-3 shadow-2xl shadow-black/10 sm:block">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                <BellRing size={15} />
              </div>
              <div>
                <p className="font-sans text-xs font-medium text-gray-800">
                  Third reminder
                </p>
                <p className="font-sans text-xs text-gray-400">
                  Still no reply
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-surface/10 bg-white p-5 shadow-2xl shadow-black/10">
            <div className="flex items-start justify-between border-b border-gray-100 pb-5">
              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-gray-400">
                  Invoice
                </p>
                <h3 className="mt-1 font-nunito text-2xl font-semibold text-surface">
                  INV-0428
                </h3>
              </div>
              <span className="rounded-full bg-red-50 px-3 py-1 font-sans text-xs font-medium text-red-600">
                Overdue
              </span>
            </div>

            <div className="space-y-4 py-5">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-muted">
                  Brand identity package
                </span>
                <span className="font-sans text-sm font-semibold text-surface">
                  NGN 280,000
                </span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 w-2/3 rounded-full bg-accent" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-surface/5 p-3">
                  <p className="font-sans text-xs text-gray-400">Due date</p>
                  <p className="mt-1 font-sans text-sm font-semibold text-surface">
                    8 days ago
                  </p>
                </div>
                <div className="rounded-xl bg-surface/5 p-3">
                  <p className="font-sans text-xs text-gray-400">Status</p>
                  <p className="mt-1 font-sans text-sm font-semibold text-surface">
                    Unconfirmed
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-dashed border-surface/20 p-4">
              <p className="font-sans text-xs text-gray-400">
                Last client message
              </p>
              <p className="mt-2 font-sans text-sm leading-6 text-surface">
                &quot;I will send it soon, please remind me tomorrow.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
