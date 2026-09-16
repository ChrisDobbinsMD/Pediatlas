"use client";

import { useState } from "react";

type AgeGroup = "preschool" | "schoolAge" | "adolescent";

const ageGroups: {
  id: AgeGroup;
  label: string;
}[] = [
  { id: "preschool", label: "≤5 years" },
  { id: "schoolAge", label: "6–11 years" },
  { id: "adolescent", label: "≥12 years" },
];

export default function AsthmaStepwiseTherapy() {
  const [activeAge, setActiveAge] = useState<AgeGroup>("schoolAge");

  return (
    <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
        Stepwise controller therapy
      </p>

      <h3 className="mt-2 text-2xl font-bold text-purple-950">
        Match treatment to age, control, and risk
      </h3>

      <p className="mt-3 leading-7 text-purple-900">
        Asthma treatment differs by age. Select an age group to review the
        general stepwise approach, then reassess response and adjust treatment
        over time.
      </p>

      {/* Age tabs */}
      <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-white p-1.5">
        {ageGroups.map((group) => {
          const active = activeAge === group.id;

          return (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveAge(group.id)}
              className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-purple-700 text-white shadow-sm"
                  : "text-slate-600 hover:bg-purple-50 hover:text-purple-900"
              }`}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      {/* Preschool */}
      {activeAge === "preschool" && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-purple-700">
            CHILDREN 5 YEARS AND YOUNGER
          </p>

          <h4 className="mt-1 text-xl font-bold text-purple-950">
            Preschool asthma and recurrent wheeze
          </h4>

          <p className="mt-3 leading-7 text-purple-900">
            Diagnosis in young children relies heavily on the pattern of
            symptoms over time, interval symptoms, triggers, atopic features,
            family history, exclusion of alternative diagnoses, and response to
            treatment.
          </p>

          <div className="mt-5 rounded-xl border border-purple-200 bg-white p-5">
            <h5 className="font-bold text-slate-950">Start with the pattern</h5>

            <p className="mt-2 leading-7 text-slate-600">
              Recurrent wheezing with viral infections is common in preschool
              children and does not automatically establish persistent asthma.
              Frequent symptoms between illnesses, multiple triggers, atopy, and
              recurrent exacerbations make asthma more likely.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-purple-200 bg-white p-5">
            <h5 className="font-bold text-slate-950">Controller treatment</h5>

            <p className="mt-2 leading-7 text-slate-600">
              When regular controller therapy is indicated, a low-dose inhaled
              corticosteroid is generally the preferred initial controller.
              Treatment is adjusted according to symptom control, exacerbations,
              treatment response, and age-specific guidance.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h5 className="font-bold text-amber-950">Before stepping up</h5>

            <p className="mt-2 leading-7 text-amber-900">
              Reconsider the diagnosis, inhaler technique, adherence,
              environmental exposures, and alternative causes of recurrent
              respiratory symptoms before escalating therapy.
            </p>
          </div>
        </div>
      )}

      {/* School age */}
      {activeAge === "schoolAge" && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-purple-700">
            CHILDREN 6–11 YEARS
          </p>

          <h4 className="mt-1 text-xl font-bold text-purple-950">
            Stepwise ICS-containing treatment
          </h4>

          <div className="mt-5 grid gap-4">
            <div className="rounded-xl border border-purple-200 bg-white p-5">
              <p className="text-sm font-semibold text-purple-700">STEP 1</p>
              <h5 className="mt-1 font-bold text-slate-950">
                Symptoms 2 days per week or less
              </h5>
              <p className="mt-2 leading-7 text-slate-600">
                Use an ICS-containing anti-inflammatory reliever strategy rather
                than relying on SABA alone.
              </p>
            </div>

            <div className="rounded-xl border border-purple-200 bg-white p-5">
              <p className="text-sm font-semibold text-purple-700">STEP 2</p>
              <h5 className="mt-1 font-bold text-slate-950">
                Symptoms about 3–4 days per week
              </h5>
              <p className="mt-2 leading-7 text-slate-600">
                Daily low-dose inhaled corticosteroid therapy is a standard
                controller strategy, paired with an appropriate
                anti-inflammatory reliever plan.
              </p>
            </div>

            <div className="rounded-xl border border-purple-200 bg-white p-5">
              <p className="text-sm font-semibold text-purple-700">STEP 3</p>
              <h5 className="mt-1 font-bold text-slate-950">
                Symptoms most days or nighttime waking
              </h5>
              <p className="mt-2 leading-7 text-slate-600">
                Options include low-dose ICS-LABA, medium-dose ICS, or low-dose
                maintenance-and-reliever therapy (MART) with ICS-formoterol.
              </p>
            </div>

            <div className="rounded-xl border border-purple-200 bg-white p-5">
              <p className="text-sm font-semibold text-purple-700">STEP 4</p>
              <h5 className="mt-1 font-bold text-slate-950">
                Persistent symptoms or high-risk features
              </h5>
              <p className="mt-2 leading-7 text-slate-600">
                Escalate ICS-containing treatment according to the current
                age-specific pathway and consider specialist involvement when
                asthma remains poorly controlled despite optimized treatment.
              </p>
            </div>

            <div className="rounded-xl border border-purple-300 bg-purple-100 p-5">
              <p className="text-sm font-semibold text-purple-800">STEP 5</p>
              <h5 className="mt-1 font-bold text-purple-950">
                Persistent uncontrolled asthma
              </h5>
              <p className="mt-2 leading-7 text-purple-900">
                Refer for expert assessment, confirm the diagnosis and
                modifiable factors, characterize the asthma phenotype, and
                consider advanced add-on treatment when appropriate.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Adolescent */}
      {activeAge === "adolescent" && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-purple-700">
            ADOLESCENTS 12 YEARS AND OLDER
          </p>

          <h4 className="mt-1 text-xl font-bold text-purple-950">
            Treatment increasingly follows the adolescent/adult framework
          </h4>

          <p className="mt-3 leading-7 text-purple-900">
            Adolescents should receive ICS-containing treatment. Contemporary
            strategies emphasize anti-inflammatory reliever therapy and stepwise
            adjustment based on symptom control, exacerbation risk, lung
            function, adherence, and treatment response.
          </p>

          <div className="mt-5 rounded-xl border border-purple-200 bg-white p-5">
            <h5 className="font-bold text-slate-950">
              Preferred treatment concept
            </h5>

            <p className="mt-2 leading-7 text-slate-600">
              ICS-formoterol-based strategies can provide both anti-inflammatory
              treatment and rapid symptom relief, with the exact regimen
              determined by treatment step and current age-appropriate guidance.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-purple-200 bg-white p-5">
            <h5 className="font-bold text-slate-950">
              Reassess before escalating
            </h5>

            <p className="mt-2 leading-7 text-slate-600">
              Confirm adherence, inhaler technique, medication access,
              exposures, comorbidities, and the diagnosis itself before
              increasing treatment intensity.
            </p>
          </div>
        </div>
      )}

      <p className="mt-6 text-sm leading-6 text-purple-800">
        Treatment choices vary by age, available inhaler formulations, local
        pathways, and patient-specific factors. Use current pediatric asthma
        guidance when selecting a specific medication and dose.
      </p>
    </div>
  );
}
