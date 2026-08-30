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
  ExpandableSection,
  AnkiDeck,
  type QuizQuestion,
  type Reference,
} from "@/components/disease";

import { MobileSectionNav } from "@/components";
import TracheitisAnatomyFigure from "@/components/disease/figures/TracheitisAnatomyFigure";

/* =========================================================
   QUIZ DATA
========================================================= */

const quizQuestions: QuizQuestion[] = [
  {
    question:
      "A 4-year-old has had 3 days of rhinorrhea, cough, and low-grade fever. He now develops high fever, worsening stridor, increased work of breathing, and a toxic appearance. Nebulized epinephrine produces little improvement. Which diagnosis is most likely?",
    answers: [
      {
        text: "Viral croup",
        correct: false,
        feedback:
          "Uncomplicated croup usually causes a barking cough, hoarseness, and stridor but generally does not produce this combination of high fever, toxic appearance, rapid deterioration, and poor response to croup therapy.",
      },
      {
        text: "Bacterial tracheitis",
        correct: true,
        feedback:
          "This course is characteristic of bacterial tracheitis: a viral or croup-like prodrome followed by high fever, toxic appearance, worsening airway obstruction, and poor response to standard croup therapy.",
      },
      {
        text: "Epiglottitis",
        correct: false,
        feedback:
          "Epiglottitis can cause high fever, toxicity, and stridor, but prominent drooling, dysphagia, muffled voice, and difficulty handling secretions would be more typical.",
      },
      {
        text: "Foreign body aspiration",
        correct: false,
        feedback:
          "Foreign body aspiration usually presents abruptly after a choking event rather than after several days of viral symptoms followed by high fever and progressive toxic appearance.",
      },
    ],
  },

  {
    question:
      "Which feature most directly explains why airway obstruction in bacterial tracheitis may continue to worsen despite treatment directed at mucosal edema?",
    answers: [
      {
        text: "Bronchial smooth-muscle constriction",
        correct: false,
        feedback:
          "Bronchospasm is a lower-airway process and does not explain the characteristic intratracheal obstruction of bacterial tracheitis.",
      },
      {
        text: "Loss of pulmonary surfactant",
        correct: false,
        feedback:
          "Surfactant deficiency affects alveolar mechanics rather than producing the obstructing tracheal process seen in bacterial tracheitis.",
      },
      {
        text: "Thick intraluminal secretions and inflammatory debris",
        correct: true,
        feedback:
          "Bacterial tracheitis produces both mucosal edema and thick mucopurulent secretions, sloughed mucosa, or pseudomembranous debris within the tracheal lumen, creating a mechanical component of obstruction.",
      },
      {
        text: "Isolated swelling of the epiglottis",
        correct: false,
        feedback:
          "Isolated epiglottic swelling localizes to the supraglottic airway and is more consistent with epiglottitis.",
      },
    ],
  },

  {
    question:
      "Which additional finding would shift concern away from bacterial tracheitis and more strongly toward epiglottitis?",
    answers: [
      {
        text: "Inspiratory stridor",
        correct: false,
        feedback:
          "Inspiratory stridor can occur with both bacterial tracheitis and epiglottitis, so it does not reliably distinguish the two.",
      },
      {
        text: "High fever",
        correct: false,
        feedback:
          "High fever can occur in both bacterial tracheitis and epiglottitis.",
      },
      {
        text: "Toxic appearance",
        correct: false,
        feedback:
          "A toxic appearance may occur in either serious bacterial upper-airway infection.",
      },
      {
        text: "Prominent drooling and difficulty swallowing",
        correct: true,
        feedback:
          "Prominent drooling and dysphagia suggest impaired handling of oral secretions and favor supraglottic disease such as epiglottitis.",
      },
    ],
  },

  {
    question:
      "A child with suspected bacterial tracheitis develops worsening stridor, marked retractions, decreasing air entry, and increasing fatigue. What is the most appropriate next step?",
    answers: [
      {
        text: "Obtain AP and lateral neck radiographs before further intervention",
        correct: false,
        feedback:
          "Radiographs are supportive tests and should not delay airway stabilization in a child showing signs of progressive obstruction.",
      },
      {
        text: "Obtain inflammatory markers and await the results",
        correct: false,
        feedback:
          "Laboratory studies are nonspecific and should not delay treatment of a threatened airway.",
      },
      {
        text: "Prioritize definitive airway assessment and stabilization",
        correct: true,
        feedback:
          "Progressive stridor, decreasing air entry, marked work of breathing, and fatigue indicate a threatened airway. Airway stabilization takes priority over diagnostic testing.",
      },
      {
        text: "Repeat nebulized epinephrine until the stridor resolves",
        correct: false,
        feedback:
          "Persistent deterioration despite croup-directed therapy should prompt airway reassessment and treatment of bacterial tracheitis rather than repeated reliance on nebulized epinephrine.",
      },
    ],
  },

  {
    question:
      "After the airway is secured, thick purulent secretions continue to obstruct the trachea and repeatedly require suctioning. Which management strategy best addresses the underlying disease?",
    answers: [
      {
        text: "Corticosteroids alone until tracheal edema resolves",
        correct: false,
        feedback:
          "Bacterial tracheitis involves bacterial infection and intraluminal obstructing secretions, so corticosteroids alone do not address the underlying process.",
      },
      {
        text: "Airway clearance with removal of obstructing debris plus empiric parenteral antibiotics",
        correct: true,
        feedback:
          "Management must address both components of disease: mechanical obstruction from thick secretions or debris and the underlying bacterial infection.",
      },
      {
        text: "Observation because intubation has eliminated the risk of further obstruction",
        correct: false,
        feedback:
          "Intubation secures the airway but does not eliminate thick secretions or debris, which can continue to obstruct the trachea or endotracheal tube.",
      },
      {
        text: "Bronchodilator therapy directed at lower-airway smooth muscle",
        correct: false,
        feedback:
          "Bronchodilators target lower-airway bronchospasm and do not treat the tracheal inflammation, secretions, and bacterial infection responsible for this disease.",
      },
    ],
  },
];

