"use client";

import { useState } from "react";

export default function PtaUltrasoundFigure() {
  const [showAnnotations, setShowAnnotations] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {/* HEADER */}
      <div className="border-b border-slate-200 px-5 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">
              Ultrasound of a Peritonsillar Abscess
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Ultrasound can help distinguish a drainable fluid collection from
              peritonsillar cellulitis when the physical examination is
              equivocal.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAnnotations((current) => !current)}
            aria-pressed={showAnnotations}
            className="shrink-0 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
          >
            {showAnnotations ? "Hide annotations" : "Show annotations"}
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="p-4">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl bg-black">
          <img
            src="/images/pta-us-new.png"
            alt="Ultrasound demonstrating a peritonsillar abscess with color Doppler imaging"
            className="block h-auto w-full"
          />

          {/* ANNOTATIONS */}
          {showAnnotations && (
            <svg
              viewBox="0 0 660 561"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {/* ============================== */}
              {/* PERITONSILLAR ABSCESS */}
              {/* ============================== */}

              <ellipse
                cx="275"
                cy="195"
                rx="175"
                ry="125"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="10 8"
              />

              <line
                x1="430"
                y1="148"
                x2="520"
                y2="92"
                stroke="white"
                strokeWidth="3"
              />

              <circle cx="435" cy="145" r="6" fill="white" />

              <rect
                x="455"
                y="54"
                width="180"
                height="42"
                rx="10"
                fill="rgba(15, 23, 42, 0.88)"
                stroke="white"
                strokeWidth="2"
              />

              <text
                x="545"
                y="81"
                textAnchor="middle"
                fill="white"
                fontSize="18"
                fontWeight="700"
              >
                Abscess collection
              </text>

              {/* ============================== */}
              {/* COLOR DOPPLER / VASCULAR FLOW */}
              {/* ============================== */}

              <line
                x1="344"
                y1="425"
                x2="480"
                y2="395"
                stroke="white"
                strokeWidth="3"
              />

              <circle cx="344" cy="425" r="6" fill="white" />

              <rect
                x="440"
                y="385"
                width="190"
                height="58"
                rx="10"
                fill="rgba(15, 23, 42, 0.88)"
                stroke="white"
                strokeWidth="2"
              />

              <text
                x="535"
                y="408"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="700"
              >
                Adjacent vascular flow
              </text>

              <text
                x="535"
                y="429"
                textAnchor="middle"
                fill="white"
                fontSize="13"
              >
                Color Doppler
              </text>
            </svg>
          )}
        </div>
      </div>

      {/* TEACHING POINT */}
      <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
        <p className="text-sm leading-6 text-slate-700">
          <span className="font-semibold text-slate-900">
            What to look for:
          </span>{" "}
          A discrete hypoechoic or complex fluid collection supports abscess
          formation. Color Doppler can help demonstrate vascular structures
          adjacent to the collection and may assist procedural planning.
        </p>

        <p className="mt-3 text-xs leading-5 text-slate-500">
          Source: Floyd J, Dahl B, Whited M, Kurzweil A.{" "}
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11166073/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
          >
            Peritonsillar Abscess and Post-aspiration Bleed Identified with
            Point-of-care Ultrasound Using Endocavitary Probe: A Case Report
          </a>
          . CPC-EM Capsule. 2024;8(2):129–132.{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
          >
            CC BY 4.0
          </a>
          . Image cropped and annotated by PediAtlas.
        </p>
      </div>
    </figure>
  );
}
