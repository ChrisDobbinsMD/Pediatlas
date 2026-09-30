import Link from "next/link";

const modules = [
  {
    number: "01",
    name: "Anatomy & Localization",
    description:
      "Build a mental map of the pediatric respiratory system from the upper airway to the alveoli, pleura, diaphragm, and pulmonary vasculature.",
    topics: "Airways · Lung lobes · Pleura · Diaphragm · Pulmonary vasculature",
    href: "/respiratory/foundations/anatomy",
    status: "Coming soon",
  },
  {
    number: "02",
    name: "Respiratory Physiology",
    description:
      "Understand how air moves, how gas exchange occurs, and how airway resistance, compliance, ventilation, and perfusion shape respiratory physiology.",
    topics: "Ventilation · Compliance · Resistance · V/Q · Shunt · Dead space",
    href: "/respiratory/foundations/physiology",
    status: "Coming soon",
  },
  {
    number: "03",
    name: "Respiratory Assessment",
    description:
      "Learn to recognize respiratory distress, localize abnormal breath sounds, and identify the clinical transition from increased work of breathing to respiratory failure.",
    topics:
      "Work of breathing · Breath sounds · Distress · Respiratory failure",
    href: "/respiratory/foundations/assessment",
    status: "Coming soon",
  },
  {
    number: "04",
    name: "Oxygen & Respiratory Support",
    description:
      "Compare pediatric oxygen-delivery devices and respiratory-support modalities while learning what each device actually provides and when escalation is needed.",
    topics:
      "Nasal cannula · Masks · HFNC · CPAP · BiPAP · Mechanical ventilation",
    href: "/respiratory/foundations/respiratory-support",
    status: "Coming soon",
  },
  {
    number: "05",
    name: "Blood Gases",
    description:
      "Interpret respiratory acid-base physiology and understand what arterial, venous, and capillary blood gases can—and cannot—tell you.",
    topics: "ABG · VBG · Capillary gas · pH · CO₂ · HCO₃⁻",
    href: "/respiratory/foundations/blood-gases",
    status: "Coming soon",
  },
  {
    number: "06",
    name: "Imaging & Lung POCUS",
    description:
      "Develop a systematic approach to respiratory imaging and recognize foundational lung ultrasound findings before applying them to individual diseases.",
    topics:
      "Chest X-ray · CT · Lung sliding · A-lines · B-lines · Consolidation",
    href: "/respiratory/foundations/imaging",
    status: "Coming soon",
  },
];

export default function RespiratoryFoundationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* =================================================
          HERO
      ================================================== */}

      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 via-sky-50/70 to-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
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

            <span className="text-slate-600">Foundations</span>
          </div>

          {/* Hero content */}
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Respiratory Foundations
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Understand the system before the disease
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Build the anatomy, physiology, examination, respiratory support,
                blood-gas, and imaging framework needed to understand pediatric
                respiratory disease.
              </p>
            </div>

            <div className="text-7xl" aria-hidden="true">
              🫁
            </div>
          </div>
        </div>
      </header>

      {/* =================================================
          FOUNDATION MODULES
      ================================================== */}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Learning Path
            </p>

            <h2 className="mt-2 text-3xl font-bold">Respiratory foundations</h2>

            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
              Work through the modules in sequence or jump directly to the
              concept you need. The learning path progresses from structure to
              function, bedside assessment, respiratory support, and diagnostic
              interpretation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.name}
                className="flex h-full flex-col rounded-3xl border border-sky-300 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
                      Module {module.number}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-blue-950">
                      {module.name}
                    </h3>
                  </div>

                  <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {module.status}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {module.description}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Core concepts
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                    {module.topics}
                  </p>
                </div>

                <Link
                  href={module.href}
                  className="mt-auto pt-6 font-semibold text-blue-800 hover:text-blue-600"
                >
                  Open {module.name.toLowerCase()} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          WHY FOUNDATIONS?
      ================================================== */}

      <section className="border-t border-slate-200 bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Why start here?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950">
              Respiratory findings make more sense when you can localize the
              problem.
            </h2>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Stridor, wheezing, hypoxemia, hypercapnia, air trapping, and
              abnormal imaging are not isolated facts. Each reflects a change in
              respiratory anatomy or physiology. These modules provide the
              framework for connecting those findings to the disease modules
              throughout PediAtlas.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PediAtlas · Respiratory · Foundations
      </footer>
    </main>
  );
}
