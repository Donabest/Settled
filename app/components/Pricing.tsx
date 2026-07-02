import {
  ArrowRight,
  BadgeCheck,
  Check,
  Crown,
  Gift,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    icon: Gift,
    name: "Free forever",
    price: "\u20A60",
    period: "/month",
    description:
      "For freelancers who send a few invoices and want a cleaner way to get paid.",
    features: [
      "5 invoices per month",
      "WhatsApp sharing",
      "Paystack payment",
      "Reminder",
    ],
    button: "Start free",
    featured: false,
  },
  {
    icon: Crown,
    name: "Pro",
    price: "\u20A62,000",
    period: "/month",
    description:
      "For growing freelancers and small teams who need every invoice handled smoothly.",
    features: [
      "Unlimited invoices",
      "Auto reminders",
      "Client portal",
      "PDF download",
      "Priority support",
    ],
    button: "Upgrade to Pro",
    featured: true,
  },
];

function Pricing() {
  return (
    <section id="Pricing" className="pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-surface/20 px-8 py-1.5 font-sans text-sm text-surface">
          <Sparkles size={14} /> Pricing
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="font-nunito text-5xl font-medium leading-tight tracking-tight text-surface md:text-6xl">
            Start free, upgrade when invoices become serious.
          </h2>
          <p className="mx-auto max-w-xl font-sans text-sm leading-6 text-muted">
            Keep the simple parts free, then unlock automation and client tools
            when chasing payments starts costing you time.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2 lg:items-stretch">
        {plans.map(
          ({
            icon: Icon,
            name,
            price,
            period,
            description,
            features,
            button,
            featured,
          }) => (
            <article
              key={name}
              className={`relative rounded-2xl border p-5 shadow-2xl shadow-black/10 ${
                featured
                  ? "border-surface bg-surface text-white"
                  : "border-surface/10 bg-white text-surface"
              }`}
            >
              {featured && (
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-primary px-3 py-1 font-sans text-xs font-medium text-surface">
                  <BadgeCheck size={13} /> Best value
                </div>
              )}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  featured
                    ? "bg-white/10 text-primary"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon size={20} />
              </div>

              <div className="mt-8">
                <h3 className="font-nunito text-3xl font-semibold">{name}</h3>
                <p
                  className={`mt-3 max-w-sm font-sans text-sm leading-6 ${
                    featured ? "text-white/65" : "text-muted"
                  }`}
                >
                  {description}
                </p>
              </div>

              <div className="mt-8 flex items-end gap-1">
                <span className="font-nunito text-5xl font-semibold tracking-tight">
                  {price}
                </span>
                <span
                  className={`pb-2 font-sans text-sm ${
                    featured ? "text-white/55" : "text-muted"
                  }`}
                >
                  {period}
                </span>
              </div>

              <button
                type="button"
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-sans text-sm font-medium transition-colors ${
                  featured
                    ? "bg-primary text-surface hover:bg-primary/90"
                    : "border border-surface/10 text-surface hover:bg-surface/5"
                }`}
              >
                {button}
                <ArrowRight size={15} />
              </button>

              <div
                className={`my-8 h-px ${
                  featured ? "bg-white/10" : "bg-gray-100"
                }`}
              />

              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        featured
                          ? "bg-primary/15 text-primary"
                          : "bg-surface/5 text-surface"
                      }`}
                    >
                      <Check size={14} />
                    </span>
                    <span
                      className={`font-sans text-sm ${
                        featured ? "text-white/80" : "text-muted"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ),
        )}
      </div>
    </section>
  );
}

export default Pricing;
