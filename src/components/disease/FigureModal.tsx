"use client";

import { ReactNode, useEffect, useState } from "react";

type FigureModalProps = {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
};

export default function FigureModal({
  trigger,
  title,
  children,
}: FigureModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
      >
        {trigger}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={`Close ${title}`}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-bold text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-slate-950"
            >
              ×
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
}