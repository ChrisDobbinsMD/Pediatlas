"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import {
  DiseaseSection,
  InfoCard,
  Callout,
  ProcessStep,
  PearlCard,
  AnkiDeck,
  ProgressiveQuiz,
  EvidenceBase,
  type QuizQuestion,
} from "@/components/disease";

import { MobileSectionNav } from "@/components";

const sections = [
  { id: "vignette", label: "Vignette" },
  { id: "localization", label: "Anatomy & Localization" },
  { id: "pathophysiology", label: "Pathophysiology" },
  { id: "history-physical", label: "History & Physical" },
  { id: "differential", label: "Differential" },
  { id: "workup", label: "Workup" },
  { id: "management", label: "Management" },
  { id: "disposition", label: "Disposition" },
  { id: "pearls", label: "Pearls" },
  { id: "quiz", label: "Quiz" },
];

const questions: QuizQuestion[] = [
  {
    question:
      "A previously healthy 2-year-old suddenly coughs and chokes while eating peanuts. He later appears comfortable but has persistent unilateral wheezing and decreased breath sounds. What is the most likely diagnosis?",
    answers: [
      {
        text: "Bronchiolitis",
        correct: false,
        feedback:
          "Bronchiolitis usually follows a viral prodrome and causes more diffuse lower-airway findings rather than abrupt focal symptoms after choking.",
      },
      {
        text: "Foreign body aspiration",
        correct: true,
        feedback:
          "Sudden choking followed by persistent focal wheeze or asymmetric breath sounds is a classic pattern for a retained tracheobronchial foreign body.",
      },
      {
        text: "Asthma exacerbation",
        correct: false,
        feedback:
          "Asthma more commonly causes diffuse wheezing and recurrent or trigger-associated symptoms rather than abrupt persistent unilateral findings after choking.",
      },
      {
        text: "Viral pneumonia",
        correct: false,
        feedback:
          "Pneumonia may cause focal findings, but the abrupt onset during eating followed by persistent unilateral wheezing strongly suggests aspiration.",
      },
    ],
  },
  {
    question:
      "Which examination finding most strongly supports a retained bronchial foreign body?",
    answers: [
      {
        text: "Diffuse bilateral expiratory wheezing",
        correct: false,
        feedback:
          "Diffuse bilateral wheezing is more typical of generalized lower-airway obstruction such as asthma or bronchiolitis.",
      },
      {
        text: "Bilateral inspiratory crackles",
        correct: false,
        feedback:
          "Bilateral crackles suggest a more diffuse pulmonary process rather than focal mechanical airway obstruction.",
      },
      {
        text: "Persistent unilateral wheezing",
        correct: true,
        feedback:
          "Persistent unilateral wheezing is an important clue to focal bronchial obstruction from a retained foreign body.",
      },
      {
        text: "Isolated nasal congestion",
        correct: false,
        feedback:
          "Nasal congestion localizes to the upper respiratory tract and does not suggest focal bronchial obstruction.",
      },
    ],
  },
  {
    question:
      "A bronchial foreign body permits airflow into the distal lung during inspiration but limits airflow during expiration. What physiologic pattern results?",
    answers: [
      {
        text: "Air trapping and hyperinflation",
        correct: true,
        feedback:
          "This ball-valve mechanism allows air to enter more easily than it exits, producing progressive distal air trapping and hyperinflation.",
      },
      {
        text: "Immediate bilateral atelectasis",
        correct: false,
        feedback:
          "A ball-valve obstruction preferentially produces distal air trapping rather than immediate bilateral loss of lung volume.",
      },
      {
        text: "Pulmonary edema",
        correct: false,
        feedback:
          "Pulmonary edema is not the expected physiologic consequence of a focal ball-valve bronchial obstruction.",
      },
      {
        text: "Diffuse bronchospasm",
        correct: false,
        feedback:
          "The primary problem is mechanical obstruction of a focal airway rather than generalized bronchial smooth-muscle constriction.",
      },
    ],
  },
  {
    question:
      "A child has a convincing choking history and persistent unilateral wheezing, but the chest radiograph is normal. What is the most appropriate interpretation?",
    answers: [
      {
        text: "Foreign body aspiration has been excluded",
        correct: false,
        feedback:
          "A normal chest radiograph cannot reliably exclude foreign body aspiration because many aspirated objects are radiolucent.",
      },
      {
        text: "The child most likely has asthma",
        correct: false,
        feedback:
          "A convincing choking history with persistent focal findings remains concerning for aspiration despite normal radiographs.",
      },
      {
        text: "Further evaluation for a retained foreign body is still warranted",
        correct: true,
        feedback:
          "Clinical suspicion should drive further airway evaluation when the history and examination remain concerning despite normal radiographs.",
      },
      {
        text: "No additional evaluation is needed if oxygen saturation is normal",
        correct: false,
        feedback:
          "A child with a retained bronchial foreign body may maintain normal oxygen saturation and appear relatively well.",
      },
    ],
  },
  {
    question:
      "Which chest radiograph finding is most characteristic of a ball-valve bronchial obstruction?",
    answers: [
      {
        text: "Unilateral hyperinflation",
        correct: true,
        feedback:
          "Partial expiratory obstruction can trap air distal to the foreign body, producing unilateral hyperinflation.",
      },
      {
        text: "Diffuse bilateral interstitial opacities",
        correct: false,
        feedback:
          "Diffuse bilateral interstitial disease does not fit a focal ball-valve bronchial obstruction.",
      },
      {
        text: "Bilateral pleural effusions",
        correct: false,
        feedback:
          "Pleural effusions are not a typical consequence of an aspirated bronchial foreign body.",
      },
      {
        text: "Cardiomegaly",
        correct: false,
        feedback:
          "Cardiac enlargement is unrelated to the focal airway mechanics produced by foreign body aspiration.",
      },
    ],
  },
  {
    question:
      "A child has recurrent pneumonia involving the same right lower-lobe region despite appropriate treatment. Which diagnosis should be considered?",
    answers: [
      {
        text: "Retained airway foreign body",
        correct: true,
        feedback:
          "A missed foreign body can impair secretion clearance and produce recurrent post-obstructive infection in the same region.",
      },
      {
        text: "Recurrent viral bronchiolitis",
        correct: false,
        feedback:
          "Bronchiolitis is generally a diffuse viral small-airway process and would not typically produce recurrent pneumonia in the same focal location.",
      },
      {
        text: "Seasonal allergic rhinitis",
        correct: false,
        feedback:
          "Allergic rhinitis does not explain recurrent focal lower-airway infection.",
      },
      {
        text: "Acute viral laryngitis",
        correct: false,
        feedback:
          "Laryngitis affects the upper airway and does not explain recurrent pneumonia in one pulmonary region.",
      },
    ],
  },
  {
    question:
      "Which procedure provides definitive evaluation and removal of a suspected retained tracheobronchial foreign body?",
    answers: [
      {
        text: "Flexible nasolaryngoscopy",
        correct: false,
        feedback:
          "Nasolaryngoscopy evaluates the upper airway but does not provide definitive evaluation and extraction of a retained bronchial foreign body.",
      },
      {
        text: "Bronchoscopy",
        correct: true,
        feedback:
          "Bronchoscopy directly visualizes the tracheobronchial tree and permits removal of the retained foreign body.",
      },
      {
        text: "Repeat chest radiography",
        correct: false,
        feedback:
          "Radiography may demonstrate indirect evidence of obstruction but cannot directly evaluate and remove the object.",
      },
      {
        text: "Nebulized bronchodilator therapy",
        correct: false,
        feedback:
          "Bronchodilators do not remove a mechanical airway obstruction caused by a retained foreign body.",
      },
    ],
  },
  {
    question:
      "Which statement about the location of aspirated foreign bodies in young children is most accurate?",
    answers: [
      {
        text: "They almost always enter the right mainstem bronchus",
        correct: false,
        feedback:
          "The right-sided predominance seen in adults should not be assumed in young children.",
      },
      {
        text: "They almost always enter the left mainstem bronchus",
        correct: false,
        feedback:
          "Young children may aspirate objects into either mainstem bronchus.",
      },
      {
        text: "They may lodge in either mainstem bronchus",
        correct: true,
        feedback:
          "Differences between the right and left mainstem bronchial angles are less pronounced in young children, so either side may be involved.",
      },
      {
        text: "They remain above the larynx in nearly all cases",
        correct: false,
        feedback:
          "Foreign body aspiration specifically includes objects that pass through the larynx and enter the tracheobronchial tree.",
      },
    ],
  },
];

