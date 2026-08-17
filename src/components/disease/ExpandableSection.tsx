import type { ReactNode } from "react";

type ExpandableSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function ExpandableSection({
  title,
  description,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-2xl border border-slate-200 bg-slate-50"
    >
      <summary className="cursor-pointer list-none px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-slate-950">{title}</p>

            {description && (
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {description}
              </p>
            )}
          </div>

          <span
            className="text-xl font-semibold text-blue-700 transition-transform group-open:rotate-180"
            aria-hidden="true"
          >
            ⌄
          </span>
        </div>
      </summary>

      <div className="border-t border-slate-200 bg-white px-6 py-6">
        {children}
      </div>
    </details>
  );
}
