import type { ReactNode } from "react";
import type { CardTone } from "./InfoCard";

const toneClasses: Record<
  CardTone,
  {
    container: string;
    label: string;
    title: string;
    text: string;
  }
> = {
  blue: {
    container: "border-blue-200 bg-blue-50",
    label: "text-blue-700",
    title: "text-blue-950",
    text: "text-blue-900",
  },

  amber: {
    container: "border-amber-200 bg-amber-50",
    label: "text-amber-700",
    title: "text-amber-950",
    text: "text-amber-900",
  },

  emerald: {
    container: "border-emerald-200 bg-emerald-50",
    label: "text-emerald-700",
    title: "text-emerald-950",
    text: "text-emerald-900",
  },

  rose: {
    container: "border-rose-200 bg-rose-50",
    label: "text-rose-700",
    title: "text-rose-950",
    text: "text-rose-900",
  },

  purple: {
    container: "border-purple-200 bg-purple-50",
    label: "text-purple-700",
    title: "text-purple-950",
    text: "text-purple-900",
  },

  slate: {
    container: "border-slate-200 bg-slate-50",
    label: "text-slate-600",
    title: "text-slate-950",
    text: "text-slate-700",
  },
};

type CalloutProps = {
  label: string;
  title: string;
  tone?: CardTone;
  children: ReactNode;
};

export default function Callout({
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
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${styles.label}`}
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