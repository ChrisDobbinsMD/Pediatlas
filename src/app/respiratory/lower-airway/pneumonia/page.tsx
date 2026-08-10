"use client";
import Image from "next/image";
import { useState } from "react";
import { EvidenceBase } from "@/components/disease";

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

const quizOptions = [
  {
    id: "amoxicillin",
    label: "Begin oral amoxicillin and discharge with close follow-up",
  },
  {
    id: "ceftriaxone",
    label: "Give IV ceftriaxone and admit every child with pneumonia",
  },
  {
    id: "ct",
    label: "Obtain a CT scan of the chest before starting treatment",
  },
  {
    id: "albuterol",
    label: "Treat with scheduled albuterol alone",
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

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
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
                A previously healthy 4-year-old presents with 3 days of fever, cough,
                decreased appetite, and progressively faster breathing. Temperature is
                39.2°C, respiratory rate is 44 breaths/minute, and oxygen saturation is 95%
                on room air.
              </p>

              <p className="mt-3 leading-8 text-blue-50">
                The child is alert, drinking small amounts, and has mild subcostal
                retractions. Auscultation reveals focal crackles and decreased breath sounds
                over the right lower lung field.
              </p>

              <div className="mt-7 rounded-2xl bg-white/15 p-5">
                <h3 className="font-bold text-sky-200">
                  Your first clinical task
                </h3>

                <p className="mt-2 leading-7 text-blue-50">
                  Assess illness severity and determine whether this child can be treated
                  safely as an outpatient while considering viral, typical bacterial, and
                  atypical causes of pneumonia.
                </p>
              </div>
            </section>

            {/* Anatomy localization */}
            <Section id="anatomy-localization" title="Anatomy localization">
              <p className="leading-7 text-slate-700">
                Pneumonia primarily involves the{" "}
                <strong>distal airways, alveoli, and pulmonary interstitium</strong>.
                In bacterial pneumonia, inflammatory material may fill alveolar
                spaces and produce consolidation. Viral infections more commonly
                create diffuse or patchy inflammation, although clinical and
                radiographic patterns frequently overlap.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <InfoCard
                  title="Alveoli"
                  text="Inflammatory cells, protein-rich fluid, and cellular debris may replace air within affected alveoli."
                />

                <InfoCard
                  title="Interstitium"
                  text="Inflammation may involve the supporting tissue surrounding alveoli and small airways."
                />

                <InfoCard
                  title="Pleural space"
                  text="Extension beyond the lung parenchyma may produce a parapneumonic effusion or empyema."
                />
              </div>
            </Section>

            {/* Pathophysiology */}
            <Section id="pathophysiology" title="Pathophysiology">
              <p className="leading-7 text-slate-700">
                Pneumonia develops when a pathogen reaches the lower respiratory
                tract and overcomes normal host defenses, including mucociliary
                clearance, cough, airway immune responses, and alveolar
                macrophages.
              </p>
              <h3 className="mt-8 text-xl font-bold text-blue-950">

              </h3>

              <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/images/pneumonia-pathophysiology.png"
                  alt="Pneumonia pathophysiology demonstrating progression from normal alveoli to alveolar inflammation, exudate formation, consolidation, and impaired gas exchange."
                  width={1600}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
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
                    "Mycoplasma pneumoniae and Chalmydophilia pneumoniae are common consideration",
                    "Clinical findings may be more diffuse",
                  ]}
                />
              </div>
            </Section>

            {/* History and examination */}
            <Section id="history-and-exam" title="History and exam">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-bold text-blue-950">
                    Important history
                  </h3>

                  <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                    <li>• Duration and progression of fever and cough</li>
                    <li>• Breathing difficulty, chest pain, or exercise intolerance</li>
                    <li>• Oral intake and urine output</li>
                    <li>• Vomiting, lethargy, or altered mental status</li>
                    <li>• Recent viral illness or sick contacts</li>
                    <li>• Immunization status</li>
                    <li>• Recent antibiotics or hospitalization</li>
                    <li>• Aspiration risk or neurologic impairment</li>
                    <li>• Tuberculosis exposure or travel history</li>
                    <li>• Underlying cardiac, pulmonary, or immune disease</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-blue-950">
                    Examination priorities
                  </h3>

                  <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                    <li>• General appearance and interaction</li>
                    <li>• Respiratory rate measured while calm</li>
                    <li>• Pulse oximetry</li>
                    <li>• Retractions, nasal flaring, grunting, or head bobbing</li>
                    <li>• Focal crackles or bronchial breath sounds</li>
                    <li>• Decreased or asymmetric air entry</li>
                    <li>• Signs of dehydration</li>
                    <li>• Perfusion and mental status</li>
                  </ul>
                </div>
              </div>

              <ClinicalAlert title="Do not rely on auscultation alone">
                Children may have pneumonia without classic focal crackles.
                Respiratory rate, oxygen saturation, work of breathing, hydration,
                and overall appearance are often more important for determining
                severity.
              </ClinicalAlert>

              <div className="mt-7 overflow-x-auto">
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
                        No single symptom confirms bacterial disease
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold">Atypical</td>
                      <td className="p-4">
                        School age, persistent dry cough, headache, malaise
                      </td>
                      <td className="p-4">
                        Presentation may overlap with viral disease
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Differential */}
            <Section id="differential" title="Differential diagnosis">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <InfoCard
                  title="Viral bronchiolitis"
                  text="Usually occurs in infants with diffuse crackles, wheezing, and upper respiratory symptoms."
                />

                <InfoCard
                  title="Asthma exacerbation"
                  text="Wheezing and prolonged expiration may predominate, often with a history of recurrent symptoms."
                />

                <InfoCard
                  title="Foreign body aspiration"
                  text="Consider with sudden onset, choking, unilateral wheezing, biphasic stridor, or asymmetric breath sounds."
                />

                <InfoCard
                  title="Atelectasis"
                  text="May produce focal opacity and reduced air entry, particularly with mucus plugging."
                />

                <InfoCard
                  title="Pulmonary edema"
                  text="Consider with cardiac disease, hepatomegaly, edema, or diffuse bilateral findings."
                />

                <InfoCard
                  title="Tuberculosis"
                  text="Consider with prolonged symptoms, weight loss, exposure history, or epidemiologic risk."
                />

                <InfoCard
                  title="Pulmonary embolism"
                  text="Uncommon in children but possible with thrombosis risk factors and pleuritic symptoms."
                />

                <InfoCard
                  title="Malignancy or mass"
                  text="Consider with recurrent focal pneumonia, persistent opacity, or systemic symptoms."
                />

                <InfoCard
                  title="Aspiration"
                  text="Consider with swallowing dysfunction, neurologic impairment, reflux, seizures, or altered consciousness."
                />
              </div>
            </Section>

            {/* Diagnostic workup */}
            <Section id="diagnostic-workup" title="Diagnostic workup">
              <p className="leading-7 text-slate-700">
                Pneumonia is often a <strong>clinical diagnosis</strong>. Testing
                should be guided by disease severity, diagnostic uncertainty,
                treatment failure, underlying conditions, and concern for
                complications.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <DecisionCard title="Outpatient, uncomplicated disease">
                  <ul className="space-y-2">
                    <li>• Measure vital signs and oxygen saturation</li>
                    <li>• Chest radiograph is usually unnecessary</li>
                    <li>• Routine CBC, CRP, and blood culture are unnecessary</li>
                    <li>• Viral testing may be useful when it changes management</li>
                  </ul>
                </DecisionCard>

                <DecisionCard title="Hospitalized or complicated disease">
                  <ul className="space-y-2">
                    <li>• Consider chest radiography</li>
                    <li>• Consider CBC and inflammatory markers</li>
                    <li>• Obtain cultures when clinically appropriate</li>
                    <li>• Evaluate for sepsis or organ dysfunction</li>
                    <li>• Use ultrasound when pleural fluid is suspected</li>
                  </ul>
                </DecisionCard>
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

              <ClinicalAlert title="Imaging pearl">
                Do not obtain a chest radiograph solely to prove pneumonia in a
                well-appearing child who can be safely treated as an outpatient.
                Imaging becomes more valuable when the diagnosis is uncertain,
                the child is significantly ill, or a complication is suspected.
              </ClinicalAlert>
            </Section>

            {/* Management */}
            <Section id="management" title="Management">
              <p className="leading-7 text-slate-700">
                Management depends on suspected etiology, age, illness severity,
                immunization status, comorbidities, local resistance patterns,
                and ability to tolerate oral therapy.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <DecisionCard title="Supportive care">
                  <ul className="space-y-2">
                    <li>• Oxygen when hypoxemic</li>
                    <li>• Oral or IV hydration as needed</li>
                    <li>• Antipyretics for comfort</li>
                    <li>• Nasal suctioning in younger children when helpful</li>
                    <li>• Respiratory support based on work of breathing</li>
                    <li>• Frequent reassessment for deterioration</li>
                  </ul>
                </DecisionCard>

                <DecisionCard title="Antibiotic principles">
                  <ul className="space-y-2">
                    <li>• Avoid antibiotics when viral pneumonia is strongly favored</li>
                    <li>• Use the narrowest effective agent</li>
                    <li>• Transition from IV to oral therapy when improving</li>
                    <li>• Adjust therapy to cultures and local antibiogram</li>
                    <li>• Reassess if improvement does not occur as expected</li>
                  </ul>
                </DecisionCard>
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
                      approach="Supportive care"
                      consideration="Antibiotics do not treat viral infection"
                    />

                    <ManagementRow
                      situation="Uncomplicated outpatient bacterial CAP"
                      approach="Oral amoxicillin is commonly first-line"
                      consideration="Confirm allergy history, local pathway, and follow-up"
                    />

                    <ManagementRow
                      situation="Hospitalized uncomplicated bacterial CAP"
                      approach="IV ampicillin may be appropriate in a fully immunized child"
                      consideration="Broaden based on severity, immunization status, or resistance risk"
                    />

                    <ManagementRow
                      situation="Severe or complicated CAP"
                      approach="Broader IV therapy with specialist and local-pathway guidance"
                      consideration="Consider S. aureus coverage when clinically indicated"
                    />

                    <ManagementRow
                      situation="Suspected atypical pneumonia"
                      approach="Consider a macrolide in the appropriate age and clinical setting"
                      consideration="Do not use cough alone to diagnose Mycoplasma"
                    />
                  </tbody>
                </table>
              </div>

              <ClinicalAlert title="Treatment duration">
                Many children with uncomplicated bacterial CAP who improve
                promptly can be treated with a short antibiotic course. Final
                agent, dose, and duration should follow the patient’s age,
                severity, response, local antibiogram, and institutional pathway.
              </ClinicalAlert>
            </Section>

            {/* Complications */}
            <Section id="complications" title="Complications">
              <p className="leading-7 text-slate-700">
                Suspect complicated pneumonia when a child has persistent or
                worsening fever, escalating respiratory support, significant
                unilateral findings, chest pain, toxic appearance, or failure to
                improve after appropriate therapy.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <ComplicationCard
                  title="Parapneumonic effusion"
                  description="Fluid accumulates in the pleural space adjacent to pneumonia."
                  clues={[
                    "Decreased breath sounds",
                    "Dullness to percussion",
                    "Persistent fever",
                    "Blunting or fluid on imaging",
                  ]}
                />

                <ComplicationCard
                  title="Empyema"
                  description="Purulent or infected inflammatory material accumulates in the pleural space."
                  clues={[
                    "Toxic appearance",
                    "Loculated pleural fluid",
                    "Persistent systemic inflammation",
                    "Failure to improve",
                  ]}
                />

                <ComplicationCard
                  title="Necrotizing pneumonia"
                  description="Inflammation and tissue injury produce areas of pulmonary necrosis and cavitation."
                  clues={[
                    "Severe or prolonged illness",
                    "Persistent fever",
                    "Cavitary changes",
                    "Complicated pleural disease",
                  ]}
                />
              </div>

              {/* Add imaging gallery here */}
              {/* Complicated pneumonia imaging gallery */}
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
                  Imaging gallery
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  Imaging findings in complicated pneumonia
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  These examples demonstrate findings that may be seen with complicated
                  pneumonia. Imaging findings are supportive rather than diagnostic in
                  isolation because multiple pulmonary processes can produce similar
                  appearances. Imaging should always be interpreted alongside the history,
                  physical examination, laboratory findings, and clinical course.
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
                    src="/images/parapneumonic-effusion-us.png"
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
                    Similar imaging findings may occur with infectious, inflammatory,
                    congenital, and neoplastic processes. Imaging should be used to answer
                    a focused clinical question and interpreted within the broader clinical
                    context.
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
                  loculations. Management ranges from antibiotics and observation
                  to drainage with a chest tube, fibrinolytic therapy, or surgery,
                  depending on respiratory compromise and the character and size
                  of the collection.
                </p>
              </div>
            </Section>

            {/* Disposition */}
            <Section id="disposition" title="Disposition">
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

              <div className="mt-7 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                <h3 className="font-bold text-sky-950">
                  Return precautions
                </h3>

                <ul className="mt-3 space-y-2 leading-7 text-slate-700">
                  <li>• Increasing work of breathing</li>
                  <li>• Cyanosis, apnea, or abnormal sleepiness</li>
                  <li>• Inability to drink or markedly decreased urine output</li>
                  <li>• Persistent vomiting</li>
                  <li>• Worsening fever or clinical condition</li>
                  <li>• Failure to begin improving within the expected timeframe</li>
                </ul>
              </div>
            </Section>

            {/* Clinical pearls */}
            <Section id="clinical-pearls" title="Clinical pearls">
              <div className="grid gap-4 md:grid-cols-2">
                <Pearl>
                  Tachypnea, hypoxemia, work of breathing, hydration, and overall
                  appearance are more useful than any single auscultatory finding.
                </Pearl>

                <Pearl>
                  A chest radiograph cannot reliably distinguish viral from
                  bacterial pneumonia.
                </Pearl>

                <Pearl>
                  Preschool children commonly have viral pneumonia and may not
                  benefit from antibiotics when bacterial infection is not
                  suspected.
                </Pearl>

                <Pearl>
                  Focal abdominal pain can be the presenting complaint of lower
                  lobe pneumonia.
                </Pearl>

                <Pearl>
                  Wheezing does not exclude pneumonia, especially with viral or
                  atypical infection.
                </Pearl>

                <Pearl>
                  Persistent fever or respiratory distress despite appropriate
                  therapy should trigger evaluation for an effusion, empyema,
                  necrosis, abscess, resistant pathogen, or alternate diagnosis.
                </Pearl>

                <Pearl>
                  Recurrent pneumonia in the same location raises concern for an
                  anatomic obstruction, aspirated foreign body, congenital lesion,
                  or localized airway abnormality.
                </Pearl>

                <Pearl>
                  Avoid automatically escalating to broad-spectrum antibiotics
                  without reassessing the diagnosis and looking for complications.
                </Pearl>
              </div>
            </Section>

            {/* Quiz */}
            <Section id="quiz" title="Interactive quiz">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="font-semibold leading-7 text-blue-950">
                  A fully immunized 5-year-old has fever, cough, tachypnea, focal
                  right-sided crackles, and mild retractions. Oxygen saturation is
                  96% on room air. The child is drinking, alert, and has reliable
                  follow-up. What is the most appropriate next step when bacterial
                  community-acquired pneumonia is suspected?
                </p>
              </div>

              <fieldset className="mt-6 space-y-3">
                <legend className="sr-only">Choose the best answer</legend>

                {quizOptions.map((option) => {
                  const isSelected = selectedAnswer === option.id;
                  const isCorrect = option.id === correctAnswer;

                  let answerStyle =
                    "border-slate-200 bg-white hover:border-blue-300";

                  if (showQuizAnswer && isCorrect) {
                    answerStyle = "border-emerald-400 bg-emerald-50";
                  } else if (showQuizAnswer && isSelected && !isCorrect) {
                    answerStyle = "border-red-400 bg-red-50";
                  } else if (isSelected) {
                    answerStyle = "border-blue-500 bg-blue-50";
                  }

                  return (
                    <label
                      key={option.id}
                      className={`flex cursor-pointer gap-3 rounded-2xl border p-4 transition ${answerStyle}`}
                    >
                      <input
                        type="radio"
                        name="pneumonia-quiz"
                        value={option.id}
                        checked={isSelected}
                        onChange={() => {
                          setSelectedAnswer(option.id);
                          setShowQuizAnswer(false);
                        }}
                        className="mt-1"
                      />

                      <span className="font-medium text-slate-800">
                        {option.label}
                      </span>
                    </label>
                  );
                })}
              </fieldset>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleQuizSubmit}
                  disabled={!selectedAnswer}
                  className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  Check answer
                </button>

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Reset
                </button>
              </div>

              {showQuizAnswer && selectedAnswer === "amoxicillin" && (
                <QuizFeedback correct>
                  Correct. This child is stable for outpatient treatment. Oral
                  amoxicillin is commonly first-line therapy for uncomplicated
                  suspected bacterial CAP, provided there are no patient-specific
                  contraindications and reliable follow-up is available.
                </QuizFeedback>
              )}

              {showQuizAnswer && selectedAnswer === "ceftriaxone" && (
                <QuizFeedback>
                  Not quite. IV ceftriaxone and admission are not required for
                  every child with pneumonia. This child has normal oxygenation,
                  mild work of breathing, adequate hydration, and reliable
                  follow-up.
                </QuizFeedback>
              )}

              {showQuizAnswer && selectedAnswer === "ct" && (
                <QuizFeedback>
                  Not quite. Chest CT is not part of the routine evaluation of
                  uncomplicated CAP. It is reserved for selected cases involving
                  complications, unclear anatomy, persistent disease, or another
                  suspected process.
                </QuizFeedback>
              )}

              {showQuizAnswer && selectedAnswer === "albuterol" && (
                <QuizFeedback>
                  Not quite. Albuterol may help concurrent bronchospasm, but it
                  does not treat bacterial pneumonia and should not replace
                  appropriate antimicrobial therapy when bacterial CAP is
                  suspected.
                </QuizFeedback>
              )}
            </Section>

            {/* Sources */}
            <EvidenceBase
              references={[
                {
                  title:
                    "The Management of Community-Acquired Pneumonia in Infants and Children Older Than 3 Months of Age",
                  href:
                    "https://pmc.ncbi.nlm.nih.gov/articles/PMC7107838/",
                  description:
                    "PIDS/IDSA pediatric community-acquired pneumonia guideline.",
                },
                {
                  title: "Texas Children's Hospital",
                  href: "https://www.texaschildrens.org/sites/tc/files/uploads/documents/outcomes/2024%20standards/CAP%20Guideline%20FINAL.pdf",
                  description:
                    "Evidence-based guideline for pediatric community-acquired pneumonia.",
                },
                {
                  title: "American Academy of Pediatrics",
                  href: "https://publications.aap.org/pediatriccare/article/doi/10.1542/aap.ppcqr.396216/97/Pneumonia",
                  description:
                    "Pediatric Care Online clinical overview of pneumonia.",
                },
                {
                  title: "World Health Organization",
                  href: "https://www.who.int/news-room/fact-sheets/detail/pneumonia",
                  description:
                    "Global overview of pneumonia in children.",
                },
              ]}
            />
          </div> {/* main content column */}
        </div> {/* grid */}
      </div> {/* max-width container */}
    </main>
  );
}
type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};
function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <div className="mt-6">
        {children}
      </div>
    </section>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-bold text-blue-950">{title}</h3>
      <p className="mt-2 leading-7 text-slate-700">{text}</p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-sky-200 bg-sky-50 p-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-700 font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="font-bold text-blue-950">{title}</h3>
        <p className="mt-1 leading-7 text-slate-700">{text}</p>
      </div>
    </div>
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
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
        >
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

        <h4 className="mt-2 text-lg font-bold text-blue-950">
          {title}
        </h4>

        <p className="mt-3 leading-7 text-slate-700">
          {description}
        </p>

        <p className="mt-4 text-xs text-slate-500">
          {credit}
        </p>
      </div>
    </div>
  );
}

function ComparisonCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
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
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-5">
      <h3 className="font-bold text-red-900">{title}</h3>
      <p className="mt-2 leading-7 text-slate-700">{children}</p>
    </div>
  );
}

function DecisionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <h3 className="font-bold text-blue-950">{title}</h3>
      <div className="mt-3 leading-7 text-slate-700">{children}</div>
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

function Pearl({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 leading-7 text-slate-700">
      <span className="mr-2" aria-hidden="true">
        💡
      </span>
      {children}
    </div>
  );
}

function QuizFeedback({
  correct = false,
  children,
}: {
  correct?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`mt-5 rounded-2xl border p-5 leading-7 ${correct
          ? "border-emerald-300 bg-emerald-50 text-emerald-950"
          : "border-red-300 bg-red-50 text-red-950"
        }`}
    >
      {children}
    </div>
  );
}