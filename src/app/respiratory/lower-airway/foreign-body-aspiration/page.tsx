"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { EvidenceBase } from "@/components/disease";

const obstructionPatterns = [
  {
    title: "Complete obstruction",
    description:
      "The object completely blocks airflow. A child may be unable to speak, cough effectively, or breathe and can rapidly develop cyanosis, loss of consciousness, and cardiac arrest.",
    accentClass: "border-rose-200 bg-rose-50",
    titleClass: "text-rose-950",
    textClass: "text-rose-900",
  },
  {
    title: "Partial fixed obstruction",
    description:
      "Airflow is reduced during both inspiration and expiration. Depending on location, this may produce stridor, persistent wheeze, decreased air entry, or respiratory distress.",
    accentClass: "border-amber-200 bg-amber-50",
    titleClass: "text-amber-950",
    textClass: "text-amber-900",
  },
  {
    title: "Ball-valve obstruction",
    description:
      "Air enters around the object during inspiration but cannot escape effectively during expiration, producing distal air trapping and unilateral hyperinflation.",
    accentClass: "border-sky-200 bg-sky-50",
    titleClass: "text-sky-950",
    textClass: "text-sky-900",
  },
  {
    title: "Delayed distal disease",
    description:
      "A retained foreign body causes mucosal edema, impaired secretion clearance, granulation tissue, atelectasis, recurrent pneumonia, or bronchiectasis.",
    accentClass: "border-purple-200 bg-purple-50",
    titleClass: "text-purple-950",
    textClass: "text-purple-900",
  },
];

const differential = [
  {
    diagnosis: "Esophageal foreign body",
    clue: "Drooling, dysphagia, odynophagia, feeding refusal, vomiting, or retrosternal discomfort suggest ingestion. A large esophageal object can still cause cough, stridor, or respiratory symptoms through posterior tracheal compression.",
  },
  {
    diagnosis: "Asthma",
    clue: "Asthma usually causes recurrent or diffuse wheezing and improves with bronchodilator therapy. Sudden onset, a witnessed choking event, or persistent focal wheeze argues against uncomplicated asthma.",
  },
  {
    diagnosis: "Bronchiolitis",
    clue: "A viral prodrome followed by diffuse bilateral wheezing or crackles is more typical. Abrupt onset and asymmetric breath sounds should raise concern for an aspirated object.",
  },
  {
    diagnosis: "Pneumonia",
    clue: "Fever, focal crackles, hypoxemia, and an acute infectious course support pneumonia. Recurrent pneumonia in the same lobe may be the delayed presentation of a retained foreign body.",
  },
  {
    diagnosis: "Croup or upper-airway infection",
    clue: "Barking cough, hoarseness, and viral symptoms suggest croup. Abrupt stridor while eating or playing with a small object should prompt concern for a laryngeal or tracheal foreign body.",
  },
  {
    diagnosis: "Anaphylaxis",
    clue: "Rapid respiratory symptoms accompanied by urticaria, angioedema, vomiting, hypotension, or multisystem involvement suggest anaphylaxis rather than mechanical obstruction.",
  },
];

const quizAnswers = [
  "A normal chest radiograph excludes an aspirated foreign body",
  "Begin repeated albuterol treatments and discharge if oxygenation remains normal",
  "Maintain a high suspicion for bronchial foreign body and obtain urgent specialty evaluation for bronchoscopy",
  "Encourage oral intake to determine whether the object is in the esophagus",
];

const correctAnswer =
  "Maintain a high suspicion for bronchial foreign body and obtain urgent specialty evaluation for bronchoscopy";

