"use client";

import { useState } from "react";

export default function ViralUriFigure() {
  const [showAnnotations, setShowAnnotations] = useState(false);

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="relative mx-auto w-full max-w-3xl">
          <img
            src="/images/viral-uri-anatomy.png"
            alt="Sagittal anatomy of the pediatric upper airway"
            className="block h-auto w-full"
          />

          <svg
            viewBox="0 0 1080 860"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {/* =========================================================
                ANNOTATIONS
            ========================================================= */}
            {showAnnotations && (
              <g>
                {/* -----------------------------------------------------
                    1. NASAL CAVITY
                ----------------------------------------------------- */}
                <g>
                  <ellipse
                    cx="720"
                    cy="265"
                    rx="150"
                    ry="95"
                    fill="#38bdf8"
                    fillOpacity="0.10"
                    stroke="#0284c7"
                    strokeWidth="4"
                    strokeDasharray="10 7"
                  />

                  <line
                    x1="850"
                    y1="220"
                    x2="900"
                    y2="200"
                    stroke="#0284c7"
                    strokeWidth="4"
                  />

                  <rect
                    x="901"
                    y="168"
                    width="170"
                    height="58"
                    rx="16"
                    fill="white"
                    fillOpacity="0.95"
                    stroke="#0284c7"
                    strokeWidth="3"
                  />

                  <text
                    x="988"
                    y="203"
                    textAnchor="middle"
                    fontSize="23"
                    fontWeight="700"
                    fill="#0f172a"
                  >
                    Nasal cavity
                  </text>
                </g>

                {/* -----------------------------------------------------
                    2. PARANASAL SINUSES
                ----------------------------------------------------- */}
                <g>
                  {/* Frontal sinus */}
                  <ellipse
                    cx="785"
                    cy="140"
                    rx="42"
                    ry="28"
                    fill="#f59e0b"
                    fillOpacity="0.15"
                    stroke="#d97706"
                    strokeWidth="4"
                  />

                  {/* Sphenoid sinus */}
                  <ellipse
                    cx="515"
                    cy="225"
                    rx="62"
                    ry="38"
                    fill="#f59e0b"
                    fillOpacity="0.15"
                    stroke="#d97706"
                    strokeWidth="4"
                  />

                  <line
                    x1="550"
                    y1="75"
                    x2="518"
                    y2="185"
                    stroke="#d97706"
                    strokeWidth="4"
                  />
                  <line
                    x1="775"
                    y1="114"
                    x2="700"
                    y2="75"
                    stroke="#d97706"
                    strokeWidth="4"
                  />

                  <rect
                    x="515"
                    y="20"
                    width="205"
                    height="58"
                    rx="16"
                    fill="white"
                    fillOpacity="0.95"
                    stroke="#d97706"
                    strokeWidth="3"
                  />

                  <text
                    x="618"
                    y="57"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#0f172a"
                  >
                    Paranasal sinuses
                  </text>
                </g>

                {/* -----------------------------------------------------
                    3. NASOPHARYNX
                ----------------------------------------------------- */}
                <g>
                  <ellipse
                    cx="525"
                    cy="325"
                    rx="70"
                    ry="75"
                    fill="#10b981"
                    fillOpacity="0.10"
                    stroke="#10b981"
                    strokeWidth="4"
                    strokeDasharray="10 7"
                  />

                  <line
                    x1="449"
                    y1="325"
                    x2="305"
                    y2="355"
                    stroke="#10b981"
                    strokeWidth="4"
                  />

                  <rect
                    x="105"
                    y="325"
                    width="205"
                    height="58"
                    rx="16"
                    fill="white"
                    fillOpacity="0.95"
                    stroke="#10b981"
                    strokeWidth="3"
                  />

                  <text
                    x="207"
                    y="361"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#0f172a"
                  >
                    Nasopharynx
                  </text>
                </g>

                {/* -----------------------------------------------------
                    4. AUDITORY / EUSTACHIAN TUBE OPENING
                ----------------------------------------------------- */}
                <g>
                  <circle
                    cx="555"
                    cy="300"
                    r="20"
                    fill="#ef4444"
                    fillOpacity="0.15"
                    stroke="#f43f5e"
                    strokeWidth="5"
                  />

                  <line
                    x1="533"
                    y1="300"
                    x2="385"
                    y2="225"
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="4"
                  />

                  <rect
                    x="150"
                    y="150"
                    width="245"
                    height="76"
                    rx="16"
                    fill="white"
                    fillOpacity="0.96"
                    stroke="#f43f5e"
                    strokeWidth="3"
                  />

                  <text
                    x="273"
                    y="180"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="700"
                    fill="#0f172a"
                  >
                    Auditory tube
                  </text>

                  <text
                    x="273"
                    y="205"
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="600"
                    fill="#475569"
                  >
                    opening
                  </text>
                </g>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setShowAnnotations((current) => !current)}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          {showAnnotations ? "Hide annotations" : "Show annotations"}
        </button>
      </div>

      {/* CAPTION + ATTRIBUTION */}
      <div className="space-y-1.5 text-center text-xs text-slate-500">
        <p>Sagittal anatomy of the upper airway and adjacent structures.</p>

        <p>
          Adapted by PediAtlas from{" "}
          <a
            href="https://openstax.org/books/anatomy-and-physiology/pages/1-introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition hover:text-slate-700"
          >
            OpenStax, <span className="italic">Anatomy &amp; Physiology</span>
          </a>
          , licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition hover:text-slate-700"
          >
            CC BY 4.0
          </a>
          . PediAtlas annotations and modifications added.
        </p>
      </div>
    </div>
  );
}
