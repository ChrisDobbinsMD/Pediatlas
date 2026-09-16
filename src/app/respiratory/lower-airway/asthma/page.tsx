"use client";

import Link from "next/link";
import Image from "next/image";
import MobileSectionNav from "@/components/MobileSectionNav";
import AsthmaSeverityTool from "@/components/disease/asthma/AsthmaSeverityTool";
import AsthmaStepwiseTherapy from "@/components/disease/asthma/AsthmaStepwiseTherapy";
import {
  AnkiDeck,
  DiseaseSection,
  EvidenceBase,
  PearlCard,
  ProcessStep,
  ProgressiveQuiz,
  ExpandableSection,
} from "@/components/disease";

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
    description: "Increased secretions further narrow the airway lumen.",
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

const quizQuestions = [
  {
    question:
      "A 9-year-old with known asthma presents with diffuse wheezing, moderate intercostal retractions, difficulty speaking in full sentences, and an oxygen saturation of 91%. What is the most appropriate initial treatment?",
    answers: [
      {
        text: "Inhaled albuterol, supplemental oxygen, and systemic corticosteroid",
        correct: true,
        feedback:
          "Correct. This child has a significant asthma exacerbation with hypoxemia and increased work of breathing. Initial treatment should address bronchoconstriction, hypoxemia, and airway inflammation.",
      },
      {
        text: "Chest radiograph before beginning treatment",
        correct: false,
        feedback:
          "Routine chest radiography is not required before treating a typical asthma exacerbation and should not delay bronchodilator therapy.",
      },
      {
        text: "Antibiotics and observation",
        correct: false,
        feedback:
          "Asthma exacerbations do not routinely require antibiotics unless there is separate evidence of a bacterial infection.",
      },
      {
        text: "Inhaled corticosteroid alone",
        correct: false,
        feedback:
          "Controller therapy is important for long-term management, but inhaled corticosteroid alone does not provide the rapid bronchodilation needed during this acute exacerbation.",
      },
    ],
  },
  {
    question:
      "A child being treated for a severe asthma exacerbation has less audible wheezing, but air movement is markedly diminished and the child is becoming fatigued. How should this change be interpreted?",
    answers: [
      {
        text: "The bronchospasm is resolving",
        correct: false,
        feedback:
          "Less wheezing is reassuring only when accompanied by improved air movement and clinical status.",
      },
      {
        text: "Critically limited airflow may be developing",
        correct: true,
        feedback:
          "Correct. A quiet or silent chest with poor air movement and fatigue can indicate critically severe airflow obstruction and impending respiratory failure.",
      },
      {
        text: "The child is developing pneumonia",
        correct: false,
        feedback:
          "Pneumonia can coexist with asthma, but diminishing wheeze with worsening air movement specifically raises concern for severe airflow limitation.",
      },
      {
        text: "No reassessment is necessary if oxygen saturation is unchanged",
        correct: false,
        feedback:
          "Work of breathing, air entry, mental status, and fatigue are essential severity markers and require repeated reassessment.",
      },
    ],
  },
  {
    question:
      "Which test is most useful for objectively demonstrating variable expiratory airflow limitation in a developmentally able child with suspected asthma?",
    answers: [
      {
        text: "Routine chest radiograph",
        correct: false,
        feedback:
          "Chest radiography does not establish variable expiratory airflow limitation and is not routinely needed in a typical presentation.",
      },
      {
        text: "Spirometry with bronchodilator assessment",
        correct: true,
        feedback:
          "Correct. Spirometry can demonstrate airflow obstruction, and improvement after bronchodilator supports variable or reversible expiratory airflow limitation.",
      },
      {
        text: "Complete blood count",
        correct: false,
        feedback:
          "A CBC does not establish the physiologic airflow limitation characteristic of asthma.",
      },
      {
        text: "Viral respiratory panel",
        correct: false,
        feedback:
          "Viral infections can trigger asthma symptoms, but identifying a virus does not establish the diagnosis of asthma.",
      },
    ],
  },
  {
    question:
      "A preschool-aged child has recurrent wheezing primarily with viral infections. Which statement best reflects the diagnostic approach?",
    answers: [
      {
        text: "Any wheezing before school age should automatically be diagnosed as asthma",
        correct: false,
        feedback:
          "Preschool wheezing has several phenotypes, and age alone does not establish an asthma diagnosis.",
      },
      {
        text: "Asthma cannot be diagnosed until the child is old enough for spirometry",
        correct: false,
        feedback:
          "Spirometry may not be feasible in young children, but asthma can still be considered using the symptom pattern, risk factors, exclusion of alternatives, and response to treatment.",
      },
      {
        text: "The pattern over time, interval symptoms, triggers, atopy, family history, and treatment response help determine whether asthma is likely",
        correct: true,
        feedback:
          "Correct. Recurrent symptoms outside isolated viral illnesses, characteristic triggers, atopy, family history, and a consistent treatment response can strengthen the clinical diagnosis.",
      },
      {
        text: "The term reactive airway disease confirms the diagnosis",
        correct: false,
        feedback:
          "Reactive airway disease is a nonspecific description and should not substitute for determining the underlying diagnosis.",
      },
    ],
  },
  {
    question:
      "A child improves after treatment for an asthma exacerbation and is ready for discharge. Which approach best addresses future risk?",
    answers: [
      {
        text: "Discharge once wheezing disappears, with no additional teaching",
        correct: false,
        feedback:
          "Clinical improvement is only one part of discharge planning. Future exacerbation risk and home management also need to be addressed.",
      },
      {
        text: "Provide only a rescue inhaler because controller therapy is unrelated to exacerbation risk",
        correct: false,
        feedback:
          "Long-term anti-inflammatory treatment and assessment of asthma control are important components of reducing future risk.",
      },
      {
        text: "Review controller therapy, reliever use, inhaler and spacer technique, triggers, follow-up, and a written asthma action plan",
        correct: true,
        feedback:
          "Correct. Discharge is an opportunity to address both recovery from the current exacerbation and prevention of future exacerbations.",
      },
      {
        text: "Arrange routine chest radiographs to document resolution",
        correct: false,
        feedback:
          "Routine follow-up chest radiography is not required after an uncomplicated asthma exacerbation.",
      },
    ],
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
            <a href="#localization">Anatomy localization</a>
            <a href="#pathophysiology">Pathophysiology</a>
            <a href="#assessment">History and exam</a>
            <a href="#severity">Acute severity</a>
            <a href="#differential">Differential</a>
            <a href="#workup">Diagnostic workup</a>
            <a href="#management">Management</a>
            <a href="#chronic-management">Chronic management</a>
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
            { id: "severity", label: "Acute severity" },
            { id: "differential", label: "Differential" },
            { id: "workup", label: "Diagnostic workup" },
            { id: "management", label: "Management" },
            { id: "chronic-management", label: "Chronic management" },
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

          <DiseaseSection
            id="localization"
            label="Anatomy localization"
            title="Asthma is a disease of the conducting airways"
          >
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

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  Structures usually spared
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                  <li>• Alveoli</li>
                  <li>• Pleural space</li>
                  <li>• Pulmonary vasculature</li>
                  <li>• Lung parenchyma</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="text-xl font-bold">Clinical implication</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Because asthma affects the conducting airways rather than the
                alveoli, patients typically present with wheezing, prolonged
                expiration, chest tightness, and airflow obstruction rather than
                focal crackles or consolidation.
              </p>
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="Inflammation plus reversible airway narrowing"
          >
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

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {pathophysiology.map((item, index) => (
                <ProcessStep
                  key={item.title}
                  number={String(index + 1)}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="assessment"
            label="History and physical exam"
            title="Confirm the pattern and identify risk"
          >
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold">History</h3>

                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  <li>• Episodic wheeze, cough, dyspnea, or chest tightness</li>
                  <li>• Nighttime or early-morning symptoms</li>
                  <li>
                    • Exercise, viral, allergen, smoke, or weather triggers
                  </li>
                  <li>
                    • Prior emergency visits, hospitalization, or intubation
                  </li>
                  <li>• Controller adherence and inhaler technique</li>
                  <li>
                    • Atopy, eczema, allergic rhinitis, and family history
                  </li>
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

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Preschool wheeze
              </p>

              <h3 className="mt-2 text-xl font-bold text-amber-950">
                What does “reactive airway disease” actually mean?
              </h3>

              <p className="mt-3 leading-7 text-amber-900">
                Reactive airway disease (RAD) is a nonspecific clinical term,
                not a defined diagnosis. It is sometimes used when a young child
                has recurrent wheezing or apparent airway reactivity but the
                underlying diagnosis has not yet been established.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <h4 className="font-bold text-amber-950">
                    Viral-induced wheeze
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Some preschool children wheeze primarily during viral
                    respiratory illnesses and are well between episodes. Not
                    every child with viral-associated wheezing will develop
                    persistent asthma.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <h4 className="font-bold text-amber-950">
                    Increasingly suggestive of asthma
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Recurrent episodes, symptoms between illnesses, multiple
                    triggers, atopy, family history, and a reproducible response
                    to asthma therapy increase confidence in the diagnosis.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-amber-800">
                <strong>Age alone does not determine the diagnosis.</strong>{" "}
                Preschool children can be diagnosed with asthma when the
                clinical pattern is convincing, even when they are too young to
                perform reliable spirometry.
              </p>
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="severity"
            label="Acute severity"
            title="How sick is the child right now?"
          >
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="font-bold text-emerald-950">Mild</h3>
                <p className="mt-2 leading-7 text-emerald-900">
                  Speaks normally, mild wheeze or retractions, good air
                  movement.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="font-bold text-amber-950">Moderate</h3>
                <p className="mt-2 leading-7 text-amber-900">
                  Increased work of breathing, more persistent wheeze, reduced
                  activity or speech.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <h3 className="font-bold text-rose-950">Severe</h3>
                <p className="mt-2 leading-7 text-rose-900">
                  Marked retractions, difficulty speaking, poor air entry,
                  agitation, or hypoxemia.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-300 bg-rose-100 p-5">
                <h3 className="font-bold text-rose-950">
                  Impending respiratory failure
                </h3>
                <p className="mt-2 leading-7 text-rose-950">
                  Fatigue, altered mental status, cyanosis, silent chest, or
                  worsening despite treatment.
                </p>
              </div>
            </div>

            <div className="mt-7">
              <AsthmaSeverityTool />
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="differential"
            label="Differential diagnosis"
            title="Not every wheezing child has asthma"
          >
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
          </DiseaseSection>

          <DiseaseSection
            id="workup"
            label="Diagnostic workup"
            title="Confirm variable airflow obstruction and avoid unnecessary testing"
          >
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Asthma is diagnosed by a characteristic pattern of variable
              respiratory symptoms together with objective evidence of variable
              expiratory airflow limitation when testing is feasible.
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
                  <li>
                    • Review of inhaler technique and medication adherence
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-blue-950">
                  Objective lung-function testing
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-blue-900">
                  <li>
                    • Perform spirometry with bronchodilator testing when the
                    child is developmentally able
                  </li>
                  <li>
                    • Look for reduced expiratory airflow before treatment
                  </li>
                  <li>• Repeat testing after an inhaled bronchodilator</li>
                  <li>
                    • Improvement in airflow supports variable, reversible
                    obstruction
                  </li>
                  <li>
                    • Normal spirometry between episodes does not completely
                    exclude asthma
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
                    FeNO may support the diagnosis of type 2 airway inflammation
                    when asthma remains uncertain, but it should be interpreted
                    as an adjunct rather than used alone to diagnose or exclude
                    asthma.
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
                  <li>
                    • The diagnosis is uncertain or the course is atypical
                  </li>
                  <li>• The child fails to improve as expected</li>
                  <li>
                    • Respiratory failure or another complication is suspected
                  </li>
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
                Early in an asthma exacerbation, children commonly
                hyperventilate and lower their carbon dioxide level. In a child
                with severe distress, a normalizing or rising carbon dioxide
                level may indicate worsening fatigue and inadequate ventilation.
              </p>

              <p className="mt-4 font-semibold text-amber-300">
                Decreasing wheeze with worsening air movement may represent a
                silent chest—not clinical improvement.
              </p>
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="management"
            label="Management overview"
            title="Treat bronchoconstriction and inflammation"
          >
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
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-blue-950">
                Chronic-care principle
              </h3>

              <p className="mt-3 leading-7 text-blue-900">
                Asthma management should include an inhaled
                corticosteroid-containing strategy, assessment of symptom
                control and future risk, inhaler technique, adherence, trigger
                reduction, and a written asthma action plan.
              </p>
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="chronic-management"
            label="Chronic management"
            title="Control today, reduce risk tomorrow"
          >
            <p className="text-lg leading-8 text-slate-600">
              Long-term asthma management goes beyond treating acute wheezing.
              Assess current symptom control and future exacerbation risk,
              select an age-appropriate ICS-containing treatment strategy,
              address modifiable factors, and reassess the response over time.
            </p>

            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <h3 className="text-xl font-bold text-sky-950">
                Asthma control and asthma severity are different
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl bg-white p-5">
                  <p className="font-bold text-sky-950">Control</p>

                  <p className="mt-2 leading-7 text-slate-600">
                    Describes how well symptoms are currently controlled and the
                    patient&apos;s risk of future exacerbations or other adverse
                    outcomes.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-5">
                  <p className="font-bold text-sky-950">Severity</p>

                  <p className="mt-2 leading-7 text-slate-600">
                    Is assessed retrospectively by the level of treatment
                    required to achieve and maintain good asthma control.
                  </p>
                </div>
              </div>
            </div>
            <AsthmaStepwiseTherapy />
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Asthma action plan
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Every patient needs a plan for what happens next
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A written asthma action plan helps patients and caregivers
                recognize worsening asthma, understand which medications to use,
                and know when to seek medical care. Review and update the plan
                as treatment and asthma control change.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">
                    Green zone
                  </p>

                  <h4 className="mt-2 text-lg font-bold text-emerald-950">
                    Doing well
                  </h4>

                  <p className="mt-2 leading-7 text-emerald-900">
                    No significant asthma symptoms, normal activity, and no
                    nighttime awakening from asthma.
                  </p>

                  <p className="mt-4 text-sm font-semibold text-emerald-950">
                    Follow the prescribed everyday controller and reliever
                    strategy.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-700">
                    Yellow zone
                  </p>

                  <h4 className="mt-2 text-lg font-bold text-amber-950">
                    Asthma is worsening
                  </h4>

                  <p className="mt-2 leading-7 text-amber-900">
                    Increasing cough, wheeze, chest tightness, nighttime
                    symptoms, or limitation of usual activity may signal
                    worsening asthma.
                  </p>

                  <p className="mt-4 text-sm font-semibold text-amber-950">
                    Follow the patient-specific reliever and escalation
                    instructions in the written action plan.
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rose-700">
                    Red zone
                  </p>

                  <h4 className="mt-2 text-lg font-bold text-rose-950">
                    Medical alert
                  </h4>

                  <p className="mt-2 leading-7 text-rose-900">
                    Severe breathlessness, difficulty speaking or walking,
                    cyanosis, markedly reduced air movement, or inadequate
                    response to reliever therapy are concerning findings.
                  </p>

                  <p className="mt-4 text-sm font-semibold text-rose-950">
                    Follow the emergency instructions in the action plan and
                    seek urgent medical care.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-sky-50 p-5">
                <p className="font-bold text-sky-950">
                  Before the patient leaves
                </p>

                <p className="mt-2 leading-7 text-sky-900">
                  Make sure the patient and caregiver understand the written
                  plan, can demonstrate correct inhaler and spacer technique,
                  know which medications are controllers and relievers, and
                  understand when and where to seek additional care.
                </p>
              </div>
            </div>
            <ExpandableSection
              title="Severe asthma & biologic therapy"
              description="Advanced: phenotype-directed therapy for selected patients with severe asthma."
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                  Severe asthma & biologic therapy
                </p>

                <h3 className="mt-2 text-2xl font-bold text-purple-950">
                  Treat the phenotype, not just the symptoms
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Biologic therapy is reserved for selected patients with severe
                  asthma that remains uncontrolled despite optimized standard
                  therapy. Before labeling asthma as severe, confirm the
                  diagnosis and address adherence, inhaler technique, medication
                  access, environmental exposures, and comorbidities.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
                    <p className="text-sm font-semibold text-purple-700">IgE</p>

                    <h4 className="mt-1 font-bold text-slate-950">
                      Allergic asthma
                    </h4>

                    <p className="mt-2 leading-7 text-slate-600">
                      Omalizumab targets IgE and may be considered in eligible
                      patients with severe allergic asthma.
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
                    <p className="text-sm font-semibold text-purple-700">
                      IL-5 pathway
                    </p>

                    <h4 className="mt-1 font-bold text-slate-950">
                      Eosinophilic asthma
                    </h4>

                    <p className="mt-2 leading-7 text-slate-600">
                      Mepolizumab targets IL-5 and may be considered in eligible
                      patients with severe eosinophilic asthma.
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
                    <p className="text-sm font-semibold text-purple-700">
                      IL-4 / IL-13 pathway
                    </p>

                    <h4 className="mt-1 font-bold text-slate-950">
                      Type 2 asthma
                    </h4>

                    <p className="mt-2 leading-7 text-slate-600">
                      Dupilumab blocks IL-4 receptor alpha signaling and may be
                      considered in eligible patients with severe eosinophilic
                      or Type 2 asthma.
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-purple-300 bg-purple-100 p-5">
                  <p className="font-bold text-purple-950">
                    The clinical reasoning sequence
                  </p>

                  <p className="mt-2 leading-7 text-purple-900">
                    Uncontrolled asthma does not automatically mean severe
                    asthma. First confirm the diagnosis and optimize
                    conventional treatment. If asthma remains uncontrolled,
                    specialist evaluation can identify the inflammatory
                    phenotype and determine whether targeted add-on therapy is
                    appropriate.
                  </p>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Biologic eligibility depends on age, asthma phenotype,
                  biomarkers, exacerbation history, previous treatment,
                  regulatory approval, and payer-specific criteria. Selection
                  should be individualized with specialist involvement.
                </p>
              </div>
            </ExpandableSection>
          </DiseaseSection>

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="Reassess the response—not just the initial appearance"
          >
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Disposition depends on the child&apos;s clinical response after
              initial treatment, oxygen requirement, work of breathing, air
              movement, ability to speak or feed, prior high-risk history, and
              the safety of outpatient follow-up.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="text-xl font-bold text-emerald-950">
                  Consider discharge
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-emerald-900">
                  <li>
                    • Symptoms and work of breathing are substantially improved
                  </li>
                  <li>• Air movement is good without concerning fatigue</li>
                  <li>• Oxygenation is stable on room air</li>
                  <li>
                    • Bronchodilator treatments can be spaced appropriately
                  </li>
                  <li>
                    • The child can speak, drink, and ambulate near baseline
                  </li>
                  <li>
                    • Caregivers understand treatment and return precautions
                  </li>
                  <li>
                    • Reliable follow-up and access to medications are available
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-xl font-bold text-amber-950">
                  Consider hospital admission
                </h3>

                <ul className="mt-4 space-y-3 leading-7 text-amber-900">
                  <li>• Persistent moderate or severe respiratory distress</li>
                  <li>• Continued oxygen requirement or recurrent hypoxemia</li>
                  <li>
                    • Need for frequent or continuous bronchodilator therapy
                  </li>
                  <li>
                    • Incomplete or short-lived response to initial treatment
                  </li>
                  <li>
                    • Poor oral intake, dehydration, or inability to manage at
                    home
                  </li>
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
                  <li>
                    • Rising carbon dioxide or evidence of ventilatory failure
                  </li>
                  <li>
                    • Need for advanced or rapidly escalating respiratory
                    support
                  </li>
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
                Prior intensive-care admission, previous intubation, recent
                emergency visits or systemic corticosteroid courses, poor
                controller adherence, medication-access barriers, and
                psychosocial concerns should lower the threshold for
                observation, admission, or specialist involvement.
              </p>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Exact admission, oxygen, and bronchodilator-spacing criteria vary
              by institution. Apply the local pediatric asthma pathway when
              making clinical decisions.
            </p>
          </DiseaseSection>

          <DiseaseSection
            id="pearls"
            label="Clinical pearls"
            title="High-yield asthma takeaways"
          >
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
              ].map((pearl, index) => (
                <PearlCard
                  key={pearl.title}
                  number={index + 1}
                  title={pearl.title}
                >
                  {pearl.description}
                </PearlCard>
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
                Always interpret wheezing together with air entry, respiratory
                effort, speech, oxygenation, fatigue, and mental status.
              </p>
            </div>
          </DiseaseSection>

          <DiseaseSection
            id="quiz"
            label="Knowledge check"
            title="Test your asthma reasoning"
          >
            <ProgressiveQuiz questions={quizQuestions} />
          </DiseaseSection>

          <AnkiDeck
            title="Asthma"
            cardCount={16}
            downloadHref="/Anki/asthma.apkg"
          />

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