function getIncorrectFeedback(answer: string) {
  if (
    answer ===
    "A normal chest radiograph excludes an aspirated foreign body"
  ) {
    return "Many aspirated objects are radiolucent, and chest radiographs can be normal. A concerning choking history with persistent focal findings should not be dismissed because imaging is unrevealing.";
  }

  if (
    answer ===
    "Begin repeated albuterol treatments and discharge if oxygenation remains normal"
  ) {
    return "Bronchodilator-responsive diffuse wheezing supports asthma, but sudden onset after choking with unilateral findings strongly suggests a retained foreign body. Normal oxygen saturation does not make discharge safe.";
  }

  if (
    answer ===
    "Encourage oral intake to determine whether the object is in the esophagus"
  ) {
    return "A child with suspected aspiration or a potentially urgent ingestion should generally remain NPO while the location and need for procedural removal are determined.";
  }

  return "";
}

export default function ForeignBodyAspirationPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const [showAirwayAnnotations, setShowAirwayAnnotations] = useState(false);
  const [showCoinAnnotations, setShowCoinAnnotations] = useState(false);

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

            <span className="text-slate-600">
              Foreign Body Aspiration
            </span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Mechanical airway obstruction
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Foreign Body Aspiration
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Entry of food or another object into the larynx,
                trachea, or bronchial tree can cause complete
                obstruction, focal air trapping, atelectasis, or
                delayed recurrent pulmonary disease. A child may
                appear well after the initial choking event despite a
                retained airway foreign body.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Sudden choking
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Focal airway findings
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  Bronchoscopy may be urgent
                </span>
              </div>
            </div>

            <div className="text-8xl" aria-hidden="true">
              🪙🫁🥜
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
            <a href="#localization">Anatomy &amp; localization</a>
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
              A toddler with sudden choking and unilateral wheezing
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-50">
              A previously healthy 22-month-old boy is brought to the
              emergency department after suddenly coughing and choking
              while eating peanuts. His parents report that he briefly
              became cyanotic but quickly recovered. Since the event, he
              has continued to cough intermittently. Examination reveals
              mild tachypnea, decreased breath sounds, and an expiratory
              wheeze over the right lung field. Oxygen saturation is 97%
              on room air.
            </p>

            <div className="mt-7 rounded-2xl bg-white/10 p-5">
              <p className="font-semibold text-sky-200">
                Your first clinical task
              </p>

              <p className="mt-2 leading-7 text-blue-50">
                Determine whether the object entered the airway or the
                esophagus, assess for current airway compromise, and
                recognize that normal oxygenation does not exclude a
                retained bronchial foreign body.
              </p>
            </div>
          </section>

          <section
            id="localization"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Anatomy &amp; localization
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Airway or esophagus?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              After passing through the oropharynx, an object may enter
              the anterior laryngeal inlet and tracheobronchial tree or
              pass posteriorly into the esophagus. Symptoms depend on
              both the pathway taken and the level at which the object
              becomes lodged.
            </p>
<Image
  src="/images/aspiration-ingestion-pthwy.png"
  alt="Comparison of airway aspiration versus esophageal ingestion showing the aspiration pathway into the tracheobronchial tree and the ingestion pathway into the esophagus."
  width={1600}
  height={900}
  className="mt-8 h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
  unoptimized
