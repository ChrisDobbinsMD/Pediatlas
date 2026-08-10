"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { EvidenceBase } from "@/components/disease";

const diseaseStages = [
  {
    title: "Catarrhal stage",
    timing: "Usually 1–2 weeks",
    description:
      "Rhinorrhea, mild cough, lacrimation, and little or no fever. The illness is highly contagious and often resembles a routine viral upper respiratory infection.",
  },
  {
    title: "Paroxysmal stage",
    timing: "Usually 2–6 weeks or longer",
    description:
      "Repeated bursts of rapid coughing may be followed by an inspiratory whoop, cyanosis, exhaustion, or post-tussive vomiting. Young infants may present primarily with apnea.",
  },
  {
    title: "Convalescent stage",
    timing: "Weeks to months",
    description:
      "Coughing episodes gradually become less frequent and severe, but paroxysms may recur temporarily with subsequent respiratory infections (hence the term - 100-day cough).",
  },
];

const differential = [
  {
    diagnosis: "Viral respiratory infection",
    clue: "Usually causes a shorter, less paroxysmal cough and may be accompanied by fever, congestion, or other viral symptoms.",
  },
  {
    diagnosis: "Bronchiolitis",
    clue: "Typically affects infants with diffuse wheezing, crackles, increased work of breathing, and a viral prodrome.",
  },
  {
    diagnosis: "Asthma",
    clue: "Recurrent wheezing, prolonged expiration, triggers, and improvement with bronchodilator therapy.",
  },
  {
    diagnosis: "Pneumonia",
    clue: "Fever, focal crackles, focal decreased air entry, hypoxemia, or toxic appearance suggest pneumonia.",
  },
  {
    diagnosis: "Foreign body aspiration",
    clue: "Abrupt choking or coughing onset with focal wheeze or asymmetric breath sounds should prompt consideration of aspiration.",
  },
  {
    diagnosis: "Reflux or aspiration",
    clue: "Symptoms associated with feeds, choking, recurrent aspiration events, or chronic respiratory symptoms may suggest an alternative cause.",
  },
];

const quizAnswers = [
  "High fever with focal crackles",
  "Post-tussive vomiting after repeated coughing spells",
  "Diffuse wheezing that improves immediately with albuterol",
  "Inspiratory stridor with a barking cough",
];

const correctAnswer =
  "Post-tussive vomiting after repeated coughing spells";

function getIncorrectFeedback(answer: string) {
  if (answer === "High fever with focal crackles") {
    return "High fever and focal crackles are more suggestive of pneumonia. Pertussis commonly causes little or no fever, particularly early in the illness.";
  }

  if (
    answer ===
    "Diffuse wheezing that improves immediately with albuterol"
  ) {
    return "Reversible diffuse wheezing is more consistent with asthma. Pertussis classically causes prolonged paroxysms of cough rather than bronchodilator-responsive obstruction.";
  }

  if (answer === "Inspiratory stridor with a barking cough") {
    return "Inspiratory stridor and a barking cough localize to the upper airway and are more characteristic of croup.";
  }

  return "";
}

