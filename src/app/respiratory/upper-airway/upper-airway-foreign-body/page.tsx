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
import ChokingAlgorithmFigure from "@/components/disease/figures/ChokingAlgorithmFigure";

/* =========================================================
   REFERENCES
========================================================= */

const references = [
  {
    title:
      "2025 AHA/AAP Guidelines for Pediatric Basic Life Support: Foreign-Body Airway Obstruction",
    description:
      "Current pediatric resuscitation guidance for recognition and management of mild and severe foreign-body airway obstruction, including age-specific choking maneuvers and management of the unresponsive child.",
    href: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support",
  },
  {
    title:
      "AAP Pediatric Care Online: Foreign Bodies of the Ear, Nose, Airway, and Esophagus",
    description:
      "Point-of-care pediatric reference covering airway foreign-body presentation, localization, diagnostic evaluation, treatment, and prevention.",
    href: "https://publications.aap.org/pediatriccare/article/doi/10.1542/aap.ppcqr.396161/1619/Foreign-Bodies-of-the-Ear-Nose-Airway-and",
  },
  {
    title: "AAP Pediatric Care Online: Airway Obstruction",
    description:
      "Current pediatric reference addressing acute upper-airway obstruction, including recognition of foreign-body aspiration among the causes of acute airway compromise.",
    href: "https://publications.aap.org/pediatriccare/article/doi/10.1542/aap.ppcqr.396244/137/Airways-Obstruction",
  },
  {
    title:
      "Airway Foreign Bodies: A Critical Review for a Common Pediatric Emergency",
    description:
      "Review of pediatric airway foreign-body epidemiology, presentation, localization, diagnostic evaluation, bronchoscopy, and complications.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4786499/",
  },
];
/* =========================================================
   PAGE
========================================================= */

