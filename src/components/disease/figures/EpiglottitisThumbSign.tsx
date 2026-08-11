"use client";

import Image from "next/image";
import { useState } from "react";

export default function EpiglottitisThumbSign() {
  const [showAnnotations, setShowAnnotations] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Lateral Neck Radiograph
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-950">
            Thumb sign in epiglottitis
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            The swollen epiglottis produces the characteristic rounded
            thumb-like contour.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAnnotations((current) => !current)}
          className="shrink-0 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800 hover:bg-sky-100"
        >
          {showAnnotations ? "Hide annotations" : "Show annotations"}
        </button>
      </div>

      <div className="flex w-full justify-center">
        <div className="relative w-fit">
          <Image
            src="/images/epiglottitis3.png"
            alt="Lateral neck radiograph demonstrating epiglottitis"
            width={1000}
            height={1333}
            className="h-auto max-h-[65vh] w-auto object-contain"
          />

          {showAnnotations && (
            <svg
              viewBox="0 0 1000 1333"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {/* EPIGLOTTIS OUTLINE */}

              <path
                d="
  M 420 710

  Q 465 700 500 710
  Q 535 715 560 740
  Q 575 785 575 835
  Q 575 870 560 900
  Q 530 915 500 925
  Q 470 940 450 950
"
                fill="none"
                stroke="#ef4444"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-500">
        <p>
          Image source:{" "}
          <a
            href="https://med.libretexts.org/Bookshelves/Allied_Health/Undergraduate_Diagnostic_Imaging_Fundamentals_(Burbridge_and_Mah)/12%3A_Head_and_Neck/12.05%3A_Epiglottitis__Child"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-700 hover:text-blue-900"
          >
            Burbridge &amp; Mah, Undergraduate Diagnostic Imaging Fundamentals
          </a>
          . Lateral neck radiograph by Dr. Brent Burbridge, MD, FRCPC,
          University Medical Imaging Consultants, College of Medicine,
          University of Saskatchewan. Licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-700 hover:text-blue-900"
          >
            CC BY-NC-SA 4.0
          </a>
          .
        </p>

        <p className="mt-2">
          PediAtlas annotation overlay added for educational purposes.
        </p>
      </div>
    </div>
  );
}