const references = [
  {
    title:
      "Foreign Bodies of the Ear, Nose, Airway, and Esophagus — Pediatric Care Online",
    description:
      "American Academy of Pediatrics review covering the presentation, evaluation, and management of pediatric airway and esophageal foreign bodies.",
    href: "https://publications.aap.org/pediatriccare/article-abstract/doi/10.1542/aap.ppcqr.396161/197872/Foreign-Bodies-of-the-Ear-Nose-Airway-and",
  },
  {
    title:
      "Airway foreign bodies: A critical review for a common pediatric emergency",
    description:
      "Clinical review of pediatric airway foreign body presentation, diagnostic evaluation, bronchoscopy, and complications of delayed diagnosis.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4786499/",
  },
  {
    title:
      "Diagnostic Value of Chest Computed Tomography Scan for Identification of Foreign Body Aspiration in Children",
    description:
      "Systematic review and meta-analysis evaluating the diagnostic performance of chest CT for suspected pediatric foreign body aspiration.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11417639/",
  },
  {
    title:
      "Imaging of ingested and aspirated foreign bodies in the paediatric population",
    description:
      "Pediatric radiology review describing radiographic evaluation, additional views, and advanced imaging of aspirated and ingested foreign bodies.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11638315/",
  },
];

export default function ForeignBodyAspirationPage() {
  const [showAirwayAnnotations, setShowAirwayAnnotations] = useState(false);
  const [showCoinAnnotations, setShowCoinAnnotations] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* =================================================
    HERO
================================================== */}

      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 via-sky-50/70 to-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
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

            <span className="text-slate-600">Foreign Body Aspiration</span>
          </div>

          {/* Hero content */}
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Trachea &amp; Bronchi
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Foreign Body Aspiration
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Aspiration of food or another object into the tracheobronchial
                tree can cause focal airway obstruction, air trapping,
                atelectasis, or delayed recurrent pulmonary disease. The initial
                choking episode may resolve even though the foreign body remains
                in the lower airway.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Lower Airway
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Foreign Body Aspiration
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  Focal Airway Obstruction
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  Bronchoscopy
                </span>
              </div>
            </div>

            <div className="text-7xl" aria-hidden="true">
              🫁
            </div>
          </div>
        </div>
      </header>

      <MobileSectionNav sections={sections} />

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            On this page
          </p>

          <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold text-blue-800">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="transition hover:text-blue-600"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-8">
          {/* =================================================
    CLINICAL VIGNETTE
================================================== */}

          <section
            id="vignette"
            className="rounded-3xl border border-blue-800 bg-blue-950 p-8 text-white shadow-sm md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Clinical Vignette
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A toddler with persistent wheezing after a choking episode
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-50">
              A previously healthy 22-month-old boy is brought to the emergency
              department after suddenly coughing and choking while eating
              peanuts. His parents report that he briefly became cyanotic but
              quickly recovered. Since the event, he has continued to cough
              intermittently. Examination reveals mild tachypnea, decreased
              breath sounds, and an expiratory wheeze over the right lung field.
              Oxygen saturation is 97% on room air.
            </p>

            <div className="mt-7 rounded-2xl bg-white/10 p-5 md:p-6">
              <p className="font-semibold text-sky-200">
                What should you decide first?
              </p>

              <p className="mt-2 leading-7 text-blue-50">
                Determine whether the choking episode resulted in a retained
                lower-airway foreign body and whether the child requires further
                diagnostic evaluation and bronchoscopic removal.
              </p>
            </div>
          </section>

          {/* =================================================
    ANATOMY & LOCALIZATION
================================================== */}

          <DiseaseSection
            id="localization"
            label="Anatomy & Localization"
            title="Airway or esophagus?"
            description="After passing through the oropharynx, an object may enter the respiratory tract or pass posteriorly into the esophagus. For an aspirated foreign body that passes below the larynx, the level of tracheobronchial impaction helps determine the clinical pattern."
          >
            {/* Existing figure — intentionally preserved */}
            <Image
              src="/images/aspiration-ingestion-pthwy.png"
              alt="Comparison of airway aspiration versus esophageal ingestion showing the aspiration pathway into the tracheobronchial tree and the ingestion pathway into the esophagus."
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
              unoptimized
            />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Airway aspiration" tone="blue">
                <p className="font-semibold text-blue-950">
                  Think cough, wheeze, and focal respiratory findings
                </p>

                <ul className="mt-3 space-y-2">
                  <li>• Sudden choking or coughing event</li>
                  <li>• Persistent cough after apparent recovery</li>
                  <li>• Unilateral or focal wheezing</li>
                  <li>• Asymmetric or decreased breath sounds</li>
                  <li>• Focal air trapping or atelectasis</li>
                  <li>• Recurrent focal pneumonia with delayed diagnosis</li>
                </ul>
              </InfoCard>

              <InfoCard title="Esophageal ingestion" tone="purple">
                <p className="font-semibold text-purple-950">
                  Think drooling, dysphagia, and feeding refusal
                </p>

                <ul className="mt-3 space-y-2">
                  <li>• Drooling or inability to manage secretions</li>
                  <li>• Dysphagia or odynophagia</li>
                  <li>• Gagging, vomiting, or feeding refusal</li>
                  <li>• Retrosternal or neck discomfort</li>
                  <li>• Object visible within the esophagus on imaging</li>
                  <li>
                    • Respiratory symptoms may occur from tracheal compression
                  </li>
                </ul>
              </InfoCard>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Localization within the lower airway
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <InfoCard title="Trachea" tone="amber">
                  <p>
                    Cough, noisy breathing, variable wheeze, or symptoms that
                    change as the object moves within the trachea.
                  </p>
                </InfoCard>

                <InfoCard title="Mainstem bronchus" tone="amber">
                  <p>
                    Unilateral wheeze, asymmetric breath sounds, focal air
                    trapping, or atelectasis.
                  </p>
                </InfoCard>

                <InfoCard title="Distal bronchus" tone="amber">
                  <p>
                    Subtle focal findings, persistent cough, segmental
                    atelectasis, or recurrent pneumonia involving the same
                    region.
                  </p>
                </InfoCard>
              </div>
            </div>

            <Callout
              tone="purple"
              label="Pediatric Anatomy Pearl"
              title="Do not assume the foreign body is on the right"
            >
              Young children have less pronounced differences between the right
              and left mainstem bronchial angles than adults, so an aspirated
              foreign body may lodge on either side.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    PATHOPHYSIOLOGY