export default function UpperAirwayForeignBodyPage() {
  const questions: QuizQuestion[] = [
    {
      question:
        "A 2-year-old suddenly begins choking while eating. He is awake and coughing forcefully, can cry between coughs, and has good air movement. What is the most appropriate immediate management?",
      answers: [
        {
          text: "Encourage continued coughing and closely monitor",
          correct: true,
          feedback:
            "An effective cough indicates that meaningful airflow remains. Encourage spontaneous coughing while closely monitoring for progression to severe obstruction.",
        },
        {
          text: "Begin abdominal thrusts immediately",
          correct: false,
          feedback:
            "Airway-clearing maneuvers are used for severe foreign-body airway obstruction with an ineffective cough, not while the child is coughing effectively.",
        },
        {
          text: "Perform a blind finger sweep",
          correct: false,
          feedback:
            "Blind finger sweeps should be avoided because they may push an unseen object deeper into the airway.",
        },
        {
          text: "Obtain neck radiographs before further intervention",
          correct: false,
          feedback:
            "The immediate priority is clinical assessment of airway obstruction. Imaging should not replace monitoring or delay treatment if the child deteriorates.",
        },
      ],
    },
    {
      question:
        "A 3-year-old who was choking becomes unable to speak or cough effectively and is developing cyanosis. Which finding most importantly changes management?",
      answers: [
        {
          text: "The choking episode occurred while eating",
          correct: false,
          feedback:
            "Eating provides an important clue to the diagnosis, but the effectiveness of the cough and adequacy of airflow determine the immediate intervention.",
        },
        {
          text: "The child remains awake",
          correct: false,
          feedback:
            "A responsive child can still have severe airway obstruction. An ineffective cough, inability to vocalize, and cyanosis require immediate treatment.",
        },
        {
          text: "The cough has become ineffective",
          correct: true,
          feedback:
            "Loss of an effective cough indicates severe foreign-body airway obstruction and should prompt immediate airway-clearing maneuvers.",
        },
        {
          text: "No radiograph has been obtained",
          correct: false,
          feedback:
            "Severe foreign-body airway obstruction is recognized clinically. Diagnostic imaging must not delay emergency treatment.",
        },
      ],
    },
    {
      question:
        "A 9-month-old infant has severe foreign-body airway obstruction but remains responsive. Which sequence is appropriate?",
      answers: [
        {
          text: "5 back blows followed by 5 abdominal thrusts",
          correct: false,
          feedback:
            "Abdominal thrusts are not recommended for infants. Chest thrusts are used after the back blows.",
        },
        {
          text: "5 back blows followed by 5 chest thrusts",
          correct: true,
          feedback:
            "For a responsive infant with severe foreign-body airway obstruction, alternate 5 back blows with 5 chest thrusts until the object is expelled or the infant becomes unresponsive.",
        },
        {
          text: "5 abdominal thrusts followed by 5 chest thrusts",
          correct: false,
          feedback:
            "Abdominal thrusts should not be performed in an infant with foreign-body airway obstruction.",
        },
        {
          text: "Begin chest compressions while the infant remains responsive",
          correct: false,
          feedback:
            "CPR is initiated if the infant becomes unresponsive. A responsive infant with severe obstruction receives back blows and chest thrusts.",
        },
      ],
    },
    {
      question:
        "A responsive 4-year-old has severe foreign-body airway obstruction with an ineffective cough. According to current pediatric basic life support guidance, what should be performed?",
      answers: [
        {
          text: "Cycles of 5 back blows followed by 5 chest thrusts",
          correct: false,
          feedback:
            "Chest thrusts are used for infants. In a child, back blows are followed by abdominal thrusts.",
        },
        {
          text: "Abdominal thrusts only after the child becomes unresponsive",
          correct: false,
          feedback:
            "Abdominal thrusts are part of treatment while a child with severe obstruction remains responsive. If the child becomes unresponsive, transition to CPR.",
        },
        {
          text: "Encourage coughing without additional intervention",
          correct: false,
          feedback:
            "Encouraging cough is appropriate while the cough remains effective. An ineffective cough with severe obstruction requires airway-clearing maneuvers.",
        },
        {
          text: "Cycles of 5 back blows followed by 5 abdominal thrusts",
          correct: true,
          feedback:
            "For a responsive child with severe foreign-body airway obstruction, current guidance recommends repeated cycles of 5 back blows followed by 5 abdominal thrusts until the object is expelled or the child becomes unresponsive.",
        },
      ],
    },
    {
      question:
        "A toddler has a witnessed choking episode and appears to improve after coughing. Thirty minutes later, she has persistent cough and decreased breath sounds over the right lung. What is the most important concern?",
      answers: [
        {
          text: "The foreign body has definitely been completely expelled",
          correct: false,
          feedback:
            "Clinical improvement after choking does not prove that the object has left the respiratory tract, especially when focal respiratory findings persist.",
        },
        {
          text: "The foreign body may have migrated into the lower airway",
          correct: true,
          feedback:
            "Resolution of the initial choking episode does not exclude a retained foreign body. Persistent cough with focal or asymmetric lung findings suggests tracheobronchial foreign-body aspiration.",
        },
        {
          text: "The child has developed viral croup",
          correct: false,
          feedback:
            "Croup typically follows a viral prodrome and causes barking cough, hoarseness, and stridor rather than focal decreased breath sounds after a witnessed choking event.",
        },
        {
          text: "The persistent cough confirms ongoing complete laryngeal obstruction",
          correct: false,
          feedback:
            "A child with complete laryngeal obstruction cannot generate an effective cough. Persistent focal lower-airway findings instead suggest distal migration or retention.",
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

            <span className="text-slate-600">Foreign Body / Choking</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Oropharynx &amp; Larynx
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Upper Airway Foreign Body
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A foreign body lodged in the upper airway can rapidly progress
                from coughing and stridor to complete airway obstruction.
                Immediate assessment of the child&apos;s ability to cough,
                vocalize, and breathe determines whether observation or
                emergency intervention is required.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Upper Airway
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  Choking
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
                  Airway Emergency
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  Mechanical Obstruction
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
          title="Upper Airway Foreign Body"
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
            title="A toddler suddenly stops making noise"
            description="Recognize severe foreign-body airway obstruction and determine whether the child still has an effective cough and airflow."
          >
            <div className="rounded-3xl bg-blue-950 p-7 text-white">
              <p className="text-lg leading-8 text-blue-50">
                An 18-month-old is eating pieces of food when she suddenly
                begins coughing and gagging. Her caregiver initially hears
                several forceful coughs, but within seconds the coughing becomes
                weak and nearly silent.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                She is awake but distressed and cannot cry. She makes little
                audible respiratory effort and appears increasingly cyanotic.
                There is minimal air movement on examination.
              </p>

              <div className="mt-7 rounded-2xl bg-white/10 p-5">
                <p className="font-semibold text-amber-200">
                  Your clinical reasoning task
                </p>

                <p className="mt-2 leading-7 text-blue-50">
                  Is this child still moving enough air to cough effectively, or
                  has the foreign body produced severe airway obstruction
                  requiring immediate intervention?
                </p>
              </div>
            </div>
          </DiseaseSection>

          {/* =================================================
    ANATOMY & LOCALIZATION
================================================== */}

          {/* =================================================
    ANATOMY & LOCALIZATION
================================================== */}

          <DiseaseSection
            id="localization"
            label="Anatomy & Localization"
            title="Where the object stops determines what happens next"
            description="An upper-airway foreign body threatens airflow at or above the larynx. Localizing the obstruction helps distinguish an acute choking emergency from a foreign body that has passed into the lower airway."
          >
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Oropharynx" tone="blue">
                <p>
                  Food and small objects first pass through the oropharynx,
                  where the respiratory and digestive pathways diverge. An
                  object may be expelled, swallowed into the esophagus, or enter
                  the laryngeal inlet.
                </p>
              </InfoCard>

              <InfoCard title="Laryngeal inlet" tone="rose">
                <p>
                  A foreign body lodged at the laryngeal inlet can critically
                  restrict airflow. Because the obstruction lies proximal to
                  both lungs, severe obstruction can rapidly prevent effective
                  coughing, vocalization, and ventilation.
                </p>
              </InfoCard>

              <InfoCard title="Below the larynx" tone="amber">
                <p>
                  If the object passes through the larynx into the
                  tracheobronchial tree, the presentation may shift from an
                  immediate choking emergency to persistent cough, wheeze,
                  asymmetric air entry, or other findings of lower-airway
                  foreign body aspiration.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="rose"
              label="Critical Localization"
              title="A proximal obstruction threatens both lungs"
            >
              A foreign body obstructing the laryngeal airway can markedly
              reduce or completely stop airflow before it reaches either lung.
              This is why severe upper-airway obstruction can deteriorate much
              faster than a foreign body lodged within one bronchus.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Upper-airway foreign body" tone="rose">
                <ul className="space-y-2">
                  <li>• Acute choking</li>
                  <li>• Weak or absent cough when obstruction is severe</li>
                  <li>• Inability to cry or speak</li>
                  <li>• Stridor or markedly reduced air movement</li>
                  <li>• Cyanosis with severe obstruction</li>
                  <li>• Rapid progression to apnea or unresponsiveness</li>
                </ul>
              </InfoCard>

              <InfoCard title="Lower-airway foreign body" tone="blue">
                <ul className="space-y-2">
                  <li>• Choking event may already have resolved</li>
                  <li>• Persistent cough</li>
                  <li>• Focal or unilateral wheeze</li>
                  <li>• Asymmetric breath sounds</li>
                  <li>• Distal air trapping or atelectasis</li>
                  <li>• Delayed or recurrent pulmonary symptoms</li>
                </ul>
              </InfoCard>
            </div>
          </DiseaseSection>

          {/* =================================================
    PATHOPHYSIOLOGY
================================================== */}

          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="The danger is determined by how much airflow remains"
            description="A foreign body produces mechanical airway obstruction. The physiologic consequences depend on how completely the object blocks airflow and whether the child can still generate an effective cough."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <ProcessStep
                number="1"
                title="Foreign body enters"
                description="Food or another object enters the airway rather than passing safely into the esophagus."
              />

              <ProcessStep
                number="2"
                title="Airflow narrows"
                description="The object partially or completely obstructs the upper airway, increasing resistance to airflow and limiting ventilation."
              />

              <ProcessStep
                number="3"
                title="Cough may fail"
                description="As obstruction becomes more severe, the child may no longer move enough air to generate a forceful cough, cry, or speech."
              />

              <ProcessStep
                number="4"
                title="Hypoxemia progresses"
                description="Complete or near-complete obstruction prevents effective ventilation and can rapidly progress to hypoxemia, loss of consciousness, and cardiac arrest."
              />
            </div>

            <Callout
              tone="blue"
              label="Protective Mechanism"
              title="An effective cough is the child's best airway-clearance maneuver"
            >
              When enough airflow remains to produce a strong cough, the child
              may generate sufficient airway pressure to expel the object
              spontaneously. Interfering with an effective cough can therefore
              be counterproductive.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Mild obstruction" tone="emerald">
                <ul className="space-y-2">
                  <li>• Effective cough</li>
                  <li>• Able to make sounds</li>
                  <li>• Air continues to move around the object</li>
                  <li>• Spontaneous clearance may still occur</li>
                  <li>• Requires close observation for deterioration</li>
                </ul>
              </InfoCard>

              <InfoCard title="Severe obstruction" tone="rose">
                <ul className="space-y-2">
                  <li>• Weak or absent cough</li>
                  <li>• Unable to cry or speak</li>
                  <li>• Markedly reduced or absent airflow</li>
                  <li>• Cyanosis may develop</li>
                  <li>• Altered mental status or apnea may follow</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              tone="rose"
              label="Critical Transition"
              title="The loss of sound can mean the obstruction is getting worse"
            >
              A child who initially coughs loudly may become progressively
              quieter as airflow decreases. Loss of an effective cough, cry, or
              speech should not be interpreted as improvement—it may signal
              progression to severe airway obstruction.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    HISTORY & PHYSICAL
================================================== */}

          <DiseaseSection
            id="history-physical"
            label="History & Physical"
            title="First determine whether the child can still move air"
            description="Foreign-body airway obstruction usually begins abruptly. The immediate priority is not identifying the exact object—it is determining whether the child has an effective cough and adequate airflow or signs of severe obstruction."
          >
            <Callout
              tone="rose"
              label="First Assessment"
              title="Can the child cough, cry, speak, and breathe?"
            >
              These observations rapidly communicate how much airflow remains. A
              strong cough and audible vocalization suggest that air is still
              moving around the object. A weak or absent cough, inability to cry
              or speak, cyanosis, or progressive alteration in mental status
              suggests severe obstruction.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="History clues" tone="blue">
                <ul className="space-y-2">
                  <li>• Sudden onset of choking, coughing, or gagging</li>
                  <li>• Symptoms beginning while eating</li>
                  <li>
                    • Playing with a small object immediately before onset
                  </li>
                  <li>• Witnessed aspiration or suspected object</li>
                  <li>• Initial forceful cough that becomes weak or silent</li>
                  <li>
                    • Abrupt voice change, hoarseness, or inability to vocalize
                  </li>
                  <li>• No preceding infectious prodrome</li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical examination" tone="blue">
                <ul className="space-y-2">
                  <li>• Strength and effectiveness of the cough</li>
                  <li>• Ability to cry or speak</li>
                  <li>• Air movement and respiratory effort</li>
                  <li>• Stridor or other abnormal upper-airway sounds</li>
                  <li>• Voice change or hoarseness</li>
                  <li>• Skin color and evidence of cyanosis</li>
                  <li>• Mental status and level of responsiveness</li>
                </ul>
              </InfoCard>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Mild airway obstruction" tone="emerald">
                <ul className="space-y-2">
                  <li>• Strong, effective cough</li>
                  <li>• Able to cry or speak</li>
                  <li>• Air movement remains present</li>
                  <li>• Child remains responsive</li>
                </ul>
              </InfoCard>

              <InfoCard title="Severe airway obstruction" tone="rose">
                <ul className="space-y-2">
                  <li>• Weak or absent cough</li>
                  <li>• Unable to cry or speak</li>
                  <li>• Markedly reduced or absent air movement</li>
                  <li>• Cyanosis</li>
                  <li>• Altered mental status</li>
                  <li>• Apnea or unresponsiveness</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Clinical Pattern"
              title="Abrupt onset is one of the strongest clues"
            >
              Foreign-body obstruction typically begins suddenly in a previously
              well child, often during eating or play. Stridor that appears
              abruptly without fever or a preceding respiratory illness should
              raise concern for a mechanical obstruction rather than
              automatically being attributed to an infectious upper-airway
              process.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DIFFERENTIAL DIAGNOSIS
================================================== */}

          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="Not every child with stridor is choking"
            description="The tempo of illness is often the most useful discriminator. Foreign-body obstruction is typically abrupt, while infectious upper-airway disorders usually develop with preceding symptoms."
          >
            <Callout
              tone="blue"
              label="Pattern Recognition"
              title="Sudden symptoms in a previously well child favor a foreign body"
            >
              Abrupt choking, gagging, coughing, or stridor during eating or
              play should immediately raise concern for foreign-body airway
              obstruction. Fever, progressive symptoms, or a preceding
              respiratory illness should broaden the differential toward
              infectious causes.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Croup" tone="blue">
                <p>
                  Usually develops after a viral prodrome with a barking cough,
                  hoarseness, and inspiratory stridor. The onset is generally
                  more gradual than foreign-body obstruction.
                </p>
              </InfoCard>

              <InfoCard title="Epiglottitis" tone="rose">
                <p>
                  Consider with acute upper-airway obstruction accompanied by
                  fever, toxic appearance, drooling, dysphagia, or difficulty
                  handling secretions rather than a witnessed choking event.
                </p>
              </InfoCard>

              <InfoCard title="Bacterial tracheitis" tone="amber">
                <p>
                  Often follows a viral respiratory illness and may cause fever,
                  toxic appearance, stridor, and progressive respiratory
                  distress. The infectious prodrome helps distinguish it from
                  abrupt foreign-body obstruction.
                </p>
              </InfoCard>

              <InfoCard title="Anaphylaxis / angioedema" tone="purple">
                <p>
                  Can produce sudden upper-airway compromise, but associated
                  urticaria, facial or lip swelling, gastrointestinal symptoms,
                  hypotension, or a known allergen exposure support an allergic
                  process.
                </p>
              </InfoCard>

              <InfoCard title="Deep neck infection" tone="amber">
                <p>
                  Retropharyngeal or peritonsillar infection may cause
                  dysphagia, drooling, voice change, neck symptoms, or
                  respiratory distress, but typically occurs with fever and a
                  more progressive course.
                </p>
              </InfoCard>

              <InfoCard title="Lower-airway foreign body" tone="blue">
                <p>
                  An object that passes through the larynx may leave the child
                  with persistent cough, focal wheeze, or asymmetric breath
                  sounds after the initial choking episode has improved.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="rose"
              label="Do Not Delay"
              title="The differential comes after recognizing severe obstruction"
            >
              A child who cannot effectively cough, cry, speak, or breathe
              should be treated as having severe foreign-body airway obstruction
              when the clinical context supports choking. Diagnostic testing
              should not delay emergency airway maneuvers.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DIAGNOSTIC WORKUP
================================================== */}

          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="The unstable child does not need a diagnostic test"
            description="Foreign-body airway obstruction is primarily a clinical diagnosis. Testing is reserved for children who are stable enough for further evaluation and should never delay treatment of severe obstruction."
          >
            <Callout
              tone="rose"
              label="Airway First"
              title="Severe obstruction → intervene immediately"
            >
              If the child has a weak or absent cough, cannot cry or speak, has
              inadequate air movement, or is becoming cyanotic or unresponsive,
              do not delay treatment for radiographs, laboratory testing, or
              other diagnostic studies.
            </Callout>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Clinical assessment" tone="blue">
                <p>
                  The history of abrupt choking combined with assessment of
                  cough, vocalization, airflow, respiratory effort, color, and
                  mental status is usually sufficient to recognize acute
                  foreign-body airway obstruction.
                </p>
              </InfoCard>

              <InfoCard title="Neck radiographs" tone="amber">
                <p>
                  In a stable child with concern for a retained upper-airway
                  foreign body, frontal and lateral neck radiographs may help
                  identify a radiopaque object or localize the suspected
                  obstruction.
                </p>
              </InfoCard>

              <InfoCard title="Direct visualization" tone="purple">
                <p>
                  Persistent concern for a retained laryngeal or airway foreign
                  body may require direct laryngoscopy or bronchoscopy for
                  definitive evaluation and removal.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Imaging Limitation"
              title="A normal radiograph does not exclude a foreign body"
            >
              Many aspirated objects are not radiopaque. When the history and
              clinical findings remain concerning, reassuring plain films should
              not end the evaluation.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    MANAGEMENT
================================================== */}

          <DiseaseSection
            id="management"
            label="Management"
            title="Treat based on cough effectiveness and responsiveness"
            description="Management changes immediately when an effective cough becomes ineffective. The goal is to clear the obstruction while avoiding maneuvers that may worsen a mild obstruction."
          >
            <ChokingAlgorithmFigure />

            <Callout
              tone="purple"
              label="Advanced Airway Management"
              title="A visible or retained foreign body may require procedural removal"
            >
              If the object can be directly visualized, trained clinicians may
              remove it under direct laryngoscopy with appropriate instruments.
              A retained airway foreign body may require operative laryngoscopy
              or bronchoscopy for definitive removal.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DISPOSITION
================================================== */}

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="After the airway is cleared, reassess before moving on"
            description="Disposition depends on the severity of the choking event, the method of foreign-body removal, and whether respiratory symptoms or concern for a retained foreign body persist."
          >
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Completely asymptomatic" tone="emerald">
                <p>
                  After successful expulsion, reassess the child for normal
                  breathing, voice, air movement, and mental status. A child who
                  remains completely asymptomatic after a brief choking episode
                  may not require the same level of intervention as one with
                  persistent airway findings.
                </p>
              </InfoCard>

              <InfoCard title="Persistent symptoms" tone="amber">
                <p>
                  Continued stridor, hoarseness, cough, wheeze, respiratory
                  distress, or abnormal breath sounds should raise concern for
                  residual airway injury or a foreign body that remains within
                  or has migrated into the airway.
                </p>
              </InfoCard>

              <InfoCard title="Severe or complicated event" tone="rose">
                <p>
                  Children with prolonged obstruction, loss of consciousness,
                  resuscitation, persistent hypoxemia, significant airway
                  trauma, or procedural foreign-body removal require continued
                  emergency and specialty evaluation with disposition based on
                  their clinical course.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="blue"
              label="Reassessment"
              title="Listen to both the upper and lower airway after the object is expelled"
            >
              Resolution of choking does not prove that the entire foreign body
              has cleared the respiratory tract. Persistent stridor suggests
              ongoing upper-airway pathology, while focal wheeze or asymmetric
              breath sounds should raise concern that the object has migrated
              into the tracheobronchial tree.
            </Callout>

            <Callout
              tone="amber"
              label="Prevention"
              title="Use the event as an opportunity for anticipatory guidance"
            >
              Counsel caregivers about age-appropriate food preparation,
              avoiding developmentally inappropriate small objects and high-risk
              foods, direct supervision while eating, and training in pediatric
              choking first aid and CPR.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    CLINICAL PEARLS
