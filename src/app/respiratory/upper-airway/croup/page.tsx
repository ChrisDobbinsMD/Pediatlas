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

import CroupAnatomyFigure from "@/components/disease/figures/CroupAnatomyFigure";
import CroupSteepleSign from "@/components/disease/figures/CroupSteepleSign";
import MobileSectionNav from "@/components/MobileSectionNav";

/* =========================================================
   QUIZ DATA
========================================================= */

const quizQuestions: QuizQuestion[] = [
  {
    question:
      "A 20-month-old develops rhinorrhea followed two days later by a barky cough and hoarse voice. He has inspiratory stridor only when crying and no stridor at rest. Which treatment is most appropriate?",
    answers: [
      {
        text: "Supportive care only because the disease is mild",
        correct: false,
        feedback:
          "Not quite. Even children with mild croup benefit from corticosteroid therapy. Dexamethasone reduces symptom severity and return visits.",
      },
      {
        text: "A single dose of dexamethasone",
        correct: true,
        feedback:
          "Correct. Corticosteroids are recommended for croup of any severity. Mild croup without stridor at rest generally does not require nebulized epinephrine.",
      },
      {
        text: "Nebulized epinephrine without corticosteroids",
        correct: false,
        feedback:
          "Not quite. Nebulized epinephrine is generally reserved for moderate to severe disease, especially when stridor is present at rest. Corticosteroids remain the foundation of therapy.",
      },
      {
        text: "Amoxicillin-clavulanate",
        correct: false,
        feedback:
          "Incorrect. Typical croup is viral. Antibiotics are not indicated unless a separate bacterial infection is suspected.",
      },
    ],
  },

  {
    question:
      "Why can relatively modest mucosal edema produce clinically important airway obstruction in a toddler with croup?",
    answers: [
      {
        text: "The pediatric subglottic airway has a relatively small radius, so additional narrowing markedly increases resistance to airflow",
        correct: true,
        feedback:
          "Correct. Croup produces edema in an already narrow pediatric subglottic airway. A small decrease in airway radius can cause a disproportionately large increase in airflow resistance.",
      },
      {
        text: "The disease primarily destroys alveolar surfactant",
        correct: false,
        feedback:
          "Incorrect. Surfactant dysfunction is an alveolar process and is not the mechanism responsible for croup.",
      },
      {
        text: "Croup causes bronchial smooth-muscle constriction similar to asthma",
        correct: false,
        feedback:
          "Incorrect. The principal lesion in croup is inflammatory edema of the laryngeal and subglottic airway rather than lower-airway bronchospasm.",
      },
      {
        text: "Young children have stiffer distal bronchioles than adults",
        correct: false,
        feedback:
          "Incorrect. The clinically important localization in croup is the upper airway, particularly the subglottic region.",
      },
    ],
  },

  {
    question:
      "A 2-year-old has a classic barking cough, hoarseness, and mild inspiratory stridor. He is playful, well hydrated, and has no toxic appearance. Which diagnostic approach is most appropriate?",
    answers: [
      {
        text: "Obtain a CBC and inflammatory markers in all patients",
        correct: false,
        feedback:
          "Incorrect. Routine laboratory testing is not needed in typical croup and rarely changes management.",
      },
      {
        text: "Obtain a neck radiograph to confirm the steeple sign",
        correct: false,
        feedback:
          "Incorrect. The steeple sign is neither required nor sufficiently sensitive or specific to justify routine imaging in a classic presentation.",
      },
      {
        text: "Make a clinical diagnosis without routine laboratory or imaging studies",
        correct: true,
        feedback:
          "Correct. Typical croup is a clinical diagnosis. Testing should be reserved for atypical presentations, severe illness, treatment failure, or concern for an alternative diagnosis.",
      },
      {
        text: "Perform direct laryngoscopy before treatment",
        correct: false,
        feedback:
          "Incorrect. Laryngoscopy is not routinely performed in classic croup and may unnecessarily agitate a child with upper-airway obstruction.",
      },
    ],
  },

  {
    question:
      "A 22-month-old with croup has persistent inspiratory stridor at rest, suprasternal retractions, and agitation. Oxygenation is currently normal. What is the best next treatment?",
    answers: [
      {
        text: "Dexamethasone plus nebulized epinephrine",
        correct: true,
        feedback:
          "Correct. Stridor at rest with significant retractions represents at least moderate disease. Give corticosteroid therapy and nebulized epinephrine while minimizing agitation and monitoring the response.",
      },
      {
        text: "Humidified air alone",
        correct: false,
        feedback:
          "Incorrect. Humidified air has not demonstrated meaningful clinical benefit and should not delay evidence-based treatment.",
      },
      {
        text: "Albuterol",
        correct: false,
        feedback:
          "Incorrect. The obstruction in croup is predominantly subglottic edema, not lower-airway bronchospasm.",
      },
      {
        text: "Azithromycin",
        correct: false,
        feedback:
          "Incorrect. Typical croup is viral and does not require antibacterial therapy.",
      },
    ],
  },

  {
    question:
      "A 4-year-old initially thought to have croup develops a temperature of 40°C, toxic appearance, rapidly worsening stridor, and thick purulent airway secretions. Symptoms improve little after nebulized epinephrine. What diagnosis should now be strongly considered?",
    answers: [
      {
        text: "Uncomplicated viral croup",
        correct: false,
        feedback:
          "Incorrect. Toxic appearance, very high fever, rapid progression, purulent secretions, and poor response to standard croup therapy should prompt reconsideration of the diagnosis.",
      },
      {
        text: "Bacterial tracheitis",
        correct: true,
        feedback:
          "Correct. Bacterial tracheitis can mimic severe croup but is suggested by high fever, toxic appearance, purulent secretions, rapid progression, and inadequate response to typical croup therapy. Airway compromise can develop rapidly.",
      },
      {
        text: "Mild spasmodic croup",
        correct: false,
        feedback:
          "Incorrect. Spasmodic croup is typically recurrent and often afebrile. This child's toxicity and purulent secretions point toward bacterial disease.",
      },
      {
        text: "Uncomplicated viral upper respiratory infection",
        correct: false,
        feedback:
          "Incorrect. Progressive upper-airway obstruction with toxicity requires urgent evaluation for a dangerous alternative diagnosis.",
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
      "American Academy of Pediatrics — Croup (Acute Laryngotracheobronchitis)",
    href: "https://publications.aap.org/pediatriccare/article/doi/10.1542/aap.ppcqr.396247/134/Croup-Acute-Laryngotracheobronchitis",
    description:
      "AAP Pediatric Care Online review covering epidemiology, upper-airway anatomy, clinical diagnosis, differential diagnosis, severity assessment, corticosteroid therapy, nebulized epinephrine, and disposition.",
  },
  {
    title: "American Family Physician — Croup: Diagnosis and Management",
    href: "https://www.aafp.org/pubs/afp/issues/2018/0501/p575.html",
    description:
      "Evidence-based review addressing clinical diagnosis, differential diagnosis, Westley severity scoring, corticosteroid therapy, nebulized epinephrine dosing, observation, and outpatient management.",
  },
  {
    title: "AAP Pediatrics in Review — Croup and Epiglottitis",
    href: "https://publications.aap.org/pediatricsinreview/article/46/7/366/202407/Croup-and-Epiglottitis",
    description:
      "Contemporary AAP review of croup and epiglottitis including epidemiology, pathogenesis, differential diagnosis, and modern management principles.",
  },
  {
    title: "Cochrane Review — Glucocorticoids for Croup in Children",
    href: "https://pubmed.ncbi.nlm.nih.gov/36626194/",
    description:
      "Updated systematic review supporting glucocorticoid therapy for croup, including improvement in symptoms and reductions in hospital stay and return visits.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function CroupPage() {
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

            <span className="text-slate-600">Croup</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Larynx &amp; Subglottic Airway
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Croup
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Croup, or acute viral laryngotracheitis, is an upper-airway
                illness characterized by inflammation and edema of the larynx
                and subglottic airway, producing the classic combination of a
                barking cough, hoarseness, and inspiratory stridor.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Upper Airway
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                  Viral
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  Stridor
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  6 months–3 years
                </span>
              </div>
            </div>

            <div className="text-8xl" aria-hidden="true">
              🦭🗣️
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
          Mobile Section Navigation
      ====================================================== */}
        <MobileSectionNav
          title="Croup"
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

        {/* rest of your Croup page */}
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
            title="A toddler with noisy breathing overnight"
            description="Start with the presentation before revealing the mechanism."
          >
            <div className="rounded-3xl bg-blue-950 p-7 text-white">
              <p className="text-lg leading-8 text-blue-50">
                A previously healthy 20-month-old boy is brought to the
                emergency department late at night after developing increasingly
                noisy breathing. His parents report two days of rhinorrhea and
                nasal congestion followed by a harsh, &quot;barky&quot; cough
                and hoarse voice.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                Temperature is 38.2°C/100.8°F. He is alert but anxious. When
                sitting quietly in his parent&apos;s lap, a high-pitched
                inspiratory sound is audible without a stethoscope. Mild
                suprasternal retractions are present. He is drooling normally
                for age, swallows without difficulty, and has no urticaria or
                history of choking.
              </p>

              <div className="mt-7 rounded-2xl bg-white/10 p-5">
                <p className="font-semibold text-sky-200">
                  Your first clinical task
                </p>

                <p className="mt-2 leading-7 text-blue-50">
                  Localize the obstruction, determine the likely diagnosis, and
                  decide whether this child has findings that require treatment
                  beyond corticosteroid therapy alone.
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
            title="Croup localizes to the larynx and subglottic airway"
            description="The characteristic sound and cough make sense once the level of obstruction is identified."
          >
            <CroupAnatomyFigure />

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Supraglottic airway" tone="slate">
                <p>
                  Structures above the vocal cords include the epiglottis,
                  aryepiglottic folds, and surrounding pharyngeal tissues.
                  Disease in this region is more likely to produce dysphagia,
                  drooling, muffled voice, or difficulty handling secretions.
                </p>
              </InfoCard>

              <InfoCard title="Glottic & subglottic airway" tone="blue">
                <p>
                  Croup predominantly involves the larynx and subglottic region
                  immediately below the vocal cords. This localization explains
                  the characteristic combination of barking cough, hoarseness,
                  and inspiratory stridor.
                </p>
              </InfoCard>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard title="Barking cough" tone="blue">
                <p>
                  Inflammation involving the larynx and proximal trachea
                  produces the characteristic harsh, seal-like cough.
                </p>
              </InfoCard>

              <InfoCard title="Hoarseness" tone="blue">
                <p>
                  Laryngeal inflammation affects phonation, producing a raspy or
                  hoarse voice.
                </p>
              </InfoCard>

              <InfoCard title="Inspiratory stridor" tone="blue">
                <p>
                  Narrowing of the extrathoracic upper airway generates
                  turbulent airflow that is most prominent during inspiration.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Localization Check"
              title="Stridor is not wheezing"
              tone="amber"
            >
              <p>
                Stridor generally points toward obstruction of the upper or
                central airway. Wheezing usually reflects intrathoracic
                lower-airway narrowing. Substantial wheezing in a child presumed
                to have croup should prompt consideration of another or
                additional diagnosis.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              PATHOPHYSIOLOGY
          ================================================== */}

          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="Viral inflammation converts a small airway into a high-resistance airway"
            description="Follow the process from viral infection to the clinical findings heard at the bedside."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="1"
                title="Viral infection"
                description="Parainfluenza viruses are classic causes, although influenza, RSV, human metapneumovirus, adenovirus, rhinovirus, and other respiratory viruses may produce the syndrome."
              />

              <ProcessStep
                number="2"
                title="Mucosal inflammation"
                description="Viral infection spreads from the upper respiratory tract to the larynx and trachea, producing inflammation of the airway mucosa."
              />

              <ProcessStep
                number="3"
                title="Subglottic edema"
                description="Circumferential mucosal edema narrows the already small pediatric subglottic lumen, creating the characteristic site of obstruction in croup."
              />

              <ProcessStep
                number="4"
                title="Turbulent airflow"
                description="Increasing airflow velocity through the narrowed extrathoracic airway generates inspiratory stridor, retractions, and increased work of breathing."
              />
            </div>

            <Callout
              label="Airway Physics"
              title="Why a few millimeters matter"
              tone="blue"
            >
              <p>
                Airway resistance is extremely sensitive to airway radius. Under
                laminar-flow conditions, Poiseuille&apos;s law predicts that
                resistance varies inversely with the fourth power of the radius:
              </p>

              <div className="my-6 rounded-2xl border border-blue-200 bg-white p-6 text-center">
                <p className="text-3xl font-bold tracking-wide text-blue-950">
                  R ∝ 1 / r⁴
                </p>
              </div>

              <p>
                This means that even a modest decrease in airway radius can
                produce a disproportionately large increase in resistance.
                Because young children begin with a relatively small subglottic
                airway, circumferential mucosal edema can rapidly consume a
                clinically important fraction of the available lumen.
              </p>

              <p className="mt-4">
                Actual airflow through a narrowed croup airway may become
                turbulent, so Poiseuille&apos;s law is best used here as a
                conceptual model rather than an exact description of airflow
                during croup.
              </p>
            </Callout>

            <Callout
              label="Why agitation matters"
              title="Crying can make the obstruction look dramatically worse"
              tone="amber"
            >
              <p>
                Crying and anxiety increase respiratory effort and airflow
                velocity through an already narrowed airway. This can worsen
                stridor and retractions. Whenever possible, evaluate the child
                while calm and allow them to remain in a caregiver&apos;s lap.
              </p>
            </Callout>

            <InfoCard title="Natural history" tone="slate">
              <p>
                Croup commonly begins with several hours to a few days of
                nonspecific upper-respiratory symptoms before the barking cough,
                hoarseness, and stridor become prominent. Symptoms are often
                worse at night and typically peak early in the illness. Most
                uncomplicated cases improve over several days.
              </p>
            </InfoCard>
          </DiseaseSection>

          {/* =================================================
              HISTORY & PHYSICAL
          ================================================== */}

          <DiseaseSection
            id="assessment"
            label="History & Physical"
            title="Severity is determined at the bedside"
            description="The most useful examination asks whether obstruction is present only with agitation or persists while the child is calm."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Classic history" tone="blue">
                <ul className="space-y-3">
                  <li>• Age commonly 6 months to 3 years</li>
                  <li>• Preceding rhinorrhea or other URI symptoms</li>
                  <li>• Barking or brassy cough</li>
                  <li>• Hoarse or raspy voice</li>
                  <li>• Symptoms often worse at night</li>
                  <li>• Fever may be present but is not required</li>
                  <li>• Symptoms often worsen with crying or agitation</li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical examination" tone="blue">
                <ul className="space-y-3">
                  <li>• Inspiratory stridor</li>
                  <li>• Suprasternal or intercostal retractions</li>
                  <li>• Tachypnea and increased work of breathing</li>
                  <li>• Hoarse cry or voice</li>
                  <li>• Reduced air entry as obstruction worsens</li>
                  <li>• Hypoxemia or cyanosis in severe disease</li>
                  <li>
                    • Altered mental status or fatigue as late warning signs
                  </li>
                </ul>
              </InfoCard>
            </div>

            {/* SEVERITY */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Clinical severity
              </p>

              <div className="mt-4 grid gap-5 lg:grid-cols-3">
                <InfoCard title="Mild" tone="emerald">
                  <ul className="space-y-2">
                    <li>• Barking cough</li>
                    <li>• Hoarseness</li>
                    <li>• No stridor at rest</li>
                    <li>• None or minimal retractions at rest</li>
                    <li>• Stridor may appear with agitation</li>
                  </ul>
                </InfoCard>

                <InfoCard title="Moderate" tone="amber">
                  <ul className="space-y-2">
                    <li>• Frequent barking cough</li>
                    <li>• Easily audible stridor at rest</li>
                    <li>• Visible retractions at rest</li>
                    <li>• Child remains alert with adequate air entry</li>
                  </ul>
                </InfoCard>

                <InfoCard title="Severe / impending failure" tone="rose">
                  <ul className="space-y-2">
                    <li>• Prominent or persistent stridor at rest</li>
                    <li>• Severe retractions or respiratory distress</li>
                    <li>• Decreased air entry</li>
                    <li>• Fatigue or altered mental status</li>
                    <li>• Cyanosis or hypoxemia</li>
                    <li>• Stridor may become quieter as airflow falls</li>
                  </ul>
                </InfoCard>
              </div>
            </div>

            <Callout
              label="Do Not Miss"
              title="A quieter child is not always an improving child"
              tone="rose"
            >
              <p>
                In advanced upper-airway obstruction, stridor can become less
                prominent because the child can no longer generate adequate
                airflow. Decreasing air entry, exhaustion, cyanosis, or altered
                mental status are ominous findings even if the audible stridor
                seems softer.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
          DIFFERENTIAL DIAGNOSIS
      ================================================== */}

          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="What else could look like this?"
            description="Stridor is a localization clue, not a diagnosis. Features outside the classic croup pattern should prompt consideration of alternative causes of upper-airway obstruction."
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              {[
                {
                  diagnosis: "Bacterial tracheitis",
                  clues:
                    "High fever, toxic appearance, rapidly progressive obstruction, thick or purulent secretions, or poor response to standard croup therapy.",
                },
                {
                  diagnosis: "Epiglottitis",
                  clues:
                    "Drooling, dysphagia, severe sore throat, muffled voice, tripod positioning, toxic appearance, and absence of the classic barking cough.",
                },
                {
                  diagnosis: "Foreign body",
                  clues:
                    "Abrupt onset, choking history, little or no viral prodrome, or persistent focal airway findings.",
                },
                {
                  diagnosis: "Anaphylaxis / angioedema",
                  clues:
                    "Sudden airway symptoms with urticaria, lip or tongue swelling, gastrointestinal symptoms, hypotension, or recent allergen exposure.",
                },
              ].map((item, index) => (
                <div
                  key={item.diagnosis}
                  className={`grid gap-3 p-5 md:grid-cols-[200px_1fr] ${
                    index !== 3 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <p className="font-bold text-slate-900">{item.diagnosis}</p>

                  <p className="leading-7 text-slate-600">{item.clues}</p>
                </div>
              ))}
            </div>

            <Callout
              label="Diagnostic Red Flag"
              title="Toxic appearance is not typical uncomplicated croup"
              tone="rose"
            >
              <p>
                High fever, toxicity, rapidly progressive obstruction, purulent
                secretions, or poor response to appropriate croup therapy should
                prompt urgent reconsideration of the diagnosis, particularly
                bacterial tracheitis or another serious upper-airway process.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              DIAGNOSTIC WORKUP
          ================================================== */}

          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="Typical croup is a clinical diagnosis"
            description="When the history and examination are classic, testing usually adds little and may agitate the child."
          >
            <Callout
              label="First principle"
              title="Do not test simply to prove croup"
              tone="emerald"
            >
              <p>
                A child with the typical combination of barking cough,
                hoarseness, inspiratory stridor, and a compatible clinical
                course usually requires no laboratory testing or imaging to
                establish the diagnosis.
              </p>
            </Callout>

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Usually unnecessary" tone="slate">
                <ul className="space-y-3">
                  <li>• Routine CBC</li>
                  <li>• Routine inflammatory markers</li>
                  <li>• Routine viral testing solely to diagnose croup</li>
                  <li>• Routine chest radiography</li>
                  <li>• Routine neck radiography</li>
                  <li>• Routine laryngoscopy</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Consider additional evaluation when..."
                tone="amber"
              >
                <ul className="space-y-3">
                  <li>• Presentation is outside the usual age range</li>
                  <li>• Symptoms are atypical or unusually prolonged</li>
                  <li>• The child appears toxic</li>
                  <li>• Disease progresses unexpectedly</li>
                  <li>• Response to appropriate treatment is poor</li>
                  <li>• A foreign body or deep-neck infection is suspected</li>
                  <li>
                    • Recurrent episodes suggest structural airway disease
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Imaging Pearl"
              title="The steeple sign is supportive — not diagnostic"
              tone="blue"
            >
              <p>
                If an AP neck radiograph is obtained, it may demonstrate tapered
                subglottic narrowing known as the{" "}
                <FigureModal
                  trigger="steeple sign"
                  title="Steeple sign in croup"
                >
                  <CroupSteepleSign />
                </FigureModal>
                . The finding is supportive rather than diagnostic, and routine
                imaging is unnecessary when the clinical presentation is
                classic.
              </p>
            </Callout>

            <Callout
              label="Clinical Safety"
              title="Avoid unnecessary agitation in significant upper-airway obstruction"
              tone="rose"
            >
              <p>
                Blood draws, imaging, IV placement, or forced examination can
                increase crying and respiratory effort. In a child with
                significant stridor, prioritize stabilization and obtain only
                studies that are likely to change immediate management.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              MANAGEMENT
          ================================================== */}

          <DiseaseSection
            id="management"
            label="Management"
            title="Treat the edema while keeping the child calm"
            description="Management is driven primarily by clinical severity rather than by laboratory or imaging findings."
          >
            {/* INITIAL APPROACH */}

            <div className="grid gap-5 md:grid-cols-3">
              <ProcessStep
                number="1"
                title="Minimize agitation"
                description="Allow the child to remain with a caregiver, use a comfortable position, and avoid unnecessary procedures that increase crying and airflow demand."
              />

              <ProcessStep
                number="2"
                title="Assess severity"
                description="Determine whether stridor occurs at rest, evaluate retractions and air entry, and look for fatigue, altered mental status, hypoxemia, or cyanosis."
              />

              <ProcessStep
                number="3"
                title="Treat promptly"
                description="Give corticosteroid therapy for croup of any severity and add nebulized epinephrine when clinically significant stridor or respiratory distress is present."
              />
            </div>

            {/* DEXAMETHASONE */}

            <InfoCard title="Dexamethasone — first-line therapy" tone="emerald">
              <p>
                A single dose of dexamethasone is recommended for children with
                croup regardless of severity. Oral administration is generally
                preferred when tolerated, although intramuscular or intravenous
                administration may be used when necessary.
              </p>

              <div className="mt-5 rounded-xl border border-emerald-200 bg-white/70 p-4">
                <p className="font-bold text-emerald-950">
                  Common reference dose
                </p>

                <p className="mt-2">
                  Dexamethasone <strong>0.6 mg/kg once</strong>.
                </p>
              </div>

              <p className="mt-4">
                Lower doses such as 0.15 mg/kg are used in some clinical
                pathways and may be similarly effective in many children, but
                evidence establishing equivalence across all severities is less
                certain. Follow local pediatric dosing guidance.
              </p>
            </InfoCard>

            {/* EPINEPHRINE */}

            <InfoCard
              title="Nebulized epinephrine — rapid relief for moderate to severe disease"
              tone="amber"
            >
              <p>
                Nebulized epinephrine produces alpha-adrenergic vasoconstriction
                of upper-airway mucosa, rapidly decreasing edema. Its clinical
                effect begins quickly but is temporary, so it should be paired
                with corticosteroid therapy rather than used as definitive
                treatment alone.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <p className="font-bold text-amber-950">
                    Racemic epinephrine 2.25%
                  </p>

                  <p className="mt-2">
                    <strong>0.05 mL/kg nebulized</strong>
                  </p>

                  <p className="mt-1">Maximum 0.5 mL</p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <p className="font-bold text-amber-950">
                    L-epinephrine 1 mg/mL (1:1,000)
                  </p>

                  <p className="mt-2">
                    <strong>0.5 mL/kg nebulized</strong>
                  </p>

                  <p className="mt-1">Maximum 5 mL</p>
                </div>
              </div>

              <p className="mt-4">
                Reassess after treatment. Repeat dosing may be necessary in
                persistent severe disease, with appropriate cardiorespiratory
                monitoring and escalation of care.
              </p>
            </InfoCard>

            <Callout
              label="Why both?"
              title="Epinephrine buys time; dexamethasone provides sustained anti-inflammatory treatment"
              tone="blue"
            >
              <p>
                Epinephrine works rapidly but its effect wanes. Dexamethasone
                has a slower onset but provides more durable improvement.
                Children requiring epinephrine should therefore also receive
                corticosteroid therapy unless a specific contraindication
                exists.
              </p>
            </Callout>

            {/* SUPPORTIVE */}

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Supportive care" tone="blue">
                <ul className="space-y-3">
                  <li>• Keep the child calm and with the caregiver</li>
                  <li>• Encourage fluids if safely tolerated</li>
                  <li>• Treat fever or discomfort when appropriate</li>
                  <li>• Give supplemental oxygen for hypoxemia</li>
                  <li>
                    • Reassess respiratory effort and air entry frequently
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Not routinely recommended" tone="slate">
                <ul className="space-y-3">
                  <li>• Antibiotics for uncomplicated viral croup</li>
                  <li>• Albuterol unless separate bronchospasm is present</li>
                  <li>• Cough suppressants or decongestants</li>
                  <li>• Humidified mist as definitive therapy</li>
                  <li>• Routine heliox for uncomplicated disease</li>
                </ul>
              </InfoCard>
            </div>

            {/* AIRWAY */}

            <Callout
              label="Airway Emergency"
              title="Recognize impending respiratory failure"
              tone="rose"
            >
              <p>
                Progressive fatigue, altered mental status, cyanosis, hypoxemia,
                markedly decreased air entry, or worsening obstruction despite
                appropriate therapy should trigger immediate airway and
                critical-care escalation.
              </p>

              <p className="mt-3">
                In severe upper-airway obstruction, involve experienced airway
                clinicians early. Avoid repeated nonessential interventions that
                agitate the child while definitive airway management is being
                prepared.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              DISPOSITION
          ================================================== */}

          <DiseaseSection
            id="disposition"
            label="Disposition / Care Setting"
            title="Disposition depends on sustained improvement, not just the first response"
            description="The child should remain clinically stable after treatment before the care setting is de-escalated."
          >
            <div className="grid gap-6 lg:grid-cols-3">
              <InfoCard title="Discharge / outpatient care" tone="emerald">
                <ul className="space-y-3">
                  <li>• No stridor at rest</li>
                  <li>• Minimal or resolved retractions</li>
                  <li>• Normal or near-normal air entry</li>
                  <li>• Able to maintain hydration</li>
                  <li>• No hypoxemia or concerning fatigue</li>
                  <li>• Caregivers understand return precautions</li>
                </ul>
              </InfoCard>

              <InfoCard title="Hospital admission" tone="amber">
                <ul className="space-y-3">
                  <li>• Persistent stridor at rest</li>
                  <li>• Ongoing moderate respiratory distress</li>
                  <li>• Repeated nebulized epinephrine requirement</li>
                  <li>• Poor oral intake or dehydration</li>
                  <li>• Inadequate or short-lived response to treatment</li>
                  <li>• Concern about reliable observation at home</li>
                </ul>
              </InfoCard>

              <InfoCard title="PICU / airway escalation" tone="rose">
                <ul className="space-y-3">
                  <li>• Severe or rapidly progressive obstruction</li>
                  <li>• Markedly decreased air entry</li>
                  <li>• Hypoxemia or cyanosis</li>
                  <li>• Fatigue or altered mental status</li>
                  <li>• Frequent epinephrine requirement</li>
                  <li>• Concern for impending respiratory failure</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="After Epinephrine"
              title="Observe for sustained clinical stability"
              tone="amber"
            >
              <p>
                The improvement from nebulized epinephrine is temporary.
                Children should be observed after treatment — commonly for at
                least two hours — and should demonstrate sustained improvement
                without recurrent stridor at rest before discharge.
              </p>

              <p className="mt-3">
                Institutional pathways may use somewhat different observation
                periods, so disposition should incorporate the clinical course
                and local protocol rather than a single clock-based threshold.
              </p>
            </Callout>

            <InfoCard title="Recurrent or atypical croup" tone="purple">
              <p>
                Repeated episodes, onset outside the usual age range,
                persistently severe symptoms, poor treatment response, or an
                unusual clinical course should prompt consideration of an
                underlying airway disorder and possible ENT, pulmonology, or
                aerodigestive evaluation.
              </p>
            </InfoCard>
          </DiseaseSection>

          {/* =================================================
              CLINICAL PEARLS
          ================================================== */}

          <DiseaseSection
            id="pearls"
            label="Clinical Pearls"
            title="High-yield takeaways"
            description="These are the distinctions worth carrying from the page to the bedside."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard number={1} title="Stridor at rest changes management">
                A child who only develops stridor while crying generally has
                milder obstruction than a child with persistent stridor while
                calm. Stridor at rest is an important trigger for escalation to
                nebulized epinephrine.
              </PearlCard>

              <PearlCard
                number={2}
                title="Give corticosteroids even for mild croup"
              >
                Dexamethasone improves symptoms and reduces return visits even
                when disease is mild. Do not reserve corticosteroids only for
                children with severe stridor.
              </PearlCard>

              <PearlCard number={3} title="Do not chase the steeple sign">
                Croup is a clinical diagnosis. A neck radiograph is not needed
                merely to demonstrate subglottic narrowing in an otherwise
                classic presentation.
              </PearlCard>

              <PearlCard
                number={4}
                title="Epinephrine does not replace dexamethasone"
              >
                Nebulized epinephrine provides rapid but transient relief.
                Corticosteroid therapy addresses the underlying inflammatory
                edema over a longer period.
              </PearlCard>

              <PearlCard
                number={5}
                title="Toxic appearance should make you reconsider croup"
              >
                High fever, toxicity, purulent secretions, rapid progression, or
                poor response to standard therapy should raise concern for
                bacterial tracheitis or another dangerous alternative.
              </PearlCard>

              <PearlCard
                number={6}
                title="Drooling is not a classic croup finding"
              >
                Prominent drooling, dysphagia, severe sore throat, or muffled
                voice should shift attention toward supraglottic or deep-neck
                pathology such as epiglottitis or an abscess.
              </PearlCard>

              <PearlCard number={7} title="Keep the child calm">
                Crying increases airflow demand and can significantly worsen
                dynamic upper-airway obstruction. The caregiver&apos;s lap is
                often the best examination table.
              </PearlCard>

              <PearlCard number={8} title="Quiet stridor can be ominous">
                If a tiring child develops poor air entry and less audible
                stridor, do not assume improvement. Reduced airflow can make the
                airway sound quieter immediately before respiratory failure.
              </PearlCard>
            </div>

            <Callout
              label="Bottom Line"
              title="Bark + hoarseness + stridor → localize first, then grade severity"
              tone="blue"
            >
              <p>
                Typical croup is diagnosed clinically. Give dexamethasone, add
                nebulized epinephrine when significant stridor or distress is
                present, minimize agitation, and reconsider the diagnosis when
                the child looks toxic or behaves unlike uncomplicated viral
                croup.
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

          <EvidenceBase
            references={references}
            secondarySources="The uploaded AAP Pediatric Care Online review and American Family Physician review served as core source material. The 2025 AAP Pediatrics in Review article and updated Cochrane glucocorticoid review were used for contemporary verification and evidence updates."
          />

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