/>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Airway aspiration
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  Think cough, wheeze, or stridor
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-blue-900">
                  <li>• Sudden choking or coughing</li>
                  <li>• Inability to speak or cry with complete obstruction</li>
                  <li>• Stridor or voice change with upper-airway impaction</li>
                  <li>• Unilateral wheeze or decreased breath sounds</li>
                  <li>• Persistent cough after the child appears to recover</li>
                  <li>• Recurrent focal pneumonia with delayed diagnosis</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                  Esophageal ingestion
                </p>

                <h3 className="mt-2 text-2xl font-bold text-purple-950">
                  Think drooling, dysphagia, or feeding refusal
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-purple-900">
                  <li>• Drooling or inability to manage secretions</li>
                  <li>• Dysphagia or odynophagia</li>
                  <li>• Gagging, vomiting, or feeding refusal</li>
                  <li>• Retrosternal or neck discomfort</li>
                  <li>• Object visible within the esophagus on imaging</li>
                  <li>
                    • Possible respiratory symptoms from posterior tracheal
                    compression
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Localization within the airway
              </p>

              <div className="mt-5 grid gap-4">
                {[
                  {
                    region: "Larynx or subglottis",
                    findings:
                      "Stridor, hoarseness, aphonia, severe distress, or complete airway obstruction.",
                  },
                  {
                    region: "Trachea",
                    findings:
                      "Cough, biphasic noisy breathing, variable wheeze, or an object that may move with changes in position.",
                  },
                  {
                    region: "Mainstem bronchus",
                    findings:
                      "Unilateral wheeze, asymmetric breath sounds, focal air trapping, or atelectasis.",
                  },
                  {
                    region: "Distal bronchus",
                    findings:
                      "Subtle focal findings, persistent cough, segmental atelectasis, or recurrent pneumonia in the same location.",
                  },
                ].map((item) => (
                  <div
                    key={item.region}
                    className="grid gap-2 rounded-2xl border border-amber-100 bg-white p-5 md:grid-cols-[190px_1fr]"
                  >
                    <h4 className="font-bold text-amber-950">
                      {item.region}
                    </h4>

                    <p className="leading-7 text-slate-700">
                      {item.findings}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Pediatric anatomy pearl
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                Do not assume every pediatric foreign body enters the
                right mainstem bronchus. Unlike adults, young children
                have less pronounced differences between the right and
                left mainstem bronchial angles, so either side may be
                involved.
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
              The object changes airflow and obstructs secretion clearance
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The physiologic consequences depend on the object&apos;s
              size, shape, location, duration, and whether air can pass
              around it during inspiration or expiration.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {obstructionPatterns.map((pattern) => (
                <div
                  key={pattern.title}
                  className={`rounded-2xl border p-6 ${pattern.accentClass}`}
                >
                  <h3 className={`text-xl font-bold ${pattern.titleClass}`}>
                    {pattern.title}
                  </h3>

                  <p className={`mt-3 leading-7 ${pattern.textClass}`}>
                    {pattern.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                Deceptive improvement
              </p>

              <p className="mt-3 leading-7 text-rose-900">
                The dramatic choking episode may stop once the object
                moves distally. This apparent recovery does not confirm
                expulsion—the child may enter a quieter interval despite
                persistent bronchial obstruction.
              </p>
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
              Ask specifically about the moment symptoms began
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">History</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Sudden coughing, choking, gagging, or cyanosis</li>
                  <li>• Eating or playing with small objects at onset</li>
                  <li>• Witnessed versus unwitnessed event</li>
                  <li>• Type, size, shape, and number of possible objects</li>
                  <li>• Persistent cough, wheeze, stridor, or voice change</li>
                  <li>• Drooling, dysphagia, vomiting, or feeding refusal</li>
                  <li>• Fever or recurrent focal pneumonia</li>
                  <li>• Response—or lack of response—to asthma therapy</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">Physical exam</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Ability to speak, cry, and cough effectively</li>
                  <li>• Mental status, color, and oxygen saturation</li>
                  <li>• Stridor or altered voice</li>
                  <li>• Respiratory rate and work of breathing</li>
                  <li>• Unilateral wheeze or asymmetric air entry</li>
                  <li>• Focal crackles or signs of atelectasis</li>
                  <li>• Drooling and ability to manage secretions</li>
                  <li>• Signs of exhaustion or impending respiratory failure</li>
                </ul>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-amber-950">
                The examination may be normal
              </h3>

              <p className="mt-3 leading-7 text-amber-900">
                Children with a retained foreign body may appear
                comfortable between episodes and may have normal oxygen
                saturation, no audible wheeze, or subtle findings.
                Clinical suspicion must incorporate the history rather
                than relying on one reassuring examination.
              </p>
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
              Sudden focal symptoms are the strongest clue
            </h2>

            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
              {differential.map((item) => (
                <div
                  key={item.diagnosis}
                  className="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[220px_1fr]"
                >
                  <p className="font-bold">{item.diagnosis}</p>

                  <p className="leading-7 text-slate-600">
                    {item.clue}
                  </p>
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
              Normal imaging does not exclude aspiration
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-blue-950">
                  Standard radiographs
                </h3>

                <p className="mt-3 leading-7 text-blue-900">
                  Obtain 2-view chest radiographs when the child is stable.
                  Imaging may directly show a radiopaque object or
                  indirectly demonstrate unilateral hyperinflation,
                  mediastinal shift, atelectasis, consolidation, or
                  pneumothorax.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
                <h3 className="text-xl font-bold text-purple-950">
                  Additional imaging in selected patients
                </h3>

                <p className="mt-3 leading-7 text-purple-900">
                  Standard frontal and lateral chest radiographs remain the initial
                  imaging study for suspected foreign body aspiration. 
                  Inspiratory-expiratory or lateral decubitus views have historically 
                  been used to demonstrate unilateral air trapping, but their diagnostic
                  performance is limited and they are no longer routinely recommended in many centers.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="text-xl font-bold text-emerald-950">
                  Imaging for possible ingestion
                </h3>

                <p className="mt-3 leading-7 text-emerald-900">
                  When the pathway or object is uncertain, imaging may
                  need to include the neck, chest, and abdomen. Coins,
                  button batteries, magnets, sharp objects, and other
                  high-risk ingestions require object-specific urgent
                  management.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-xl font-bold text-amber-950">
                  CT in selected patients
                </h3>

                <p className="mt-3 leading-7 text-amber-900">
                  Most aspirated foreign bodies are radiolucent, and normal chest
                  radiographs do not exclude aspiration. When suspicion remains
                  high despite unrevealing radiographs, further evaluation should
                  not be delayed. Depending on institutional practice and resource
                  availability, patients may proceed directly to bronchoscopy or
                  undergo low-dose noncontrast chest CT when the diagnosis remains uncertain.
                </p>
              </div>
            </div>
{/* Imaging Examples */}

<div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">

  <h3 className="text-2xl font-bold text-slate-900">
    Imaging Pearls
  </h3>

  <p className="mt-3 leading-7 text-slate-600">
    Review these classic imaging findings. Study the image first,
    then reveal the annotations to identify the important features.
  </p>

  <div className="mt-8 space-y-12">

    {/* Airway Foreign Body */}

    <div>

      <div className="flex items-center justify-between">

        <h4 className="text-xl font-bold">
          Airway Foreign Body
        </h4>

        <button
          onClick={() =>
            setShowAirwayAnnotations(!showAirwayAnnotations)
          }
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100"
        >
          {showAirwayAnnotations
            ? "👁 Hide annotations"
            : "👁 Show annotations"}
        </button>

      </div>

      <a
  href={
    showAirwayAnnotations
      ? "/images/foreign-body-airtrapping-annotated.png"
      : "/images/foreign-body-airtrapping.jpg"
  }
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={
      showAirwayAnnotations
        ? "/images/foreign-body-airtrapping-annotated.png"
        : "/images/foreign-body-airtrapping.jpg"
    }
    alt="Chest radiograph demonstrating unilateral air trapping from bronchial foreign body aspiration"
   className="mx-auto w-full max-w-xl cursor-zoom-in rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-lg"
  />
</a>
<p className="mt-4 text-sm text-slate-500">
  Wikimedia Commons:{" "}
  <a
    href="https://commons.wikimedia.org/wiki/File:Fremdkoerperaspiration_mit_Ventilwirkung_2W_-_CR_ap_-_001.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:underline"
  >
    Foreign Body Aspiration Chest Radiograph (Hellerhoff, 2022)
  </a>{" "}
  · CC BY-SA 4.0
</p>
      <div className="mt-5 rounded-xl border border-sky-200 bg-sky-50 p-5">

        <p className="font-semibold text-sky-900">
          Clinical Pearl
        </p>

        <p className="mt-2 leading-7 text-sky-900">
          Most aspirated foreign bodies are radiolucent and are not
          directly visible on chest radiographs. Diagnosis often relies
          on indirect findings such as unilateral hyperinflation,
          air trapping, and mediastinal shift.
        </p>

      </div>

    </div>

    {/* Esophageal Coin */}
<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-2xl font-bold text-blue-950">
        Esophageal Coin
      </h3>
      <p className="mt-2 text-slate-600">
        AP and lateral radiographs demonstrate the typical appearance of an
        esophageal foreign body. The lateral view confirms that the coin lies
        posterior to the trachea.
      </p>
    </div>
  </div>

  <div className="mt-5 grid gap-5 md:grid-cols-2">
  <a
    href="/images/coin-ap.png"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/coin-ap.png"
      alt="AP radiograph demonstrating an esophageal coin"
      className="w-full cursor-zoom-in rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-lg"
    />
  </a>

  <a
    href={
      showCoinAnnotations
        ? "/images/coin-lateral-annotated.jpeg"
        : "/images/coin-lateral.jpeg"
    }
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={
        showCoinAnnotations
          ? "/images/coin-lateral-annotated.jpeg"
          : "/images/coin-lateral.jpeg"
      }
      alt="Lateral radiograph demonstrating an esophageal coin"
      className="w-full cursor-zoom-in rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-lg"
    />
  </a>
</div>

  <button
    onClick={() => setShowCoinAnnotations(!showCoinAnnotations)}
    className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-900"
  >
    👁 {showCoinAnnotations ? "Hide" : "Show"} annotations
  </button>

<p className="mt-2 text-xs text-slate-500">
  🔍 Click either image to view the full-resolution radiograph.
</p>

  <p className="mt-3 text-sm text-slate-500">
    Radiopaedia Case:{" "}
    <a
      href="https://radiopaedia.org/cases/oesophageal-foreign-body-coin?lang=us"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 hover:underline"
    >
      Oesophageal Foreign Body – Coin
    </a>
    . Licensed under CC BY-NC-SA.
  </p>

  <div className="mt-6 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5">
    <h4 className="font-semibold text-amber-900">
      Clinical Pearl
    </h4>

    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
      <li>
        On the <strong>AP radiograph</strong>, esophageal coins are usually seen
        <strong> en face</strong> (round), whereas tracheal coins more commonly
        appear edge-on.
      </li>

      <li>
        The <strong>lateral radiograph</strong> confirms the coin is
        <strong> posterior to the trachea</strong>, supporting an esophageal
        location.
      </li>

      <li>
        Always distinguish a coin from a <strong>button battery</strong>, which
        requires emergent removal because of the risk of caustic injury.
      </li>
    </ul>
  </div>
</div>

  </div>

</div>
            <div className="mt-7 rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-xl font-bold text-rose-950">
                Bronchoscopy is the definitive diagnostic test
              </h3>

              <p className="mt-3 leading-7 text-rose-900">
                If clinical suspicion remains high, urgent consultation
                for bronchoscopy is appropriate even when radiographs
                are normal. Bronchoscopy allows direct airway
                visualization and removal during the same procedure.
              </p>
            </div>
          </section>

          <section
            id="management"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Management
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Management depends on whether obstruction is complete
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                <h3 className="text-xl font-bold text-rose-950">
                  Severe active airway obstruction
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-rose-900">
                  <li>• Activate emergency assistance immediately</li>
                  <li>
                    • Allow coughing when the cough remains strong and effective
                  </li>
                  <li>
                    • For an infant: cycles of 5 back blows and 5 chest thrusts (heel-of-hand technique)
                  </li>
                  <li>
                    • For a child: cycles of 5 back blows and 5 abdominal thrusts
                  </li>
                  <li>
                    • If unresponsive, begin CPR starting with compressions
                  </li>
                  <li>
                    • Remove an object only when it is clearly visible
                  </li>
                  <li>• Do not perform a blind finger sweep</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-blue-950">
                  Stable suspected retained foreign body
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-blue-900">
                  <li>• Keep the child calm and minimize agitation</li>
                  <li>• Provide oxygen when indicated</li>
                  <li>• Maintain continuous clinical observation</li>
                  <li>• Keep the child NPO</li>
                  <li>• Avoid unnecessary airway manipulation</li>
                  <li>• Obtain appropriate imaging if it will not delay care</li>
                  <li>
                    • Consult the local airway team urgently for bronchoscopy
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-6">
              <h3 className="text-xl font-bold text-purple-950">
                Definitive removal
              </h3>

              <p className="mt-3 leading-7 text-purple-900">
                Rigid bronchoscopy under general anesthesia is commonly
                used because it provides airway control, ventilation,
                direct visualization, and access for extraction
                instruments. The exact procedural team varies by
                institution and may include otolaryngology, pediatric
                surgery, pulmonology, and anesthesia.
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Avoid preventable deterioration
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                A partially obstructing object can move and suddenly
                produce complete obstruction. Do not leave the child
                unobserved or create unnecessary distress while awaiting
                definitive evaluation.
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
              Suspected airway foreign bodies require definitive planning
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
                <h3 className="text-xl font-bold text-emerald-950">
                  Consider discharge
                </h3>

                <ul className="mt-5 space-y-4 leading-7 text-emerald-900">
                  <li>
                    • Aspiration has been confidently excluded or the object was
                    completely removed
                  </li>
                  <li>• Stable respiratory status and oxygenation</li>
                  <li>• No stridor, focal wheeze, or asymmetric air entry</li>
                  <li>• Able to tolerate appropriate oral intake</li>
                  <li>• No procedural complication requiring observation</li>
                  <li>• Clear return precautions and follow-up plan</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
                <h3 className="text-xl font-bold text-amber-950">
                  Observe or admit
                </h3>

                <ul className="mt-5 space-y-4 leading-7 text-amber-900">
                  <li>• Ongoing concern for retained foreign body</li>
                  <li>• Procedure planned but not immediately performed</li>
                  <li>• Persistent cough, wheeze, or asymmetric examination</li>
                  <li>• Oxygen requirement or increased work of breathing</li>
                  <li>• Atelectasis, pneumonia, or other pulmonary complication</li>
                  <li>• Post-bronchoscopy monitoring is indicated</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-300 bg-rose-50 p-6">
                <h3 className="text-xl font-bold text-rose-950">
                  Escalate immediately
                </h3>

                <ul className="mt-5 space-y-4 leading-7 text-rose-900">
                  <li>• Complete or rapidly worsening airway obstruction</li>
                  <li>• Altered mental status or exhaustion</li>
                  <li>• Severe hypoxemia or cyanosis</li>
                  <li>• Marked stridor or minimal air movement</li>
                  <li>• Increasing respiratory support</li>
                  <li>• Hemodynamic instability or cardiac arrest</li>
                </ul>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                After removal
              </p>

              <p className="mt-3 leading-7 text-blue-900">
                Reassess respiratory symptoms and examination findings.
                Depending on the duration and complexity of impaction,
                evaluate for residual fragments, airway edema, bleeding,
                granulation tissue, pneumothorax, atelectasis, or
                secondary infection.
              </p>
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
              High-yield foreign body aspiration takeaways
            </h2>

            <div className="mt-7 grid gap-4">
              {[
                {
                  title: "The choking event may be remote",
                  description:
                    "Ask specifically about sudden coughing or choking even when symptoms began days or weeks earlier.",
                },
                {
                  title: "A normal radiograph does not rule it out",
                  description:
                    "Most food items and many small objects are radiolucent, and both the examination and imaging may initially appear normal.",
                },
                {
                  title: "Unilateral wheeze is not always asthma",
                  description:
                    "Sudden focal wheezing or persistent asymmetry—especially without prior recurrent symptoms—should prompt evaluation for aspiration.",
                },
                {
                  title: "Normal oxygen saturation can be misleading",
                  description:
                    "A child may oxygenate normally despite significant focal bronchial obstruction.",
                },
                {
                  title: "Either mainstem bronchus may be involved",
                  description:
                    "The right-sided predominance seen in adults is less reliable in young children.",
                },
                {
                  title: "Bronchoscopy can diagnose and treat",
                  description:
                    "When suspicion remains high, direct visualization permits confirmation and removal during the same procedure.",
                },
                {
                  title: "Do not forget the esophagus",
                  description:
                    "Drooling, dysphagia, feeding refusal, and vomiting suggest ingestion, but esophageal objects may also produce respiratory symptoms.",
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
          </section>

          <section
            id="quiz"
            className="rounded-3xl border border-purple-200 bg-purple-50 p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Knowledge check
            </p>

            <h2 className="mt-2 text-3xl font-bold text-purple-950">
              What is the next best step?
            </h2>

            <p className="mt-5 leading-8 text-purple-900">
              A 2-year-old suddenly choked while eating nuts. He now
              appears comfortable with an oxygen saturation of 98%, but
              has persistent unilateral wheezing. Chest radiographs show
              no visible foreign body and no definite abnormality. What
              is the most appropriate next step?
            </p>

            <div className="mt-6 grid gap-3">
              {quizAnswers.map((answer) => (
                <button
                  key={answer}
                  type="button"
                  onClick={() => setSelectedAnswer(answer)}
                  className={`rounded-2xl border px-5 py-4 text-left font-semibold transition ${
                    selectedAnswer === answer
                      ? answer === correctAnswer
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
                {selectedAnswer === correctAnswer ? (
                  <>
                    <h3 className="text-xl font-bold text-green-700">
                      Correct!
                    </h3>

                    <p className="mt-4 leading-7 text-slate-700">
                      A classic choking event followed by persistent
                      focal respiratory findings creates a high
                      suspicion for a retained bronchial foreign body.
                      Normal oxygenation and radiographs do not exclude
                      aspiration. The child needs urgent specialty
                      evaluation for bronchoscopy.
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
                      {correctAnswer}
                    </p>

                    <p className="mt-4 leading-7 text-slate-700">
                      {getIncorrectFeedback(selectedAnswer)}
                    </p>
                  </>
                )}
              </div>
            )}
          </section>

          <EvidenceBase
            references={[
              {
                title:
                  "American Academy of Pediatrics — Foreign Body Ingestion and Aspiration",
                href:
                  "https://publications.aap.org/pediatricsinreview/article/47/6/352/207798/Foreign-Body-Ingestion-and-Aspiration",
                description:
                  "Current Pediatrics in Review discussion of the presentation, evaluation, and management of ingested and aspirated foreign bodies in children.",
              },
              {
                title:
                  "American Heart Association — Pediatric Basic Life Support",
                href:
                  "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support",
                description:
                  "2025 pediatric basic life support guidance, including management of severe foreign-body airway obstruction in infants and children.",
              },
              {
                title:
                  "Royal Children’s Hospital Melbourne — Foreign Bodies Inhaled",
                href:
                  "https://www.rch.org.au/clinicalguide/guideline_index/Foreign_bodies_inhaled/",
                description:
                  "Clinical guidance for recognition, investigation, observation, consultation, and management of inhaled foreign bodies.",
              },
              {
                title:
                  "Children’s Hospital of Philadelphia — Foreign Body Aspiration",
                href:
                  "https://www.chop.edu/conditions-diseases/foreign-body-aspiration",
                description:
                  "Overview of pediatric foreign body aspiration and bronchoscopic removal using a rigid ventilating bronchoscope.",
              },
            ]}
            secondarySources="Additional AAP educational material and current institutional pediatric airway guidance were used for educational verification and consistency checks."
          />
        </div>
      </div>
    </main>
  );
}