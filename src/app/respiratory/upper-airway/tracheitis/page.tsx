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
  type QuizQuestion,
  type Reference,
} from "@/components/disease";

import { MobileSectionNav } from "@/components";
import TracheitisAnatomyFigure from "@/components/disease/figures/TracheitisAnatomyFigure";

/* =========================================================
   QUIZ DATA
========================================================= */

const quizQuestions: QuizQuestion[] = [];

/* =========================================================
   REFERENCES
========================================================= */

const references: Reference[] = [];

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
          title="Bacterial Tracheitis"
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

            {/* AIRWAY */}

            <InfoCard title="When airway intervention is needed" tone="rose">
              <p>
                Do not wait for respiratory arrest before escalating airway
                management. Children with significant bacterial tracheitis can
                deteriorate rapidly as mucosal edema and thick secretions
                progressively narrow the tracheal lumen.
              </p>

              <ul className="mt-4 space-y-3">
                <li>• Severe or progressively worsening stridor</li>
                <li>• Increasing work of breathing or retractions</li>
                <li>• Decreasing air entry</li>
                <li>• Hypoxemia or cyanosis</li>
                <li>• Fatigue or altered mental status</li>
                <li>
                  • Inability to effectively clear thick airway secretions
                </li>
                <li>
                  • Rapid clinical deterioration despite supportive therapy
                </li>
              </ul>
            </InfoCard>

            <Callout
              label="Airway Pearl"
              title="The endotracheal tube does not remove the disease"
              tone="amber"
            >
              <p>
                Even after intubation, thick secretions and sloughed
                inflammatory material may continue to obstruct the airway or the
                endotracheal tube. Frequent suctioning, airway humidification,
                and repeated assessment of tube patency may be necessary.
              </p>
            </Callout>

            {/* SECRETIONS / BRONCHOSCOPY */}

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Airway clearance" tone="blue">
                <ul className="space-y-3">
                  <li>• Humidified oxygen when needed and tolerated</li>
                  <li>• Frequent suctioning of thick airway secretions</li>
                  <li>• Close monitoring for recurrent obstruction</li>
                  <li>
                    • Reassessment of airway patency if respiratory status
                    suddenly worsens
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Role of bronchoscopy" tone="blue">
                <p>
                  Bronchoscopy may be both diagnostic and therapeutic. Thick
                  mucopurulent secretions and adherent pseudomembranous debris
                  can be suctioned or mechanically removed when they are
                  contributing to obstruction.
                </p>

                <p className="mt-4">
                  The need for bronchoscopy depends on disease severity, the
                  degree of obstruction, and whether adequate airway clearance
                  can otherwise be achieved.
                </p>
              </InfoCard>
            </div>

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

            <Callout
              label="Antibiotic Safety"
              title="Local resistance patterns matter"
              tone="blue"
            >
              <p>
                Because <strong>S. aureus</strong> is an important cause of
                bacterial tracheitis, empiric therapy must account for local
                MRSA prevalence and susceptibility patterns rather than relying
                on a single universal regimen.
              </p>
            </Callout>

            {/* SUPPORTIVE CARE */}

            <div className="grid gap-6 md:grid-cols-2">
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

              <InfoCard title="What about standard croup therapy?" tone="slate">
                <p>
                  Nebulized epinephrine and corticosteroids may have been given
                  initially when the presentation was thought to represent
                  croup, but persistent obstruction in bacterial tracheitis is
                  driven by bacterial inflammation and intraluminal secretions.
                </p>

                <p className="mt-4">
                  Failure to improve should prompt airway reassessment and
                  treatment of bacterial tracheitis rather than repeated
                  reliance on croup therapy alone.
                </p>
              </InfoCard>
            </div>

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

            <Callout
              label="One-Sentence Management"
              title="Think airway + source control + antibiotics"
              tone="rose"
            >
              <p>
                Severe bacterial tracheitis requires more than antibiotics
                alone: stabilize the airway, remove obstructing secretions when
                necessary, and treat the bacterial infection while continuing
                close respiratory monitoring.
              </p>
            </Callout>
          </DiseaseSection>
        </div>
      </div>
    </main>
  );
}