================================================== */}

          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="A retained foreign body changes ventilation distal to the obstruction"
            description="The physiologic effect depends on how completely the object obstructs the airway and whether air can move around it during inspiration, expiration, or both."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <ProcessStep
                number="1"
                title="The foreign body lodges"
                description="After passing through the larynx, the object may become lodged within the trachea, mainstem bronchus, or a more distal bronchus."
              />

              <ProcessStep
                number="2"
                title="Airflow becomes mechanically obstructed"
                description="The degree and behavior of the obstruction depend on the object's size, shape, position, and interaction with the airway wall."
              />

              <ProcessStep
                number="3"
                title="Distal ventilation becomes abnormal"
                description="Ventilation beyond the obstruction becomes asymmetric, producing focal physiologic and examination findings."
              />

              <ProcessStep
                number="4"
                title="Retained objects cause delayed disease"
                description="Persistent obstruction can impair secretion clearance and produce local inflammation, post-obstructive infection, recurrent pneumonia, or chronic airway injury when diagnosis is delayed."
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Ball-valve obstruction" tone="amber">
                <p>
                  Air enters around the object more easily during inspiration
                  than it escapes during expiration, progressively trapping air
                  distal to the obstruction.
                </p>

                <p className="mt-3 font-semibold">
                  Imaging clue: unilateral hyperinflation or air trapping.
                </p>
              </InfoCard>

              <InfoCard
                title="Fixed or near-complete obstruction"
                tone="purple"
              >
                <p>
                  When airflow past the object is markedly limited in both
                  directions, ventilation distal to the obstruction falls and
                  the affected lung segment may lose volume.
                </p>

                <p className="mt-3 font-semibold">
                  Imaging clue: segmental or lobar atelectasis.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Clinical Pearl"
              title="The child may look better while the obstruction remains"
            >
              The initial choking and coughing may improve after the foreign
              body moves distally. Persistent focal wheeze, asymmetric breath
              sounds, air trapping, atelectasis, or recurrent focal infection
              may be the remaining clues to a retained tracheobronchial foreign
              body.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    HISTORY & PHYSICAL
