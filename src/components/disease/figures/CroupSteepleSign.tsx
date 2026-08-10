"use client";

import Image from "next/image";
import { useState } from "react";

export default function CroupSteepleSign() {
  const [showAnnotations, setShowAnnotations] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
      {/* ================= HEADER ================= */}

      <div className="border-b border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Neck radiograph
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-950">
              Steeple sign in croup
            </h3>

            <p className="mt-2 max-w-2xl leading-7 text-slate-600">
              An AP neck radiograph may demonstrate tapered narrowing of the
              subglottic airway. Imaging is not routinely required when the
              clinical presentation is classic.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setShowAnnotations((previous) => !previous)
            }
            className="shrink-0 rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-semibold text-sky-800 transition hover:bg-sky-100"
          >
            {showAnnotations
              ? "Hide annotations"
              : "Show annotations"}
          </button>
        </div>
      </div>

      {/* ================= IMAGE ================= */}

      <div className="relative bg-slate-950">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xl">
          <Image
            src="/images/CroupSteeple.jpg"
            alt="AP neck radiograph demonstrating subglottic narrowing in a child with croup."
            fill
            className="object-contain"
          />

          {/* ===============================================
                ANNOTATION LAYER
            ================================================ */}

            {showAnnotations && (
            <svg
             viewBox="0 0 1000 1333"
             className="pointer-events-none absolute inset-0 h-full w-full"
             aria-hidden="true"
            >
            {/* LEFT MARGIN OF STEEPLE SIGN */}
             <path
             d="
             M 465 500
             L 457 595
             L 447 635
             L 440 675
             L 435 710
             "
             fill="none"
             stroke="#ef4444"
             strokeWidth="5"
             strokeLinecap="round"
             strokeLinejoin="round"
            /> 

            {/* RIGHT MARGIN OF STEEPLE SIGN */}
             <path
             d="
             M 485 500
             L 495 595
             L 503 635
             L 505 675
             L 505 710
             "
             fill="none"
             stroke="#ef4444"
             strokeWidth="5"
             strokeLinecap="round"
             strokeLinejoin="round"
             />
            </svg>
           )}
        </div>
      </div>

      {/* ================= TEACHING TEXT ================= */}

      <div className="bg-white p-6">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              What to look for
            </p>

            <p className="mt-3 leading-7 text-slate-700">
              The normal upper tracheal air column becomes progressively
              narrower in the subglottic region, producing the classic
              tapered appearance known as the{" "}
              <strong>steeple sign</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 md:max-w-xs">
            <p className="font-bold text-amber-950">
              Imaging pearl
            </p>

            <p className="mt-2 text-sm leading-6 text-amber-900">
              The steeple sign is supportive rather than diagnostic. Its
              absence does not exclude croup, and routine neck imaging is
              unnecessary in a classic presentation.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-500">
          Image: Frank Gaillard, via Wikimedia Commons. Licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/3.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 hover:underline"
          >
            CC BY-SA 3.0
          </a>
          . PediAtlas annotations added.
        </div>
      </div>
    </div>
  );
}