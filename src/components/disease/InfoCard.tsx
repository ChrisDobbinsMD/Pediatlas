import type { ReactNode } from "react";

export type CardTone =
  | "blue"
  | "amber"
  | "emerald"
  | "rose"
  | "purple"
  | "slate";

const toneClasses: Record<
  CardTone,
  {
    container: string;
    title: string;
    text: string;
  }
> = {
  blue: {
    container: "border-blue-200 bg-blue-50",
    title: "text-blue-950",
    text: "text-blue-900",
  },

  amber: {
    container: "border-amber-200 bg-amber-50",
    title: "text-amber-950",
    text: "text-amber-900",
  },

  emerald: {
    container: "border-emerald-200 bg-emerald-50",
    title: "text-emerald-950",
    text: "text-emerald-900",
  },

  rose: {
    container: "border-rose-200 bg-rose-50",
    title: "text-rose-950",
    text: "text-rose-900",
  },

  purple: {
    container: "border-purple-200 bg-purple-50",
    title: "text-purple-950",
    text: "text-purple-900",
  },

  slate: {
    container: "border-slate-200 bg-slate-50",
    title: "text-slate-950",
    text: "text-slate-700",
  },
};

type InfoCardProps = {
  title: string;
  tone?: CardTone;
  children: ReactNode;
};

export default function InfoCard({
  title,
  tone = "slate",
  children,
}: InfoCardProps) {
  const styles = toneClasses[tone];

  return (
    <div
      className={`rounded-2xl border p-6 ${styles.container}`}
    >
      <h3 className={`text-xl font-bold ${styles.title}`}>
        {title}
      </h3>

      <div className={`mt-4 leading-7 ${styles.text}`}>
        {children}
      </div>
    </div>
  );
}