import Image from "next/image";

export default function TracheitisAnatomyFigure() {
  return (
    <div className="space-y-6">
      {/* ================= ANATOMY IMAGE ================= */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/CroupAnatomy2.png"
            alt="Sagittal pediatric airway anatomy showing the trachea and intraluminal secretions associated with bacterial tracheitis."
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
              {/* ================= TRACHEA ================= */}

              <ellipse
                cx="485"
                cy="440"
                rx="25"
                ry="90"
                transform="rotate(-4 485 450)"
                fill="#2563eb"
                fillOpacity="0.22"
                stroke="#2563eb"
                strokeWidth="5"
              />

              {/* ================= INTRALUMINAL SECRETIONS / DEBRIS ================= */}

              <path
                d="
    M 474 365
    C 480 358, 490 360, 493 368
    C 496 376, 488 382, 480 379
    C 472 376, 468 371, 474 365
  "
                fill="#f59e0b"
                fillOpacity="0.9"
              />

              <path
                d="
    M 478 405
    C 486 398, 497 401, 499 410
    C 501 420, 492 425, 483 422
    C 475 419, 472 411, 478 405
  "
                fill="#f59e0b"
                fillOpacity="0.9"
              />

              <path
                d="
    M 476 445
    C 483 438, 493 440, 496 448
    C 499 456, 491 462, 482 459
    C 474 456, 470 451, 476 445
  "
                fill="#f59e0b"
                fillOpacity="0.9"
              />

              <path
                d="
    M 485 488
    c 7 -3, 13 2, 13 9
    c 1 8, -5 14, -13 15
    c -8 0, -13 -5, -13 -12
    c 0 -7, 5 -11, 13 -12
  "
                fill="#f59e0b"
                fillOpacity="0.9"
              />

              {/* ================= TRACHEA LABEL ================= */}

              <path
                d="
    M 505 450
    L 610 450
    L 700 410
  "
                fill="none"
                stroke="#2563eb"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <rect
                x="690"
                y="370"
                width="220"
                height="80"
                rx="24"
                fill="#eff6ff"
                fillOpacity="0.96"
                stroke="#93c5fd"
                strokeWidth="2"
              />

              <text
                x="800"
                y="420"
                textAnchor="middle"
                fontSize="29"
                fontWeight="700"
                fill="#1e3a8a"
              >
                Trachea
              </text>

              {/* ================= DEBRIS LABEL ================= */}

              <path
                d="
    M 475 410
    L 365 385
    L 285 340
  "
                fill="none"
                stroke="#d97706"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <rect
                x="20"
                y="295"
                width="285"
                height="90"
                rx="24"
                fill="#fffbeb"
                fillOpacity="0.97"
                stroke="#fcd34d"
                strokeWidth="2"
              />

              <text
                x="162"
                y="331"
                textAnchor="middle"
                fontSize="24"
                fontWeight="700"
                fill="#92400e"
              >
                <tspan x="162" dy="0">
                  Thick secretions
                </tspan>
                <tspan x="162" dy="29">
                  &amp; debris
                </tspan>
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
              {/* ================= TRACHEA ================= */}

              <ellipse
                cx="485"
                cy="440"
                rx="25"
                ry="90"
                transform="rotate(-4 485 450)"
                fill="#2563eb"
                fillOpacity="0.22"
                stroke="#2563eb"
                strokeWidth="4"
              />

              <circle cx="485" cy="450" r="7" fill="#2563eb" />

              {/* ================= TRACHEA LEADER LINE ================= */}

              <path
                d="
                M 505 450
                L 590 450
                L 705 350
                "
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* ================= INTRALUMINAL SECRETIONS / DEBRIS ================= */}

              <path
                d="
                M 474 365
                C 480 358, 490 360, 493 368
                C 496 376, 488 382, 480 379
                C 472 376, 468 371, 474 365
                "
                fill="#f59e0b"
                fillOpacity="0.85"
              />

              <path
                d="
                M 478 405
                C 486 398, 497 401, 499 410
                C 501 420, 492 425, 483 422
                C 475 419, 472 411, 478 405
                "
                fill="#f59e0b"
                fillOpacity="0.85"
              />

              <path
                d="
                M 476 445
                C 483 438, 493 440, 496 448
                C 499 456, 491 462, 482 459
                C 474 456, 470 451, 476 445
                "
                fill="#f59e0b"
                fillOpacity="0.85"
              />

              <path
                d="
                M 485 488
                c 7 -3, 13 2, 13 9
                c 1 8, -5 14, -13 15
                c -8 0, -13 -5, -13 -12
                c 0 -7, 5 -11, 13 -12
                "
                fill="#f59e0b"
                fillOpacity="0.85"
              />

              <path
                d="
                M 485 410
                L 350 380
                L 280 330
                "
                fill="none"
                stroke="#d97706"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* ================= TRACHEA LABEL ================= */}
            <div className="absolute left-[72%] top-[30%] w-[23%] rounded-2xl border border-blue-200 bg-blue-50/95 p-4 shadow-sm">
              <p className="font-bold text-blue-950">Trachea</p>

              <p className="mt-1 text-sm leading-6 text-blue-900">
                The tracheal mucosa is the primary site of bacterial
                inflammation, where edema and thick secretions can progressively
                narrow the airway lumen.
              </p>
            </div>

            {/* ================= INTRALUMINAL DEBRIS LABEL ================= */}

            <div className="absolute left-[1%] top-[25%] w-[24%] rounded-2xl border border-amber-200 bg-amber-50/95 p-4 shadow-sm">
              <p className="font-bold text-amber-950">
                Thick secretions &amp; pseudomembranous debris
              </p>

              <p className="mt-1 text-sm leading-6 text-amber-900">
                Mucopurulent secretions and sloughed inflamed mucosa can
                accumulate within the tracheal lumen and contribute directly to
                airway obstruction.
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
          <h3 className="font-bold text-blue-950">Trachea</h3>

          <p className="mt-2 leading-7 text-blue-900">
            The tracheal mucosa is the primary site of bacterial inflammation,
            where edema and thick secretions can progressively narrow the airway
            lumen.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-bold text-amber-950">
            Thick secretions &amp; pseudomembranous debris
          </h3>

          <p className="mt-2 leading-7 text-amber-900">
            Mucopurulent secretions and sloughed inflamed mucosa can accumulate
            within the tracheal lumen and contribute directly to airway
            obstruction.
          </p>
        </div>
      </div>
    </div>
  );
}
