import Image from "next/image";

export default function EpiglottitisAnatomyFigure() {
  return (
    <div className="space-y-6">
      {/* ================= ANATOMY IMAGE ================= */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/CroupAnatomy2.png"
            alt="Sagittal pediatric upper-airway anatomy showing the epiglottis, supraglottic airway, and glottic level."
            fill
            priority
            className="object-contain"
          />

          {/* =================================================
              MOBILE ANATOMY OVERLAY
              Keeps localization markers on the image while the
              full explanatory cards remain below on small screens.
          ================================================= */}

          <div
            className="pointer-events-none absolute inset-0 md:hidden"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1000 667"
              className="absolute inset-0 h-full w-full"
            >
              {/* ================= EPIGLOTTIS ================= */}

              <circle cx="475" cy="275" r="9" fill="#2563eb" />

              <path
                d="
                M 475 275
                L 550 275
                L 665 225
                "
                fill="none"
                stroke="#2563eb"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <rect
                x="660"
                y="185"
                width="245"
                height="75"
                rx="24"
                fill="#eff6ff"
                fillOpacity="0.96"
                stroke="#93c5fd"
                strokeWidth="2"
              />

              <text
                x="782"
                y="232"
                textAnchor="middle"
                fontSize="29"
                fontWeight="700"
                fill="#1e3a8a"
              >
                Epiglottis
              </text>

              {/* ================= SUPRAGLOTTIC AIRWAY ================= */}

              <path
                d="
                M 385 275
                L 405 275
                M 385 275
                L 385 340
                M 385 340
                L 405 340
                "
                fill="none"
                stroke="#2563eb"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <line
                x1="250"
                y1="310"
                x2="385"
                y2="310"
                stroke="#2563eb"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <rect
                x="20"
                y="270"
                width="270"
                height="80"
                rx="24"
                fill="#eff6ff"
                fillOpacity="0.96"
                stroke="#93c5fd"
                strokeWidth="2"
              />

              <text
                x="152"
                y="319"
                textAnchor="middle"
                fontSize="25"
                fontWeight="700"
                fill="#1e3a8a"
              >
                Supraglottic airway
              </text>
            </svg>
          </div>
          {/* =================================================
            DESKTOP ANATOMY OVERLAY
        ================================================= */}

          <div className="absolute inset-0 hidden md:block">
            <svg
              viewBox="0 0 1000 667"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {/* ================= Supraglottis region ================= */}

              <path
                d="
                M 385 275
                L 405 275
                M 385 275
                L 385 340
                M 385 340
                L 405 340
              "
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <line
                x1="320"
                y1="310"
                x2="385"
                y2="310"
                stroke="#2563eb"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* ================= EPIGLOTTIS ================= */}

              <path
                d="
                M 475 275
                L 550 275
                L 665 225
                "
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="475" cy="275" r="6" fill="#2563eb" />

              {/* ================= TRACHEA ================= */}

              <path
                d="
              M 720 500
             L 549 500
            L 484 435
            "
                fill="none"
                stroke="#334155"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="484" cy="435" r="5" fill="#334155" />
            </svg>

            {/* ================= SUPRAGLOTTIC LABEL ================= */}

            <div className="absolute left-[05%] top-[25%] w-[23%] rounded-2xl border border-blue-200 bg-blue-50/95 p-4 shadow-sm">
              <p className="font-bold text-blue-950">Supraglottic airway</p>

              <p className="mt-1 text-sm leading-6 text-blue-900">
                Region above the vocal cords that includes the epiglottis and
                adjacent laryngeal structures. Inflammation here can impair
                swallowing and threaten the airway.
              </p>
            </div>

            {/* ================= Epiglottis LABEL ================= */}

            <div className="absolute left-[68%] top-[18%] w-[27%] rounded-2xl border border-blue-200 bg-blue-50/95 p-4 shadow-sm">
              <p className="font-bold text-blue-950">Epiglottis</p>

              <p className="mt-1 text-sm leading-6 text-blue-900">
                Leaf-shaped cartilage at the laryngeal inlet that helps protect
                the airway during swallowing.
              </p>
            </div>

            {/* ================= TRACHEA LABEL ================= */}

            <div className="absolute left-[73%] top-[73%] w-[21%] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm">
              <p className="font-bold text-slate-950">Trachea</p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Conducting airway extending inferiorly from the larynx.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
    MOBILE ANATOMY LABELS
================================================= */}

      <div className="grid gap-4 md:hidden">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-bold text-blue-950">Epiglottis</h3>

          <p className="mt-2 leading-7 text-blue-900">
            Leaf-shaped cartilage at the laryngeal inlet that helps protect the
            airway during swallowing.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-bold text-blue-950">Supraglottic airway</h3>

          <p className="mt-2 leading-7 text-blue-900">
            Region above the vocal cords that includes the epiglottis and
            adjacent laryngeal structures. Inflammation here can impair
            swallowing and threaten the airway.
          </p>
        </div>
      </div>
    </div>
  );
}
