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
        </div>
      </div>
    </main>
  );
}
