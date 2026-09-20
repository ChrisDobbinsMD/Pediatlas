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
import ViralUriFigure from "@/components/disease/figures/ViralUriFigure";

/* =========================================================
   REFERENCES
========================================================= */

const references = [
  {
    title: "Rhinoviruses",
    citation:
      "Richardson KM, Schuster JE. Nelson Textbook of Pediatrics. 22nd ed. Elsevier; 2025.",
    description:
      "Core reference for rhinovirus epidemiology, transmission, pathophysiology, clinical manifestations, diagnosis, treatment, and complications.",
    href: "https://www.clinicalkey.com/",
  },
  {
    title: "Treatment of the Common Cold",
    citation:
      "DeGeorge KC, Ring DJ, Dalrymple SN. American Family Physician. 2019;100(5):281-289.",
    description:
      "Evidence-based review of symptomatic treatment, expected illness duration, ineffective therapies, and antibiotic stewardship in children and adults.",
    href: "https://www.aafp.org/pubs/afp/issues/2019/0901/p281.html",
  },
  {
    title: "Upper Respiratory Tract Infections",
    citation: "Weintraub B. Pediatrics in Review. 2015;36(12):554-556.",
    description:
      "Pediatric-focused review of the expected clinical course of viral URI, common viral causes, supportive care, and recognition of complications.",
    href: "https://publications.aap.org/pediatricsinreview/article/36/12/554/34925/Upper-Respiratory-Tract-Infections",
  },
];
/* =========================================================
   PAGE
========================================================= */

