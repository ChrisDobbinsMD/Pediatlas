import Link from "next/link";

const sections = [
  {
    title: "Upper Airway",
    description:
      "Nose, pharynx, larynx, and proximal trachea disorders.",
    icon: "👃",
    href: "/respiratory/upper-airway",
    topics: [
      "Viral URI",
      "Sinusitis",
      "Croup",
      "Epiglottitis",
      "Bacterial tracheitis",
      "Retropharyngeal abscess",
      "Peritonsillar abscess",
      "Foreign body",
    ],
  },
  {
    title: "Lower Airway",
    description:
      "Bronchi, bronchioles, alveoli, infection, inflammation, and obstruction.",
    icon: "🫁",
    href: "/respiratory/lower-airway",
    topics: [
      "Bronchiolitis",
      "Asthma",
      "Pneumonia",
      "Pertussis",
      "Aspiration",
      "Foreign body",
    ],
  },
  {
    title: "Pleura",
    description:
      "Disease involving the pleural space and its surrounding structures.",
    icon: "🩻",
    topics: [
      "Pleural effusion",
      "Empyema",
      "Pneumothorax",
      "Hemothorax",
      "Chylothorax",
    ],
  },
  {
    title: "Pulmonary Vasculature",
    description:
      "Disorders of pulmonary blood flow, pressure, and vascular development.",
    icon: "🫀",
    topics: [
      "Pulmonary hypertension",
      "Pulmonary embolism",
      "Pulmonary AV malformations",
    ],
  },
  {
    title: "Neonatal Respiratory",
    description:
      "Respiratory disease unique to newborns and premature infants.",
    icon: "👶",
    topics: [
      "Respiratory distress syndrome",
      "Transient tachypnea of the newborn",
      "Meconium aspiration syndrome",
      "Persistent pulmonary hypertension",
      "Bronchopulmonary dysplasia",
      "Congenital diaphragmatic hernia",
    ],
  },
];

export default function RespiratoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-50 to-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-sm font-medium text-sky-700 transition hover:text-sky-900"
          >
            ← Back to PediAtlas
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Organ System
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Respiratory System
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Explore pediatric respiratory disease by anatomy, clinical
                presentation, pathophysiology, diagnostic reasoning, and
                management.
              </p>
            </div>

            <div className="text-7xl" aria-hidden="true">
              🫁
            </div>
          </div>
        </div>
      </header>

      {/* Respiratory regions */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Browse by anatomy
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Choose a respiratory region
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-5xl">{section.icon}</div>

                    <h3 className="mt-5 text-2xl font-bold">
                      {section.title}
                    </h3>
                  </div>

                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                    {section.topics.length} topics
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {section.description}
                </p>

                <ul className="mt-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {section.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-xl bg-slate-50 px-3 py-2"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  {section.href ? (
                    <Link
                      href={section.href}
                      className="inline-flex items-center gap-1 font-semibold text-blue-700 transition hover:text-blue-900"
                    >
                      Explore {section.title.toLowerCase()} →
                    </Link>
                  ) : (
                    <span className="font-semibold text-slate-400">
                      Module coming soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PediAtlas · Respiratory Module
      </footer>
    </main>
  );
}