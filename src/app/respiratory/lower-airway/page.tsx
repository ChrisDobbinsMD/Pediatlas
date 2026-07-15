import Link from "next/link";

const diseases = [
  {
    name: "Bronchiolitis",
    description:
      "Acute viral inflammation of the bronchioles causing edema, mucus production, and small-airway obstruction.",
    age: "Usually younger than 2 years",
    status: "Build next",
  },
  {
    name: "Asthma",
    description:
      "Chronic inflammatory airway disease characterized by variable airflow obstruction and bronchial hyperresponsiveness.",
    age: "Most often recognized in childhood",
    status: "Coming soon",
  },
  {
    name: "Pneumonia",
    description:
      "Infection of the lung parenchyma caused by viral, bacterial, or atypical pathogens.",
    age: "All pediatric age groups",
    status: "Coming soon",
  },
  {
    name: "Pertussis",
    description:
      "Toxin-mediated respiratory infection associated with paroxysmal cough, apnea, and post-tussive emesis.",
    age: "Highest risk in young infants",
    status: "Coming soon",
  },
  {
    name: "Aspiration",
    description:
      "Entry of feeds, secretions, or foreign material into the lower respiratory tract.",
    age: "Infants and children with feeding or neurologic risk factors",
    status: "Coming soon",
  },
  {
    name: "Foreign Body Aspiration",
    description:
      "Acute or occult airway obstruction caused by an inhaled object.",
    age: "Most common in toddlers",
    status: "Coming soon",
  },
];

export default function LowerAirwayPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 to-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link
              href="/"
              className="text-blue-800 hover:text-blue-600"
            >
              PediAtlas
            </Link>

            <span className="text-slate-400">/</span>

            <Link
              href="/respiratory"
              className="text-blue-800 hover:text-blue-600"
            >
              Respiratory
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-slate-600">Lower Airway</span>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Respiratory Anatomy
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Lower Airway
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Explore diseases affecting the bronchi, bronchioles, alveoli,
                and lower respiratory tract.
              </p>
            </div>

            <div className="text-7xl" aria-hidden="true">
              🫁
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Disease Library
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Lower-airway conditions
            </h2>

            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              Each condition will eventually include a vignette,
              pathophysiology, workup, management, clinical pearls, and quiz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...diseases]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((disease) => {
              const isNext = disease.status === "Build next";

              return (
                <article
                  key={disease.name}
                  className={`flex h-full flex-col rounded-3xl border bg-white p-7 shadow-sm transition ${
                    isNext
                      ? "border-sky-300 hover:-translate-y-1 hover:shadow-lg"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold">
                      {disease.name}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isNext
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {disease.status}
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                    {disease.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Typical population
                    </p>

                    <p className="mt-2 text-sm font-medium text-slate-700">
                      {disease.age}
                    </p>
                  </div>

                  {disease.name === "Bronchiolitis" && (
  <Link
    href="/respiratory/lower-airway/bronchiolitis"
    className="mt-auto pt-6 font-semibold text-blue-800 hover:text-blue-600"
  >
    Open bronchiolitis →
  </Link>
)}

{disease.name === "Asthma" && (
  <Link
    href="/respiratory/lower-airway/asthma"
    className="mt-auto pt-6 font-semibold text-blue-800 hover:text-blue-600"
  >
    Open asthma →
  </Link>
)}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PediAtlas · Respiratory · Lower Airway
      </footer>
    </main>
  );
}