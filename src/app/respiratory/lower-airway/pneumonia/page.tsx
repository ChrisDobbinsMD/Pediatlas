"use client";

import Image from "next/image";
import { useState } from "react";

import MobileSectionNav from "@/components/MobileSectionNav";

import {
  AnkiDeck,
  DiseaseSection,
  EvidenceBase,
  InfoCard,
  PearlCard,
  ProcessStep,
  ProgressiveQuiz,
} from "@/components/disease";

const pageSections = [
  { id: "clinical-vignette", label: "Clinical vignette" },
  { id: "anatomy-localization", label: "Anatomy localization" },
  { id: "pathophysiology", label: "Pathophysiology" },
  { id: "history-and-exam", label: "History and exam" },
  { id: "differential", label: "Differential" },
  { id: "diagnostic-workup", label: "Diagnostic workup" },
  { id: "management", label: "Management" },
  { id: "complications", label: "Complications" },
  { id: "disposition", label: "Disposition" },
  { id: "clinical-pearls", label: "Clinical pearls" },
  { id: "quiz", label: "Quiz" },
];

const pneumoniaQuizQuestions = [
  {
    question:
      "A previously healthy 4-year-old has fever, cough, focal crackles, mild increased work of breathing, oxygen saturation 95% on room air, and is drinking adequately. Bacterial community-acquired pneumonia is suspected. What is the most appropriate initial antibiotic?",
    answers: [
      {
        text: "Oral amoxicillin",
        correct: true,
        feedback:
          "Amoxicillin is appropriate first-line outpatient therapy for uncomplicated suspected bacterial community-acquired pneumonia in an otherwise healthy, appropriately immunized child.",
      },
      {
        text: "Oral azithromycin",
        correct: false,
        feedback:
          "Azithromycin is generally reserved when an atypical pathogen is suspected rather than as routine first-line treatment for typical bacterial pneumonia.",
      },
      {
        text: "IV ceftriaxone",
        correct: false,
        feedback:
          "This child is clinically stable, oxygenating adequately, and tolerating oral intake, so routine parenteral therapy is not necessary.",
      },
      {
        text: "Oral clindamycin",
        correct: false,
        feedback:
          "Clindamycin is not routine first-line therapy for uncomplicated outpatient community-acquired pneumonia.",
      },
    ],
  },
  {
    question:
      "Which finding is most important when determining the severity and disposition of a child with pneumonia?",
    answers: [
      {
        text: "Degree of respiratory distress and oxygenation",
        correct: true,
        feedback:
          "Work of breathing and oxygenation directly reflect physiologic severity and are major factors in determining the appropriate care setting.",
      },
      {
        text: "Presence of focal crackles",
        correct: false,
        feedback:
          "Focal crackles may support the diagnosis but do not by themselves determine illness severity.",
      },
      {
        text: "Presence of fever",
        correct: false,
        feedback:
          "Fever is common in pneumonia but its presence alone does not determine the required level of care.",
      },
      {
        text: "Whether the radiograph shows a lobar opacity",
        correct: false,
        feedback:
          "Radiographic appearance should be interpreted with the clinical picture and does not replace physiologic severity assessment.",
      },
    ],
  },
  {
    question:
      "A child being treated appropriately for pneumonia has persistent fever and worsening respiratory distress. What should this clinical trajectory prompt?",
    answers: [
      {
        text: "Evaluation for complications or an alternative diagnosis",
        correct: true,
        feedback:
          "Failure to improve should prompt reassessment for complications such as parapneumonic effusion, empyema, necrosis, or abscess, as well as resistant pathogens or an alternative diagnosis.",
      },
      {
        text: "Automatic broadening of antibiotics without further evaluation",
        correct: false,
        feedback:
          "Treatment failure should trigger diagnostic reassessment rather than reflexive broadening of antimicrobial coverage.",
      },
      {
        text: "Reassurance that fever commonly persists regardless of treatment response",
        correct: false,
        feedback:
          "Persistent fever together with worsening respiratory distress represents an abnormal trajectory that warrants reassessment.",
      },
      {
        text: "Discontinuation of antimicrobial therapy",
        correct: false,
        feedback:
          "Worsening illness requires reassessment of the diagnosis, treatment, and possible complications rather than simply stopping therapy.",
      },
    ],
  },
  {
    question:
      "What is an important limitation of chest radiography in pediatric pneumonia?",
    answers: [
      {
        text: "It cannot reliably distinguish viral from bacterial pneumonia",
        correct: true,
        feedback:
          "Radiographic patterns overlap substantially, so chest radiography cannot reliably determine whether pneumonia is viral or bacterial.",
      },
      {
        text: "It cannot demonstrate pleural fluid",
        correct: false,
        feedback:
          "Chest radiography can demonstrate findings suggesting pleural fluid, although ultrasound can characterize pleural collections better.",
      },
      {
        text: "It cannot demonstrate focal air-space disease",
        correct: false,
        feedback:
          "Focal air-space opacities and consolidation can be visible on chest radiographs.",
      },
      {
        text: "It has no role when complications are suspected",
        correct: false,
        feedback:
          "Imaging can be useful when severe or complicated pneumonia is suspected, although additional modalities may be needed to characterize complications.",
      },
    ],
  },
  {
    question:
      "A child has repeated episodes of pneumonia involving the same lung region. What should this pattern raise concern for?",
    answers: [
      {
        text: "A localized structural or obstructive abnormality",
        correct: true,
        feedback:
          "Recurrent pneumonia in the same location should raise concern for localized problems such as airway obstruction, an aspirated foreign body, or a congenital anatomic abnormality.",
      },
      {
        text: "Normal susceptibility to sequential viral infections",
        correct: false,
        feedback:
          "Repeated disease in the same anatomic location is more concerning for a localized predisposing process than ordinary sequential infections.",
      },
      {
        text: "Atypical pneumonia as the sole explanation",
        correct: false,
        feedback:
          "An atypical pathogen does not by itself explain recurrent pneumonia repeatedly localized to the same region.",
      },
      {
        text: "Asthma as the only possible diagnosis",
        correct: false,
        feedback:
          "Asthma can cause recurrent respiratory symptoms but does not adequately explain recurrent radiographically localized pneumonia without further evaluation.",
      },
    ],
  },
];

