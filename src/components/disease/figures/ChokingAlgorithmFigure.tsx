export default function ChokingAlgorithmFigure() {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Pediatric Foreign-Body Airway Obstruction
        </p>

        <h3 className="mt-1 text-xl font-bold text-blue-950">
          Choking Management Algorithm
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Management is determined first by cough effectiveness and then by
          responsiveness and age.
        </p>
      </div>

      <div className="p-6 md:p-8">
        <div className="mx-auto max-w-3xl">
          {/* =====================================================
              SUSPECTED FBAO
          ====================================================== */}

          <div className="mx-auto max-w-md rounded-2xl border-2 border-blue-200 bg-blue-50 p-5 text-center">
            <p className="font-bold text-blue-950">
              Suspected foreign-body airway obstruction
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Sudden choking, coughing, gagging, or stridor
            </p>
          </div>

          <Arrow />

          {/* =====================================================
              EFFECTIVE COUGH?
          ====================================================== */}

          <DecisionBox>Is the cough effective?</DecisionBox>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {/* YES */}
            <div>
              <BranchLabel tone="emerald">YES</BranchLabel>

              <div className="mt-2 h-full rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-bold text-emerald-900">Encourage coughing</p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Allow spontaneous coughing</li>
                  <li>• Closely monitor</li>
                  <li>• Watch for worsening obstruction</li>
                  <li>• Intervene if the cough becomes ineffective</li>
                </ul>
              </div>
            </div>

            {/* NO */}
            <div>
              <BranchLabel tone="rose">NO</BranchLabel>

              <div className="mt-2 h-full rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-bold text-rose-900">
                  Severe airway obstruction
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Weak or absent cough</li>
                  <li>• Unable to cry or speak</li>
                  <li>• Poor or absent air movement</li>
                  <li>• Cyanosis or altered mental status</li>
                </ul>
              </div>
            </div>
          </div>

          <Arrow />

          {/* =====================================================
              RESPONSIVE?
          ====================================================== */}

          <DecisionBox>Is the child responsive?</DecisionBox>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {/* RESPONSIVE */}
            <div>
              <BranchLabel tone="blue">YES</BranchLabel>

              <div className="mt-2 space-y-3">
                {/* INFANT */}
                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
                    Infant &lt;1 year
                  </p>

                  <p className="mt-2 text-lg font-bold text-blue-950">
                    5 back blows
                    <span className="mx-2 text-slate-400">→</span>5 chest
                    thrusts
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Repeat until the object is expelled or the infant becomes
                    unresponsive.
                  </p>

                  <p className="mt-3 text-sm font-semibold text-rose-700">
                    Do not perform abdominal thrusts in infants.
                  </p>
                </div>

                {/* CHILD */}
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                    Child ≥1 year
                  </p>

                  <p className="mt-2 text-lg font-bold text-blue-950">
                    5 back blows
                    <span className="mx-2 text-slate-400">→</span>5 abdominal
                    thrusts
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Repeat until the object is expelled or the child becomes
                    unresponsive.
                  </p>
                </div>
              </div>
            </div>

            {/* UNRESPONSIVE */}
            <div>
              <BranchLabel tone="rose">NO</BranchLabel>

              <div className="mt-2 rounded-2xl border-2 border-rose-200 bg-rose-50 p-5">
                <p className="text-lg font-bold text-rose-900">Begin CPR</p>

                <p className="mt-1 font-semibold text-rose-800">
                  Start with chest compressions
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Perform chest compressions</li>
                  <li>
                    • Open the airway and look for the object before breaths
                  </li>
                  <li>• Remove the object only if it is visible</li>
                  <li>• Attempt breaths and continue CPR</li>
                </ul>
              </div>
            </div>
          </div>

          {/* =====================================================
              SAFETY REMINDER
          ====================================================== */}

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
            <p className="font-bold text-amber-900">
              Never perform a blind finger sweep.
            </p>

            <p className="mt-1 text-sm leading-6 text-amber-900/80">
              Remove an object from the mouth only when it can be seen.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CAPTION
      ====================================================== */}

      <figcaption className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-sm leading-6 text-slate-600">
        Pediatric foreign-body airway obstruction management based on cough
        effectiveness, responsiveness, and age. Adapted from the 2025 AHA/AAP
        Pediatric Basic Life Support guidelines.
      </figcaption>
    </figure>
  );
}

/* =========================================================
   FIGURE HELPERS
========================================================= */

function Arrow() {
  return (
    <div
      className="flex h-12 items-center justify-center text-2xl font-bold text-slate-400"
      aria-hidden="true"
    >
      ↓
    </div>
  );
}

function DecisionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-sm rounded-2xl border-2 border-purple-200 bg-purple-50 px-5 py-4 text-center">
      <p className="font-bold text-purple-950">{children}</p>
    </div>
  );
}

function BranchLabel({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "emerald" | "rose" | "blue";
}) {
  const tones = {
    emerald: "bg-emerald-100 text-emerald-800",
    rose: "bg-rose-100 text-rose-800",
    blue: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="text-center">
      <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${tones[tone]}`}
      >
        {children}
      </span>
    </div>
  );
}
