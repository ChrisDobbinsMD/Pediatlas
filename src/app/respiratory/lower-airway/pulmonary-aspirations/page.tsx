"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EvidenceBase } from "@/components/disease";

const aspirationSyndromes = [
  {
    title: "Aspiration pneumonitis",
    subtitle: "Sterile chemical lung injury",
    accentClass: "border-amber-200 bg-amber-50",
    labelClass: "text-amber-700",
    titleClass: "text-amber-950",
    textClass: "text-amber-900",
    details: [
      {
        label: "Mechanism",
        text:
          "Direct chemical injury after aspiration of acidic gastric contents or another irritating substance.",
      },
      {
        label: "Typical timing",
        text:
          "Abrupt symptoms developing within minutes to hours of a witnessed or strongly suspected aspiration event.",
      },
      {
        label: "Clinical findings",
        text:
          "Cough, tachypnea, hypoxemia, increased work of breathing, wheezing, or diffuse crackles. Fever and leukocytosis may occur from inflammation alone.",
      },
      {
        label: "Imaging",
        text:
          "Dependent or multifocal airspace opacities may appear, although early chest radiographs can be normal.",
      },
      {
        label: "Treatment",
        text:
          "Supportive respiratory care. Antibiotics are not routinely indicated unless a bacterial infection subsequently becomes likely.",
      },
    ],
  },
  {
    title: "Aspiration pneumonia",
    subtitle: "Bacterial pulmonary infection",
    accentClass: "border-rose-200 bg-rose-50",
    labelClass: "text-rose-700",
    titleClass: "text-rose-950",
    textClass: "text-rose-900",
    details: [
      {
        label: "Mechanism",
        text:
          "Aspiration of bacteria-containing oropharyngeal or gastric material followed by infection of the pulmonary parenchyma.",
      },
      {
        label: "Typical timing",
        text:
          "Symptoms generally evolve over hours to days rather than immediately after a single aspiration event.",
      },
      {
        label: "Clinical findings",
        text:
          "Persistent or worsening fever, cough, respiratory distress, focal crackles, hypoxemia, and systemic signs of infection.",
      },
      {
        label: "Imaging",
        text:
          "Focal or multifocal infiltrates, often involving dependent lung segments based on the child's position during aspiration.",
      },
      {
        label: "Treatment",
        text:
          "Antibiotic therapy directed toward likely community or hospital pathogens, guided by the clinical setting and local recommendations.",
      },
    ],
  },
  {
    title: "Chronic pulmonary aspiration",
    subtitle: "Repeated or ongoing airway contamination",
    accentClass: "border-purple-200 bg-purple-50",
    labelClass: "text-purple-700",
    titleClass: "text-purple-950",
    textClass: "text-purple-900",
    details: [
      {
        label: "Mechanism",
        text:
          "Repeated aspiration caused by swallowing dysfunction, impaired airway protection, reflux, structural abnormalities, or ineffective clearance.",
      },
      {
        label: "Typical timing",
        text:
          "A recurrent or progressive course over weeks to months, often without one dramatic aspiration event.",
      },
      {
        label: "Clinical findings",
        text:
          "Coughing or choking with feeds, wet respirations, recurrent pneumonia, chronic cough, wheezing, poor growth, or persistent oxygen requirement.",
      },
      {
        label: "Imaging",
        text:
          "Recurrent dependent opacities, atelectasis, airway wall thickening, bronchiectasis, or chronic inflammatory changes.",
      },
      {
        label: "Treatment",
        text:
          "Identify and address the source of aspiration, optimize feeding safety and airway clearance, and treat acute infections or chronic lung complications when present.",
      },
    ],
  },
];

const quizQuestions = [
  {
    question:
      "A previously healthy 3-year-old has a seizure followed by emesis and a witnessed aspiration event. Within 2 hours, she develops tachypnea, hypoxemia, and diffuse crackles. She has a temperature of 38.1°C. What is the most likely diagnosis?",
    answers: [
      {
        text: "Aspiration pneumonitis",
        correct: true,
        feedback:
          "Correct. The abrupt respiratory deterioration shortly after a witnessed aspiration event is most consistent with chemical pneumonitis. Fever can occur from the inflammatory response and does not by itself establish bacterial infection.",
      },
      {
        text: "Aspiration pneumonia",
        correct: false,
        feedback:
          "Not quite. Aspiration pneumonia is a bacterial infection and generally has a more evolving infectious course. Immediate respiratory deterioration after a clear aspiration event favors chemical pneumonitis.",
      },
      {
        text: "Chronic pulmonary aspiration",
        correct: false,
        feedback:
          "Not quite. Chronic aspiration typically presents with recurrent feeding-associated symptoms, chronic cough, recurrent pneumonia, or poor growth rather than a single abrupt event.",
      },
      {
        text: "Foreign body aspiration",
        correct: false,
        feedback:
          "Not quite. Foreign body aspiration can cause abrupt respiratory symptoms, but this history specifically describes emesis followed by aspiration of gastric contents.",
      },
    ],
  },

  {
    question:
      "A 2-year-old with cerebral palsy has recurrent pneumonia, poor weight gain, and intermittent oxygen desaturations. His parents deny coughing or choking during feeds. Which statement is most accurate?",
    answers: [
      {
        text: "The absence of coughing makes aspiration unlikely",
        correct: false,
        feedback:
          "Incorrect. Children with neurologic impairment may have reduced laryngeal sensation or a weak cough and can aspirate without an obvious protective response.",
      },
      {
        text: "Silent aspiration should still be considered",
        correct: true,
        feedback:
          "Correct. Silent aspiration can occur without coughing or choking, particularly in children with neurologic impairment or reduced airway sensation.",
      },
      {
        text: "A normal chest radiograph would exclude aspiration",
        correct: false,
        feedback:
          "Incorrect. A normal chest radiograph does not exclude intermittent or chronic aspiration. Imaging findings may be absent or variable.",
      },
      {
        text: "Aspiration should only be considered if disease is right-sided",
        correct: false,
        feedback:
          "Incorrect. Aspiration is not obligatorily right-sided in children. Distribution depends on body position, airway anatomy, and the aspiration event.",
      },
    ],
  },

  {
    question:
      "A child has recurrent coughing and oxygen desaturation specifically during feeds. Which study best evaluates swallowing mechanics and can demonstrate material passing below the vocal folds during swallowing?",
    answers: [
      {
        text: "Chest CT",
        correct: false,
        feedback:
          "Incorrect. Chest CT can evaluate complications such as bronchiectasis or chronic lung injury but does not directly evaluate swallowing mechanics.",
      },
      {
        text: "Videofluoroscopic swallow study (VFSS/MBSS)",
        correct: true,
        feedback:
          "Correct. VFSS/MBSS dynamically evaluates the oral and pharyngeal phases of swallowing and can identify penetration, aspiration, timing abnormalities, and the effect of different consistencies or feeding strategies.",
      },
      {
        text: "Flexible bronchoscopy",
        correct: false,
        feedback:
          "Not the best answer. Bronchoscopy can evaluate airway anatomy and other pulmonary pathology but does not provide the same dynamic assessment of swallowing as VFSS.",
      },
      {
        text: "Chest radiograph",
        correct: false,
        feedback:
          "Incorrect. A chest radiograph may demonstrate pulmonary consequences of aspiration but cannot determine whether aspiration occurs during swallowing.",
      },
    ],
  },

  {
    question:
      "A hospitalized child has a clinical course consistent with community-onset bacterial aspiration pneumonia and requires IV therapy. Which approach is commonly used?",
    answers: [
      {
        text: "Supportive care without antibiotics in every case",
        correct: false,
        feedback:
          "Incorrect. Supportive care alone is appropriate for isolated aspiration pneumonitis, but this child has a clinical syndrome consistent with bacterial aspiration pneumonia.",
      },
      {
        text: "Ampicillin-sulbactam",
        correct: true,
        feedback:
          "Correct. Ampicillin-sulbactam is a commonly used IV option for community-onset pediatric aspiration pneumonia. Pediatric-specific aspiration-pneumonia comparative evidence is limited, so therapy should also reflect local antimicrobial guidance.",
      },
      {
        text: "Metronidazole alone",
        correct: false,
        feedback:
          "Incorrect. Routine dedicated anaerobic therapy with metronidazole alone is not appropriate treatment for uncomplicated aspiration pneumonia and would inadequately cover typical respiratory pathogens.",
      },
      {
        text: "Vancomycin alone",
        correct: false,
        feedback:
          "Incorrect. Vancomycin alone does not provide appropriate empiric coverage for routine community-onset aspiration pneumonia. MRSA coverage is reserved for appropriate clinical risk.",
      },
    ],
  },

  {
    question:
      "Which statement about the anatomic distribution of pulmonary aspiration in children is most accurate?",
    answers: [
      {
        text: "Aspiration always enters the right mainstem bronchus",
        correct: false,
        feedback:
          "Incorrect. Pediatric main bronchial anatomy is more symmetric than adult anatomy, especially in younger children, so aspiration is not obligatorily right-sided.",
      },
      {
        text: "Aspiration always causes right lower lobe disease",
        correct: false,
        feedback:
          "Incorrect. The affected lung regions vary with body position, airway anatomy, and the nature of the aspiration event.",
      },
      {
        text: "Dependent lung regions are commonly involved, but laterality is not absolute",
        correct: true,
        feedback:
          "Correct. Aspiration often affects dependent lung regions, but the exact distribution depends on patient position and pediatric airway anatomy.",
      },
      {
        text: "The location of pulmonary disease has no relationship to body position",
        correct: false,
        feedback:
          "Incorrect. Gravity and body position influence which lung regions are dependent and therefore more likely to receive aspirated material.",
      },
    ],
  },
];

