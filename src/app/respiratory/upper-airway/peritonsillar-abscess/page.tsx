import Link from "next/link";

import {
  DiseaseSection,
  InfoCard,
  Callout,
  FigureModal,
  ProcessStep,
  PearlCard,
  AnkiDeck,
  ProgressiveQuiz,
  EvidenceBase,
  type QuizQuestion,
  type Reference,
} from "@/components/disease";
import { MobileSectionNav } from "@/components";
import PtaAnatomyFigure from "@/components/disease/figures/PtaAnatomyFigure";

/* =========================================================
   REFERENCES
========================================================= */

const references: Reference[] = [
  {
    title: "American Academy of Pediatrics — In Brief: Retropharyngeal Abscess",
    description:
      "Pediatric-focused review covering clinical presentation, deep-neck localization, radiographic evaluation, microbiology, complications, and management of retropharyngeal abscess.",
    href: "https://publications.aap.org/pediatricsinreview/article-abstract/27/6/e45/34144/In-Brief-Retropharyngeal-Abscess",
  },
  {
    title:
      "Predictors for Successful Treatment of Pediatric Deep Neck Infections Using Antimicrobials Alone",
    description:
      "Pediatric study evaluating factors associated with successful nonsurgical treatment of retropharyngeal and parapharyngeal infections and supporting selective medical management in appropriate children.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4151323/",
  },
  {
    title:
      "Accuracy of Computerized Tomography in Deep Neck Infections in the Pediatric Population",
    description:
      "Study evaluating the ability of CT findings to distinguish cellulitis from abscess in pediatric deep neck infection, highlighting the limitations of imaging alone in predicting drainable purulence.",
    href: "https://pubmed.ncbi.nlm.nih.gov/12761699/",
  },
  {
    title:
      "Retropharyngeal and Parapharyngeal Abscesses Among Children and Adolescents in the United States",
    description:
      "National pediatric study describing epidemiology and management trends, including the substantial proportion of retropharyngeal abscesses managed without surgical drainage.",
    href: "https://pubmed.ncbi.nlm.nih.gov/26407249/",
  },
  {
    title: "NCBI Bookshelf — Retropharyngeal Abscess",
    description:
      "Clinical review of retropharyngeal anatomy, presentation, imaging, antimicrobial therapy, airway concerns, complications, and operative management.",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK441873/",
  },
];
/* =========================================================
   PAGE
========================================================= */