export default function ViralURIPage() {
  const questions = [
    {
      question:
        "A 3-year-old has had rhinorrhea, nasal congestion, and cough for 4 days. His nasal discharge was initially clear but is now thick and yellow-green. He is afebrile, playful, and drinking well. What is the best interpretation?",
      answers: [
        {
          text: "The change in mucus color indicates a secondary bacterial infection",
          correct: false,
          feedback:
            "Mucus color alone does not establish a bacterial infection. Yellow-green secretions commonly occur during uncomplicated viral URIs.",
        },
        {
          text: "The change in mucus color can occur during an uncomplicated viral URI",
          correct: true,
          feedback:
            "Correct. Nasal secretions may become thicker or yellow-green as the inflammatory response evolves. The overall clinical trajectory is more useful than mucus color alone.",
        },
        {
          text: "The child now meets criteria for acute bacterial sinusitis",
          correct: false,
          feedback:
            "Four days of symptoms with a well-appearing, improving child does not establish acute bacterial sinusitis. The duration and trajectory of illness are important.",
        },
        {
          text: "The child should begin empiric antibiotics",
          correct: false,
          feedback:
            "Antibiotics do not treat an uncomplicated viral URI and should not be started based solely on a change in nasal secretion color.",
        },
      ],
    },

    {
      question:
        "A child with a viral URI develops cough but has normal oxygen saturation, comfortable breathing, and clear lungs without wheezing or crackles. What is the best interpretation?",
      answers: [
        {
          text: "Cough confirms that the infection has spread to the lower airway",
          correct: false,
          feedback:
            "Cough does not automatically localize disease to the lower airway. Upper-airway inflammation and secretions commonly trigger cough.",
        },
        {
          text: "The child most likely has bacterial pneumonia",
          correct: false,
          feedback:
            "The absence of respiratory distress, hypoxemia, or focal pulmonary findings makes pneumonia less likely in this presentation.",
        },
        {
          text: "Upper-airway inflammation and secretions can produce cough without primary lower-airway disease",
          correct: true,
          feedback:
            "Correct. Cough is common during viral URI and may result from pharyngeal irritation and upper-airway secretions without primary bronchial or pulmonary disease.",
        },
        {
          text: "Chest radiography is required to determine the location of infection",
          correct: false,
          feedback:
            "Routine chest radiography is not indicated in a child whose history and examination are consistent with an uncomplicated upper respiratory infection.",
        },
      ],
    },

    {
      question:
        "A well-appearing 5-year-old has 3 days of rhinorrhea, congestion, mild sore throat, and cough with a reassuring examination. What is the most appropriate diagnostic approach?",
      answers: [
        {
          text: "Obtain a CBC and inflammatory markers",
          correct: false,
          feedback:
            "Routine laboratory studies do not help diagnose an uncomplicated viral URI and are unnecessary in a reassuring presentation.",
        },
        {
          text: "Obtain a chest radiograph",
          correct: false,
          feedback:
            "Chest imaging is not routinely indicated without findings suggesting lower-airway disease or another complication.",
        },
        {
          text: "Order a broad respiratory pathogen panel",
          correct: false,
          feedback:
            "Identifying a specific virus is usually unnecessary when the result would not change treatment or infection-control decisions.",
        },
        {
          text: "Make a clinical diagnosis without routine testing",
          correct: true,
          feedback:
            "Correct. An uncomplicated viral URI is generally a clinical diagnosis. Testing should be reserved for situations in which the result would meaningfully change management.",
        },
      ],
    },

    {
      question:
        "Which treatment is appropriate for an otherwise healthy 2-year-old with an uncomplicated viral URI and bothersome nighttime cough?",
      answers: [
        {
          text: "Honey",
          correct: true,
          feedback:
            "Correct. Honey may reduce cough frequency and severity in children older than 12 months. It should never be given to infants younger than 1 year because of the risk of infant botulism.",
        },
        {
          text: "Codeine",
          correct: false,
          feedback:
            "Codeine should not be used to treat cough from an uncomplicated viral URI in children.",
        },
        {
          text: "Empiric amoxicillin",
          correct: false,
          feedback:
            "Antibiotics do not improve an uncomplicated viral URI and should be reserved for an identified or strongly suspected bacterial infection.",
        },
        {
          text: "Routine albuterol despite no wheezing",
          correct: false,
          feedback:
            "Bronchodilators do not routinely improve URI-associated cough when there is no evidence of bronchospasm or airflow obstruction.",
        },
      ],
    },

    {
      question:
        "A child initially improves after several days of URI symptoms but then develops new fever and worsening focal symptoms. What is the most appropriate next step?",
      answers: [
        {
          text: "Reassure the family that all viral URIs worsen during recovery",
          correct: false,
          feedback:
            "A new deterioration after initial improvement is not the expected recovery pattern and deserves reassessment.",
        },
        {
          text: "Prescribe antibiotics solely because the illness has lasted several days",
          correct: false,
          feedback:
            "Duration alone does not automatically establish a bacterial infection. The child should first be reassessed for a specific complication or alternative diagnosis.",
        },
        {
          text: "Reassess for a secondary complication or alternative diagnosis",
          correct: true,
          feedback:
            "Correct. Worsening after initial improvement represents a change from the expected trajectory and should prompt evaluation for a complication or alternative diagnosis.",
        },
        {
          text: "Order a respiratory viral panel to determine whether the original virus is still present",
          correct: false,
          feedback:
            "Detecting a respiratory virus would not necessarily explain the new deterioration and may not identify the complication responsible for the change in clinical course.",
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

            <span className="text-slate-600">Viral URI</span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Nasal Cavity &amp; Nasopharynx
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Viral Upper Respiratory Infection
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                An acute viral infection of the upper respiratory tract causing
                rhinorrhea, nasal congestion, cough, and often sore throat or
                fever. Most cases are self-limited and require supportive care
                rather than antibiotics.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  Upper Airway
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                  Viral Infection
                </span>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                  Supportive Care
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  Antibiotic Stewardship
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
          title="Viral URI"
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
            title="Another runny nose—or something more?"
            description="Recognize the typical evolution of a viral upper respiratory infection and identify the findings that would suggest an alternative diagnosis or bacterial complication."
          >
            <div className="rounded-3xl bg-blue-950 p-7 text-white">
              <p className="text-lg leading-8 text-blue-50">
                A 3-year-old presents with 3 days of nasal congestion,
                rhinorrhea, and cough. The illness began with a mild sore throat
                followed by increasing nasal symptoms.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                The child had a temperature of 38.2°C (100.8°F) yesterday but is
                afebrile today. Oral intake is mildly decreased, but urine
                output remains normal and the child continues to play
                intermittently.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                Examination shows nasal congestion and rhinorrhea with mild
                pharyngeal erythema. The child is breathing comfortably with
                clear lungs, normal oxygen saturation, and no focal bacterial
                source on examination.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-50">
                The parent is concerned because the nasal discharge, which was
                initially clear, has become thicker and yellow-green.
              </p>

              <div className="mt-7 rounded-2xl bg-white/10 p-5">
                <p className="font-semibold text-amber-200">
                  Your clinical reasoning task
                </p>

                <p className="mt-2 leading-7 text-blue-50">
                  Does the change in nasal discharge suggest a bacterial
                  infection, or is this child still following the expected
                  course of an uncomplicated viral URI?
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
            title="Localize the common cold to the upper airway"
            description="Viral URIs primarily involve the mucosal surfaces of the nose and nasopharynx, producing rhinorrhea and congestion without primary lower-airway disease."
          >
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Nasal cavity" tone="blue">
                <p>
                  The nasal mucosa is a major site of viral infection and the
                  source of many of the classic symptoms of a URI. Mucosal
                  inflammation increases nasal secretions and contributes to
                  congestion and rhinorrhea.
                </p>
              </InfoCard>

              <InfoCard title="Nasopharynx" tone="blue">
                <p>
                  The nasopharynx lies immediately posterior to the nasal cavity
                  and is another important site of upper-airway infection.
                  Inflammation here contributes to nasal obstruction, drainage,
                  and throat irritation.
                </p>
              </InfoCard>

              <InfoCard title="Oropharynx" tone="slate">
                <p>
                  Pharyngeal irritation commonly accompanies a viral URI and may
                  produce sore throat, particularly early in the illness.
                  Rhinorrhea and cough occurring with pharyngitis strongly
                  support a viral syndrome.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="blue"
              label="Localization Framework"
              title="Follow the symptoms through the upper airway"
            >
              Think anatomically: inflammation of the nasal mucosa produces
              rhinorrhea and congestion → secretions drain through the
              nasopharynx → pharyngeal irritation and cough may follow. These
              symptoms can all arise from one continuous upper-airway
              inflammatory process.
            </Callout>

            <div className="my-8">
              <ViralUriFigure />
            </div>

            <Callout variant="purple" title="Anatomy → Complication">
              Nasopharyngeal inflammation during a viral URI can impair drainage
              through the auditory tube and paranasal sinuses, helping explain
              why acute otitis media and bacterial sinusitis can follow a viral
              URI.
            </Callout>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Still an upper-airway process" tone="emerald">
                <ul className="space-y-2">
                  <li>• Rhinorrhea</li>
                  <li>• Nasal congestion</li>
                  <li>• Sneezing</li>
                  <li>• Mild sore throat</li>
                  <li>• Cough associated with upper-airway secretions</li>
                </ul>
              </InfoCard>

              <InfoCard title="Look beyond a simple URI" tone="amber">
                <ul className="space-y-2">
                  <li>
                    • Stridor or barking cough → consider laryngeal involvement
                  </li>
                  <li>• Wheezing → consider lower-airway involvement</li>
                  <li>• Focal crackles → consider pulmonary disease</li>
                  <li>• Hypoxemia or significant respiratory distress</li>
                  <li>• Focal findings suggesting a bacterial complication</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="Clinical Localization"
              title="A cough does not automatically make this a lower-airway infection"
            >
              Cough is common during viral URIs and often persists longer than
              the nasal symptoms. The presence of cough alone does not localize
              disease to the bronchi or lungs; interpret it alongside the
              respiratory examination and the rest of the clinical picture.
            </Callout>

            <Callout
              tone="purple"
              label="Connected Anatomy"
              title="The upper airway connects directly to the middle ear"
            >
              This relationship is particularly important in young children,
              whose Eustachian tubes are shorter, more horizontal, and
              functionally less effective at drainage than those of older
              children and adults.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    PATHOPHYSIOLOGY
================================================== */}

          <DiseaseSection
            id="pathophysiology"
            label="Pathophysiology"
            title="The symptoms come largely from the immune response"
            description="Viral infection of the upper-airway epithelium triggers a local inflammatory response that produces mucosal edema, increased secretions, and the familiar symptoms of the common cold."
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              <ProcessStep
                number="1"
                title="Viral exposure"
                description="Respiratory viruses reach the nasal or nasopharyngeal mucosa through contact with infected secretions or respiratory particles."
              />

              <ProcessStep
                number="2"
                title="Epithelial infection"
                description="Viruses infect susceptible respiratory epithelial cells. Rhinovirus commonly begins in the nasopharynx and spreads through the nasal mucosa."
              />

              <ProcessStep
                number="3"
                title="Inflammatory signaling"
                description="Infected epithelial cells release cytokines and chemokines that activate the local immune response and recruit inflammatory cells, including neutrophils."
              />

              <ProcessStep
                number="4"
                title="Mucosal inflammation"
                description="Inflammation produces vascular changes, mucosal edema, and increased nasal secretions, creating congestion and rhinorrhea."
              />

              <ProcessStep
                number="5"
                title="Symptoms evolve"
                description="Rhinorrhea, congestion, sore throat, sneezing, and cough develop as inflammation and secretions involve the continuous upper-airway mucosa."
              />
            </div>

            <Callout
              tone="purple"
              label="Key Mechanism"
              title="The immune response causes much of what makes the patient feel sick"
            >
              With rhinovirus, direct destruction of respiratory epithelial
              cells is not thought to explain most symptoms. Instead, infected
              epithelial cells trigger cytokine and chemokine signaling that
              recruits inflammatory cells and drives many of the local
              manifestations of illness.
            </Callout>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Rhinorrhea" tone="blue">
                <p>
                  Inflammatory signaling increases nasal secretions. Early in
                  the illness, these secretions are often thin and clear but may
                  become thicker as the inflammatory response evolves.
                </p>
              </InfoCard>

              <InfoCard title="Congestion" tone="amber">
                <p>
                  Mucosal inflammation and vascular engorgement narrow the nasal
                  passages, producing the sensation of obstruction even when the
                  airway is filled with relatively little mucus.
                </p>
              </InfoCard>

              <InfoCard title="Cough & sore throat" tone="slate">
                <p>
                  Inflammation of the pharyngeal mucosa and movement of
                  upper-airway secretions contribute to throat irritation and
                  cough. Cough may persist after the most prominent nasal
                  symptoms begin to improve.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="amber"
              label="High-Yield Myth"
              title="Yellow or green mucus does not automatically mean bacterial infection"
            >
              Nasal discharge commonly becomes thicker or mucopurulent during an
              uncomplicated viral URI. Recruitment of neutrophils and
              accumulation of inflammatory material can change the appearance of
              secretions without indicating that the illness has become
              bacterial.
            </Callout>

            <Callout
              tone="blue"
              label="Clinical Translation"
              title="Follow the trajectory—not the color of the mucus"
            >
              A changing appearance of nasal secretions during the first several
              days of illness can be part of the normal evolution of a viral
              URI. The overall clinical course is more useful than mucus color
              alone when deciding whether a bacterial complication should be
              considered.
            </Callout>
          </DiseaseSection>

          {/* =================================================
    HISTORY & PHYSICAL
================================================== */}

          <DiseaseSection
            id="history-physical"
            label="History & Physical"
            title="The trajectory is often more informative than any single symptom"
            description="Viral URIs evolve over several days. Recognizing the expected sequence, peak, and gradual improvement helps distinguish an uncomplicated cold from a bacterial complication or an alternative diagnosis."
          >
            {/* CLINICAL EVOLUTION */}

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="1. Early illness" tone="blue">
                <p>
                  Symptoms may begin with sore throat, sneezing, or mild nasal
                  irritation before congestion and rhinorrhea become more
                  prominent. Fever may occur, particularly in younger children,
                  but is not required.
                </p>
              </InfoCard>

              <InfoCard title="2. Symptoms peak" tone="amber">
                <p>
                  Over the next several days, nasal congestion, rhinorrhea, and
                  cough become more prominent. Symptoms often peak around the
                  third day of illness, and nasal secretions may become thicker
                  or mucopurulent.
                </p>
              </InfoCard>

              <InfoCard title="3. Gradual recovery" tone="emerald">
                <p>
                  Symptoms should then follow an overall improving trajectory.
                  Nasal symptoms and especially cough may persist after the
                  child otherwise begins to feel better, so complete resolution
                  is not expected immediately.
                </p>
              </InfoCard>
            </div>

            {/* HISTORY AND EXAM */}

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <InfoCard title="History clues" tone="slate">
                <ul className="space-y-2">
                  <li>• Rhinorrhea and nasal congestion</li>
                  <li>• Sneezing</li>
                  <li>• Sore or irritated throat</li>
                  <li>• Cough</li>
                  <li>• Fever may occur but is not required</li>
                  <li>• Mild decrease in appetite or activity</li>
                  <li>
                    • Sick contacts or recent respiratory illness exposure
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Physical examination" tone="slate">
                <ul className="space-y-2">
                  <li>• Nasal congestion and rhinorrhea</li>
                  <li>• Mild pharyngeal erythema</li>
                  <li>• Comfortable or mildly ill appearance</li>
                  <li>• Hydration status generally preserved</li>
                  <li>• No focal pulmonary findings in an uncomplicated URI</li>
                  <li>• No significant respiratory distress or hypoxemia</li>
                  <li>• Examine the ears for evidence of acute otitis media</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Expected Course"
              title="A cold can last longer than many families expect"
              tone="blue"
            >
              <p>
                Viral URI symptoms commonly persist beyond a few days,
                particularly in children. Improvement in the child's overall
                trajectory is more reassuring than expecting every symptom to
                disappear by a specific day. Cough may be one of the last
                symptoms to resolve.
              </p>
            </Callout>

            <Callout
              label="Follow the Trajectory"
              title="Improving, persistent, or worsening?"
              tone="amber"
            >
              <p>
                When evaluating a child with URI symptoms, ask how the illness
                is changing over time. An uncomplicated viral URI should
                eventually follow an overall improving trajectory. Symptoms that
                persist without improvement, become unusually severe, or worsen
                after initial improvement should prompt consideration of a
                complication or alternative diagnosis.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DIFFERENTIAL DIAGNOSIS
================================================== */}

          <DiseaseSection
            id="differential"
            label="Differential Diagnosis"
            title="When is a cold not just a cold?"
            description="Many pediatric illnesses begin with cough, congestion, rhinorrhea, or sore throat. The symptom pattern, severity, examination, and trajectory help distinguish an uncomplicated viral URI from its common mimics and complications."
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              {[
                {
                  diagnosis: "Allergic rhinitis",
                  clues:
                    "Sneezing, clear rhinorrhea, nasal or ocular itching, and a recurrent or seasonal pattern favor allergic disease. Fever and systemic illness are not typical.",
                },
                {
                  diagnosis: "Influenza / COVID-19",
                  clues:
                    "Both can overlap substantially with a routine URI. More prominent fever, systemic symptoms, known exposure, or epidemiologic context may increase suspicion, and testing may matter when the result would change treatment or infection-control decisions.",
                },
                {
                  diagnosis: "Acute bacterial sinusitis",
                  clues:
                    "Consider when URI symptoms persist without improvement, begin with an unusually severe pattern, or worsen after initial improvement. The overall trajectory is more informative than the color of nasal discharge alone.",
                },
                {
                  diagnosis: "Acute otitis media",
                  clues:
                    "A viral URI can impair Eustachian tube function and predispose to middle-ear infection. New ear pain, otorrhea, or characteristic otoscopic findings should prompt evaluation for AOM.",
                },
                {
                  diagnosis: "Streptococcal pharyngitis",
                  clues:
                    "Prominent sore throat and fever without the typical viral features of cough and rhinorrhea increase suspicion for group A streptococcal pharyngitis. Testing should follow the clinical context and age of the child.",
                },
                {
                  diagnosis: "Pertussis",
                  clues:
                    "Early pertussis may resemble a mild URI, but progression to prolonged paroxysmal cough, inspiratory whoop, posttussive emesis, or apnea in young infants should shift the diagnostic approach.",
                },
                {
                  diagnosis: "Lower-airway disease",
                  clues:
                    "Wheezing, focal crackles, hypoxemia, tachypnea, or increased work of breathing suggest involvement beyond an uncomplicated upper-airway infection and should prompt consideration of bronchiolitis, asthma, pneumonia, or another lower respiratory process.",
                },
              ].map((item, index, array) => (
                <div
                  key={item.diagnosis}
                  className={`grid gap-3 p-5 md:grid-cols-[220px_1fr] ${
                    index !== array.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <p className="font-bold text-slate-900">{item.diagnosis}</p>

                  <p className="leading-7 text-slate-600">{item.clues}</p>
                </div>
              ))}
            </div>

            <Callout
              label="Diagnostic Framework"
              title="Start with pattern + trajectory"
              tone="blue"
            >
              <p>
                No single symptom reliably identifies every viral URI. Ask
                whether the combination of symptoms, examination findings,
                severity, and evolution over time fits an uncomplicated upper
                respiratory infection or whether another diagnosis better
                explains the clinical picture.
              </p>
            </Callout>

            <Callout
              label="Common Complications"
              title="AOM and sinusitis often begin with the same viral URI"
              tone="amber"
            >
              <p>
                Acute otitis media and acute bacterial sinusitis may develop
                during or after a viral URI. New focal symptoms, an unexpectedly
                severe illness, failure to improve, or worsening after initial
                improvement should prompt evaluation for a secondary
                complication rather than assuming the original viral illness
                simply needs antibiotics.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DIAGNOSTIC WORKUP
================================================== */}

          <DiseaseSection
            id="workup"
            label="Diagnostic Workup"
            title="The uncomplicated viral URI is a clinical diagnosis"
            description="Most children with a typical viral URI do not need laboratory testing or imaging. Testing should answer a specific clinical question rather than simply confirm that a respiratory virus is present."
          >
            <Callout
              label="First Question"
              title="Does this child actually need a test?"
              tone="blue"
            >
              <p>
                A well-appearing child with a typical combination of rhinorrhea,
                congestion, cough, and mild pharyngeal symptoms can usually be
                diagnosed clinically. Routine laboratory studies, respiratory
                viral testing, and imaging are not necessary for an
                uncomplicated presentation.
              </p>
            </Callout>

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Typical URI" tone="emerald">
                <p>
                  No routine diagnostic testing is required when the history,
                  examination, and clinical trajectory are consistent with an
                  uncomplicated viral upper respiratory infection.
                </p>
              </InfoCard>

              <InfoCard title="Targeted viral testing" tone="blue">
                <p>
                  Testing for a specific respiratory virus may be useful when
                  identifying the pathogen would change treatment,
                  infection-control decisions, or management of a high-risk
                  patient.
                </p>
              </InfoCard>

              <InfoCard title="Alternative diagnosis" tone="amber">
                <p>
                  Additional testing should be directed by findings that suggest
                  another diagnosis or complication rather than ordered
                  routinely for the URI itself.
                </p>
              </InfoCard>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                A Practical Testing Framework
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Ask what the result would change
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">
                    1. Typical presentation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Diagnose clinically and provide supportive care. No test is
                    needed simply to prove that the illness is viral.
                  </p>
                </div>

                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">
                    2. Would the pathogen matter?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Consider targeted testing when a specific diagnosis would
                    alter treatment or infection-control decisions.
                  </p>
                </div>

                <div className="rounded-xl border border-sky-200 bg-white p-4">
                  <p className="font-bold text-slate-950">
                    3. Does something not fit?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    If the severity, examination, or trajectory is atypical,
                    investigate the suspected alternative diagnosis or
                    complication rather than expanding testing indiscriminately.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Routine labs" tone="slate">
                <p>
                  CBC, inflammatory markers, and other laboratory studies do not
                  routinely help diagnose an uncomplicated viral URI. Their use
                  should be driven by concern for another process or a more
                  seriously ill child.
                </p>
              </InfoCard>

              <InfoCard title="Routine imaging" tone="slate">
                <p>
                  Chest radiography and other imaging are not indicated for an
                  uncomplicated upper respiratory infection. Imaging should be
                  reserved for a specific concern suggested by the history or
                  examination.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Testing Pearl"
              title="A positive viral PCR does not always explain today's symptoms"
              tone="amber"
            >
              <p>
                Molecular testing is highly sensitive, but respiratory viruses
                may be detected during prolonged shedding or in patients without
                symptoms. Interpret a positive result within the clinical
                context rather than assuming that detection proves causation.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    MANAGEMENT
================================================== */}

          <DiseaseSection
            id="management"
            label="Management"
            title="Support the child while the infection runs its course"
            description="There is no routine antiviral treatment for the common cold. Management focuses on hydration, comfort, relief of bothersome nasal symptoms, and avoiding medications that provide little benefit or unnecessary harm."
          >
            {/* CORE SUPPORTIVE CARE */}

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Hydration & rest" tone="blue">
                <p>
                  Encourage adequate fluids and allow activity according to how
                  the child feels. Mildly decreased appetite is common;
                  maintaining hydration is more important than forcing normal
                  food intake during the acute illness.
                </p>
              </InfoCard>

              <InfoCard title="Fever & discomfort" tone="blue">
                <p>
                  Acetaminophen or ibuprofen can be used when appropriate for
                  age and clinical circumstances to improve comfort from fever,
                  sore throat, headache, or other discomfort.
                </p>
              </InfoCard>

              <InfoCard title="Nasal symptoms" tone="emerald">
                <p>
                  Nasal saline can help relieve congestion and clear secretions.
                  In infants and young children who cannot effectively clear the
                  nose, gentle suction after saline may improve feeding and
                  comfort.
                </p>
              </InfoCard>
            </div>

            {/* COUGH */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Managing the Cough
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                Treat discomfort—not the sound of every cough
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Cough is a common part of viral URI and may persist after other
                symptoms begin to improve. Treatment should focus on comfort
                while avoiding medications that have not demonstrated meaningful
                benefit in children.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <InfoCard title="Honey ≥ 1 year" tone="emerald">
                  <p>
                    Honey may reduce cough frequency and severity and can be
                    offered to children older than 12 months as a simple
                    symptomatic treatment.
                  </p>
                </InfoCard>

                <InfoCard title="Never honey < 1 year" tone="rose">
                  <p>
                    Do not give honey to infants younger than 12 months because
                    of the risk of infant botulism.
                  </p>
                </InfoCard>
              </div>
            </div>

            <Callout
              label="Antibiotic Stewardship"
              title="Antibiotics do not treat an uncomplicated viral URI"
              tone="amber"
            >
              <p>
                Antibiotics do not shorten the duration or reduce the severity
                of an uncomplicated viral upper respiratory infection. This
                remains true when nasal secretions become thick, yellow, or
                green. Antibiotics should be reserved for a diagnosed or
                strongly suspected bacterial complication.
              </p>
            </Callout>

            {/* WHAT NOT TO REACH FOR */}

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Avoid Low-Value Therapy
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950">
                More medication does not mean faster recovery
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <InfoCard title="OTC cough & cold products" tone="amber">
                  <p>
                    Routine cough and cold medications provide limited benefit
                    in young children and may cause adverse effects. Age
                    restrictions and product ingredients should be reviewed
                    carefully rather than recommending combination products
                    routinely.
                  </p>
                </InfoCard>

                <InfoCard title="Bronchodilators" tone="slate">
                  <p>
                    Bronchodilators do not routinely improve cough from an
                    uncomplicated URI when there is no evidence of bronchospasm
                    or airflow obstruction.
                  </p>
                </InfoCard>

                <InfoCard title="Intranasal corticosteroids" tone="slate">
                  <p>
                    Intranasal corticosteroids have not been shown to
                    meaningfully shorten or reduce the severity of common-cold
                    symptoms and should not be used routinely for an
                    uncomplicated viral URI.
                  </p>
                </InfoCard>

                <InfoCard title="Steam inhalation" tone="slate">
                  <p>
                    Steam inhalation has not demonstrated consistent benefit and
                    can create a burn risk, particularly in children.
                  </p>
                </InfoCard>
              </div>
            </div>

            <Callout
              label="Counseling Pearl"
              title="Setting expectations is part of the treatment"
              tone="blue"
            >
              <p>
                Explain the expected course before the family leaves. Symptoms
                often last longer than families anticipate, and cough may linger
                even as the child otherwise improves. Knowing what recovery
                should look like can reduce unnecessary medications,
                antibiotics, and repeat evaluation while still helping families
                recognize when the course has become atypical.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    COMPLICATIONS
================================================== */}

          <DiseaseSection
            id="complications"
            label="Complications"
            title="Most viral URIs resolve—but the anatomy creates opportunities for complications"
            description="Inflammation and impaired drainage in structures connected to the upper airway can predispose children to secondary complications, particularly acute otitis media and acute bacterial sinusitis."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Acute otitis media" tone="amber">
                <p>
                  Nasopharyngeal inflammation can impair Eustachian tube
                  function, promoting middle-ear fluid accumulation and creating
                  the setting for acute otitis media. New ear pain, otorrhea, or
                  characteristic otoscopic findings should prompt evaluation for
                  AOM.
                </p>
              </InfoCard>

              <InfoCard title="Acute bacterial sinusitis" tone="amber">
                <p>
                  Viral inflammation can impair normal sinus drainage and create
                  the setting for secondary bacterial sinusitis. Suspect a
                  complication when the illness no longer follows the expected
                  improving trajectory.
                </p>
              </InfoCard>

              <InfoCard title="Lower-airway involvement" tone="blue">
                <p>
                  Respiratory viruses that begin with upper-airway symptoms may
                  also involve the lower respiratory tract. Development of
                  wheezing, increased work of breathing, hypoxemia, or focal
                  pulmonary findings should prompt reassessment for lower-airway
                  disease.
                </p>
              </InfoCard>

              <InfoCard title="Asthma exacerbation" tone="blue">
                <p>
                  Viral respiratory infections are an important trigger of
                  wheezing and asthma exacerbations in susceptible children. New
                  wheezing or increased respiratory effort should not simply be
                  attributed to the upper-airway infection.
                </p>
              </InfoCard>
            </div>

            <Callout
              label="Anatomy → Complication"
              title="Follow the pathways connected to the nasopharynx"
              tone="blue"
            >
              <p>
                The anatomy predicts two of the most important complications:
                impaired Eustachian tube function can contribute to acute otitis
                media, while impaired sinus drainage can contribute to acute
                bacterial sinusitis. New focal symptoms should therefore trigger
                a targeted examination rather than automatic treatment of the
                original URI.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    DISPOSITION / CARE SETTING
================================================== */}

          <DiseaseSection
            id="disposition"
            label="Disposition"
            title="Most children with a viral URI can recover at home"
            description="Disposition is guided by respiratory status, hydration, overall appearance, and whether the presentation remains consistent with an uncomplicated upper respiratory infection."
          >
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Home care" tone="emerald">
                <ul className="space-y-2">
                  <li>• Comfortable breathing</li>
                  <li>• Adequate hydration</li>
                  <li>
                    • Able to maintain oral intake appropriate for the illness
                  </li>
                  <li>• Reassuring overall appearance</li>
                  <li>• No concerning focal findings or complication</li>
                  <li>
                    • Caregivers understand supportive care and return
                    precautions
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Reassess carefully" tone="amber">
                <ul className="space-y-2">
                  <li>• Poor oral intake or concern for dehydration</li>
                  <li>• Symptoms that are not following the expected course</li>
                  <li>• New focal ear, sinus, throat, or pulmonary findings</li>
                  <li>
                    • Significant or recurrent fever with clinical worsening
                  </li>
                  <li>
                    • Underlying disease that increases risk from respiratory
                    illness
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Escalate care" tone="rose">
                <ul className="space-y-2">
                  <li>• Significant respiratory distress</li>
                  <li>• Hypoxemia</li>
                  <li>• Inability to maintain hydration</li>
                  <li>• Altered mental status or concerning appearance</li>
                  <li>• Concern for serious bacterial infection</li>
                  <li>
                    • Another diagnosis requiring higher-acuity management
                  </li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Return Precautions"
              title="Families should know what would no longer fit a simple cold"
              tone="rose"
            >
              <p>
                Seek reassessment for difficulty breathing, signs of
                dehydration, significant clinical worsening, new focal symptoms,
                or an illness that is not following the expected recovery
                pattern. Age and underlying medical conditions should also
                influence the threshold for reevaluation.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
    CLINICAL PEARLS
================================================== */}

          <DiseaseSection
            id="pearls"
            label="Clinical Pearls"
            title="What should you remember about the common cold?"
            description="A few high-yield principles help distinguish an uncomplicated viral URI from disease that requires a different approach."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard
                number={1}
                title="Follow the trajectory, not the mucus color"
              >
                Nasal secretions commonly become thicker or yellow-green during
                an uncomplicated viral URI. The overall pattern of illness and
                whether the child is improving are more useful than secretion
                color alone.
              </PearlCard>

              <PearlCard
                number={2}
                title="A cough does not automatically mean lower-airway disease"
              >
                Cough is common with viral URI because upper-airway inflammation
                and secretions can irritate the pharynx. Look for wheezing,
                focal crackles, hypoxemia, tachypnea, or increased work of
                breathing before localizing disease to the lower airway.
              </PearlCard>

              <PearlCard
                number={3}
                title="Testing should answer a clinical question"
              >
                An uncomplicated viral URI is a clinical diagnosis. Routine
                laboratory testing, imaging, or broad respiratory viral testing
                is unnecessary when the result would not change management.
              </PearlCard>

              <PearlCard number={4} title="Supportive care is active treatment">
                Hydration, nasal saline, gentle suction when appropriate,
                treatment of discomfort, and honey in children older than 12
                months can improve symptoms while the infection resolves.
              </PearlCard>

              <PearlCard
                number={5}
                title="Antibiotics do not treat the common cold"
              >
                Antibiotics do not shorten an uncomplicated viral URI. Their
                role begins when a bacterial complication or another bacterial
                diagnosis is identified or strongly suspected.
              </PearlCard>

              <PearlCard
                number={6}
                title="The anatomy predicts the complications"
              >
                The nasopharynx communicates with the middle ear through the
                Eustachian tube and with the paranasal sinuses through their
                drainage pathways. Viral inflammation can therefore create the
                setting for acute otitis media or acute bacterial sinusitis.
              </PearlCard>
            </div>
          </DiseaseSection>

          {/* =================================================
    PROGRESSIVE QUIZ
================================================== */}

          <DiseaseSection
            id="quiz"
            label="Knowledge Check"
            title="Can you recognize an uncomplicated viral URI?"
            description="Apply the clinical patterns from this module to common pediatric presentations."
          >
            <ProgressiveQuiz questions={questions} />
          </DiseaseSection>

          {/* =================================================
              ANKI DECK
          ================================================== */}

          <AnkiDeck
            title="Viral URI Anki Deck"
            cardCount={16}
            downloadHref="/Anki/viral-uri.apkg"
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
