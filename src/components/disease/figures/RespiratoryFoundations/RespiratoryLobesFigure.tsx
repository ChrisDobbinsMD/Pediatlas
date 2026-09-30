"use client";

import Image from "next/image";

/*
  ============================================================
  RESPIRATORY LOBES FIGURE
  ============================================================

  Image:
    /public/images/respiratory-lobes.png

  Coordinate system:
    viewBox="0 0 1000 1000"

  Anatomical orientation:
    Patient RIGHT = viewer LEFT
    Patient LEFT  = viewer RIGHT

  Turn SHOW_GRID on while adjusting annotation coordinates.
*/

const SHOW_GRID = false;

export default function RespiratoryLobesFigure() {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* =====================================================
          FIGURE
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-4xl aspect-[1/1] min-h-[500px] bg-white">
        <Image
          src="/images/respiratory-lobes.png"
          alt="Anatomical illustration of the right and left lungs showing the major pulmonary lobes and fissures."
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 900px"
        />

        <svg
          viewBox="0 0 1000 1000"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {/* =================================================
              ADJUSTMENT GRID
          ================================================== */}

          {SHOW_GRID && (
            <g>
              {/* Minor grid — every 50 */}
              {Array.from({ length: 19 }, (_, index) => {
                const value = (index + 1) * 50;

                return (
                  <g key={`minor-${value}`}>
                    <line
                      x1={value}
                      y1="0"
                      x2={value}
                      y2="1000"
                      stroke="#94a3b8"
                      strokeWidth="1"
                      opacity="0.22"
                    />

                    <line
                      x1="0"
                      y1={value}
                      x2="1000"
                      y2={value}
                      stroke="#94a3b8"
                      strokeWidth="1"
                      opacity="0.22"
                    />
                  </g>
                );
              })}

              {/* Major grid — every 100 */}
              {Array.from({ length: 9 }, (_, index) => {
                const value = (index + 1) * 100;

                return (
                  <g key={`major-${value}`}>
                    <line
                      x1={value}
                      y1="0"
                      x2={value}
                      y2="1000"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      opacity="0.38"
                    />

                    <line
                      x1="0"
                      y1={value}
                      x2="1000"
                      y2={value}
                      stroke="#64748b"
                      strokeWidth="1.5"
                      opacity="0.38"
                    />

                    <text
                      x={value + 6}
                      y="24"
                      fill="#475569"
                      fontSize="16"
                      fontWeight="700"
                    >
                      {value}
                    </text>

                    <text
                      x="8"
                      y={value - 7}
                      fill="#475569"
                      fontSize="16"
                      fontWeight="700"
                    >
                      {value}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* =================================================
              RIGHT LUNG
              Anatomical right = viewer left
          ================================================== */}

          {/* Right Upper Lobe */}
          <g>
            <polyline
              points="225,160 255,160 300,150"
              fill="none"
              stroke="#dc2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="300" cy="150" r="7" fill="#dc2626" />

            <rect
              x="35"
              y="125"
              width="190"
              height="70"
              rx="18"
              fill="white"
              stroke="#fca5a5"
              strokeWidth="3"
            />

            <text
              x="130"
              y="154"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              Right upper
            </text>

            <text
              x="130"
              y="179"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              lobe
            </text>
          </g>

          {/* Right Middle Lobe */}
          <g>
            <polyline
              points="200,435 255,435 300,500"
              fill="none"
              stroke="#dc2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="300" cy="500" r="7" fill="#dc2626" />

            <rect
              x="01"
              y="400"
              width="200"
              height="70"
              rx="18"
              fill="white"
              stroke="#fca5a5"
              strokeWidth="3"
            />

            <text
              x="100"
              y="429"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              Right middle
            </text>

            <text
              x="100"
              y="454"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              lobe
            </text>
          </g>

          {/* Right Lower Lobe */}
          <g>
            <polyline
              points="225,735 265,735 355,690"
              fill="none"
              stroke="#dc2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="355" cy="690" r="7" fill="#dc2626" />

            <rect
              x="30"
              y="700"
              width="195"
              height="70"
              rx="18"
              fill="white"
              stroke="#fca5a5"
              strokeWidth="3"
            />

            <text
              x="127"
              y="729"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              Right lower
            </text>

            <text
              x="127"
              y="754"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              lobe
            </text>
          </g>

          {/* =================================================
              LEFT LUNG
              Anatomical left = viewer right
          ================================================== */}

          {/* Left Upper Lobe */}
          <g>
            <polyline
              points="775,160 745,160 700,150"
              fill="none"
              stroke="#dc2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="700" cy="150" r="7" fill="#dc2626" />

            <rect
              x="775"
              y="125"
              width="190"
              height="70"
              rx="18"
              fill="white"
              stroke="#fca5a5"
              strokeWidth="3"
            />

            <text
              x="870"
              y="154"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              Left upper
            </text>

            <text
              x="870"
              y="179"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              lobe
            </text>
          </g>

          {/* Lingula */}
          <g>
            <polyline
              points="850,445 800,445 800,550 850,575"
              fill="none"
              stroke="#dc2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="850" cy="575" r="7" fill="#dc2626" />

            <rect
              x="832"
              y="410"
              width="165"
              height="70"
              rx="18"
              fill="white"
              stroke="#fca5a5"
              strokeWidth="3"
            />

            <text
              x="912"
              y="452"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              Lingula
            </text>
          </g>

          {/* Left Lower Lobe */}
          <g>
            <polyline
              points="775,850 735,850 660,690"
              fill="none"
              stroke="#dc2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="660" cy="690" r="7" fill="#dc2626" />

            <rect
              x="775"
              y="815"
              width="190"
              height="70"
              rx="18"
              fill="white"
              stroke="#fca5a5"
              strokeWidth="3"
            />

            <text
              x="870"
              y="847"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              Left lower
            </text>

            <text
              x="870"
              y="870"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="20"
              fontWeight="700"
            >
              lobe
            </text>
          </g>

          {/* =================================================
              FISSURES

              Deliberately smaller and quieter than the lobe
              annotations. These identify boundaries rather
              than competing with the primary lobe labels.
          ================================================== */}

          {/* Right Horizontal Fissure */}
          <g>
            <line
              x1="215"
              y1="330"
              x2="285"
              y2="350"
              stroke="#d97706"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle cx="285" cy="350" r="5" fill="#d97706" />

            <rect
              x="70"
              y="305"
              width="150"
              height="42"
              rx="12"
              fill="#fffbeb"
              stroke="#fbbf24"
              strokeWidth="2"
            />

            <text
              x="145"
              y="332"
              textAnchor="middle"
              fill="#92400e"
              fontSize="15"
              fontWeight="700"
            >
              Horizontal fissure
            </text>
          </g>

          {/* Right Oblique Fissure */}
          <g>
            <line
              x1="230"
              y1="595"
              x2="300"
              y2="564"
              stroke="#d97706"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle cx="300" cy="564" r="5" fill="#d97706" />

            <rect
              x="85"
              y="574"
              width="150"
              height="42"
              rx="12"
              fill="#fffbeb"
              stroke="#fbbf24"
              strokeWidth="2"
            />

            <text
              x="160"
              y="601"
              textAnchor="middle"
              fill="#92400e"
              fontSize="15"
              fontWeight="700"
            >
              Oblique fissure
            </text>
          </g>

          {/* Left Oblique Fissure */}
          <g>
            <line
              x1="848"
              y1="725"
              x2="800"
              y2="600"
              stroke="#d97706"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle cx="800" cy="600" r="5" fill="#d97706" />

            <rect
              x="848"
              y="700"
              width="150"
              height="42"
              rx="12"
              fill="#fffbeb"
              stroke="#fbbf24"
              strokeWidth="2"
            />

            <text
              x="922"
              y="725"
              textAnchor="middle"
              fill="#92400e"
              fontSize="15"
              fontWeight="700"
            >
              Oblique fissure
            </text>
          </g>
        </svg>
      </div>

      {/* =====================================================
          CAPTION
      ====================================================== */}

      <figcaption className="border-t border-slate-200 bg-slate-50 px-6 py-4">
        <p className="text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-800">
            Lungs, lobes & fissures.
          </span>{" "}
          The right lung contains upper, middle, and lower lobes. The left lung
          contains upper and lower lobes, with the lingula forming part of the
          left upper lobe.
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Base anatomical illustration: public-domain image via Wikimedia
          Commons. Annotations added by PediAtlas.
        </p>
      </figcaption>
    </figure>
  );
}
