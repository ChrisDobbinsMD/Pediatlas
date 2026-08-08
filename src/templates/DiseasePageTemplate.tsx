"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EvidenceBase } from "@/components/disease";

/*
  ============================================================
  PEDIATLAS DISEASE PAGE TEMPLATE V2
  ============================================================

  HOW TO USE:

  1. Copy this file into the appropriate disease route.
  2. Rename the exported component.
  3. Replace all [BRACKETED PLACEHOLDERS].
  4. Update breadcrumb links if the disease is not Lower Airway.
  5. Add images to public/images.
  6. Add/remove the Differential Diagnosis section only when useful.
  7. Keep the overall section order and design language consistent.
  8. EvidenceBase stays near the bottom and does NOT need to appear
     in the "On This Page" sidebar.

  Standard sequence:

  Hero
  Clinical Vignette
  Anatomy & Localization
  Pathophysiology
  History & Physical
  Diagnostic Workup
  Management
  Care Setting & Follow-Up
  Clinical Pearls
  Quiz
  Evidence Base
  Disclaimer
  Bottom Navigation
*/

const pageSections = [
  { id: "vignette", label: "Clinical Vignette" },
  { id: "localization", label: "Anatomy & Localization" },
  { id: "pathophysiology", label: "Pathophysiology" },
  { id: "assessment", label: "History & Physical" },

  // OPTIONAL:
  // { id: "differential", label: "Differential Diagnosis" },

  { id: "workup", label: "Diagnostic Workup" },
  { id: "management", label: "Management" },
  { id: "disposition", label: "Care Setting & Follow-Up" },
  { id: "pearls", label: "Clinical Pearls" },
  { id: "quiz", label: "Knowledge Check" },
];

/*
  ============================================================
  IMAGES
  ============================================================
*/

const anatomyImage = "";

const pathophysiologyImage = "";

/*
  ============================================================
  OPTIONAL DIFFERENTIAL
  ============================================================
*/

const differential = [
  {
    diagnosis: "[Differential diagnosis]",
    clue: "[Finding that supports or distinguishes this diagnosis.]",
  },
];

/*
  ============================================================
  QUIZ
  ============================================================
*/

const quizQuestions = [
  {
    question:
      "[Clinical reasoning question #1]",
    answers: [
      {
        text: "[Answer A]",
        correct: true,
        feedback:
          "[Explain why this answer is correct.]",
      },
      {
        text: "[Answer B]",
        correct: false,
        feedback:
          "[Explain specifically why this answer is less appropriate.]",
      },
      {
        text: "[Answer C]",
        correct: false,
        feedback:
          "[Explain specifically why this answer is less appropriate.]",
      },
      {
        text: "[Answer D]",
        correct: false,
        feedback:
          "[Explain specifically why this answer is less appropriate.]",
      },
    ],
  },

  {
    question:
      "[Clinical reasoning question #2]",
    answers: [
      {
        text: "[Answer A]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer B]",
        correct: true,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer C]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer D]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
    ],
  },

  {
    question:
      "[Clinical reasoning question #3]",
    answers: [
      {
        text: "[Answer A]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer B]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer C]",
        correct: true,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer D]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
    ],
  },

  {
    question:
      "[Clinical reasoning question #4]",
    answers: [
      {
        text: "[Answer A]",
        correct: true,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer B]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer C]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer D]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
    ],
  },

  {
    question:
      "[Clinical reasoning question #5]",
    answers: [
      {
        text: "[Answer A]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer B]",
        correct: true,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer C]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
      {
        text: "[Answer D]",
        correct: false,
        feedback:
          "[Individualized explanation.]",
      },
    ],
  },
];

