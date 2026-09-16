"use client";

import { useState } from "react";

const assessmentCategories = [
  {
    id: "workOfBreathing",
    label: "Work of breathing",
    options: [
      "Minimal or no retractions",
      "Moderate retractions",
      "Marked retractions",
    ],
  },
  {
    id: "speechActivity",
    label: "Speech and activity",
    options: [
      "Speaks normally / normal activity",
      "Reduced activity or difficulty with full sentences",
      "Speaks only short phrases or words",
    ],
  },
  {
    id: "oxygenation",
    label: "Oxygenation",
    options: [
      "Normal oxygenation on room air",
      "Mild hypoxemia",
      "Persistent or significant hypoxemia",
    ],
  },
  {
    id: "airEntry",
    label: "Air entry",
    options: [
      "Good air movement",
      "Reduced air movement",
      "Markedly diminished air movement or silent chest",
    ],
  },
  {
    id: "mentalStatus",
    label: "Mental status and fatigue",
    options: [
      "Alert without fatigue",
      "Increasing fatigue or agitation",
      "Altered mental status, exhaustion, or cyanosis",
    ],
  },
];

const severityLevels = [
  {
    label: "Mild",
    description:
      "Current selections are most consistent with mild acute asthma findings.",
    className: "border-emerald-200 bg-emerald-50 text-emerald-950",
  },
  {
    label: "Moderate",
    description:
      "At least one selected finding suggests moderate acute asthma severity.",
    className: "border-amber-200 bg-amber-50 text-amber-950",
  },
  {
    label: "Severe",
    description:
      "At least one selected finding suggests severe acute asthma and warrants prompt reassessment and escalation according to the local pathway.",
    className: "border-rose-200 bg-rose-50 text-rose-950",
  },
  {
    label: "Features concerning for impending respiratory failure",
    description:
      "The selected findings include a high-risk feature such as a silent chest, exhaustion, altered mental status, or cyanosis. These findings require immediate reassessment and escalation according to the local emergency or critical-care pathway.",
    className: "border-rose-300 bg-rose-100 text-rose-950",
  },
];

export default function AsthmaSeverityTool() {
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentCategory = assessmentCategories[currentStep];
  const currentSelection = selections[currentCategory.id];

  function selectOption(optionIndex: number) {
    setSelections((current) => ({
      ...current,
      [currentCategory.id]: optionIndex,
    }));
  }

  function goNext() {
    if (currentStep < assessmentCategories.length - 1) {
      setCurrentStep((current) => current + 1);
    } else {
      setShowResult(true);
    }
  }

  function goBack() {
    if (currentStep > 0) {
      setCurrentStep((current) => current - 1);
    }
  }

  function restartAssessment() {
    setSelections({});
    setCurrentStep(0);
    setShowResult(false);
  }

  const selectedValues = Object.values(selections);

  const highestSeverity =
    selectedValues.length > 0 ? Math.max(...selectedValues) : null;

  const hasImpendingFailureFeature =
    selections.airEntry === 2 || selections.mentalStatus === 2;

  const severity = hasImpendingFailureFeature
    ? severityLevels[3]
    : highestSeverity !== null
      ? severityLevels[highestSeverity]
      : null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Interactive assessment
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-950">
          Assess acute asthma severity
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Select the child&apos;s current findings to practice integrating the
          features that determine acute asthma severity.
        </p>
      </div>

      {!showResult ? (
        <>
          <div className="mt-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-500">
                Step {currentStep + 1} of {assessmentCategories.length}
              </p>

              <p className="text-sm font-semibold text-sky-700">
                {currentCategory.label}
              </p>
            </div>

            <div className="mt-3 flex gap-2">
              {assessmentCategories.map((category, index) => (
                <div
                  key={category.id}
                  className={`h-2 flex-1 rounded-full ${
                    index <= currentStep ? "bg-sky-600" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h4 className="text-xl font-bold text-slate-950">
              {currentCategory.label}
            </h4>

            <div className="mt-4 grid gap-3">
              {currentCategory.options.map((option, optionIndex) => {
                const selected = currentSelection === optionIndex;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectOption(optionIndex)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                      selected
                        ? "border-sky-500 bg-sky-50 text-sky-950"
                        : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goBack}
              disabled={currentStep === 0}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Back
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={currentSelection === undefined}
              className="rounded-xl bg-sky-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentStep === assessmentCategories.length - 1
                ? "View assessment"
                : "Next →"}
            </button>
          </div>
        </>
      ) : (
        severity && (
          <div className="mt-6">
            <div className={`rounded-2xl border p-5 ${severity.className}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Assessment result
              </p>

              <h4 className="mt-2 text-2xl font-bold">{severity.label}</h4>

              <p className="mt-3 leading-7">{severity.description}</p>
            </div>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
              <h4 className="font-bold text-slate-950">
                Findings you selected
              </h4>

              <div className="mt-4 space-y-3">
                {assessmentCategories.map((category) => (
                  <div
                    key={category.id}
                    className="grid gap-1 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 md:grid-cols-[180px_1fr]"
                  >
                    <p className="text-sm font-semibold text-slate-700">
                      {category.label}
                    </p>

                    <p className="text-sm text-slate-600">
                      {category.options[selections[category.id]]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setCurrentStep(0);
                  setShowResult(false);
                }}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Review answers
              </button>

              <button
                type="button"
                onClick={restartAssessment}
                className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800"
              >
                Start over
              </button>
            </div>
          </div>
        )
      )}

      <p className="mt-6 text-sm leading-6 text-slate-500">
        This educational tool does not replace your institution&apos;s pediatric
        asthma pathway or patient-specific clinical assessment.
      </p>
    </div>
  );
}
