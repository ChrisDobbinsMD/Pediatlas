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
import EpiglottitisAnatomyFigure from "@/components/disease/figures/EpiglottitisAnatomyFigure";
import EpiglottitisThumbSign from "@/components/disease/figures/EpiglottitisThumbSign";

/* =========================================================
   QUIZ DATA
========================================================= */

const quizQuestions: QuizQuestion[] = [
  {
    question:
      "A 4-year-old child presents with abrupt high fever, severe sore throat, drooling, a muffled voice, and refusal to lie down. He has inspiratory stridor but no barking cough. Which diagnosis should be most strongly suspected?",
    answers: [
      {
        text: "Croup",
        correct: false,
        feedback:
          "Not quite. Croup commonly causes barking cough, hoarseness, and stridor after a viral prodrome. Prominent drooling, severe sore throat, muffled voice, and refusal to lie down should shift concern toward supraglottic disease.",
      },
      {
        text: "Epiglottitis",
        correct: true,
        feedback:
          "Correct. The combination of abrupt high fever, severe sore throat, dysphagia or drooling, muffled voice, tripod or upright positioning, and stridor is classic for epiglottitis.",
      },
      {
        text: "Bronchiolitis",
        correct: false,
        feedback:
          "Incorrect. Bronchiolitis is a lower-airway disease that typically presents with rhinorrhea, cough, wheezing or crackles, and increased work of breathing rather than drooling and muffled voice.",
      },
      {
        text: "Foreign body aspiration",
        correct: false,
        feedback:
          "Not the best answer. Foreign body aspiration can cause acute stridor, but the high fever, severe sore throat, drooling, and progressive infectious presentation strongly favor epiglottitis.",
      },
    ],
  },

  {
    question:
      "The child remains upright on his caregiver's lap, appears anxious, and has inspiratory stridor with difficulty handling secretions. Which action should be avoided?",
    answers: [
      {
        text: "Allowing the child to remain in a position of comfort",
        correct: false,
        feedback:
          "Incorrect. Allowing the child to remain upright and minimizing agitation are important parts of initial management.",
      },
      {
        text: "Early involvement of an experienced pediatric airway team",
        correct: false,
        feedback:
          "Incorrect. Early airway planning is appropriate because epiglottitis can progress rapidly to complete obstruction.",
      },
      {
        text: "Forceful examination of the oropharynx with a tongue depressor",
        correct: true,
        feedback:
          "Correct. Forced visualization of the pharynx can agitate a child with a tenuous airway and may worsen obstruction. Airway safety takes priority over confirming the diagnosis at the bedside.",
      },
      {
        text: "Close monitoring for worsening respiratory distress",
        correct: false,
        feedback:
          "Incorrect. Frequent reassessment is essential because upper-airway obstruction may progress quickly.",
      },
    ],
  },

  {
    question:
      "A child with suspected epiglottitis is clinically stable and the diagnosis remains uncertain. If imaging is obtained, which finding would support the diagnosis?",
    answers: [
      {
        text: "Steeple sign on an AP neck radiograph",
        correct: false,
        feedback:
          "Incorrect. The steeple sign represents tapered subglottic narrowing and is associated with croup.",
      },
      {
        text: "Thumb sign on a lateral neck radiograph",
        correct: true,
        feedback:
          "Correct. Marked swelling of the epiglottis may produce the classic thumb sign on a lateral neck radiograph. Imaging should only be pursued when it can be obtained safely and should never delay airway management.",
      },
      {
        text: "Peribronchial cuffing on chest radiograph",
        correct: false,
        feedback:
          "Incorrect. Peribronchial findings are associated with lower-airway processes and do not identify supraglottic inflammation.",
      },
      {
        text: "Unilateral hyperinflation on expiratory chest radiograph",
        correct: false,
        feedback:
          "Incorrect. Unilateral air trapping would raise concern for lower-airway foreign body aspiration rather than epiglottitis.",
      },
    ],
  },

  {
    question:
      "A child with epiglottitis develops progressively worsening stridor, increasing respiratory distress, and decreasing air entry. What is the most important next step?",
    answers: [
      {
        text: "Obtain a lateral neck radiograph before deciding on treatment",
        correct: false,
        feedback:
          "Incorrect. Diagnostic imaging should not delay airway management in a child with progressive obstruction.",
      },
      {
        text: "Perform a bedside throat examination to confirm epiglottic swelling",
        correct: false,
        feedback:
          "Incorrect. Manipulating the airway of a deteriorating child may worsen obstruction and should not precede definitive airway planning.",
      },
      {
        text: "Arrange controlled airway management with experienced pediatric airway clinicians",
        correct: true,
        feedback:
          "Correct. Progressive upper-airway obstruction requires early definitive airway planning in a controlled setting with experienced airway personnel and rescue capability.",
      },
      {
        text: "Give nebulized albuterol and reassess",
        correct: false,
        feedback:
          "Incorrect. Epiglottitis causes supraglottic obstruction from inflammatory edema, not lower-airway bronchospasm.",
      },
    ],
  },

  {
    question:
      "A fully vaccinated child is recovering from confirmed invasive Haemophilus influenzae type b disease. Which additional consideration is most appropriate?",
    answers: [
      {
        text: "Assume the diagnosis must be incorrect because Hib vaccination is completely protective",
        correct: false,
        feedback:
          "Incorrect. Hib vaccination dramatically reduces the risk of invasive disease but does not provide absolute protection.",
      },
      {
        text: "Automatically repeat the entire childhood vaccine series in every patient",
        correct: false,
        feedback:
          "Incorrect. Additional Hib vaccination recommendations depend on the child's age, prior immunization history, underlying condition, and treatment history.",
      },
      {
        text: "Review the immunization record and consider whether a high-risk condition could be contributing to susceptibility",
        correct: true,
        feedback:
          "Correct. Unexpected invasive Hib disease despite apparently appropriate immunization should prompt careful review of vaccine history and consideration of underlying risk factors such as selected immunodeficiencies or other high-risk conditions.",
      },
      {
        text: "No additional review is necessary once antibiotic treatment is complete",
        correct: false,
        feedback:
          "Incorrect. Confirmed invasive Hib disease has preventive and public-health implications beyond completion of antimicrobial therapy.",
      },
    ],
  },
];