export default function DiseasePageTemplate() {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});

  const [visibleQuestionCount, setVisibleQuestionCount] =
    useState(1);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 to-white px-6 py-14">
        <div className="mx-auto max-w-6xl">

          {/* Breadcrumbs */}

          <nav className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              href="/"
              className="text-blue-800 hover:text-blue-600"
            >
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
              href="/respiratory/lower-airway"
              className="text-blue-800 hover:text-blue-600"
            >
              Lower Airway
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-slate-600">
              [Disease Name]
            </span>
          </nav>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                [ANATOMIC / DISEASE CATEGORY]
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                [Disease Name]
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                [Concise definition describing what the disease is,
                where it occurs, and why it matters clinically.]
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
                  [Key concept]
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                  [Key concept]
                </span>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                  [Key concept]
                </span>
              </div>
            </div>

            <div
              className="text-8xl"
              aria-hidden="true"
            >
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
            {pageSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="transition hover:text-blue-600"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* ===================================================
            MAIN EDUCATIONAL CONTENT
        ==================================================== */}

        <div className="space-y-8">

          {/* =================================================
              CLINICAL VIGNETTE
          ================================================== */}

          <section
            id="vignette"
            className="scroll-mt-8 rounded-3xl border border-blue-200 bg-blue-950 p-8 text-white shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Clinical Vignette
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              [Short vignette title]
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-50">
              [Representative pediatric vignette. Include age,
              symptoms, timing, examination findings, and contextual
              clues without immediately revealing the diagnosis.]
            </p>

            <div className="mt-7 rounded-2xl bg-white/10 p-5">
              <p className="font-semibold text-sky-200">
                Your first clinical task
              </p>

              <p className="mt-2 leading-7 text-blue-50">
                [What should the learner recognize, distinguish, or
                decide first?]
              </p>
            </div>
          </section>

          {/* =================================================
              ANATOMY & LOCALIZATION
          ================================================== */}

          <Section
            id="localization"
            label="Anatomy & Localization"
            title="[Localization-focused teaching statement]"
            description="[Explain the relevant anatomy and how the disease location produces the characteristic clinical findings.]"
          >
            {anatomyImage && (
              <div className="mx-auto max-w-xl">
                <Image
                  src={anatomyImage}
                  alt="[Disease name] anatomy"
                  width={900}
                  height={700}
                  className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
                  unoptimized
                />
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard
                title="[Relevant structure]"
                tone="blue"
              >
                [Describe the important normal anatomy.]
              </InfoCard>

              <InfoCard
                title="[Disease localization]"
                tone="rose"
              >
                [Explain where pathology occurs and why it matters.]
              </InfoCard>
            </div>

            <Callout
              label="Pediatric Anatomy Pearl"
              title="[Age-specific anatomical pearl]"
              tone="amber"
            >
              [Explain a clinically important pediatric anatomical
              distinction.]
            </Callout>
          </Section>

          {/* =================================================
              PATHOPHYSIOLOGY
          ================================================== */}

          <Section
            id="pathophysiology"
            label="Pathophysiology"
            title="[Mechanistic teaching statement]"
            description="[Explain how the disease develops and connect the mechanism to the clinical manifestations.]"
          >
            {pathophysiologyImage && (
              <div className="mx-auto max-w-2xl">
                <Image
                  src={pathophysiologyImage}
                  alt="[Disease name] pathophysiology diagram"
                  width={1200}
                  height={900}
                  className="h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
                  unoptimized
                />
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-3">
              <ProcessStep
                number="1"
                title="[Trigger]"
                description="[Initiating event or disease process.]"
              />

              <ProcessStep
                number="2"
                title="[Physiologic change]"
                description="[Resulting functional or anatomical abnormality.]"
              />

              <ProcessStep
                number="3"
                title="[Clinical consequence]"
                description="[How this produces symptoms and examination findings.]"
              />
            </div>

            <Callout
              label="Clinical Pearl"
              title="[Important pathophysiology distinction]"
              tone="blue"
            >
              [High-yield connection between mechanism and presentation.]
            </Callout>
          </Section>

          {/* =================================================
              HISTORY & PHYSICAL
          ================================================== */}

          <Section
            id="assessment"
            label="History & Physical"
            title="[What the clinician should look for]"
            description="[Brief introduction to the highest-yield history and examination findings.]"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard
                title="Key History"
                tone="blue"
              >
                <ul className="space-y-2">
                  <li>• [History feature]</li>
                  <li>• [History feature]</li>
                  <li>• [History feature]</li>
                  <li>• [History feature]</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Physical Examination"
                tone="amber"
              >
                <ul className="space-y-2">
                  <li>• [Examination finding]</li>
                  <li>• [Examination finding]</li>
                  <li>• [Examination finding]</li>
                  <li>• [Examination finding]</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Risk Factors"
                tone="emerald"
              >
                <ul className="space-y-2">
                  <li>• [Risk factor]</li>
                  <li>• [Risk factor]</li>
                  <li>• [Risk factor]</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Red Flags"
                tone="rose"
              >
                <ul className="space-y-2">
                  <li>• [Red flag]</li>
                  <li>• [Red flag]</li>
                  <li>• [Red flag]</li>
                </ul>
              </InfoCard>
            </div>
          </Section>

          {/* =================================================
              OPTIONAL DIFFERENTIAL DIAGNOSIS

              Uncomment ONLY when a dedicated differential
              section materially improves the module.
          ================================================== */}

          {/*
          <Section
            id="differential"
            label="Differential Diagnosis"
            title="Distinguish common mimics"
            description="Use the history, examination, and disease course to separate this condition from competing diagnoses."
          >
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
          */}

          {/* =================================================
              DIAGNOSTIC WORKUP
          ================================================== */}

          <Section
            id="workup"
            label="Diagnostic Workup"
            title="[Diagnostic reasoning statement]"
            description="[Explain whether diagnosis is clinical and how testing should be selected based on disease severity and clinical question.]"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard
                title="Clinical Diagnosis"
                tone="blue"
              >
                [Explain whether the diagnosis is primarily clinical.]
              </InfoCard>

              <InfoCard
                title="Testing When Indicated"
                tone="amber"
              >
                [Describe appropriate labs, microbiology, imaging,
                specialized studies, or monitoring.]
              </InfoCard>

              <InfoCard
                title="Complications / Severe Disease"
                tone="rose"
              >
                [Testing or findings that should be considered when
                disease is severe or atypical.]
              </InfoCard>

              <InfoCard
                title="Testing to Avoid"
                tone="slate"
              >
                [Identify routinely unnecessary or low-value testing.]
              </InfoCard>
            </div>

            <Callout
              label="Important Limitation"
              title="[Limitation of testing]"
              tone="rose"
            >
              [Explain why a normal or abnormal test does not necessarily
              settle the diagnosis.]
            </Callout>
          </Section>

          {/* =================================================
              MANAGEMENT
          ================================================== */}

          <Section
            id="management"
            label="Management"
            title="[Management teaching statement]"
            description="[Summarize the overall treatment priorities.]"
          >
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-center text-2xl font-bold">
                Initial Management
              </h3>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <ProcessStep
                  number="1"
                  title="Stabilize"
                  description="[ABCs, monitoring, oxygen, fluids, etc.]"
                />

                <ProcessStep
                  number="2"
                  title="Treat"
                  description="[Disease-specific treatment.]"
                />

                <ProcessStep
                  number="3"
                  title="Reassess"
                  description="[Response to therapy and escalation criteria.]"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard
                title="Supportive Care"
                tone="amber"
              >
                <ul className="space-y-2">
                  <li>• [Supportive intervention]</li>
                  <li>• [Supportive intervention]</li>
                  <li>• [Supportive intervention]</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Disease-Specific Therapy"
                tone="blue"
              >
                <ul className="space-y-2">
                  <li>• [Primary therapy]</li>
                  <li>• [Alternative therapy]</li>
                  <li>• [Special circumstance]</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Prevent / Monitor Complications"
                tone="emerald"
              >
                <ul className="space-y-2">
                  <li>• [Prevention / follow-up step]</li>
                  <li>• [Prevention / follow-up step]</li>
                  <li>• [Prevention / follow-up step]</li>
                </ul>
              </InfoCard>
            </div>

            <Callout
              label="Clinical Pearl"
              title="[Important management distinction]"
              tone="blue"
            >
              [Management pearl.]
            </Callout>
          </Section>

          {/* =================================================
              CARE SETTING & FOLLOW-UP
          ================================================== */}

          <Section
            id="disposition"
            label="Care Setting & Follow-Up"
            title="[How severity determines level of care]"
            description="[Explain which clinical findings determine outpatient management, hospitalization, ICU care, and follow-up.]"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              <InfoCard
                title="Outpatient Care"
                tone="emerald"
              >
                <ul className="space-y-2">
                  <li>• [Outpatient criterion]</li>
                  <li>• [Outpatient criterion]</li>
                  <li>• [Follow-up requirement]</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Hospital Admission"
                tone="amber"
              >
                <ul className="space-y-2">
                  <li>• [Admission criterion]</li>
                  <li>• [Admission criterion]</li>
                  <li>• [Admission criterion]</li>
                </ul>
              </InfoCard>

              <InfoCard
                title="Intensive Care"
                tone="rose"
              >
                <ul className="space-y-2">
                  <li>• [PICU criterion]</li>
                  <li>• [PICU criterion]</li>
                  <li>• [PICU criterion]</li>
                </ul>
              </InfoCard>
            </div>

            <InfoCard
              title="Long-Term Follow-Up"
              tone="purple"
            >
              [Describe primary care, subspecialty, developmental,
              nutritional, pulmonary, or other long-term follow-up.]
            </InfoCard>
          </Section>

          {/* =================================================
              CLINICAL PEARLS
          ================================================== */}

          <Section
            id="pearls"
            label="Clinical Pearls"
            title="High-yield takeaways"
            description="[One sentence explaining what the learner should remember most.]"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <PearlCard
                number="1"
                title="[Pearl]"
                tone="amber"
              >
                [High-yield explanation.]
              </PearlCard>

              <PearlCard
                number="2"
                title="[Pearl]"
                tone="blue"
              >
                [High-yield explanation.]
              </PearlCard>

              <PearlCard
                number="3"
                title="[Pearl]"
                tone="rose"
              >
                [High-yield explanation.]
              </PearlCard>

              <PearlCard
                number="4"
                title="[Pearl]"
                tone="purple"
              >
                [High-yield explanation.]
              </PearlCard>

              <PearlCard
                number="5"
                title="[Pearl]"
                tone="emerald"
              >
                [High-yield explanation.]
              </PearlCard>

              <PearlCard
                number="6"
                title="[Pearl]"
                tone="blue"
              >
                [High-yield explanation.]
              </PearlCard>
            </div>

            <div className="rounded-2xl bg-blue-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Bottom Line
              </p>

              <h3 className="mt-2 text-xl font-bold">
                [One-sentence summary]
              </h3>

              <p className="mt-3 leading-7 text-blue-100">
                [Brief final teaching statement.]
              </p>
            </div>
          </Section>

          {/* =================================================
              QUIZ
          ================================================== */}

          <section
            id="quiz"
            className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Knowledge Check
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Apply what you learned
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Work through each question in sequence. Select an answer,
              review the explanation, then continue.
            </p>

            <div className="mt-8 space-y-8">
              {quizQuestions
                .slice(0, visibleQuestionCount)
                .map((question, questionIndex) => {
                  const selectedAnswerIndex =
                    selectedAnswers[questionIndex];

                  const hasAnswered =
                    selectedAnswerIndex !== undefined;

                  const selectedAnswer = hasAnswered
                    ? question.answers[selectedAnswerIndex]
                    : undefined;

                  const isCorrect =
                    selectedAnswer?.correct === true;

                  return (
                    <div
                      key={questionIndex}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                          Question {questionIndex + 1}
                        </p>

                        {hasAnswered && (
                          <span
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${
                              isCorrect
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {isCorrect
                              ? "Correct"
                              : "Review"}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-bold leading-8 text-slate-950">
                        {question.question}
                      </h3>

                      <div className="mt-6 space-y-3">
                        {question.answers.map(
                          (answer, answerIndex) => {
                            const isSelected =
                              selectedAnswerIndex ===
                              answerIndex;

                            let answerClass =
                              "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50";

                            if (
                              hasAnswered &&
                              answer.correct
                            ) {
                              answerClass =
                                "border-emerald-400 bg-emerald-50 text-emerald-950";
                            }

                            if (
                              hasAnswered &&
                              isSelected &&
                              !answer.correct
                            ) {
                              answerClass =
                                "border-rose-400 bg-rose-50 text-rose-950";
                            }

                            return (
                              <button
                                key={answerIndex}
                                type="button"
                                disabled={hasAnswered}
                                onClick={() =>
                                  setSelectedAnswers(
                                    (previous) => ({
                                      ...previous,
                                      [questionIndex]:
                                        answerIndex,
                                    })
                                  )
                                }
                                className={`w-full rounded-2xl border px-5 py-4 text-left font-medium transition ${answerClass} ${
                                  hasAnswered
                                    ? "cursor-default"
                                    : "cursor-pointer"
                                }`}
                              >
                                <span className="mr-3 font-bold">
                                  {String.fromCharCode(
                                    65 + answerIndex
                                  )}
                                  .
                                </span>

                                {answer.text}
                              </button>
                            );
                          }
                        )}
                      </div>

                      {hasAnswered &&
                        selectedAnswer && (
                          <div
                            className={`mt-6 rounded-2xl border p-6 ${
                              isCorrect
                                ? "border-emerald-200 bg-emerald-50"
                                : "border-amber-200 bg-amber-50"
                            }`}
                          >
                            <p
                              className={`font-bold ${
                                isCorrect
                                  ? "text-emerald-950"
                                  : "text-amber-950"
                              }`}
                            >
                              {isCorrect
                                ? "Correct"
                                : "Not quite"}
                            </p>

                            <p
                              className={`mt-3 leading-7 ${
                                isCorrect
                                  ? "text-emerald-900"
                                  : "text-amber-900"
                              }`}
                            >
                              {
                                selectedAnswer.feedback
                              }
                            </p>

                            {questionIndex <
                              quizQuestions.length -
                                1 &&
                              visibleQuestionCount ===
                                questionIndex + 1 && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setVisibleQuestionCount(
                                      questionIndex + 2
                                    )
                                  }
                                  className="mt-5 rounded-xl bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-blue-900"
                                >
                                  Continue to Question{" "}
                                  {questionIndex + 2} →
                                </button>
                              )}
                          </div>
                        )}
                    </div>
                  );
                })}
            </div>

            {visibleQuestionCount ===
              quizQuestions.length &&
              Object.keys(selectedAnswers).length ===
                quizQuestions.length && (
                <div className="mt-8 rounded-2xl bg-blue-950 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                    Quiz Complete
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {
                      Object.entries(
                        selectedAnswers
                      ).filter(
                        ([
                          questionIndex,
                          answerIndex,
                        ]) =>
                          quizQuestions[
                            Number(
                              questionIndex
                            )
                          ].answers[answerIndex]
                            .correct
                      ).length
                    }{" "}
                    / {quizQuestions.length} correct
                  </h3>

                  <p className="mt-3 leading-7 text-blue-100">
                    Review any missed questions above
                    before moving on.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAnswers({});
                      setVisibleQuestionCount(1);
                    }}
                    className="mt-5 rounded-xl bg-white px-5 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
                  >
                    Restart Quiz
                  </button>
                </div>
              )}
          </section>

          {/* =================================================
              EVIDENCE BASE
          ================================================== */}

          <EvidenceBase
            references={[
              {
                title:
                  "[Exact guideline or article title]",
                href: "[Direct URL]",
                description:
                  "[Organization, publication type, and why it supports the module.]",
              },
              {
                title:
                  "[Second authoritative source]",
                href: "[Direct URL]",
                description:
                  "[How this source supports the module.]",
              },
            ]}
            secondarySources="[Optional secondary resources used for verification.]"
          />

          {/* =================================================
              DISCLAIMER
          ================================================== */}

          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-6 text-sm leading-6 text-slate-600">
            <p className="font-semibold text-slate-800">
              PediAtlas Educational Disclaimer
            </p>

            <p className="mt-2">
              PediAtlas is intended for medical education and
              clinical learning. It does not replace institutional
              protocols, specialist consultation, or individualized
              medical decision-making. Medication dosing,
              antimicrobial selection, and management decisions
              should be verified against current institutional and
              specialty guidance.
            </p>
          </div>

          {/* =================================================
              BOTTOM NAVIGATION
          ================================================== */}

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/respiratory/lower-airway/[previous-route]"
              className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-blue-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
            >
              ← [Previous Disease]
            </Link>

            <Link
              href="/respiratory/lower-airway/[next-route]"
              className="rounded-2xl border border-slate-200 bg-white p-5 text-right font-semibold text-blue-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
            >
              [Next Disease] →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

/*
  ============================================================
  REUSABLE COMPONENTS
  ============================================================
*/

type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

function Section({
  id,
  label,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
        {label}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}

      <div className="mt-8 space-y-6">
        {children}
      </div>
    </section>
  );
}

type Tone =
  | "blue"
  | "amber"
  | "emerald"
  | "rose"
  | "purple"
  | "slate";

const toneClasses: Record<
  Tone,
  {
    container: string;
    title: string;
    text: string;
  }
> = {
  blue: {
    container:
      "border-blue-200 bg-blue-50",
    title: "text-blue-950",
    text: "text-blue-900",
  },

  amber: {
    container:
      "border-amber-200 bg-amber-50",
    title: "text-amber-950",
    text: "text-amber-900",
  },

  emerald: {
    container:
      "border-emerald-200 bg-emerald-50",
    title: "text-emerald-950",
    text: "text-emerald-900",
  },

  rose: {
    container:
      "border-rose-200 bg-rose-50",
    title: "text-rose-950",
    text: "text-rose-900",
  },

  purple: {
    container:
      "border-purple-200 bg-purple-50",
    title: "text-purple-950",
    text: "text-purple-900",
  },

  slate: {
    container:
      "border-slate-200 bg-slate-50",
    title: "text-slate-950",
    text: "text-slate-700",
  },
};

type InfoCardProps = {
  title: string;
  tone?: Tone;
  children: React.ReactNode;
};

function InfoCard({
  title,
  tone = "slate",
  children,
}: InfoCardProps) {
  const styles = toneClasses[tone];

  return (
    <div
      className={`rounded-2xl border p-6 ${styles.container}`}
    >
      <h3
        className={`text-xl font-bold ${styles.title}`}
      >
        {title}
      </h3>

      <div
        className={`mt-4 leading-7 ${styles.text}`}
      >
        {children}
      </div>
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
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-800">
        {number}
      </div>

      <h3 className="mt-4 font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-700">
        {description}
      </p>
    </div>
  );
}

type CalloutProps = {
  label: string;
  title: string;
  tone?: Tone;
  children: React.ReactNode;
};

function Callout({
  label,
  title,
  tone = "blue",
  children,
}: CalloutProps) {
  const styles = toneClasses[tone];

  return (
    <div
      className={`rounded-2xl border p-6 ${styles.container}`}
    >
      <p
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${styles.title}`}
      >
        {label}
      </p>

      <h3
        className={`mt-2 text-xl font-bold ${styles.title}`}
      >
        {title}
      </h3>

      <div
        className={`mt-3 leading-7 ${styles.text}`}
      >
        {children}
      </div>
    </div>
  );
}

type PearlCardProps = {
  number: string;
  title: string;
  tone?: Tone;
  children: React.ReactNode;
};

function PearlCard({
  number,
  title,
  tone = "blue",
  children,
}: PearlCardProps) {
  const styles = toneClasses[tone];

  return (
    <div
      className={`rounded-2xl border p-6 ${styles.container}`}
    >
      <h3
        className={`font-bold ${styles.title}`}
      >
        {number}. {title}
      </h3>

      <div
        className={`mt-3 leading-7 ${styles.text}`}
      >
        {children}
      </div>
    </div>
  );
}