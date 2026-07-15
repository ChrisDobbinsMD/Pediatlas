const systems = [
  {
    name: "Respiratory",
    description: "Airway, lungs, pleura, and neonatal respiratory disease",
    icon: "🫁",
    status: "Available",
  },
  {
    name: "Cardiology",
    description: "Congenital heart disease, rhythm disorders, and circulation",
    icon: "❤️",
    status: "Coming soon",
  },
  {
    name: "Neurology",
    description: "Brain, spinal cord, seizures, development, and neuromuscular disease",
    icon: "🧠",
    status: "Coming soon",
  },
  {
    name: "Gastroenterology",
    description: "Esophagus, stomach, intestines, liver, and nutrition",
    icon: "🩺",
    status: "Coming soon",
  },
  {
    name: "Hematology & Oncology",
    description: "Blood disorders, malignancy, and immune dysfunction",
    icon: "🩸",
    status: "Coming soon",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-b from-sky-100 to-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Pediatric Clinical Learning
          </p>

          <h1 className="text-6xl font-bold tracking-tight text-blue-950 md:text-7xl">
            PediAtlas
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            Explore pediatric disease through anatomy, clinical reasoning,
            interactive cases, and standardized learning modules.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-blue-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800">
              Explore the Body
            </button>

            <button className="rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-100">
              Browse Diseases
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Start Learning
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Featured organ systems
            </h2>

            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              Begin with the respiratory system while additional modules are
              developed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system) => {
              const isAvailable = system.status === "Available";

              return (
                <article
                  key={system.name}
                  className={`rounded-3xl border bg-white p-7 shadow-sm transition ${
                    isAvailable
                      ? "border-sky-200 hover:-translate-y-1 hover:shadow-lg"
                      : "border-slate-200 opacity-70"
                  }`}
                >
                  <div className="text-5xl">{system.icon}</div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">{system.name}</h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isAvailable
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {system.status}
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">
                    {system.description}
                  </p>

                  {isAvailable && (
                    <button className="mt-6 font-semibold text-blue-800 hover:text-blue-600">
                      Enter respiratory module →
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PediAtlas · Version 0.0.2
      </footer>
    </main>
  );
}