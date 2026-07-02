import {
  ArrowUpRight,
  BadgeCheck,
  Download,
  Eye,
  FileText,
  Landmark,
  Mail,
  ReceiptText,
} from "lucide-react";

const invoiceItems = [
  {
    item: "Brand strategy",
    qty: "1",
    price: "NGN 120,000",
  },
  {
    item: "Logo system",
    qty: "1",
    price: "NGN 95,000",
  },
  {
    item: "Social media kit",
    qty: "1",
    price: "NGN 65,000",
  },
];

function InvoicePreview() {
  return (
    <section id="Features" className="pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-8 py-1.5 font-nunito text-sm text-surface">
          <ReceiptText size={14} /> Invoice preview
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="font-nunito text-5xl font-medium leading-tight tracking-tight text-surface md:text-6xl">
            A polished invoice your clients can trust at first glance.
          </h2>
          <p className="mx-auto max-w-xl font-nunito text-sm leading-6 text-muted">
            Settled keeps the invoice clean, readable, and ready to share, with
            payment details and status updates built into the same experience.
          </p>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="absolute left-8 top-16 hidden rounded-xl border border-surface/10 bg-white p-4 shadow-2xl shadow-black/10 lg:block">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Eye size={17} />
            </div>
            <div>
              <p className="font-nunito text-xs font-medium text-surface">
                Client viewed
              </p>
              <p className="font-nunito text-xs text-gray-400">
                2 minutes after sending
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 right-6 hidden rounded-xl border border-surface/10 bg-white p-4 shadow-2xl shadow-black/10 lg:block">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-surface">
              <Landmark size={17} />
            </div>
            <div>
              <p className="font-nunito text-xs font-medium text-surface">
                Bank transfer
              </p>
              <p className="font-nunito text-xs text-gray-400">
                Details included
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-surface/10 bg-white p-3 shadow-2xl shadow-black/10 md:p-5">
          <div className="rounded-xl bg-surface p-3 md:p-5">
            <div className="rounded-xl bg-white p-5 md:p-8">
              <div className="flex flex-col gap-6 border-b border-gray-100 pb-8 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-white">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="font-syne text-xl font-semibold italic text-surface">
                        Settled
                      </p>
                      <p className="font-nunito text-xs text-gray-400">
                        Professional invoice
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-10 font-nunito text-4xl font-semibold leading-tight text-surface">
                    Invoice INV-0428
                  </h3>
                  <p className="mt-2 font-nunito text-sm text-muted">
                    Issued to Nova Studio for brand identity work.
                  </p>
                </div>

                <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 md:min-w-56">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-nunito text-xs uppercase tracking-wide text-gray-400">
                      Amount due
                    </span>
                    <BadgeCheck size={16} className="text-primary" />
                  </div>
                  <p className="mt-3 font-nunito text-3xl font-semibold text-surface">
                    NGN 280,000
                  </p>
                  <p className="mt-1 font-nunito text-xs text-muted">
                    Due July 12, 2026
                  </p>
                </div>
              </div>

              <div className="grid gap-4 py-8 md:grid-cols-3">
                <div className="rounded-xl bg-surface/5 p-4">
                  <p className="font-nunito text-xs text-gray-400">From</p>
                  <p className="mt-2 font-nunito text-sm font-semibold text-surface">
                    Ada Creative Co.
                  </p>
                  <p className="mt-1 font-nunito text-xs leading-5 text-muted">
                    Lagos, Nigeria
                  </p>
                </div>
                <div className="rounded-xl bg-surface/5 p-4">
                  <p className="font-nunito text-xs text-gray-400">Bill to</p>
                  <p className="mt-2 font-nunito text-sm font-semibold text-surface">
                    Nova Studio
                  </p>
                  <p className="mt-1 font-nunito text-xs leading-5 text-muted">
                    hello@novastudio.co
                  </p>
                </div>
                <div className="rounded-xl bg-surface/5 p-4">
                  <p className="font-nunito text-xs text-gray-400">Payment</p>
                  <p className="mt-2 font-nunito text-sm font-semibold text-surface">
                    Transfer or card
                  </p>
                  <p className="mt-1 font-nunito text-xs leading-5 text-muted">
                    Confirmation tracked
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-100">
                <div className="grid grid-cols-[1fr_64px_112px] bg-surface px-4 py-3 font-nunito text-xs font-medium text-white">
                  <span>Item</span>
                  <span className="text-center">Qty</span>
                  <span className="text-right">Price</span>
                </div>

                {invoiceItems.map(({ item, qty, price }) => (
                  <div
                    key={item}
                    className="grid grid-cols-[1fr_64px_112px] border-b border-gray-100 px-4 py-4 last:border-b-0"
                  >
                    <span className="font-nunito text-sm text-surface">
                      {item}
                    </span>
                    <span className="text-center font-nunito text-sm text-muted">
                      {qty}
                    </span>
                    <span className="text-right font-nunito text-sm font-semibold text-surface">
                      {price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
                <div className="rounded-xl border border-dashed border-surface/20 p-4">
                  <p className="font-nunito text-xs text-gray-400">Note</p>
                  <p className="mt-2 font-nunito text-sm leading-6 text-muted">
                    Thanks for trusting Ada Creative Co. Please use the invoice
                    reference when making payment.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between font-nunito text-sm text-muted">
                    <span>Subtotal</span>
                    <span>NGN 280,000</span>
                  </div>
                  <div className="flex items-center justify-between font-nunito text-sm text-muted">
                    <span>Tax</span>
                    <span>NGN 0</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3 font-nunito text-2xl font-semibold text-surface">
                    <span>Total</span>
                    <span>NGN 280,000</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 font-nunito text-xs text-muted">
                  <Mail size={14} />
                  Sent through WhatsApp and email
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-full border border-surface/10 px-4 py-2 font-nunito text-xs font-medium text-surface"
                  >
                    <Download size={14} /> PDF
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 font-nunito text-xs font-medium text-white"
                  >
                    Pay invoice <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvoicePreview;
