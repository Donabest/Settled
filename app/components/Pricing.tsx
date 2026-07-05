import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Check,
  CreditCard,
  Gift,
  LayoutDashboard,
  NotepadText,
  Smartphone,
  Users,
} from "lucide-react";

const planFeature = [
  {
    icon: <NotepadText />,
    title: "Invoicing",
    description: "Create professional invoices in second",
  },
  {
    icon: <Smartphone />,
    title: "WhatsApp Sharing",
    description: " Share invoice link directly to chat",
  },
  {
    icon: <Users />,
    title: "Client Management",
    description: "Track all clients and what they owe",
  },
  {
    icon: <CreditCard />,
    title: "Payments",
    description: "Collect via Paystack instantly",
  },
  {
    icon: <BellRing />,
    title: "Auto Reminders",
    description: "Automatic follow-ups so you don't chase",
  },
  {
    icon: <LayoutDashboard />,
    title: " Dashboard",
    description: "See earnings, paid and overdue at a glance",
  },
];
const plans = [
  {
    icon: Gift,
    name: "Free forever",
    price: "\u20A60",
    period: "/month",
    description:
      "For freelancers who send a few invoices and want a cleaner way to get paid.",
    features: [
      "10 invoices per month",
      "WhatsApp sharing",
      "Paystack payment collection",
      "Auto reminders",
      "PDF download",
      " Payment tracking",
    ],
    button: "Start free",
    featured: false,
  },
  // {
  //   icon: Crown,
  //   name: "Pro",
  //   price: "\u20A62,000",
  //   period: "/month",
  //   description:
  //     "For growing freelancers and small teams who need every invoice handled smoothly.",
  //   features: [
  //     "Unlimited invoices",
  //     "Auto reminders",
  //     "Client portal",
  //     "PDF download",
  //     "Priority support",
  //   ],
  //   button: "Upgrade to Pro",
  //   featured: true,
  // },
];

function Pricing() {
  return (
    <section id="Pricing" className=" pb-32 pt-20 border-t border-[#edf1f5]">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-surface/20 px-8 py-1.5 font-sans text-sm text-surface">
          <LayoutDashboard size={14} /> Pricing
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="font-nunito text-5xl font-medium leading-14 tracking-tight text-surface md:text-6xl">
            Start free, upgrade when invoices become serious.
          </h2>
          <p className="mx-auto max-w-xl font-sans text-sm leading-6 text-muted">
            Keep the simple parts free, then unlock automation and client tools
            when chasing payments starts costing you time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-center mt-14 space-y-6 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-4 font-sans md:grid-cols-2">
          {planFeature.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col bg-white px-8 py-4 space-y-2 rounded-lg shadow-lg"
            >
              <div className="mb-8">{feature.icon}</div>
              <div className="font-bold font-nunito">{feature.title}</div>
              <div className="text-xs text-muted">{feature.description}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto grid max-w-fit ">
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
                    : "border-gray-300/50 bg-zinc-100 text-surface"
                }`}
              >
                {featured && (
                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-primary px-3 py-1 font-sans text-xs font-medium text-surface">
                    <BadgeCheck size={13} /> Best value
                  </div>
                )}
                <div className="bg-white p-6 shadow-lg rounded-2xl space-y-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      featured
                        ? "bg-white/10 text-primary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon size={15} />
                  </div>

                  <div>
                    <h3 className="font-nunito text-3xl font-semibold">
                      {name}
                    </h3>
                    <p
                      className={` max-w-sm font-sans text-sm leading-6 ${
                        featured ? "text-white/65" : "text-muted"
                      }`}
                    >
                      {description}
                    </p>
                  </div>

                  <div className=" flex items-end gap-1">
                    <span className="font-nunito text-4xl font-semibold tracking-tight">
                      {price}
                    </span>
                    <span
                      className={`pb-2 font-sans text-xs ${
                        featured ? "text-white/55" : "text-muted"
                      }`}
                    >
                      {period}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={` flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-sans text-sm font-medium transition-colors ${
                      featured
                        ? "bg-primary text-surface hover:bg-primary/90"
                        : "border border-surface/10 text-surface hover:bg-surface/5"
                    }`}
                  >
                    {button}
                    <ArrowRight size={15} />
                  </button>
                </div>

                <div
                  className={`my-4 h-px ${
                    featured ? "bg-white/10" : "bg-gray-100"
                  }`}
                />

                <ul className="space-y-4">
                  <li className="text-gray-400 font-nunito ">
                    Settled offers for free :
                  </li>
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          featured
                            ? "bg-primary/15 text-primary"
                            : "bg-surface text-white"
                        }`}
                      >
                        <Check size={10} />
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
      </div>
    </section>
  );
}

export default Pricing;
