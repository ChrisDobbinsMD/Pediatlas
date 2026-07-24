"use client";

import Link from "next/link";
import { useState } from "react";

type QuizQuestion = {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "question-1",
    question:
      "A child has a witnessed episode of emesis followed immediately by coughing, hypoxemia, and diffuse crackles. The child is afebrile and begins improving with oxygen and suctioning. What is the most likely diagnosis?",
    options: [
      {
        id: "a",
        text: "Aspiration pneumonitis",
      },
      {
        id: "b",
        text: "Aspiration pneumonia",
      },
      {
        id: "c",
        text: "Foreign body aspiration",
      },
      {
        id: "d",
        text: "Community-acquired bacterial pneumonia",
      },
    ],
    correctAnswer: "a",
    explanation:
      "Aspiration pneumonitis is an acute chemical lung injury that typically follows a macroaspiration event involving gastric contents. Symptoms may begin abruptly and can improve with supportive care. Antibiotics should not be prescribed solely because aspiration occurred.",
  },
  {
    id: "question-2",
    question:
      "Which finding most strongly supports chronic pulmonary aspiration in a child?",
    options: [
      {
        id: "a",
        text: "A single episode of cough during a viral illness",
      },
      {
        id: "b",
        text: "Recurrent cough or congestion during feeds with poor weight gain",
      },
      {
        id: "c",
        text: "Sudden unilateral wheezing after eating peanuts",
      },
      {
        id: "d",
        text: "An isolated fever without respiratory symptoms",
      },
    ],
    correctAnswer: "b",
    explanation:
      "Chronic aspiration may present with cough, choking, wet or congested breathing during feeds, recurrent wheezing or pneumonia, prolonged feeding, and poor growth. Some children aspirate silently without an obvious cough.",
  },
  {
    id: "question-3",
    question:
      "Which statement about the radiographic distribution of aspiration in children is most accurate?",
    options: [
      {
        id: "a",
        text: "Aspiration always involves the right lower lobe",
      },
      {
        id: "b",
        text: "Aspiration always enters the right mainstem bronchus",
      },
      {
        id: "c",
        text: "Opacities may occur in dependent lung regions according to body position, and laterality is not absolute",
      },
      {
        id: "d",
        text: "A normal chest radiograph excludes aspiration",
      },
    ],
    correctAnswer: "c",
    explanation:
      "Aspiration tends to involve dependent lung regions, but the pattern depends on the child's position during the event. Pediatric bronchial anatomy is more symmetric than adult anatomy, particularly in younger children, so right-sided involvement should not be treated as an absolute rule. A normal radiograph does not exclude aspiration.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  title,
  children,
  accent = "sky",
}: {
  title: string;
  children: React.ReactNode;
  accent?: "sky" | "amber" | "rose" | "emerald" | "violet" | "slate";
}) {
  const accentStyles = {
    sky: "border-sky-200 bg-sky-50/70",
    amber: "border-amber-200 bg-amber-50/70",
    rose: "border-rose-200 bg-rose-50/70",
    emerald: "border-emerald-200 bg-emerald-50/70",
    violet: "border-violet-200 bg-violet-50/70",
    slate: "border-slate-200 bg-slate-50",
  };

  return (
    <div className={`rounded-3xl border p-6 ${accentStyles[accent]}`}>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>

      <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ComparisonRow({
  label,
  pneumonitis,
  pneumonia,
  chronic,
}: {
  label: string;
  pneumonitis: string;
  pneumonia: string;
  chronic: string;
}) {
  return (
    <div className="grid border-t border-slate-200 md:grid-cols-[0.75fr_1fr_1fr_1fr]">
      <div className="bg-slate-50 px-4 py-4 text-sm font-bold text-slate-900">
        {label}
      </div>

      <div className="px-4 py-4 text-sm leading-6 text-slate-700">
        {pneumonitis}
      </div>

      <div className="px-4 py-4 text-sm leading-6 text-slate-700">
        {pneumonia}
      </div>

      <div className="px-4 py-4 text-sm leading-6 text-slate-700">
        {chronic}
      </div>
    </div>
  );
}

function QuizCard({
  question,
  questionNumber,
  selectedAnswer,
  onSelect,
}: {
  question: QuizQuestion;
  questionNumber: number;
  selectedAnswer?: string;
  onSelect: (answer: string) => void;
}) {
  const hasAnswered = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-sky-700">
        Question {questionNumber}
      </p>

      <h3 className="mt-3 text-lg font-bold leading-7 text-slate-950">
        {question.question}
      </h3>

      <div className="mt-5 space-y-3">
        {question.options.map((option) => {
          const optionIsSelected = selectedAnswer === option.id;
          const optionIsCorrect = option.id === question.correctAnswer;

          let optionStyles =
            "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50";

          if (hasAnswered && optionIsCorrect) {
            optionStyles =
              "border-emerald-400 bg-emerald-50 text-emerald-950";
          } else if (hasAnswered && optionIsSelected && !optionIsCorrect) {
            optionStyles = "border-rose-400 bg-rose-50 text-rose-950";
          }

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${optionStyles}`}
            >
              <span className="mr-3 font-bold uppercase">{option.id}.</span>
              {option.text}
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div
          className={`mt-5 rounded-2xl border p-4 ${
            isCorrect
              ? "border-emerald-200 bg-emerald-50"
              : "border-amber-200 bg-amber-50"
          }`}
        >
          <p className="font-bold text-slate-950">
            {isCorrect ? "Correct" : "Not quite"}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default function PulmonaryAspirationPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});

  function selectAnswer(questionId: string, answerId: string) {
    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: answerId,
    }));
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-sky-100 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600"
          >
            <Link href="/" className="transition hover:text-sky-700">
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/respiratory"
              className="transition hover:text-sky-700"
            >
              Respiratory
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/respiratory/lower-airway"
              className="transition hover:text-sky-700"
            >
              Lower Airway
            </Link>

            <span aria-hidden="true">/</span>

            <span className="font-semibold text-slate-900">
              Pulmonary Aspiration
            </span>
          </nav>

          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
            Respiratory · Lower Airway
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Pulmonary Aspiration
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            Pulmonary aspiration occurs when material enters the airway below
            the vocal cords. Its consequences range from acute chemical injury
            to bacterial pneumonia and chronic respiratory disease caused by
            recurrent aspiration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-900">
              Aspiration pneumonitis
            </span>

            <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-bold text-rose-900">
              Aspiration pneumonia
            </span>

            <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-900">
              Chronic aspiration
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* On this page */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
              On this page
            </p>

            <nav className="mt-4 space-y-2 text-sm">
              {[
                ["clinical-vignette", "Clinical vignette"],
                ["definition", "What is aspiration?"],
                ["anatomy", "Anatomy"],
                ["syndromes", "Three syndromes"],
                ["risk-factors", "Risk factors"],
                ["presentation", "Clinical presentation"],
                ["workup", "Diagnostic workup"],
                ["imaging", "Imaging"],
                ["management", "Management"],
                ["disposition", "Disposition"],
                ["pearls", "Clinical pearls"],
                ["quiz", "Knowledge check"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className="block rounded-xl px-3 py-2 text-slate-600 transition hover:bg-sky-50 hover:text-sky-800"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="min-w-0 space-y-16">
          {/* Clinical vignette */}
          <section id="clinical-vignette" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Clinical vignette"
              title="A child with recurrent respiratory symptoms"
            />

            <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-base leading-8 text-slate-700">
                A 4-year-old child with spastic cerebral palsy and known
                feeding difficulty presents with fever, tachypnea, and a new
                oxygen requirement. The parent reports chronic coughing and
                “wet” breathing during meals, prolonged feeding times, and two
                previous episodes of pneumonia.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700">
                Earlier that morning, the child vomited during a feed and
                immediately developed coughing and oxygen desaturation.
              </p>

              <div className="mt-6 rounded-2xl bg-sky-50 p-5">
                <p className="font-bold text-sky-950">
                  Before continuing, ask:
                </p>

                <p className="mt-2 text-sm leading-6 text-sky-900">
                  Does this child have acute aspiration pneumonitis, bacterial
                  aspiration pneumonia, chronic pulmonary aspiration—or
                  overlapping features of more than one syndrome?
                </p>
              </div>
            </div>
          </section>

          {/* Definition */}
          <section id="definition" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Core concept"
              title="What is pulmonary aspiration?"
              description="Aspiration is an event. The pulmonary syndrome that follows depends on the material aspirated, the volume and frequency of aspiration, airway clearance, host defenses, and whether infection develops."
            />

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Material enters the airway" accent="sky">
                Food, liquid, saliva, gastric contents, medication, or other
                material passes below the vocal cords rather than entering the
                esophagus.
              </InfoCard>

              <InfoCard title="The lung responds" accent="amber">
                Aspirated material may cause transient irritation, direct
                chemical injury, airway obstruction, inflammation, or
                infection.
              </InfoCard>

              <InfoCard title="The pattern may be recurrent" accent="violet">
                Children with dysphagia or impaired airway protection may
                aspirate repeatedly, including silent events without obvious
                coughing or choking.
              </InfoCard>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
              <div className="grid items-center gap-4 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="rounded-2xl bg-slate-100 p-4 font-bold text-slate-900">
                  Material enters the airway
                </div>

                <span
                  aria-hidden="true"
                  className="text-2xl font-bold text-sky-700"
                >
                  →
                </span>

                <div className="rounded-2xl bg-sky-50 p-4 font-bold text-sky-950">
                  Airway and alveolar exposure
                </div>

                <span
                  aria-hidden="true"
                  className="text-2xl font-bold text-sky-700"
                >
                  →
                </span>

                <div className="rounded-2xl bg-amber-50 p-4 font-bold text-amber-950">
                  Chemical, infectious, or chronic injury
                </div>
              </div>
            </div>
          </section>

          {/* Anatomy */}
          <section id="anatomy" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Anatomy"
              title="Normal swallowing protects the lower airway"
              description="Safe swallowing requires coordinated oral transport, pharyngeal propulsion, laryngeal closure, upper esophageal sphincter opening, and intact protective cough and clearance mechanisms."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Normal pathway" accent="emerald">
                <div className="space-y-3">
                  {[
                    "Food or liquid is prepared and propelled through the mouth.",
                    "The soft palate helps close the nasopharynx.",
                    "The larynx elevates and the vocal folds close.",
                    "The bolus passes through the upper esophageal sphincter.",
                    "The esophagus transports material toward the stomach.",
                  ].map((step, index) => (
                    <div key={step} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="Where protection can fail" accent="rose">
                <BulletList
                  items={[
                    "Poor oral motor control or delayed swallow initiation",
                    "Incomplete laryngeal closure",
                    "Reduced sensation with silent aspiration",
                    "Weak cough or impaired mucociliary clearance",
                    "Anatomic abnormalities such as laryngeal cleft or tracheoesophageal fistula",
                    "Neuromuscular disease or altered consciousness",
                  ]}
                />
              </InfoCard>
            </div>

            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                Pediatric anatomy pearl
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-900">
                Do not teach aspiration as obligatorily right-sided in
                children. Younger children have more symmetric main bronchial
                angles than adults. Aspirated material may enter either lung,
                and the radiographic distribution is influenced by gravity,
                body position, airway anatomy, and the nature of the aspirate.
              </p>
            </div>
          </section>

          {/* Three syndromes */}
          <section id="syndromes" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Clinical framework"
              title="Three major aspiration syndromes"
              description="The categories overlap clinically, but separating them helps determine whether the child needs supportive care, antimicrobial treatment, a feeding evaluation, or a broader multidisciplinary workup."
            />

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="hidden bg-slate-950 text-sm font-bold text-white md:grid md:grid-cols-[0.75fr_1fr_1fr_1fr]">
                <div className="px-4 py-4">Feature</div>
                <div className="px-4 py-4">Pneumonitis</div>
                <div className="px-4 py-4">Pneumonia</div>
                <div className="px-4 py-4">Chronic aspiration</div>
              </div>

              <ComparisonRow
                label="Primary process"
                pneumonitis="Acute inflammatory or chemical lung injury after aspiration, classically involving gastric contents."
                pneumonia="Infection following aspiration of bacteria-containing oropharyngeal or gastric material."
                chronic="Repeated entry of food, liquid, saliva, or refluxate into the airway."
              />

              <ComparisonRow
                label="Typical timing"
                pneumonitis="Abrupt symptoms during or shortly after a witnessed or suspected macroaspiration event."
                pneumonia="Persistent or evolving infectious syndrome; may follow an aspiration event or occur with unrecognized recurrent aspiration."
                chronic="Recurrent or persistent symptoms over weeks to months."
              />

              <ComparisonRow
                label="Common clues"
                pneumonitis="Cough, hypoxemia, wheeze, crackles, respiratory distress, and sometimes fever from inflammation."
                pneumonia="Fever, cough, tachypnea, focal or multifocal crackles, hypoxemia, and a compatible infiltrate."
                chronic="Symptoms with feeds, recurrent pneumonia or wheeze, chronic wet cough, congestion, prolonged feeding, or poor growth."
              />

              <ComparisonRow
                label="Initial treatment"
                pneumonitis="Supportive care; antibiotics are not routinely indicated solely because aspiration occurred."
                pneumonia="Antibiotics selected according to severity, setting, local guidance, prior cultures, and resistance risk."
                chronic="Reduce ongoing aspiration and identify the underlying swallowing, airway, neurologic, or gastrointestinal disorder."
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              No single symptom, laboratory value, or radiographic finding
              perfectly distinguishes pneumonitis from pneumonia. Reassessment
              and the child&apos;s clinical trajectory are essential.
            </p>
          </section>

          {/* Risk factors */}
          <section id="risk-factors" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Risk assessment"
              title="Which children are at increased risk?"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Impaired swallowing or airway protection">
                <BulletList
                  items={[
                    "Cerebral palsy or other neurologic impairment",
                    "Neuromuscular weakness",
                    "Developmental or oral motor dysfunction",
                    "Prematurity or complex neonatal history",
                    "Seizure or altered mental status",
                    "Sedation, anesthesia, or intoxication",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Structural and aerodigestive disorders">
                <BulletList
                  items={[
                    "Laryngeal cleft",
                    "Tracheoesophageal fistula",
                    "Vocal fold dysfunction or paralysis",
                    "Craniofacial abnormalities",
                    "Esophageal dysmotility or obstruction",
                    "Severe gastroesophageal or post-pyloric reflux when clinically relevant",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Reduced clearance">
                <BulletList
                  items={[
                    "Weak cough",
                    "Chronic lung disease",
                    "Tracheostomy or ventilator dependence",
                    "Impaired mucociliary function",
                    "Poor mobility or ineffective secretion clearance",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Feeding clues">
                <BulletList
                  items={[
                    "Coughing, choking, gagging, or color change during feeds",
                    "Wet or gurgly voice and breathing after swallowing",
                    "Prolonged feeding times",
                    "Refusal of certain textures",
                    "Fatigue or respiratory distress during feeds",
                    "Recurrent unexplained respiratory illness",
                  ]}
                />
              </InfoCard>
            </div>
          </section>

          {/* Clinical presentation */}
          <section id="presentation" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Recognition"
              title="Clinical presentation"
            />

            <div className="grid gap-5 lg:grid-cols-3">
              <InfoCard title="Acute event" accent="amber">
                <BulletList
                  items={[
                    "Witnessed vomiting, choking, or regurgitation",
                    "Sudden cough or gagging",
                    "Abrupt desaturation or cyanosis",
                    "Wheeze, crackles, or respiratory distress",
                    "Possible altered mental status or peri-procedural event",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Possible infection" accent="rose">
                <BulletList
                  items={[
                    "Persistent or progressive fever",
                    "Tachypnea and increased work of breathing",
                    "Cough and hypoxemia",
                    "Focal or multifocal crackles",
                    "Compatible infiltrate plus infectious clinical course",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Chronic or recurrent" accent="violet">
                <BulletList
                  items={[
                    "Cough, congestion, or wheeze associated with feeds",
                    "Recurrent pneumonia or chronic wet cough",
                    "Poor growth or feeding intolerance",
                    "Apnea, cyanosis, or recurrent unexplained events",
                    "Silent aspiration without obvious choking",
                  ]}
                />
              </InfoCard>
            </div>

            <div className="mt-6 rounded-3xl border border-violet-200 bg-violet-50 p-6">
              <h3 className="text-lg font-bold text-violet-950">
                Silent aspiration
              </h3>

              <p className="mt-3 text-sm leading-6 text-violet-900">
                Absence of cough does not exclude aspiration. Children with
                impaired sensation or neurologic dysfunction may allow
                material to pass below the vocal cords without an obvious
                protective response.
              </p>
            </div>
          </section>

          {/* Diagnostic workup */}
          <section id="workup" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Diagnostic workup"
              title="Testing should answer a clinical question"
              description="There is no single test that proves every aspiration syndrome. Evaluation should be guided by whether the concern is an acute lung injury, bacterial infection, recurrent swallowing dysfunction, or an anatomic airway problem."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="History and bedside assessment" accent="sky">
                <BulletList
                  items={[
                    "Clarify whether an aspiration event was witnessed",
                    "Establish symptom timing relative to vomiting or feeding",
                    "Ask about recurrent symptoms during meals",
                    "Review neurologic, developmental, airway, and gastrointestinal history",
                    "Assess oxygenation, ventilation, hydration, and work of breathing",
                    "Observe feeding only when clinically safe and performed by an appropriate clinician",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Laboratory testing" accent="slate">
                <BulletList
                  items={[
                    "Not routinely required after every aspiration event",
                    "CBC and inflammatory markers are nonspecific",
                    "Blood gas may be useful in severe respiratory failure",
                    "Blood cultures are reserved for severe illness or circumstances in which bacteremia would change management",
                    "Respiratory cultures are most useful when a reliable lower-airway specimen is available",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Swallow evaluation" accent="emerald">
                <BulletList
                  items={[
                    "Clinical feeding and swallowing evaluation",
                    "Videofluoroscopic swallow study when dynamic assessment of oral and pharyngeal swallowing is needed",
                    "Fiberoptic endoscopic evaluation of swallowing in selected children",
                    "Testing should reproduce relevant consistencies and feeding conditions when feasible",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Additional aerodigestive evaluation" accent="violet">
                <BulletList
                  items={[
                    "ENT evaluation for suspected laryngeal or vocal fold abnormality",
                    "Pulmonology evaluation for recurrent lung disease or airway clearance problems",
                    "GI evaluation when esophageal dysfunction or reflux-related disease is suspected",
                    "Bronchoscopy when an airway lesion, retained foreign body, or another structural process is suspected",
                  ]}
                />
              </InfoCard>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-950">
                Practical diagnostic pathway
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-950">
                    Stabilize the child
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Airway, breathing, oxygenation, suction, and respiratory
                    support.
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="self-center text-center text-2xl font-bold text-sky-700"
                >
                  →
                </span>

                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <p className="font-bold text-sky-950">
                    Define the syndrome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-sky-900">
                    Acute chemical injury, suspected infection, or recurrent
                    aspiration?
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="self-center text-center text-2xl font-bold text-sky-700"
                >
                  →
                </span>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="font-bold text-emerald-950">
                    Target the evaluation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Imaging, infection assessment, swallow testing, or
                    aerodigestive consultation as indicated.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Imaging */}
          <section id="imaging" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Imaging"
              title="Radiographs support the diagnosis but do not define the syndrome"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Chest radiograph" accent="sky">
                <BulletList
                  items={[
                    "Reasonable for significant, persistent, or worsening respiratory symptoms",
                    "May show focal, multifocal, or diffuse air-space opacity",
                    "Findings are not specific for aspiration",
                    "Early imaging may be normal",
                    "Serial imaging is not routine when the child is improving clinically",
                  ]}
                />
              </InfoCard>

              <InfoCard title="CT and advanced imaging" accent="slate">
                <BulletList
                  items={[
                    "Not routinely required for uncomplicated aspiration",
                    "Consider for recurrent disease, suspected bronchiectasis, abscess, structural abnormality, or an unclear diagnosis",
                    "Balance diagnostic benefit against radiation exposure and the possible need for sedation",
                  ]}
                />
              </InfoCard>
            </div>

            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-950">
                Why does aspiration occur there?
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-900">
                Aspirated material follows gravity toward dependent lung
                regions. The involved segments therefore vary with the
                child&apos;s position during aspiration. A supine child may
                develop posteriorly distributed disease, while a more upright
                child may have lower-lung involvement.
              </p>

              <p className="mt-3 text-sm font-semibold leading-6 text-amber-950">
                Laterality is not absolute, and a normal chest radiograph does
                not exclude aspiration.
              </p>
            </div>
          </section>

          {/* Management */}
          <section id="management" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Management"
              title="Treat the syndrome—not the word “aspiration”"
            />

            <div className="space-y-6">
              <div className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-slate-950">
                    Aspiration pneumonitis
                  </h3>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900">
                    Chemical injury
                  </span>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-slate-950">
                      Initial treatment
                    </h4>

                    <div className="mt-3 text-sm leading-6 text-slate-700">
                      <BulletList
                        items={[
                          "Position and suction the airway as clinically appropriate",
                          "Provide supplemental oxygen and respiratory support",
                          "Treat bronchospasm when present",
                          "Monitor the clinical trajectory",
                          "Escalate to noninvasive or invasive ventilation when required",
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-950">
                      Antibiotic stewardship
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      Do not prescribe prophylactic antibiotics solely because
                      aspiration occurred. Reassess if the child has persistent
                      or evolving findings concerning for bacterial pneumonia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-slate-950">
                    Aspiration pneumonia
                  </h3>

                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-rose-900">
                    Infection
                  </span>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-slate-950">
                      Antimicrobial approach
                    </h4>

                    <div className="mt-3 text-sm leading-6 text-slate-700">
                      <BulletList
                        items={[
                          "Treat when the overall clinical course supports bacterial pneumonia",
                          "Select therapy according to community versus healthcare onset",
                          "Consider prior respiratory cultures and known colonization",
                          "Account for allergy history and local susceptibility patterns",
                          "Narrow therapy when microbiologic data and clinical response permit",
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-950">
                      Common pediatric pathway approach
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      Some pediatric stewardship pathways use
                      ampicillin-sulbactam for hospitalized community-onset
                      aspiration pneumonia and amoxicillin-clavulanate for
                      enteral step-down therapy. Final selection and duration
                      should follow the institution&apos;s pediatric
                      antimicrobial guidance.
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      Broader therapy should be driven by healthcare exposure,
                      severe illness, resistant-organism risk, prior cultures,
                      or complications—not by aspiration alone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-slate-950">
                    Chronic pulmonary aspiration
                  </h3>

                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-violet-900">
                    Recurrent exposure
                  </span>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-slate-950">
                      Reduce ongoing aspiration
                    </h4>

                    <div className="mt-3 text-sm leading-6 text-slate-700">
                      <BulletList
                        items={[
                          "Feeding and swallowing therapy",
                          "Positioning, pacing, and appropriate feeding equipment",
                          "Texture or liquid modification when supported by individualized evaluation",
                          "Alternative enteral feeding when oral intake cannot be made sufficiently safe",
                          "Airway clearance support when indicated",
                        ]}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-950">
                      Treat the underlying disorder
                    </h4>

                    <div className="mt-3 text-sm leading-6 text-slate-700">
                      <BulletList
                        items={[
                          "Address neurologic and neuromuscular contributors",
                          "Evaluate structural airway abnormalities",
                          "Manage clinically meaningful esophageal or gastrointestinal disease",
                          "Coordinate care through speech-language pathology, nutrition, pulmonology, ENT, GI, and primary care",
                          "Reassess growth, respiratory morbidity, and family goals",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-rose-200 bg-rose-50 p-6">
              <h3 className="text-lg font-bold text-rose-950">
                Avoid a common mistake
              </h3>

              <p className="mt-3 text-sm leading-6 text-rose-900">
                Feeding tubes can bypass oral intake but do not automatically
                eliminate aspiration risk. Children may continue to aspirate
                saliva, oral secretions, or refluxate, and every intervention
                should be individualized.
              </p>
            </div>
          </section>

          {/* Disposition */}
          <section id="disposition" className="scroll-mt-8">
            <SectionHeading eyebrow="Disposition" title="Who needs admission?" />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Consider discharge" accent="emerald">
                <BulletList
                  items={[
                    "Stable oxygenation on baseline support",
                    "Minimal or improving work of breathing",
                    "Adequate hydration and a safe interim feeding plan",
                    "Reliable caregivers and clear return precautions",
                    "Appropriate outpatient follow-up for recurrent or chronic concerns",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Consider admission" accent="rose">
                <BulletList
                  items={[
                    "New or increasing oxygen requirement",
                    "Moderate to severe respiratory distress",
                    "Apnea, recurrent desaturation, or impaired airway protection",
                    "Inability to maintain hydration or safely feed",
                    "Concern for sepsis, complication, or rapid progression",
                    "Need for multidisciplinary swallowing or airway evaluation that cannot safely occur outpatient",
                  ]}
                />
              </InfoCard>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-bold">Escalate urgently for:</h3>

              <p className="mt-3 text-sm leading-6 text-slate-200">
                Progressive hypoxemia, exhaustion, recurrent apnea, inability
                to protect the airway, hemodynamic instability, rapidly rising
                ventilatory requirements, or concern for a retained obstructing
                foreign body.
              </p>
            </div>
          </section>

          {/* Pearls */}
          <section id="pearls" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Clinical pearls"
              title="High-yield takeaways"
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Aspiration is not synonymous with infection",
                  text: "An acute aspiration event may produce chemical inflammation without bacterial pneumonia.",
                },
                {
                  title: "Do not give automatic prophylactic antibiotics",
                  text: "Supportive care and reassessment are appropriate for aspiration pneumonitis unless the clinical course supports infection.",
                },
                {
                  title: "Inflammation can also cause fever",
                  text: "Fever immediately after aspiration does not independently prove bacterial pneumonia.",
                },
                {
                  title: "Silent aspiration exists",
                  text: "Children may aspirate without coughing, particularly when airway sensation or neurologic function is impaired.",
                },
                {
                  title: "A normal radiograph does not exclude aspiration",
                  text: "Imaging may be initially normal and radiographic findings are nonspecific.",
                },
                {
                  title: "Do not overstate right-sided disease",
                  text: "Dependent distribution matters, but pediatric bronchial anatomy and positioning prevent a universal right-mainstem rule.",
                },
                {
                  title: "Treat the child, not a test result",
                  text: "An abnormal swallow study should be interpreted alongside respiratory history, growth, feeding function, and family goals.",
                },
                {
                  title: "Chronic aspiration is multidisciplinary",
                  text: "Successful management frequently requires coordination across feeding, pulmonary, airway, nutrition, neurologic, and gastrointestinal care.",
                },
              ].map((pearl) => (
                <div
                  key={pearl.title}
                  className="rounded-3xl border border-sky-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-bold text-slate-950">{pearl.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {pearl.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Quiz */}
          <section id="quiz" className="scroll-mt-8">
            <SectionHeading
              eyebrow="Knowledge check"
              title="Test your understanding"
              description="Choose the best answer. Feedback appears immediately."
            />

            <div className="space-y-6">
              {quizQuestions.map((question, index) => (
                <QuizCard
                  key={question.id}
                  question={question}
                  questionNumber={index + 1}
                  selectedAnswer={selectedAnswers[question.id]}
                  onSelect={(answer) => selectAnswer(question.id, answer)}
                />
              ))}
            </div>
          </section>

          {/* Evidence base */}
          <section
            aria-labelledby="evidence-base-heading"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Evidence Base
            </p>

            <h2
              id="evidence-base-heading"
              className="mt-2 text-2xl font-bold text-slate-950"
            >
              Key sources
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="font-bold text-slate-950">
                  American Academy of Pediatrics
                </p>

                <a
                  href="https://publications.aap.org/pediatricsinreview/article/41/5/236/35396/Dysphagia-and-Chronic-Pulmonary-Aspiration-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm leading-6 text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
                >
                  Tutor JD. Dysphagia and Chronic Pulmonary Aspiration in
                  Children. Pediatrics in Review. 2020;41(5):236–244.
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-950">
                  New England Journal of Medicine
                </p>

                <a
                  href="https://www.nejm.org/doi/abs/10.1056/NEJMra1714562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm leading-6 text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
                >
                  Mandell LA, Niederman MS. Aspiration Pneumonia. New England
                  Journal of Medicine. 2019;380:651–663.
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-950">
                  AAP Hospital Pediatrics
                </p>

                <a
                  href="https://publications.aap.org/hospitalpediatrics/article/15/10/e500/203964/Characterizing-Pediatric-Aspiration-Pneumonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm leading-6 text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
                >
                  Characterizing Pediatric Aspiration Pneumonia: Diagnostic
                  Gaps and Stewardship Opportunities. Hospital Pediatrics.
                  2025;15(10):e500–e505.
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-950">
                  American Thoracic Society
                </p>

                <a
                  href="https://www.thoracic.org/statements/resources/pldd/wheezing-infant-guideline.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm leading-6 text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
                >
                  Diagnostic Evaluation of Infants with Recurrent or
                  Persistent Wheezing. Official ATS Clinical Practice
                  Guideline.
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-950">
                  Pediatric antimicrobial stewardship
                </p>

                <a
                  href="https://idmp.ucsf.edu/content/aspiration-pneumonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm leading-6 text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
                >
                  UCSF Infectious Diseases Management Program: Pediatric
                  Aspiration Pneumonia.
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-100 p-4">
              <p className="text-sm leading-6 text-slate-600">
                Pediatric aspiration pneumonia does not currently have a
                universally accepted clinical definition or dedicated
                comprehensive pediatric practice guideline. Management should
                therefore incorporate the child&apos;s clinical trajectory,
                aspiration risk factors, local antimicrobial guidance, and
                multidisciplinary expertise.
              </p>
            </div>
          </section>

          {/* Bottom navigation */}
          <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/respiratory/lower-airway/foreign-body-aspiration"
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900"
            >
              ← Foreign Body Aspiration
            </Link>

            <Link
              href="/respiratory/lower-airway"
              className="rounded-2xl bg-sky-700 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-sky-800"
            >
              Back to Lower Airway
            </Link>
          </div>

          <p className="pb-6 text-center text-xs leading-5 text-slate-500">
            PediAtlas is an educational resource and does not replace
            institution-specific protocols or individualized clinical
            judgment.
          </p>
        </article>
      </div>
    </main>
  );
}