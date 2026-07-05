import {
  BadgeCheck,
  Bell,
  CheckCircle2,
  CreditCard,
  FileText,
  Puzzle,
  Send,
} from "lucide-react";

const solutions = [
  {
    icon: FileText,
    title: "Create once",
    copy: "Turn completed work into a clean invoice with client details, due dates, and payment terms already organized.",
  },
  {
    icon: Send,
    title: "Share anywhere",
    copy: "Send the invoice link through WhatsApp, email, or chat without losing the payment trail.",
  },
  {
    icon: Bell,
    title: "Follow up softly",
    copy: "Settled keeps reminders clear and professional, so getting paid does not become another awkward task.",
  },
];

function Solution() {
  return (
    <section className="py-20 border-t border-[#edf1f5]">
      <div className="flex w-fit justify-center items-center  gap-2  rounded-full border border-primary/25 bg-primary/5 px-8 py-1.5 font-sans text-sm text-surface">
        <Puzzle size={14} /> Solution
      </div>

      <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative order-2 mx-auto w-full max-w-md lg:order-1">
          <div className="absolute -right-5 top-8 hidden rounded-xl border border-primary/10 bg-white p-3 shadow-2xl shadow-black/10 sm:block">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BadgeCheck size={15} />
              </div>
              <div>
                <p className="font-sans text-xs font-medium text-gray-800">
                  Payment confirmed
                </p>
                <p className="font-sans text-xs text-gray-400">
                  Trail saved automatically
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-surface/10 bg-white p-5 shadow-2xl shadow-black/10">
            <div className="flex items-start justify-between border-b border-gray-100 pb-5">
              <div>
                <p className="font-sans text-xs uppercase tracking-wide text-gray-400">
                  Settled invoice
                </p>
                <h3 className="mt-1 font-nunito text-2xl font-semibold text-surface">
                  INV-0428
                </h3>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-sans text-xs font-medium text-primary">
                Paid
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
                <div className="h-2 w-full rounded-full bg-primary" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-surface/5 p-3">
                  <p className="font-sans text-xs text-gray-400">Sent by</p>
                  <p className="mt-1 font-sans text-sm font-semibold text-surface">
                    Invoice link
                  </p>
                </div>
                <div className="rounded-xl bg-surface/5 p-3">
                  <p className="font-sans text-xs text-gray-400">Status</p>
                  <p className="mt-1 font-sans text-sm font-semibold text-surface">
                    Confirmed
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
              <div className="flex items-center gap-2">
                <CreditCard size={15} className="text-primary" />
                <p className="font-sans text-xs font-medium text-surface">
                  Payment record
                </p>
              </div>
              <p className="mt-2 font-sans text-sm leading-6 text-muted">
                Receipt, invoice, reminder history, and confirmation now live in
                one simple timeline.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <div className="space-y-4">
            <h2 className="font-nunito text-5xl font-medium leading-tight tracking-tight text-surface md:text-6xl">
              Settled keeps the money conversation simple.
            </h2>
            <p className="max-w-xl font-sans text-sm leading-6 text-muted">
              Create polished invoices, send them where your clients already
              talk, and track what happens next from one calm workspace built
              for freelancers and small teams.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {solutions.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="rounded-xl border border-surface/10 bg-white p-4 shadow-2xl shadow-black/5 lg:-rotate-2 lg:mt-4"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
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

          <div className="flex items-center gap-3 rounded-xl border border-surface/10 bg-white p-4 shadow-2xl shadow-black/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-surface">
              <CheckCircle2 size={18} />
            </div>
            <p className="font-sans text-sm leading-6 text-muted">
              No scattered screenshots. No confusing client promises. Just one
              invoice flow from sent to settled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