export default function PertussisPage() {
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

            <span className="text-slate-600">Pertussis</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Toxin-mediated respiratory infection
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Pertussis
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A highly contagious respiratory illness caused by Bordetella
                pertussis and characterized by prolonged cough, paroxysms,
                post-tussive vomiting, and potentially severe disease in young
                infants.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Droplet transmission
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Ciliated epithelium
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  High-risk in infants
                </span>
              </div>
            </div>

            <div className="text-8xl" aria-hidden="true">
              😷
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
            <a href="#localization">Anatomy & Localization</a>
            <a href="#pathophysiology">Pathophysiology</a>
            <a href="#stages">Clinical stages</a>
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
              An infant with apnea and prolonged coughing spells
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-50">
              A 2-month-old infant presents with 10 days of worsening cough.
              The parents describe repeated coughing spells followed by
              facial color change, gasping, and occasional vomiting. The
              infant has had several brief pauses in breathing but little
              fever. Between episodes, the lung examination is relatively
              unremarkable.
            </p>

            <div className="mt-7 rounded-2xl bg-white/10 p-5">
              <p className="font-semibold text-sky-200">
                Your first clinical task
              </p>

              <p className="mt-2 leading-7 text-blue-50">
                Recognize that young infants may have severe pertussis without
                a classic whoop and may present primarily with apnea, cyanosis,
                or feeding difficulty.
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
              Pertussis targets the ciliated conducting airway
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bordetella pertussis attaches to ciliated respiratory epithelial cells,
              particularly within the trachea, bronchi, and larger bronchioles. As the
              airway becomes smaller, ciliated cells become progressively less abundant,
              while club cells assume a greater role in epithelial protection,
              secretion, detoxification, and repair.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-blue-950">
                  Primary structures involved
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-blue-900">
                  <li>• Ciliated respiratory epithelium</li>
                  <li>• Trachea</li>
                  <li>• Main and segmental bronchi</li>
                  <li>• Larger bronchioles</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Secondary complications
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                  <li>• Mucus plugging and atelectasis</li>
                  <li>• Secondary bacterial pneumonia</li>
                  <li>• Hypoxemia during severe paroxysms</li>
                  <li>• Pulmonary hypertension in critical infant disease</li>
                </ul>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-purple-200 bg-purple-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                Airway epithelial transition
              </p>

              <h3 className="mt-2 text-2xl font-bold text-purple-950">
                Cilia become progressively less abundant down the bronchial tree
              </h3>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    region: "Trachea and bronchi",
                    epithelium:
                      "Pseudostratified ciliated columnar epithelium with mucus-producing goblet cells.",
                    function:
                      "Abundant cilia move mucus, microorganisms, and trapped debris toward the pharynx through the mucociliary escalator.",
                  },
                  {
                    region: "Larger bronchioles",
                    epithelium:
                      "The lining transitions toward simple columnar or cuboidal epithelium, with fewer goblet cells and increasing numbers of club cells.",
                    function:
                      "Ciliary clearance remains important, while club cells contribute protective secretions, detoxification, and epithelial repair.",
                  },
                  {
                    region: "Terminal bronchioles",
                    epithelium:
                      "Simple cuboidal epithelium containing club cells and relatively sparse ciliated cells.",
                    function:
                      "This is the final portion of the conducting zone before the gas-exchanging airways begin.",
                  },
                  {
                    region: "Respiratory bronchioles",
                    epithelium:
                      "Low cuboidal epithelium with club cells and occasional proximal ciliated cells. Alveoli begin to interrupt the airway wall.",
                    function:
                      "This region marks the transition from the conducting zone to the respiratory zone.",
                  },
                  {
                    region: "Alveolar ducts and alveoli",
                    epithelium:
                      "Predominantly thin type I pneumocytes, with type II pneumocytes producing surfactant and supporting epithelial repair.",
                    function:
                      "The thin alveolar-capillary barrier permits efficient oxygen and carbon-dioxide exchange.",
                  },
                ].map((item) => (
                  <div
                    key={item.region}
                    className="grid gap-3 rounded-2xl border border-purple-100 bg-white p-5 md:grid-cols-[190px_1fr]"
                  >
                    <h4 className="font-bold text-purple-950">
                      {item.region}
                    </h4>

                    <div>
                      <p className="leading-7 text-slate-700">
                        {item.epithelium}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.function}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-purple-100 p-5">
                <p className="font-bold text-purple-950">
                  Why this matters in pertussis
                </p>

                <p className="mt-2 leading-7 text-purple-900">
                  Bordetella pertussis primarily attaches to ciliated respiratory
                  epithelial cells. Damage to this mucociliary system impairs secretion
                  clearance and contributes to retained mucus, airway irritation, and
                  prolonged paroxysmal coughing.
                </p>
              </div>
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
              Attachment, toxin production, and impaired clearance
            </h2>

            <div className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <Image
                  src="/images/pertussis-pathophys-v2.png"
                  alt="Pertussis pathophysiology showing Bordetella pertussis adherence to ciliated respiratory epithelium, toxin-mediated ciliary injury, impaired mucociliary clearance, mucus retention, and paroxysmal coughing"
                  width={1536}
                  height={1024}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Pathophysiologic cascade
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                The four steps below mirror the infographic and summarize the causal chain
                from airway colonization to the characteristic clinical manifestations.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    step: "1",
                    title: "Attachment and colonization",
                    text: "B. pertussis adheres to ciliated respiratory epithelial cells through adhesins such as filamentous hemagglutinin, pertactin, and fimbriae, without deeply invading tissue.",
                    circleClass: "bg-sky-600",
                    lineClass: "bg-sky-300",
                  },
                  {
                    step: "2",
                    title: "Toxin production",
                    text: "Pertussis toxin, adenylate cyclase toxin, and tracheal cytotoxin impair immune defenses, disrupt epithelial function, and injure ciliated cells.",
                    circleClass: "bg-indigo-600",
                    lineClass: "bg-indigo-300",
                  },
                  {
                    step: "3",
                    title: "Ciliary dysfunction",
                    text: "Loss of coordinated ciliary beating impairs mucociliary clearance, allowing mucus and cellular debris to accumulate within the conducting airways.",
                    circleClass: "bg-amber-500",
                    lineClass: "bg-amber-300",
                  },
                  {
                    step: "4",
                    title: "Clinical consequences",
                    text: "Retained secretions and airway irritation trigger paroxysmal cough, inspiratory whoop, post-tussive emesis, cyanosis, and apnea in young infants.",
                    circleClass: "bg-rose-600",
                    lineClass: "bg-rose-300",
                  },
                ].map((item, index, items) => (
                  <div key={item.step}>
                    <div className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white ${item.circleClass}`}
                      >
                        {item.step}
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    {index < items.length - 1 && (
                      <div
                        className={`ml-6 h-6 w-0.5 ${item.lineClass}`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Infant physiology matters
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                Young infants have limited respiratory reserve and may develop apnea,
                bradycardia, cyanosis, feeding intolerance, or respiratory failure
                without producing a classic inspiratory whoop.
              </p>
            </div>
          </section>

          <section
            id="stages"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Clinical stages
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              The illness evolves over several weeks
            </h2>

            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {diseaseStages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 font-bold text-white">
                    {index + 1}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">{stage.title}</h3>

                  <p className="mt-2 text-sm font-semibold text-sky-700">
                    {stage.timing}
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    {stage.description}
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
              Listen for the pattern, not only the whoop
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">History</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Prolonged or worsening cough</li>
                  <li>• Repetitive paroxysms of coughing</li>
                  <li>• Post-tussive vomiting</li>
                  <li>• Whoop, gasping, cyanosis, or exhaustion</li>
                  <li>• Apnea or bradycardia in young infants</li>
                  <li>• Minimal or absent fever</li>
                  <li>• Vaccination status and known exposure</li>
                  <li>• Feeding tolerance and urine output</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">Physical exam</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Respiratory rate and oxygen saturation</li>
                  <li>• Work of breathing between and during episodes</li>
                  <li>• Apnea, cyanosis, or altered responsiveness</li>
                  <li>• Hydration and feeding ability</li>
                  <li>• Focal findings suggesting pneumonia</li>
                  <li>• Signs of exhaustion or respiratory failure</li>
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
              A prolonged cough has many possible causes
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
              Test early and collect the correct specimen
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-blue-950">
                  Nasopharyngeal PCR
                </h3>

                <p className="mt-3 leading-7 text-blue-900">
                  PCR is commonly used because it provides rapid and sensitive
                  detection. Yield is highest early and decreases as the cough
                  progresses or after effective antibiotic therapy.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
                <h3 className="text-xl font-bold text-purple-950">
                  Culture
                </h3>

                <p className="mt-3 leading-7 text-purple-900">
                  Culture is highly specific and useful for public-health
                  surveillance, but sensitivity declines after the first weeks
                  of illness and results take longer.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="text-xl font-bold text-emerald-950">
                  CBC
                </h3>

                <p className="mt-3 leading-7 text-emerald-900">
                  Leukocytosis with absolute lymphocytosis can support the
                  diagnosis and may be pronounced in severe infant disease,
                  but a normal CBC does not exclude pertussis.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-xl font-bold text-amber-950">
                  Chest radiograph
                </h3>

                <p className="mt-3 leading-7 text-amber-900">
                  Imaging is not routinely required in uncomplicated disease.
                  Consider it when hypoxemia, focal findings, respiratory
                  distress, or concern for pneumonia, atelectasis, or another
                  diagnosis is present.
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-xl font-bold text-rose-950">
                Do not delay treatment in a high-risk patient
              </h3>

              <p className="mt-3 leading-7 text-rose-900">
                Begin treatment before test confirmation when clinical
                suspicion is high and the patient is a young infant, pregnant,
                severely ill, or likely to expose someone at high risk for
                severe disease.
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
              Reduce transmission while supporting the child
            </h2>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-blue-950">
                  Supportive care
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-blue-900">
                  <li>• Minimize unnecessary stimulation</li>
                  <li>• Monitor oxygenation and apnea</li>
                  <li>• Provide oxygen when hypoxemic</li>
                  <li>• Support hydration and nutrition</li>
                  <li>• Suction secretions when helpful</li>
                  <li>• Escalate respiratory support when needed</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="text-xl font-bold text-emerald-950">
                  Antimicrobial therapy
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-emerald-900">
                  <li>• Macrolides are the first-line antibiotics for pertussis.</li>
                  <li>• Azithromycin is generally the preferred agent, particularly in infants.</li>
                  <li>• Treat early (during the catarrhal phase) to reduce symptom severity and transmission.</li>
                  <li>                  • Follow age-specific recommendations and local guidance
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-6">
              <h3 className="text-xl font-bold text-purple-950">
                Infection control and close contacts
              </h3>

              <ul className="mt-4 space-y-3 leading-7 text-purple-900">
                <li>• Use appropriate droplet precautions</li>
                <li>• Notify infection prevention or public health as required</li>
                <li>• Assess household and other close contacts</li>
                <li>
                  • Prioritize post-exposure prophylaxis for people at high risk
                  and those likely to expose them
                </li>
                <li>• Review and update pertussis vaccination when indicated</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Treatment expectation
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                Antibiotics are most effective when given early. Once the
                paroxysmal stage is established, the cough may continue for
                weeks despite successful eradication of the organism.
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
              Young infants deserve a low threshold for admission
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Disposition depends on age, respiratory stability, feeding, hydration,
              comorbidities, and the caregiver&apos;s ability to recognize deterioration.
              Infants younger than 3 months warrant particularly cautious assessment,
              with the greatest risk occurring in those younger than 2 months.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
                <h3 className="text-xl font-bold text-emerald-950">
                  Consider outpatient care
                </h3>

                <ul className="mt-5 space-y-4 leading-7 text-emerald-900">
                  <li>
                    • Infant at least 3 months old or older child with mild disease
                  </li>
                  <li>
                    • No apnea, cyanosis, bradycardia, or significant hypoxemia
                  </li>
                  <li>
                    • No meaningful respiratory distress between coughing episodes
                  </li>
                  <li>
                    • Adequate feeding and hydration
                  </li>
                  <li>
                    • No high-risk comorbidity or concerning laboratory findings
                  </li>
                  <li>
                    • Reliable caregivers, return precautions, and close follow-up
                  </li>
                </ul>

                <p className="mt-5 rounded-xl bg-emerald-100 p-4 text-sm leading-6 text-emerald-950">
                  Infants 3–6 months remain at increased risk. Age alone should not
                  override concerning symptoms or an unreliable examination.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
                <h3 className="text-xl font-bold text-amber-950">
                  Strongly consider admission
                </h3>

                <ul className="mt-5 space-y-4 leading-7 text-amber-900">
                  <li>
                    • Age younger than 3 months, especially younger than 2 months
                  </li>
                  <li>
                    • Apnea, cyanosis, bradycardia, or post-tussive heart-rate decrease
                  </li>
                  <li>
                    • Feeding difficulty, weight loss, or dehydration
                  </li>
                  <li>
                    • Hypoxemia, pneumonia, or significant respiratory distress
                  </li>
                  <li>
                    • Frequent, prolonged, or severe coughing paroxysms
                  </li>
                  <li>
                    • Marked leukocytosis with lymphocytosis
                  </li>
                  <li>
                    • Prematurity, cardiopulmonary disease, immunodeficiency, or
                    concerning viral coinfection
                  </li>
                  <li>
                    • Unsafe home observation or inability to ensure close follow-up
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-300 bg-rose-50 p-6">
                <h3 className="text-xl font-bold text-rose-950">
                  Escalate to intensive care
                </h3>

                <ul className="mt-5 space-y-4 leading-7 text-rose-900">
                  <li>
                    • Recurrent or prolonged apnea
                  </li>
                  <li>
                    • Respiratory failure or rapidly increasing respiratory support
                  </li>
                  <li>
                    • Severe or recurrent hypoxemia
                  </li>
                  <li>
                    • Hemodynamic instability
                  </li>
                  <li>
                    • Pulmonary hypertension
                  </li>
                  <li>
                    • Rapid clinical deterioration
                  </li>
                  <li>
                    • Marked leukocytosis with critical infant disease
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Clinical pearl
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                Young infants with pertussis may initially appear deceptively well, with
                only mild coryza or cough, before progressing to gagging, gasping,
                bradycardia, cyanosis, or apnea. A reassuring appearance early in the
                illness should not outweigh the patient&apos;s age, history, or observed
                events when deciding disposition.
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
              High-yield pertussis takeaways
            </h2>

            <div className="mt-7 grid gap-4">
              {[
                {
                  title: "The whoop may be absent",
                  description:
                    "Young infants may present with apnea, cyanosis, bradycardia, or feeding difficulty rather than a classic inspiratory whoop.",
                },
                {
                  title: "Minimal fever is a clue",
                  description:
                    "Prominent fever should prompt consideration of pneumonia, another infection, or a complication.",
                },
                {
                  title: "Post-tussive vomiting is highly suggestive",
                  description:
                    "Vomiting immediately after repetitive coughing spells is a classic clinical clue.",
                },
                {
                  title: "Vaccination modifies disease",
                  description:
                    "Vaccinated children and adults may still develop pertussis but often have less classic or less severe symptoms.",
                },
                {
                  title: "Late antibiotics do not immediately stop the cough",
                  description:
                    "Once toxin-mediated airway dysfunction and paroxysms are established, symptoms may persist even after bacterial eradication.",
                },
                {
                  title: "Protect vulnerable contacts",
                  description:
                    "Management includes the patient, infection control, contact assessment, prophylaxis decisions, and vaccination review.",
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
              Which finding most strongly suggests pertussis?
            </h2>

            <p className="mt-5 leading-8 text-purple-900">
              A 6-month-old has had a worsening cough for 12 days with little
              fever. Which additional finding would most strongly support the
              diagnosis of pertussis?
            </p>

            <div className="mt-6 grid gap-3">
              {quizAnswers.map((answer) => (
                <button
                  key={answer}
                  type="button"
                  onClick={() => setSelectedAnswer(answer)}
                  className={`rounded-2xl border px-5 py-4 text-left font-semibold transition ${selectedAnswer === answer
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
                      Repetitive coughing paroxysms followed by vomiting are
                      highly suggestive of pertussis, particularly when fever is
                      absent or minimal.
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
                title: "Centers for Disease Control and Prevention",
                href: "https://www.cdc.gov/pertussis/hcp/clinical-care/index.html",
                description:
                  "Clinical care guidance for treatment, postexposure prophylaxis, and management of pertussis.",
              },
              {
                title: "American Academy of Pediatrics",
                href: "https://publications.aap.org/aapbooks/monograph/756/chapter/14086744/Pertussis-Whooping-Cough",
                description:
                  "Red Book guidance for the diagnosis, treatment, prevention, and infection control of pertussis.",
              },
              {
                title: "Pediatrics in Review",
                href: "https://publications.aap.org/pediatricsinreview",
                description:
                  "Clinical review of pertussis presentation, pathophysiology, diagnosis, and management in children.",
              },
              {
                title: "PubMed",
                href: "https://pubmed.ncbi.nlm.nih.gov/?term=pertussis+infants+apnea+leukocytosis",
                description:
                  "Primary literature regarding severe pertussis in young infants, including apnea, leukocytosis, and cardiopulmonary complications.",
              },
            ]}
            secondarySources="UpToDate and OpenEvidence were used for educational verification and consistency checks where appropriate."
          />
        </div>
      </div>
    </main>
  );
}