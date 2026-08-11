import Link from "next/link";

import {
  DiseaseSection,
  InfoCard,
  Callout,
  ProcessStep,
  PearlCard,
  ProgressiveQuiz,
  EvidenceBase,
  FigureModal,
  type QuizQuestion,
  type Reference,
} from "@/components/disease";

import { MobileSectionNav } from "@/components";

/* =========================================================
   QUIZ DATA
========================================================= */

const quizQuestions: QuizQuestion[] = [
  // We will build these after the clinical content is finished.
];

/* =========================================================
   REFERENCES
========================================================= */

const references: Reference[] = [
  // We will add the vetted Epiglottitis references here.
];

/* =========================================================
   PAGE
========================================================= */

export default function EpiglottitisPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 via-sky-50/70 to-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}

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
              href="/respiratory/upper-airway"
              className="text-blue-800 hover:text-blue-600"
            >
              Upper Airway
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-slate-600">Epiglottitis</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Epiglottis &amp; Supraglottic Airway
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Epiglottitis
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Epiglottitis is a rapidly progressive inflammation of the
                epiglottis and adjacent supraglottic structures that can cause
                life-threatening upper-airway obstruction.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Upper Airway
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                  Supraglottic
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  Airway Emergency
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Hib Prevention
                </span>
              </div>
            </div>

            <div className="text-8xl" aria-hidden="true">
              🗣️
            </div>
          </div>
        </div>
      </header>
      {/* =====================================================
    PAGE LAYOUT
====================================================== */}

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[220px_1fr]">
        {/* ===================================================
      SIDEBAR
  ==================================================== */}

        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            On this page
          </p>

          <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold text-blue-800">
            <a href="#vignette">Clinical vignette</a>
            <a href="#localization">Anatomy &amp; Localization</a>
            <a href="#pathophysiology">Pathophysiology</a>
            <a href="#assessment">History &amp; Physical</a>
            <a href="#differential">Differential Diagnosis</a>
            <a href="#workup">Diagnostic Workup</a>
            <a href="#management">Management</a>
            <a href="#disposition">Disposition</a>
            <a href="#pearls">Clinical Pearls</a>
            <a href="#quiz">Quiz</a>
          </nav>
        </aside>

        {/* =====================================================
      MOBILE SECTION NAVIGATION
  ====================================================== */}

        <MobileSectionNav
          title="Epiglottitis"
          sections={[
            { id: "vignette", label: "Clinical Vignette" },
            { id: "localization", label: "Anatomy & Localization" },
            { id: "pathophysiology", label: "Pathophysiology" },
            { id: "assessment", label: "History & Physical" },
            { id: "differential", label: "Differential Diagnosis" },
            { id: "workup", label: "Diagnostic Workup" },
            { id: "management", label: "Management" },
            { id: "disposition", label: "Disposition" },
            { id: "pearls", label: "Clinical Pearls" },
            { id: "quiz", label: "Quiz" },
          ]}
        />

        {/* ===================================================
      MAIN CONTENT
  ==================================================== */}

        <div className="space-y-14">
          {/* =================================================
        CLINICAL VIGNETTE
    ================================================== */}
          <DiseaseSection
            id="vignette"
            label="Clinical Vignette"
            title="A child who refuses to lie down"
            description="Recognize the airway emergency before reaching for a test."
          >
            <div className="rounded-3xl bg-blue-950 p-7 text-white">
              <p className="text-lg leading-8 text-blue-50">
                A 3-year-old boy is brought to the emergency department for
                abrupt onset of high fever, severe sore throat, and refusal to
                drink. His parents report that over the past several hours he
                has become progressively less willing to speak or swallow.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                He has had very little cough and no significant rhinorrhea. His
                immunizations are not up to date.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                Temperature is 39.4°C/102.9°F. He sits upright on his
                caregiver&apos;s lap, leaning forward with his neck extended. He
                is drooling rather than swallowing his secretions, and his voice
                is quiet and muffled. Inspiratory stridor is beginning to
                develop.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                When someone attempts to reposition him for examination, he
                becomes visibly more distressed and immediately returns to his
                preferred upright position.
              </p>

              <div className="mt-7 rounded-2xl bg-white/10 p-5">
                <p className="font-semibold text-rose-200">
                  Your first clinical task
                </p>

                <p className="mt-2 leading-7 text-blue-50">
                  What diagnosis should immediately concern you, and what
                  routine examination or testing steps could make this child
                  less safe?
                </p>
              </div>
            </div>
          </DiseaseSection>
          {/* =================================================
        ANATOMY & LOCALIZATION
    ================================================== */}
          <DiseaseSection
            id="localization"
            label="Anatomy & Localization"
            title="Epiglottitis is a supraglottic airway disease"
            description="The level of inflammation explains the drooling, muffled voice, dysphagia, and rapid risk of airway obstruction."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Epiglottis & supraglottic airway" tone="blue">
                <p>
                  Epiglottitis primarily affects the epiglottis and adjacent
                  supraglottic structures above the vocal cords. Inflammation
                  and edema in this region can narrow the upper airway and
                  interfere with swallowing and secretion handling.
                </p>
              </InfoCard>

              <InfoCard title="Subglottic airway" tone="slate">
                <p>
                  The subglottic airway lies below the vocal cords and is the
                  classic site of narrowing in croup. Disease at this level more
                  commonly produces a barking cough, hoarseness, and inspiratory
                  stridor without the prominent dysphagia and drooling seen in
                  supraglottic disease.
                </p>
              </InfoCard>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard title="Drooling" tone="blue">
                <p>
                  Painful swallowing and supraglottic inflammation can make the
                  child unwilling or unable to handle oral secretions.
                </p>
              </InfoCard>

              <InfoCard title="Muffled voice" tone="blue">
                <p>
                  Swelling above the vocal cords alters upper-airway resonance
                  and can produce the classic muffled or &quot;hot potato&quot;
                  quality.
                </p>
              </InfoCard>

              <InfoCard title="Tripod positioning" tone="blue">
                <p>
                  Children may sit upright, lean forward, and extend the neck in
                  an attempt to maximize airway patency and reduce obstruction.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Localization Check"
              title="Supraglottic vs subglottic obstruction"
              tone="amber"
            >
              <p>
                Croup and epiglottitis can both cause stridor, but the
                associated symptoms help localize the obstruction. Barking cough
                and hoarseness point toward the laryngeal/subglottic airway,
                whereas severe sore throat, dysphagia, drooling, and muffled
                voice suggest supraglottic disease.
              </p>
            </Callout>
          </DiseaseSection>
          {/* =================================================
        PATHOPHYSIOLOGY
    ================================================== */}
          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="Supraglottic inflammation can rapidly become a mechanical airway problem"
            description="Follow the progression from infection to edema, obstruction, and positional compensation."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="1"
                title="Supraglottic infection"
                description="Bacterial infection involves the epiglottis and adjacent supraglottic tissues. Historically, Haemophilus influenzae type b was the dominant pediatric cause, but other bacterial pathogens are now increasingly recognized."
              />

              <ProcessStep
                number="2"
                title="Rapid inflammatory edema"
                description="Inflammation causes marked swelling of the epiglottis and nearby supraglottic structures, narrowing the entrance to the laryngeal airway."
              />

              <ProcessStep
                number="3"
                title="Progressive obstruction"
                description="As edema increases, airflow through the upper airway becomes increasingly restricted. Stridor, retractions, hypoxemia, and respiratory distress may develop as obstruction worsens."
              />

              <ProcessStep
                number="4"
                title="Positional compensation"
                description="Children may sit upright, lean forward, and extend the neck to improve airway patency and reduce posterior displacement of the swollen epiglottis."
              />
            </div>

            <Callout
              label="Why position matters"
              title="The tripod position is a physiologic adaptation"
              tone="blue"
            >
              <p>
                In young children, the epiglottis is relatively flexible. When
                it becomes markedly edematous, lying supine may allow the
                swollen tissue to shift posteriorly and further narrow the
                airway. Leaning forward can help move the epiglottis anteriorly
                and preserve airflow.
              </p>
            </Callout>

            <Callout
              label="Airway Safety"
              title="Agitation can convert a tenuous airway into a critical airway"
              tone="rose"
            >
              <p>
                A child with significant supraglottic edema may be maintaining
                airway patency through position and respiratory effort. Forced
                examination, painful procedures, or unnecessary repositioning
                can increase distress and airflow demand while reducing the
                child&apos;s ability to maintain a position of comfort.
              </p>
            </Callout>

            <InfoCard title="The Hib vaccine changed the disease" tone="slate">
              <p>
                Before widespread Hib conjugate vaccination, epiglottitis was
                strongly associated with invasive Haemophilus influenzae type b
                disease in young children. Vaccination has dramatically reduced
                invasive Hib disease and shifted pediatric epiglottitis toward a
                much rarer condition with a broader range of potential bacterial
                causes (Streptococcus pneumoniae, Group A Streptococcus, and
                Staphylococcus aureus).
              </p>
            </InfoCard>
          </DiseaseSection>
          {/* =================================================
        HISTORY & PHYSICAL
    ================================================== */}
          <DiseaseSection
            id="assessment"
            label="History & Physical"
            title="The bedside presentation should trigger concern before testing begins"
            description="Epiglottitis classically progresses rapidly, with prominent swallowing difficulty and signs of upper-airway obstruction."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Classic history" tone="blue">
                <ul className="space-y-3">
                  <li>• Abrupt onset and rapid progression over hours</li>
                  <li>• High fever</li>
                  <li>• Severe sore throat</li>
                  <li>• Dysphagia or odynophagia</li>
                  <li>• Refusal to eat or drink</li>
                  <li>• Drooling or inability to handle secretions</li>
                  <li>• Muffled or quiet voice</li>
                  <li>• Little or no cough compared with croup</li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical examination" tone="blue">
                <ul className="space-y-3">
                  <li>• Anxious or ill-appearing child</li>
                  <li>• Drooling</li>
                  <li>• Muffled voice</li>
                  <li>• Inspiratory stridor as obstruction progresses</li>
                  <li>• Upright or tripod positioning</li>
                  <li>• Neck extension</li>
                  <li>• Retractions and increased work of breathing</li>
                  <li>
                    • Cyanosis or altered mental status in advanced obstruction
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Classic Pattern"
              title="Remember the 3 Ds — but look at the whole child"
              tone="amber"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="font-bold">Drooling</p>
                  <p className="mt-1">
                    Difficulty handling secretions because swallowing is painful
                    or impaired.
                  </p>
                </div>

                <div>
                  <p className="font-bold">Dysphagia</p>
                  <p className="mt-1">
                    Severe supraglottic inflammation makes swallowing difficult
                    and painful.
                  </p>
                </div>

                <div>
                  <p className="font-bold">Distress</p>
                  <p className="mt-1">
                    Progressive airway narrowing can produce anxiety, stridor,
                    retractions, and respiratory distress.
                  </p>
                </div>
              </div>
            </Callout>

            <Callout
              label="Bedside Clue"
              title="A child who refuses to lie down is telling you something"
              tone="blue"
            >
              <p>
                A child who insists on sitting upright, leaning forward, or
                extending the neck may be actively maintaining airway patency.
                Do not force the child supine simply to complete a routine
                examination.
              </p>
            </Callout>

            <Callout
              label="Do Not Miss"
              title="Do not force an oropharyngeal examination in a child with suspected epiglottitis"
              tone="rose"
            >
              <p>
                Avoid using a tongue depressor or otherwise forcing
                visualization of the pharynx in a child with significant concern
                for epiglottitis. Agitation and airway manipulation can worsen
                obstruction. Keep the child calm and prioritize airway planning
                with experienced clinicians.
              </p>
            </Callout>
          </DiseaseSection>
          {/* =================================================
        DIFFERENTIAL DIAGNOSIS
    ================================================== */}
          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="What else can cause acute upper-airway obstruction?"
            description="Stridor localizes the obstruction but does not identify the cause. The tempo of illness, swallowing difficulty, cough, fever, and associated findings help distinguish epiglottitis from other upper-airway emergencies."
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              {[
                {
                  diagnosis: "Croup",
                  clues:
                    "Usually preceded by rhinorrhea and URI symptoms with a barking cough and hoarseness. Fever is often lower, drooling is unusual, and the child generally does not appear toxic.",
                },
                {
                  diagnosis: "Bacterial tracheitis",
                  clues:
                    "High fever, toxic appearance, stridor, rapidly progressive obstruction, and thick or purulent airway secretions. A barking cough may occur, and response to typical croup therapy is often poor.",
                },
                {
                  diagnosis: "Retropharyngeal / deep-neck infection",
                  clues:
                    "Fever, neck pain or stiffness, limited neck movement, dysphagia, drooling, muffled voice, or visible neck swelling. Stridor may occur if swelling significantly compromises the airway.",
                },
                {
                  diagnosis: "Foreign body",
                  clues:
                    "Abrupt onset after choking or eating, usually without fever or a preceding infectious illness. Findings depend on the location and degree of airway obstruction.",
                },
                {
                  diagnosis: "Anaphylaxis / angioedema",
                  clues:
                    "Sudden airway symptoms with lip or tongue swelling, urticaria, gastrointestinal symptoms, hypotension, or a recent allergen exposure. Fever and a progressive infectious prodrome are generally absent.",
                },
              ].map((item, index) => (
                <div
                  key={item.diagnosis}
                  className={`grid gap-3 p-5 md:grid-cols-[220px_1fr] ${
                    index !== 4 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <p className="font-bold text-slate-900">{item.diagnosis}</p>

                  <p className="leading-7 text-slate-600">{item.clues}</p>
                </div>
              ))}
            </div>

            <Callout
              label="Croup vs Epiglottitis"
              title="The cough and the swallow are powerful clues"
              tone="blue"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="font-bold text-blue-950">Think croup</p>

                  <ul className="mt-3 space-y-2">
                    <li>• Viral URI prodrome</li>
                    <li>• Barking cough</li>
                    <li>• Hoarseness</li>
                    <li>• Stridor</li>
                    <li>• Usually handles secretions</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-blue-950">Think epiglottitis</p>

                  <ul className="mt-3 space-y-2">
                    <li>• Rapid progression</li>
                    <li>• High fever</li>
                    <li>• Severe sore throat</li>
                    <li>• Dysphagia and drooling</li>
                    <li>• Muffled voice</li>
                    <li>• Tripod positioning</li>
                    <li>• Barking cough typically absent</li>
                  </ul>
                </div>
              </div>
            </Callout>

            <Callout
              label="Diagnostic Red Flag"
              title="Drooling + stridor should change your approach"
              tone="rose"
            >
              <p>
                Prominent drooling or difficulty handling secretions in a child
                with stridor is not typical uncomplicated croup. Consider
                epiglottitis, deep-neck infection, foreign body, or another
                serious upper-airway process before performing potentially
                agitating examinations or procedures.
              </p>
            </Callout>
          </DiseaseSection>
          {/* =================================================
        DIAGNOSTIC WORKUP
    ================================================== */}
          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="Airway stability determines the diagnostic approach"
            description="When epiglottitis is suspected, confirming the diagnosis must never take priority over maintaining a safe airway."
          >
            <Callout
              label="First Principle"
              title="Do not destabilize the child to obtain a diagnosis"
              tone="rose"
            >
              <p>
                Keep the child calm and allow them to remain in their preferred
                position. Avoid unnecessary IV placement, blood draws, forced
                oropharyngeal examination, or transport for imaging when
                significant airway compromise is suspected.
              </p>
            </Callout>

            <div className="grid gap-5 md:grid-cols-3">
              <ProcessStep
                number="1"
                title="Assess airway stability"
                description="Evaluate position, work of breathing, stridor, secretion handling, oxygenation, air entry, and mental status while disturbing the child as little as possible."
              />

              <ProcessStep
                number="2"
                title="Decide whether testing is safe"
                description="A stable child may undergo limited diagnostic evaluation when the diagnosis remains uncertain. A child with significant or progressive obstruction should not be sent away from an airway-capable setting simply to obtain testing."
              />

              <ProcessStep
                number="3"
                title="Coordinate definitive evaluation"
                description="When airway intervention is required, direct visualization of the swollen epiglottis can confirm the diagnosis while the airway is secured in a controlled setting with experienced clinicians."
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Stable child" tone="amber">
                <ul className="space-y-3">
                  <li>• Maintain close airway observation</li>
                  <li>• Minimize agitation throughout the evaluation</li>
                  <li>
                    • Consider lateral neck radiography if the diagnosis is
                    uncertain
                  </li>
                  <li>
                    • Obtain laboratory studies only when they can be performed
                    safely
                  </li>
                  <li>• Continue reassessing for clinical deterioration</li>
                </ul>
              </InfoCard>

              <InfoCard title="Unstable or rapidly worsening child" tone="rose">
                <ul className="space-y-3">
                  <li>
                    • Prioritize airway management over diagnostic testing
                  </li>
                  <li>• Do not delay airway planning for radiographs</li>
                  <li>• Avoid forced examination of the oropharynx</li>
                  <li>
                    • Minimize procedures that provoke crying or agitation
                  </li>
                  <li>• Involve experienced airway clinicians immediately</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Imaging Pearl"
              title="The thumb sign can support the diagnosis"
              tone="blue"
            >
              <p>
                When lateral neck radiography can be obtained safely, marked
                swelling of the epiglottis may produce the classic{" "}
                <strong>thumb sign</strong>. Imaging is supportive rather than a
                prerequisite for treatment and should not delay airway
                management in a child with significant obstruction.
              </p>
            </Callout>

            <InfoCard
              title="Laboratory & microbiologic evaluation"
              tone="slate"
            >
              <p>
                Blood cultures may help identify the causative organism,
                particularly when bacteremia is present. Additional laboratory
                testing should be obtained only when it can be performed without
                compromising airway safety.
              </p>

              <p className="mt-4">
                If the airway is secured, cultures from the epiglottic surface
                may be obtained during controlled visualization when clinically
                appropriate. Diagnostic sampling should not precede
                stabilization of a threatened airway.
              </p>
            </InfoCard>

            <Callout
              label="Direct Visualization"
              title="Seeing the epiglottis is not worth losing the airway"
              tone="rose"
            >
              <p>
                A swollen, erythematous epiglottis can establish the diagnosis
                during direct visualization, but examination of a threatened
                pediatric airway should occur only in a controlled setting where
                definitive airway management can be performed immediately.
              </p>
            </Callout>
          </DiseaseSection>
          {/* =================================================
        MANAGEMENT
    ================================================== */}

          {/* =================================================
        DISPOSITION
    ================================================== */}

          {/* =================================================
        CLINICAL PEARLS
    ================================================== */}

          {/* =================================================
        QUIZ
    ================================================== */}

          {/* =================================================
        EVIDENCE BASE
    ================================================== */}

          {/* =================================================
        BOTTOM NAVIGATION
    ================================================== */}
        </div>
      </div>
    </main>
  );
}
