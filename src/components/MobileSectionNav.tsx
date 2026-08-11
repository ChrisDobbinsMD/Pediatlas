"use client";

import { useEffect, useState } from "react";

export type MobileSection = {
  id: string;
  label: string;
};

type MobileSectionNavProps = {
  sections: MobileSection[];
  title?: string;
};

export default function MobileSectionNav({
  sections,
  title = "On this page",
}: MobileSectionNavProps) {
  const [open, setOpen] = useState(false);

  // Prevent the page behind the menu from scrolling while open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Allow Escape key to close the menu.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function goToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    console.warn(`Section "${id}" was not found.`);
    return;
  }

  setOpen(false);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

  function goToTop() {
  setOpen(false);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
}

  return (
    <>
      {/* =================================================
          MOBILE FLOATING BUTTON
      ================================================= */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
    fixed left-4 z-40
    bottom-[calc(1rem+env(safe-area-inset-bottom))]
    flex items-center gap-2
    rounded-full
    border border-slate-200
    bg-white/95
    px-4 py-3
    text-sm font-semibold text-slate-800
    shadow-lg
    backdrop-blur
    transition
    hover:bg-slate-50
    active:scale-95
    md:hidden
  "
        aria-label="Open page sections"
        aria-expanded={open}
      >
        <span className="text-lg leading-none">☰</span>
        <span>Sections</span>
      </button>

      {/* =================================================
          MOBILE SECTION MENU
      ================================================= */}

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Darkened backdrop */}

          <button
            type="button"
            aria-label="Close section navigation"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px]"
          />

          {/* Bottom sheet */}

          <div
            className="
              absolute inset-x-0 bottom-0
              max-h-[80vh]
              overflow-hidden
              rounded-t-3xl
              border-t border-slate-200
              bg-white
              shadow-2xl
            "
          >
            {/* Drag indicator */}

            <div className="flex justify-center pt-3">
              <div className="h-1.5 w-12 rounded-full bg-slate-300" />
            </div>

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-100 px-5 pb-4 pt-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Navigate
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  {title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-slate-100
                  text-xl text-slate-600
                  transition
                  hover:bg-slate-200
                "
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Section links */}

            <nav className="max-h-[60vh] overflow-y-auto px-3 py-3">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(section.id)}
                  className="
                    flex w-full
                    items-center gap-3
                    rounded-xl
                    px-3 py-3
                    text-left
                    transition
                    hover:bg-slate-50
                    active:bg-slate-100
                  "
                >
                  <span
                    className="
                      flex h-7 w-7
                      shrink-0
                      items-center justify-center
                      rounded-full
                      bg-sky-50
                      text-xs font-bold
                      text-sky-700
                    "
                  >
                    {index + 1}
                  </span>

                  <span className="font-medium text-slate-800">
                    {section.label}
                  </span>

                  <span className="ml-auto text-slate-400">›</span>
                </button>
              ))}

              {/* Back to top */}

              <div className="my-2 border-t border-slate-100" />

              <button
                type="button"
                onClick={goToTop}
                className="
                  flex w-full
                  items-center gap-3
                  rounded-xl
                  px-3 py-3
                  text-left
                  font-medium text-slate-600
                  transition
                  hover:bg-slate-50
                  active:bg-slate-100
                "
              >
                <span
                  className="
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full
                    bg-slate-100
                    text-sm
                  "
                >
                  ↑
                </span>
                Back to top
              </button>
            </nav>

            {/* Safe-area spacing for iPhones */}

            <div className="h-[max(1rem,env(safe-area-inset-bottom))]" />
          </div>
        </div>
      )}
    </>
  );
}
