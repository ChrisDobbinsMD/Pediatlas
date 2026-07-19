"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EvidenceBase from "@/components/EvidenceBase";

/*
  PEDIATLAS DISEASE PAGE TEMPLATE

  Instructions:
  1. Copy this file into the appropriate disease route.
  2. Rename the copied file to page.tsx.
  3. Rename DiseasePageTemplate to the disease-specific page name.
  4. Replace all bracketed placeholder text.
  5. Add the pathophysiology image path when the image is ready.
  6. Do not add Evidence Base to pageSections.
*/

const pageSections = [
  { id: "vignette", label: "Clinical Vignette" },
  { id: "anatomy", label: "Anatomy Localization" },
  { id: "pathophysiology", label: "Pathophysiology" },
  { id: "history-exam", label: "History & Physical" },
  { id: "differential", label: "Differential Diagnosis" },
  { id: "workup", label: "Diagnostic Workup" },
  { id: "management", label: "Management" },
  { id: "disposition", label: "Disposition" },
  { id: "pearls", label: "Clinical Pearls" },
  { id: "quiz", label: "Knowledge Check" },
];

/*
  Add the image to public/images, then replace the empty string.

  Example:
  const pathophysiologyImage = "/images/croup-pathophysiology.png";
*/
const pathophysiologyImage = "";

const differential = [
  {
    diagnosis: "[Differential diagnosis]",
    clue: "[Finding that supports or distinguishes this diagnosis.]",
  },
];

const quizOptions = [
  "[Answer option A]",
  "[Answer option B]",
  "[Answer option C]",
  "[Answer option D]",
];

const correctAnswerIndex = 0;