/* =========================================================
   REFERENCES
========================================================= */

const references: Reference[] = [
  {
    title:
      "American Academy of Pediatrics — Pediatrics in Review: Bacterial Tracheitis",
    description:
      "Pediatric-focused review of presentation, airway obstruction, diagnosis, antimicrobial therapy, disposition, and bacterial tracheitis in children with artificial airways.",
    href: "https://publications.aap.org/pediatricsinreview/article/35/11/497/32548/Bacterial-Tracheitis",
  },
  {
    title:
      "Bacterial Tracheitis in Children: Approach to Diagnosis and Treatment",
    description:
      "Peer-reviewed clinical review addressing pathophysiology, differentiation from croup and epiglottitis, bronchoscopy, airway management, antimicrobial therapy, and prognosis.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2719512/",
  },
  {
    title:
      "Pediatric Bacterial Tracheitis — A Variable Entity: Case Series with Literature Review",
    description:
      "Contemporary pediatric case series describing presenting features, viral coinfection, microbiology, PICU admission, intubation, and clinical outcomes.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30348058/",
  },
  {
    title:
      "Acute Pediatric Tracheitis: Distinguishing the Disease by Tracheostomy Status",
    description:
      "Large pediatric database study highlighting important differences in presentation and management between children with and without preexisting tracheostomies.",
    href: "https://pubmed.ncbi.nlm.nih.gov/31884048/",
  },
  {
    title:
      "Care Variations and Outcomes for Children Hospitalized With Bacterial Tracheostomy-Associated Respiratory Infections",
    description:
      "Multicenter pediatric study examining diagnostic testing, antimicrobial practice variation, length of stay, and outcomes in children with tracheostomies hospitalized with bacterial respiratory infections.",
    href: "https://publications.aap.org/hospitalpediatrics/article/7/1/16/26405/Care-Variations-and-Outcomes-for-Children",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function BacterialTracheitisPage() {
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

            <span className="text-slate-600">Bacterial Tracheitis</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Trachea &amp; Subglottic Airway
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Bacterial Tracheitis
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Bacterial tracheitis is a potentially life-threatening bacterial
                infection of the trachea characterized by airway inflammation,
                thick mucopurulent secretions, and pseudomembranous debris that
                can produce severe upper-airway obstruction.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Upper Airway
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                  Tracheal
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  Airway Emergency
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Bacterial Infection
                </span>
              </div>
            </div>

            <div className="text-8xl" aria-hidden="true">
              🫁
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
            <a href="#history-physical">History &amp; Physical</a>
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
          title="Bacterial Tracheitis"
          sections={[
            { id: "vignette", label: "Clinical Vignette" },
            { id: "localization", label: "Anatomy & Localization" },
            { id: "pathophysiology", label: "Pathophysiology" },
            { id: "history-physical", label: "History & Physical" },
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
            title="When severe croup stops behaving like croup"
            description="Recognize the change in clinical trajectory that should raise concern for bacterial tracheitis."
          >
            <div className="rounded-3xl bg-blue-950 p-7 text-white">
              <p className="text-lg leading-8 text-blue-50">
                A 5-year-old boy is brought to the emergency department after
                several days of rhinorrhea, sore throat, hoarseness, and a
                barking cough. His parents initially thought he had another
                viral respiratory illness.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                Over the past 12 hours, however, he has developed a temperature
                of 39.6°C/103.3°F and rapidly worsening respiratory distress.
                His cough remains harsh and brassy, and he now has prominent
                stridor at rest with suprasternal and intercostal retractions.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                He appears ill and fatigued but is able to lie flat. He is not
                drooling and does not appear to have difficulty swallowing his
                secretions.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                He receives dexamethasone and nebulized epinephrine for presumed
                severe croup, but his stridor and work of breathing improve very
                little.
              </p>

              <div className="mt-7 rounded-2xl bg-white/10 p-5">
                <p className="font-semibold text-rose-200">
                  Your clinical reasoning task
                </p>

                <p className="mt-2 leading-7 text-blue-50">
                  Which features suggest that this is no longer uncomplicated
                  viral croup, and what dangerous airway process should move to
                  the top of your differential?
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
            title="Bacterial tracheitis obstructs the airway from within the trachea"
            description="The disease centers on the tracheal mucosa, where inflammation, edema, and thick adherent secretions can progressively narrow the airway."
          >
            <TracheitisAnatomyFigure />

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Tracheal airway" tone="blue">
                <p>
                  Bacterial tracheitis primarily involves the tracheal mucosa,
                  often extending through the subglottic region. Inflammation
                  causes mucosal edema while thick mucopurulent secretions and
                  sloughed material accumulate within the airway lumen.
                </p>
              </InfoCard>

              <InfoCard
                title="Why the obstruction is different from croup"
                tone="slate"
              >
                <p>
                  Croup primarily narrows the subglottic airway through mucosal
                  edema. Bacterial tracheitis can produce similar narrowing, but
                  the airway is additionally obstructed by thick, tenacious
                  secretions and pseudomembranous debris.
                </p>
              </InfoCard>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard title="Mucosal edema" tone="blue">
                <p>
                  Bacterial inflammation thickens the tracheal mucosa and
                  decreases the available airway diameter.
                </p>
              </InfoCard>

              <InfoCard title="Purulent secretions" tone="blue">
                <p>
                  Copious, thick secretions can accumulate within the tracheal
                  lumen and contribute directly to airway obstruction.
                </p>
              </InfoCard>

              <InfoCard title="Pseudomembranous debris" tone="blue">
                <p>
                  Sloughed inflamed mucosa and adherent exudate may form
                  irregular membranes that further narrow or intermittently
                  obstruct airflow.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Localization Check"
              title="Same neighborhood as croup — different mechanism of obstruction"
              tone="amber"
            >
              <p>
                Both croup and bacterial tracheitis can produce stridor and
                subglottic narrowing. In bacterial tracheitis, however,
                infection extends into the trachea and creates thick purulent
                secretions and adherent debris that cannot be explained by edema
                alone.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    PATHOPHYSIOLOGY
================================================= */}

          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="Inflammation narrows the airway — secretions obstruct it from within"
            description="Bacterial tracheitis often follows viral injury to the tracheal mucosa, then adds bacterial inflammation and thick intraluminal debris to an already narrowed airway."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <ProcessStep
                number="1"
                title="Viral injury primes the airway"
                description="A preceding viral respiratory infection can injure the tracheal mucosa and impair normal mucociliary defenses, creating a surface more susceptible to secondary bacterial infection."
              />

              <ProcessStep
                number="2"
                title="Bacterial superinfection develops"
                description="Bacteria invade the injured tracheal mucosa and trigger intense local inflammation, producing erythema, edema, ulceration, and purulent inflammation."
              />

              <ProcessStep
                number="3"
                title="Secretions and debris accumulate"
                description="Thick mucopurulent secretions combine with sloughed inflamed mucosa to form tenacious intraluminal material and, in some cases, adherent pseudomembranous debris."
              />

              <ProcessStep
                number="4"
                title="Mechanical obstruction progresses"
                description="Mucosal edema narrows the airway from the outside inward while secretions and debris occupy the lumen from within, progressively increasing resistance to airflow."
              />
            </div>

            <Callout
              label="Clinical Connection"
              title="Why doesn't this behave like uncomplicated croup?"
              tone="amber"
            >
              <p>
                Croup predominantly produces subglottic narrowing from mucosal
                edema. Bacterial tracheitis adds thick, tenacious secretions and
                inflammatory debris within the airway lumen. A child who appears
                increasingly toxic and continues to worsen despite appropriate
                croup therapy should prompt reconsideration of the diagnosis.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    HISTORY & PHYSICAL
================================================= */}

          <DiseaseSection
            id="history-physical"
            label="History & Physical"
            title="The child who was sick — then suddenly gets much sicker"
            description="The clinical course often provides the first clue: a viral or croup-like illness is followed by high fever, toxic appearance, and rapidly progressive upper-airway obstruction."
          >
            {/* CLINICAL EVOLUTION */}
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="1. Viral prodrome" tone="blue">
                <p>
                  The illness often begins with several days of symptoms
                  resembling a viral upper respiratory infection, including
                  cough, rhinorrhea, sore throat, and fever.
                </p>
              </InfoCard>

              <InfoCard title="2. Acute deterioration" tone="amber">
                <p>
                  The child then develops higher fever with worsening
                  respiratory symptoms over hours, rather than following the
                  expected improvement of an uncomplicated viral illness.
                </p>
              </InfoCard>

              <InfoCard title="3. Toxic upper-airway disease" tone="rose">
                <p>
                  Stridor, hoarseness, respiratory distress, thick secretions,
                  and a toxic or ill appearance should raise concern for
                  bacterial tracheitis and impending airway obstruction.
                </p>
              </InfoCard>
            </div>

            {/* KEY FINDINGS */}
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <InfoCard title="History clues" tone="slate">
                <ul className="space-y-2">
                  <li>• Several-day viral or croup-like prodrome</li>
                  <li>• Abrupt worsening rather than expected recovery</li>
                  <li>• High fever</li>
                  <li>• Increasing cough and respiratory distress</li>
                  <li>
                    • Poor or incomplete response to standard croup therapy
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical examination" tone="slate">
                <ul className="space-y-2">
                  <li>• Toxic or markedly ill appearance</li>
                  <li>• Inspiratory or biphasic stridor</li>
                  <li>• Hoarseness or harsh cough</li>
                  <li>• Increased work of breathing</li>
                  <li>• Thick or mucopurulent airway secretions</li>
                  <li>
                    • Hypoxemia or altered mental status in severe obstruction
                  </li>
                </ul>
              </InfoCard>
            </div>

            {/* SPECIAL POPULATION */}
            <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                Special population
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Children with tracheostomies or artificial airways
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Tracheostomy- and ventilator-associated tracheitis may present
                more indolently than disease in a child with an intact airway.
                Look for a meaningful change from the child&apos;s respiratory
                baseline rather than relying on the classic croup-like
                presentation.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-violet-100 bg-white p-4">
                  <p className="font-semibold text-slate-950">
                    Secretions & suctioning
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Increasing purulent secretions, changes in color, viscosity,
                    or odor, or a new need for more frequent airway suctioning.
                  </p>
                </div>

                <div className="rounded-xl border border-violet-100 bg-white p-4">
                  <p className="font-semibold text-slate-950">
                    Respiratory support
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Falling oxygen saturations or increasing ventilator
                    requirements can signal clinically important airway
                    infection.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-violet-900">
                We&apos;ll revisit this population during diagnostic workup,
                where distinguishing chronic airway colonization from active
                infection becomes especially important.
              </p>
            </div>
          </DiseaseSection>

          {/* =================================================
    DIFFERENTIAL DIAGNOSIS
================================================= */}

          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="Stridor tells you where — the clinical pattern helps tell you why"
            description="Bacterial tracheitis overlaps with several causes of upper-airway obstruction. Fever, toxicity, secretion handling, illness trajectory, and response to therapy help separate the major mimics."
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              {[
                {
                  diagnosis: "Epiglottitis",
                  clues:
                    "High fever and toxic appearance may overlap, but prominent dysphagia, drooling, muffled voice, tripod positioning, and refusal to lie down favor supraglottic disease.",
                },
                {
                  diagnosis: "Retropharyngeal / deep-neck infection",
                  clues:
                    "Fever with neck pain or stiffness, limited neck movement, dysphagia, drooling, muffled voice, or neck swelling should raise concern for a deep-neck space process.",
                },
                {
                  diagnosis: "Foreign body aspiration",
                  clues:
                    "Usually has abrupt onset after choking or eating, without a preceding febrile viral illness. Fever and progressive toxic appearance are less typical early in the course.",
                },
                {
                  diagnosis: "Anaphylaxis / angioedema",
                  clues:
                    "Rapid airway swelling may cause stridor but is usually accompanied by allergic features such as urticaria, lip or tongue swelling, gastrointestinal symptoms, hypotension, or a recent exposure.",
                },
                {
                  diagnosis: "Diphtheria",
                  clues:
                    "Consider in an incompletely immunized child or relevant exposure setting. Pharyngeal pseudomembrane and systemic toxicity distinguish it from typical bacterial tracheitis.",
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
              label="Highest-Yield Comparison"
              title="Croup vs bacterial tracheitis"
              tone="amber"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="font-bold text-slate-950">
                    Think uncomplicated croup
                  </p>

                  <ul className="mt-3 space-y-2">
                    <li>• Barking cough and hoarseness dominate</li>
                    <li>• Viral prodrome</li>
                    <li>• Usually less toxic appearing</li>
                    <li>• Lower or more modest fever is typical</li>
                    <li>• Improves with standard croup therapy</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-950">
                    Think bacterial tracheitis
                  </p>

                  <ul className="mt-3 space-y-2">
                    <li>
                      • Viral or croup-like prodrome followed by deterioration
                    </li>
                    <li>• High fever</li>
                    <li>• Toxic or markedly ill appearance</li>
                    <li>• Progressive stridor and respiratory distress</li>
                    <li>• Thick or purulent airway secretions</li>
                    <li>• Little or incomplete response to croup therapy</li>
                  </ul>
                </div>
              </div>
            </Callout>
          </DiseaseSection>
          {/* =================================================
    DIAGNOSTIC WORKUP
================================================= */}

          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="The airway comes before the workup"
            description="Bacterial tracheitis is primarily a clinical diagnosis. Testing should support the diagnosis without delaying stabilization of a threatened airway."
          >
            {/* AIRWAY FIRST */}
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Threatened or unstable airway" tone="rose">
                <p>
                  Prioritize airway stabilization. Do not delay airway
                  management for laboratory testing or imaging in a child with
                  severe respiratory distress, hypoxemia, altered mental status,
                  or rapidly progressive obstruction.
                </p>
              </InfoCard>

              <InfoCard title="Stable enough for evaluation" tone="blue">
                <p>
                  When the airway is stable, focused laboratory studies and
                  imaging can support the diagnosis, identify complications, and
                  help distinguish bacterial tracheitis from competing
                  diagnoses.
                </p>
              </InfoCard>
            </div>

            {/* LABS */}
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <InfoCard title="Laboratory studies" tone="slate">
                <ul className="space-y-2">
                  <li>
                    • CBC may demonstrate leukocytosis or leukopenia but is
                    nonspecific
                  </li>
                  <li>
                    • CRP and ESR may be elevated but do not establish the
                    diagnosis
                  </li>
                  <li>• Blood cultures have a low diagnostic yield</li>
                  <li>
                    • Obtain blood cultures when sepsis is suspected or the
                    child is immunocompromised
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Airway cultures" tone="purple">
                <p>
                  Tracheal secretions or exudates obtained during airway
                  evaluation can be sent for Gram stain and bacterial culture.
                  Results can identify the causative organism and guide
                  narrowing of antimicrobial therapy.
                </p>
              </InfoCard>
            </div>

            {/* IMAGING */}
            <ExpandableSection
              title="Imaging findings"
              description="Expand for supportive radiographic findings. Imaging should only be obtained when the airway is sufficiently stable."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="font-semibold text-slate-950">
                    Neck radiograph
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    AP or lateral neck imaging may demonstrate subglottic or
                    tracheal narrowing. Irregularity or haziness of the tracheal
                    air column may also occur. These findings are supportive
                    rather than required for diagnosis.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-950">
                    Chest radiograph
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    Chest imaging is not diagnostic of bacterial tracheitis
                    itself but can identify concurrent pneumonia or other
                    lower-respiratory involvement.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-slate-950">Bronchoscopy</p>

                <p className="mt-2 leading-7 text-slate-600">
                  Bronchoscopy may demonstrate an inflamed tracheal mucosa with
                  thick, adherent purulent secretions and intraluminal debris.
                  It can be both diagnostic and therapeutic by allowing direct
                  visualization, secretion sampling, and airway clearance.
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img
                    src="/images/bacterial-tracheitis-bronchoscopy.png"
                    alt="Bronchoscopic appearance of bacterial tracheitis showing inflamed tracheal mucosa and adherent purulent secretions"
                    className="w-full object-contain"
                  />

                  <div className="border-t border-slate-200 p-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Bronchoscopic appearance of bacterial tracheitis
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Bronchoscopy demonstrates inflamed tracheal mucosa with
                      adherent purulent secretions near the tracheal
                      bifurcation. Thick secretions and inflammatory debris can
                      contribute to clinically significant airway obstruction.
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Image: Kano K, et al. <em>Pediatrics International</em>.
                      2025. Licensed under CC BY 4.0.
                    </p>
                  </div>
                </div>
              </div>
            </ExpandableSection>

            <Callout
              label="Airway Safety"
              title="Never send a deteriorating child to imaging just to prove the diagnosis"
              tone="rose"
            >
              <p>
                Radiographs are adjuncts. If significant airway compromise is
                present, stabilization and definitive airway assessment take
                priority over obtaining a neck or chest image.
              </p>
            </Callout>

            {/* DIRECT VISUALIZATION */}
            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Direct airway evaluation
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Bronchoscopy can diagnose and treat the obstruction
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Direct visualization may demonstrate an erythematous, edematous
                trachea containing thick mucopurulent secretions or adherent
                pseudomembranous debris, while the epiglottis is normal or only
                mildly erythematous.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="font-semibold text-slate-950">
                    Diagnostic role
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Directly demonstrates the abnormal tracheal mucosa and
                    intraluminal secretions and allows specimens to be obtained
                    for microbiologic testing.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="font-semibold text-slate-950">
                    Therapeutic role
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Rigid bronchoscopy can permit suctioning and removal of
                    thick secretions or adherent debris that are contributing
                    directly to airway obstruction.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-blue-900">
                Direct visualization is not required in every clinically
                suspected case. The decision to perform bronchoscopy depends on
                disease severity and the need for airway intervention.
              </p>
            </div>

            {/* TRACHEOSTOMY POPULATION */}
            <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                Tracheostomy Pearl
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                A positive tracheal culture does not automatically mean
                infection
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Artificial airways are readily colonized by bacteria and can
                develop biofilms. Interpret tracheal cultures in the context of
                a meaningful clinical change rather than treating culture
                positivity alone.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-violet-100 bg-white p-4">
                  <p className="font-semibold text-slate-950">
                    Findings supporting active disease
                  </p>

                  <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                    <li>• New or increasingly purulent secretions</li>
                    <li>• Increased suctioning requirement</li>
                    <li>• Change in secretion color, viscosity, or odor</li>
                    <li>• Fever or other systemic signs of illness</li>
                    <li>• Worsening oxygenation or ventilatory requirements</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-violet-100 bg-white p-4">
                  <p className="font-semibold text-slate-950">
                    Also evaluate for lower-airway disease
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Isolated tracheitis is uncommon in children with artificial
                    airways. Concurrent bronchial or pulmonary infection may be
                    present, so chest imaging and the overall respiratory
                    picture can help distinguish isolated tracheitis from
                    pneumonia.
                  </p>
                </div>
              </div>
            </div>
          </DiseaseSection>
          {/* =================================================
    MANAGEMENT
================================================= */}

          <DiseaseSection
            id="management"
            label="Management"
            title="Protect the airway, clear the obstruction, and treat the infection"
            description="Management is driven by the severity of airway obstruction. Children with progressive disease may require definitive airway control and removal of thick tracheal secretions in addition to antimicrobial therapy."
          >
            {/* INITIAL PRIORITIES */}

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="1"
                title="Assess airway severity"
                description="Closely monitor stridor, work of breathing, air entry, oxygenation, mental status, and the child's ability to sustain respiratory effort."
              />

              <ProcessStep
                number="2"
                title="Secure a threatened airway"
                description="Progressive obstruction, hypoxemia, fatigue, altered mental status, or severe respiratory distress should prompt early definitive airway planning with experienced pediatric airway clinicians."
              />

              <ProcessStep
                number="3"
                title="Clear secretions and debris"
                description="Thick tracheal secretions may require frequent suctioning or bronchoscopic removal because intraluminal material contributes directly to airway obstruction."
              />

              <ProcessStep
                number="4"
                title="Start antimicrobial therapy"
                description="Begin empiric parenteral antibiotics directed against the major bacterial pathogens, including Staphylococcus aureus, then narrow therapy when culture and susceptibility data are available."
              />
            </div>

            {/* AIRWAY MANAGEMENT */}

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="When airway intervention is needed" tone="rose">
                <p>
                  Do not wait for respiratory arrest before escalating airway
                  management. Progressive bacterial tracheitis can deteriorate
                  rapidly as edema and thick secretions increasingly narrow the
                  tracheal lumen.
                </p>

                <ul className="mt-4 space-y-2">
                  <li>• Severe or progressively worsening stridor</li>
                  <li>
                    • Increasing work of breathing or decreasing air entry
                  </li>
                  <li>• Hypoxemia or cyanosis</li>
                  <li>• Fatigue or altered mental status</li>
                  <li>• Inability to effectively clear thick secretions</li>
                  <li>• Rapid clinical deterioration</li>
                </ul>
              </InfoCard>

              <InfoCard title="Airway clearance & bronchoscopy" tone="blue">
                <p>
                  Thick secretions require aggressive airway clearance with
                  suctioning and humidification. When secretions or adherent
                  debris cannot be adequately cleared, bronchoscopy can directly
                  remove obstructing material.
                </p>

                <p className="mt-4">
                  Bronchoscopy may therefore be therapeutic in addition to its
                  diagnostic role, particularly in children with significant
                  intraluminal obstruction.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Airway Pearl"
              title="Intubation secures the airway — it does not clear the disease"
              tone="amber"
            >
              <p>
                Thick secretions and sloughed inflammatory material can continue
                to obstruct the trachea or the endotracheal tube after
                intubation. Frequent suctioning, humidification, and repeated
                assessment of tube patency may still be necessary.
              </p>
            </Callout>

            {/* ANTIBIOTICS */}

            <InfoCard title="Empiric antimicrobial therapy" tone="purple">
              <p>
                Initial parenteral therapy should cover the major bacterial
                causes of tracheitis, particularly{" "}
                <strong>Staphylococcus aureus</strong>, while also providing
                coverage for other common respiratory pathogens.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-purple-100 bg-white p-4">
                  <p className="font-semibold text-slate-950">
                    Typical empiric approach
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A third-generation cephalosporin such as ceftriaxone or
                    cefotaxime is commonly paired with antistaphylococcal
                    therapy. MRSA-active coverage should be selected according
                    to local susceptibility patterns and illness severity.
                  </p>
                </div>

                <div className="rounded-xl border border-purple-100 bg-white p-4">
                  <p className="font-semibold text-slate-950">
                    Once cultures return
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Narrow antimicrobial therapy to the identified organism and
                    susceptibility profile whenever possible.
                  </p>
                </div>
              </div>
            </InfoCard>

            {/* SUPPORTIVE CARE */}

            <InfoCard title="Supportive care" tone="emerald">
              <ul className="space-y-3">
                <li>
                  • Continuous cardiorespiratory and pulse-oximetry monitoring
                </li>
                <li>• Supplemental oxygen when indicated</li>
                <li>• IV fluids when oral intake is inadequate</li>
                <li>• Antipyretics and analgesia as appropriate</li>
                <li>• Frequent reassessment of respiratory status</li>
              </ul>
            </InfoCard>

            {/* SPECIAL POPULATION */}

            <ExpandableSection
              title="Management considerations with a tracheostomy"
              description="Expand for additional considerations in children with artificial airways."
            >
              <div className="space-y-4 text-slate-700">
                <p>
                  Children with tracheostomies may require increased suctioning,
                  airway clearance, humidification, and respiratory support
                  during acute infection.
                </p>

                <p>
                  Because chronic colonization is common, antimicrobial
                  decisions should integrate the child&apos;s clinical change,
                  prior airway cultures, previous resistant organisms, and
                  current microbiologic data rather than treating a positive
                  culture in isolation.
                </p>
              </div>
            </ExpandableSection>
          </DiseaseSection>
          {/* =================================================
    DISPOSITION
================================================= */}

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="Admission is the rule — level of care follows the airway"
            description="Bacterial tracheitis can deteriorate rapidly. Disposition should reflect the degree of airway compromise, need for respiratory support, and ability to provide immediate airway intervention if the child worsens."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="PICU / higher-acuity care" tone="rose">
                <p>
                  Children with significant or progressive airway obstruction
                  require intensive monitoring and immediate access to
                  experienced pediatric airway management.
                </p>

                <ul className="mt-4 space-y-2">
                  <li>• Endotracheal intubation or mechanical ventilation</li>
                  <li>• Progressive stridor or respiratory distress</li>
                  <li>• Hypoxemia or increasing respiratory support</li>
                  <li>
                    • Fatigue, altered mental status, or decreasing air entry
                  </li>
                  <li>
                    • Frequent suctioning for thick obstructing secretions
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Stable but not intubated" tone="amber">
                <p>
                  Children who do not require intubation still need admission
                  and close observation in a setting where deterioration can be
                  recognized quickly and the airway can be secured if necessary.
                </p>

                <p className="mt-4">
                  If appropriate pediatric airway expertise is not available
                  locally, transfer to a higher-level or tertiary-care center
                  should be considered.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Extubation Readiness"
              title="Improvement means more than a better oxygen saturation"
              tone="blue"
            >
              <p>
                Extubation is individualized but should follow clear clinical
                improvement: fever and toxic appearance are resolving, tracheal
                secretions have substantially decreased, respiratory status has
                stabilized, and an air leak around the endotracheal tube
                supports improvement in airway edema.
              </p>
            </Callout>

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="After extubation" tone="emerald">
                <p>
                  Continue close observation after extubation for recurrent
                  obstruction while oxygen therapy, airway clearance, and
                  antimicrobial treatment are continued as clinically indicated.
                </p>
              </InfoCard>

              <InfoCard title="Discharge readiness" tone="slate">
                <ul className="space-y-2">
                  <li>
                    • Stable airway without recurrent significant obstruction
                  </li>
                  <li>• No ongoing need for intensive respiratory support</li>
                  <li>
                    • Secretions manageable without intensive airway
                    intervention
                  </li>
                  <li>
                    • Adequate hydration and ability to tolerate enteral therapy
                  </li>
                  <li>
                    • Appropriate antimicrobial plan established for completion
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Expected Course"
              title="Most children recover completely with appropriate treatment"
              tone="emerald"
            >
              <p>
                Improvement is generally expected over several days with
                effective airway management and antimicrobial therapy. Reported
                intubation duration is commonly a few days, although
                hospitalization may be longer depending on disease severity and
                associated lower-respiratory involvement.
              </p>
            </Callout>
          </DiseaseSection>
        </div>
        {/* =================================================
    CLINICAL PEARLS
================================================= */}

        <DiseaseSection
          id="pearls"
          label="Clinical Pearls"
          title="The high-yield takeaways"
          description="Keep these principles in mind when evaluating a child with suspected bacterial tracheitis."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <PearlCard
              number={1}
              title="Think bacterial tracheitis when croup stops behaving like croup"
            >
              <p>
                A viral or croup-like prodrome followed by high fever, toxic
                appearance, progressive respiratory distress, and poor response
                to standard croup therapy should prompt reconsideration of the
                diagnosis.
              </p>
            </PearlCard>

            <PearlCard
              number={2}
              title="The obstruction is both edema and debris"
            >
              <p>
                Unlike uncomplicated croup, bacterial tracheitis can obstruct
                the airway with thick mucopurulent secretions and sloughed or
                pseudomembranous material in addition to mucosal edema.
              </p>
            </PearlCard>

            <PearlCard
              number={3}
              title="Drooling should make you reconsider the localization"
            >
              <p>
                Children with bacterial tracheitis usually remain able to handle
                their oral secretions. Prominent drooling, dysphagia, muffled
                voice, or tripod positioning should increase concern for
                supraglottic disease such as epiglottitis.
              </p>
            </PearlCard>

            <PearlCard
              number={4}
              title="The airway comes before the diagnostic workup"
            >
              <p>
                Imaging and laboratory testing are supportive. A child with
                progressive airway compromise should undergo stabilization and
                definitive airway assessment rather than being sent for testing
                simply to confirm the diagnosis.
              </p>
            </PearlCard>

            <PearlCard number={5} title="Bronchoscopy can diagnose and treat">
              <p>
                Direct airway visualization can demonstrate the inflamed
                trachea, obtain microbiologic specimens, and permit removal of
                thick secretions or adherent debris contributing to obstruction.
              </p>
            </PearlCard>

            <PearlCard
              number={6}
              title="A positive trach culture is not the same as infection"
            >
              <p>
                Children with tracheostomies commonly have airway colonization.
                Interpret cultures alongside meaningful clinical changes such as
                new purulent secretions, increased suctioning, fever, or
                worsening respiratory support requirements.
              </p>
            </PearlCard>
          </div>

          <Callout
            label="Remember the Management Framework"
            title="Airway → clearance → antibiotics"
            tone="blue"
          >
            <p>
              Protect a threatened airway, remove obstructing secretions and
              debris when necessary, and begin empiric parenteral antimicrobial
              therapy with appropriate coverage for{" "}
              <strong>Staphylococcus aureus</strong> and other likely
              respiratory pathogens.
            </p>
          </Callout>
        </DiseaseSection>

        {/* =================================================
    PROGRESSIVE QUIZ
================================================= */}

        <DiseaseSection
          id="quiz"
          label="Progressive Quiz"
          title="Can you manage the deteriorating airway?"
          description="Follow the case as it evolves from a croup-like illness to progressive bacterial tracheal obstruction."
        >
          <ProgressiveQuiz questions={quizQuestions} />
        </DiseaseSection>

        {/* =========================================================
    ANKI DECK
========================================================= */}
        <DiseaseSection
          id="anki"
          label="Spaced Repetition"
          title="Keep the high-yield concepts fresh"
          description="Review the core bacterial tracheitis concepts from this module with a focused Anki deck."
        >
          <AnkiDeck
            title="Bacterial Tracheitis"
            cardCount={12}
            downloadHref="/Anki/bacterial-tracheitis.apkg"
          />
        </DiseaseSection>

        {/* =================================================
    EVIDENCE BASE
================================================= */}

        <EvidenceBase
          references={references}
          secondarySources="Nelson Textbook of Pediatrics and StatPearls were used as additional educational references for clinical organization, cross-checking, and consistency."
        />
      </div>
    </main>
  );
}
