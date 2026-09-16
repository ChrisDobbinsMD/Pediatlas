"use client";

import Link from "next/link";
import Image from "next/image";
import MobileSectionNav from "@/components/MobileSectionNav";
import {
  AnkiDeck,
  DiseaseSection,
  EvidenceBase,
  PearlCard,
  ProcessStep,
  ProgressiveQuiz,
} from "@/components/disease";

const clinicalPearls = [
  {
    title: "Bronchiolitis is a clinical diagnosis",
    description:
      "Typical bronchiolitis is diagnosed from the history and physical examination rather than routine laboratory testing or imaging.",
  },
  {
    title: "Supportive care is the foundation of treatment",
    description:
      "Management centers on respiratory assessment, hydration, nasal care, oxygen when indicated, and escalation of respiratory support when necessary.",
  },
  {
    title: "Use suctioning when it solves a problem",
    description:
      "Nasal suctioning is most useful when upper-airway secretions interfere with feeding or breathing rather than as an automatic scheduled intervention.",
  },
  {
    title: "Do not investigate a classic presentation routinely",
    description:
      "Chest radiography, respiratory viral testing, CBCs, and inflammatory markers are generally unnecessary in uncomplicated typical bronchiolitis.",
  },
  {
    title: "Wheezing does not automatically mean bronchodilators",
    description:
      "Routine albuterol, systemic corticosteroids, and antibiotics are not recommended for typical bronchiolitis because the predominant obstruction is caused by edema, mucus, and cellular debris.",
  },
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

const quizQuestions = [
  {
    question:
      "A comfortable 8-month-old with typical bronchiolitis has mild retractions, adequate feeding, diffuse wheezing and crackles, and an oxygen saturation of 95% on room air. What is the most appropriate next step?",
    answers: [
      {
        text: "Obtain a chest radiograph",
        correct: false,
        feedback:
          "Routine chest radiography is not recommended in a child with a typical, uncomplicated presentation of bronchiolitis.",
      },
      {
        text: "Administer routine albuterol",
        correct: false,
        feedback:
          "Routine bronchodilator therapy is not recommended for typical bronchiolitis because airway obstruction is driven predominantly by edema, mucus, and cellular debris rather than reversible bronchospasm.",
      },
      {
        text: "Provide supportive care and reassess",
        correct: true,
        feedback:
          "Correct. This infant has adequate oxygenation and feeding with only mild work of breathing. Supportive care and reassessment are appropriate.",
      },
      {
        text: "Start systemic corticosteroids",
        correct: false,
        feedback:
          "Systemic corticosteroids are not routinely recommended for typical bronchiolitis.",
      },
    ],
  },
  {
    question:
      "An infant with bronchiolitis has diffuse expiratory wheezing. Which mechanism best explains the wheezing in typical bronchiolitis?",
    answers: [
      {
        text: "Reversible bronchial smooth-muscle constriction is the primary abnormality",
        correct: false,
        feedback:
          "That mechanism is more characteristic of asthma. Bronchiolitis primarily affects the small bronchioles through inflammation, edema, mucus, and cellular debris.",
      },
      {
        text: "Bronchiolar edema, mucus, and cellular debris narrow the small airways",
        correct: true,
        feedback:
          "Correct. Narrowing of the bronchioles from edema, mucus, and cellular debris can generate expiratory wheezing even without asthma-like reversible bronchospasm.",
      },
      {
        text: "Pleural inflammation compresses the distal airways",
        correct: false,
        feedback:
          "Bronchiolitis localizes to the bronchioles rather than the pleural space.",
      },
      {
        text: "Pulmonary edema from left ventricular dysfunction narrows the bronchioles",
        correct: false,
        feedback:
          "Cardiogenic pulmonary edema is not the typical mechanism of airway obstruction in bronchiolitis.",
      },
    ],
  },
  {
    question:
      "A 6-month-old has a classic presentation of bronchiolitis with rhinorrhea, cough, diffuse crackles and wheezing, mild retractions, and no focal examination findings. Which diagnostic strategy is most appropriate?",
    answers: [
      {
        text: "Obtain a respiratory viral panel to confirm the diagnosis",
        correct: false,
        feedback:
          "Routine viral testing is generally unnecessary because bronchiolitis is primarily a clinical diagnosis and identifying a specific virus usually does not change management.",
      },
      {
        text: "Obtain a CBC and CRP to determine disease severity",
        correct: false,
        feedback:
          "Routine laboratory testing is not needed to diagnose or determine the severity of typical uncomplicated bronchiolitis.",
      },
      {
        text: "Obtain a chest radiograph to exclude pneumonia",
        correct: false,
        feedback:
          "Routine chest radiography is unnecessary in a typical presentation without focal findings or another reason to suspect an alternative diagnosis.",
      },
      {
        text: "Make a clinical diagnosis and assess respiratory and hydration status",
        correct: true,
        feedback:
          "Correct. Typical bronchiolitis is a clinical diagnosis. Evaluation should focus on respiratory severity, oxygenation, hydration, feeding, and risk factors for deterioration.",
      },
    ],
  },
  {
    question:
      "A 5-month-old hospitalized with bronchiolitis has copious nasal secretions and is struggling to feed because of nasal obstruction. Which intervention is most appropriate?",
    answers: [
      {
        text: "Targeted nasal suctioning before feeding",
        correct: true,
        feedback:
          "Correct. Gentle, targeted suctioning can be useful when nasal secretions interfere with breathing or feeding.",
      },
      {
        text: "Scheduled albuterol every 4 hours",
        correct: false,
        feedback:
          "Routine albuterol is not recommended for typical bronchiolitis.",
      },
      {
        text: "Systemic dexamethasone",
        correct: false,
        feedback:
          "Systemic corticosteroids are not routinely recommended for bronchiolitis.",
      },
      {
        text: "Empiric antibiotics",
        correct: false,
        feedback:
          "Antibiotics are not indicated unless there is evidence of a concomitant bacterial infection.",
      },
    ],
  },
  {
    question:
      "Which finding would most strongly favor hospital admission rather than discharge in an infant with bronchiolitis?",
    answers: [
      {
        text: "Diffuse wheezing with an oxygen saturation of 96% on room air and normal feeding",
        correct: false,
        feedback:
          "Wheezing alone does not determine disposition. A child with adequate oxygenation, feeding, and stable respiratory effort may be appropriate for outpatient care.",
      },
      {
        text: "Positive RSV testing with otherwise mild symptoms",
        correct: false,
        feedback:
          "The specific virus does not by itself determine disposition. Clinical severity and the child's ability to maintain oxygenation and hydration are more important.",
      },
      {
        text: "Persistent hypoxemia with worsening work of breathing and poor oral intake",
        correct: true,
        feedback:
          "Correct. Persistent hypoxemia, increasing respiratory distress, and inadequate oral intake are important reasons to consider hospitalization and supportive therapy.",
      },
      {
        text: "Cough and rhinorrhea for four days",
        correct: false,
        feedback:
          "Duration of typical respiratory symptoms alone is not an indication for admission.",
      },
    ],
  },
];

export default function BronchiolitisPage() {
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

        <MobileSectionNav
          sections={[
            { id: "vignette", label: "Clinical vignette" },
            { id: "localization", label: "Anatomy localization" },
            { id: "pathophysiology", label: "Pathophysiology" },
            { id: "assessment", label: "History and exam" },
            { id: "differential", label: "Differential" },
            { id: "workup", label: "Diagnostic workup" },
            { id: "management", label: "Management" },
            { id: "disposition", label: "Disposition" },
            { id: "pearls", label: "Clinical pearls" },
            { id: "quiz", label: "Quiz" },
          ]}
        />

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

          <DiseaseSection
            id="localization"
            label="Anatomy localization"
            title="The bronchioles"
          >
            <p className="mt-5 leading-8 text-slate-600">
              The disease localizes to the small, non-cartilaginous airways.
              Their narrow baseline diameter makes infants particularly
              vulnerable to obstruction from edema, mucus, and cellular debris.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                ["Edema", "Thickens the bronchiolar wall."],
                ["Mucus", "Narrows and plugs the airway lumen."],
                [
                  "Air trapping",
                  "Occurs when expiration is more limited than inspiration.",
                ],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="From viral infection to respiratory distress"
          >
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

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <ProcessStep
                number="1"
                title="Viral infection"
                description="A respiratory virus infects the bronchiolar epithelium."
              />

              <ProcessStep
                number="2"
                title="Inflammation and epithelial injury"
                description="The infected airway develops epithelial injury, inflammation, and bronchiolar wall edema."
              />

              <ProcessStep
                number="3"
                title="Mucus and cellular debris"
                description="Increased mucus production and sloughed epithelial cells further narrow the small-airway lumen."
              />

              <ProcessStep
                number="4"
                title="Small-airway obstruction"
                description="Edema, mucus, and debris produce partial or complete bronchiolar obstruction."
              />

              <ProcessStep
                number="5"
                title="Impaired ventilation"
                description="Air trapping, atelectasis, ventilation-perfusion mismatch, and increased work of breathing develop downstream."
              />
            </div>

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-amber-950">
                Why does bronchiolitis wheeze if it is not asthma?
              </h3>

              <p className="mt-3 leading-7 text-amber-900">
                Wheezing is a sign of narrowed airways, not a diagnosis of
                bronchospasm. In bronchiolitis, small-airway obstruction is
                driven predominantly by bronchiolar edema, mucus, and cellular
                debris. These narrowed airways can generate expiratory wheezing
                even without the reversible smooth-muscle bronchoconstriction
                characteristic of asthma.
              </p>

              <div className="mt-5 rounded-xl border border-amber-200 bg-white/70 p-4">
                <p className="font-semibold text-amber-950">
                  Clinical connection
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Albuterol relaxes bronchial smooth muscle but does not
                  directly remove mucus, cellular debris, or bronchiolar edema.
                  This helps explain why bronchodilators are not routinely
                  recommended for typical bronchiolitis.
                </p>
              </div>
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="assessment"
            label="History and physical exam"
            title="Assess severity, not just the diagnosis"
          >
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
          </DiseaseSection>

          <DiseaseSection
            id="differential"
            label="Differential diagnosis"
            title="What else could look like this?"
          >
            <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
              {[
                [
                  "Asthma or viral-induced wheeze",
                  "Recurrent episodes, prior response to bronchodilator, atopy, or older age.",
                ],
                [
                  "Pneumonia",
                  "Focal examination findings, persistent high fever, or toxic appearance.",
                ],
                [
                  "Foreign body aspiration",
                  "Abrupt onset, asymmetric air entry, focal wheeze, or choking history.",
                ],
                [
                  "Heart failure",
                  "Hepatomegaly, diaphoresis with feeds, poor growth, murmur, or cardiomegaly.",
                ],
                [
                  "Pertussis",
                  "Paroxysmal cough, apnea, post-tussive emesis, or minimal fever.",
                ],
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
          </DiseaseSection>

          <DiseaseSection
            id="workup"
            label="Diagnostic workup"
            title="Typical bronchiolitis requires very little testing"
          >
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
          </DiseaseSection>

          <DiseaseSection
            id="management"
            label="Management"
            title="Supportive care first"
          >
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {[
                [
                  "Nasal suctioning",
                  "Use gentle, targeted suctioning when secretions impair breathing or feeding.",
                ],
                [
                  "Hydration",
                  "Continue oral feeds when safe; consider enteral or intravenous support when intake is inadequate.",
                ],
                [
                  "Oxygen",
                  "Provide supplemental oxygen for persistent clinically significant hypoxemia according to local policy.",
                ],
                [
                  "Respiratory support",
                  "Escalate support when work of breathing, oxygenation, apnea, or fatigue worsens.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-amber-950">
                Oxygen threshold note
              </h3>

              <p className="mt-3 leading-7 text-amber-900">
                Many bronchiolitis guidelines use a persistent oxygen saturation
                below approximately 90% as a threshold for supplemental oxygen,
                but institutional policies and patient comorbidities may differ.
              </p>
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="Admit the child, not the pulse oximeter"
          >
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-xl font-bold text-amber-950">
                  Consider admission
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-amber-900">
                  <li>• Persistent hypoxemia</li>
                  <li>• Moderate or severe work of breathing</li>
                  <li>• Apnea, exhaustion, or altered responsiveness</li>
                  <li>• Inadequate feeding or dehydration</li>
                  <li>• High-risk age or underlying disease</li>
                  <li>• Unsafe home monitoring or limited follow-up</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="text-xl font-bold text-emerald-950">
                  Reasonable discharge
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-emerald-900">
                  <li>• Stable or improving respiratory effort</li>
                  <li>• Adequate oxygenation on room air</li>
                  <li>• Sufficient oral intake</li>
                  <li>• Caregiver can perform basic nasal care</li>
                  <li>• Clear return precautions</li>
                  <li>• Appropriate follow-up access</li>
                </ul>
              </div>
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="pearls"
            label="Clinical pearls"
            title="High-yield takeaways"
          >
            <div className="mt-7 grid gap-4">
              {clinicalPearls.map((pearl, index) => (
                <PearlCard
                  key={pearl.title}
                  number={index + 1}
                  title={pearl.title}
                >
                  {pearl.description}
                </PearlCard>
              ))}
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="quiz"
            label="Knowledge check"
            title="Test your bronchiolitis reasoning"
          >
            <ProgressiveQuiz questions={quizQuestions} />
          </DiseaseSection>

          <AnkiDeck
            title="Bronchiolitis"
            cardCount={16}
            downloadHref="/Anki/bronchiolitis.apkg"
          />

          <EvidenceBase
            references={[
              {
                title:
                  "American Academy of Pediatrics Clinical Practice Guideline",
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
