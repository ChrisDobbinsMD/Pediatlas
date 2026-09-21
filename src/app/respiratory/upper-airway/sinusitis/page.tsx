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
} from "@/components/disease";
import { MobileSectionNav } from "@/components";

/* =========================================================
   REFERENCES
========================================================= */

const references = [
  {
    title: "Sinusitis (AAP Pediatric Care Online)",
    citation:
      "Abdel-Haq N. American Academy of Pediatrics. Pediatric Care Online. Updated March 12, 2024.",
    description:
      "AAP clinical reference for pediatric acute bacterial sinusitis, including diagnostic criteria, antibiotic management, imaging indications, and recognition of orbital and intracranial complications.",
    href: "https://publications.aap.org/pediatriccare/article/doi/10.1542/aap.ppcqr.396228/139/Sinusitis",
  },
  {
    title: "Acute Bacterial Sinusitis in Children: An Updated Review",
    citation: "Leung AKC, Hon KL, Chu WCW. Drugs in Context. 2020;9:2020-9-3.",
    description:
      "Comprehensive review of pediatric sinus development, pathophysiology, microbiology, clinical presentation, diagnosis, treatment, and complications.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7685231/",
  },
  {
    title: "Sinusitis (Nelson Textbook of Pediatrics)",
    citation: "Nelson Textbook of Pediatrics. 22nd ed. Elsevier.",
    description:
      "Core pediatric reference for paranasal sinus anatomy and development, pathogenesis, microbiology, clinical diagnosis, treatment, and complications.",
    href: "https://www.clinicalkey.com/#!/content/book/3-s2.0-B9780323883054004296",
  },
];
/* =========================================================
   PAGE
========================================================= */