================================================== */}

          <DiseaseSection
            id="history-physical"
            label="History & Physical"
            title="The choking episode may be over by the time you examine the child"
            description="Foreign body aspiration should remain high on the differential when an abrupt choking or coughing event is followed by persistent focal respiratory symptoms, even if the child initially appears to recover."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="History clues" tone="blue">
                <ul className="space-y-2">
                  <li>• Sudden choking, coughing, or gagging event</li>
                  <li>
                    • Symptoms beginning while eating or playing with a small
                    object
                  </li>
                  <li>
                    • Brief cyanosis or respiratory distress during the initial
                    event
                  </li>
                  <li>• Persistent cough after apparent recovery</li>
                  <li>
                    • New wheezing without a prior history of recurrent wheeze
                  </li>
                  <li>• Recurrent pneumonia involving the same region</li>
                  <li>
                    • A choking event may be unwitnessed or not initially
                    recalled
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical examination" tone="purple">
                <ul className="space-y-2">
                  <li>• Focal or unilateral wheezing</li>
                  <li>• Asymmetric or decreased breath sounds</li>
                  <li>• Localized crackles</li>
                  <li>• Tachypnea or increased work of breathing</li>
                  <li>• Unequal chest expansion</li>
                  <li>
                    • Examination may be subtle when obstruction is incomplete
                  </li>
                  <li>
                    • Normal oxygen saturation does not exclude a retained
                    foreign body
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="High-Yield Pattern"
              title="Sudden onset + persistent unilateral findings = foreign body until evaluated"
            >
              A previously well child who develops abrupt coughing or choking
              followed by persistent focal wheeze or asymmetric breath sounds
              has a classic pattern for retained tracheobronchial foreign body
              aspiration. The initial choking episode may resolve even though
              the object remains.
            </Callout>

            <Callout
              tone="purple"
              label="Delayed Presentation"
              title="Not every aspiration presents immediately"
            >
              When the initial event is unwitnessed or forgotten, children may
              present later with persistent cough, treatment-resistant wheezing,
              atelectasis, or recurrent pneumonia involving the same region.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DIFFERENTIAL DIAGNOSIS
