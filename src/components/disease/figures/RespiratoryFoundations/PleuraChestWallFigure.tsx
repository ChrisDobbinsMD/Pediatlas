"use client";

import Image from "next/image";
import { useState } from "react";

const SHOW_GRID = true;

type Structure =
  | "lung"
  | "visceral-pleura"
  | "pleural-space"
  | "parietal-pleura"
  | "chest-wall";

export default function PleuraChestWallFigure() {
  const [activeStructure, setActiveStructure] = useState<Structure | null>(
    null,
  );

  const isActive = (structure: Structure) => activeStructure === structure;

  const activate = (structure: Structure) => {
    setActiveStructure(structure);
  };

  const deactivate = () => {
    setActiveStructure(null);
  };

  const toggle = (structure: Structure) => {
    setActiveStructure((current) => (current === structure ? null : structure));
  };

  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* =====================================================
          FIGURE
      ====================================================== */}

      <div className="relative mx-auto aspect-[700/550] w-full max-w-5xl bg-white">
        <Image
          src="/images/pleura-chest-wall-1.png"
          alt="Transverse anatomical section of the thorax demonstrating the lungs, pleural layers, pleural space, and chest wall."
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 1000px"
        />

        <svg
          viewBox="0 0 1000 786"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {/* =================================================
              COORDINATE GRID
              Turn off once annotations are finalized.
          ================================================== */}

          {SHOW_GRID && (
            <g className="pointer-events-none">
              {/* Vertical grid */}
              {Array.from({ length: 19 }, (_, index) => {
                const value = (index + 1) * 50;

                return (
                  <line
                    key={`vertical-${value}`}
                    x1={value}
                    y1="0"
                    x2={value}
                    y2="786"
                    stroke="#64748b"
                    strokeWidth={value % 100 === 0 ? "1.5" : "1"}
                    opacity={value % 100 === 0 ? "0.35" : "0.18"}
                  />
                );
              })}

              {/* Horizontal grid */}
              {Array.from({ length: 15 }, (_, index) => {
                const value = (index + 1) * 50;

                return (
                  <line
                    key={`horizontal-${value}`}
                    x1="0"
                    y1={value}
                    x2="1000"
                    y2={value}
                    stroke="#64748b"
                    strokeWidth={value % 100 === 0 ? "1.5" : "1"}
                    opacity={value % 100 === 0 ? "0.35" : "0.18"}
                  />
                );
              })}

              {/* X-axis coordinates */}
              {Array.from({ length: 9 }, (_, index) => {
                const value = (index + 1) * 100;

                return (
                  <text
                    key={`x-label-${value}`}
                    x={value + 6}
                    y="24"
                    fill="#475569"
                    fontSize="16"
                    fontWeight="700"
                  >
                    {value}
                  </text>
                );
              })}

              {/* Y-axis coordinates */}
              {Array.from({ length: 7 }, (_, index) => {
                const value = (index + 1) * 100;

                return (
                  <text
                    key={`y-label-${value}`}
                    x="8"
                    y={value - 7}
                    fill="#475569"
                    fontSize="16"
                    fontWeight="700"
                  >
                    {value}
                  </text>
                );
              })}
            </g>
          )}

          {/* =================================================
              INTERACTIVE ANATOMY OVERLAYS

              These are deliberately approximate first-pass
              paths. We will refine them using the grid.
          ================================================== */}

          {/* -------------------------------------------------
              LUNGS
          -------------------------------------------------- */}

          <g
            onMouseEnter={() => activate("lung")}
            onMouseLeave={deactivate}
            onClick={() => toggle("lung")}
            className="cursor-pointer"
          >
            {/* Anatomical right lung — viewer left */}
            <path
              d="
                M 105 245
                C 125 155, 215 100, 330 105
                C 385 110, 405 155, 410 225
                C 420 290, 390 355, 365 425
                C 345 500, 360 590, 315 660
                C 270 715, 175 700, 120 630
                C 75 565, 65 475, 70 390
                C 75 325, 85 275, 105 245
                Z
              "
              fill="#38bdf8"
              fillOpacity={isActive("lung") ? "0.28" : "0"}
              stroke="#0284c7"
              strokeWidth={isActive("lung") ? "4" : "0"}
              className="transition-all duration-200"
            />

            {/* Anatomical left lung — viewer right */}
            <path
              d="
                M 895 245
                C 875 155, 785 100, 670 105
                C 615 110, 595 155, 590 225
                C 580 290, 610 355, 635 425
                C 655 500, 640 590, 685 660
                C 730 715, 825 700, 880 630
                C 925 565, 935 475, 930 390
                C 925 325, 915 275, 895 245
                Z
              "
              fill="#38bdf8"
              fillOpacity={isActive("lung") ? "0.28" : "0"}
              stroke="#0284c7"
              strokeWidth={isActive("lung") ? "4" : "0"}
              className="transition-all duration-200"
            />
          </g>

          {/* -------------------------------------------------
              VISCERAL PLEURA

              First-pass thin paths following the outer lung
              surfaces.
          -------------------------------------------------- */}

          <g
            onMouseEnter={() => activate("visceral-pleura")}
            onMouseLeave={deactivate}
            onClick={() => toggle("visceral-pleura")}
            className="cursor-pointer"
          >
            <path
              d="
                M 112 240
                C 130 160, 215 115, 325 115
                C 385 120, 400 175, 400 230
                C 405 310, 370 390, 360 455
                C 350 535, 350 610, 305 655
                C 250 700, 170 680, 125 620
                C 85 560, 78 470, 82 385
                C 85 320, 95 270, 112 240
              "
              fill="none"
              stroke="#7c3aed"
              strokeWidth={isActive("visceral-pleura") ? "10" : "0"}
              strokeLinecap="round"
              opacity={isActive("visceral-pleura") ? "0.75" : "0"}
              className="transition-all duration-200"
            />

            <path
              d="
                M 888 240
                C 870 160, 785 115, 675 115
                C 615 120, 600 175, 600 230
                C 595 310, 630 390, 640 455
                C 650 535, 650 610, 695 655
                C 750 700, 830 680, 875 620
                C 915 560, 922 470, 918 385
                C 915 320, 905 270, 888 240
              "
              fill="none"
              stroke="#7c3aed"
              strokeWidth={isActive("visceral-pleura") ? "10" : "0"}
              strokeLinecap="round"
              opacity={isActive("visceral-pleura") ? "0.75" : "0"}
              className="transition-all duration-200"
            />

            {/* Invisible wider hit areas */}
            <path
              d="
                M 112 240
                C 130 160, 215 115, 325 115
                C 385 120, 400 175, 400 230
                C 405 310, 370 390, 360 455
                C 350 535, 350 610, 305 655
                C 250 700, 170 680, 125 620
                C 85 560, 78 470, 82 385
                C 85 320, 95 270, 112 240
              "
              fill="none"
              stroke="transparent"
              strokeWidth="30"
            />

            <path
              d="
                M 888 240
                C 870 160, 785 115, 675 115
                C 615 120, 600 175, 600 230
                C 595 310, 630 390, 640 455
                C 650 535, 650 610, 695 655
                C 750 700, 830 680, 875 620
                C 915 560, 922 470, 918 385
                C 915 320, 905 270, 888 240
              "
              fill="none"
              stroke="transparent"
              strokeWidth="30"
            />
          </g>

          {/* -------------------------------------------------
              PLEURAL SPACE

              Highlighted as bands immediately outside the
              visceral pleural surfaces.
          -------------------------------------------------- */}

          <g
            onMouseEnter={() => activate("pleural-space")}
            onMouseLeave={deactivate}
            onClick={() => toggle("pleural-space")}
            className="cursor-pointer"
          >
            <path
              d="
                M 105 235
                C 125 145, 215 95, 335 100
                C 400 110, 420 170, 420 235
                C 420 315, 390 400, 375 465
                C 365 545, 365 625, 315 675
                C 255 720, 160 700, 110 630
                C 65 565, 60 470, 65 380
                C 70 310, 85 260, 105 235
              "
              fill="none"
              stroke="#f59e0b"
              strokeWidth={isActive("pleural-space") ? "18" : "0"}
              strokeLinecap="round"
              opacity={isActive("pleural-space") ? "0.6" : "0"}
              className="transition-all duration-200"
            />

            <path
              d="
                M 895 235
                C 875 145, 785 95, 665 100
                C 600 110, 580 170, 580 235
                C 580 315, 610 400, 625 465
                C 635 545, 635 625, 685 675
                C 745 720, 840 700, 890 630
                C 935 565, 940 470, 935 380
                C 930 310, 915 260, 895 235
              "
              fill="none"
              stroke="#f59e0b"
              strokeWidth={isActive("pleural-space") ? "18" : "0"}
              strokeLinecap="round"
              opacity={isActive("pleural-space") ? "0.6" : "0"}
              className="transition-all duration-200"
            />

            {/* Invisible hit areas */}
            <path
              d="
                M 105 235
                C 125 145, 215 95, 335 100
                C 400 110, 420 170, 420 235
                C 420 315, 390 400, 375 465
                C 365 545, 365 625, 315 675
                C 255 720, 160 700, 110 630
                C 65 565, 60 470, 65 380
                C 70 310, 85 260, 105 235
              "
              fill="none"
              stroke="transparent"
              strokeWidth="36"
            />

            <path
              d="
                M 895 235
                C 875 145, 785 95, 665 100
                C 600 110, 580 170, 580 235
                C 580 315, 610 400, 625 465
                C 635 545, 635 625, 685 675
                C 745 720, 840 700, 890 630
                C 935 565, 940 470, 935 380
                C 930 310, 915 260, 895 235
              "
              fill="none"
              stroke="transparent"
              strokeWidth="36"
            />
          </g>

          {/* -------------------------------------------------
              PARIETAL PLEURA

              Outer pleural surface adjacent to thoracic wall.
          -------------------------------------------------- */}

          <g
            onMouseEnter={() => activate("parietal-pleura")}
            onMouseLeave={deactivate}
            onClick={() => toggle("parietal-pleura")}
            className="cursor-pointer"
          >
            <path
              d="
                M 95 225
                C 115 125, 210 75, 345 85
                C 420 95, 445 165, 440 245
                C 435 330, 405 410, 390 480
                C 375 565, 380 645, 325 695
                C 255 745, 145 720, 90 640
                C 45 570, 40 465, 48 370
                C 55 295, 75 245, 95 225
              "
              fill="none"
              stroke="#10b981"
              strokeWidth={isActive("parietal-pleura") ? "10" : "0"}
              strokeLinecap="round"
              opacity={isActive("parietal-pleura") ? "0.75" : "0"}
              className="transition-all duration-200"
            />

            <path
              d="
                M 905 225
                C 885 125, 790 75, 655 85
                C 580 95, 555 165, 560 245
                C 565 330, 595 410, 610 480
                C 625 565, 620 645, 675 695
                C 745 745, 855 720, 910 640
                C 955 570, 960 465, 952 370
                C 945 295, 925 245, 905 225
              "
              fill="none"
              stroke="#10b981"
              strokeWidth={isActive("parietal-pleura") ? "10" : "0"}
              strokeLinecap="round"
              opacity={isActive("parietal-pleura") ? "0.75" : "0"}
              className="transition-all duration-200"
            />

            {/* Invisible hit areas */}
            <path
              d="
                M 95 225
                C 115 125, 210 75, 345 85
                C 420 95, 445 165, 440 245
                C 435 330, 405 410, 390 480
                C 375 565, 380 645, 325 695
              "
              fill="none"
              stroke="transparent"
              strokeWidth="30"
            />

            <path
              d="
                M 905 225
                C 885 125, 790 75, 655 85
                C 580 95, 555 165, 560 245
                C 565 330, 595 410, 610 480
                C 625 565, 620 645, 675 695
              "
              fill="none"
              stroke="transparent"
              strokeWidth="30"
            />
          </g>

          {/* -------------------------------------------------
              CHEST WALL

              Broad outer ring. First-pass approximation.
          -------------------------------------------------- */}

          <path
            d="
              M 500 35
              C 720 30, 900 105, 965 275
              C 1020 420, 970 600, 835 700
              C 720 785, 280 785, 165 700
              C 30 600, -20 420, 35 275
              C 100 105, 280 30, 500 35
              Z

              M 500 85
              C 700 80, 855 145, 915 290
              C 960 415, 920 555, 800 650
              C 700 725, 300 725, 200 650
              C 80 555, 40 415, 85 290
              C 145 145, 300 80, 500 85
              Z
            "
            fill="#ef4444"
            fillRule="evenodd"
            fillOpacity={isActive("chest-wall") ? "0.22" : "0"}
            stroke="#dc2626"
            strokeWidth={isActive("chest-wall") ? "4" : "0"}
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => activate("chest-wall")}
            onMouseLeave={deactivate}
            onClick={() => toggle("chest-wall")}
          />

          {/* =================================================
              LABELS

              Hovering or clicking the label activates the
              corresponding anatomical overlay.
          ================================================== */}

          {/* Lung */}
          <g
            onMouseEnter={() => activate("lung")}
            onMouseLeave={deactivate}
            onClick={() => toggle("lung")}
            className="cursor-pointer"
          >
            <polyline
              points="160,195 220,195 285,245"
              fill="none"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="285" cy="245" r="7" fill="#0284c7" />

            <rect
              x="30"
              y="160"
              width="155"
              height="70"
              rx="18"
              fill={isActive("lung") ? "#e0f2fe" : "white"}
              stroke="#7dd3fc"
              strokeWidth="3"
            />

            <text
              x="107"
              y="203"
              textAnchor="middle"
              fill="#075985"
              fontSize="20"
              fontWeight="700"
            >
              Lung
            </text>
          </g>

          {/* Visceral Pleura */}
          <g
            onMouseEnter={() => activate("visceral-pleura")}
            onMouseLeave={deactivate}
            onClick={() => toggle("visceral-pleura")}
            className="cursor-pointer"
          >
            <polyline
              points="165,305 225,305 300,330"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="300" cy="330" r="7" fill="#7c3aed" />

            <rect
              x="25"
              y="270"
              width="180"
              height="70"
              rx="18"
              fill={isActive("visceral-pleura") ? "#f3e8ff" : "white"}
              stroke="#c4b5fd"
              strokeWidth="3"
            />

            <text
              x="115"
              y="313"
              textAnchor="middle"
              fill="#5b21b6"
              fontSize="19"
              fontWeight="700"
            >
              Visceral pleura
            </text>
          </g>

          {/* Pleural Space */}
          <g
            onMouseEnter={() => activate("pleural-space")}
            onMouseLeave={deactivate}
            onClick={() => toggle("pleural-space")}
            className="cursor-pointer"
          >
            <polyline
              points="175,420 235,420 305,405"
              fill="none"
              stroke="#d97706"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="305" cy="405" r="7" fill="#d97706" />

            <rect
              x="25"
              y="385"
              width="185"
              height="70"
              rx="18"
              fill={isActive("pleural-space") ? "#fffbeb" : "white"}
              stroke="#fbbf24"
              strokeWidth="3"
            />

            <text
              x="117"
              y="428"
              textAnchor="middle"
              fill="#92400e"
              fontSize="19"
              fontWeight="700"
            >
              Pleural space
            </text>
          </g>

          {/* Parietal Pleura */}
          <g
            onMouseEnter={() => activate("parietal-pleura")}
            onMouseLeave={deactivate}
            onClick={() => toggle("parietal-pleura")}
            className="cursor-pointer"
          >
            <polyline
              points="835,310 780,310 715,330"
              fill="none"
              stroke="#059669"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="715" cy="330" r="7" fill="#059669" />

            <rect
              x="795"
              y="275"
              width="180"
              height="70"
              rx="18"
              fill={isActive("parietal-pleura") ? "#ecfdf5" : "white"}
              stroke="#6ee7b7"
              strokeWidth="3"
            />

            <text
              x="885"
              y="318"
              textAnchor="middle"
              fill="#065f46"
              fontSize="19"
              fontWeight="700"
            >
              Parietal pleura
            </text>
          </g>

          {/* Chest Wall */}
          <g
            onMouseEnter={() => activate("chest-wall")}
            onMouseLeave={deactivate}
            onClick={() => toggle("chest-wall")}
            className="cursor-pointer"
          >
            <polyline
              points="835,520 895,520 930,470"
              fill="none"
              stroke="#dc2626"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="930" cy="470" r="7" fill="#dc2626" />

            <rect
              x="800"
              y="485"
              width="175"
              height="70"
              rx="18"
              fill={isActive("chest-wall") ? "#fef2f2" : "white"}
              stroke="#fca5a5"
              strokeWidth="3"
            />

            <text
              x="887"
              y="528"
              textAnchor="middle"
              fill="#991b1b"
              fontSize="19"
              fontWeight="700"
            >
              Chest wall
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
            Pleura & chest wall.
          </span>{" "}
          The visceral pleura covers the lung surface, while the parietal pleura
          lines the thoracic cavity. The pleural space lies between these two
          layers.
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Hover over or select a labeled structure to highlight its anatomical
          location.
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Base anatomical illustration: public-domain image via Wikimedia
          Commons. Interactive annotations added by PediAtlas.
        </p>
      </figcaption>
    </figure>
  );
}
