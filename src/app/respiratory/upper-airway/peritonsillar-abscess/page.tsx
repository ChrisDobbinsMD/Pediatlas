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
import PtaUltrasoundFigure from "@/components/disease/figures/PtaUltrasoundFigure";

/* =========================================================
   REFERENCES
========================================================= */

const references: Reference[] = [
  {
    title:
      "Treatment of Peritonsillar Abscess in Children: A Systematic Review",
    description:
      "Pediatric systematic review of peritonsillar abscess management, including antibiotics, drainage strategies, recurrence, and complications.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11642394/",
  },
];
/* =========================================================
   PAGE
========================================================= */

export default function PeritonsillarAbscessPage() {
  const quizQuestions: QuizQuestion[] = [
    {
      question:
        "A 15-year-old presents with fever, severe right-sided throat pain, muffled voice, and difficulty opening the mouth. Examination shows prominent right peritonsillar swelling with the uvula displaced to the left. Which diagnosis best explains this presentation?",
      answers: [
        {
          text: "Peritonsillar abscess",
          correct: true,
          feedback:
            "Correct. Severe unilateral throat pain, trismus, muffled voice, asymmetric peritonsillar swelling, and contralateral uvular deviation strongly localize the process to the peritonsillar region and are classic for PTA.",
        },
        {
          text: "Uncomplicated acute tonsillitis",
          correct: false,
          feedback:
            "Tonsillitis can cause fever and substantial throat pain, but marked unilateral peritonsillar bulging, trismus, and displacement of the uvula suggest infection extending beyond the tonsil.",
        },
        {
          text: "Retropharyngeal abscess",
          correct: false,
          feedback:
            "Retropharyngeal infection more often produces deep-neck findings such as painful limitation of neck movement or torticollis rather than this focal unilateral peritonsillar examination.",
        },
        {
          text: "Epiglottitis",
          correct: false,
          feedback:
            "Epiglottitis can cause severe dysphagia and abnormal voice, but focal unilateral peritonsillar swelling with uvular displacement localizes the infection to the peritonsillar region.",
        },
      ],
    },

    {
      question:
        "A teenager has severe unilateral throat pain and peritonsillar swelling, but the examination cannot reliably distinguish peritonsillar cellulitis from an abscess. The airway is stable and there are no findings suggesting deep-neck extension. Which study is most useful for determining whether a discrete peritonsillar collection is present?",
      answers: [
        {
          text: "Intraoral or transcervical ultrasound",
          correct: true,
          feedback:
            "Correct. Ultrasound can help distinguish peritonsillar cellulitis from a discrete abscess while avoiding ionizing radiation.",
        },
        {
          text: "Lateral neck radiograph",
          correct: false,
          feedback:
            "A lateral neck radiograph is not the preferred study for determining whether a discrete peritonsillar collection is present.",
        },
        {
          text: "Noncontrast CT of the neck",
          correct: false,
          feedback:
            "When cross-sectional imaging is required for deep-neck infection, contrast enhancement is important; uncomplicated diagnostic uncertainty between peritonsillar cellulitis and abscess can often be addressed with ultrasound.",
        },
        {
          text: "Chest radiograph",
          correct: false,
          feedback:
            "A chest radiograph does not evaluate the peritonsillar tissues or determine whether a localized peritonsillar collection is present.",
        },
      ],
    },

    {
      question:
        "A patient with suspected PTA also has increasing lateral neck swelling, torticollis, and worsening systemic illness. What is the most appropriate next diagnostic step?",
      answers: [
        {
          text: "Treat as uncomplicated PTA without additional evaluation",
          correct: false,
          feedback:
            "Prominent neck findings and systemic deterioration raise concern that infection is no longer confined to the peritonsillar region.",
        },
        {
          text: "CT neck with IV contrast",
          correct: true,
          feedback:
            "Correct. When deep-neck extension is suspected, contrast-enhanced CT can define the involved spaces, disease extent, and relationship to surrounding structures.",
        },
        {
          text: "Routine lateral neck radiograph only",
          correct: false,
          feedback:
            "Concern for extension beyond the peritonsillar region requires better definition of the deep-neck spaces than a routine radiograph provides.",
        },
        {
          text: "No imaging because PTA is always a clinical diagnosis",
          correct: false,
          feedback:
            "A classic localized PTA may not require imaging, but new findings suggesting deep-neck extension change the clinical question and justify cross-sectional imaging.",
        },
      ],
    },

    {
      question:
        "A 16-year-old with a confirmed PTA is breathing comfortably but has severe odynophagia, poor oral intake, and a clinically significant purulent collection. Which management approach best addresses the major components of the illness?",
      answers: [
        {
          text: "Analgesia and hydration alone",
          correct: false,
          feedback:
            "Supportive care is important, but a bacterial PTA also requires antimicrobial therapy and may require source control when a significant collection is present.",
        },
        {
          text: "Antibiotics alone with no reassessment",
          correct: false,
          feedback:
            "Antibiotics treat the infection, but a clinically significant purulent collection may require drainage, and the patient's response should be reassessed.",
        },
        {
          text: "Analgesia and hydration, appropriate antibiotics, and drainage when indicated",
          correct: true,
          feedback:
            "Correct. PTA management combines supportive care and antimicrobial therapy with source control when the collection and clinical situation warrant drainage.",
        },
        {
          text: "Immediate tonsillectomy for every first episode",
          correct: false,
          feedback:
            "Immediate tonsillectomy is not required for every PTA; it is reserved for selected clinical circumstances rather than serving as universal first-line source control.",
        },
      ],
    },

    {
      question:
        "A teenager undergoes treatment for PTA. The next day, throat pain is improving, but the patient develops increasing neck swelling, persistent fever, and worsening limitation of neck movement. What is the most important concern?",
      answers: [
        {
          text: "Expected inflammation during routine recovery",
          correct: false,
          feedback:
            "Increasing neck swelling, persistent fever, and worsening neck movement are not a reassuring recovery pattern after treatment.",
        },
        {
          text: "Extension of infection into an adjacent deep-neck space",
          correct: true,
          feedback:
            "Correct. New or progressive neck findings despite PTA treatment should raise concern for inadequate source control or extension into adjacent deep-neck spaces.",
        },
        {
          text: "Resolution of the peritonsillar infection",
          correct: false,
          feedback:
            "Improvement should include a favorable overall trajectory; progressive neck swelling and persistent fever instead indicate ongoing or extending disease.",
        },
        {
          text: "Isolated medication intolerance",
          correct: false,
          feedback:
            "Medication intolerance may affect treatment, but it does not adequately explain progressive neck swelling, persistent fever, and worsening limitation of neck movement.",
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
            title="Look for a strikingly unilateral oropharyngeal process"
            description="PTA usually presents with severe unilateral throat symptoms plus asymmetric peritonsillar findings. Trismus, muffled voice, and displacement of the tonsil and uvula help localize the infection beyond uncomplicated pharyngotonsillitis."
          >
            {/* CLINICAL EVOLUTION */}

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="1. Pharyngeal symptoms" tone="blue">
                <p>
                  Fever and sore throat often precede abscess formation. As the
                  infection localizes, throat pain typically becomes severe and
                  predominantly unilateral, with increasing odynophagia and
                  difficulty maintaining oral intake.
                </p>
              </InfoCard>

              <InfoCard title="2. Local mass effect" tone="amber">
                <p>
                  Progressive peritonsillar swelling produces increasing
                  oropharyngeal asymmetry. Patients may develop a muffled
                  &quot;hot potato&quot; voice, difficulty swallowing, and
                  ipsilateral referred ear pain.
                </p>
              </InfoCard>

              <InfoCard title="3. Trismus & airway concern" tone="rose">
                <p>
                  Inflammation involving nearby muscles of mastication can
                  produce trismus. Drooling, inability to handle secretions,
                  respiratory distress, or rapidly progressive swelling should
                  raise concern for more severe disease and possible airway
                  compromise.
                </p>
              </InfoCard>
            </div>

            {/* HISTORY AND EXAM */}

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <InfoCard title="History clues" tone="slate">
                <ul className="space-y-2">
                  <li>• Severe sore throat, often predominantly unilateral</li>
                  <li>• Fever</li>
                  <li>• Odynophagia or dysphagia</li>
                  <li>• Decreased oral intake</li>
                  <li>• Muffled or &quot;hot potato&quot; voice</li>
                  <li>• Ipsilateral referred otalgia</li>
                  <li>• Drooling or difficulty handling secretions</li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical examination" tone="slate">
                <ul className="space-y-2">
                  <li>• Unilateral peritonsillar and soft-palate swelling</li>
                  <li>• Medial displacement of the affected tonsil</li>
                  <li>• Uvular deviation away from the affected side</li>
                  <li>• Trismus limiting mouth opening</li>
                  <li>• Tonsillar and pharyngeal erythema</li>
                  <li>• Tender cervical lymphadenopathy</li>
                  <li>• Assess airway and ability to handle secretions</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Bedside Localization"
              title="Trismus plus unilateral peritonsillar swelling is a powerful clue"
              tone="amber"
            >
              <p>
                Uncomplicated tonsillitis can cause substantial throat pain and
                tonsillar inflammation, but marked asymmetry, peritonsillar or
                soft-palate bulging, and trismus should raise concern that
                infection has extended beyond the tonsil into the peritonsillar
                tissues.
              </p>
            </Callout>

            <Callout
              label="Classic Finding"
              title="Uvular deviation supports the diagnosis—but do not require it"
              tone="blue"
            >
              <p>
                Expansion of a unilateral peritonsillar collection can displace
                the affected tonsillar region medially and push the uvula toward
                the opposite side. This is a classic examination finding, but
                its absence should not by itself exclude PTA when the remainder
                of the clinical picture is convincing.
              </p>
            </Callout>

            <Callout
              label="Airway Check"
              title="Before focusing on the throat, make sure the patient can protect the airway"
              tone="rose"
            >
              <p>
                Assess work of breathing, voice, secretion handling, and the
                ability to swallow. Respiratory distress, progressive
                obstruction, or inability to manage secretions should prompt
                urgent escalation rather than an extended routine oropharyngeal
                examination.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              DIFFERENTIAL DIAGNOSIS
          ================================================== */}

          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="Is this a PTA—or another cause of severe unilateral throat symptoms?"
            description="Severe throat pain, dysphagia, abnormal voice, and tonsillar inflammation overlap across several infections. Asymmetry, trismus, neck findings, and the location of swelling help narrow the diagnosis."
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              {[
                {
                  diagnosis: "Peritonsillar cellulitis",
                  clues:
                    "The closest mimic of PTA. Peritonsillar tissues are inflamed and edematous, but there is no discrete purulent collection. Examination findings can overlap substantially with PTA, making the distinction difficult on examination alone.",
                },
                {
                  diagnosis: "Acute tonsillitis / pharyngitis",
                  clues:
                    "Can cause fever, severe throat pain, tonsillar erythema, enlargement, and exudate. Marked unilateral peritonsillar bulging, significant trismus, and displacement of surrounding structures favor PTA.",
                },
                {
                  diagnosis: "Retropharyngeal abscess",
                  clues:
                    "More often produces deep neck symptoms such as painful limitation of neck movement, stiffness, or torticollis, particularly in younger children. The infection is posterior to the pharynx rather than centered around the tonsillar capsule.",
                },
                {
                  diagnosis: "Parapharyngeal abscess",
                  clues:
                    "A lateral deep-neck infection that may cause fever, neck pain or swelling, torticollis, dysphagia, and trismus. Cross-sectional imaging may be needed when examination suggests infection extending beyond the peritonsillar region.",
                },
                {
                  diagnosis: "Epiglottitis",
                  clues:
                    "Severe dysphagia, drooling, muffled voice, respiratory distress, tripod positioning, or reluctance to lie flat favor supraglottic disease. Focal unilateral peritonsillar swelling and uvular displacement instead favor PTA.",
                },
                {
                  diagnosis: "Infectious mononucleosis",
                  clues:
                    "Can produce marked tonsillar enlargement, exudative pharyngitis, fever, and cervical lymphadenopathy. Tonsillar disease is often bilateral, while focal unilateral peritonsillar bulging and trismus should raise concern for PTA or a superimposed abscess.",
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
              label="Highest-Yield Distinction"
              title="Peritonsillar cellulitis and PTA lie on the same clinical spectrum"
              tone="amber"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <p className="font-bold text-slate-950">
                    Peritonsillar cellulitis
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Inflammation and edema involve the peritonsillar tissues,
                    but a discrete purulent collection has not formed.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white/70 p-4">
                  <p className="font-bold text-slate-950">
                    Peritonsillar abscess
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Suppuration has produced a localized collection of pus in
                    the peritonsillar region, potentially requiring drainage in
                    addition to antimicrobial therapy.
                  </p>
                </div>
              </div>
            </Callout>

            <Callout
              label="Diagnostic Pearl"
              title="The examination may strongly suggest PTA without proving that pus is present"
              tone="blue"
            >
              <p>
                Trismus, unilateral peritonsillar swelling, tonsillar
                displacement, and uvular deviation can make PTA clinically
                likely, but peritonsillar cellulitis may produce overlapping
                findings. When the distinction remains uncertain and would
                change management, ultrasonography can help identify a discrete
                collection.
              </p>
            </Callout>

            <Callout
              label="Deep Extension"
              title="Neck findings should make you reconsider whether the infection is still confined to the peritonsillar region"
              tone="rose"
            >
              <p>
                Prominent neck swelling, torticollis, painful limitation of neck
                movement, systemic deterioration, or other findings that seem
                disproportionate to a localized PTA should raise concern for
                parapharyngeal, retropharyngeal, or other deep-neck extension.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              DIAGNOSTIC WORKUP
          ================================================== */}

          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="Most PTAs are diagnosed at the bedside"
            description="The classic combination of unilateral peritonsillar swelling, severe throat pain, trismus, muffled voice, and uvular displacement can make PTA a clinical diagnosis. Imaging is most useful when the diagnosis is uncertain or infection may extend beyond the peritonsillar space."
          >
            <Callout
              label="First Question"
              title="Does this look like a localized PTA—or something deeper?"
              tone="rose"
            >
              <p>
                Before ordering tests, assess the airway and determine whether
                the examination fits a localized peritonsillar process.
                Respiratory distress, inability to handle secretions, prominent
                neck swelling, torticollis, or other findings suggesting
                deep-neck extension should change the diagnostic approach and
                urgency.
              </p>
            </Callout>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Clinical examination" tone="blue">
                <p>
                  PTA is often diagnosed clinically. Look for unilateral
                  peritonsillar and soft-palate swelling, medial displacement of
                  the affected tonsil, trismus, muffled voice, and deviation of
                  the uvula away from the affected side.
                </p>
              </InfoCard>

              <InfoCard title="Ultrasound" tone="emerald">
                <p>
                  Intraoral or transcervical ultrasonography can help
                  distinguish peritonsillar cellulitis from a discrete abscess
                  when the examination is equivocal. Ultrasound can also help
                  define the location of a collection before drainage.
                </p>
              </InfoCard>

              <InfoCard title="CT neck with IV contrast" tone="amber">
                <p>
                  CT is generally reserved for an atypical presentation, an
                  examination limited by severe trismus, diagnostic uncertainty
                  that cannot be resolved clinically or with ultrasound, or
                  concern that infection has extended into adjacent deep-neck
                  spaces.
                </p>
              </InfoCard>
            </div>

            <PtaUltrasoundFigure />

            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                A Practical Imaging Ladder
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Escalate imaging according to the clinical question
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">
                    1. Classic examination
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A convincing unilateral peritonsillar examination may
                    establish the diagnosis without routine cross-sectional
                    imaging.
                  </p>
                </div>

                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">
                    2. Cellulitis or abscess?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    When the diagnosis is uncertain, ultrasound can look for a
                    discrete fluid collection without exposing the patient to
                    ionizing radiation.
                  </p>
                </div>

                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">
                    3. Disease beyond the tonsil?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    When the presentation suggests parapharyngeal,
                    retropharyngeal, or other deep-neck extension,
                    contrast-enhanced CT can define the involved spaces and
                    surrounding structures.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Laboratory studies" tone="slate">
                <p>
                  Routine laboratory testing is not required to establish PTA in
                  every patient. CBC, inflammatory markers, blood cultures, or
                  other studies may be useful when the patient appears
                  systemically ill, has significant dehydration, or there is
                  concern for sepsis or a more extensive infection.
                </p>
              </InfoCard>

              <InfoCard title="Microbiology" tone="slate">
                <p>
                  PTA is typically polymicrobial, involving organisms from the
                  oropharyngeal flora. When purulent material is obtained during
                  drainage, culture may be considered, particularly in severe,
                  recurrent, unusual, or treatment-refractory infection.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Imaging Pearl"
              title="Ultrasound answers a different question than CT"
              tone="blue"
            >
              <p>
                Ultrasound is particularly useful when the bedside question is
                whether a discrete peritonsillar collection exists. CT becomes
                more valuable when the question changes to how far the infection
                extends and whether adjacent deep-neck spaces or critical
                structures are involved.
              </p>
            </Callout>

            <Callout
              label="Important Pitfall"
              title="Do not make CT a routine prerequisite for drainage"
              tone="amber"
            >
              <p>
                A patient with a classic localized PTA does not necessarily need
                CT simply to confirm the diagnosis before treatment. Unnecessary
                cross-sectional imaging adds radiation and may delay definitive
                management without answering a clinically important question.
              </p>
            </Callout>

            <Callout
              label="Return to the Anatomy"
              title="Deep Extension is the finding that changes the imaging strategy"
              tone="rose"
            >
              <p>
                The anatomy figure&apos;s progression from localized PTA to
                lateral deep-neck extension is also a diagnostic framework. Once
                symptoms or examination findings suggest that infection is no
                longer confined to the peritonsillar region, imaging should
                define the deeper spaces and their relationship to the airway
                and major cervical structures.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              MANAGEMENT
          ================================================== */}

          <DiseaseSection
            id="management"
            label="Management"
            title="Treat the infection—and decide whether the collection needs drainage"
            description="Management combines supportive care, antimicrobial therapy, and source control when appropriate. Airway status, illness severity, ability to tolerate oral intake, abscess characteristics, and clinical response help determine the treatment approach."
          >
            {/* INITIAL PRIORITIES */}

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="1. Assess stability" tone="rose">
                <p>
                  Evaluate the airway, secretion handling, hydration, and
                  overall appearance first. Respiratory distress, progressive
                  obstruction, or inability to manage secretions requires urgent
                  escalation and ENT involvement.
                </p>
              </InfoCard>

              <InfoCard title="2. Control symptoms" tone="blue">
                <p>
                  Provide adequate analgesia and hydration. Severe odynophagia
                  can substantially limit oral intake, and some patients require
                  IV fluids until pain and swallowing improve.
                </p>
              </InfoCard>

              <InfoCard title="3. Treat the infection" tone="emerald">
                <p>
                  Begin antimicrobial therapy directed against the polymicrobial
                  oropharyngeal flora associated with PTA. The route and regimen
                  depend on illness severity, oral tolerance, allergy history,
                  local susceptibility patterns, and institutional guidance.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Airway First"
              title="A large abscess is important—a threatened airway is more important"
              tone="rose"
            >
              <p>
                If the patient develops respiratory distress, progressive
                upper-airway obstruction, or inability to handle secretions,
                airway stabilization and urgent specialty involvement take
                priority over routine imaging or bedside drainage planning.
              </p>
            </Callout>

            {/* ANTIBIOTICS */}

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Antimicrobial Therapy
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Cover streptococci and oral anaerobes
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                PTA is usually polymicrobial. Antibiotic selection should
                provide coverage for common oropharyngeal pathogens, including
                group A streptococci and anaerobic organisms.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <InfoCard title="Parenteral therapy" tone="blue">
                  <ul className="space-y-2">
                    <li>• Ampicillin-sulbactam is a commonly used option.</li>
                    <li>
                      • Other regimens may be selected according to allergy
                      history, local susceptibility patterns, and illness
                      severity.
                    </li>
                    <li>
                      • Broader coverage may be appropriate in severe or
                      complicated infection.
                    </li>
                  </ul>
                </InfoCard>

                <InfoCard title="Oral therapy" tone="emerald">
                  <ul className="space-y-2">
                    <li>
                      • Oral therapy is appropriate when the patient can
                      reliably swallow and maintain hydration.
                    </li>
                    <li>
                      • Amoxicillin-clavulanate is a commonly used oral option.
                    </li>
                    <li>
                      • Antibiotic choice should follow local guidance and
                      individual patient factors.
                    </li>
                  </ul>
                </InfoCard>
              </div>
            </div>

            {/* DRAINAGE DECISION */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Source Control
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Does this abscess need drainage?
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Many established PTAs are managed with drainage plus
                antibiotics, but treatment should be individualized. Abscess
                size, severity, airway status, oral intake, age and cooperation,
                and response to therapy all influence the decision.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="font-bold text-emerald-950">
                    Selected medical management
                  </p>

                  <p className="mt-2 leading-7 text-emerald-950/80">
                    Carefully selected patients with limited disease and
                    reassuring airway status may improve with antimicrobial
                    therapy and close reassessment without immediate drainage.
                    The threshold for procedural management depends on the
                    clinical course and local practice.
                  </p>
                </div>

                <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
                  <p className="font-bold text-rose-950">
                    Drainage becomes more important
                  </p>

                  <ul className="mt-2 space-y-2 text-rose-950/80">
                    <li>• A well-formed or clinically significant abscess</li>
                    <li>
                      • Significant symptoms or inability to maintain hydration
                    </li>
                    <li>• Clinical deterioration</li>
                    <li>
                      • Failure to improve with appropriate medical therapy
                    </li>
                    <li>• Complicated or extending infection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DRAINAGE OPTIONS */}

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Drainage Options
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Source control can be achieved in several ways
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <InfoCard title="Needle aspiration" tone="blue">
                  <p>
                    Needle aspiration can both confirm the presence of purulence
                    and provide therapeutic drainage in an appropriately
                    selected and cooperative patient.
                  </p>
                </InfoCard>

                <InfoCard title="Incision & drainage" tone="blue">
                  <p>
                    Incision and drainage provides direct evacuation of the
                    collection and is a commonly used procedural approach for an
                    established PTA.
                  </p>
                </InfoCard>

                <InfoCard title="Tonsillectomy" tone="purple">
                  <p>
                    Immediate tonsillectomy is not required for every PTA but
                    may be considered in selected patients based on recurrence,
                    severity, airway considerations, or other indications for
                    tonsillectomy.
                  </p>
                </InfoCard>
              </div>
            </div>

            <Callout
              label="Procedural Safety"
              title="Remember what lies lateral to the abscess"
              tone="rose"
            >
              <p>
                The carotid space and major cervical vascular structures lie
                lateral and posterolateral to the peritonsillar region. Drainage
                should respect this anatomy, and unusual anatomy or suspected
                deep extension should lower the threshold for specialty
                management and additional imaging rather than blind procedural
                exploration.
              </p>
            </Callout>

            <Callout
              label="Reassessment"
              title="Treatment success should be visible at the bedside"
              tone="blue"
            >
              <p>
                Improvement should include decreasing pain and fever, better
                mouth opening, improved swallowing and oral intake, and
                reduction in peritonsillar swelling. Persistent or worsening
                symptoms should prompt reconsideration of an undrained
                collection, inadequate antimicrobial therapy, or extension into
                another deep-neck space.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              COMPLICATIONS
          ================================================== */}

          <DiseaseSection
            id="complications"
            label="Complications"
            title="Most PTAs remain localized—but extension can become dangerous"
            description="Complications arise from progressive local swelling, spread into adjacent deep-neck spaces, involvement of nearby vascular structures, aspiration, or systemic dissemination of infection."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Airway compromise" tone="rose">
                <p>
                  Progressive peritonsillar and pharyngeal swelling can narrow
                  the upper airway. Respiratory distress, increasing
                  obstruction, or inability to handle secretions represents an
                  urgent escalation in severity.
                </p>
              </InfoCard>

              <InfoCard title="Deep-neck extension" tone="rose">
                <p>
                  Infection may spread beyond the peritonsillar region into
                  adjacent deep-neck spaces, including the parapharyngeal space.
                  Extension changes both the risk profile and the approach to
                  imaging and source control.
                </p>
              </InfoCard>

              <InfoCard title="Vascular complications" tone="rose">
                <p>
                  Extension toward the lateral deep-neck spaces can place major
                  cervical vessels at risk. Rare complications include internal
                  jugular vein thrombosis and other infectious or vascular
                  complications involving nearby structures.
                </p>
              </InfoCard>

              <InfoCard title="Aspiration" tone="amber">
                <p>
                  Rupture or drainage of purulent material into the oropharynx,
                  particularly when secretion handling is impaired, creates a
                  risk of aspiration into the lower respiratory tract.
                </p>
              </InfoCard>

              <InfoCard title="Sepsis" tone="rose">
                <p>
                  Local infection can progress to bacteremia and systemic
                  illness. Persistent fever, toxicity, hemodynamic instability,
                  or worsening clinical status should raise concern for
                  uncontrolled or extending infection.
                </p>
              </InfoCard>

              <InfoCard title="Recurrence" tone="amber">
                <p>
                  PTA can recur after successful treatment. Recurrence is one
                  reason the history of previous PTA and other indications for
                  tonsillectomy may influence longer-term ENT management.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Anatomy → Complication"
              title="The lateral boundary is what makes extension dangerous"
              tone="rose"
            >
              <p>
                A localized PTA begins immediately lateral to the tonsillar
                capsule, but infection that progresses beyond the pharyngeal
                musculature can enter deeper cervical spaces containing major
                neurovascular structures. This is why new neck swelling,
                torticollis, worsening systemic illness, or an atypical
                examination should trigger concern for disease beyond a simple
                localized PTA.
              </p>
            </Callout>

            <Callout
              label="Clinical Warning"
              title="A changing examination matters more than the original diagnosis"
              tone="amber"
            >
              <p>
                Increasing neck swelling, worsening trismus, new respiratory
                symptoms, inability to handle secretions, persistent fever or
                toxicity, or failure to improve after appropriate therapy should
                prompt reassessment for inadequate source control or extension
                into another deep-neck space.
              </p>
            </Callout>

            <Callout
              label="Recurrence"
              title="Successful drainage does not make future PTA impossible"
              tone="purple"
            >
              <p>
                Recurrent PTA occurs in a minority of pediatric patients. A
                history of recurrent abscesses or other established indications
                for tonsillectomy should prompt consideration of longer-term ENT
                management rather than treating each episode in isolation.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              DISPOSITION / CARE SETTING
          ================================================== */}

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="Disposition depends on the airway, hydration, and response to treatment"
            description="Many patients with uncomplicated PTA can be managed without prolonged hospitalization once pain is controlled, oral intake is adequate, and the airway is reassuring. Admission is appropriate when those conditions are not met or the infection is complicated."
          >
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Consider discharge" tone="emerald">
                <ul className="space-y-2">
                  <li>• Airway is stable</li>
                  <li>• Able to handle secretions</li>
                  <li>• Pain is adequately controlled</li>
                  <li>• Able to tolerate oral fluids and medications</li>
                  <li>
                    • No evidence of deep-neck extension or systemic instability
                  </li>
                  <li>
                    • Reliable follow-up and return precautions are established
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Consider admission" tone="amber">
                <ul className="space-y-2">
                  <li>
                    • Inability to maintain hydration or take oral medications
                  </li>
                  <li>
                    • Poorly controlled pain or significant ongoing symptoms
                  </li>
                  <li>• Need for continued IV therapy or observation</li>
                  <li>• Failure to improve after initial treatment</li>
                  <li>
                    • Significant comorbidity or concern for complicated
                    infection
                  </li>
                  <li>• Uncertain ability to obtain appropriate follow-up</li>
                </ul>
              </InfoCard>

              <InfoCard title="Higher-acuity care" tone="rose">
                <ul className="space-y-2">
                  <li>
                    • Respiratory distress or progressive airway obstruction
                  </li>
                  <li>• Inability to handle secretions</li>
                  <li>• Hemodynamic instability or sepsis</li>
                  <li>• Rapidly progressive swelling</li>
                  <li>
                    • Significant deep-neck extension or other serious
                    complication
                  </li>
                  <li>• Need for advanced airway management</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Discharge Readiness"
              title="Make sure the patient can actually drink before sending them home"
              tone="emerald"
            >
              <p>
                Improvement in the appearance of the throat alone is not enough.
                Before discharge, confirm that pain is controlled well enough
                for the patient to swallow, maintain hydration, and reliably
                take prescribed oral therapy.
              </p>
            </Callout>

            <Callout
              label="Follow-Up"
              title="The trajectory still matters after treatment"
              tone="blue"
            >
              <p>
                Arrange appropriate clinical follow-up after discharge,
                particularly after drainage or when symptoms were substantial.
                Continued improvement in pain, trismus, swallowing, fever, and
                peritonsillar swelling should be expected rather than simply
                assuming that the procedure or first antibiotic dose completed
                treatment.
              </p>
            </Callout>

            <Callout
              label="Return Precautions"
              title="Worsening airway or deep-neck symptoms require urgent reassessment"
              tone="rose"
            >
              <p>
                New or worsening difficulty breathing, inability to swallow or
                handle secretions, increasing neck swelling, worsening trismus,
                recurrent or persistent fever, progressive pain, or clinical
                deterioration should prompt urgent reassessment for recurrent
                collection, inadequate source control, or extension beyond the
                peritonsillar space.
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
            description="Peritonsillar abscess is a disease of localization. Recognize the unilateral examination, distinguish cellulitis from a true collection when necessary, and identify when infection is no longer confined to the peritonsillar space."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard
                number={1}
                title="Severe unilateral findings should make you think beyond tonsillitis"
              >
                Routine pharyngotonsillitis can cause substantial pain and
                tonsillar inflammation, but marked unilateral peritonsillar
                swelling, trismus, tonsillar displacement, and uvular deviation
                should raise concern for infection extending into the
                peritonsillar tissues.
              </PearlCard>

              <PearlCard
                number={2}
                title="Trismus is an important localization clue"
              >
                Inflammation around the peritonsillar region can provoke painful
                limitation of mouth opening. Significant trismus in a patient
                with severe unilateral throat symptoms should increase suspicion
                for PTA and may also make examination and procedural treatment
                more difficult.
              </PearlCard>

              <PearlCard
                number={3}
                title="PTA and peritonsillar cellulitis can look very similar"
              >
                Peritonsillar cellulitis causes inflammation and edema without a
                discrete collection of pus. When the examination cannot reliably
                distinguish cellulitis from abscess and the distinction would
                change management, ultrasound can help identify a drainable
                collection.
              </PearlCard>

              <PearlCard number={4} title="CT is for the deeper question">
                A classic localized PTA does not routinely require CT
                confirmation. Contrast-enhanced CT becomes more useful when the
                presentation is atypical or there is concern that infection has
                extended into parapharyngeal, retropharyngeal, or other
                deep-neck spaces.
              </PearlCard>

              <PearlCard
                number={5}
                title="Treatment is antibiotics plus source control when needed"
              >
                PTA treatment combines analgesia and hydration with
                antimicrobial therapy directed against polymicrobial
                oropharyngeal flora. An established or clinically significant
                collection may require needle aspiration, incision and drainage,
                or another source-control strategy based on the clinical
                situation.
              </PearlCard>

              <PearlCard
                number={6}
                title="Know when the disease has outgrown the diagnosis"
              >
                Prominent neck swelling, torticollis, worsening systemic
                illness, respiratory symptoms, inability to handle secretions,
                or failure to improve should trigger reassessment for inadequate
                source control, airway compromise, or extension beyond the
                peritonsillar space.
              </PearlCard>
            </div>

            <Callout
              label="One-Line Summary"
              title="Unilateral throat pain + trismus + peritonsillar bulging = localize to the peritonsillar space"
              tone="amber"
            >
              <p>
                Assess the airway first, decide whether a discrete collection
                needs to be demonstrated, treat the polymicrobial infection,
                obtain source control when appropriate, and reconsider the
                anatomy if the patient is not improving as expected.
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
            title="Peritonsillar Abscess Anki Deck"
            cardCount={16}
            downloadHref="/Anki/peritonsillar-abscess.apkg"
          />
          {/* =================================================
              EVIDENCE BASE
          ================================================== */}

          <EvidenceBase references={references} />
        </div>
      </div>
    </main>
  );
}