================================================== */}

          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="Persistent wheezing is not always asthma"
            description="Age, abrupt symptom onset, choking history, and focal examination findings help distinguish foreign body aspiration from more common respiratory illnesses."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <InfoCard title="Asthma" tone="blue">
                Recurrent or episodic wheezing is usually more diffuse and often
                occurs with a prior history of similar episodes, triggers, or
                atopy. Persistent unilateral findings should prompt
                consideration of another diagnosis.
              </InfoCard>

              <InfoCard title="Bronchiolitis" tone="blue">
                Typically occurs in infants with a viral prodrome followed by
                diffuse crackles, wheezing, and increased work of breathing
                rather than abrupt focal findings after choking.
              </InfoCard>

              <InfoCard title="Pneumonia" tone="amber">
                Fever, infectious symptoms, focal crackles, or consolidation may
                suggest pneumonia, but recurrent pneumonia in the same location
                can be a clue to an underlying retained foreign body.
              </InfoCard>

              <InfoCard title="Mucus plugging" tone="amber">
                Airway obstruction from secretions may produce focal atelectasis
                or asymmetric breath sounds, particularly in children with
                impaired airway clearance or underlying pulmonary disease.
              </InfoCard>

              <InfoCard title="Airway malacia" tone="purple">
                Tracheomalacia or bronchomalacia may cause recurrent or
                persistent noisy breathing and wheezing, but symptoms are
                generally not linked to a sudden choking event.
              </InfoCard>

              <InfoCard title="Extrinsic airway compression" tone="purple">
                Vascular or mediastinal structures can compress the airway and
                produce persistent focal respiratory symptoms, usually without
                an abrupt choking history.
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Diagnostic Clue"
              title="Focality matters"
            >
              Wheezing that remains localized to one lung or one region is less
              typical of diffuse small-airway diseases such as asthma or
              bronchiolitis. When focal findings follow a sudden choking event,
              foreign body aspiration should move high on the differential.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DIAGNOSTIC WORKUP