export default function SinusitisPage() {
  const questions = [
    {
      question:
        "A 6-year-old has had nasal congestion and daytime cough for 12 days. The symptoms remain essentially unchanged without meaningful improvement. Which clinical pattern of acute bacterial sinusitis does this represent?",
      answers: [
        {
          text: "Persistent illness",
          correct: true,
          feedback:
            "Nasal discharge and/or daytime cough lasting more than 10 days without appreciable improvement meets the persistent illness pattern of acute bacterial sinusitis.",
        },
        {
          text: "Severe onset",
          correct: false,
          feedback:
            "Severe onset requires fever ≥39°C (102.2°F) together with purulent nasal discharge for at least 3 consecutive days at the beginning of illness.",
        },
        {
          text: "Worsening course",
          correct: false,
          feedback:
            "Worsening course requires initial improvement followed by substantial worsening or development of a new fever.",
        },
        {
          text: "Uncomplicated viral URI",
          correct: false,
          feedback:
            "Persistence beyond 10 days without appreciable improvement fits the persistent illness pattern of acute bacterial sinusitis.",
        },
      ],
    },

    {
      question:
        "A 7-year-old develops rhinorrhea and cough. By illness day 5 she is clearly improving, but two days later her congestion and daytime cough become substantially worse and she develops a new fever. Which feature most strongly supports acute bacterial sinusitis?",
      answers: [
        {
          text: "The new fever and worsening symptoms after initial improvement",
          correct: true,
          feedback:
            "Initial improvement followed by substantial worsening or a new fever is the worsening-course pattern, often called double sickening.",
        },
        {
          text: "The presence of nasal congestion",
          correct: false,
          feedback:
            "Nasal congestion is common in both viral URI and acute bacterial sinusitis and does not distinguish them by itself.",
        },
        {
          text: "The presence of cough",
          correct: false,
          feedback:
            "Cough commonly occurs with viral URI as well as sinusitis. The trajectory of symptoms is more informative.",
        },
        {
          text: "The illness has lasted at least 7 days",
          correct: false,
          feedback:
            "A specific 7-day duration does not establish acute bacterial sinusitis. This case is concerning because the child improved and then substantially worsened.",
        },
      ],
    },

    {
      question:
        "A well-appearing 5-year-old meets clinical criteria for uncomplicated acute bacterial sinusitis. There is no periorbital swelling, eye pain, severe headache, vomiting, or neurologic abnormality. What is the most appropriate diagnostic workup?",
      answers: [
        {
          text: "No routine laboratory testing or imaging",
          correct: true,
          feedback:
            "Uncomplicated acute bacterial sinusitis is a clinical diagnosis and generally does not require laboratory testing or imaging.",
        },
        {
          text: "CT of the paranasal sinuses",
          correct: false,
          feedback:
            "CT should not be used routinely to confirm uncomplicated acute bacterial sinusitis because abnormal sinus findings can also occur during viral respiratory infections.",
        },
        {
          text: "Plain sinus radiographs",
          correct: false,
          feedback:
            "Plain radiographs are not recommended to distinguish acute bacterial sinusitis from viral URI.",
        },
        {
          text: "Nasal secretion culture",
          correct: false,
          feedback:
            "Routine nasal cultures do not reliably identify the organisms causing infection within the paranasal sinuses.",
        },
      ],
    },

    {
      question:
        "A 9-year-old has nasal discharge and daytime cough for 11 days without improvement. She is well appearing, has no complication red flags, and reliable follow-up is available. Which management approach is appropriate?",
      answers: [
        {
          text: "Begin antibiotics or observe for up to 3 additional days",
          correct: true,
          feedback:
            "For persistent illness, either immediate antibiotic therapy or a brief period of outpatient observation is appropriate when reliable follow-up is available.",
        },
        {
          text: "Observation is never appropriate once symptoms exceed 10 days",
          correct: false,
          feedback:
            "Persistent illness is the acute bacterial sinusitis presentation for which brief observation can be considered in a well-appearing child with reliable follow-up.",
        },
        {
          text: "Obtain CT imaging before deciding whether to treat",
          correct: false,
          feedback:
            "Imaging is not required to establish uncomplicated acute bacterial sinusitis and should not determine whether routine treatment is started.",
        },
        {
          text: "Provide supportive care alone without a defined reassessment plan",
          correct: false,
          feedback:
            "Observation is an active strategy with close follow-up. Antibiotics should be started if the child worsens or fails to improve during the observation period.",
        },
      ],
    },

    {
      question:
        "A child being treated for sinusitis develops increasing eyelid swelling. Which additional finding is most concerning for extension into the orbit rather than uncomplicated preseptal swelling?",
      answers: [
        {
          text: "Pain with extraocular movements",
          correct: true,
          feedback:
            "Painful or restricted extraocular movements, proptosis, chemosis, or decreased visual acuity raise concern for postseptal orbital involvement.",
        },
        {
          text: "Purulent nasal discharge",
          correct: false,
          feedback:
            "Purulent nasal discharge can occur with sinusitis and does not specifically indicate extension into the orbit.",
        },
        {
          text: "Nasal congestion",
          correct: false,
          feedback:
            "Nasal congestion is an expected upper respiratory symptom and does not specifically indicate orbital extension.",
        },
        {
          text: "Daytime cough",
          correct: false,
          feedback:
            "Daytime cough is common in acute bacterial sinusitis and does not specifically identify an orbital complication.",
        },
      ],
    },

    {
      question:
        "A 13-year-old with frontal sinusitis develops fever, severe headache, and a new tender swelling over the forehead. Which complication should be strongly suspected?",
      answers: [
        {
          text: "Pott puffy tumor",
          correct: true,
          feedback:
            "Pott puffy tumor is frontal bone osteomyelitis with a subperiosteal abscess and classically presents with forehead swelling and tenderness in the setting of frontal sinusitis.",
        },
        {
          text: "Orbital cellulitis",
          correct: false,
          feedback:
            "Orbital cellulitis is characterized by orbital findings such as painful or restricted eye movements, proptosis, chemosis, or visual abnormalities rather than focal forehead swelling.",
        },
        {
          text: "Uncomplicated persistent sinusitis",
          correct: false,
          feedback:
            "New forehead swelling and severe headache are red flags for extension beyond uncomplicated sinusitis.",
        },
        {
          text: "Allergic rhinitis",
          correct: false,
          feedback:
            "Allergic rhinitis does not explain fever, severe headache, and new tender forehead swelling in a child with frontal sinusitis.",
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

            <span className="text-slate-600">Acute Bacterial Sinusitis</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Paranasal Sinuses
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Acute Bacterial Sinusitis
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A bacterial infection of the paranasal sinuses that most often
                develops as a complication of a viral upper respiratory
                infection. Diagnosis is clinical and depends primarily on the
                pattern and trajectory of symptoms.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Upper Airway
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  Bacterial Infection
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  Clinical Diagnosis
                </span>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                  Antibiotic Therapy
                </span>
              </div>
            </div>

            <div className="text-8xl" aria-hidden="true">
              👃
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
          title="Acute Bacterial Sinusitis"
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
            title="The cold was getting better—so why is she sick again?"
            description="Recognize worsening after initial improvement as one of the characteristic clinical presentations of acute bacterial sinusitis."
          >
            <div className="rounded-3xl bg-blue-950 p-7 text-white">
              <p className="text-lg leading-8 text-blue-50">
                An 8-year-old presents with worsening nasal congestion, nasal
                discharge, and cough. Eight days ago, she developed rhinorrhea,
                sore throat, and a mild cough consistent with a viral upper
                respiratory infection.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                By illness day 5, her symptoms seemed to be improving and she
                had returned to normal activity. Over the last 2 days, however,
                her nasal congestion and daytime cough have become substantially
                worse, and she developed a new fever to 39.1°C (102.4°F).
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                Examination shows mucopurulent nasal discharge and edematous
                nasal mucosa. She is breathing comfortably with normal oxygen
                saturation and clear lungs.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                Her parent asks whether this is simply the same cold taking
                longer than expected.
              </p>

              <div className="mt-7 rounded-2xl bg-white/10 p-5">
                <p className="font-semibold text-amber-200">
                  Your clinical reasoning task
                </p>

                <p className="mt-2 leading-7 text-blue-50">
                  Does this still fit the expected trajectory of an
                  uncomplicated viral URI, or does the initial improvement
                  followed by new fever and worsening respiratory symptoms
                  suggest acute bacterial sinusitis?
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
            title="Localize sinusitis to the paranasal sinuses"
            description="Sinus anatomy changes throughout childhood, and the location of infection helps predict both symptoms and complications."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard title="Maxillary & Ethmoid Sinuses" tone="blue">
                <p>
                  The maxillary and ethmoid sinuses begin developing during
                  fetal life and are present, although small, at birth. They
                  continue to enlarge throughout childhood.
                </p>
              </InfoCard>

              <InfoCard title="Frontal & Sphenoid Sinuses" tone="slate">
                <p>
                  The frontal and sphenoid sinuses develop later, typically
                  beginning around 2–3 years of age, and remain relatively
                  rudimentary during early childhood.
                </p>
              </InfoCard>
            </div>

            <Callout variant="blue" title="Sinus anatomy changes with age">
              A young child does have paranasal sinuses—but not the same fully
              developed sinus anatomy as an adolescent. Maxillary and ethmoid
              disease can occur early in life, while the frontal and sphenoid
              sinuses become increasingly relevant as children grow.
            </Callout>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard title="Middle Meatus" tone="blue">
                <p>
                  The maxillary, frontal, and anterior ethmoid sinuses drain
                  into the middle meatus. Inflammation and edema around these
                  drainage pathways can obstruct sinus outflow and impair
                  clearance of secretions.
                </p>
              </InfoCard>

              <InfoCard title="Superior Meatus" tone="slate">
                <p>
                  The sphenoid and posterior ethmoid sinuses drain more
                  posteriorly through the superior meatus, providing a separate
                  drainage pathway into the nasal cavity.
                </p>
              </InfoCard>
            </div>

            <Callout variant="amber" title="Why drainage matters">
              Sinuses are lined by ciliated respiratory epithelium. Viral
              inflammation can produce mucosal edema, obstruct the sinus ostia,
              and impair mucociliary clearance—creating conditions that favor
              bacterial growth.
            </Callout>

            <Callout variant="rose" title="Anatomy predicts complications">
              The paranasal sinuses sit immediately adjacent to important
              structures. Ethmoid sinusitis is particularly associated with
              orbital complications, while frontal sinusitis can extend
              intracranially. New eye findings, severe headache, neurologic
              symptoms, or other signs of extension should therefore change the
              urgency of evaluation.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    PATHOPHYSIOLOGY
================================================== */}

          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="A viral URI sets the stage for bacterial sinusitis"
            description="Acute bacterial sinusitis usually develops when inflammation from a viral upper respiratory infection disrupts normal sinus drainage and mucociliary clearance."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              <ProcessStep
                number="1"
                title="Viral URI"
                description="A respiratory virus infects the nasal and sinus mucosa, triggering inflammation and increased mucus production."
              />

              <ProcessStep
                number="2"
                title="Mucosal edema"
                description="Inflammation causes swelling of the respiratory mucosa surrounding the narrow sinus drainage pathways."
              />

              <ProcessStep
                number="3"
                title="Ostial obstruction"
                description="Edema narrows or obstructs the sinus ostia, reducing normal ventilation and drainage of the affected sinus."
              />

              <ProcessStep
                number="4"
                title="Impaired clearance"
                description="Obstruction and impaired mucociliary function allow secretions to accumulate within the sinus rather than being cleared normally."
              />

              <ProcessStep
                number="5"
                title="Bacterial infection"
                description="The obstructed, poorly draining sinus creates conditions that allow bacteria to proliferate, producing acute bacterial sinusitis."
              />
            </div>

            <Callout
              tone="blue"
              label="Core Mechanism"
              title="The problem begins with impaired drainage"
            >
              Acute bacterial sinusitis is usually not a completely separate
              illness appearing out of nowhere. A viral URI produces mucosal
              inflammation and edema, which can obstruct the sinus ostia and
              interfere with normal mucociliary clearance. Secondary bacterial
              infection can then develop within the poorly draining sinus.
            </Callout>

            <Callout
              tone="purple"
              label="Common Pathogens"
              title="Think pneumococcus, H. influenzae, and Moraxella"
            >
              The major bacterial pathogens associated with pediatric acute
              bacterial sinusitis are <em>Streptococcus pneumoniae</em>,{" "}
              <em>Haemophilus influenzae</em>, and{" "}
              <em>Moraxella catarrhalis</em>.
            </Callout>

            <Callout
              tone="amber"
              label="Clinical Translation"
              title="This is why the trajectory matters"
            >
              Most viral URIs cause transient mucosal inflammation and then
              improve. Acute bacterial sinusitis becomes more likely when
              symptoms fail to follow that expected recovery pattern—remaining
              persistent without improvement, beginning with an unusually severe
              presentation, or worsening after initial improvement.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    HISTORY & PHYSICAL
================================================== */}

          <DiseaseSection
            id="history-physical"
            label="History & Physical"
            title="The diagnosis is in the timeline"
            description="Acute bacterial sinusitis is primarily a clinical diagnosis. Focus on how symptoms began, how long they have lasted, and whether the child is improving or worsening."
          >
            <Callout
              tone="blue"
              label="Diagnostic Framework"
              title="Recognize one of three characteristic patterns"
            >
              Pediatric acute bacterial sinusitis is diagnosed clinically when a
              child with upper respiratory symptoms develops a persistent
              illness, severe onset, or worsening course.
            </Callout>

            <div className="grid gap-5 lg:grid-cols-3">
              <InfoCard title="1. Persistent Illness" tone="amber">
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-slate-900">
                    &gt;10 days without improvement
                  </p>

                  <p>
                    Nasal discharge of any quality, daytime cough, or both
                    persist for more than 10 days without appreciable
                    improvement.
                  </p>

                  <p className="text-sm text-slate-600">
                    The key is not simply reaching day 10—it is reaching day 10
                    without a meaningful trend toward improvement.
                  </p>
                </div>
              </InfoCard>

              <InfoCard title="2. Severe Onset" tone="rose">
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-slate-900">
                    ≥39°C + purulent discharge
                  </p>

                  <p>
                    High fever of at least 39°C (102.2°F) occurs together with
                    purulent nasal discharge for at least 3 consecutive days at
                    the beginning of the illness.
                  </p>

                  <p className="text-sm text-slate-600">
                    Fever and purulent discharge must occur together—the
                    combination and duration distinguish this pattern from an
                    uncomplicated viral URI.
                  </p>
                </div>
              </InfoCard>

              <InfoCard title="3. Worsening Course" tone="purple">
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-slate-900">
                    Improve → then worsen
                  </p>

                  <p>
                    A child with an apparent viral URI begins to improve and
                    then develops substantial worsening of nasal discharge,
                    nasal congestion, or daytime cough, or develops a new fever.
                  </p>

                  <p className="text-sm text-slate-600">
                    This biphasic pattern is often called{" "}
                    <strong>“double sickening.”</strong>
                  </p>
                </div>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Common Trap"
              title="Green mucus does not equal bacterial sinusitis"
            >
              Nasal discharge commonly becomes thicker, colored, or purulent
              during an uncomplicated viral URI before becoming clear again or
              resolving. Purulence alone therefore does not distinguish a viral
              URI from acute bacterial sinusitis.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Symptoms to Ask About" tone="blue">
                <ul className="space-y-2">
                  <li>• Duration and trajectory of nasal symptoms</li>
                  <li>• Nasal congestion or obstruction</li>
                  <li>• Nasal discharge of any quality</li>
                  <li>• Daytime cough, which may worsen at night</li>
                  <li>• Fever and when it occurred during the illness</li>
                  <li>• Initial improvement followed by worsening</li>
                  <li>• Headache or facial discomfort</li>
                  <li>• Decreased appetite, fatigue, or halitosis</li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical Examination" tone="slate">
                <ul className="space-y-2">
                  <li>• General appearance and vital signs</li>
                  <li>• Nasal discharge and congestion</li>
                  <li>• Nasal mucosal or turbinate swelling</li>
                  <li>• Periorbital swelling or erythema</li>
                  <li>• Extraocular movements and ocular pain</li>
                  <li>• Visual changes or proptosis</li>
                  <li>• Facial or forehead swelling</li>
                  <li>• Neurologic status when complications are suspected</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              tone="slate"
              label="Physical Exam"
              title="There is no single exam finding that confirms uncomplicated ABS"
            >
              Nasal turbinate erythema and swelling are nonspecific. Sinus
              percussion is not useful, and sinus transillumination is
              unreliable in children. History—especially the duration and
              trajectory of symptoms—usually carries more diagnostic weight than
              the nasal examination.
            </Callout>

            <Callout
              tone="rose"
              label="Red Flags"
              title="Look beyond uncomplicated sinusitis"
            >
              Proptosis, painful or restricted extraocular movements, visual
              changes, marked periorbital swelling, severe headache, forehead
              swelling, vomiting, altered mental status, focal neurologic
              findings, or other concerning findings should raise suspicion for
              orbital or intracranial extension.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DIFFERENTIAL DIAGNOSIS
================================================== */}

          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="Not every prolonged runny nose is sinusitis"
            description="Many common pediatric conditions produce nasal discharge and cough. Distinguish them by the symptom trajectory, associated findings, and whether the illness fits one of the characteristic patterns of acute bacterial sinusitis."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Viral Upper Respiratory Infection" tone="blue">
                <p>
                  The most important mimic. Viral URIs commonly cause nasal
                  congestion, cough, fever, and even thick or purulent nasal
                  discharge.
                </p>

                <p className="mt-3">
                  Symptoms generally begin improving within about 10 days. Acute
                  bacterial sinusitis becomes more likely when symptoms persist
                  without improvement, are severe from the onset, or worsen
                  after initial improvement.
                </p>
              </InfoCard>

              <InfoCard title="Allergic Rhinitis" tone="purple">
                <p>
                  Consider allergic rhinitis when symptoms are recurrent or
                  chronic and include sneezing, nasal itching, clear rhinorrhea,
                  or other features of atopy.
                </p>

                <p className="mt-3">
                  The characteristic persistent, severe, or worsening illness
                  pattern of acute bacterial sinusitis is usually absent.
                </p>
              </InfoCard>

              <InfoCard title="Nasal Foreign Body" tone="amber">
                <p>
                  Particularly important in younger children. A retained nasal
                  foreign body classically produces persistent, unilateral,
                  foul-smelling or purulent nasal discharge.
                </p>

                <p className="mt-3">
                  Unilateral symptoms should prompt careful examination of the
                  nasal cavity rather than automatically attributing the
                  discharge to sinusitis.
                </p>
              </InfoCard>

              <InfoCard title="Adenoiditis / Adenoid Hypertrophy" tone="slate">
                <p>
                  Adenoid disease can produce nasal obstruction, persistent
                  nasal discharge, mouth breathing, snoring, and cough,
                  substantially overlapping with symptoms of sinusitis.
                </p>

                <p className="mt-3">
                  Chronic or recurrent symptoms without a characteristic acute
                  sinusitis trajectory should raise consideration of adenoid
                  disease.
                </p>
              </InfoCard>

              <InfoCard title="Pertussis" tone="rose">
                <p>
                  Consider pertussis when cough becomes the dominant feature,
                  particularly with prolonged paroxysms, inspiratory whoop,
                  post-tussive emesis, or known exposure.
                </p>

                <p className="mt-3">
                  The respiratory history may begin with nonspecific upper
                  respiratory symptoms before the characteristic cough develops.
                </p>
              </InfoCard>

              <InfoCard title="Lower Respiratory Infection" tone="rose">
                <p>
                  Pneumonia or bronchiolitis can also produce cough and fever.
                  Tachypnea, hypoxemia, increased work of breathing, focal lung
                  findings, or prominent lower respiratory symptoms should shift
                  attention below the upper airway.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="blue"
              label="Clinical Shortcut"
              title="Start by asking one question"
            >
              <strong>“How has this illness behaved over time?”</strong> A child
              who is steadily improving still fits a viral URI. A child with
              symptoms lasting more than 10 days without improvement, severe
              symptoms from the onset, or improvement followed by substantial
              worsening fits the characteristic clinical patterns of acute
              bacterial sinusitis.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DIAGNOSTIC WORKUP
================================================== */}

          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="Uncomplicated sinusitis is a clinical diagnosis"
            description="Most children with acute bacterial sinusitis do not need laboratory testing, cultures, or imaging. Diagnostic testing becomes important when complications or an alternative diagnosis are suspected."
          >
            <Callout
              tone="blue"
              label="Uncomplicated ABS"
              title="The history usually makes the diagnosis"
            >
              When a child meets one of the characteristic clinical patterns of
              acute bacterial sinusitis and has no findings concerning for
              extension, the diagnosis is clinical. Routine laboratory testing
              or imaging is not necessary.
            </Callout>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Laboratory Testing" tone="slate">
                <p className="font-semibold text-slate-900">
                  Not routinely indicated.
                </p>

                <p className="mt-3">
                  CBC, inflammatory markers, and other routine laboratory
                  studies are generally unnecessary for uncomplicated acute
                  bacterial sinusitis.
                </p>
              </InfoCard>

              <InfoCard title="Cultures" tone="slate">
                <p className="font-semibold text-slate-900">
                  Do not routinely obtain nasal cultures.
                </p>

                <p className="mt-3">
                  Cultures of nasal secretions do not reliably identify the
                  organisms causing infection within the paranasal sinuses and
                  are not recommended for routine diagnosis.
                </p>
              </InfoCard>

              <InfoCard title="Imaging" tone="slate">
                <p className="font-semibold text-slate-900">
                  Do not image uncomplicated ABS.
                </p>

                <p className="mt-3">
                  Plain radiographs, ultrasound, CT, and MRI should not be used
                  simply to distinguish acute bacterial sinusitis from an
                  uncomplicated viral URI.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Why Not Image?"
              title="Abnormal sinuses do not necessarily mean bacterial sinusitis"
            >
              Mucosal thickening, opacification, and other sinus abnormalities
              can occur during an uncomplicated viral upper respiratory
              infection. Imaging abnormalities therefore cannot reliably
              distinguish viral inflammation from acute bacterial sinusitis.
            </Callout>

            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-rose-700">
                Suspected Extension
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Orbital or intracranial findings change the workup
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Obtain urgent advanced imaging when the examination raises
                concern for orbital or intracranial complications.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5">
                  <p className="font-semibold text-slate-950">
                    Concern for orbital extension
                  </p>

                  <ul className="mt-3 space-y-2 text-slate-700">
                    <li>• Proptosis</li>
                    <li>• Painful or restricted extraocular movements</li>
                    <li>• Visual changes</li>
                    <li>• Significant periorbital swelling or chemosis</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="font-semibold text-slate-950">
                    Concern for intracranial extension
                  </p>

                  <ul className="mt-3 space-y-2 text-slate-700">
                    <li>• Severe or progressive headache</li>
                    <li>• Vomiting</li>
                    <li>• Altered mental status</li>
                    <li>• Focal neurologic findings</li>
                    <li>• Seizure</li>
                    <li>• Forehead swelling or tenderness</li>
                  </ul>
                </div>
              </div>
            </div>

            <Callout
              tone="rose"
              label="Advanced Imaging"
              title="Use contrast-enhanced CT and/or MRI when complications are suspected"
            >
              Contrast-enhanced CT can rapidly evaluate the paranasal sinuses,
              orbit, and surrounding structures. MRI provides greater
              soft-tissue detail and is particularly useful when intracranial
              extension is suspected. Imaging choice should be guided by the
              suspected complication and clinical urgency.
            </Callout>
          </DiseaseSection>
          {/* =================================================
    MANAGEMENT
================================================== */}

          <DiseaseSection
            id="management"
            label="Management"
            title="Treat based on the clinical pattern"
            description="Management depends on whether the child has persistent illness, severe onset, or a worsening course—and on the risk for resistant organisms or complications."
          >
            <div className="grid gap-5 lg:grid-cols-3">
              <InfoCard title="Persistent Illness" tone="amber">
                <p className="font-semibold text-slate-900">
                  Antibiotics OR brief observation
                </p>

                <p className="mt-3">
                  For symptoms lasting more than 10 days without improvement,
                  either begin antibiotic therapy or observe for up to 3
                  additional days if the child is otherwise well and reliable
                  follow-up is available.
                </p>

                <p className="mt-3 text-sm text-slate-600">
                  Start antibiotics if the child worsens at any time or fails to
                  improve during the observation period.
                </p>
              </InfoCard>

              <InfoCard title="Severe Onset" tone="rose">
                <p className="font-semibold text-slate-900">
                  Start antibiotics
                </p>

                <p className="mt-3">
                  Children with fever ≥39°C (102.2°F) and purulent nasal
                  discharge for at least 3 consecutive days at the beginning of
                  illness should receive antibiotic therapy rather than
                  observation.
                </p>
              </InfoCard>

              <InfoCard title="Worsening Course" tone="purple">
                <p className="font-semibold text-slate-900">
                  Start antibiotics
                </p>

                <p className="mt-3">
                  Children who initially improve from an apparent viral URI and
                  then substantially worsen or develop a new fever should
                  receive antibiotic therapy.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="blue"
              label="First-Line Therapy"
              title="Amoxicillin with or without clavulanate"
            >
              Amoxicillin, with or without clavulanate, is first-line therapy
              for uncomplicated pediatric acute bacterial sinusitis. Selection
              depends on illness severity and the child's risk for organisms
              resistant to standard therapy.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard
                title="Standard-Dose Amoxicillin-Clavulanate"
                tone="blue"
              >
                <p className="text-lg font-semibold text-slate-900">
                  45 mg/kg/day
                </p>

                <p className="mt-2">
                  Dose according to the <strong>amoxicillin component</strong>,
                  divided twice daily.
                </p>

                <p className="mt-3 text-sm text-slate-600">
                  Maximum amoxicillin component: 1.75 g/day.
                </p>

                <p className="mt-3">
                  Appropriate for many children with uncomplicated ABS who do
                  not have risk factors for resistant organisms.
                </p>
              </InfoCard>

              <InfoCard title="High-Dose Amoxicillin-Clavulanate" tone="rose">
                <p className="text-lg font-semibold text-slate-900">
                  90 mg/kg/day
                </p>

                <p className="mt-2">
                  Dose according to the <strong>amoxicillin component</strong>,
                  divided twice daily.
                </p>

                <p className="mt-3 text-sm text-slate-600">
                  Maximum amoxicillin component: 4 g/day.
                </p>

                <p className="mt-3">
                  Use for severe disease or when there is increased risk for
                  resistant organisms.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Resistance Risk"
              title="When should you consider high-dose therapy?"
            >
              Risk factors described by the AAP include age younger than 2
              years, daycare attendance, antibiotic exposure within the previous
              month, recent hospitalization, incomplete pneumococcal
              immunization, immunodeficiency, and communities with a high
              prevalence of resistant organisms.
            </Callout>

            <InfoCard
              title="When is amoxicillin alone reasonable?"
              tone="slate"
            >
              <p>
                Amoxicillin alone may be considered for mild, uncomplicated
                disease when the child has no risk factors for resistant
                organisms and local prevalence of β-lactamase–producing
                respiratory pathogens is low.
              </p>

              <p className="mt-3">
                Amoxicillin-clavulanate provides additional activity against
                β-lactamase–producing organisms such as <em>H. influenzae</em>{" "}
                and <em>M. catarrhalis</em>.
              </p>
            </InfoCard>

            <Callout
              tone="blue"
              label="Reassessment"
              title="Expect improvement within 48–72 hours"
            >
              Reassess the diagnosis and treatment plan if symptoms worsen or
              fail to improve within approximately 48–72 hours after starting
              therapy. Consider an alternative diagnosis, resistant pathogen,
              inadequate treatment, or a developing complication.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Supportive Care" tone="blue">
                <ul className="space-y-2">
                  <li>• Maintain adequate hydration</li>
                  <li>
                    • Acetaminophen or ibuprofen for pain and fever when
                    appropriate
                  </li>
                  <li>
                    • Saline nasal irrigation may provide symptomatic relief
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Not Routinely Recommended" tone="slate">
                <ul className="space-y-2">
                  <li>• Routine antihistamines for uncomplicated ABS</li>
                  <li>• Routine oral or topical decongestants</li>
                  <li>• Routine mucolytics</li>
                </ul>

                <p className="mt-3 text-sm text-slate-600">
                  Evidence supporting these adjunctive therapies in
                  uncomplicated pediatric ABS is limited.
                </p>
              </InfoCard>
            </div>
          </DiseaseSection>

          {/* =================================================
    COMPLICATIONS
================================================== */}

          <DiseaseSection
            id="complications"
            label="Complications"
            title="When infection escapes the sinuses"
            description="Most children recover without complication, but extension beyond the paranasal sinuses can threaten vision, neurologic function, and life."
          >
            <Callout
              tone="rose"
              label="Anatomic Spread"
              title="Think orbit and brain"
            >
              The paranasal sinuses lie immediately adjacent to the orbit and
              intracranial structures. Orbital complications are most often
              associated with ethmoid sinusitis, while intracranial
              complications are particularly associated with frontal sinusitis.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Orbital Complications" tone="rose">
                <p>
                  Orbital involvement is the most common serious complication of
                  acute bacterial sinusitis and commonly results from extension
                  of ethmoid sinus infection.
                </p>

                <ul className="mt-4 space-y-2">
                  <li>• Preseptal / periorbital inflammation</li>
                  <li>• Orbital cellulitis</li>
                  <li>• Subperiosteal abscess</li>
                  <li>• Orbital abscess</li>
                </ul>

                <p className="mt-4 font-semibold text-slate-900">
                  Worry about postseptal disease when there is:
                </p>

                <ul className="mt-2 space-y-2">
                  <li>• Proptosis</li>
                  <li>• Pain with extraocular movements</li>
                  <li>• Restricted extraocular movements</li>
                  <li>• Chemosis</li>
                  <li>• Decreased visual acuity</li>
                </ul>
              </InfoCard>

              <InfoCard title="Intracranial Complications" tone="purple">
                <p>
                  Intracranial extension is less common than orbital disease but
                  carries greater potential morbidity. It is particularly
                  associated with frontal sinusitis.
                </p>

                <ul className="mt-4 space-y-2">
                  <li>• Epidural empyema</li>
                  <li>• Subdural empyema</li>
                  <li>• Brain abscess</li>
                  <li>• Meningitis</li>
                  <li>• Intracranial venous thrombosis</li>
                </ul>

                <p className="mt-4 font-semibold text-slate-900">
                  Red flags include:
                </p>

                <ul className="mt-2 space-y-2">
                  <li>• Severe or progressive headache</li>
                  <li>• Vomiting</li>
                  <li>• Altered mental status</li>
                  <li>• Seizure</li>
                  <li>• Focal neurologic findings</li>
                </ul>
              </InfoCard>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Pott Puffy Tumor" tone="amber">
                <p className="font-semibold text-slate-900">
                  Frontal bone osteomyelitis + subperiosteal abscess
                </p>

                <p className="mt-3">
                  Despite the name, this is not a tumor. Extension of frontal
                  sinus infection can produce osteomyelitis of the frontal bone
                  with a subperiosteal abscess.
                </p>

                <p className="mt-3">
                  Suspect it in a child or adolescent with{" "}
                  <strong>forehead swelling and tenderness</strong> in the
                  setting of sinusitis.
                </p>
              </InfoCard>

              <InfoCard title="Cavernous Sinus Thrombosis" tone="rose">
                <p className="font-semibold text-slate-900">
                  Infection spreads into the cavernous sinus
                </p>

                <p className="mt-3">
                  Infection can reach the cavernous sinus through venous
                  pathways or direct spread, including from sphenoid sinusitis.
                </p>

                <p className="mt-3">
                  Cranial nerve dysfunction can develop; the AAP material
                  highlights <strong>lateral gaze paralysis</strong> as an early
                  finding.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Clinical Pearl"
              title="A swollen eye is not automatically simple periorbital cellulitis"
            >
              Eyelid erythema and swelling may accompany sinusitis, but
              proptosis, impaired vision, chemosis, or painful or restricted
              extraocular movements should raise concern for postseptal orbital
              involvement and prompt urgent evaluation.
            </Callout>

            <Callout
              tone="rose"
              label="Emergency Escalation"
              title="Complicated sinusitis requires hospital-level care"
            >
              Suspected orbital or intracranial extension warrants urgent
              contrast-enhanced CT and/or MRI, parenteral antimicrobial therapy,
              and appropriate specialist consultation. Intracranial suppurative
              disease may also require neurosurgical drainage, while sinus or
              orbital disease may require ENT or ophthalmologic intervention.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DISPOSITION
================================================== */}

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="Most children can be managed at home"
            description="Disposition depends on clinical appearance, ability to tolerate outpatient therapy, reliability of follow-up, and whether there is concern for extension beyond the sinuses."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Outpatient Management" tone="blue">
                <p className="font-semibold text-slate-900">
                  Appropriate for most uncomplicated ABS
                </p>

                <ul className="mt-4 space-y-2">
                  <li>• Well-appearing and clinically stable</li>
                  <li>• No orbital or neurologic red flags</li>
                  <li>
                    • Able to tolerate oral therapy and maintain hydration
                  </li>
                  <li>• Reliable caregiver follow-up</li>
                </ul>

                <p className="mt-4">
                  Children treated with antibiotics should have clear return
                  precautions and be reassessed if symptoms worsen or fail to
                  improve within approximately 48–72 hours.
                </p>
              </InfoCard>

              <InfoCard title="Hospital Evaluation / Admission" tone="rose">
                <p className="font-semibold text-slate-900">
                  Escalate when disease may extend beyond the sinuses
                </p>

                <ul className="mt-4 space-y-2">
                  <li>• Suspected orbital complication</li>
                  <li>• Suspected intracranial complication</li>
                  <li>• Toxic or significantly ill appearance</li>
                  <li>
                    • Inability to tolerate appropriate outpatient therapy
                  </li>
                  <li>• Clinical deterioration despite treatment</li>
                </ul>

                <p className="mt-4">
                  Complicated disease requires hospital-level evaluation,
                  parenteral antibiotics, advanced imaging, and appropriate
                  specialist consultation.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Observation Option"
              title="Observation requires reliable follow-up"
            >
              For a well-appearing child with{" "}
              <strong>persistent illness</strong>, an additional 3 days of
              outpatient observation may be considered instead of immediately
              starting antibiotics. Begin antibiotic therapy if the child
              worsens at any time or fails to improve during that observation
              period.
            </Callout>

            <Callout
              tone="rose"
              label="Return Precautions"
              title="Know the findings that should trigger urgent reevaluation"
            >
              Families should seek prompt reevaluation for worsening illness,
              severe or progressive headache, persistent vomiting, forehead
              swelling, increasing periorbital swelling, eye pain, painful or
              restricted eye movements, proptosis, visual changes, altered
              mental status, seizure, or other new neurologic symptoms.
            </Callout>

            <Callout
              tone="blue"
              label="Reassessment"
              title="No improvement by 48–72 hours? Reconsider the plan."
            >
              Failure to improve or clinical worsening after starting therapy
              should prompt reassessment of the diagnosis and treatment
              strategy, including consideration of resistant organisms, an
              alternative diagnosis, or a developing complication.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    CLINICAL PEARLS
