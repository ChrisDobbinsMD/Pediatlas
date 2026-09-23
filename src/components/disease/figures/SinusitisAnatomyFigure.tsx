"use client";

import { useState } from "react";

export default function SinusitisAnatomyFigure() {
  const [showAnnotations, setShowAnnotations] = useState(false);

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="relative mx-auto w-full max-w-5xl">
          <img
            src="/images/sagittal-frontal-sinus-2.png"
            alt="Anterior and lateral anatomy of the paranasal sinuses"
            className="block h-auto w-full"
          />

          <svg
            viewBox="0 0 1536 1024"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="sinusMinorGrid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="1"
                  opacity="0.2"
                />
              </pattern>

              <pattern
                id="sinusMajorGrid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <rect width="100" height="100" fill="url(#sinusMinorGrid)" />
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="2"
                  opacity="0.35"
                />
              </pattern>
            </defs>

            {showAnnotations && (
              <g>
                {/* =========================================
                    FRONTAL SINUS
                ========================================== */}

                {/* Left eye */}
                <circle
                  cx="325"
                  cy="450"
                  r="13"
                  fill="white"
                  stroke="#e11d48"
                  strokeWidth="7"
                />
                <circle cx="325" cy="450" r="5" fill="#e11d48" />

                {/* Right eye */}
                <circle
                  cx="1400"
                  cy="390"
                  r="13"
                  fill="white"
                  stroke="#e11d48"
                  strokeWidth="7"
                />
                <circle cx="1400" cy="390" r="5" fill="#e11d48" />

                {/* Leaders */}
                <path
                  d="M 325 450 L 650 300 L 690 300"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 1400 390 L 890 300 L 850 300"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Tag */}
                <rect
                  x="690"
                  y="265"
                  width="160"
                  height="70"
                  rx="18"
                  fill="white"
                  fillOpacity="0.96"
                  stroke="#e11d48"
                  strokeWidth="4"
                />
                <text
                  x="770"
                  y="309"
                  textAnchor="middle"
                  fontSize="24"
                  fontWeight="700"
                  fill="#0f172a"
                >
                  Frontal sinus
                </text>

                {/* =========================================
                    ETHMOID AIR CELLS
                ========================================== */}

                {/* Left eye */}
                <circle
                  cx="350"
                  cy="500"
                  r="8"
                  fill="white"
                  stroke="#65a30d"
                  strokeWidth="7"
                />
                <circle cx="350" cy="500" r="5" fill="#65a30d" />

                {/* Superior ethmoid target */}
                <circle
                  cx="1360"
                  cy="440"
                  r="9"
                  fill="white"
                  stroke="#65a30d"
                  strokeWidth="7"
                />
                <circle cx="1360" cy="440" r="5" fill="#65a30d" />

                {/* Inferior ethmoid target */}
                <circle
                  cx="1375"
                  cy="540"
                  r="9"
                  fill="white"
                  stroke="#65a30d"
                  strokeWidth="7"
                />
                <circle cx="1375" cy="540" r="5" fill="#65a30d" />

                {/* Two branches */}
                <path
                  d="M 1360 440 L 1260 475"
                  fill="none"
                  stroke="#65a30d"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M 1375 540 L 1260 475"
                  fill="none"
                  stroke="#65a30d"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Single line from junction to label */}
                <path
                  d="M 1260 475 L 890 410 L 850 410"
                  fill="none"
                  stroke="#65a30d"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Leaders */}
                <path
                  d="M 350 500 L 650 410 L 690 410"
                  fill="none"
                  stroke="#65a30d"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Tag */}
                <rect
                  x="675"
                  y="375"
                  width="190"
                  height="70"
                  rx="18"
                  fill="white"
                  fillOpacity="0.96"
                  stroke="#65a30d"
                  strokeWidth="4"
                />
                <text
                  x="770"
                  y="419"
                  textAnchor="middle"
                  fontSize="23"
                  fontWeight="700"
                  fill="#0f172a"
                >
                  Ethmoid cells
                </text>

                {/* =========================================
                    SPHENOID SINUS
                ========================================== */}

                {/* Right eye */}
                <circle
                  cx="1175"
                  cy="500"
                  r="13"
                  fill="white"
                  stroke="#ca8a04"
                  strokeWidth="7"
                />
                <circle cx="1175" cy="500" r="5" fill="#ca8a04" />

                {/* Leaders */}

                <path
                  d="M 1175 500 L 890 520 L 850 520"
                  fill="none"
                  stroke="#ca8a04"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Tag */}
                <rect
                  x="680"
                  y="485"
                  width="180"
                  height="70"
                  rx="18"
                  fill="white"
                  fillOpacity="0.96"
                  stroke="#ca8a04"
                  strokeWidth="4"
                />
                <text
                  x="770"
                  y="529"
                  textAnchor="middle"
                  fontSize="23"
                  fontWeight="700"
                  fill="#0f172a"
                >
                  Sphenoid sinus
                </text>

                {/* =========================================
                    MAXILLARY SINUS
                ========================================== */}

                {/* Left maxillary sinus */}
                <circle
                  cx="250"
                  cy="610"
                  r="13"
                  fill="white"
                  stroke="#ea580c"
                  strokeWidth="7"
                />
                <circle cx="250" cy="610" r="5" fill="#ea580c" />

                {/* Right maxillary sinus */}
                <circle
                  cx="400"
                  cy="610"
                  r="13"
                  fill="white"
                  stroke="#ea580c"
                  strokeWidth="7"
                />
                <circle cx="400" cy="610" r="5" fill="#ea580c" />

                {/* Both sides converge near lips */}
                <path
                  d="M 250 610 L 335 690"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M 400 610 L 335 690"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Single line from junction to label */}
                <path
                  d="M 335 690 L 650 630 L 690 630"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Right eye */}
                <circle
                  cx="1325"
                  cy="600"
                  r="13"
                  fill="white"
                  stroke="#ea580c"
                  strokeWidth="7"
                />
                <circle cx="1325" cy="600" r="5" fill="#ea580c" />

                {/* Leaders */}

                <path
                  d="M 1325 600 L 890 630 L 850 630"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Tag */}
                <rect
                  x="675"
                  y="595"
                  width="190"
                  height="70"
                  rx="18"
                  fill="white"
                  fillOpacity="0.96"
                  stroke="#ea580c"
                  strokeWidth="4"
                />
                <text
                  x="770"
                  y="639"
                  textAnchor="middle"
                  fontSize="23"
                  fontWeight="700"
                  fill="#0f172a"
                >
                  Maxillary sinus
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setShowAnnotations((current) => !current)}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          {showAnnotations ? "Hide annotations" : "Show annotations"}
        </button>
      </div>

      <div className="space-y-1.5 text-center text-xs text-slate-500">
        <p>
          Paranasal sinus anatomy shown in anterior and lateral views. The
          frontal, ethmoid, sphenoid, and maxillary sinuses are highlighted to
          demonstrate their relative location and relationships to surrounding
          structures.
        </p>

        <p className="text-[11px] text-slate-400">
          Adapted from{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:724_Paranasal_Sinuses.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-slate-300 underline-offset-2 transition hover:text-slate-600"
          >
            OpenStax College, Anatomy &amp; Physiology
          </a>
          , licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-slate-300 underline-offset-2 transition hover:text-slate-600"
          >
            CC BY 3.0
          </a>
          . Modified for PediAtlas.
        </p>
      </div>
    </div>
  );
}
