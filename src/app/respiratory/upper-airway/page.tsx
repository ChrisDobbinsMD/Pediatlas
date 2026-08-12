import Link from "next/link";

const diseases = [
  {
    name: "Viral URI",
    description:
      "Acute viral infection of the upper respiratory tract causing rhinorrhea, congestion, cough, and pharyngeal irritation.",
    age: "All pediatric age groups, especially young children",
    status: "Coming soon",
  },
  {
    name: "Sinusitis",
    description:
      "Inflammation and infection of the paranasal sinuses, often occurring after a preceding viral upper respiratory infection.",
    age: "More common after development of the paranasal sinuses",
    status: "Coming soon",
  },
  {
    name: "Croup",
    description:
      "Viral laryngotracheitis causing subglottic airway edema, barking cough, hoarseness, and inspiratory stridor.",
    age: "Most common from 6 months to 3 years",
    status: "Available!",
  },
  {
    name: "Epiglottitis",
    description:
      "Rapidly progressive inflammation of the epiglottis and supraglottic airway that can cause life-threatening airway obstruction.",
    age: "Now uncommon in vaccinated children; can occur across age groups",
    status: "Available!",
  },
  {
    name: "Bacterial Tracheitis",
    description:
      "Bacterial infection of the trachea causing mucosal inflammation, thick secretions, and potentially severe upper-airway obstruction.",
    age: "Most common in young children",
    status: "Coming soon",
  },
  {
    name: "Retropharyngeal Abscess",
    description:
      "Deep neck-space infection involving the retropharyngeal tissues, potentially causing dysphagia, neck stiffness, and airway compromise.",
    age: "Most common in children younger than 5 years",
    status: "Coming soon",
  },
  {
    name: "Peritonsillar Abscess",
    description:
      "Collection of purulent material adjacent to the tonsil causing severe unilateral throat pain, muffled voice, and uvular deviation.",
    age: "More common in adolescents and older children",
    status: "Coming soon",
  },
  {
    name: "Upper Airway Foreign Body",
    description:
      "Foreign material lodged within the nose, pharynx, larynx, or proximal trachea causing focal symptoms or acute airway obstruction.",
    age: "Most common in toddlers and young children",
    status: "Coming soon",
  },
];

export default function UpperAirwayPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 via-sky-50/70 to-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
            <Link href="/" className="text-blue-800 hover:text-blue-600">
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

            <span className="text-slate-600">Upper Airway</span>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Respiratory Anatomy
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Upper Airway
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Explore diseases affecting the nose, pharynx, larynx, and
                proximal trachea.
              </p>
            </div>

            <div className="text-7xl" aria-hidden="true">
              👃
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

            <h2 className="mt-2 text-3xl font-bold">Upper-airway conditions</h2>

            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              Each condition will eventually include a vignette,
              pathophysiology, workup, management, clinical pearls, and quiz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...diseases]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((disease) => {
                const isAvailable = disease.status === "Available!";
                const isInProgress = disease.status === "In Progress";

                return (
                  <article
                    key={disease.name}
                    className={`flex h-full flex-col rounded-3xl border bg-white p-7 shadow-sm transition ${
                      isAvailable || isInProgress
                        ? "border-sky-300 hover:-translate-y-1 hover:shadow-lg"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold">{disease.name}</h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          isAvailable
                            ? "bg-emerald-100 text-emerald-700"
                            : isInProgress
                              ? "bg-amber-100 text-amber-700"
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

                    <div className="mt-auto pt-6">
                      {disease.name === "Croup" ? (
                        <Link
                          href="/respiratory/upper-airway/croup"
                          className="font-semibold text-blue-700 hover:text-blue-900"
                        >
                          Open croup →
                        </Link>
                      ) : disease.name === "Epiglottitis" ? (
                        <Link
                          href="/respiratory/upper-airway/epiglottitis"
                          className="font-semibold text-blue-700 hover:text-blue-900"
                        >
                          Open epiglottitis →
                        </Link>
                      ) : (
                        <span className="font-semibold text-slate-400">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PediAtlas · Respiratory · Upper Airway
      </footer>
    </main>
  );
}
