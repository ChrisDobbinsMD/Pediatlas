"use client";

import { useState } from "react";

export default function RpaLateralNeckComparison() {
  const [showAnnotations, setShowAnnotations] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-2">
        {/* NORMAL */}
        <div className="border-b border-slate-200 md:border-b-0 md:border-r">
          <div className="border-b border-slate-200 bg-emerald-50 px-4 py-3">
            <p className="font-semibold text-emerald-950">
              Normal lateral neck
            </p>
          </div>

          <div className="relative h-[420px] overflow-hidden bg-black">
            <img
              src="/images/normal-lateral.png"
              alt="Normal pediatric lateral neck radiograph"
              className="h-full w-full object-contain"
            />

            {showAnnotations && (
              <svg
                viewBox="0 0 1024 1024"
                className="pointer-events-none absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                {/* Annotation coordinates added after visual calibration */}
              </svg>
            )}
          </div>

          <div className="p-4 text-xs leading-5 text-slate-500">
            Normal pediatric lateral neck radiograph. Adapted from{" "}
            <a
              href="https://www.mdpi.com/2227-9067/9/10/1532"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              Kim Y et al., 2022
            </a>
            . CC BY 4.0.
          </div>
        </div>

        {/* RPA */}
        <div>
          <div className="border-b border-slate-200 bg-rose-50 px-4 py-3">
            <p className="font-semibold text-rose-950">
              Retropharyngeal abscess
            </p>
          </div>

          <div className="relative h-[420px] overflow-hidden bg-black">
            <img
              src="/images/rpa-lat-xray.png"
              alt="Lateral neck radiograph of a 14-month-old with retropharyngeal abscess"
              className="h-full w-full object-contain"
            />

            {showAnnotations && (
              <svg
                viewBox="0 0 1024 1024"
                className="pointer-events-none absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                {/* Annotation coordinates added after visual calibration */}
              </svg>
            )}
          </div>

          <div className="p-4 text-xs leading-5 text-slate-500">
            14-month-old with retropharyngeal abscess demonstrating marked
            retropharyngeal soft-tissue thickening and anterior displacement of
            the airway.{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5703170/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              LeRiger MM et al., 2017
            </a>
            . CC BY-NC 3.0.
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-950">
              Compare the prevertebral soft tissues
            </p>

            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
              Look anterior to the cervical vertebral bodies. Retropharyngeal
              infection can produce marked widening of the prevertebral soft
              tissues and anterior displacement of the airway.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAnnotations((current) => !current)}
            className="shrink-0 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800 transition hover:bg-sky-100"
          >
            {showAnnotations ? "Hide annotations" : "Show annotations"}
          </button>
        </div>

        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-6 text-amber-950">
            <strong>Technique matters:</strong> Neck flexion and expiratory
            imaging can falsely increase apparent prevertebral soft-tissue
            thickness. These images are from different patients and are not
            displayed at identical radiographic scale; compare the overall
            contour rather than making direct measurements between images.
          </p>
        </div>
      </div>
    </div>
  );
}