export default function PneumoniaPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showQuizAnswer, setShowQuizAnswer] = useState(false);

  const correctAnswer = "amoxicillin";

  function handleQuizSubmit() {
    if (!selectedAnswer) return;
    setShowQuizAnswer(true);
  }

  function resetQuiz() {
    setSelectedAnswer(null);
    setShowQuizAnswer(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="border-b border-blue-100 bg-gradient-to-b from-sky-100 via-sky-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_auto]">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-3 text-sm font-semibold"
            >
              <a
                href="/"
                className="text-blue-700 transition hover:text-blue-900 hover:underline"
              >
                PediAtlas
              </a>

              <span className="text-slate-400">/</span>

              <a
                href="/respiratory"
                className="text-blue-700 transition hover:text-blue-900 hover:underline"
              >
                Respiratory
              </a>

              <span className="text-slate-400">/</span>

              <a
                href="/respiratory/lower-airway"
                className="text-blue-700 transition hover:text-blue-900 hover:underline"
              >
                Lower Airway
              </a>

              <span className="text-slate-400">/</span>

              <span className="text-slate-600" aria-current="page">
                Pneumonia
              </span>
            </nav>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-sky-700">
              Community-acquired lower respiratory tract infection
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-blue-950 sm:text-6xl">
              Pneumonia
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              An acute infection of the pulmonary parenchyma that produces
              inflammation within the alveoli and surrounding lung tissue,
              potentially impairing ventilation and gas exchange.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-800">
                Alveolar inflammation
              </span>

              <span className="rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-800">
                Impaired gas exchange
              </span>

              <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-800">
                Viral, bacterial, or atypical
              </span>
            </div>
          </div>

          <div
            className="text-center text-7xl lg:text-8xl"
            role="img"
            aria-label="Lungs"
          >
            🫁
          </div>
        </div>
      </section>
      <MobileSectionNav sections={pageSections} />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden lg:sticky lg:top-6 lg:block lg:self-start">
            <nav
              aria-label="Pneumonia page sections"
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                On this page
              </p>

              <div className="flex flex-col items-start gap-3">
                {pageSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm font-semibold text-blue-700 transition hover:text-blue-900 hover:underline"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </nav>
          </aside>
          <div className="min-w-0 space-y-10">
            {/* Clinical vignette */}
            <section
              id="clinical-vignette"
              className="scroll-mt-8 rounded-3xl border border-blue-900 bg-blue-950 p-6 text-white shadow-sm sm:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">
                Clinical vignette
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                A child with fever, cough, and focal lung findings
              </h2>

              <p className="mt-5 leading-8 text-blue-50">
                A previously healthy 4-year-old presents with 3 days of fever,
                cough, decreased appetite, and progressively faster breathing.
                Temperature is 39.2°C, respiratory rate is 44 breaths/minute,
                and oxygen saturation is 95% on room air.
              </p>

              <p className="mt-3 leading-8 text-blue-50">
                The child is alert, drinking small amounts, and has mild
                subcostal retractions. Auscultation reveals focal crackles and
                decreased breath sounds over the right lower lung field.
              </p>

              <div className="mt-7 rounded-2xl bg-white/15 p-5">
                <h3 className="font-bold text-sky-200">
                  Your first clinical task
                </h3>

                <p className="mt-2 leading-7 text-blue-50">
                  Assess illness severity and determine whether this child can
                  be treated safely as an outpatient while considering viral,
                  typical bacterial, and atypical causes of pneumonia.
                </p>
              </div>
            </section>

            {/* Anatomy & Localization */}
            <DiseaseSection
              id="anatomy-localization"
              label="Anatomy & Localization"
              title="Pneumonia involves the distal airways and gas-exchanging lung"
              description="Localize the infection to the lung parenchyma and understand how extension into adjacent structures produces complications."
            >
              <p className="text-lg leading-8 text-slate-600">
                Pneumonia primarily involves the{" "}
                <strong>
                  distal airways, alveoli, and pulmonary interstitium
                </strong>
                . In bacterial pneumonia, inflammatory material may fill
                alveolar spaces and produce consolidation. Viral infections more
                commonly create diffuse or patchy inflammation, although
                clinical and radiographic patterns frequently overlap.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <InfoCard title="Alveoli" tone="blue">
                  <p>
                    Inflammatory cells, protein-rich fluid, and cellular debris
                    may replace air within affected alveoli.
                  </p>
                </InfoCard>

                <InfoCard title="Interstitium" tone="blue">
                  <p>
                    Inflammation may involve the supporting tissue surrounding
                    alveoli and small airways.
                  </p>
                </InfoCard>

                <InfoCard title="Pleural space" tone="blue">
                  <p>
                    Extension beyond the lung parenchyma may produce a
                    parapneumonic effusion or empyema.
                  </p>
                </InfoCard>
              </div>
            </DiseaseSection>

            {/* Pathophysiology */}
            <DiseaseSection
              id="pathophysiology"
              label="Pathophysiology"
              title="Infection triggers inflammation, alveolar filling, and impaired gas exchange"
              description="Follow the progression from pathogen entry to inflammatory injury and understand how viral, typical bacterial, and atypical pneumonia can overlap clinically."
            >
              <p className="leading-7 text-slate-700">
                Pneumonia develops when a pathogen reaches the lower respiratory
                tract and overcomes normal host defenses, including mucociliary
                clearance, cough, airway immune responses, and alveolar
                macrophages.
              </p>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/images/pneumonia-pathophysiology.png"
                  alt="Pneumonia pathophysiology demonstrating progression from normal alveoli to alveolar inflammation, exudate formation, consolidation, and impaired gas exchange."
                  width={1600}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Pathophysiologic cascade
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  The bedside findings of pneumonia follow from inflammation and
                  impaired ventilation of affected lung.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <ProcessStep
                  number="1"
                  title="Pathogen reaches the distal lung"
                  description="Viruses or bacteria enter the lower respiratory tract and overcome local airway and alveolar host defenses."
                />

                <ProcessStep
                  number="2"
                  title="The inflammatory response begins"
                  description="Resident immune cells recognize infection and recruit additional inflammatory cells, producing local edema and inflammatory injury."
                />

                <ProcessStep
                  number="3"
                  title="Air spaces become poorly ventilated"
                  description="Inflammatory cells, fluid, and cellular debris can accumulate within affected alveoli. In bacterial pneumonia, extensive alveolar filling may produce consolidation."
                />

                <ProcessStep
                  number="4"
                  title="Gas exchange becomes impaired"
                  description="Perfusion of poorly ventilated lung creates ventilation-perfusion mismatch, contributing to hypoxemia, tachypnea, and increased work of breathing."
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Etiologic patterns
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  These patterns can guide clinical reasoning, but substantial
                  overlap prevents reliable determination of etiology from any
                  single clinical or radiographic feature.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <ComparisonCard
                  title="Viral"
                  items={[
                    "Often affects younger children",
                    "May produce diffuse or patchy inflammation",
                    "Frequently accompanied by upper respiratory symptoms",
                    "Antibiotics do not treat the viral infection",
                  ]}
                />

                <ComparisonCard
                  title="Typical bacterial"
                  items={[
                    "Streptococcus pneumoniae is the most common bacterial cause",
                    "May present with abrupt fever and focal findings",
                    "Can produce alveolar consolidation",
                    "May progress to pleural complications",
                  ]}
                />

                <ComparisonCard
                  title="Atypical"
                  items={[
                    "More common in school-aged children and adolescents",
                    "Often associated with persistent cough",
                    "Mycoplasma pneumoniae and Chlamydia pneumoniae are common considerations",
                    "Clinical findings may be more diffuse",
                  ]}
                />
              </div>
            </DiseaseSection>

            {/* History and examination */}
            <DiseaseSection
              id="history-and-exam"
              label="History & Physical"
              title="Assess the child before trying to name the pathogen"
              description="Severity is driven by respiratory status, oxygenation, hydration, perfusion, mental status, and the overall clinical trajectory."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard title="1. Does this fit pneumonia?" tone="blue">
                  <ul className="space-y-2 leading-7">
                    <li>• Fever and cough: onset, duration, and progression</li>
                    <li>• Tachypnea or increasing work of breathing</li>
                    <li>• Chest pain or exercise intolerance</li>
                    <li>
                      • Focal crackles, bronchial breath sounds, or decreased
                      air entry
                    </li>
                    <li>
                      • Remember that lower lobe disease may present with
                      abdominal pain
                    </li>
                  </ul>
                </InfoCard>

                <InfoCard title="2. How sick is the child?" tone="rose">
                  <ul className="space-y-2 leading-7">
                    <li>• General appearance and interaction</li>
                    <li>• Respiratory rate measured while calm</li>
                    <li>• Pulse oximetry</li>
                    <li>
                      • Retractions, nasal flaring, grunting, or head bobbing
                    </li>
                    <li>• Oral intake, urine output, and hydration</li>
                    <li>• Perfusion and mental status</li>
                  </ul>
                </InfoCard>

                <InfoCard title="3. What changes the risk?" tone="amber">
                  <ul className="space-y-2 leading-7">
                    <li>• Age and immunization status</li>
                    <li>• Recent viral illness or sick contacts</li>
                    <li>• Recent antibiotics or hospitalization</li>
                    <li>• Aspiration risk or neurologic impairment</li>
                    <li>• Tuberculosis exposure or relevant travel</li>
                    <li>• Underlying cardiac, pulmonary, or immune disease</li>
                  </ul>
                </InfoCard>

                <InfoCard
                  title="4. Could this already be complicated?"
                  tone="rose"
                >
                  <ul className="space-y-2 leading-7">
                    <li>• Significant or worsening respiratory distress</li>
                    <li>• Markedly asymmetric or decreased breath sounds</li>
                    <li>• Pleuritic chest pain</li>
                    <li>
                      • Persistent fever or worsening after initial improvement
                    </li>
                    <li>
                      • Toxic appearance, poor perfusion, or altered mental
                      status
                    </li>
                  </ul>
                </InfoCard>
              </div>

              <ClinicalAlert
                title="Do not rely on auscultation alone"
                tone="amber"
              >
                Children may have pneumonia without classic focal crackles.
                Respiratory rate, oxygen saturation, work of breathing,
                hydration, perfusion, mental status, and overall appearance are
                more important when determining physiologic severity.
              </ClinicalAlert>

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Etiologic clues
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Age and clinical pattern can influence the differential, but
                  substantial overlap means no single symptom, examination
                  finding, or radiographic pattern reliably identifies the
                  pathogen.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100">
                      <th className="p-4 font-bold text-blue-950">Pattern</th>
                      <th className="p-4 font-bold text-blue-950">
                        Common clues
                      </th>
                      <th className="p-4 font-bold text-blue-950">
                        Important caution
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold">Viral</td>
                      <td className="p-4">
                        Rhinorrhea, diffuse findings, wheezing, gradual onset
                      </td>
                      <td className="p-4">
                        Viral and bacterial infection can coexist
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200">
                      <td className="p-4 font-semibold">Typical bacterial</td>
                      <td className="p-4">
                        Higher fever, focal crackles, focal decreased air entry
                      </td>
                      <td className="p-4">
                        No single symptom or examination finding confirms
                        bacterial disease
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold">Atypical</td>
                      <td className="p-4">
                        School age, persistent cough, headache, malaise
                      </td>
                      <td className="p-4">
                        Presentation may overlap substantially with viral
                        disease
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DiseaseSection>

            {/* Differential */}
            <DiseaseSection
              id="differential"
              label="Differential Diagnosis"
              title="Not every fever, cough, and focal lung finding is pneumonia"
              description="Use the history, examination, age, risk factors, and illness trajectory to distinguish pneumonia from important mimics."
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                {[
                  {
                    diagnosis: "Viral bronchiolitis",
                    clues:
                      "Young infant with a viral prodrome, diffuse crackles or wheezing, and more generalized rather than persistent focal lung findings.",
                  },
                  {
                    diagnosis: "Asthma or viral-induced wheeze",
                    clues:
                      "Recurrent episodes, atopic history, prolonged expiration, diffuse wheezing, or previous improvement with bronchodilator therapy.",
                  },
                  {
                    diagnosis: "Foreign body aspiration",
                    clues:
                      "Abrupt onset after choking with unilateral wheezing or asymmetric air entry should prompt reconsideration of an infectious diagnosis.",
                  },
                  {
                    diagnosis: "Atelectasis",
                    clues:
                      "Can mimic focal pneumonia clinically and radiographically, particularly with mucus plugging or airway obstruction.",
                  },
                  {
                    diagnosis: "Aspiration",
                    clues:
                      "Consider swallowing dysfunction, neurologic impairment, impaired airway protection, recurrent episodes, or a clear aspiration event.",
                  },
                  {
                    diagnosis: "Pulmonary edema / heart failure",
                    clues:
                      "Cardiac disease, hepatomegaly, edema, feeding intolerance, poor growth, or diffuse bilateral pulmonary findings suggest a cardiogenic process.",
                  },
                  {
                    diagnosis: "Tuberculosis",
                    clues:
                      "A prolonged course, weight loss, persistent cough, known exposure, travel, or other epidemiologic risk should broaden the infectious differential.",
                  },
                  {
                    diagnosis: "Pulmonary embolism",
                    clues:
                      "Rare in children, but consider with pleuritic symptoms, unexplained hypoxemia, and important venous thromboembolism risk factors.",
                  },
                  {
                    diagnosis: "Malignancy or structural lesion",
                    clues:
                      "Persistent focal opacity or recurrent pneumonia in the same anatomic location should prompt evaluation for an obstructing or structural process.",
                  },
                ].map(({ diagnosis, clues }) => (
                  <div
                    key={diagnosis}
                    className="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[220px_1fr]"
                  >
                    <p className="font-bold text-slate-950">{diagnosis}</p>
                    <p className="leading-7 text-slate-600">{clues}</p>
                  </div>
                ))}
              </div>

              <ClinicalAlert
                title="Reconsider the diagnosis when the pattern does not fit"
                tone="amber"
              >
                Abrupt onset, recurrent disease in the same location, persistent
                focal abnormalities, an unexpected clinical trajectory, or
                failure to improve should prompt reassessment for an alternative
                diagnosis, an underlying predisposition, or a complication of
                pneumonia.
              </ClinicalAlert>
            </DiseaseSection>

            {/* Diagnostic workup */}
            <DiseaseSection
              id="diagnostic-workup"
              label="Diagnostic Workup"
              title="Testing should answer a clinical question"
              description="Uncomplicated pneumonia is often a clinical diagnosis. Escalate testing when severity, uncertainty, treatment failure, underlying disease, or suspected complications make the result actionable."
            >
              <div className="grid gap-5 lg:grid-cols-2">
                <InfoCard
                  title="When less testing is usually more"
                  tone="emerald"
                >
                  <p className="leading-7">
                    A well-appearing child with uncomplicated suspected
                    pneumonia who is oxygenating adequately and can be safely
                    treated as an outpatient usually does not need extensive
                    diagnostic testing.
                  </p>

                  <ul className="mt-4 space-y-2 leading-7">
                    <li>• Measure vital signs and oxygen saturation</li>
                    <li>• Routine chest radiography is usually unnecessary</li>
                    <li>
                      • Routine CBC and inflammatory markers are usually
                      unnecessary
                    </li>
                    <li>
                      • Routine blood culture has low yield in uncomplicated
                      disease
                    </li>
                    <li>
                      • Viral testing is most useful when the result changes
                      management
                    </li>
                  </ul>
                </InfoCard>

                <InfoCard
                  title="When additional testing becomes useful"
                  tone="amber"
                >
                  <p className="leading-7">
                    Testing becomes more valuable when the result could change
                    treatment, disposition, or the evaluation for complications.
                  </p>

                  <ul className="mt-4 space-y-2 leading-7">
                    <li>• Hypoxemia or significant respiratory distress</li>
                    <li>• Toxic appearance or concern for sepsis</li>
                    <li>• Hospitalization or significant underlying disease</li>
                    <li>• Diagnostic uncertainty</li>
                    <li>• Failure to improve as expected</li>
                    <li>• Suspected pleural or parenchymal complication</li>
                  </ul>
                </InfoCard>
              </div>

              <ClinicalAlert title="Diagnostic stewardship" tone="blue">
                Do not ask whether a test is routinely obtained for pneumonia.
                Ask what clinical question the test will answer and whether the
                result could change management.
              </ClinicalAlert>

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Choosing the right test
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Different tests answer different questions. None should be
                  used in isolation to determine the microbial cause of
                  pneumonia.
                </p>
              </div>

              <div className="mt-7 overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100">
                      <th className="p-4 font-bold text-blue-950">Test</th>
                      <th className="p-4 font-bold text-blue-950">
                        When it may help
                      </th>
                      <th className="p-4 font-bold text-blue-950">
                        Limitation
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <DiagnosticRow
                      test="Pulse oximetry"
                      use="Assess severity and need for respiratory support"
                      limitation="A normal value does not exclude pneumonia"
                    />

                    <DiagnosticRow
                      test="Chest radiograph"
                      use="Hypoxemia, significant distress, admission, failed treatment, or suspected complication"
                      limitation="Cannot reliably determine viral versus bacterial etiology"
                    />

                    <DiagnosticRow
                      test="Lung ultrasound"
                      use="Evaluate suspected consolidation or pleural fluid"
                      limitation="Operator dependent"
                    />

                    <DiagnosticRow
                      test="CBC / CRP / procalcitonin"
                      use="May support assessment of severe or complicated illness"
                      limitation="Cannot independently distinguish bacterial from viral pneumonia"
                    />

                    <DiagnosticRow
                      test="Blood culture"
                      use="Severe disease, toxic appearance, complicated pneumonia, or selected hospitalized patients"
                      limitation="Low yield in uncomplicated disease"
                    />

                    <DiagnosticRow
                      test="Chest CT"
                      use="Selected cases with unclear anatomy, necrosis, abscess, mass, or persistent disease"
                      limitation="Radiation exposure; not routine"
                    />
                  </tbody>
                </table>
              </div>

              <ClinicalAlert title="Imaging pearl" tone="blue">
                Do not obtain a chest radiograph solely to prove pneumonia in a
                well-appearing child who can be safely treated as an outpatient.
                Imaging becomes more valuable when the diagnosis is uncertain,
                the child is significantly ill, or a complication is suspected.
              </ClinicalAlert>
            </DiseaseSection>

            {/* Management */}
            <DiseaseSection
              id="management"
              label="Management"
              title="Treat the child, the likely pathogen, and the severity"
              description="Supportive care and antimicrobial decisions should reflect suspected etiology, illness severity, immunization status, comorbidities, local resistance patterns, and the ability to tolerate oral therapy."
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Start with physiology
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Stabilization comes before antimicrobial refinement. Address
                  hypoxemia, respiratory distress, hydration, perfusion, and
                  clinical deterioration while deciding whether bacterial
                  infection is likely enough to warrant antibiotics.
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <InfoCard title="Support the child" tone="blue">
                  <ul className="space-y-2 leading-7">
                    <li>• Provide oxygen when hypoxemic</li>
                    <li>
                      • Escalate respiratory support based on work of breathing
                    </li>
                    <li>
                      • Maintain hydration with oral or IV fluids as appropriate
                    </li>
                    <li>• Use antipyretics for comfort</li>
                    <li>
                      • Use nasal suctioning in younger children when helpful
                    </li>
                    <li>• Reassess frequently for clinical deterioration</li>
                  </ul>
                </InfoCard>

                <InfoCard
                  title="Decide whether antibiotics are needed"
                  tone="amber"
                >
                  <ul className="space-y-2 leading-7">
                    <li>
                      • Avoid antibiotics when viral pneumonia is strongly
                      favored
                    </li>
                    <li>
                      • When bacterial CAP is suspected, use the narrowest
                      effective agent
                    </li>
                    <li>
                      • Consider age, immunization status, severity, and
                      resistance risk
                    </li>
                    <li>
                      • Adjust therapy when microbiologic data are clinically
                      meaningful
                    </li>
                    <li>
                      • Transition from IV to oral therapy when clinically
                      appropriate
                    </li>
                    <li>
                      • Reassess the diagnosis and complications when
                      improvement does not occur as expected
                    </li>
                  </ul>
                </InfoCard>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Choose empiric therapy by clinical setting
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  The appropriate empiric regimen changes with the suspected
                  etiology, severity of illness, treatment setting, and
                  patient-specific risk factors.
                </p>
              </div>

              <div className="mt-7 overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100">
                      <th className="p-4 font-bold text-blue-950">
                        Clinical situation
                      </th>
                      <th className="p-4 font-bold text-blue-950">
                        Common approach
                      </th>
                      <th className="p-4 font-bold text-blue-950">
                        Key consideration
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <ManagementRow
                      situation="Suspected viral CAP"
                      approach="Supportive care without routine antibacterial therapy"
                      consideration="Respiratory viruses cause most CAP in young children; antibiotics are not indicated when bacterial infection is not suspected"
                    />

                    <ManagementRow
                      situation="Uncomplicated outpatient bacterial CAP"
                      approach="Oral amoxicillin"
                      consideration="Provides narrow-spectrum therapy targeting S. pneumoniae; confirm allergy history, local guidance, and reliable follow-up"
                    />

                    <ManagementRow
                      situation="Hospitalized uncomplicated bacterial CAP"
                      approach="IV ampicillin for most fully immunized children when local pneumococcal susceptibility supports its use"
                      consideration="Avoid unnecessarily broad therapy; broaden when resistance risk, immunization status, severity, or other clinical factors warrant it"
                    />

                    <ManagementRow
                      situation="Suspected atypical pneumonia"
                      approach="Add or use a macrolide when an atypical pathogen is clinically suspected"
                      consideration="Most relevant in school-aged children and adolescents; clinical findings alone do not reliably establish Mycoplasma infection"
                    />

                    <ManagementRow
                      situation="Concern for MRSA pneumonia"
                      approach="Add MRSA-active therapy according to local guidance"
                      consideration="Consider especially with severe disease, compatible complications, or S. aureus superinfection following influenza"
                    />

                    <ManagementRow
                      situation="Complicated pneumonia"
                      approach="IV antimicrobial therapy plus evaluation for source control when indicated"
                      consideration="Effusion size, respiratory compromise, purulence, microbiology, and local pathways help determine whether pleural drainage is required"
                    />
                  </tbody>
                </table>
              </div>

              <ClinicalAlert title="Treatment duration" tone="amber">
                Five days is appropriate for many children with uncomplicated
                CAP who demonstrate clinical improvement, including resolution
                of fever, tachypnea, and supplemental oxygen requirement. Longer
                courses may be required for empyema, necrotizing pneumonia,
                pulmonary abscess, or an inadequate clinical response. Final
                agent, dose, route, and duration should follow patient-specific
                factors, local susceptibility patterns, and institutional
                guidance.
              </ClinicalAlert>
            </DiseaseSection>

            {/* Complications */}
            <DiseaseSection
              id="complications"
              label="Complications"
              title="Failure to improve should trigger a search for complicated pneumonia"
              description="Persistent fever, worsening respiratory status, significant unilateral findings, chest pain, or an unexpected clinical trajectory should prompt reassessment for pleural or parenchymal complications."
            >
              <p className="leading-7 text-slate-700">
                Complicated pneumonia should move the learner from simply asking
                &ldquo;Which antibiotic?&rdquo; to asking what has changed
                anatomically. Pleural fluid, organized infection, and
                parenchymal destruction can alter both imaging strategy and
                management.
              </p>

              <div className="grid gap-5 lg:grid-cols-3">
                <ComplicationCard
                  title="Parapneumonic effusion"
                  description="Inflammatory fluid accumulates in the pleural space adjacent to pneumonia."
                  clues={[
                    "Persistent or worsening fever",
                    "Decreased breath sounds",
                    "Dullness to percussion",
                    "Increasing respiratory distress",
                  ]}
                />

                <ComplicationCard
                  title="Empyema"
                  description="Pleural infection progresses to purulent or increasingly organized inflammatory material."
                  clues={[
                    "Persistent systemic illness",
                    "Loculated or septated pleural fluid",
                    "Respiratory compromise",
                    "Failure to improve with antibiotics alone",
                  ]}
                />

                <ComplicationCard
                  title="Necrotizing pneumonia"
                  description="Severe parenchymal inflammation causes tissue destruction, necrosis, and cavitation."
                  clues={[
                    "Severe or prolonged illness",
                    "Persistent fever despite therapy",
                    "Cavitary parenchymal changes",
                    "Associated complicated pleural disease",
                  ]}
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Choose imaging based on the question
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Imaging should escalate with the clinical question rather than
                  simply with disease severity.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <InfoCard title="Chest radiograph" tone="blue">
                  <p className="leading-7">
                    Useful for identifying air-space disease and suggesting a
                    pleural effusion when complicated pneumonia is suspected.
                  </p>
                </InfoCard>

                <InfoCard title="Chest ultrasound" tone="emerald">
                  <p className="leading-7">
                    Best suited to characterizing pleural fluid, including its
                    size, complexity, septations, and loculations, without
                    ionizing radiation.
                  </p>
                </InfoCard>

                <InfoCard title="Chest CT" tone="amber">
                  <p className="leading-7">
                    Reserve for selected cases when detailed evaluation of
                    parenchymal destruction, cavitation, anatomy, or another
                    complication will change management.
                  </p>
                </InfoCard>
              </div>

              {/* Complicated pneumonia imaging gallery */}
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
                  Imaging gallery
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  Imaging findings in complicated pneumonia
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  These examples demonstrate findings that may be seen with
                  complicated pneumonia. Imaging findings are supportive rather
                  than diagnostic in isolation because multiple pulmonary
                  processes can produce similar appearances. Imaging should
                  always be interpreted alongside the history, physical
                  examination, laboratory findings, and clinical course.
                </p>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  <ImagingCard
                    src="/images/pleural-effusion-cxr.png"
                    alt="Chest radiograph demonstrating pleural effusion with blunting of the costophrenic angle and a meniscus sign."
                    title="Parapneumonic pleural effusion"
                    modality="Chest radiograph"
                    description="Pleural fluid produces an upward-curving meniscus and blunting of the costophrenic angle adjacent to basilar airspace disease."
                    credit="Radiopaedia Case: Pleural Effusion (Case 7)"
                  />

                  <ImagingCard
                    src="/images/parapneumonic-effusion-us-fix.png"
                    alt="Chest ultrasound demonstrating septations and loculations within pleural fluid."
                    title="Complicated parapneumonic effusion / empyema"
                    modality="Chest ultrasound"
                    description="Internal echoes, septations, and loculations suggest an organized pleural infection and may influence drainage planning."
                    credit="Radiopaedia Case: Thoracic Empyema (Case 8)"
                  />

                  <ImagingCard
                    src="/images/ct-pulmonary-cavitation.png"
                    alt="Chest CT demonstrating multiple cavitary lesions within consolidated lung."
                    title="Necrotizing pneumonia"
                    modality="Chest CT"
                    description="Multiple cavities embedded within consolidated lung suggest pulmonary necrosis and destruction of normal architecture."
                    credit="Radiopaedia Case: Cavitating Pneumonia (Case 3)"
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5">
                  <h4 className="font-bold text-amber-900">
                    Imaging is one piece of the clinical picture
                  </h4>

                  <p className="mt-2 leading-7 text-amber-900">
                    Similar imaging findings may occur with infectious,
                    inflammatory, congenital, and neoplastic processes. Imaging
                    should be used to answer a focused clinical question and
                    interpreted within the broader clinical context.
                  </p>
                </div>
              </div>
              <div className="mt-7 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                <h3 className="font-bold text-indigo-950">
                  Evaluating pleural fluid
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  Chest ultrasound is particularly useful for confirming pleural
                  fluid, estimating its size, and identifying septations or
                  loculations. Management ranges from antibiotics and
                  observation to drainage with a chest tube, fibrinolytic
                  therapy, or surgery, depending on respiratory compromise and
                  the character and size of the collection.
                </p>
              </div>
            </DiseaseSection>

            {/* Disposition */}
            <DiseaseSection
              id="disposition"
              label="Disposition"
              title="Match the care setting to physiologic severity"
              description="Oxygen requirement, work of breathing, hydration, perfusion, mental status, complications, underlying disease, and reliable follow-up determine where treatment can occur safely."
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Think in terms of required support
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Disposition is not determined by the diagnosis of pneumonia
                  itself. Choose the care setting based on the respiratory,
                  hydration, monitoring, and treatment support the child
                  requires.
                </p>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                <DispositionCard
                  title="Consider discharge"
                  tone="green"
                  items={[
                    "Well appearing",
                    "No significant hypoxemia",
                    "Minimal work of breathing",
                    "Tolerating oral fluids and medication",
                    "Reliable caregivers and follow-up",
                    "No concerning complication",
                  ]}
                />

                <DispositionCard
                  title="Consider admission"
                  tone="yellow"
                  items={[
                    "Persistent oxygen requirement",
                    "Moderate or worsening respiratory distress",
                    "Inability to maintain hydration",
                    "Toxic appearance or concern for sepsis",
                    "Failed outpatient therapy",
                    "Complicated pneumonia",
                    "High-risk underlying condition",
                    "Unsafe or unreliable follow-up",
                  ]}
                />

                <DispositionCard
                  title="Consider ICU care"
                  tone="red"
                  items={[
                    "Escalating oxygen requirement",
                    "Need for noninvasive or invasive ventilation",
                    "Apnea or exhaustion",
                    "Altered mental status",
                    "Hemodynamic instability",
                    "Severe sepsis or organ dysfunction",
                  ]}
                />
              </div>

              <ClinicalAlert title="Trajectory matters" tone="rose">
                A single reassuring measurement should not outweigh a worsening
                clinical course. Escalating oxygen requirement, increasing work
                of breathing, worsening perfusion or mental status, inability to
                maintain hydration, or progressive complications should prompt
                reassessment of the level of care.
              </ClinicalAlert>

              <div className="mt-7 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <h3 className="font-bold text-sky-950">Return precautions</h3>

                <ul className="mt-3 space-y-2 leading-7 text-slate-700">
                  <li>• Increasing work of breathing</li>
                  <li>• Cyanosis, apnea, or abnormal sleepiness</li>
                  <li>
                    • Inability to drink or markedly decreased urine output
                  </li>
                  <li>• Persistent vomiting</li>
                  <li>• Worsening fever or clinical condition</li>
                  <li>
                    • Failure to begin improving within the expected timeframe
                  </li>
                </ul>
              </div>
            </DiseaseSection>

            {/* Clinical pearls */}
            <DiseaseSection
              id="clinical-pearls"
              label="Clinical Pearls"
              title="High-yield lessons to carry forward"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <PearlCard
                  number={1}
                  title="Severity beats a single exam finding"
                >
                  Tachypnea, hypoxemia, work of breathing, hydration, and
                  overall appearance are more useful than any single
                  auscultatory finding.
                </PearlCard>

                <PearlCard
                  number={2}
                  title="The chest X-ray cannot name the pathogen"
                >
                  A chest radiograph cannot reliably distinguish viral from
                  bacterial pneumonia.
                </PearlCard>

                <PearlCard
                  number={3}
                  title="Not every pneumonia needs antibiotics"
                >
                  Preschool children commonly have viral pneumonia and may not
                  benefit from antibiotics when bacterial infection is not
                  suspected.
                </PearlCard>

                <PearlCard number={4} title="Remember the abdomen">
                  Focal abdominal pain can be the presenting complaint of lower
                  lobe pneumonia.
                </PearlCard>

                <PearlCard
                  number={5}
                  title="Wheezing does not exclude pneumonia"
                >
                  Wheezing does not exclude pneumonia, especially with viral or
                  atypical infection.
                </PearlCard>

                <PearlCard
                  number={6}
                  title="Failure to improve is a diagnostic clue"
                >
                  Persistent fever or respiratory distress despite appropriate
                  therapy should trigger evaluation for an effusion, empyema,
                  necrosis, abscess, resistant pathogen, or alternate diagnosis.
                </PearlCard>

                <PearlCard
                  number={7}
                  title="Location matters in recurrent pneumonia"
                >
                  Recurrent pneumonia in the same location raises concern for an
                  anatomic obstruction, aspirated foreign body, congenital
                  lesion, or localized airway abnormality.
                </PearlCard>

                <PearlCard
                  number={8}
                  title="Reassess before broadening antibiotics"
                >
                  Avoid automatically escalating to broad-spectrum antibiotics
                  without reassessing the diagnosis and looking for
                  complications.
                </PearlCard>
              </div>
            </DiseaseSection>

            {/* Quiz */}
            <DiseaseSection
              id="quiz"
              label="Knowledge Check"
              title="Can you manage the child—not just recognize pneumonia?"
              description="Apply severity assessment, diagnostic stewardship, and antimicrobial reasoning to a child with suspected community-acquired pneumonia."
            >
              <ProgressiveQuiz questions={pneumoniaQuizQuestions} />
            </DiseaseSection>

            <AnkiDeck
              title="Pneumonia Anki Deck"
              cardCount={16}
              downloadHref="/Anki/pneumonia.apkg"
            />
            {/* Sources */}
            <EvidenceBase
              references={[
                {
                  title:
                    "IDSA/PIDS 2026 Guidelines for the Management of Community-Acquired Pneumonia in Infants and Children Older Than 3 Months of Age",
                  href: "https://www.idsociety.org/~/link/018511fd86374a4ca01c5a77e570757c.aspx",
                  description:
                    "Current PIDS/IDSA guideline update addressing pediatric pneumonia complicated by parapneumonic effusion or empyema, including imaging and drainage decisions.",
                },
                {
                  title:
                    "AAP Red Book 2024–2027: Systems-Based Treatment Table",
                  href: "https://publications.aap.org/redbook/book/755/chapter/14074070/Systems-Based-Treatment-Table",
                  description:
                    "Current AAP antimicrobial guidance for pediatric community-acquired pneumonia, including empiric therapy, atypical and MRSA coverage, oral transition, and treatment duration.",
                },
                {
                  title:
                    "The Management of Community-Acquired Pneumonia in Infants and Children Older Than 3 Months of Age",
                  href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7107838/",
                  description:
                    "Foundational 2011 PIDS/IDSA pediatric CAP guideline. Retained for topics not yet replaced by the focused 2026 guideline update.",
                },
                {
                  title:
                    "Texas Children's Hospital: Community-Acquired Pneumonia Guideline",
                  href: "https://www.texaschildrens.org/sites/tc/files/uploads/documents/outcomes/2024%20standards/CAP%20Guideline%20FINAL.pdf",
                  description:
                    "Institutional evidence-based guideline for the evaluation and management of pediatric community-acquired pneumonia.",
                },
                {
                  title: "American Academy of Pediatrics: Pneumonia",
                  href: "https://publications.aap.org/pediatriccare/article/doi/10.1542/aap.ppcqr.396216/97/Pneumonia",
                  description:
                    "AAP Pediatric Care Online clinical overview of pneumonia in children.",
                },
                {
                  title: "World Health Organization: Pneumonia in Children",
                  href: "https://www.who.int/news-room/fact-sheets/detail/pneumonia",
                  description:
                    "Global epidemiology, prevention, risk factors, and public-health overview of childhood pneumonia.",
                },
              ]}
            />
          </div>{" "}
          {/* main content column */}
        </div>{" "}
        {/* grid */}
      </div>{" "}
      {/* max-width container */}
    </main>
  );
}

function ImagingCard({
  src,
  alt,
  title,
  modality,
  description,
  credit,
}: {
  src: string;
  alt: string;
  title: string;
  modality: string;
  description: string;
  credit: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-black">
        <a href={src} target="_blank" rel="noreferrer">
          <img
            src={src}
            alt={alt}
            className="h-auto w-full cursor-zoom-in object-contain transition hover:opacity-95"
          />
        </a>
      </div>

      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-sky-700">
          {modality}
        </p>

        <h4 className="mt-2 text-lg font-bold text-blue-950">{title}</h4>

        <p className="mt-3 leading-7 text-slate-700">{description}</p>

        <p className="mt-4 text-xs text-slate-500">{credit}</p>
      </div>
    </div>
  );
}

function ComparisonCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
      <h3 className="font-bold text-violet-950">{title}</h3>

      <ul className="mt-3 space-y-2 leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function QuestionPrompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 font-bold text-blue-950">
      Pause and consider: {children}
    </p>
  );
}