================================================== */}

          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="Normal imaging does not exclude aspiration"
            description="Evaluation begins with the clinical history and examination. Imaging can support the diagnosis and localize secondary effects of obstruction, but a normal study cannot reliably exclude a retained tracheobronchial foreign body."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Chest radiographs" tone="blue">
                <p>
                  Obtain frontal and lateral chest radiographs in a stable child
                  with suspected foreign body aspiration. The foreign body may
                  be directly visible if radiopaque, but many aspirated objects
                  are radiolucent.
                </p>

                <p className="mt-3 font-semibold">
                  Look for unilateral hyperinflation, air trapping, mediastinal
                  shift, atelectasis, or focal consolidation.
                </p>
              </InfoCard>

              <InfoCard title="Additional radiographic views" tone="purple">
                <p>
                  Inspiratory-expiratory radiographs may help demonstrate
                  unilateral air trapping when standard radiographs are
                  nondiagnostic. In younger children who cannot cooperate with
                  expiratory imaging, lateral decubitus views may sometimes be
                  used.
                </p>

                <p className="mt-3">
                  Their added diagnostic value is variable, so use depends on
                  patient age, clinical suspicion, and institutional practice.
                </p>
              </InfoCard>

              <InfoCard title="CT in selected patients" tone="amber">
                <p>
                  When the diagnosis remains uncertain after radiographs,
                  low-dose noncontrast chest CT may help identify a radiolucent
                  foreign body or secondary airway changes in selected stable
                  patients.
                </p>

                <p className="mt-3 font-semibold">
                  CT should not delay bronchoscopy when clinical suspicion is
                  high.
                </p>
              </InfoCard>

              <InfoCard title="Bronchoscopy" tone="rose">
                <p>
                  Persistent clinical concern warrants airway evaluation even
                  when radiographs are normal. Bronchoscopy provides direct
                  visualization of the tracheobronchial tree and allows
                  foreign-body removal during the same procedure.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Key Principle"
              title="A normal chest radiograph does not rule out foreign body aspiration"
            >
              Many aspirated foreign bodies are radiolucent. When the history
              and examination remain concerning, normal radiographs should not
              provide false reassurance or prevent further airway evaluation.
            </Callout>
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
                      Bronchial Foreign Body: Unilateral Air Trapping
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
                      Foreign Body Aspiration Chest Radiograph (Hellerhoff,
                      2022)
                    </a>{" "}
                    · CC BY-SA 4.0
                  </p>
                  <div className="mt-5 rounded-xl border border-sky-200 bg-sky-50 p-5">
                    <p className="font-semibold text-sky-900">Clinical Pearl</p>

                    <p className="mt-2 leading-7 text-sky-900">
                      Most aspirated foreign bodies are radiolucent and are not
                      directly visible on chest radiographs. Diagnosis often
                      relies on indirect findings such as unilateral
                      hyperinflation, air trapping, and mediastinal shift.
                    </p>
                  </div>
                </div>

                {/* Esophageal Coin */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                        Comparison
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-blue-950">
                        Esophageal Coin
                      </h3>
                      <p className="mt-2 text-slate-600">
                        AP and lateral radiographs demonstrate the typical
                        appearance of an esophageal foreign body. The lateral
                        view confirms that the coin lies posterior to the
                        trachea.
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
                    🔍 Click either image to view the full-resolution
                    radiograph.
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
                        On the <strong>AP radiograph</strong>, esophageal coins
                        are usually seen
                        <strong> en face</strong> (round), whereas tracheal
                        coins more commonly appear edge-on.
                      </li>

                      <li>
                        The <strong>lateral radiograph</strong> confirms the
                        coin is
                        <strong> posterior to the trachea</strong>, supporting
                        an esophageal location.
                      </li>

                      <li>
                        Always distinguish a coin from a{" "}
                        <strong>button battery</strong>, which requires emergent
                        removal because of the risk of caustic injury.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </DiseaseSection>

          {/* =================================================
    MANAGEMENT
================================================== */}

          <DiseaseSection
            id="management"
            label="Management"
            title="A suspected retained foreign body requires definitive airway evaluation"
            description="Once the immediate choking episode has resolved, management focuses on maintaining clinical stability, recognizing when suspicion remains high, and arranging bronchoscopic evaluation and removal."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Initial management" tone="blue">
                <ul className="space-y-2">
                  <li>
                    • Keep the child calm and minimize unnecessary agitation
                  </li>
                  <li>
                    • Assess respiratory status and provide oxygen when
                    indicated
                  </li>
                  <li>• Maintain appropriate monitoring</li>
                  <li>
                    • Keep the child NPO when bronchoscopy may be required
                  </li>
                  <li>• Avoid unnecessary airway manipulation</li>
                  <li>• Involve the appropriate airway team early</li>
                </ul>
              </InfoCard>

              <InfoCard title="When suspicion remains high" tone="amber">
                <ul className="space-y-2">
                  <li>• Witnessed or strongly suspected aspiration event</li>
                  <li>• Persistent focal wheeze or asymmetric breath sounds</li>
                  <li>• Unilateral air trapping or focal atelectasis</li>
                  <li>• Persistent symptoms despite normal radiographs</li>
                  <li>
                    • Recurrent focal pneumonia without another explanation
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              tone="rose"
              label="Definitive Management"
              title="Bronchoscopy allows visualization and removal"
            >
              A retained tracheobronchial foreign body requires bronchoscopic
              removal. Rigid bronchoscopy is commonly used because it provides
              airway control, ventilation, direct visualization, and access for
              extraction instruments. The procedural team varies by institution
              and may include otolaryngology, pediatric surgery, pulmonology,
              and anesthesia.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DISPOSITION
================================================== */}

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="Disposition depends on whether a foreign body remains"
            description="Clinical improvement after the choking episode is not enough to determine disposition. Persistent suspicion for a retained tracheobronchial foreign body requires continued evaluation and appropriate airway consultation."
          >
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Discharge" tone="emerald">
                <ul className="space-y-2">
                  <li>
                    • Foreign body successfully removed or aspiration excluded
                  </li>
                  <li>• Breathing comfortably without respiratory distress</li>
                  <li>• Normal or reassuring respiratory examination</li>
                  <li>• No persistent hypoxemia</li>
                  <li>• No concerning post-procedural complication</li>
                  <li>
                    • Appropriate follow-up and return precautions arranged
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Observe & reassess" tone="amber">
                <ul className="space-y-2">
                  <li>• Persistent cough or wheeze after the choking event</li>
                  <li>• Focal or asymmetric respiratory findings</li>
                  <li>• Abnormal chest imaging</li>
                  <li>• Uncertainty that the foreign body was expelled</li>
                  <li>• Requires further diagnostic or specialty evaluation</li>
                  <li>
                    • Monitoring after bronchoscopic removal when indicated
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Escalate care" tone="rose">
                <ul className="space-y-2">
                  <li>• Respiratory distress or hypoxemia</li>
                  <li>• Worsening or unstable airway symptoms</li>
                  <li>• Suspected retained tracheobronchial foreign body</li>
                  <li>• Requires urgent bronchoscopy or operative removal</li>
                  <li>
                    • Significant atelectasis or post-obstructive infection
                  </li>
                  <li>• Complication following foreign-body removal</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Disposition Pearl"
              title="Normal oxygen saturation does not equal a safe discharge"
            >
              A child with a retained bronchial foreign body may appear
              comfortable and maintain normal oxygen saturation. Persistent
              focal findings or a convincing aspiration history should drive
              further evaluation rather than reassurance from the pulse oximeter
              alone.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    CLINICAL PEARLS