export default function PulmonaryAspirationPage() {
const [selectedAnswers, setSelectedAnswers] = useState<
  Record<number, number>
>({});

const [visibleQuestionCount, setVisibleQuestionCount] = useState(1);

  const [showVFSSAnnotations, setShowVFSSAnnotations] =
    useState(false);

  const [showXRAnnotations, setShowXRAnnotations] =
    useState(false);

    const [showAntibiotics, setShowAntibiotics] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HERO ================= */}

      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 to-white px-6 py-14">

        <div className="mx-auto max-w-6xl">

          <nav className="flex flex-wrap gap-3 text-sm font-semibold">

            <Link
              href="/"
              className="text-blue-800 hover:text-blue-600"
            >
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
              Pulmonary Aspiration
            </span>

          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Airway Protection & Swallowing Disorders
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Pulmonary Aspiration
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Pulmonary aspiration occurs when material from the
                oropharynx or stomach enters the lower respiratory tract.
                The clinical presentation ranges from acute chemical lung
                injury to bacterial pneumonia and chronic recurrent
                aspiration resulting in progressive lung disease.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  Chemical Injury
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  Infection
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Chronic Aspiration
                </span>

              </div>

            </div>

            <div
              className="text-8xl"
              aria-hidden="true"
            >
              🫁🥛
            </div>

          </div>

        </div>

      </header>

      {/* ================= PAGE ================= */}

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[220px_1fr]">

        {/* Sidebar */}

        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            On this page
          </p>

          <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold text-blue-800">

            <a href="#vignette">Clinical vignette</a>

            <a href="#localization">
              Anatomy & Localization
            </a>

            <a href="#pathophysiology">
              Pathophysiology
            </a>

            <a href="#assessment">
              History & Physical
            </a>

            <a href="#workup">
              Diagnostic Workup
            </a>

            <a href="#management">
              Management
            </a>

            <a href="#disposition">
              Disposition
            </a>

            <a href="#pearls">
              Clinical Pearls
            </a>

            <a href="#quiz">
              Quiz
            </a>

          </nav>

        </aside>

        <div className="space-y-8">

          {/* ================= CLINICAL VIGNETTE ================= */}

          <section
            id="vignette"
            className="rounded-3xl border border-blue-200 bg-blue-950 p-8 text-white shadow-sm"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Clinical vignette
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              An infant with coughing during feeds
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-50">
              A 5-month-old infant presents with recurrent coughing,
              choking, and oxygen desaturations during bottle feeds.
              Parents report frequent respiratory illnesses and poor
              weight gain. Chest radiographs demonstrate recurrent
              right lower lobe infiltrates. The clinical team becomes
              concerned for pulmonary aspiration caused by impaired
              swallowing.
            </p>

            <div className="mt-7 rounded-2xl bg-white/10 p-5">

              <p className="font-semibold text-sky-200">
                Your first clinical task
              </p>

              <p className="mt-2 leading-7 text-blue-50">
                Determine whether aspiration is acute or chronic,
                identify the source of aspirated material,
                evaluate swallowing safety, and recognize which
                aspiration syndrome best explains the child's
                presentation.
              </p>

            </div>

          </section>

                    {/* ================= ANATOMY ================= */}

          <section
            id="localization"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Anatomy &amp; Localization
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Aspiration begins when airway protection fails
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              During normal swallowing, multiple protective mechanisms
              prevent food, liquid, and gastric contents from entering
              the lower respiratory tract. Pulmonary aspiration occurs
              when these defenses fail, allowing material to pass
              through the larynx and into the tracheobronchial tree.
            </p>

            <div className="mt-8 flex justify-center">
  <Image
    src="/images/aspiration.png"
    alt="Normal swallowing compared with pulmonary aspiration."
    width={700}
    height={500}
    className="h-auto w-full max-w-xl rounded-2xl border border-slate-200 shadow-sm"
    unoptimized
  />