function ClinicalAlert({
  title,
  children,
  tone = "amber",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "blue" | "amber" | "rose";
}) {
  const tones = {
    blue: {
      wrapper: "border-sky-200 bg-sky-50",
      title: "text-sky-950",
      text: "text-sky-950",
    },
    amber: {
      wrapper: "border-amber-200 bg-amber-50",
      title: "text-amber-950",
      text: "text-amber-950",
    },
    rose: {
      wrapper: "border-rose-200 bg-rose-50",
      title: "text-rose-950",
      text: "text-rose-950",
    },
  };

  const styles = tones[tone];

  return (
    <div className={`rounded-2xl border p-5 ${styles.wrapper}`}>
      <h3 className={`font-bold ${styles.title}`}>{title}</h3>
      <div className={`mt-2 leading-7 ${styles.text}`}>{children}</div>
    </div>
  );
}

function DiagnosticRow({
  test,
  use,
  limitation,
}: {
  test: string;
  use: string;
  limitation: string;
}) {
  return (
    <tr className="border-b border-slate-200 last:border-b-0">
      <td className="p-4 font-semibold">{test}</td>
      <td className="p-4">{use}</td>
      <td className="p-4">{limitation}</td>
    </tr>
  );
}

function ManagementRow({
  situation,
  approach,
  consideration,
}: {
  situation: string;
  approach: string;
  consideration: string;
}) {
  return (
    <tr className="border-b border-slate-200 last:border-b-0">
      <td className="p-4 font-semibold">{situation}</td>
      <td className="p-4">{approach}</td>
      <td className="p-4">{consideration}</td>
    </tr>
  );
}

function ComplicationCard({
  title,
  description,
  clues,
}: {
  title: string;
  description: string;
  clues: string[];
}) {
  return (
    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
      <h3 className="font-bold text-orange-950">{title}</h3>
      <p className="mt-2 leading-7 text-slate-700">{description}</p>

      <p className="mt-4 text-sm font-bold uppercase tracking-wide text-orange-900">
        Clinical clues
      </p>

      <ul className="mt-2 space-y-2 text-slate-700">
        {clues.map((clue) => (
          <li key={clue}>• {clue}</li>
        ))}
      </ul>
    </div>
  );
}

function DispositionCard({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "green" | "yellow" | "red";
  items: string[];
}) {
  const toneClasses = {
    green: "border-emerald-200 bg-emerald-50 text-emerald-950",
    yellow: "border-amber-200 bg-amber-50 text-amber-950",
    red: "border-red-200 bg-red-50 text-red-950",
  };

  return (
    <div className={`rounded-2xl border p-5 ${toneClasses[tone]}`}>
      <h3 className="font-bold">{title}</h3>

      <ul className="mt-3 space-y-2 leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