================================================== */}

          <DiseaseSection
            id="pearls"
            label="Clinical Pearls"
            title="High-yield takeaways"
            description="Keep these principles in mind when evaluating a child with possible foreign body aspiration."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard
                number={1}
                title="The choking may stop while the foreign body remains"
              >
                Improvement after the initial choking episode does not prove
                that the object was expelled. A retained foreign body may
                continue to cause cough, wheeze, or focal respiratory findings.
              </PearlCard>

              <PearlCard
                number={2}
                title="Focal wheezing deserves an explanation"
              >
                Persistent unilateral wheeze or asymmetric breath sounds are
                important clues to focal airway obstruction, particularly when
                symptoms began abruptly in a previously well child.
              </PearlCard>

              <PearlCard
                number={3}
                title="A normal radiograph does not rule it out"
              >
                Many aspirated foreign bodies are radiolucent. When the history
                and examination remain concerning, normal chest radiographs
                should not end the evaluation.
              </PearlCard>

              <PearlCard
                number={4}
                title="Delayed aspiration can mimic common respiratory disease"
              >
                An unwitnessed or missed aspiration may present later as
                persistent cough, treatment-resistant wheezing, atelectasis, or
                recurrent pneumonia involving the same region.
              </PearlCard>

              <PearlCard
                number={5}
                title="Do not assume the foreign body is on the right"
              >
                In young children, the differences between the right and left
                mainstem bronchial angles are less pronounced than in adults, so
                an aspirated foreign body may lodge on either side.
              </PearlCard>
            </div>

            <Callout
              tone="purple"
              label="Bottom Line"
              title="Think foreign body when the story is sudden and the findings are focal"
            >
              A sudden choking or coughing event followed by persistent
              unilateral wheezing, asymmetric breath sounds, or focal
              radiographic abnormalities should raise concern for a retained
              tracheobronchial foreign body—even when the child appears well or
              the initial radiograph is normal.
            </Callout>
          </DiseaseSection>
          {/* =================================================
    QUIZ
================================================== */}

          <DiseaseSection
            id="quiz"
            label="Knowledge Check"
            title="Test your understanding"
            description="Apply the major diagnostic and management principles of pediatric foreign body aspiration."
          >
            <ProgressiveQuiz questions={questions} />
          </DiseaseSection>

          <AnkiDeck
            title="Foreign Body Aspiration"
            cardCount={16}
            downloadHref="/Anki/foreign-body-aspiration.apkg"
          />

          {/* =================================================
    EVIDENCE BASE
================================================== */}
          <EvidenceBase
            references={references}
            secondarySources="Additional educational synthesis incorporates established pediatric emergency medicine, pulmonology, otolaryngology, and radiology principles. PediAtlas is intended for education and does not replace institution-specific protocols or clinical judgment."
          />
        </div>
      </div>
    </main>
  );
}
