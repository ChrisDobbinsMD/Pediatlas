type Reference = {
  title: string;
  description: string;
  href: string;
};

type EvidenceBaseProps = {
  references: Reference[];
  secondarySources?: string;
};

export default function EvidenceBase({
  references,
  secondarySources,
}: EvidenceBaseProps) {
  return (
    <section
      id="evidence"
      className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
        Evidence Base
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        Clinical References
      </h2>

      <div className="mt-8 space-y-6">
        {references.map((reference) => (
          <div key={reference.href}>
            <a
              href={reference.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900 hover:underline"
            >
              {reference.title}
            </a>

            <p className="mt-2 leading-7 text-slate-600">
              {reference.description}
            </p>
          </div>
        ))}

        {secondarySources && (
          <div>
            <h3 className="font-semibold text-slate-700">
              Secondary Educational Sources
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              {secondarySources}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5">
        <h3 className="font-semibold text-amber-900">
          Educational Disclaimer
        </h3>

        <p className="mt-3 leading-7 text-amber-800">
          PediAtlas is intended for medical education and should not replace
          institutional guidelines, local protocols, patient-specific
          assessment, or clinical judgment.
        </p>
      </div>
    </section>
  );
}

export type { Reference };