export interface EvidenceReference {
  title: string;
  href?: string;
  description: string;
}

interface EvidenceBaseProps {
  references: EvidenceReference[];
  secondarySources?: string;
}

export default function EvidenceBase({
  references,
  secondarySources,
}: EvidenceBaseProps) {
  return (
    <section
      id="references"
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
        Evidence Base
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        Clinical References
      </h2>

      <div className="mt-8 space-y-6">
        {references.map((reference) => (
          <div key={reference.title}>
            {reference.href ? (
              <a
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-500 hover:underline"
              >
                {reference.title}
              </a>
            ) : (
              <p className="font-semibold text-slate-800">
                {reference.title}
              </p>
            )}

            <p className="mt-1 leading-7 text-slate-600">
              {reference.description}
            </p>
          </div>
        ))}

        {secondarySources && (
          <div>
            <p className="font-semibold text-slate-700">
              Secondary Educational Sources
            </p>

            <p className="mt-1 leading-7 text-slate-600">
              {secondarySources}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Educational Disclaimer
        </p>

        <p className="mt-3 leading-7 text-amber-800">
          PediAtlas is intended for medical education and should not replace
          institutional guidelines, local protocols, patient-specific
          assessment, or clinical judgment.
        </p>
      </div>
    </section>
  );
}