================================================== */}

          <DiseaseSection
            id="pearls"
            label="Clinical Pearls"
            title="What should you remember on your next shift?"
            description="High-yield principles for recognizing and managing acute bacterial sinusitis in children."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard number={1} title="The diagnosis is in the timeline">
                Do not diagnose acute bacterial sinusitis simply because a child
                has cough, congestion, or purulent nasal discharge. Look for one
                of three characteristic patterns:{" "}
                <strong>
                  persistent illness, severe onset, or worsening course.
                </strong>
              </PearlCard>

              <PearlCard number={2} title="Day 10 is not a magic cutoff">
                Persistent illness means nasal discharge and/or daytime cough
                lasting{" "}
                <strong>
                  more than 10 days without appreciable improvement.
                </strong>{" "}
                A child who still has mild symptoms on day 10 but is clearly
                improving may still be following the expected course of a viral
                URI.
              </PearlCard>

              <PearlCard
                number={3}
                title="Green mucus does not equal bacterial infection"
              >
                Thick or purulent nasal secretions can occur during an
                uncomplicated viral URI. The{" "}
                <strong>trajectory of illness</strong> is more useful than the
                color of the nasal discharge for distinguishing viral URI from
                acute bacterial sinusitis.
              </PearlCard>

              <PearlCard
                number={4}
                title="Do not image uncomplicated sinusitis"
              >
                Abnormal sinus findings can occur during viral respiratory
                infections, so imaging cannot reliably distinguish viral URI
                from acute bacterial sinusitis. Reserve advanced imaging for
                concern about{" "}
                <strong>orbital or intracranial extension.</strong>
              </PearlCard>

              <PearlCard
                number={5}
                title="The anatomy predicts the complication"
              >
                Think <strong>ethmoid sinus → orbit</strong> and{" "}
                <strong>frontal sinus → intracranial space.</strong> Proptosis,
                painful or restricted extraocular movements, visual changes,
                severe headache, neurologic abnormalities, or forehead swelling
                should immediately raise concern for complicated disease.
              </PearlCard>

              <PearlCard
                number={6}
                title="Persistent disease is the observation exception"
              >
                Children with{" "}
                <strong>severe onset or worsening-course ABS</strong> should
                receive antibiotics. A well-appearing child with persistent
                illness may instead undergo an additional{" "}
                <strong>3 days of observation</strong> when reliable follow-up
                and a rescue treatment plan are available.
              </PearlCard>
            </div>
          </DiseaseSection>

          {/* =================================================
    PROGRESSIVE QUIZ
================================================== */}

          {/* =================================================
    PROGRESSIVE QUIZ
================================================== */}

          <DiseaseSection
            id="quiz"
            label="Progressive Quiz"
            title="Can you recognize and manage acute bacterial sinusitis?"
            description="Work through increasingly clinical scenarios that test diagnosis, workup, treatment, and recognition of complications."
          >
            <ProgressiveQuiz questions={questions} />
          </DiseaseSection>

          {/* =================================================
              ANKI DECK
          ================================================== */}

          <AnkiDeck
            title="Acute Bacterial Sinusitis Anki Deck"
            cardCount={18}
            downloadHref="/Anki/acute-bacterial-sinusitis.apkg"
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
