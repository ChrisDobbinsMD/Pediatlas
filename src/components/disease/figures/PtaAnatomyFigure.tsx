"use client";

import { useState } from "react";

type ViewState = "normal" | "pta" | "extension";

const images = {
  normal: {
    anterior: "/images/peritonsillar-abscess/pta-anterior-normal.png",
    axial: "/images/peritonsillar-abscess/pta-axial-normal.png",
  },
  pta: {
    anterior: "/images/peritonsillar-abscess/pta-anterior-abscess.png",
    axial: "/images/peritonsillar-abscess/pta-axial-abscess.png",
  },
  extension: {
    anterior: "/images/peritonsillar-abscess/pta-anterior-extension.png",
    axial: "/images/peritonsillar-abscess/pta-axial-extension.png",
  },
};

const tabs: { id: ViewState; label: string }[] = [
  { id: "normal", label: "Normal Anatomy" },
  { id: "pta", label: "Peritonsillar Abscess" },
  { id: "extension", label: "Deep Extension" },
];

export default function PtaAnatomyFigure() {
  const [viewState, setViewState] = useState<ViewState>("normal");

  const activeImages = images[viewState];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Tabs */}
      <div className="border-b border-slate-200 bg-slate-50 p-3">
        <div className="grid gap-2 sm:grid-cols-3">
          {tabs.map((tab) => {
            const active = viewState === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setViewState(tab.id)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-700 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Teaching header */}
      <div className="border-b border-slate-200 px-6 py-5">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
          PTA Anatomy &amp; Localization
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Compare what the disease looks like in the oropharynx with where the
          infection is located in axial anatomy.
        </p>
      </div>

      {/* Two-view figure */}
      <div className="grid lg:grid-cols-2">
        {/* Anterior */}
        <div className="border-b border-slate-200 lg:border-b-0 lg:border-r">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
            <p className="font-bold text-slate-950">
              Anterior Oropharyngeal View
            </p>
            <p className="mt-1 text-sm text-slate-600">
              What you see on physical examination
            </p>
          </div>

          <div className="bg-white">
            {/* Image + numbered anatomy markers */}
            <div className="flex h-[430px] items-center justify-center bg-white p-4">
              <div className="relative w-full">
                <img
                  src={activeImages.anterior}
                  alt={`Anterior oropharyngeal view — ${viewState}`}
                  className="h-full w-full object-contain"
                />
                {/* Deep extension anterior markers */}
                {viewState === "extension" && (
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    {[
                      { n: 1, x: 75, y: 40 },
                      { n: 2, x: 85, y: 40 },
                      { n: 3, x: 90, y: 35 },
                      { n: 4, x: 65, y: 55 },
                      { n: 5, x: 45, y: 55 },
                    ].map((marker) => (
                      <g key={`extension-anterior-${marker.n}`}>
                        <circle
                          cx={marker.x}
                          cy={marker.y}
                          r="2.6"
                          fill="#2563eb"
                          stroke="white"
                          strokeWidth="0.45"
                          vectorEffect="non-scaling-stroke"
                        />
                        <text
                          x={marker.x}
                          y={marker.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fontSize="3.1"
                          fontWeight="800"
                        >
                          {marker.n}
                        </text>
                      </g>
                    ))}
                  </svg>
                )}
                {/* PTA anterior pathology markers */}
                {viewState === "pta" && (
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    {/* 1 — Peritonsillar swelling / abscess */}
                    <g>
                      <circle
                        cx="70"
                        cy="40"
                        r="2.6"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="0.45"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="70"
                        y="40"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.1"
                        fontWeight="800"
                      >
                        1
                      </text>
                    </g>

                    {/* 2 — Uvular deviation */}
                    <g>
                      <circle
                        cx="44"
                        cy="40"
                        r="2.6"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="0.45"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="44"
                        y="40"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.1"
                        fontWeight="800"
                      >
                        2
                      </text>
                    </g>

                    {/* 3 — Medially displaced tonsil */}
                    <g>
                      <circle
                        cx="65"
                        cy="50"
                        r="2.6"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="0.45"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="65"
                        y="50"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.1"
                        fontWeight="800"
                      >
                        3
                      </text>
                    </g>

                    {/* 4 — Oropharyngeal asymmetry */}
                    <g>
                      <circle
                        cx="45"
                        cy="55"
                        r="2.6"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="0.45"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="45"
                        y="55"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.1"
                        fontWeight="800"
                      >
                        4
                      </text>
                    </g>
                  </svg>
                )}

                {/* Normal anatomy markers */}
                {viewState === "normal" && (
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    {/* 1 — Uvula */}
                    <g>
                      <circle
                        cx="50"
                        cy="43"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="50"
                        y="43"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        1
                      </text>
                    </g>

                    {/* 2 — Soft palate */}
                    <g>
                      <circle
                        cx="50"
                        cy="28"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="50"
                        y="28"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        2
                      </text>
                    </g>

                    {/* 3 — Palatine tonsil */}
                    <g>
                      <circle
                        cx="29"
                        cy="53"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="29"
                        y="53"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        3
                      </text>
                    </g>

                    {/* 4 — Anterior tonsillar pillar */}
                    <g>
                      <circle
                        cx="77"
                        cy="49"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="77"
                        y="49"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        4
                      </text>
                    </g>

                    {/* 5 — Posterior tonsillar pillar */}
                    <g>
                      <circle
                        cx="65"
                        cy="38"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="65"
                        y="38"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        5
                      </text>
                    </g>
                  </svg>
                )}
              </div>
            </div>

            {/* Normal anatomy legend */}
            {viewState === "normal" && (
              <div className="border-t border-slate-200 bg-slate-50 px-5 py-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  Normal landmarks
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      1
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Uvula
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      2
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Soft palate
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      3
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Palatine tonsil
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      4
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Anterior tonsillar pillar
                    </span>
                  </div>

                  <div className="flex items-center gap-3 sm:col-span-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      5
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Posterior tonsillar pillar
                    </span>
                  </div>
                </div>
              </div>
            )}
            {/* PTA anterior pathology legend */}
            {viewState === "pta" && (
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  PTA Examination Findings
                </p>

                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      1
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Peritonsillar swelling / abscess
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      2
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Uvular deviation
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      3
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Medially displaced tonsil
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      4
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Oropharyngeal asymmetry
                    </span>
                  </div>
                </div>
              </div>
            )}
            {/* Deep extension anterior legend */}
            {viewState === "extension" && (
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Deep Extension Findings
                </p>

                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {[
                    [1, "Peritonsillar abscess"],
                    [2, "Lateral extension"],
                    [3, "Deep neck extension"],
                    [4, "Medially displaced tonsil"],
                    [5, "Oropharyngeal airway"],
                  ].map(([number, label]) => (
                    <div key={number} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        {number}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Axial */}
        <div>
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
            <p className="font-bold text-slate-950">Axial View</p>
            <p className="mt-1 text-sm text-slate-600">
              Where the infection is anatomically
            </p>
          </div>

          <div className="bg-white">
            {/* Image + numbered axial anatomy markers */}
            <div className="flex h-[430px] items-center justify-center bg-white p-4">
              <div className="relative w-full">
                <img
                  src={activeImages.axial}
                  alt={`Axial oropharyngeal view — ${viewState}`}
                  className="h-full w-full object-contain"
                />
                {/* Deep extension axial markers */}
                {viewState === "extension" && (
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    {[
                      { n: 1, x: 66, y: 30 },
                      { n: 2, x: 80, y: 40 },
                      { n: 3, x: 87, y: 45 },
                      { n: 4, x: 60, y: 40 },
                      { n: 5, x: 45, y: 30 },
                    ].map((marker) => (
                      <g key={`extension-axial-${marker.n}`}>
                        <circle
                          cx={marker.x}
                          cy={marker.y}
                          r="2.6"
                          fill="#2563eb"
                          stroke="white"
                          strokeWidth="0.45"
                          vectorEffect="non-scaling-stroke"
                        />
                        <text
                          x={marker.x}
                          y={marker.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fontSize="3.1"
                          fontWeight="800"
                        >
                          {marker.n}
                        </text>
                      </g>
                    ))}
                  </svg>
                )}
                {/* PTA axial pathology markers */}
                {viewState === "pta" && (
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    {/* 1 — Peritonsillar abscess */}
                    <g>
                      <circle
                        cx="74"
                        cy="30"
                        r="2.6"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="0.45"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="74"
                        y="30"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.1"
                        fontWeight="800"
                      >
                        1
                      </text>
                    </g>

                    {/* 2 — Medially displaced tonsil */}
                    <g>
                      <circle
                        cx="66"
                        cy="37"
                        r="2.6"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="0.45"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="66"
                        y="37"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.1"
                        fontWeight="800"
                      >
                        2
                      </text>
                    </g>

                    {/* 3 — Oropharyngeal airway */}
                    <g>
                      <circle
                        cx="50"
                        cy="30"
                        r="2.6"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="0.45"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="50"
                        y="30"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.1"
                        fontWeight="800"
                      >
                        3
                      </text>
                    </g>

                    {/* 4 — Carotid region */}
                    <g>
                      <circle
                        cx="85"
                        cy="42"
                        r="2.6"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="0.45"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="85"
                        y="42"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.1"
                        fontWeight="800"
                      >
                        4
                      </text>
                    </g>
                  </svg>
                )}

                {/* Normal axial anatomy markers */}
                {viewState === "normal" && (
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    {/* 1 — Palatine tonsil */}
                    <g>
                      <circle
                        cx="30"
                        cy="38"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="30"
                        y="38"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        1
                      </text>
                    </g>

                    {/* 2 — Peritonsillar space */}
                    <g>
                      <circle
                        cx="28"
                        cy="23"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="28"
                        y="23"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        2
                      </text>
                    </g>

                    {/* 3 — Oropharyngeal airway */}
                    <g>
                      <circle
                        cx="50"
                        cy="33"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="50"
                        y="33"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        3
                      </text>
                    </g>

                    {/* 4 — Pharyngeal constrictor */}
                    <g>
                      <circle
                        cx="36"
                        cy="51"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="36"
                        y="51"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        4
                      </text>
                    </g>

                    {/* 5 — Carotid space */}
                    <g>
                      <circle
                        cx="17"
                        cy="43"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="17"
                        y="43"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        5
                      </text>
                    </g>

                    {/* 6 — Vertebral body */}
                    <g>
                      <circle
                        cx="50"
                        cy="64"
                        r="2.5"
                        fill="#1d4ed8"
                        stroke="white"
                        strokeWidth="0.7"
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x="50"
                        y="64"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="3.2"
                        fontWeight="800"
                      >
                        6
                      </text>
                    </g>
                  </svg>
                )}
              </div>
            </div>

            {/* Normal axial anatomy legend */}
            {viewState === "normal" && (
              <div className="border-t border-slate-200 bg-slate-50 px-5 py-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                  Normal axial landmarks
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {/* 1 */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      1
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Palatine tonsil
                    </span>
                  </div>

                  {/* 2 */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      2
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Peritonsillar space
                    </span>
                  </div>

                  {/* 3 */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      3
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Oropharyngeal airway
                    </span>
                  </div>

                  {/* 4 */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      4
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Pharyngeal constrictor
                    </span>
                  </div>

                  {/* 5 */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      5
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Carotid space
                    </span>
                  </div>

                  {/* 6 */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      6
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Vertebral body
                    </span>
                  </div>
                </div>
              </div>
            )}
            {/* PTA axial pathology legend */}
            {viewState === "pta" && (
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  PTA Axial Findings
                </p>

                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      1
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Peritonsillar abscess
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      2
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Medially displaced tonsil
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      3
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Oropharyngeal airway
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      4
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Carotid space / vascular bundle
                    </span>
                  </div>
                </div>
              </div>
            )}
            {/* Deep extension axial legend */}
            {viewState === "extension" && (
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Deep Extension Axial Findings
                </p>

                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {[
                    [1, "Peritonsillar abscess"],
                    [2, "Lateral pharyngeal extension"],
                    [3, "Carotid space / vascular bundle"],
                    [4, "Medially displaced tonsil"],
                    [5, "Oropharyngeal airway"],
                  ].map(([number, label]) => (
                    <div key={number} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        {number}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Orientation footer */}
      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-900">
            Axial orientation:
          </span>{" "}
          anterior is at the top of the image and posterior is at the bottom.
        </p>
      </div>
    </div>
  );
}
