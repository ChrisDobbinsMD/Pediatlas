"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EvidenceBase } from "@/components/disease";

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
  id="localization"
  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
    Anatomy localization
  </p>

  <h2 className="mt-2 text-3xl font-bold">
    Asthma is a disease of the conducting airways
  </h2>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Asthma primarily affects the medium and small bronchi through
    inflammation, bronchial smooth muscle constriction, and mucus
    production resulting in variable airflow obstruction.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2">
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
      <h3 className="text-xl font-bold text-blue-950">
        Structures involved
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-blue-900">
        <li>• Medium and small bronchi</li>
        <li>• Bronchial smooth muscle</li>
        <li>• Airway mucosa</li>
        <li>• Goblet cells and mucus glands</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
      <h3 className="text-xl font-bold text-red-950">
        Structures usually spared
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-red-900">
        <li>• Alveoli</li>
        <li>• Pleural space</li>
        <li>• Pulmonary vasculature</li>
        <li>• Lung parenchyma</li>
      </ul>
    </div>
  </div>

  <div className="mt-8 rounded-2xl bg-slate-50 p-6">
    <h3 className="text-xl font-bold">
      Clinical implication
    </h3>

    <p className="mt-3 leading-7 text-slate-600">
      Because asthma affects the conducting airways rather than the alveoli,
      patients typically present with wheezing, prolonged expiration,
      chest tightness, and airflow obstruction rather than focal crackles
      or consolidation.
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
<div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
  <Image
    src="/images/asthma-pathophysiology.png"
    alt="Asthma anatomy localization and comparison of a normal airway with an asthmatic airway showing bronchoconstriction, inflammation, mucus production, and airway remodeling"
    width={1600}
    height={1000}
    className="h-auto w-full"
    priority
  />
</div>

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
  id="workup"
  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
    Diagnostic workup
  </p>

  <h2 className="mt-2 text-3xl font-bold">
    Confirm variable airflow obstruction and avoid unnecessary testing
  </h2>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Asthma is diagnosed by a characteristic pattern of variable respiratory
    symptoms together with objective evidence of variable expiratory airflow
    limitation when testing is feasible.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h3 className="text-xl font-bold text-emerald-950">
        Initial evaluation
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-emerald-900">
        <li>• Detailed symptom and trigger history</li>
        <li>• Prior exacerbations and response to treatment</li>
        <li>• Physical examination and oxygen saturation</li>
        <li>• Assessment of atopy and relevant comorbidities</li>
        <li>• Review of inhaler technique and medication adherence</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
      <h3 className="text-xl font-bold text-blue-950">
        Objective lung-function testing
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-blue-900">
        <li>
          • Perform spirometry with bronchodilator testing when the child is
          developmentally able
        </li>
        <li>• Look for reduced expiratory airflow before treatment</li>
        <li>• Repeat testing after an inhaled bronchodilator</li>
        <li>
          • Improvement in airflow supports variable, reversible obstruction
        </li>
        <li>
          • Normal spirometry between episodes does not completely exclude
          asthma
        </li>
      </ul>
    </div>
  </div>

  <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-6">
    <h3 className="text-xl font-bold text-purple-950">
      When the diagnosis remains uncertain
    </h3>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <div>
        <h4 className="font-bold text-purple-950">
          Additional options
        </h4>

        <ul className="mt-3 space-y-3 leading-7 text-purple-900">
          <li>• Repeat spirometry during symptoms</li>
          <li>• Serial peak expiratory flow measurements</li>
          <li>• Exercise or bronchoprovocation testing</li>
          <li>• Specialist-directed allergy evaluation</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-purple-950">
          Fractional exhaled nitric oxide
        </h4>

        <p className="mt-3 leading-7 text-purple-900">
          FeNO may support the diagnosis of type 2 airway inflammation when
          asthma remains uncertain, but it should be interpreted as an adjunct
          rather than used alone to diagnose or exclude asthma.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-6 grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
      <h3 className="text-xl font-bold text-rose-950">
        Avoid routinely in a typical exacerbation
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-rose-900">
        <li>• Chest radiograph</li>
        <li>• CBC or inflammatory markers</li>
        <li>• Respiratory viral testing</li>
        <li>• Blood cultures</li>
        <li>• Arterial or venous blood gas</li>
        <li>• CT imaging</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <h3 className="text-xl font-bold text-amber-950">
        Consider targeted testing when
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-amber-900">
        <li>• Findings are focal or markedly asymmetric</li>
        <li>• Foreign body aspiration is possible</li>
        <li>• Pneumonia or pneumothorax is suspected</li>
        <li>• The diagnosis is uncertain or the course is atypical</li>
        <li>• The child fails to improve as expected</li>
        <li>• Respiratory failure or another complication is suspected</li>
      </ul>
    </div>
  </div>

  <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
      Severe-asthma warning
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      A normal or rising carbon dioxide level may be ominous
    </h3>

    <p className="mt-4 leading-7 text-slate-200">
      Early in an asthma exacerbation, children commonly hyperventilate and
      lower their carbon dioxide level. In a child with severe distress, a
      normalizing or rising carbon dioxide level may indicate worsening
      fatigue and inadequate ventilation.
    </p>

    <p className="mt-4 font-semibold text-amber-300">
      Decreasing wheeze with worsening air movement may represent a silent
      chest—not clinical improvement.
    </p>
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

