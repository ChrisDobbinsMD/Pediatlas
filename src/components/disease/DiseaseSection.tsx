import type { ReactNode } from "react";

type DiseaseSectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function DiseaseSection({
  id,
  label,
  title,
  description,
  children,
}: DiseaseSectionProps) {
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