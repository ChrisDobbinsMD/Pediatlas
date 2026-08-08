"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EvidenceBase } from "@/components/disease";

const clinicalPearls = [
  "Bronchiolitis is primarily a clinical diagnosis.",
  "Supportive care is the foundation of management.",
  "Suctioning is most useful when nasal obstruction interferes with feeding or breathing.",
  "Routine chest radiography and viral testing are usually unnecessary.",
  "Routine albuterol, systemic corticosteroids, and antibiotics are not recommended.",
];

const avoidRoutineUse = [
  "Chest radiograph",
  "Respiratory viral panel",
  "CBC or inflammatory markers",
  "Albuterol",
  "Nebulized epinephrine",
  "Systemic corticosteroids",
  "Antibiotics without suspected bacterial infection",
  "Chest physiotherapy",
];

export default function BronchiolitisPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

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

            <span className="text-slate-600">Bronchiolitis</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Lower Airway Disease
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Bronchiolitis
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Acute viral inflammation of the bronchioles causing airway
                edema, mucus production, air trapping, and variable small-airway
                obstruction.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Usually age 1–23 months
                </span>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                  Clinical diagnosis
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  Supportive treatment
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
            <a href="#localization">Anatomy localization</a>
            <a href="#pathophysiology">Pathophysiology</a>
            <a href="#assessment">History and exam</a>
            <a href="#differential">Differential</a>
            <a href="#workup">Diagnostic workup</a>
            <a href="#management">Management</a>
            <a href="#disposition">Disposition</a>
            <a href="#pearls">Clinical pearls</a>
            <a href="#quiz">Quiz</a>
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
              An infant with cough, congestion, and increased work of breathing
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-50">
              A previously healthy 7-month-old presents on day four of illness
              with rhinorrhea, cough, decreased feeding, tachypnea, subcostal
              retractions, diffuse crackles, and expiratory wheezing. Oxygen
              saturation is 91% on room air. The infant is alert but has taken
              only half of the usual feeding volume.
            </p>

            <div className="mt-7 rounded-2xl bg-white/10 p-5">
              <p className="font-semibold text-sky-200">
                What should you decide first?
              </p>

              <p className="mt-2 leading-7 text-blue-50">
                Determine respiratory severity, hydration status, risk factors
                for deterioration, and whether supportive care can be provided
                safely at home.
              </p>
            </div>
          </section>

          <section
            id="localization"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Anatomy localization
            </p>

            <h2 className="mt-2 text-3xl font-bold">The bronchioles</h2>

            <p className="mt-5 leading-8 text-slate-600">
              The disease localizes to the small, non-cartilaginous airways.
              Their narrow baseline diameter makes infants particularly
              vulnerable to obstruction from edema, mucus, and cellular debris.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                ["Edema", "Thickens the bronchiolar wall."],
                ["Mucus", "Narrows and plugs the airway lumen."],
                ["Air trapping", "Occurs when expiration is more limited than inspiration."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
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
              From viral infection to respiratory distress
            </h2>
            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
  <Image
    src="/images/bronchiolitis-pathophysiology.png"
    alt="Comparison of a normal bronchiole with bronchiolitis showing airway-wall inflammation, mucus production, airway narrowing, and impaired airflow"
    width={1600}
    height={1000}
    className="h-auto w-full"
    priority
  />
</div>

            <div className="mt-7 grid gap-4">
              {[
                "Viral infection of the respiratory epithelium",
                "Inflammation, epithelial injury, and bronchiolar edema",
                "Increased mucus and cellular debris",
                "Partial or complete small-airway obstruction",
                "Air trapping, atelectasis, ventilation-perfusion mismatch, and increased work of breathing",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                    {index + 1}
                  </span>

                  <p className="pt-1 font-medium leading-7 text-slate-700">
                    {step}
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
              Assess severity, not just the diagnosis
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">History</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Day of illness and trajectory</li>
                  <li>• Feeding volume and urine output</li>
                  <li>• Apnea, cyanosis, or fatigue</li>
                  <li>• Prematurity or cardiopulmonary disease</li>
                  <li>• Age, especially young infants</li>
                  <li>• Prior wheezing or strong atopic history</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">Physical exam</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Respiratory rate and work of breathing</li>
                  <li>• Retractions, nasal flaring, or grunting</li>
                  <li>• Crackles, wheezing, and air entry</li>
                  <li>• Oxygen saturation and mental status</li>
                  <li>• Hydration and perfusion</li>
                  <li>• Focal findings suggesting an alternative diagnosis</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="differential"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Differential diagnosis
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              What else could look like this?
            </h2>

            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
              {[
                ["Asthma or viral-induced wheeze", "Recurrent episodes, prior response to bronchodilator, atopy, or older age."],
                ["Pneumonia", "Focal examination findings, persistent high fever, or toxic appearance."],
                ["Foreign body aspiration", "Abrupt onset, asymmetric air entry, focal wheeze, or choking history."],
                ["Heart failure", "Hepatomegaly, diaphoresis with feeds, poor growth, murmur, or cardiomegaly."],
                ["Pertussis", "Paroxysmal cough, apnea, post-tussive emesis, or minimal fever."],
              ].map(([diagnosis, clue]) => (
                <div
                  key={diagnosis}
                  className="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[220px_1fr]"
                >
                  <p className="font-bold">{diagnosis}</p>
                  <p className="leading-7 text-slate-600">{clue}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="workup"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Diagnostic workup
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Typical bronchiolitis requires very little testing
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="text-xl font-bold text-emerald-900">
                  Usually appropriate
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-emerald-900">
                  <li>• Focused history</li>
                  <li>• Repeated respiratory assessment</li>
                  <li>• Hydration assessment</li>
                  <li>• Pulse oximetry when clinically indicated</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                <h3 className="text-xl font-bold text-rose-900">
                  Avoid routinely
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-rose-900">
                  {avoidRoutineUse.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Testing may be appropriate when the presentation is atypical,
              severe, prolonged, focal, or when another diagnosis would change
              management.
            </p>
          </section>

          <section
            id="management"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Management
            </p>

            <h2 className="mt-2 text-3xl font-bold">Supportive care first</h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {[
                ["Nasal suctioning", "Use gentle, targeted suctioning when secretions impair breathing or feeding."],
                ["Hydration", "Continue oral feeds when safe; consider enteral or intravenous support when intake is inadequate."],
                ["Oxygen", "Provide supplemental oxygen for persistent clinically significant hypoxemia according to local policy."],
                ["Respiratory support", "Escalate support when work of breathing, oxygenation, apnea, or fatigue worsens."],
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

            <div className="mt-7 rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-amber-950">
                Oxygen threshold note
              </h3>

              <p className="mt-3 leading-7 text-amber-900">
                Many bronchiolitis guidelines use a persistent oxygen
                saturation below approximately 90% as a threshold for
                supplemental oxygen, but institutional policies and patient
                comorbidities may differ.
              </p>
            </div>
          </section>

          <section
            id="disposition"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Disposition
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Admit the child, not the pulse oximeter
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">Consider admission</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Persistent hypoxemia</li>
                  <li>• Moderate or severe work of breathing</li>
                  <li>• Apnea, exhaustion, or altered responsiveness</li>
                  <li>• Inadequate feeding or dehydration</li>
                  <li>• High-risk age or underlying disease</li>
                  <li>• Unsafe home monitoring or limited follow-up</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">Reasonable discharge</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Stable or improving respiratory effort</li>
                  <li>• Adequate oxygenation on room air</li>
                  <li>• Sufficient oral intake</li>
                  <li>• Caregiver can perform basic nasal care</li>
                  <li>• Clear return precautions</li>
                  <li>• Appropriate follow-up access</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="pearls"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Clinical pearls
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              High-yield takeaways
            </h2>

            <div className="mt-7 grid gap-4">
              {clinicalPearls.map((pearl) => (
                <div
                  key={pearl}
                  className="flex gap-4 rounded-2xl bg-sky-50 p-5"
                >
                  <span className="font-bold text-sky-700">✓</span>
                  <p className="leading-7 text-slate-700">{pearl}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="quiz"
            className="rounded-3xl border border-purple-200 bg-purple-50 p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Knowledge check
            </p>

            <h2 className="mt-2 text-3xl font-bold text-purple-950">
              What is the best next step?
            </h2>

            <p className="mt-5 leading-8 text-purple-900">
              A comfortable 8-month-old with typical bronchiolitis has mild
              retractions, adequate feeding, diffuse wheezing and crackles, and
              an oxygen saturation of 95% on room air. Which intervention is
              most appropriate?
            </p>

            <div className="mt-6 grid gap-3">
              {[
  "Obtain a chest radiograph",
  "Administer routine albuterol",
  "Provide supportive care and reassess",
  "Start systemic corticosteroids",
].map((answer) => (
  <button
    key={answer}
    onClick={() => setSelectedAnswer(answer)}
    className={`rounded-2xl border px-5 py-4 text-left font-semibold transition
      ${
        selectedAnswer === answer
          ? answer === "Provide supportive care and reassess"
            ? "border-green-500 bg-green-100"
            : "border-red-500 bg-red-100"
          : "border-purple-200 bg-white hover:border-purple-400 hover:bg-purple-100"
      }`}
  >
    {answer}
  </button>
))}
{selectedAnswer && (
  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
    {selectedAnswer === "Provide supportive care and reassess" ? (
      <>
        <h3 className="text-xl font-bold text-green-700">
          Correct!
        </h3>

        <p className="mt-4 leading-7 text-slate-700">
          This infant has uncomplicated bronchiolitis with adequate
          oxygenation, feeding, and only mild work of breathing. Supportive
          care and reassessment are appropriate.
        </p>

        <p className="mt-4 leading-7 text-slate-700">
          Routine chest radiography, bronchodilators, and corticosteroids are
          not recommended for typical bronchiolitis.
        </p>
      </>
    ) : (
      <>
        <h3 className="text-xl font-bold text-red-700">
          Not quite.
        </h3>

        <p className="mt-4 leading-7 text-slate-700">
          The best answer is:
        </p>

        <p className="mt-2 font-bold text-green-700">
          Provide supportive care and reassess.
        </p>

        <p className="mt-4 leading-7 text-slate-700">
          Bronchiolitis management focuses on supportive care and severity
          assessment rather than routine testing or medications.
        </p>
      </>
    )}
  </div>
)}
            </div>

            
          </section>
<EvidenceBase
  references={[
    {
      title: "American Academy of Pediatrics Clinical Practice Guideline",
      href: "https://publications.aap.org/pediatrics/article/134/5/e1474/75848/Clinical-Practice-Guideline-The-Diagnosis",
      description:
        "Diagnosis, management, and prevention of bronchiolitis.",
    },
    {
      title: "Canadian Paediatric Society",
      href: "https://cps.ca/documents/position/bronchiolitis",
      description:
        "Bronchiolitis: Recommendations for diagnosis, monitoring, and management.",
    },
  ]}
  secondarySources="UpToDate and OpenEvidence were used for educational verification and consistency checks where appropriate."
/>
                </div>
      </div>
    </main>
  );
}