export default function PeritonsillarAbscessPage() {
  const quizQuestions: QuizQuestion[] = [
    {
      question:
        "A 3-year-old develops fever, poor oral intake, drooling, and progressive refusal to extend his neck after several days of upper respiratory symptoms. Which finding most strongly localizes the infection to a deep neck space?",
      answers: [
        {
          text: "Torticollis with painful limitation of neck movement",
          correct: true,
          feedback:
            "Correct. Torticollis and painful limitation of neck movement are important clues to retropharyngeal infection in a young child and help localize the process to the deep neck.",
        },
        {
          text: "Barking cough",
          correct: false,
          feedback:
            "A barking cough is more characteristic of croup and localizes the process toward the laryngeal and subglottic airway.",
        },
        {
          text: "Bilateral tonsillar erythema",
          correct: false,
          feedback:
            "Tonsillar erythema is nonspecific and may occur with uncomplicated pharyngitis; it does not strongly localize infection to the deep neck.",
        },
        {
          text: "Hoarse voice",
          correct: false,
          feedback:
            "Hoarseness can occur in upper-airway disease but is less specific for a retropharyngeal process than painful limitation of neck movement or torticollis.",
        },
      ],
    },

    {
      question:
        "A child with suspected retropharyngeal abscess develops stridor, increasing work of breathing, and difficulty handling secretions. What is the most appropriate next step?",
      answers: [
        {
          text: "Obtain an urgent CT neck with IV contrast before treatment",
          correct: false,
          feedback:
            "Imaging should not delay stabilization when there are signs of impending airway compromise.",
        },
        {
          text: "Prioritize airway management with urgent ENT and experienced airway involvement",
          correct: true,
          feedback:
            "Correct. Airway compromise changes the immediate priority. Stabilization and urgent airway planning should occur before additional diagnostic imaging.",
        },
        {
          text: "Obtain a lateral neck radiograph before consulting ENT",
          correct: false,
          feedback:
            "A lateral neck radiograph may be useful in selected stable patients, but it should not delay airway management in a deteriorating child.",
        },
        {
          text: "Begin oral antibiotics and reassess in several hours",
          correct: false,
          feedback:
            "A child with stridor, respiratory distress, and impaired secretion handling requires urgent escalation rather than outpatient-style treatment.",
        },
      ],
    },

    {
      question:
        "Contrast-enhanced CT in an airway-stable child shows a retropharyngeal fluid collection with peripheral enhancement. Which interpretation is most appropriate?",
      answers: [
        {
          text: "The child requires immediate operative drainage based on CT alone",
          correct: false,
          feedback:
            "CT findings alone do not mandate surgery because phlegmon and developing abscess can overlap in appearance and may not represent drainable pus.",
        },
        {
          text: "The finding excludes retropharyngeal cellulitis or phlegmon",
          correct: false,
          feedback:
            "Cellulitis, phlegmon, and abscess exist along a spectrum and may overlap radiographically.",
        },
        {
          text: "CT helps define the infection but does not perfectly predict drainable purulence",
          correct: true,
          feedback:
            "Correct. Contrast-enhanced CT is useful for localization and defining disease extent, but operative findings do not always match the apparent degree of abscess formation on imaging.",
        },
        {
          text: "The finding makes ENT consultation unnecessary",
          correct: false,
          feedback:
            "ENT involvement remains important because management depends on airway status, disease extent, and clinical response in addition to imaging.",
        },
      ],
    },

    {
      question:
        "A 4-year-old with CT-confirmed retropharyngeal infection is breathing comfortably, handling secretions, and has no evidence of airway compromise. What is the most appropriate initial management strategy?",
      answers: [
        {
          text: "Immediate surgical drainage in every case",
          correct: false,
          feedback:
            "Not every airway-stable child requires immediate drainage; many can first receive IV antibiotics with close observation.",
        },
        {
          text: "Discharge with oral antibiotics and outpatient ENT follow-up",
          correct: false,
          feedback:
            "Retropharyngeal infection generally warrants hospitalization for IV antibiotics, airway observation, and serial reassessment.",
        },
        {
          text: "Observation without antimicrobial therapy",
          correct: false,
          feedback:
            "Retropharyngeal infection is bacterial and requires appropriate antimicrobial therapy rather than observation alone.",
        },
        {
          text: "Hospital admission for IV antibiotics, ENT involvement, and close reassessment",
          correct: true,
          feedback:
            "Correct. An airway-stable child can often be managed initially with IV antibiotics, ENT involvement, and close reassessment for clinical improvement or evidence that drainage is needed.",
        },
      ],
    },

    {
      question:
        "Which serious complication is most directly explained by the continuity of the deep cervical fascial spaces?",
      answers: [
        {
          text: "Descending mediastinitis",
          correct: true,
          feedback:
            "Correct. Deep cervical fascial planes can provide a pathway for infection to extend inferiorly from the neck into the mediastinum.",
        },
        {
          text: "Acute otitis media",
          correct: false,
          feedback:
            "Otitis media may precede or contribute to upper aerodigestive infection, but it is not caused by inferior spread through deep cervical fascial planes.",
        },
        {
          text: "Viral bronchiolitis",
          correct: false,
          feedback:
            "Bronchiolitis is a viral lower-airway illness and is unrelated to extension of a deep neck infection through fascial planes.",
        },
        {
          text: "Periorbital cellulitis",
          correct: false,
          feedback:
            "Periorbital cellulitis involves tissues around the eye and is not the characteristic complication of inferior spread from the retropharyngeal space.",
        },
      ],
    },
  ];

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

            <span className="text-slate-600">Peritonsillar Abscess</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Peritonsillar Space &amp; Oropharynx
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Peritonsillar Abscess
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A localized collection of pus in the peritonsillar space, most
                often affecting older children and adolescents and characterized
                by unilateral oropharyngeal swelling, odynophagia, muffled
                voice, and trismus.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Upper Airway
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                  Deep Neck Space
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Bacterial Infection
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  Airway Risk
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
            <a href="#complications">Complications</a>
            <a href="#disposition">Disposition</a>
            <a href="#pearls">Clinical Pearls</a>
            <a href="#quiz">Quiz</a>
          </nav>
        </aside>

        {/* =====================================================
            MOBILE SECTION NAVIGATION
        ====================================================== */}

        <MobileSectionNav
          title="Peritonsillar Abscess"
          sections={[
            { id: "vignette", label: "Clinical Vignette" },
            { id: "localization", label: "Anatomy & Localization" },
            { id: "pathophysiology", label: "Pathophysiology" },
            { id: "history-physical", label: "History & Physical" },
            { id: "differential", label: "Differential Diagnosis" },
            { id: "workup", label: "Diagnostic Workup" },
            { id: "management", label: "Management" },
            { id: "complications", label: "Complications" },
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
            title="When pharyngitis becomes strikingly unilateral"
            description="Recognize the progression from tonsillar infection to a focal collection in the peritonsillar space."
          >
            <div className="rounded-3xl bg-blue-950 p-7 text-white">
              <p className="text-lg leading-8 text-blue-50">
                A 15-year-old presents with several days of worsening sore
                throat and fever after initially developing symptoms consistent
                with acute pharyngotonsillitis.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                Over the past 24 hours, the pain has become dramatically worse
                on the right. Swallowing is increasingly painful, oral intake
                has fallen, and the patient now speaks with a muffled voice.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                Examination is difficult because the patient can only partially
                open the mouth because of trismus. The right peritonsillar
                region is prominently swollen, and the uvula is displaced away
                from the affected side.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                The patient is uncomfortable but currently breathing without
                stridor or significant respiratory distress.
              </p>

              <div className="mt-7 rounded-2xl bg-white/10 p-5">
                <p className="font-semibold text-rose-200">
                  Your clinical reasoning task
                </p>

                <p className="mt-2 leading-7 text-blue-50">
                  Which findings suggest that this is no longer uncomplicated
                  pharyngotonsillitis, and where has the infection localized?
                </p>
              </div>
            </div>
          </DiseaseSection>

          {/* =================================================
    ANATOMY & LOCALIZATION
================================================== */}
          <DiseaseSection
            id="anatomy"
            label="Anatomy & Localization"
            title="Localize the infection to the peritonsillar space"
            description="The anatomy explains the asymmetric examination: PTA develops immediately outside the tonsillar capsule rather than within the tonsil itself."
          >
            <PtaAnatomyFigure />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Start with the palatine tonsil" tone="blue">
                <ul className="space-y-2">
                  <li>
                    • The palatine tonsils sit along the lateral walls of the
                    oropharynx.
                  </li>
                  <li>
                    • Each tonsil lies between the anterior tonsillar pillar
                    (palatoglossal arch) and posterior tonsillar pillar
                    (palatopharyngeal arch).
                  </li>
                  <li>
                    • A fibrous capsule separates the lateral surface of the
                    tonsil from the adjacent pharyngeal musculature.
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Then move just outside the capsule" tone="amber">
                <ul className="space-y-2">
                  <li>
                    • The clinically important peritonsillar tissue lies between
                    the tonsillar capsule and the pharyngeal constrictor
                    musculature.
                  </li>
                  <li>
                    • PTA represents a localized collection of pus in this
                    peritonsillar region.
                  </li>
                  <li>
                    • The collection is usually unilateral and commonly develops
                    near the superior pole of the tonsil.
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              tone="blue"
              label="Anatomy Framework"
              title="Build the peritonsillar space from medial to lateral"
            >
              Think from medial to lateral: tonsillar surface → palatine tonsil
              → tonsillar capsule → peritonsillar tissue/space → superior
              pharyngeal constrictor. PTA forms immediately lateral to the
              tonsillar capsule.
            </Callout>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Anterior boundary" tone="slate">
                <ul className="space-y-2">
                  <li>
                    • The palatoglossal arch forms the anterior tonsillar
                    pillar.
                  </li>
                  <li>
                    • Inflammation may produce visible swelling and erythema of
                    the anterior pillar and adjacent soft palate.
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Posterior boundary" tone="slate">
                <ul className="space-y-2">
                  <li>
                    • The palatopharyngeal arch forms the posterior tonsillar
                    pillar.
                  </li>
                  <li>
                    • Together, the tonsillar pillars frame the palatine tonsil
                    within the oropharynx.
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Lateral relationship" tone="slate">
                <ul className="space-y-2">
                  <li>
                    • The superior pharyngeal constrictor lies lateral to the
                    tonsillar capsule.
                  </li>
                  <li>
                    • Spread beyond the peritonsillar region raises concern for
                    deeper neck-space involvement.
                  </li>
                </ul>
              </InfoCard>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <p className="font-semibold text-sky-900">
                Why does the uvula deviate?
              </p>

              <p className="mt-2 leading-7 text-sky-950">
                A unilateral peritonsillar collection expands into the
                oropharynx, producing asymmetric soft-palate and
                tonsillar-region swelling. The affected tonsil may be displaced
                medially and inferiorly while the uvula is pushed toward the
                opposite side.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="font-semibold text-amber-900">
                Why does the patient develop trismus?
              </p>

              <p className="mt-2 leading-7 text-amber-950">
                Inflammation in the nearby masticator region can provoke painful
                reflex spasm of the muscles involved in opening the mouth.
                Clinically, trismus is an important clue that helps distinguish
                PTA from routine uncomplicated pharyngitis.
              </p>
            </div>

            <Callout
              tone="rose"
              label="Anatomic Danger"
              title="Disease may extend beyond the peritonsillar space"
            >
              Infection should not be assumed to remain confined to the
              peritonsillar region. Progressive swelling can threaten the upper
              airway, and extension into contiguous deep neck spaces can place
              major vascular and other cervical structures at risk.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    PATHOPHYSIOLOGY
================================================== */}
          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="From inflammation to a focal collection of pus"
            description="PTA is usually understood as suppurative infection of the peritonsillar tissues, often following acute tonsillar or pharyngeal infection."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              <ProcessStep
                number="1"
                title="Oropharyngeal infection"
                description="Many patients have preceding acute pharyngitis or tonsillitis, producing inflammation around the palatine tonsil and adjacent soft tissues."
              />

              <ProcessStep
                number="2"
                title="Peritonsillar inflammation"
                description="Infection and inflammation involve the tissues immediately outside the tonsillar capsule. At this stage, peritonsillar cellulitis may exist without a discrete collection of pus."
              />

              <ProcessStep
                number="3"
                title="Suppuration"
                description="Progressive infection, tissue necrosis, and suppuration produce a localized collection of pus in the peritonsillar region."
              />

              <ProcessStep
                number="4"
                title="Local mass effect"
                description="The unilateral collection produces asymmetric soft-palate and peritonsillar swelling, medial displacement of the tonsillar region, and contralateral deviation of the uvula."
              />

              <ProcessStep
                number="5"
                title="Trismus develops"
                description="Inflammation and reflex spasm of nearby muscles of mastication limit mouth opening and can make direct visualization of the peritonsillar region difficult."
              />
            </div>

            <Callout
              tone="purple"
              label="Pathogenesis Nuance"
              title="Not every PTA necessarily follows a simple tonsillitis → cellulitis → abscess sequence"
            >
              Not every PTA necessarily follows a simple tonsillitis →
              cellulitis → abscess sequence. Obstruction and infection of the
              minor salivary Weber glands near the superior tonsillar pole has
              also been proposed as a mechanism of abscess formation.
            </Callout>

            <Callout
              tone="blue"
              label="Clinical Translation"
              title="The pathophysiology predicts the bedside findings"
            >
              The pathophysiology predicts the bedside findings: unilateral
              suppuration causes asymmetric bulging and uvular displacement;
              surrounding inflammation causes odynophagia and trismus; and
              progressive edema or extension beyond the peritonsillar region
              increases the risk of airway or deep-neck complications.
            </Callout>
          </DiseaseSection>

          {/* =================================================
              HISTORY & PHYSICAL
          ================================================== */}

          <DiseaseSection
            id="history-physical"
            label="History & Physical"
            title="Fever plus a stiff neck should make you look deeper"
            description="Early retropharyngeal infection can resemble an uncomplicated upper respiratory illness. Neck symptoms and progressive difficulty swallowing provide important clues that the infection has localized to a deep neck space."
          >
            {/* CLINICAL EVOLUTION */}

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="1. Early illness" tone="blue">
                <p>
                  The illness may begin with nonspecific symptoms such as fever,
                  irritability, sore throat, rhinorrhea, decreased appetite, or
                  other features of a preceding upper respiratory infection.
                </p>
              </InfoCard>

              <InfoCard title="2. Deep-neck localization" tone="amber">
                <p>
                  Neck pain, stiffness, limited range of motion, or torticollis
                  should raise concern that infection has extended beyond
                  uncomplicated pharyngitis into the deep cervical tissues.
                </p>
              </InfoCard>

              <InfoCard title="3. Progressive mass effect" tone="rose">
                <p>
                  Dysphagia, odynophagia, drooling, muffled voice, or
                  respiratory symptoms can emerge as inflammation and abscess
                  formation increasingly affect the pharynx and upper airway.
                </p>
              </InfoCard>
            </div>

            {/* HISTORY AND EXAM */}

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <InfoCard title="History clues" tone="slate">
                <ul className="space-y-2">
                  <li>• Recent upper respiratory or pharyngeal infection</li>
                  <li>• Persistent or increasing fever</li>
                  <li>• Sore throat or painful swallowing</li>
                  <li>• Decreased oral intake or food refusal</li>
                  <li>• Neck pain or refusal to move the neck</li>
                  <li>• Drooling or difficulty handling secretions</li>
                  <li>• Progressive symptoms rather than expected recovery</li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical examination" tone="slate">
                <ul className="space-y-2">
                  <li>• Ill or uncomfortable appearance</li>
                  <li>• Limited cervical range of motion</li>
                  <li>• Torticollis or abnormal head positioning</li>
                  <li>• Cervical lymphadenopathy or neck swelling</li>
                  <li>• Posterior pharyngeal erythema or fullness</li>
                  <li>• Muffled voice or drooling</li>
                  <li>
                    • Stridor or respiratory distress with advanced disease
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Bedside Localization"
              title="Neck movement may give you the clue before the airway does"
              tone="amber"
            >
              <p>
                Stridor is not required for retropharyngeal abscess. A febrile
                young child who develops painful limitation of neck movement or
                torticollis deserves evaluation for a deep neck-space infection,
                particularly when accompanied by dysphagia, drooling, or
                worsening oral intake.
              </p>
            </Callout>

            <Callout
              label="Important Pitfall"
              title="Do not require a visible posterior pharyngeal bulge"
              tone="rose"
            >
              <p>
                The retropharyngeal space is deep, and an obvious posterior
                pharyngeal mass may be absent. A relatively unimpressive
                oropharyngeal examination therefore does not exclude
                retropharyngeal infection when the history and neck examination
                are concerning.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              DIFFERENTIAL DIAGNOSIS
          ================================================== */}

          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="Localize the symptoms before naming the disease"
            description="Fever, dysphagia, drooling, abnormal voice, and respiratory symptoms overlap across several serious upper-airway infections. Neck findings and the anatomic pattern help distinguish retropharyngeal abscess from its major mimics."
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              {[
                {
                  diagnosis: "Peritonsillar abscess",
                  clues:
                    "Usually produces prominent unilateral tonsillar or peritonsillar swelling, uvular deviation away from the affected side, muffled voice, and trismus. These lateral oropharyngeal findings favor PTA over a retropharyngeal process.",
                },
                {
                  diagnosis: "Parapharyngeal abscess",
                  clues:
                    "Can also cause fever, neck pain, torticollis, dysphagia, and deep neck swelling. Lateral pharyngeal or neck findings and cross-sectional imaging help define which deep neck space is involved.",
                },
                {
                  diagnosis: "Epiglottitis",
                  clues:
                    "Rapid onset of high fever, severe dysphagia, drooling, muffled voice, tripod positioning, and reluctance to lie down favor supraglottic disease. Neck stiffness and torticollis are more suggestive of a deep neck-space infection.",
                },
                {
                  diagnosis: "Bacterial tracheitis",
                  clues:
                    "High fever, toxic appearance, stridor, harsh cough, and progressive respiratory distress after a viral prodrome favor infection within the trachea. Thick tracheal secretions and poor response to croup therapy are important clues.",
                },
                {
                  diagnosis: "Cervical lymphadenitis",
                  clues:
                    "Fever and painful neck movement may overlap, but prominent superficial or lateral cervical lymph-node swelling without progressive dysphagia, drooling, or deep pharyngeal symptoms favors cervical lymphadenitis.",
                },
                {
                  diagnosis: "Meningitis",
                  clues:
                    "Fever with neck stiffness can suggest meningitis, but altered mental status, headache, photophobia, seizures, or other meningeal findings shift concern toward CNS infection. Torticollis with dysphagia or drooling should prompt consideration of a deep neck process.",
                },
              ].map((item, index) => (
                <div
                  key={item.diagnosis}
                  className={`grid gap-3 p-5 md:grid-cols-[220px_1fr] ${
                    index !== 5 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <p className="font-bold text-slate-900">{item.diagnosis}</p>

                  <p className="leading-7 text-slate-600">{item.clues}</p>
                </div>
              ))}
            </div>

            <Callout
              label="Highest-Yield Comparison"
              title="Let the anatomy separate the dangerous upper-airway infections"
              tone="amber"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <p className="font-bold text-slate-950">
                    Retropharyngeal abscess
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Deep/posterior neck → fever, painful neck movement,
                    torticollis, dysphagia, and drooling.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <p className="font-bold text-slate-950">
                    Peritonsillar abscess
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Lateral oropharynx → unilateral peritonsillar swelling,
                    uvular deviation, muffled voice, and trismus.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <p className="font-bold text-slate-950">Epiglottitis</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Supraglottic airway → severe dysphagia, drooling, muffled
                    voice, tripod positioning, and potential rapid airway
                    compromise.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <p className="font-bold text-slate-950">
                    Bacterial tracheitis
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Trachea/subglottis → stridor, harsh cough, toxic appearance,
                    thick secretions, and poor response to croup therapy.
                  </p>
                </div>
              </div>
            </Callout>

            <Callout
              label="Diagnostic Pearl"
              title="Trismus and uvular deviation should make you reconsider the localization"
              tone="amber"
            >
              <p>
                Marked trismus and unilateral peritonsillar swelling with uvular
                deviation are much more characteristic of peritonsillar disease
                than retropharyngeal abscess. RPA more often announces its deep
                location through painful neck movement, stiffness, or
                torticollis.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              DIAGNOSTIC WORKUP
          ================================================== */}

          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="Assess the airway before chasing the diagnosis"
            description="The diagnostic approach depends first on airway stability. In a stable child, imaging helps identify retropharyngeal inflammation, define its extent, and assess whether a mature abscess may be present."
          >
            <Callout
              label="First Decision"
              title="Is the airway stable?"
              tone="rose"
            >
              <p>
                Stridor, increasing work of breathing, inability to handle
                secretions, rapidly progressive symptoms, or other signs of
                impending airway compromise should shift the priority from
                diagnostic imaging to airway planning and urgent ENT/anesthesia
                involvement. Do not delay stabilization simply to obtain a CT.
              </p>
            </Callout>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Laboratory studies" tone="slate">
                <p>
                  CBC and inflammatory markers may support the presence of
                  bacterial infection but are nonspecific. Blood cultures can be
                  considered in toxic-appearing, septic, or otherwise severely
                  ill patients.
                </p>
              </InfoCard>

              <InfoCard title="Lateral neck radiograph" tone="amber">
                <p>
                  A lateral neck radiograph may demonstrate widening of the
                  prevertebral soft tissues. Interpretation depends heavily on
                  proper positioning and technique, and an abnormal radiograph
                  does not reliably distinguish cellulitis or phlegmon from a
                  mature abscess.
                </p>
              </InfoCard>

              <InfoCard title="CT neck with IV contrast" tone="blue">
                <p>
                  In an airway-stable child, contrast-enhanced CT is commonly
                  used to define the location and extent of deep neck infection
                  and identify features concerning for a fluid collection or
                  abscess.
                </p>
              </InfoCard>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="p-5">
                <p className="text-sm leading-6 text-slate-700">
                  <strong>A, sagittal:</strong> The retropharyngeal collection
                  extends along the cervical spine posterior to the airway.{" "}
                  <strong>B, axial:</strong> Contrast-enhanced CT better defines
                  the collection, surrounding deep neck spaces, and associated
                  mass effect.
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  CT images adapted from{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12779289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    Alzayed S, AlOlaywi A. Management of a Massive
                    Retropharyngeal Abscess Through an External Cervical
                    Approach: A Case Report.
                  </a>{" "}
                  Cureus. 2025;17(12):e98740. CC BY 4.0. Original figure
                  modified to remove source annotations; PediAtlas annotations
                  added.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Reading the CT
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Think in terms of a spectrum
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">Cellulitis</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Inflammatory soft-tissue thickening and edema without a
                    well-organized fluid collection.
                  </p>
                </div>

                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">Phlegmon</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    More organized inflammatory change may appear mass-like or
                    heterogeneous but may still lack a clearly drainable
                    purulent cavity.
                  </p>
                </div>

                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">Abscess</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A discrete low-attenuation collection, particularly with
                    peripheral enhancement, increases suspicion for a mature
                    abscess.
                  </p>
                </div>
              </div>
            </div>

            <Callout
              label="Imaging Pitfall"
              title="CT cannot perfectly tell you whether pus will be found"
              tone="amber"
            >
              <p>
                Contrast-enhanced CT is very useful for defining deep neck
                infection, but inflammatory phlegmon and developing abscess can
                overlap in appearance. Rim enhancement or a fluid-appearing
                collection should therefore be interpreted alongside the
                child&apos;s clinical course, airway status, examination, and
                ENT assessment rather than treated as an automatic indication
                for operative drainage.
              </p>
            </Callout>

            <Callout
              label="Clinical Reasoning"
              title="Imaging answers an anatomic question—not the entire management question"
              tone="blue"
            >
              <p>
                CT helps answer where the infection is, how extensive it is,
                whether adjacent deep neck spaces are involved, and whether a
                collection is present. The decision to continue medical therapy
                or proceed to drainage depends on those findings together with
                airway compromise, severity, abscess characteristics, and
                response to treatment.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              MANAGEMENT
          ================================================== */}

          <DiseaseSection
            id="management"
            label="Management"
            title="Airway stability determines the first move"
            description="Management of retropharyngeal infection combines early airway assessment, IV antibiotics, ENT involvement, and selective surgical drainage. Not every radiographic abscess requires immediate surgery."
          >
            {/* INITIAL MANAGEMENT */}

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Airway compromise" tone="rose">
                <p>
                  Respiratory distress, stridor, inability to handle secretions,
                  rapidly progressive swelling, or other evidence of impending
                  obstruction requires urgent ENT and airway involvement.
                  Stabilization takes priority over additional diagnostic
                  testing.
                </p>
              </InfoCard>

              <InfoCard title="Airway stable" tone="emerald">
                <p>
                  Begin IV antibiotics, involve ENT early, provide supportive
                  care, and closely reassess the clinical response. Many stable
                  children can initially be managed medically rather than
                  proceeding directly to operative drainage.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Airway Safety"
              title="A difficult airway should be anticipated"
              tone="rose"
            >
              <p>
                Deep neck infection can distort upper-airway anatomy and worsen
                rapidly. When airway intervention is required, coordinate with
                experienced airway personnel and ENT whenever possible rather
                than approaching the airway as a routine intubation.
              </p>
            </Callout>

            {/* ANTIBIOTICS */}

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Empiric Antibiotic Therapy
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Cover the expected polymicrobial flora
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Initial therapy should cover common upper respiratory and oral
                organisms, including streptococci, Staphylococcus aureus, and
                anaerobic organisms.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <InfoCard title="Common initial options" tone="blue">
                  <ul className="space-y-2">
                    <li>• Ampicillin-sulbactam</li>
                    <li>• Clindamycin</li>
                  </ul>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Selection should reflect local susceptibility patterns,
                    allergy history, illness severity, and institutional
                    guidance.
                  </p>
                </InfoCard>

                <InfoCard title="When to broaden for MRSA" tone="amber">
                  <p>
                    Additional MRSA-active therapy, such as vancomycin, may be
                    appropriate in severe disease, high-risk patients, or when
                    the child fails to improve on initial therapy.
                  </p>
                </InfoCard>
              </div>
            </div>

            {/* MEDICAL VS SURGICAL */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Medical Therapy vs Drainage
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                The response over time matters
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="font-bold text-emerald-950">
                    Initial medical management
                  </p>

                  <p className="mt-2 leading-7 text-emerald-950/80">
                    In a clinically stable child without airway compromise, IV
                    antibiotics with close observation and ENT involvement can
                    be appropriate initially. Reassess symptoms, examination,
                    airway status, fever curve, and overall trajectory over the
                    next 24–48 hours.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
                  <p className="font-bold text-rose-950">
                    Consider operative drainage
                  </p>

                  <ul className="mt-2 space-y-2 text-rose-950/80">
                    <li>• Airway compromise or respiratory distress</li>
                    <li>• Clinical deterioration despite medical therapy</li>
                    <li>
                      • Failure to improve after an adequate antibiotic trial
                    </li>
                    <li>• Large or well-organized drainable collection</li>
                    <li>• Complications or extension into adjacent spaces</li>
                  </ul>
                </div>
              </div>
            </div>

            <Callout
              label="Management Pearl"
              title="A collection on CT does not automatically equal surgery"
              tone="amber"
            >
              <p>
                In an airway-stable child, the decision to drain should
                integrate imaging with the clinical examination and response to
                IV antibiotics. Imaging can suggest abscess formation, but it
                does not perfectly predict whether operative exploration will
                reveal drainable purulence.
              </p>
            </Callout>

            <Callout
              label="Reassessment"
              title="Watch the child—not just the scan"
              tone="blue"
            >
              <p>
                Improving fever, neck mobility, swallowing, oral intake, pain,
                and overall appearance support continued medical management.
                Worsening airway symptoms, persistent systemic illness, or
                failure of local symptoms to improve should prompt
                reconsideration of drainage and repeat ENT assessment.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              COMPLICATIONS
          ================================================== */}

          <DiseaseSection
            id="complications"
            label="Complications"
            title="A deep neck infection does not have to stay in the neck"
            description="The retropharyngeal space sits beside the upper airway and communicates with other deep cervical fascial planes. Progressive infection can therefore threaten the airway, spread into neighboring spaces, or descend into the chest."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Upper-airway obstruction" tone="rose">
                <p>
                  Expanding inflammation, edema, and abscess can displace the
                  posterior pharyngeal wall anteriorly and progressively narrow
                  the upper airway. Respiratory distress or stridor represents
                  an immediate escalation in severity.
                </p>
              </InfoCard>

              <InfoCard title="Descending mediastinitis" tone="rose">
                <p>
                  Infection can spread inferiorly through communicating deep
                  cervical fascial planes toward the mediastinum. Descending
                  mediastinal infection is a severe complication that can
                  produce extensive thoracic infection and systemic illness.
                </p>
              </InfoCard>

              <InfoCard title="Sepsis and bacteremia" tone="rose">
                <p>
                  Progressive or inadequately controlled infection can extend
                  beyond the original deep neck space and produce bacteremia,
                  sepsis, and systemic deterioration.
                </p>
              </InfoCard>

              <InfoCard title="Adjacent deep-space spread" tone="amber">
                <p>
                  Infection may extend into neighboring cervical spaces rather
                  than remaining confined to the retropharyngeal compartment,
                  increasing disease extent and potentially altering the
                  drainage approach.
                </p>
              </InfoCard>

              <InfoCard title="Vascular complications" tone="rose">
                <p>
                  Deep cervical infection can involve nearby major vessels,
                  producing rare but serious complications such as internal
                  jugular vein thrombosis, carotid involvement, or hemorrhage.
                </p>
              </InfoCard>

              <InfoCard title="Aspiration or pulmonary infection" tone="amber">
                <p>
                  Purulent material and impaired handling of secretions can
                  contribute to aspiration and lower respiratory infection,
                  particularly in children with advanced disease.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Anatomy → Complication"
              title="This is why the sagittal anatomy matters"
              tone="rose"
            >
              <p>
                The danger of retropharyngeal infection is determined partly by
                where it lives. The deep cervical fascial planes create
                potential pathways for infection to extend inferiorly from the
                neck toward the mediastinum. A child whose disease is spreading
                beyond the original space can therefore become critically ill
                even without dramatic findings on the initial oropharyngeal
                examination.
              </p>
            </Callout>

            <Callout
              label="Clinical Warning"
              title="A worsening trajectory should trigger a search for complications"
              tone="amber"
            >
              <p>
                New respiratory symptoms, chest symptoms, increasing neck
                swelling, persistent fever or toxicity, hemodynamic instability,
                or failure to improve despite appropriate therapy should prompt
                reassessment for uncontrolled or extending infection.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              DISPOSITION / CARE SETTING
          ================================================== */}

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="Admission is about the airway and the trajectory"
            description="Children with retropharyngeal abscess generally require hospitalization for IV antibiotics, airway observation, ENT evaluation, and serial reassessment."
          >
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Hospital admission" tone="blue">
                <p>
                  Admit for IV antibiotic therapy, hydration and analgesia as
                  needed, ENT involvement, and repeated assessment of airway
                  status, swallowing, neck mobility, fever, and overall clinical
                  trajectory.
                </p>
              </InfoCard>

              <InfoCard title="Higher-acuity care" tone="rose">
                <p>
                  Respiratory distress, progressive airway symptoms, inability
                  to manage secretions, sepsis, rapidly worsening disease, or
                  need for advanced airway management warrants escalation to a
                  closely monitored or intensive care setting.
                </p>
              </InfoCard>

              <InfoCard title="Improving child" tone="emerald">
                <p>
                  Clinical improvement should include a stable airway, improving
                  fever and pain, better neck mobility and swallowing, and the
                  ability to maintain hydration as therapy transitions toward an
                  outpatient regimen.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Discharge Readiness"
              title="Discharge follows clinical improvement—not simply a better scan"
              tone="emerald"
            >
              <p>
                A child may be considered for discharge once the airway remains
                stable, symptoms and examination are clearly improving, oral
                intake and hydration are adequate, and an appropriate oral
                antibiotic plan and follow-up strategy are established.
              </p>
            </Callout>

            <Callout
              label="Escalation"
              title="Reconsider the plan when the trajectory is wrong"
              tone="rose"
            >
              <p>
                New or worsening stridor, respiratory distress, drooling or
                inability to handle secretions, increasing neck swelling or
                stiffness, persistent systemic illness, or failure to improve
                with IV antibiotics should prompt urgent reassessment and
                reconsideration of airway intervention, drainage, or additional
                evaluation for complications.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              CLINICAL PEARLS
          ================================================== */}

          <DiseaseSection
            id="pearls"
            label="Clinical Pearls"
            title="The high-yield takeaways"
            description="Retropharyngeal abscess is a disease of anatomy, age, and trajectory. Recognizing the localization early can identify deep neck infection before airway compromise develops."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard
                number={1}
                title="Think RPA in the young child with fever + torticollis"
              >
                Retropharyngeal lymph nodes are most prominent in young children
                and involute with age. Fever accompanied by painful limitation
                of neck movement or torticollis should raise concern for a deep
                neck-space infection.
              </PearlCard>

              <PearlCard
                number={2}
                title="The throat examination may look surprisingly unimpressive"
              >
                Do not require a visible posterior pharyngeal bulge. The
                infection lies deep to the pharynx, so neck stiffness,
                torticollis, dysphagia, drooling, or progressive symptoms may
                provide stronger localization clues than the oral examination.
              </PearlCard>

              <PearlCard
                number={3}
                title="Airway stability comes before imaging"
              >
                Stridor, respiratory distress, inability to handle secretions,
                or rapidly progressive symptoms should trigger urgent airway and
                ENT planning. Do not delay stabilization simply to obtain a CT.
              </PearlCard>

              <PearlCard
                number={4}
                title="CT defines anatomy better than it predicts pus"
              >
                Contrast-enhanced CT helps determine the location and extent of
                deep neck infection, but cellulitis, phlegmon, and developing
                abscess can overlap radiographically. Imaging does not perfectly
                predict whether operative exploration will reveal drainable
                purulence.
              </PearlCard>

              <PearlCard
                number={5}
                title="Not every radiographic abscess needs immediate drainage"
              >
                An airway-stable child can often receive IV antibiotics with ENT
                involvement and close reassessment. Clinical deterioration,
                airway compromise, a significant organized collection, or
                failure to improve increases the need for operative drainage.
              </PearlCard>

              <PearlCard
                number={6}
                title="Know where the deep neck spaces can lead"
              >
                Infection is not necessarily confined to the retropharyngeal
                space. Extension through communicating cervical fascial planes
                can spread infection inferiorly toward the mediastinum and
                produce serious complications.
              </PearlCard>
            </div>

            <Callout
              label="One-Line Summary"
              title="Fever + torticollis + dysphagia in a young child = think deep neck"
              tone="amber"
            >
              <p>
                Localize first, assess the airway, define the anatomy when it is
                safe to do so, begin appropriate antimicrobial therapy, and
                follow the child&apos;s clinical trajectory when deciding
                whether drainage is necessary.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              PROGRESSIVE QUIZ
          ================================================== */}

          <DiseaseSection
            id="quiz"
            label="Knowledge Check"
            title="Can you manage the child—not just recognize the abscess?"
            description="Work through five clinical decisions that integrate anatomy, presentation, airway assessment, imaging, and management."
          >
            <ProgressiveQuiz questions={quizQuestions} />
          </DiseaseSection>

          {/* =================================================
              ANKI DECK
          ================================================== */}

          <AnkiDeck
            title="Retropharyngeal Abscess Anki Deck"
            cardCount={16}
            downloadHref="/Anki/retropharyngeal-abscess.apkg"
          />

          {/* =================================================
              EVIDENCE BASE
          ================================================== */}

          <EvidenceBase
            references={references}
            secondarySources="Nelson Textbook of Pediatrics and Ferri's Clinical Advisor were used as additional textbook references for deep-neck anatomy, pathophysiology, microbiology, clinical presentation, imaging, antimicrobial therapy, complications, and operative decision-making."
          />
        </div>
      </div>
    </main>
  );
}