================================================== */}

          <DiseaseSection
            id="pearls"
            label="Clinical Pearls"
            title="The decisions that matter most"
            description="Upper-airway foreign body management depends on recognizing abrupt obstruction, determining whether the cough remains effective, and acting immediately when airflow becomes inadequate."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard
                number={1}
                title="A suddenly quiet child may be getting worse"
              >
                A child who initially coughs or cries loudly may become quiet as
                airflow decreases. Loss of an effective cough, cry, or speech
                can signal progression to severe airway obstruction.
              </PearlCard>

              <PearlCard number={2} title="An effective cough is protective">
                If the child can still cough forcefully and move air, encourage
                continued coughing and monitor closely. Airway-clearing
                maneuvers are reserved for severe obstruction with an
                ineffective cough.
              </PearlCard>

              <PearlCard
                number={3}
                title="Severe obstruction is a clinical diagnosis"
              >
                Weak or absent cough, inability to cry or speak, cyanosis,
                altered mental status, or apnea should trigger immediate
                treatment. Do not delay emergency airway maneuvers for imaging.
              </PearlCard>

              <PearlCard number={4} title="Never perform a blind finger sweep">
                Remove an object from the mouth only when it is visible. Blind
                finger sweeps may push an unseen foreign body deeper into the
                airway.
              </PearlCard>

              <PearlCard
                number={5}
                title="The choking may stop while the foreign body remains"
              >
                Improvement after the initial choking episode does not exclude a
                retained foreign body. Persistent cough, focal wheeze, or
                asymmetric breath sounds should raise concern that the object
                has migrated into the tracheobronchial tree.
              </PearlCard>
            </div>

            <Callout
              label="Bottom Line"
              title="Effective cough or ineffective cough?"
              tone="blue"
            >
              <p>
                In the first moments of a choking event, this distinction drives
                management. Encourage an effective cough. Treat an ineffective
                cough with signs of severe obstruction using age-appropriate
                foreign-body airway obstruction maneuvers.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    PROGRESSIVE QUIZ
================================================== */}

          <DiseaseSection
            id="quiz"
            label="Knowledge Check"
            title="Can you recognize an upper-airway foreign body?"
            description="Apply the clinical patterns from this module to common pediatric presentations."
          >
            <ProgressiveQuiz questions={questions} />
          </DiseaseSection>

          {/* =================================================
              ANKI DECK
          ================================================== */}

          <AnkiDeck
            title="Upper Airway Foreign Body"
            cardCount={8}
            downloadHref="/Anki/upper-airway-fb.apkg"
          />
          {/* =================================================
    EVIDENCE BASE
================================================== */}

          <EvidenceBase
            references={references}
            secondarySources="Additional background review: StatPearls — Foreign Body Airway Obstruction."
          />
        </div>
      </div>
    </main>
  );
}
