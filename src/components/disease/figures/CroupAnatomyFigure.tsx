import Image from "next/image";

export default function CroupAnatomyFigure() {
  return (
    <div className="space-y-6">
      {/* ================= ANATOMY IMAGE ================= */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src="/images/CroupAnatomy2.png"
            alt="Sagittal pediatric upper-airway anatomy showing the larynx, subglottic airway, and trachea."
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
              {/* ================= LARYNX ================= */}

              <path
                d="
                  M 385 275
                  L 405 275
                  M 385 275
                  L 385 360
                  M 385 360
                  L 405 360
                "
                fill="none"
                stroke="#334155"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <line
                x1="250"
                y1="318"
                x2="385"
                y2="318"
                stroke="#334155"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <rect
                x="92"
                y="282"
                width="170"
                height="72"
                rx="24"
                fill="white"
                fillOpacity="0.94"
                stroke="#cbd5e1"
                strokeWidth="2"
              />
              <text
                x="177"
                y="326"
                textAnchor="middle"
                fontSize="30"
                fontWeight="700"
                fill="#0f172a"
              >
                Larynx
              </text>

              {/* ================= SUBGLOTTIC AIRWAY ================= */}

              <ellipse
                cx="467"
                cy="350"
                rx="20"
                ry="28"
                fill="#2563eb"
                fillOpacity="0.12"
                stroke="#2563eb"
                strokeWidth="5"
              />

              <circle cx="467" cy="350" r="7" fill="#2563eb" />

              <line
                x1="487"
                y1="350"
                x2="690"
                y2="350"
                stroke="#2563eb"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <rect
                x="685"
                y="311"
                width="270"
                height="78"
                rx="24"
                fill="#eff6ff"
                fillOpacity="0.96"
                stroke="#93c5fd"
                strokeWidth="2"
              />
              <text
                x="820"
                y="358"
                textAnchor="middle"
                fontSize="27"
                fontWeight="700"
                fill="#1e3a8a"
              >
                Subglottic airway
              </text>

              {/* ================= TRACHEA ================= */}

              <circle cx="484" cy="435" r="7" fill="#334155" />

              <path
                d="
                  M 491 440
                  L 550 500
                  L 705 500
                "
                fill="none"
                stroke="#334155"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <rect
                x="700"
                y="463"
                width="190"
                height="74"
                rx="24"
                fill="white"
                fillOpacity="0.94"
                stroke="#cbd5e1"
                strokeWidth="2"
              />
              <text
                x="795"
                y="509"
                textAnchor="middle"
                fontSize="29"
                fontWeight="700"
                fill="#0f172a"
              >
                Trachea
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
              {/* ================= LARYNX ================= */}

              <path
                d="
                M 385 275
                L 405 275
                M 385 275
                L 385 360
                M 385 360
                L 405 360
              "
                fill="none"
                stroke="#334155"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <line
                x1="320"
                y1="318"
                x2="385"
                y2="318"
                stroke="#334155"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* ================= SUBGLOTTIC AIRWAY ================= */}

              <ellipse
                cx="467"
                cy="350"
                rx="18"
                ry="25"
                fill="#2563eb"
                fillOpacity="0.12"
                stroke="#2563eb"
                strokeWidth="3"
              />

              <line
                x1="467"
                y1="350"
                x2="720"
                y2="350"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <circle cx="467" cy="350" r="5" fill="#2563eb" />

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

            {/* ================= LARYNX LABEL ================= */}

            <div className="absolute left-[5%] top-[42%] w-[27%]">
              <p className="font-bold text-slate-950">Larynx</p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Includes the epiglottis, supraglottis, vocal cords (glottis),
                and subglottis.
              </p>
            </div>

            {/* ================= SUBGLOTTIC LABEL ================= */}

            <div className="absolute left-[73%] top-[35%] w-[23%] rounded-2xl border border-blue-200 bg-blue-50/95 p-4 shadow-sm">
              <p className="font-bold text-blue-950">Subglottic airway</p>

              <p className="mt-1 text-sm leading-6 text-blue-900">
                Region immediately below the vocal cords where narrowing is most
                clinically significant in croup.
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
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-bold text-slate-950">Larynx</h3>

          <p className="mt-2 leading-7 text-slate-700">
            Includes the epiglottis, supraglottis, vocal cords (glottis), and
            subglottis.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-bold text-blue-950">Subglottic airway</h3>

          <p className="mt-2 leading-7 text-blue-900">
            Region immediately below the vocal cords where narrowing is most
            clinically significant in croup.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="font-bold text-slate-950">Trachea</h3>

          <p className="mt-2 leading-7 text-slate-700">
            Conducting airway extending inferiorly from the larynx.
          </p>
        </div>
      </div>

      {/* =================================================
          NORMAL VS CROUP
      ================================================= */}

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Subglottic airway
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-950">
            Normal vs croup
          </h3>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* NORMAL */}

          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <p className="text-center font-bold text-emerald-800">Normal</p>

            <div className="mx-auto mt-6 flex h-48 w-48 items-center justify-center rounded-full border-[18px] border-rose-200 bg-rose-950 shadow-inner">
              <div className="h-full w-full rounded-full" />
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <p>✓ Thin mucosa</p>
              <p>✓ Wide airway lumen</p>
              <p>✓ Minimal resistance to airflow</p>
            </div>
          </div>

          {/* CROUP */}

          <div className="rounded-2xl border border-rose-200 bg-white p-6">
            <p className="text-center font-bold text-rose-800">Croup</p>

            <div className="relative mx-auto mt-6 flex h-48 w-48 items-center justify-center rounded-full border-[38px] border-rose-300 bg-rose-950 shadow-inner">
              <div className="absolute inset-[-22px] rounded-full border-4 border-rose-400/40" />
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <p>• Circumferential mucosal edema</p>
              <p>• Markedly reduced airway radius</p>
              <p>• Increased resistance and turbulent airflow</p>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          RADIUS CONCEPT
      ================================================= */}

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          Why pediatric airways obstruct quickly
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex items-center justify-center gap-5">
            <div className="h-24 w-24 rounded-full border-[12px] border-rose-200 bg-rose-950" />

            <span className="text-3xl font-bold text-slate-500">→</span>

            <div className="h-16 w-16 rounded-full border-[14px] border-rose-300 bg-rose-950" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-amber-950">
              Small decreases in radius can cause large increases in airway
              resistance
            </h3>

            <p className="mt-3 leading-7 text-amber-900">
              The pediatric subglottic airway begins with a relatively small
              diameter. Circumferential edema therefore removes a
              disproportionately large fraction of the available lumen,
              increasing work of breathing and producing stridor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
