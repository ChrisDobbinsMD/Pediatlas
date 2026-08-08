import type { ReactNode } from "react";

type PearlCardProps = {
  number: number;
  title: string;
  children: ReactNode;
};

export default function PearlCard({
  number,
  title,
  children,
}: PearlCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-800">
          {number}
        </div>

        <div>
          <h3 className="font-bold text-slate-950">
            {title}
          </h3>

          <div className="mt-2 leading-7 text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}