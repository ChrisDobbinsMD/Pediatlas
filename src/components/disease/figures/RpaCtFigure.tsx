"use client";
import { useState } from "react";

export default function RpaCtFigure() {
  const [showAnnotations, setShowAnnotations] = useState(false);
  return (
    <div>
      <div className="flex items-start justify-between gap-4 bg-slate-50 px-5 py-4">
        <div>
          <p className="font-bold text-slate-950">
            Contrast-enhanced CT of the neck
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            CT better defines the location and extent of deep neck infection
            when complications or a drainable collection are suspected.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAnnotations((current) => !current)}
          className="shrink-0 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-800 transition hover:bg-sky-100"
        >
          {showAnnotations ? "Hide annotations" : "Show annotations"}
        </button>
      </div>

      <div className="relative overflow-hidden bg-black">
        <img
          src="/images/rpa-ct.png"
          alt="Sagittal and axial contrast-enhanced CT images demonstrating a retropharyngeal abscess"
          className="block h-auto w-full"
        />
        {showAnnotations && (
          <svg
            viewBox="0 0 1000 438"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {/* Sagittal — airway */}
            <line
              x1="115"
              y1="310"
              x2="230"
              y2="290"
              stroke="#38bdf8"
              strokeWidth="3"
            />
            <circle cx="230" cy="290" r="5" fill="#38bdf8" />
            <text
              x="105"
              y="305"
              fill="#38bdf8"
              fontSize="16"
              fontWeight="700"
              textAnchor="end"
            >
              Airway
            </text>

            {/* Sagittal — retropharyngeal collection */}
            <line
              x1="450"
              y1="200"
              x2="275"
              y2="275"
              stroke="#facc15"
              strokeWidth="3"
            />
            <circle cx="275" cy="275" r="5" fill="#facc15" />
            <text x="445" y="175" fill="#facc15" fontSize="15" fontWeight="700">
              Retropharyngeal
            </text>
            <text x="475" y="195" fill="#facc15" fontSize="15" fontWeight="700">
              collection
            </text>

            {/* Axial — retropharyngeal collection */}
            <line
              x1="895"
              y1="95"
              x2="750"
              y2="165"
              stroke="#facc15"
              strokeWidth="3"
            />
            <circle cx="750" cy="165" r="5" fill="#facc15" />
            <text
              x="950"
              y="50"
              fill="#facc15"
              fontSize="15"
              fontWeight="700"
              textAnchor="end"
            >
              Retropharyngeal
            </text>
            <text
              x="950"
              y="70"
              fill="#facc15"
              fontSize="15"
              fontWeight="700"
              textAnchor="end"
            >
              collection
            </text>
          </svg>
        )}
      </div>
    </div>
  );
}