</div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Normal Swallowing
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  Multiple protective mechanisms
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-blue-900">
                  <li>• Coordinated oral and pharyngeal swallow</li>
                  <li>• Elevation of the larynx</li>
                  <li>• Epiglottic inversion over the laryngeal inlet</li>
                  <li>• Vocal cord closure</li>
                  <li>• Upper esophageal sphincter relaxation</li>
                  <li>• Effective cough clears minor aspiration events</li>
                </ul>

              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                  Pulmonary Aspiration
                </p>

                <h3 className="mt-2 text-2xl font-bold text-rose-950">
                  Material enters the lower airway
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-rose-900">
                  <li>• Food or liquid passes below the vocal cords</li>
                  <li>• Gastric contents may reflux into the airway</li>
                  <li>• Poor cough fails to clear aspirated material</li>
                  <li>• Repeated aspiration causes chronic inflammation</li>
                  <li>• Infection develops when bacteria proliferate</li>
                  <li>• Long-term injury may lead to bronchiectasis</li>
                </ul>

              </div>

            </div>

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Common causes of aspiration
              </p>

              <div className="mt-5 grid gap-4">

                {[
                  {
                    title: "Swallowing dysfunction",
                    text:
                      "Neurologic disease, developmental delay, craniofacial abnormalities, and immature feeding coordination impair normal swallowing.",
                  },
                  {
                    title: "Reduced airway protection",
                    text:
                      "Altered mental status, seizures, sedation, anesthesia, or intoxication reduce protective airway reflexes.",
                  },
                  {
                    title: "Gastroesophageal reflux",
                    text:
                      "Refluxed gastric contents may reach the pharynx and be aspirated, particularly in children with impaired airway clearance.",
                  },
                  {
                    title: "Structural abnormalities",
                    text:
                      "Laryngeal cleft, tracheoesophageal fistula, vocal cord paralysis, and other congenital lesions predispose to recurrent aspiration.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 rounded-2xl border border-amber-100 bg-white p-5 md:grid-cols-[220px_1fr]"
                  >
                    <h4 className="font-bold text-amber-950">
                      {item.title}
                    </h4>

                    <p className="leading-7 text-slate-700">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Pediatric Anatomy Pearl
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                Healthy children frequently experience small episodes of
                physiologic microaspiration during sleep that are rapidly
                cleared by normal cough and mucociliary function. Disease
                develops when aspiration is large-volume, recurrent, or
                occurs in children with impaired airway protection or
                ineffective clearance mechanisms.
              </p>

            </div>

          </section>

                    {/* ================= PATHOPHYSIOLOGY ================= */}

          <section
            id="pathophysiology"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Pathophysiology
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Aspiration produces three clinically distinct syndromes
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The pulmonary response depends on the type of material
              aspirated, the volume and frequency of aspiration, the
              bacterial burden, and the child&apos;s ability to protect
              and clear the airway. Distinguishing these syndromes helps
              determine whether treatment should emphasize supportive
              care, antibiotics, or prevention of recurrent aspiration.
            </p>

            <div className="mt-8 space-y-6">
              {aspirationSyndromes.map((syndrome) => (
                <div
                  key={syndrome.title}
                  className={`overflow-hidden rounded-2xl border ${syndrome.accentClass}`}
                >
                  <div className="border-b border-current/10 p-6">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.2em] ${syndrome.labelClass}`}
                    >
                      {syndrome.subtitle}
                    </p>

                    <h3
                      className={`mt-2 text-2xl font-bold ${syndrome.titleClass}`}
                    >
                      {syndrome.title}
                    </h3>
                  </div>

                  <div className="divide-y divide-slate-200/70 bg-white/70">
                    {syndrome.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="grid gap-2 p-5 md:grid-cols-[170px_1fr]"
                      >
                        <p
                          className={`font-bold ${syndrome.titleClass}`}
                        >
                          {detail.label}
                        </p>

                        <p
                          className={`leading-7 ${syndrome.textClass}`}
                        >
                          {detail.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Clinical timeline pearl
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                Immediate respiratory deterioration after a clear
                aspiration event favors pneumonitis. Persistent or
                progressive infectious findings over the following days
                favor aspiration pneumonia. Recurrent feeding-associated
                symptoms and repeated focal lung disease suggest chronic
                pulmonary aspiration.
              </p>
            </div>
          </section>

                    {/* ================= CLINICAL ASSESSMENT ================= */}

          <section
            id="assessment"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Histry and Phyiscal Exam
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Look for acute events, feeding symptoms, and evidence of chronic lung injury
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Aspiration may present as an abrupt respiratory event or as
              recurrent, subtle symptoms associated with feeding. A focused
              history and examination should identify the likely timing,
              source, severity, and underlying risk factors.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* History */}

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  History
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  Ask how and when symptoms occur
                </h3>

                <div className="mt-5 space-y-6">
                  <div>
                    <h4 className="font-bold text-blue-950">
                      Acute aspiration clues
                    </h4>

                    <ul className="mt-3 space-y-2 leading-7 text-blue-900">
                      <li>• Witnessed choking, gagging, or vomiting</li>
                      <li>• Sudden cough or respiratory distress</li>
                      <li>• Seizure or altered mental status</li>
                      <li>• Recent anesthesia, sedation, or procedure</li>
                      <li>• Abrupt oxygen desaturation</li>
                      <li>• Symptoms beginning within hours of an event</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950">
                      Chronic aspiration clues
                    </h4>

                    <ul className="mt-3 space-y-2 leading-7 text-blue-900">
                      <li>• Coughing, choking, or gagging during feeds</li>
                      <li>• Wet voice or wet respirations after feeding</li>
                      <li>• Prolonged or stressful feeding sessions</li>
                      <li>• Recurrent pneumonia or bronchiolitis-like illness</li>
                      <li>• Chronic cough or persistent wheezing</li>
                      <li>• Feeding refusal, fatigue, or poor weight gain</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Physical examination */}

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Physical examination
                </p>

                <h3 className="mt-2 text-2xl font-bold text-amber-950">
                  Examine breathing, feeding, and growth
                </h3>

                <div className="mt-5 space-y-6">
                  <div>
                    <h4 className="font-bold text-amber-950">
                      Respiratory findings
                    </h4>

                    <ul className="mt-3 space-y-2 leading-7 text-amber-900">
                      <li>• Tachypnea or increased work of breathing</li>
                      <li>• Hypoxemia or intermittent desaturation</li>
                      <li>• Crackles, rhonchi, or wheezing</li>
                      <li>• Decreased or asymmetric air entry</li>
                      <li>• Persistent oxygen requirement</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-amber-950">
                      Feeding and general findings
                    </h4>

                    <ul className="mt-3 space-y-2 leading-7 text-amber-900">
                      <li>• Coughing or choking during observed feeds</li>
                      <li>• Drooling or difficulty managing secretions</li>
                      <li>• Wet vocal quality after swallowing</li>
                      <li>• Poor coordination of suck, swallow, and breathing</li>
                      <li>• Growth faltering or malnutrition</li>
                      <li>• Digital clubbing in advanced chronic disease</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Risk factors */}

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Risk factors
                </p>

                <h3 className="mt-2 text-2xl font-bold text-emerald-950">
                  Identify why airway protection may be impaired
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-emerald-900">
                  <li>
                    • Neurologic impairment, developmental delay, or
                    neuromuscular weakness
                  </li>

                  <li>
                    • Prematurity or immature suck-swallow-breathe coordination
                  </li>

                  <li>
                    • Craniofacial abnormalities or congenital airway lesions
                  </li>

                  <li>
                    • Laryngeal cleft, vocal cord paralysis, or
                    tracheoesophageal fistula
                  </li>

                  <li>
                    • Gastroesophageal reflux with impaired airway clearance
                  </li>

                  <li>
                    • Tracheostomy, feeding tube dependence, or prolonged
                    hospitalization
                  </li>

                  <li>
                    • Sedating medications or recurrent episodes of altered
                    consciousness
                  </li>
                </ul>
              </div>

              {/* Red flags */}

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                  Red flags
                </p>

                <h3 className="mt-2 text-2xl font-bold text-rose-950">
                  Escalate when airway or respiratory stability is threatened
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-rose-900">
                  <li>• Apnea, cyanosis, or altered mental status</li>
                  <li>• Severe hypoxemia or rapidly increasing oxygen need</li>
                  <li>• Marked respiratory distress or exhaustion</li>
                  <li>• Inability to protect the airway or manage secretions</li>
                  <li>• Recurrent aspiration despite current feeding precautions</li>
                  <li>• Failure to thrive with significant feeding intolerance</li>
                  <li>• Recurrent pneumonia in the same dependent region</li>
                  <li>• Concern for sepsis, abscess, or complicated pneumonia</li>
                </ul>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-purple-200 bg-purple-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                Silent aspiration
              </p>

              <h3 className="mt-2 text-xl font-bold text-purple-950">
                The absence of coughing does not exclude aspiration
              </h3>

              <p className="mt-3 leading-7 text-purple-900">
                Children with neurologic impairment, reduced laryngeal
                sensation, or weak cough may aspirate without obvious choking.
                Recurrent respiratory disease, feeding difficulty, or unexplained
                oxygen desaturation may be the only clues.
              </p>
            </div>
          </section>

                    {/* ================= DIAGNOSTIC WORKUP ================= */}

          <section
            id="workup"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Diagnostic workup
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Choose testing based on the clinical question
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              No single study evaluates every cause or consequence of
              aspiration. Testing should determine whether aspiration is
              occurring, identify resulting lung injury, and clarify the
              underlying swallowing, airway, neurologic, or gastrointestinal
              disorder.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Is aspiration occurring? */}

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Clinical question 1
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  Is aspiration occurring during swallowing?
                </h3>

                <div className="mt-5 space-y-5">
                  <div>
                    <h4 className="font-bold text-blue-950">
                      Clinical feeding evaluation
                    </h4>

                    <p className="mt-2 leading-7 text-blue-900">
                      A speech-language pathologist assesses oral motor
                      function, feeding coordination, positioning, secretion
                      management, and symptoms during feeding.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950">
                      Videofluoroscopic swallow study (VFSS)/Modified Barium Swallow Study (MBSS)
                    </h4>

                    <p className="mt-2 leading-7 text-blue-900">
                      VFSS/MBSS evaluates the oral and pharyngeal phases of
                      swallowing using contrast-containing liquids and foods.
                      It can identify penetration, aspiration, timing
                      abnormalities, and potentially safer consistencies or
                      feeding strategies.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950">
                      Flexible endoscopic evaluation of swallowing
                    </h4>

                    <p className="mt-2 leading-7 text-blue-900">
                      FEES directly examines pharyngeal and laryngeal anatomy,
                      secretion management, airway protection, and swallowing
                      before and after the brief white-out period created by
                      pharyngeal contraction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Has lung injury occurred? */}

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Clinical question 2
                </p>

                <h3 className="mt-2 text-2xl font-bold text-amber-950">
                  Has acute pulmonary injury occurred?
                </h3>

                <div className="mt-5 space-y-5">
                  <div>
                    <h4 className="font-bold text-amber-950">
                      Pulse oximetry and respiratory monitoring
                    </h4>

                    <p className="mt-2 leading-7 text-amber-900">
                      Assess oxygenation, respiratory effort, and the need for
                      escalating respiratory support.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-amber-950">
                      Chest radiograph
                    </h4>

                    <p className="mt-2 leading-7 text-amber-900">
                      Obtain when respiratory symptoms are significant,
                      persistent, focal, or concerning for pneumonia or a
                      complication. Early imaging may be normal despite a
                      clinically important aspiration event.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-amber-950">
                      Laboratory testing
                    </h4>

                    <p className="mt-2 leading-7 text-amber-900">
                      CBC, inflammatory markers, blood gas, cultures, or
                      metabolic testing should be guided by illness severity
                      and concern for infection, respiratory failure, or an
                      underlying acute event.
                    </p>
                  </div>
                </div>
              </div>

              {/* Is chronic lung disease present? */}

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Clinical question 3
                </p>

                <h3 className="mt-2 text-2xl font-bold text-emerald-950">
                  Is there recurrent or chronic lung injury?
                </h3>

                <div className="mt-5 space-y-5">
                  <div>
                    <h4 className="font-bold text-emerald-950">
                      Review prior imaging
                    </h4>

                    <p className="mt-2 leading-7 text-emerald-900">
                      Recurrent opacities, atelectasis, or disease repeatedly
                      affecting dependent regions may suggest ongoing
                      aspiration.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-950">
                      Chest CT
                    </h4>

                    <p className="mt-2 leading-7 text-emerald-900">
                      Consider when symptoms are persistent, complications are
                      suspected, or detailed assessment for bronchiectasis,
                      chronic atelectasis, airway disease, or structural lung
                      abnormalities is needed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-950">
                      Bronchoscopy
                    </h4>

                    <p className="mt-2 leading-7 text-emerald-900">
                      May be used to evaluate airway anatomy, retained material,
                      infection, airway inflammation, or another diagnosis when
                      noninvasive testing does not explain the clinical course.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why is aspiration occurring? */}

              <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                  Clinical question 4
                </p>

                <h3 className="mt-2 text-2xl font-bold text-purple-950">
                  Why is aspiration occurring?
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-purple-900">
                  <li>
                    • <strong>Speech-language pathology:</strong> swallowing
                    physiology and feeding safety
                  </li>

                  <li>
                    • <strong>ENT:</strong> vocal cord dysfunction, laryngeal
                    cleft, airway lesions, or impaired laryngeal sensation
                  </li>

                  <li>
                    • <strong>Pulmonology:</strong> chronic lung injury,
                    bronchoscopy, and airway clearance
                  </li>

                  <li>
                    • <strong>Gastroenterology:</strong> esophageal disease,
                    reflux evaluation, motility disorders, and nutrition
                  </li>

                  <li>
                    • <strong>Neurology:</strong> impaired consciousness,
                    neuromuscular weakness, seizures, or developmental disease
                  </li>

                  <li>
                    • <strong>Aerodigestive team:</strong> coordinated
                    evaluation when several systems contribute
                  </li>
                </ul>
              </div>
            </div>

            {/* ================= VFSS IMAGE ================= */}

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <div className="border-b border-slate-200 bg-white p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                      Swallow imaging
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      Videofluoroscopic swallow study (VFSS)/Modified Barium Swallow Study (MBSS)
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setShowVFSSAnnotations((previous) => !previous)
                    }
                    className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-800 transition hover:bg-sky-100"
                  >
                    {showVFSSAnnotations
                      ? "Hide annotations"
                      : "Show annotations"}
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/10] bg-slate-200">
                <Image
                  src={
                    showVFSSAnnotations
                      ? "/images/pulmonary-aspiration-vfss-annotated.png"
                      : "/images/pulmonary-aspiration-vfss.png"
                  }
                  alt={
                    showVFSSAnnotations
                      ? "Annotated videofluoroscopic swallow study demonstrating pulmonary aspiration"
                      : "Videofluoroscopic swallow study demonstrating pulmonary aspiration"
                  }
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  What to look for
                </p>

                <p className="mt-3 leading-7 text-slate-700">
                  Contrast passing below the level of the vocal folds indicates
                  aspiration. Contrast entering the laryngeal vestibule but
                  remaining above the vocal folds is termed penetration.
                </p>
              </div>
            </div>

            {/* ================= CHEST X-RAY IMAGE ================= */}

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <div className="border-b border-slate-200 bg-white p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                      Chest imaging
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      Aspiration-related airspace disease
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setShowXRAnnotations((previous) => !previous)
                    }
                    className="rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-800 transition hover:bg-sky-100"
                  >
                    {showXRAnnotations
                      ? "Hide annotations"
                      : "Show annotations"}
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/10] bg-slate-200">
                <Image
                  src={
                    showXRAnnotations
                      ? "/images/pulmonary-aspiration-xray-annotated.png"
                      : "/images/pulmonary-aspiration-xray.png"
                  }
                  alt={
                    showXRAnnotations
                      ? "Annotated chest radiograph showing aspiration-related airspace opacities"
                      : "Chest radiograph showing aspiration-related airspace opacities"
                  }
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Imaging pearl
                </p>

                <p className="mt-3 leading-7 text-slate-700">
                  Aspiration often affects dependent lung regions, but the
                  distribution varies with patient position and the timing of
                  the event. Imaging findings are supportive rather than
                  independently diagnostic of aspiration.
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                Important limitation
              </p>

              <h3 className="mt-2 text-xl font-bold text-rose-950">
                A single normal study does not exclude intermittent aspiration
              </h3>

              <p className="mt-3 leading-7 text-rose-900">
                Aspiration may vary by consistency, fatigue, positioning,
                illness, feeding technique, and level of alertness. Test
                results must be interpreted alongside the child&apos;s usual
                feeding history and respiratory course.
              </p>
            </div>
          </section>

          {/* ================= MANAGEMENT ================= */}

          <section
            id="management"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Management
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Stabilize first, identify the syndrome, then prevent recurrence
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Initial management focuses on airway protection and respiratory
              support. Subsequent treatment depends on whether the child has
              aspiration pneumonitis, aspiration pneumonia, or chronic
              pulmonary aspiration requiring long-term intervention.
            </p>

            {/* ================= ALGORITHM ================= */}

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-center">
                Initial Management Algorithm
              </h3>

              <div className="mt-8 flex flex-col items-center space-y-4">

                <div className="rounded-xl bg-sky-100 border border-sky-300 px-6 py-4 font-semibold text-center">
                  Child with suspected pulmonary aspiration
                </div>

                <div className="text-3xl">↓</div>

                <div className="rounded-xl bg-white border px-6 py-4 text-center">
                  Assess airway, breathing, circulation (ABCs)
                </div>

                <div className="text-3xl">↓</div>

                <div className="grid md:grid-cols-2 gap-8 w-full">

                  <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                    <h4 className="text-xl font-bold text-red-900">
                      Unstable Patient
                    </h4>

                    <ul className="mt-4 space-y-2 text-red-900 leading-7">
                      <li>• Airway protection</li>
                      <li>• Supplemental oxygen</li>
                      <li>• Suction secretions</li>
                      <li>• Escalate respiratory support</li>
                      <li>• Mechanical ventilation if needed</li>
                      <li>• PICU consultation</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                    <h4 className="text-xl font-bold text-emerald-900">
                      Stable Patient
                    </h4>

                    <ul className="mt-4 space-y-2 text-emerald-900 leading-7">
                      <li>• Focused history & physical</li>
                      <li>• Determine aspiration syndrome</li>
                      <li>• Obtain indicated studies</li>
                      <li>• Identify underlying cause</li>
                    </ul>
                  </div>

                </div>

                                <div className="text-3xl">↓</div>

                <div className="rounded-xl border bg-white px-6 py-4 text-center font-semibold">
                  Determine the clinical syndrome
                </div>

                <div className="mt-4 grid w-full gap-6 lg:grid-cols-3">
                  {/* Aspiration pneumonitis */}

                  <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
                    <h4 className="font-bold text-amber-950">
                      Aspiration Pneumonitis
                    </h4>

                    <p className="mt-3 leading-7 text-amber-900">
                      Supportive care. Routine antibiotics are not indicated.
                    </p>
                  </div>

                  {/* Aspiration pneumonia */}

                  <div className="rounded-2xl border border-blue-300 bg-blue-50 p-5">
                    <h4 className="font-bold text-blue-950">
                      Aspiration Pneumonia
                    </h4>

                    <p className="mt-3 leading-7 text-blue-900">
                      Begin appropriate antibiotics plus supportive care.
                    </p>
                  </div>

                  {/* Chronic aspiration */}

                  <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5">
                    <h4 className="font-bold text-emerald-950">
                      Chronic Aspiration
                    </h4>

                    <p className="mt-3 leading-7 text-emerald-900">
                      Investigate the underlying cause and develop a long-term
                      prevention strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= MANAGEMENT CARDS ================= */}

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {/* Supportive care */}

              <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
                <h3 className="text-2xl font-bold text-amber-950">
                  Supportive Care
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-amber-900">
                  <li>• Airway positioning and suctioning</li>
                  <li>• Supplemental oxygen</li>
                  <li>• Escalate respiratory support as needed</li>
                  <li>• IV fluids when oral intake is inadequate</li>
                  <li>• Bronchodilators only if bronchospasm is present</li>
                  <li>
                    • Continuous reassessment for clinical deterioration
                  </li>
                </ul>
              </div>

              {/* Antibiotic therapy */}

              <div className="rounded-2xl border border-blue-300 bg-blue-50 p-6">
                <h3 className="text-2xl font-bold text-blue-950">
                  Antibiotic Therapy
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-blue-900">
                  <li>
                    • Not routinely recommended for isolated aspiration
                    pneumonitis
                  </li>

                  <li>
                    • Treat aspiration pneumonia when bacterial infection is
                    suspected
                  </li>

                  <li>
                    • Choose antibiotics based on community versus hospital
                    acquisition
                  </li>

                  <li>
                    • Adjust therapy using cultures and clinical response when
                    available
                  </li>
                </ul>
              </div>

              {/* Prevent recurrence */}

              <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
                <h3 className="text-2xl font-bold text-emerald-950">
                  Prevent Recurrence
                </h3>

                <ul className="mt-5 space-y-3 leading-7 text-emerald-900">
                  <li>• Swallow therapy with Speech-Language Pathology</li>
                  <li>• Feeding modifications when appropriate</li>
                  <li>• Optimize positioning during feeds</li>
                  <li>• Treat contributing neurologic or GI disorders</li>
                  <li>
                    • Multidisciplinary aerodigestive follow-up for complex
                    patients
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Clinical Pearl
              </p>

              <h3 className="mt-2 text-xl font-bold text-sky-950">
                The underlying cause is just as important as treating the acute event
              </h3>

              <p className="mt-3 leading-7 text-sky-900">
                Children with recurrent aspiration often require coordinated
                care involving Speech-Language Pathology, Pulmonology,
                Gastroenterology, Otolaryngology, Neurology, Nutrition, and
                Primary Care. Preventing future aspiration episodes is essential
                to avoid progressive chronic lung disease.
              </p>
            </div>

{/* ================= EXPANDABLE ANTIBIOTIC GUIDE ================= */}

<div className="mt-8 overflow-hidden rounded-2xl border border-blue-200 bg-blue-50">
  <button
    type="button"
    onClick={() => setShowAntibiotics((previous) => !previous)}
    aria-expanded={showAntibiotics}
    aria-controls="aspiration-antibiotic-guide"
    className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-blue-100"
  >
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Medication quick reference
      </p>

      <h3 className="mt-2 text-xl font-bold text-blue-950">
  Empiric Antibiotic Selection
</h3>

<p className="mt-2 text-sm leading-6 text-blue-800">
  Common IV and oral approaches for pediatric aspiration pneumonia
</p>
    </div>

    <span
      aria-hidden="true"
      className={`shrink-0 text-2xl font-semibold text-blue-800 transition-transform duration-200 ${
        showAntibiotics ? "rotate-180" : ""
      }`}
    >
     ⌄
    </span>
  </button>

  {showAntibiotics && (
  <div
    id="aspiration-antibiotic-guide"
    className="border-t border-blue-200 bg-white p-6 md:p-8"
  >
    <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
        Evidence note
      </p>

      <p className="mt-3 leading-7 text-slate-700">
        PIDS/IDSA pediatric community-acquired pneumonia guidelines do not
        provide a separate empiric regimen specifically for aspiration
        pneumonia. In practice, antibiotic selection generally follows
        pediatric pneumonia principles while accounting for aspiration risk,
        illness severity, prior cultures, healthcare exposure, and local
        antimicrobial guidance.
      </p>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="px-4 py-4 text-sm font-bold uppercase tracking-wide text-slate-600">
              Clinical setting
            </th>

            <th className="px-4 py-4 text-sm font-bold uppercase tracking-wide text-slate-600">
              Common empiric approach
            </th>

            <th className="px-4 py-4 text-sm font-bold uppercase tracking-wide text-slate-600">
              Notes
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200">
          <tr className="align-top">
            <td className="px-4 py-5 font-semibold text-slate-900">
              Community-onset aspiration pneumonia requiring IV therapy
            </td>

            <td className="px-4 py-5 text-slate-700">
              <p className="font-bold text-blue-950">
                Ampicillin-sulbactam
              </p>

              <p className="mt-2">
                Commonly used when bacterial aspiration pneumonia is suspected
                and parenteral therapy is appropriate.
              </p>
            </td>

            <td className="px-4 py-5 leading-7 text-slate-700">
              Provides coverage for typical respiratory pathogens together
              with oral flora. Dose according to local pediatric antimicrobial
              guidance and renal function.
            </td>
          </tr>

          <tr className="align-top">
            <td className="px-4 py-5 font-semibold text-slate-900">
              Community-onset aspiration pneumonia appropriate for oral therapy
              or IV-to-PO transition
            </td>

            <td className="px-4 py-5 text-slate-700">
              <p className="font-bold text-blue-950">
                Amoxicillin-clavulanate
              </p>

              <p className="mt-2">
                Common enteral option for a clinically stable child.
              </p>
            </td>

            <td className="px-4 py-5 leading-7 text-slate-700">
              Dose using the amoxicillin component according to age,
              indication, formulation, renal function, and local pediatric
              guidance.
            </td>
          </tr>

          <tr className="align-top">
            <td className="px-4 py-5 font-semibold text-slate-900">
              Severe immediate-type β-lactam allergy
            </td>

            <td className="px-4 py-5 text-slate-700">
              <p className="font-bold text-blue-950">
                Individualize therapy
              </p>

              <p className="mt-2">
                Clindamycin may be considered in selected patients depending
                on the allergy phenotype, likely organisms, and local
                susceptibility patterns.
              </p>
            </td>

            <td className="px-4 py-5 leading-7 text-slate-700">
              Use institution-specific pediatric antimicrobial stewardship
              guidance rather than a single universal substitute.
            </td>
          </tr>

          <tr className="align-top">
            <td className="px-4 py-5 font-semibold text-slate-900">
              Healthcare-associated disease or significant resistant-organism risk
            </td>

            <td className="px-4 py-5 text-slate-700">
              <p className="font-bold text-blue-950">
                Follow institutional pneumonia guidance
              </p>

              <p className="mt-2">
                Broader gram-negative and/or MRSA coverage may be required.
              </p>
            </td>

            <td className="px-4 py-5 leading-7 text-slate-700">
              Prior cultures, recent antibiotics, devices, local resistance
              patterns, and illness severity should guide escalation.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
        Antibiotic stewardship pearl
      </p>

      <h4 className="mt-2 text-xl font-bold text-amber-950">
        Aspiration pneumonitis does not require routine antibiotics
      </h4>

      <p className="mt-3 leading-7 text-amber-900">
        Fever, leukocytosis, and pulmonary infiltrates may occur after an
        aspiration event from inflammation alone. Antibiotics should be
        reserved for patients whose clinical course supports bacterial
        aspiration pneumonia rather than given automatically after aspiration.
      </p>
    </div>

    <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Anaerobic coverage
      </p>

      <h4 className="mt-2 text-xl font-bold text-blue-950">
        Avoid automatically adding dedicated anaerobic therapy
      </h4>

      <p className="mt-3 leading-7 text-blue-900">
        Ampicillin-sulbactam and amoxicillin-clavulanate already provide
        activity against oral anaerobes. Routine addition of metronidazole or
        another dedicated anaerobic agent is generally unnecessary for
        uncomplicated aspiration pneumonia. Complicated infection such as lung
        abscess, empyema, or necrotizing disease should be managed according to
        the specific complication and local guidance.
      </p>
    </div>

    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="font-semibold text-slate-900">
        Guideline context
      </p>

      <p className="mt-2 leading-7 text-slate-700">
        The PIDS/IDSA pediatric CAP guideline provides the broader framework
        for empiric pneumonia treatment but does not issue a dedicated
        aspiration-pneumonia regimen. Keep this distinction explicit when
        interpreting the evidence.
      </p>
    </div>
  </div>
)}
</div>

</section>

{/* ================= CARE SETTING & FOLLOW-UP ================= */}

<section
  id="disposition"
  className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
    Disposition/Care setting &amp; follow-up
  </p>

  <h2 className="mt-2 text-3xl font-bold">
    Match the care plan to respiratory severity, feeding safety, and recurrence risk
  </h2>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Children with pulmonary aspiration may be managed in the outpatient
    setting, admitted for acute respiratory support or feeding evaluation,
    or require intensive care when airway protection and ventilation are
    compromised. Long-term follow-up should focus on preventing recurrent
    aspiration and chronic lung injury.
  </p>

  <div className="mt-8 grid gap-6 lg:grid-cols-3">
    {/* Outpatient management */}

    <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Outpatient care
      </p>

      <h3 className="mt-2 text-2xl font-bold text-emerald-950">
        Appropriate when the child is clinically stable
      </h3>

      <ul className="mt-5 space-y-3 leading-7 text-emerald-900">
        <li>• Stable oxygenation without significant respiratory distress</li>
        <li>• Safe feeding plan or reliable alternative nutrition plan</li>
        <li>• No evidence of progressive respiratory deterioration</li>
        <li>• Caregivers understand feeding precautions and warning signs</li>
        <li>• Timely primary care and subspecialty follow-up can be arranged</li>
      </ul>
    </div>

    {/* Inpatient care */}

    <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
        Inpatient care
      </p>

      <h3 className="mt-2 text-2xl font-bold text-amber-950">
        Admit when monitoring or active treatment is required
      </h3>

      <ul className="mt-5 space-y-3 leading-7 text-amber-900">
        <li>• Persistent oxygen requirement or moderate respiratory distress</li>
        <li>• Need for IV fluids, enteral support, or feeding restriction</li>
        <li>• Aspiration pneumonia requiring inpatient therapy</li>
        <li>• Need for swallow evaluation or feeding-plan development</li>
        <li>• Recurrent events requiring coordinated diagnostic evaluation</li>
        <li>• Inability to maintain hydration, nutrition, or secretion control</li>
      </ul>
    </div>

    {/* Intensive care */}

    <div className="rounded-2xl border border-red-300 bg-red-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
        Intensive care
      </p>

      <h3 className="mt-2 text-2xl font-bold text-red-950">
        Escalate when airway protection or ventilation is threatened
      </h3>

      <ul className="mt-5 space-y-3 leading-7 text-red-900">
        <li>• Respiratory failure or rapidly worsening gas exchange</li>
        <li>• Need for noninvasive or invasive ventilatory support</li>
        <li>• Inability to protect the airway or manage secretions</li>
        <li>• Recurrent apnea, cyanosis, or altered mental status</li>
        <li>• Hemodynamic instability or concern for severe sepsis</li>
      </ul>
    </div>
  </div>

  <div className="mt-8 rounded-2xl border border-purple-200 bg-purple-50 p-6">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
      Long-term follow-up
    </p>

    <h3 className="mt-2 text-xl font-bold text-purple-950">
      Follow-up should address both lung disease and the source of aspiration
    </h3>

    <p className="mt-3 leading-7 text-purple-900">
      Depending on the underlying disorder, children may require coordinated
      care involving Primary Care, Speech-Language Pathology, Pulmonology,
      Gastroenterology, Otolaryngology, Nutrition, Neurology, Surgery, and an
      aerodigestive program.
    </p>

    <div className="mt-5 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-purple-200 bg-white/70 p-4">
        <h4 className="font-bold text-purple-950">
          Monitor respiratory outcomes
        </h4>

        <ul className="mt-3 space-y-2 leading-7 text-purple-900">
          <li>• Recurrent pneumonia or wheezing</li>
          <li>• Oxygen requirement</li>
          <li>• Airway-clearance needs</li>
          <li>• Development of bronchiectasis or chronic lung disease</li>
        </ul>
      </div>

      <div className="rounded-xl border border-purple-200 bg-white/70 p-4">
        <h4 className="font-bold text-purple-950">
          Monitor feeding and growth
        </h4>

        <ul className="mt-3 space-y-2 leading-7 text-purple-900">
          <li>• Feeding tolerance and safety</li>
          <li>• Weight gain and nutritional status</li>
          <li>• Need for repeat swallow evaluation</li>
          <li>• Effectiveness of the prevention plan</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  
{/* ================= CLINICAL PEARLS ================= */}

<section
  id="pearls"
  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
    Clinical Pearls
  </p>

  <h2 className="mt-2 text-3xl font-bold">
    High-yield takeaways
  </h2>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    These are the practical distinctions that matter most when evaluating
    and managing children with suspected pulmonary aspiration.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-2">

    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <h3 className="font-bold text-amber-950">
        1. Aspiration pneumonitis is not aspiration pneumonia
      </h3>

      <p className="mt-3 leading-7 text-amber-900">
        Pneumonitis is primarily a chemical inflammatory injury, whereas
        aspiration pneumonia is a bacterial infection. The distinction
        directly affects whether antibiotics are indicated.
      </p>
    </div>

    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
      <h3 className="font-bold text-blue-950">
        2. Immediate deterioration favors pneumonitis
      </h3>

      <p className="mt-3 leading-7 text-blue-900">
        Abrupt cough, hypoxemia, wheezing, or respiratory distress shortly
        after a witnessed aspiration event is more consistent with chemical
        injury than bacterial pneumonia.
      </p>
    </div>

    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
      <h3 className="font-bold text-rose-950">
        3. Fever does not automatically mean infection
      </h3>

      <p className="mt-3 leading-7 text-rose-900">
        Fever and leukocytosis may occur after aspiration from inflammation
        alone. The overall clinical trajectory is more useful than any single
        finding.
      </p>
    </div>

    <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
      <h3 className="font-bold text-purple-950">
        4. Silent aspiration is common in high-risk children
      </h3>

      <p className="mt-3 leading-7 text-purple-900">
        Children with neurologic impairment, poor laryngeal sensation, or
        weak cough may aspirate without obvious choking or coughing.
      </p>
    </div>

    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h3 className="font-bold text-emerald-950">
        5. Recurrent respiratory disease should trigger a feeding history
      </h3>

      <p className="mt-3 leading-7 text-emerald-900">
        Recurrent pneumonia, chronic wet cough, persistent wheezing, or poor
        growth should prompt questions about coughing, choking, fatigue,
        congestion, or desaturation during feeds.
      </p>
    </div>

    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
      <h3 className="font-bold text-sky-950">
        6. A normal chest radiograph does not exclude aspiration
      </h3>

      <p className="mt-3 leading-7 text-sky-900">
        Early radiographs may be normal, and intermittent aspiration may not
        produce consistent imaging abnormalities.
      </p>
    </div>

    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
      <h3 className="font-bold text-indigo-950">
        7. VFSS and FEES answer different questions
      </h3>

      <p className="mt-3 leading-7 text-indigo-900">
        VFSS evaluates swallowing mechanics across oral and pharyngeal phases,
        while FEES directly evaluates laryngeal anatomy, secretion management,
        and airway protection.
      </p>
    </div>

    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <h3 className="font-bold text-amber-950">
        8. Do not overstate right-sided disease
      </h3>

      <p className="mt-3 leading-7 text-amber-900">
        Aspiration often affects dependent lung regions, but laterality varies
        with body position and pediatric airway anatomy. Right-sided disease
        is not a universal rule in children.
      </p>
    </div>

    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
      <h3 className="font-bold text-blue-950">
        9. Treat the source, not just the lung injury
      </h3>

      <p className="mt-3 leading-7 text-blue-900">
        Recurrent aspiration requires evaluation for swallowing dysfunction,
        neurologic disease, airway abnormalities, esophageal disease, reflux,
        and impaired secretion clearance.
      </p>
    </div>

    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h3 className="font-bold text-emerald-950">
        10. Prevention determines long-term outcome
      </h3>

      <p className="mt-3 leading-7 text-emerald-900">
        Feeding modifications, therapy, airway clearance, nutritional support,
        and multidisciplinary care may be more important long term than
        treating individual aspiration events.
      </p>
    </div>

  </div>

  <div className="mt-8 rounded-2xl bg-blue-950 p-6 text-white">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
      Bottom line
    </p>

    <h3 className="mt-2 text-xl font-bold">
      Aspiration is an event; the syndrome that follows determines the treatment
    </h3>

    <p className="mt-3 leading-7 text-blue-100">
      Think in three categories: chemical pneumonitis, bacterial aspiration
      pneumonia, and chronic recurrent aspiration. Then tailor evaluation and
      management to the child&apos;s physiology, feeding safety, and underlying
      disease.
    </p>
  </div>
</section>

{/* ================= QUIZ ================= */}

<section
  id="quiz"
  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
    Knowledge Check
  </p>

  <h2 className="mt-2 text-3xl font-bold">
    Apply what you learned
  </h2>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Work through each question in sequence. Select an answer, review the
    explanation, then continue to the next question.
  </p>

  <div className="mt-8 space-y-8">
    {quizQuestions
      .slice(0, visibleQuestionCount)
      .map((question, questionIndex) => {
        const selectedAnswerIndex = selectedAnswers[questionIndex];

        const hasAnswered = selectedAnswerIndex !== undefined;

        const selectedAnswer = hasAnswered
          ? question.answers[selectedAnswerIndex]
          : undefined;

        const isCorrect = selectedAnswer?.correct === true;

        return (
          <div
            key={questionIndex}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Question {questionIndex + 1}
              </p>

              {hasAnswered && (
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    isCorrect
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-rose-100 text-rose-800"
                  }`}
                >
                  {isCorrect ? "Correct" : "Review"}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-xl font-bold leading-8 text-slate-950">
              {question.question}
            </h3>

            <div className="mt-6 space-y-3">
              {question.answers.map((answer, answerIndex) => {
                const isSelected =
                  selectedAnswerIndex === answerIndex;

                let answerClass =
                  "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50";

                if (hasAnswered && answer.correct) {
                  answerClass =
                    "border-emerald-400 bg-emerald-50 text-emerald-950";
                }

                if (
                  hasAnswered &&
                  isSelected &&
                  !answer.correct
                ) {
                  answerClass =
                    "border-rose-400 bg-rose-50 text-rose-950";
                }

                return (
                  <button
                    key={answerIndex}
                    type="button"
                    disabled={hasAnswered}
                    onClick={() =>
                      setSelectedAnswers((previous) => ({
                        ...previous,
                        [questionIndex]: answerIndex,
                      }))
                    }
                    className={`w-full rounded-2xl border px-5 py-4 text-left font-medium transition ${answerClass} ${
                      hasAnswered
                        ? "cursor-default"
                        : "cursor-pointer"
                    }`}
                  >
                    <span className="mr-3 font-bold">
                      {String.fromCharCode(65 + answerIndex)}.
                    </span>

                    {answer.text}
                  </button>
                );
              })}
            </div>

            {hasAnswered && selectedAnswer && (
              <div
                className={`mt-6 rounded-2xl border p-6 ${
                  isCorrect
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-amber-200 bg-amber-50"
                }`}
              >
                <p
                  className={`font-bold ${
                    isCorrect
                      ? "text-emerald-950"
                      : "text-amber-950"
                  }`}
                >
                  {isCorrect ? "Correct" : "Not quite"}
                </p>

                <p
                  className={`mt-3 leading-7 ${
                    isCorrect
                      ? "text-emerald-900"
                      : "text-amber-900"
                  }`}
                >
                  {selectedAnswer.feedback}
                </p>

                {questionIndex < quizQuestions.length - 1 &&
                  visibleQuestionCount === questionIndex + 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleQuestionCount(questionIndex + 2)
                      }
                      className="mt-5 rounded-xl bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-blue-900"
                    >
                      Continue to Question {questionIndex + 2} →
                    </button>
                  )}
              </div>
            )}
          </div>
        );
      })}
  </div>

  {visibleQuestionCount === quizQuestions.length &&
    Object.keys(selectedAnswers).length === quizQuestions.length && (
      <div className="mt-8 rounded-2xl bg-blue-950 p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          Quiz Complete
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {
            Object.entries(selectedAnswers).filter(
              ([questionIndex, answerIndex]) =>
                quizQuestions[Number(questionIndex)].answers[answerIndex]
                  .correct
            ).length
          }{" "}
          / {quizQuestions.length} correct
        </h3>

        <p className="mt-3 leading-7 text-blue-100">
          Review any missed questions above before moving on.
        </p>

        <button
          type="button"
          onClick={() => {
            setSelectedAnswers({});
            setVisibleQuestionCount(1);
          }}
          className="mt-5 rounded-xl bg-white px-5 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
        >
          Restart Quiz
        </button>
      </div>
    )}
</section>

      {/* ================= EVIDENCE BASE ================= */}

      <EvidenceBase
        references={[
          {
            title:
              "Chronic Pulmonary Aspiration in Children: Diagnosis and Management",
            href:
              "https://pubmed.ncbi.nlm.nih.gov/29571544/",
            description:
              "Pediatric review outlining the causes, diagnostic evaluation, pulmonary complications, and multidisciplinary management of chronic pulmonary aspiration.",
          },
          {
            title:
              "The Management of Community-Acquired Pneumonia in Infants and Children Older Than 3 Months of Age",
            href:
              "https://pmc.ncbi.nlm.nih.gov/articles/PMC7107838/",
            description:
              "PIDS/IDSA pediatric community-acquired pneumonia guideline providing the broader framework for empiric antibacterial therapy. It does not provide a separate pediatric aspiration-pneumonia regimen.",
          },
        ]}
        secondarySources="UpToDate and OpenEvidence were used for educational verification, comparison of recommendations, and consistency checks where appropriate."
      />

    </div>
  </div>
</main>
  );
}