<section
  id="disposition"
  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
    Disposition
  </p>

  <h2 className="mt-2 text-3xl font-bold">
    Reassess the response—not just the initial appearance
  </h2>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Disposition depends on the child&apos;s clinical response after initial
    treatment, oxygen requirement, work of breathing, air movement, ability to
    speak or feed, prior high-risk history, and the safety of outpatient
    follow-up.
  </p>

  <div className="mt-8 grid gap-6 lg:grid-cols-3">
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h3 className="text-xl font-bold text-emerald-950">
        Consider discharge
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-emerald-900">
        <li>• Symptoms and work of breathing are substantially improved</li>
        <li>• Air movement is good without concerning fatigue</li>
        <li>• Oxygenation is stable on room air</li>
        <li>• Bronchodilator treatments can be spaced appropriately</li>
        <li>• The child can speak, drink, and ambulate near baseline</li>
        <li>• Caregivers understand treatment and return precautions</li>
        <li>• Reliable follow-up and access to medications are available</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <h3 className="text-xl font-bold text-amber-950">
        Consider hospital admission
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-amber-900">
        <li>• Persistent moderate or severe respiratory distress</li>
        <li>• Continued oxygen requirement or recurrent hypoxemia</li>
        <li>• Need for frequent or continuous bronchodilator therapy</li>
        <li>• Incomplete or short-lived response to initial treatment</li>
        <li>• Poor oral intake, dehydration, or inability to manage at home</li>
        <li>• High-risk history or significant comorbidity</li>
        <li>• Unsafe social situation or unreliable follow-up</li>
      </ul>
    </div>

    <div className="rounded-2xl border border-rose-300 bg-rose-50 p-6">
      <h3 className="text-xl font-bold text-rose-950">
        Escalate to intensive care
      </h3>

      <ul className="mt-4 space-y-3 leading-7 text-rose-900">
        <li>• Worsening despite aggressive initial therapy</li>
        <li>• Markedly reduced air movement or silent chest</li>
        <li>• Exhaustion, confusion, drowsiness, or agitation</li>
        <li>• Persistent or worsening hypoxemia</li>
        <li>• Rising carbon dioxide or evidence of ventilatory failure</li>
        <li>• Need for advanced or rapidly escalating respiratory support</li>
        <li>• Concern for impending respiratory arrest</li>
      </ul>
    </div>
  </div>

  <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
      Discharge bundle
    </p>

    <h3 className="mt-2 text-2xl font-bold text-blue-950">
      Stabilization is only half of the job
    </h3>

    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {[
        "Confirm an inhaled corticosteroid-containing treatment plan",
        "Provide an appropriate reliever plan",
        "Complete the prescribed systemic corticosteroid course when indicated",
        "Demonstrate inhaler and spacer technique",
        "Review triggers, adherence, and barriers to obtaining medication",
        "Provide a written asthma action plan",
        "Give clear return precautions",
        "Arrange timely outpatient follow-up",
      ].map((item) => (
        <div
          key={item}
          className="flex gap-3 rounded-xl bg-white p-4 text-blue-950"
        >
          <span className="font-bold text-blue-700">✓</span>
          <p className="leading-6">{item}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
      High-risk history
    </p>

    <p className="mt-3 leading-7 text-slate-200">
      Prior intensive-care admission, previous intubation, recent emergency
      visits or systemic corticosteroid courses, poor controller adherence,
      medication-access barriers, and psychosocial concerns should lower the
      threshold for observation, admission, or specialist involvement.
    </p>
  </div>

  <p className="mt-6 text-sm leading-6 text-slate-500">
    Exact admission, oxygen, and bronchodilator-spacing criteria vary by
    institution. Apply the local pediatric asthma pathway when making clinical
    decisions.
  </p>
</section>

<section
  id="pearls"
  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
    Clinical pearls
  </p>

  <h2 className="mt-2 text-3xl font-bold">
    High-yield asthma takeaways
  </h2>

  <div className="mt-7 grid gap-4">
    {[
      {
        title: "Wheezing intensity does not equal disease severity",
        description:
          "A child with minimal wheezing but very poor air movement may be more critically ill than a child with loud wheezing and good air exchange.",
      },
      {
        title: "A silent chest is an emergency",
        description:
          "Diminishing wheeze accompanied by worsening work of breathing, fatigue, altered mental status, or poor air movement suggests critically limited airflow—not improvement.",
      },
      {
        title: "Treat before ordering routine tests",
        description:
          "A typical asthma exacerbation is assessed clinically, and urgent bronchodilator treatment should not be delayed for routine chest radiography or laboratory testing.",
      },
      {
        title: "Look beyond the current exacerbation",
        description:
          "Ask about nighttime symptoms, exercise limitation, prior emergency visits, systemic steroid courses, hospitalization, intensive-care admission, and previous intubation.",
      },
      {
        title: "Inhaler technique is part of the treatment",
        description:
          "Before escalating long-term therapy, confirm that the medication is being taken, the inhaler technique is correct, and the child has an appropriate spacer.",
      },
      {
        title: "Asthma control and asthma severity are not the same",
        description:
          "Control describes the child's current symptoms and future risk, while severity is judged retrospectively by the treatment required to maintain control.",
      },
      {
        title: "Every child needs a plan after stabilization",
        description:
          "Discharge planning should address controller therapy, reliever use, trigger reduction, spacer technique, follow-up, and a written asthma action plan.",
      },
    ].map((pearl) => (
      <div
        key={pearl.title}
        className="flex gap-4 rounded-2xl border border-sky-100 bg-sky-50 p-5"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-700 font-bold text-white">
          ✓
        </span>

        <div>
          <h3 className="font-bold text-slate-900">
            {pearl.title}
          </h3>

          <p className="mt-2 leading-7 text-slate-700">
            {pearl.description}
          </p>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
      Do not miss
    </p>

    <p className="mt-3 text-xl font-bold">
      Less wheezing can mean less airflow.
    </p>

    <p className="mt-3 leading-7 text-slate-200">
      Always interpret wheezing together with air entry, respiratory effort,
      speech, oxygenation, fatigue, and mental status.
    </p>
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
    A 9-year-old with known asthma presents with diffuse wheezing,
    moderate intercostal retractions, and difficulty speaking in full
    sentences. Oxygen saturation is 91% on room air. Which initial
    treatment is most appropriate?
  </p>

  <div className="mt-6 grid gap-3">
    {[
      "Obtain a chest radiograph before treatment",
      "Give inhaled albuterol, oxygen, and systemic corticosteroid",
      "Start antibiotics for presumed pneumonia",
      "Observe without treatment because wheezing is expected",
    ].map((answer) => (
      <button
        key={answer}
        onClick={() => setSelectedAnswer(answer)}
        className={`rounded-2xl border px-5 py-4 text-left font-semibold transition ${
          selectedAnswer === answer
            ? answer ===
              "Give inhaled albuterol, oxygen, and systemic corticosteroid"
              ? "border-green-500 bg-green-100 text-green-950"
              : "border-red-500 bg-red-100 text-red-950"
            : "border-purple-200 bg-white text-purple-950 hover:border-purple-400 hover:bg-purple-100"
        }`}
      >
        {answer}
      </button>
    ))}
  </div>

  {selectedAnswer && (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
      {selectedAnswer ===
      "Give inhaled albuterol, oxygen, and systemic corticosteroid" ? (
        <>
          <h3 className="text-xl font-bold text-green-700">Correct!</h3>

          <p className="mt-4 leading-7 text-slate-700">
            This child has a moderate-to-severe asthma exacerbation with
            hypoxemia and impaired speech. Immediate treatment should target
            bronchoconstriction, oxygenation, and airway inflammation.
          </p>
        </>
      ) : (
<>
  <h3 className="text-xl font-bold text-red-700">Not quite.</h3>

  <p className="mt-4 leading-7 text-slate-700">
    The best answer is:
  </p>

  <p className="mt-2 font-bold text-green-700">
    Give inhaled albuterol, oxygen, and systemic corticosteroid.
  </p>

  {selectedAnswer === "Obtain a chest radiograph before treatment" && (
    <p className="mt-4 leading-7 text-slate-700">
      A typical asthma exacerbation is treated clinically. Routine chest
      radiography is not required before starting therapy and should not delay
      bronchodilator treatment, oxygen, or corticosteroids.
    </p>
  )}

  {selectedAnswer === "Start antibiotics for presumed pneumonia" && (
    <p className="mt-4 leading-7 text-slate-700">
      This presentation is most consistent with an acute asthma exacerbation,
      not bacterial pneumonia. Antibiotics are reserved for findings that
      suggest bacterial infection, such as focal lung findings, persistent
      fever, or another convincing source.
    </p>
  )}

  {selectedAnswer ===
    "Observe without treatment because wheezing is expected" && (
    <p className="mt-4 leading-7 text-slate-700">
      This child has hypoxemia, moderate retractions, and impaired speech,
      indicating a moderate-to-severe exacerbation. Observation alone is unsafe;
      treatment should begin immediately.
    </p>
  )}
</>
      )}
    </div>
  )}
</section>

                    <EvidenceBase
            references={[
              {
                title: "Global Initiative for Asthma",
                href: "https://ginasthma.org/2026-gina-strategy-report/",
                description:
                  "Global Strategy for Asthma Management and Prevention, 2026.",
              },
              {
                title: "National Asthma Education and Prevention Program",
                href: "https://www.nhlbi.nih.gov/health-topics/asthma-management-guidelines-2020-updates",
                description:
                  "2020 Focused Updates to the Asthma Management Guidelines.",
              },
            ]}
          />

        </div>
      </div>
    </main>
  );
}