export default function DiseasePageTemplate() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const answerSubmitted = selectedAnswer !== null;
  const answerIsCorrect = selectedAnswer === correctAnswerIndex;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm font-medium text-slate-600"
        >
          <Link href="/" className="hover:text-sky-700 hover:underline">
            Home
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <Link
            href="/respiratory"
            className="hover:text-sky-700 hover:underline"
          >
            Respiratory
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <Link
            href="/respiratory/lower-airway"
            className="hover:text-sky-700 hover:underline"
          >
            Lower Airway
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <span className="text-slate-900">[Disease Name]</span>
        </nav>

        {/* Page heading */}
        <header className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">
            Respiratory · Lower Airway
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            [Disease Name]
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            [Brief introductory description explaining what the disease is and
            why it matters clinically.]
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* On this page sidebar */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-bold text-slate-900">On this page</p>

              <nav className="mt-4 space-y-1">
                {pageSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-sky-800"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main educational content */}
          <div className="space-y-8">
            <Section id="vignette" title="Clinical Vignette">
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 sm:p-6">
                <p className="leading-8 text-slate-800">
                  [Write a representative pediatric clinical vignette here.
                  Include age, symptoms, duration, key examination findings,
                  and important contextual clues.]
                </p>
              </div>

              <InfoCard title="Clinical question">
                [What diagnosis or clinical decision should the learner identify
                from this vignette?]
              </InfoCard>
            </Section>

            <Section id="anatomy" title="Anatomy Localization">
              <p className="leading-8 text-slate-700">
                [Identify the principal anatomical site involved and explain
                how localization accounts for the characteristic symptoms and
                examination findings.]
              </p>

              <InfoCard title="Localization">
                [Example: upper airway, central airway, bronchioles, alveoli,
                pleura, pulmonary vasculature, or another relevant structure.]
              </InfoCard>
            </Section>

            <Section id="pathophysiology" title="Pathophysiology">
              <p className="leading-8 text-slate-700">
                [Explain the disease mechanism sequentially. Connect the
                underlying process to the clinical manifestations.]
              </p>

              {pathophysiologyImage ? (
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <Image
                    src={pathophysiologyImage}
                    alt="[Disease name] pathophysiology diagram"
                    width={1600}
                    height={1000}
                    className="h-auto w-full"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <p className="font-semibold text-slate-700">
                    Pathophysiology image placeholder
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Add the finished image to{" "}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5">
                      public/images
                    </code>{" "}
                    and update{" "}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5">
                      pathophysiologyImage
                    </code>
                    .
                  </p>
                </div>
              )}

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <ProcessStep
                  number="1"
                  title="[Initial process]"
                  description="[Describe the initiating event.]"
                />

                <ProcessStep
                  number="2"
                  title="[Physiologic consequence]"
                  description="[Describe the resulting anatomical or functional change.]"
                />

                <ProcessStep
                  number="3"
                  title="[Clinical manifestation]"
                  description="[Connect the mechanism to symptoms and examination findings.]"
                />
              </div>
            </Section>

            <Section id="history-exam" title="History & Physical">
              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard title="Key history">
                  [List the most useful history features, timing, exposures,
                  risk factors, and associated symptoms.]
                </InfoCard>

                <InfoCard title="Key examination findings">
                  [List characteristic findings, severity markers, and findings
                  that suggest an alternative diagnosis.]
                </InfoCard>
              </div>

              <InfoCard title="Red flags">
                [Identify findings that indicate severe disease, impending
                deterioration, complications, or the need for escalation.]
              </InfoCard>
            </Section>

            <Section id="differential" title="Differential Diagnosis">
              <div className="space-y-4">
                {differential.map((item) => (
                  <div
                    key={item.diagnosis}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="font-bold text-slate-900">
                      {item.diagnosis}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-700">
                      {item.clue}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="workup" title="Diagnostic Workup">
              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard title="Diagnosis">
                  [Explain whether diagnosis is clinical or requires
                  confirmatory testing.]
                </InfoCard>

                <InfoCard title="Testing">
                  [Describe appropriate laboratory tests, imaging, or
                  microbiologic studies and when each is indicated.]
                </InfoCard>
              </div>

              <InfoCard title="Testing to avoid">
                [Identify tests that are routinely unnecessary or low-value in
                uncomplicated disease.]
              </InfoCard>
            </Section>

            <Section id="management" title="Management">
              <div className="space-y-4">
                <ProcessStep
                  number="1"
                  title="[Initial stabilization]"
                  description="[Airway, breathing, circulation, monitoring, or supportive care.]"
                />

                <ProcessStep
                  number="2"
                  title="[Disease-directed treatment]"
                  description="[Medication, procedure, or primary intervention.]"
                />

                <ProcessStep
                  number="3"
                  title="[Reassessment]"
                  description="[Response to treatment and criteria for escalation.]"
                />
              </div>

              <InfoCard title="Avoid or use cautiously">
                [List interventions that are ineffective, potentially harmful,
                or only appropriate in selected patients.]
              </InfoCard>
            </Section>

            <Section id="disposition" title="Disposition">
              <div className="grid gap-5 md:grid-cols-3">
                <InfoCard title="Discharge">
                  [Criteria supporting safe outpatient management.]
                </InfoCard>

                <InfoCard title="Hospital admission">
                  [Clinical findings or risk factors supporting inpatient
                  management.]
                </InfoCard>

                <InfoCard title="ICU or escalation">
                  [Findings indicating respiratory failure, hemodynamic
                  instability, rapid progression, or need for advanced support.]
                </InfoCard>
              </div>
            </Section>

            <Section id="pearls" title="Clinical Pearls">
              <ul className="space-y-3 leading-7 text-slate-700">
                <li>• [High-yield clinical pearl.]</li>
                <li>• [Common diagnostic pitfall.]</li>
                <li>• [Important management distinction.]</li>
                <li>• [Age-specific or severity-specific consideration.]</li>
              </ul>
            </Section>

            <Section id="quiz" title="Knowledge Check">
              <p className="leading-8 text-slate-700">
                [Write a clinical question based on the major learning objective
                of this module.]
              </p>

              <div className="mt-6 space-y-3">
                {quizOptions.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectOption = index === correctAnswerIndex;

                  let optionStyle =
                    "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50";

                  if (answerSubmitted && isCorrectOption) {
                    optionStyle =
                      "border-emerald-400 bg-emerald-50 text-emerald-900";
                  } else if (
                    answerSubmitted &&
                    isSelected &&
                    !isCorrectOption
                  ) {
                    optionStyle = "border-rose-400 bg-rose-50 text-rose-900";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedAnswer(index)}
                      className={`block w-full rounded-2xl border p-4 text-left font-medium transition ${optionStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {answerSubmitted && (
                <div
                  className={`mt-6 rounded-2xl border p-5 ${
                    answerIsCorrect
                      ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                      : "border-amber-300 bg-amber-50 text-amber-900"
                  }`}
                >
                  <p className="font-bold">
                    {answerIsCorrect ? "Correct" : "Not quite"}
                  </p>

                  <p className="mt-2 leading-7">
                    [Explain why the correct option is correct and briefly
                    clarify why the alternatives are less appropriate.]
                  </p>
                </div>
              )}
            </Section>

            {/*
              Evidence Base intentionally appears at the bottom but is not
              included in the "On this page" sidebar.
            */}
            <EvidenceBase
              references={[
                {
                  title: "[Exact guideline, chapter, or article title]",
                  href: "[Direct URL]",
                  description:
                    "[Organization, publication type, and why it supports this module.]",
                },
              ]}
              secondarySources="[Optional educational resources used for verification.]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-bold text-slate-900">{title}</h3>

      <div className="mt-2 leading-7 text-slate-700">{children}</div>
    </div>
  );
}

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-800">
        {number}
      </div>

      <h3 className="mt-4 font-bold text-slate-900">{title}</h3>

      <p className="mt-2 leading-7 text-slate-700">{description}</p>
    </div>
  );
}