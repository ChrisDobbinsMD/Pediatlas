import Link from "next/link";

const pathophysiology = [
  {
    title: "Airway inflammation",
    description:
      "Chronic inflammation makes the airways hyperresponsive to triggers.",
  },
  {
    title: "Bronchoconstriction",
    description:
      "Airway smooth muscle contracts, producing variable airflow obstruction.",
  },
  {
    title: "Mucus production",
    description:
      "Increased secretions further narrow the airway lumen.",
  },
  {
    title: "Air trapping",
    description:
      "Expiration becomes prolonged and incomplete, causing hyperinflation.",
  },
];

const differential = [
  {
    diagnosis: "Bronchiolitis",
    clue: "Usually a first episode in an infant with viral symptoms, crackles, and diffuse wheezing.",
  },
  {
    diagnosis: "Foreign body aspiration",
    clue: "Abrupt onset, choking history, asymmetric air entry, or focal wheeze.",
  },
  {
    diagnosis: "Pneumonia",
    clue: "Fever, focal crackles, focal decreased air entry, or toxic appearance.",
  },
  {
    diagnosis: "Anaphylaxis",
    clue: "Acute respiratory symptoms with urticaria, angioedema, hypotension, or gastrointestinal symptoms.",
  },
  {
    diagnosis: "Vocal cord dysfunction",
    clue: "Inspiratory symptoms, throat tightness, stridor, or poor response to asthma therapy.",
  },
];

export default function AsthmaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 to-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <nav className="flex flex-wrap gap-3 text-sm font-semibold">
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

            <Link
              href="/respiratory/lower-airway"
              className="text-blue-800 hover:text-blue-600"
            >
              Lower Airway
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-slate-600">Asthma</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Chronic Lower Airway Disease
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Asthma
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A heterogeneous chronic respiratory disease characterized by
                variable symptoms and variable expiratory airflow limitation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Variable airflow obstruction
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Airway inflammation
                </span>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                  Often reversible
                </span>
              </div>
            </div>

            <div className="text-8xl" aria-hidden="true">
              🫁
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            On this page
          </p>

          <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold text-blue-800">
            <a href="#vignette">Clinical vignette</a>
            <a href="#pathophysiology">Pathophysiology</a>
            <a href="#assessment">History and exam</a>
            <a href="#severity">Acute severity</a>
            <a href="#differential">Differential</a>
            <a href="#management">Management</a>
          </nav>
        </aside>

        <div className="space-y-8">
          <section
            id="vignette"
            className="rounded-3xl border border-blue-200 bg-blue-950 p-8 text-white shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Clinical vignette
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              A child with recurrent cough and wheezing
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-50">
              An 8-year-old presents with cough, chest tightness, and wheezing
              after several days of rhinorrhea. He has nighttime cough twice
              weekly and develops similar symptoms with exercise. Examination
              reveals tachypnea, subcostal retractions, diffuse expiratory
              wheezing, and prolonged expiration.
            </p>

            <div className="mt-7 rounded-2xl bg-white/10 p-5">
              <p className="font-semibold text-sky-200">
                Your first clinical task
              </p>

              <p className="mt-2 leading-7 text-blue-50">
                Assess the severity of the current exacerbation while also
                recognizing the pattern of chronic asthma symptoms.
              </p>
            </div>
          </section>

          <section
            id="pathophysiology"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Pathophysiology
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Inflammation plus reversible airway narrowing
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {pathophysiology.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="assessment"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              History and physical exam
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Confirm the pattern and identify risk
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">History</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Episodic wheeze, cough, dyspnea, or chest tightness</li>
                  <li>• Nighttime or early-morning symptoms</li>
                  <li>• Exercise, viral, allergen, smoke, or weather triggers</li>
                  <li>• Prior emergency visits, hospitalization, or intubation</li>
                  <li>• Controller adherence and inhaler technique</li>
                  <li>• Atopy, eczema, allergic rhinitis, and family history</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">Physical exam</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Respiratory rate and oxygen saturation</li>
                  <li>• Retractions and accessory muscle use</li>
                  <li>• Ability to speak, feed, or ambulate</li>
                  <li>• Wheezing and prolonged expiration</li>
                  <li>• Air entry, including a concerning silent chest</li>
                  <li>• Mental status and signs of fatigue</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="severity"
            className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Acute severity
            </p>

            <h2 className="mt-2 text-3xl font-bold text-amber-950">
              How sick is the child right now?
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {[
                [
                  "Mild",
                  "Speaks normally, mild wheeze or retractions, good air movement.",
                ],
                [
                  "Moderate",
                  "Increased work of breathing, more persistent wheeze, reduced activity or speech.",
                ],
                [
                  "Severe",
                  "Marked retractions, difficulty speaking, poor air entry, agitation, or hypoxemia.",
                ],
                [
                  "Impending respiratory failure",
                  "Fatigue, altered mental status, cyanosis, silent chest, or worsening despite treatment.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-amber-200 bg-white p-5"
                >
                  <h3 className="font-bold text-amber-950">{title}</h3>
                  <p className="mt-2 leading-7 text-amber-900">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-amber-900">
              Future feature: an interactive severity tool using work of
              breathing, speech, oxygenation, air entry, and mental status.
            </p>
          </section>

          <section
            id="differential"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Differential diagnosis
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Not every wheezing child has asthma
            </h2>

            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
              {differential.map((item) => (
                <div
                  key={item.diagnosis}
                  className="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[220px_1fr]"
                >
                  <p className="font-bold">{item.diagnosis}</p>
                  <p className="leading-7 text-slate-600">{item.clue}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="management"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Management overview
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Treat bronchoconstriction and inflammation
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {[
                [
                  "Short-acting bronchodilator",
                  "Administer inhaled albuterol for acute bronchoconstriction.",
                ],
                [
                  "Systemic corticosteroid",
                  "Use early for moderate or severe exacerbations or incomplete response to initial bronchodilator therapy.",
                ],
                [
                  "Oxygen",
                  "Provide supplemental oxygen when hypoxemia is present.",
                ],
                [
                  "Escalation",
                  "Consider repeated or continuous bronchodilator therapy, ipratropium, magnesium, and higher-level respiratory support according to severity and local pathway.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-blue-950">
                Chronic-care principle
              </h3>

              <p className="mt-3 leading-7 text-blue-900">
                Asthma management should include an inhaled corticosteroid-containing
                strategy, assessment of symptom control and future risk, inhaler
                technique, adherence, trigger reduction, and a written asthma
                action plan.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Evidence base
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Clinical references
            </h2>

            <div className="mt-6 space-y-4 leading-7 text-slate-700">
              <div>
                <p className="font-semibold">
                  Global Initiative for Asthma
                </p>
                <p>
                  Global Strategy for Asthma Management and Prevention, 2026.
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  National Asthma Education and Prevention Program
                </p>
                <p>
                  2020 Focused Updates to the Asthma Management Guidelines.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">
                Educational disclaimer
              </p>

              <p className="mt-2 leading-7 text-amber-800">
                PediAtlas is intended for medical education and should not
                replace institutional pathways, local protocols, or clinical
                judgment.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}