/* =========================================================
   REFERENCES
========================================================= */

const references: Reference[] = [
  {
    title: "American Academy of Pediatrics — Croup and Epiglottitis",
    href: "https://publications.aap.org/pediatricsinreview/article/46/7/366/202407/Croup-and-Epiglottitis",
    description:
      "Contemporary Pediatrics in Review article covering the epidemiology, pathogenesis, differential diagnosis, clinical evaluation, and management of pediatric epiglottitis, including airway-safety principles and the changing microbiology of disease in the Hib vaccine era.",
  },
  {
    title: "CDC Pink Book — Haemophilus influenzae",
    href: "https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-8-haemophilus-influenzae.html",
    description:
      "CDC reference for invasive Haemophilus influenzae disease, Hib epidemiology, clinical manifestations, vaccination, and populations at increased risk for invasive disease.",
  },
  {
    title: "JAMA Patient Page — Epiglottitis",
    href: "https://jamanetwork.com/journals/jama/fullarticle/2733178",
    description:
      "Clinical overview of pediatric epiglottitis describing the classic presentation, risk of rapid airway obstruction, initial airway-safety principles, antimicrobial treatment, and the impact of Hib vaccination.",
  },
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
            <a href="#prevention">Prevention</a>
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
            { id: "prevention", label: "Prevention" },
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
            <EpiglottitisAnatomyFigure />

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
                description="Bacterial infection involves the epiglottis and adjacent supraglottic tissues. Historically, Haemophilus influenzae type b was the dominant pediatric cause. However, in the Hib vaccine era, other bacterial pathogens account for a greater proportion of cases."
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
                Children with significant supraglottic obstruction may
                instinctively sit upright, lean forward, and extend the neck
                while attempting to maximize airflow. A child who strongly
                prefers this position should be allowed to remain there rather
                than being forced supine for examination.
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
                <FigureModal
                  trigger="thumb sign (click to view)"
                  title="Thumb sign in epiglottitis"
                >
                  <EpiglottitisThumbSign />
                </FigureModal>
                . Imaging is supportive rather than a prerequisite for treatment
                and should not delay airway management in a child with
                significant obstruction.
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
          <DiseaseSection
            id="management"
            label="Management"
            title="Protect the airway first, then treat the infection"
            description="Suspected epiglottitis requires a calm environment, early airway planning, and prompt antimicrobial therapy without allowing routine interventions to destabilize the child."
          >
            {/* INITIAL APPROACH */}

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="1"
                title="Keep the child calm"
                description="Allow the child to remain upright with a caregiver in their preferred position. Avoid unnecessary examination, painful procedures, or forced repositioning."
              />

              <ProcessStep
                number="2"
                title="Mobilize airway expertise"
                description="Early involvement of experienced pediatric airway clinicians is essential when significant obstruction is suspected. Anesthesia, critical care, and ENT support may be required."
              />

              <ProcessStep
                number="3"
                title="Secure a threatened airway"
                description="Progressive obstruction or significant respiratory compromise requires definitive airway management in a controlled setting with personnel and equipment prepared for a difficult airway."
              />

              <ProcessStep
                number="4"
                title="Treat the infection"
                description="Begin parenteral antimicrobial therapy directed against likely bacterial pathogens once immediate airway safety has been addressed."
              />
            </div>

            {/* KEEP CALM */}

            <Callout
              label="First Priority"
              title="The safest initial intervention may be doing less"
              tone="rose"
            >
              <p>
                Do not force the child to lie down, separate them unnecessarily
                from a caregiver, or perform a routine throat examination. A
                child maintaining airway patency through position and
                respiratory effort can deteriorate rapidly when frightened or
                agitated.
              </p>
            </Callout>

            {/* AIRWAY */}

            <InfoCard title="When airway intervention is needed" tone="rose">
              <p>
                Airway management should be strongly considered when there is
                evidence of significant or progressive obstruction rather than
                waiting for respiratory collapse.
              </p>

              <ul className="mt-4 space-y-3">
                <li>• Increasing respiratory distress or work of breathing</li>
                <li>• Progressive or severe stridor</li>
                <li>• Inability to handle secretions</li>
                <li>• Hypoxemia or cyanosis</li>
                <li>• Decreasing air entry</li>
                <li>• Fatigue or altered mental status</li>
                <li>• Rapid clinical deterioration</li>
              </ul>
            </InfoCard>

            <Callout
              label="Airway Planning"
              title="A controlled airway is safer than a crash airway"
              tone="amber"
            >
              <p>
                When definitive airway management is required, it should ideally
                occur in a controlled environment with clinicians experienced in
                pediatric airway management and immediate access to rescue
                airway techniques. Preparation should account for the
                possibility that severe supraglottic edema may make intubation
                difficult.
              </p>
            </Callout>

            {/* ANTIBIOTICS */}

            <InfoCard title="Empiric antimicrobial therapy" tone="blue">
              <p>
                Epiglottitis is treated with parenteral antibiotics that provide
                coverage for likely invasive bacterial pathogens. A
                third-generation cephalosporin such as{" "}
                <strong>ceftriaxone</strong> or <strong>cefotaxime</strong> is a
                common foundation of therapy.
              </p>

              <p className="mt-4">
                Additional antistaphylococcal coverage, including MRSA coverage
                when clinically appropriate, may be added based on illness
                severity, local epidemiology, microbiologic data, and
                institutional guidance.
              </p>

              <p className="mt-4">
                Once culture and susceptibility results are available,
                antimicrobial therapy should be narrowed to the identified
                pathogen when possible.
              </p>
            </InfoCard>

            <Callout
              label="Hib"
              title="Think beyond the individual patient when Hib is identified"
              tone="purple"
            >
              <p>
                Confirmed invasive Haemophilus influenzae type b disease has
                public-health implications in addition to treatment of the
                child. Vaccination status should be reviewed, and appropriate
                infection-control and contact prophylaxis recommendations should
                be addressed according to current public-health guidance.
              </p>
            </Callout>

            {/* SUPPORTIVE CARE */}

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Supportive care" tone="emerald">
                <ul className="space-y-3">
                  <li>• Continuous cardiorespiratory and airway observation</li>
                  <li>• Supplemental oxygen when needed and tolerated</li>
                  <li>
                    • IV fluids after vascular access can be obtained safely
                  </li>
                  <li>• Antipyretics and analgesia when appropriate</li>
                  <li>
                    • Frequent reassessment for progression of obstruction
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Avoid unnecessary interventions" tone="slate">
                <ul className="space-y-3">
                  <li>• Forced throat examination</li>
                  <li>• Unnecessary separation from the caregiver</li>
                  <li>• Forcing the child into a supine position</li>
                  <li>• Delaying airway management for diagnostic testing</li>
                  <li>
                    • Procedures that provoke agitation without changing
                    immediate care
                  </li>
                </ul>
              </InfoCard>
            </div>
          </DiseaseSection>
          {/* =================================================
        DISPOSITION
    ================================================== */}
          <DiseaseSection
            id="disposition"
            label="Disposition / Care Setting"
            title="Suspected pediatric epiglottitis belongs in an airway-capable hospital"
            description="Disposition is driven by the risk of rapid upper-airway deterioration, not simply by the child's appearance at a single moment."
          >
            <div className="grid gap-6 lg:grid-cols-3">
              <InfoCard title="PICU / airway-capable setting" tone="rose">
                <p className="font-semibold">
                  Appropriate for children with significant or progressive
                  airway compromise.
                </p>

                <ul className="mt-4 space-y-3">
                  <li>• Stridor with increasing respiratory distress</li>
                  <li>• Progressive inability to handle secretions</li>
                  <li>• Hypoxemia or cyanosis</li>
                  <li>• Decreasing air entry</li>
                  <li>• Fatigue or altered mental status</li>
                  <li>• Rapid clinical deterioration</li>
                  <li>• Definitive airway already secured</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Closely monitored inpatient observation"
                tone="amber"
              >
                <p className="font-semibold">
                  Selected clinically stable patients may not immediately
                  require intubation but still require close airway observation.
                </p>

                <ul className="mt-4 space-y-3">
                  <li>
                    • Maintaining airway patency without progressive distress
                  </li>
                  <li>• Stable oxygenation and ventilation</li>
                  <li>• No evidence of rapidly worsening obstruction</li>
                  <li>• Immediate access to experienced airway clinicians</li>
                  <li>
                    • Ability to escalate rapidly if the clinical course changes
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Step-down & discharge readiness" tone="emerald">
                <p className="font-semibold">
                  Discharge comes only after the acute airway risk and infection
                  have clearly improved.
                </p>

                <ul className="mt-4 space-y-3">
                  <li>
                    • Stable airway without stridor or progressive obstruction
                  </li>
                  <li>
                    • Comfortable breathing without significant respiratory
                    distress
                  </li>
                  <li>• Able to handle oral secretions</li>
                  <li>• Adequate oral intake and hydration</li>
                  <li>• Appropriate antimicrobial plan established</li>
                  <li>
                    • Hib/public-health considerations addressed when applicable
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Disposition Pearl"
              title="Not intubated does not mean ready for discharge"
              tone="amber"
            >
              <p>
                Some patients with epiglottitis can be managed without placement
                of an artificial airway, particularly older patients with larger
                airways. Observation without intubation still requires an
                environment where deterioration can be recognized immediately
                and definitive airway management can be performed without delay.
              </p>
            </Callout>

            <Callout
              label="Transfer Safety"
              title="Do not send a threatened airway somewhere that cannot rescue it"
              tone="rose"
            >
              <p>
                If the presenting facility cannot provide pediatric airway
                management, anesthesia, otolaryngology or surgical backup, and
                critical-care support, early transfer to an appropriate center
                should be coordinated while the child remains closely monitored
                and minimally agitated.
              </p>
            </Callout>
          </DiseaseSection>
          {/* =================================================
        Prevention
    ================================================== */}
          <DiseaseSection
            id="prevention"
            label="Prevention"
            title="Vaccination transformed the epidemiology of pediatric epiglottitis"
            description="Routine Hib vaccination dramatically reduced invasive Haemophilus influenzae type b disease, but prevention also requires recognizing children with special risk factors and addressing close contacts when invasive Hib disease occurs."
          >
            <InfoCard title="Routine Hib vaccination" tone="blue">
              <p>
                Haemophilus influenzae type b was historically the leading cause
                of pediatric epiglottitis. Widespread use of Hib conjugate
                vaccines has dramatically reduced invasive Hib disease and made
                classic Hib epiglottitis much less common in vaccinated
                children.
              </p>

              <p className="mt-4">
                Routine Hib vaccination according to the current childhood
                immunization schedule remains the primary strategy for
                preventing invasive Hib disease.
              </p>
            </InfoCard>

            <Callout
              label="Important Distinction"
              title="Hib vaccination does not eliminate epiglottitis"
              tone="amber"
            >
              <p>
                Epiglottitis is an anatomic and clinical syndrome, not a disease
                caused exclusively by Hib. Other bacterial pathogens can cause
                supraglottic infection, so appropriate Hib vaccination lowers
                the risk of invasive Hib disease but does not make epiglottitis
                impossible.
              </p>
            </Callout>

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="When invasive Hib is confirmed" tone="purple">
                <p>
                  Confirmed invasive Hib disease should prompt review of the
                  child&apos;s immunization history and consideration of
                  public-health measures for close contacts.
                </p>

                <p className="mt-4">
                  Rifampin chemoprophylaxis may be recommended for certain
                  household or child-care contacts depending on vaccination
                  status, age, and other risk factors. Follow current
                  public-health guidance when determining who requires
                  prophylaxis.
                </p>
              </InfoCard>

              <InfoCard title="Special populations" tone="purple">
                <p>
                  Some children have increased susceptibility to invasive Hib
                  disease or may require Hib vaccination outside the routine
                  childhood schedule. Examples include selected patients with
                  altered immunity or loss of prior vaccine protection.
                </p>

                <ul className="mt-4 space-y-2">
                  <li>• Hematopoietic stem-cell transplant recipients</li>
                  <li>
                    • Children receiving chemotherapy or radiation therapy
                  </li>
                  <li>• Children with anatomic or functional asplenia</li>
                  <li>• Selected children with immunodeficiency</li>
                </ul>

                <p className="mt-4">
                  Recommendations vary by the underlying condition and prior
                  immunization history, so the current CDC immunization schedule
                  should be reviewed rather than applying a single
                  additional-dose rule to all immunocompromised children.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Clinical Pearl"
              title="Unexpected invasive Hib disease deserves a second look"
              tone="blue"
            >
              <p>
                When invasive Hib disease occurs in a child who appears
                appropriately vaccinated, carefully review the immunization
                record and consider whether an underlying high-risk condition
                could be contributing to susceptibility. The presence of
                epiglottitis alone, however, does not automatically imply an
                immunodeficiency.
              </p>
            </Callout>
          </DiseaseSection>
          {/* =================================================
        CLINICAL PEARLS
    ================================================== */}
          <DiseaseSection
            id="pearls"
            label="Clinical Pearls"
            title="High-yield takeaways"
            description="The bedside patterns and safety principles worth carrying forward."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard
                number={1}
                title="The cough and the swallow help localize the disease"
              >
                Barking cough and hoarseness favor croup, while severe sore
                throat, dysphagia, drooling, and a muffled voice should raise
                concern for a supraglottic process such as epiglottitis.
              </PearlCard>

              <PearlCard
                number={2}
                title="A child who refuses to lie down may be protecting their airway"
              >
                Tripod positioning, neck extension, and insistence on remaining
                upright are physiologic attempts to maintain airway patency. Do
                not force the child supine for a routine examination.
              </PearlCard>

              <PearlCard number={3} title="Do not provoke a threatened airway">
                When epiglottitis is strongly suspected, avoid forced
                oropharyngeal examination, unnecessary painful procedures, and
                other interventions likely to cause agitation before an airway
                plan is established.
              </PearlCard>

              <PearlCard
                number={4}
                title="The thumb sign is supportive — not required"
              >
                A lateral neck radiograph may demonstrate an enlarged epiglottis
                with the classic thumb sign in a stable patient, but imaging
                should never delay airway management or require transporting an
                unstable child away from an airway-capable setting.
              </PearlCard>

              <PearlCard
                number={5}
                title="A controlled airway is better than a crash airway"
              >
                Progressive obstruction should prompt early involvement of
                experienced pediatric airway clinicians. Waiting for hypoxemia,
                exhaustion, or respiratory collapse can turn a difficult airway
                into an emergency.
              </PearlCard>

              <PearlCard
                number={6}
                title="Hib vaccination changed epiglottitis — it did not eliminate it"
              >
                Widespread Hib vaccination dramatically reduced invasive Hib
                disease and classic pediatric epiglottitis, but other pathogens
                can still cause epiglottitis in appropriately vaccinated
                children.
              </PearlCard>
            </div>

            <Callout
              label="One-Sentence Summary"
              title="Recognize it, respect the airway, and don't make it worse"
              tone="blue"
            >
              <p>
                In a febrile child with severe sore throat, drooling, muffled
                voice, tripod positioning, or stridor, consider epiglottitis
                early, minimize agitation, and prioritize airway safety over
                diagnostic confirmation.
              </p>
            </Callout>
          </DiseaseSection>
          {/* =================================================
        QUIZ
    ================================================== */}
          <DiseaseSection
            id="quiz"
            label="Knowledge Check"
            title="Apply what you learned"
            description="Work through each question in sequence. Select an answer, review the explanation, then continue."
          >
            <ProgressiveQuiz questions={quizQuestions} />
          </DiseaseSection>
          {/* =================================================
        EVIDENCE BASE
    ================================================== */}
          <EvidenceBase references={references} />
          {/* =================================================
        BOTTOM NAVIGATION
    ================================================== */}
          <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/respiratory/upper-airway"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              ← Upper Airway Library
            </Link>

            <a
              href="#vignette"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
