type PediAtlasLogoProps = {
  className?: string;
  showTagline?: boolean;
};

export default function PediAtlasLogo({
  className = "w-full max-w-3xl",
  showTagline = true,
}: PediAtlasLogoProps) {
  return (
    <svg
      viewBox="0 0 900 820"
      role="img"
      aria-labelledby="pediatlas-logo-title pediatlas-logo-description"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="pediatlas-logo-title">PediAtlas</title>

      <desc id="pediatlas-logo-description">
        A pediatric silhouette containing colorful map routes with a
        heart-shaped destination marker.
      </desc>

      {/* Child silhouette */}
      <g
        fill="#ffffff"
        stroke="#0D1B3D"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="
            M450 55
            C385 55 342 99 342 158
            C342 180 349 200 360 216
            C340 240 319 251 292 264
            C258 281 236 310 224 349
            L190 480
            C184 504 194 528 216 538
            C237 547 260 537 269 516
            L306 419
            L314 608
            L280 699
            C272 722 284 747 307 755
            C329 763 353 752 362 731
            L417 606
            L450 556
            L483 606
            L538 731
            C547 752 571 763 593 755
            C616 747 628 722 620 699
            L586 608
            L594 419
            L631 516
            C640 537 663 547 684 538
            C706 528 716 504 710 480
            L676 349
            C664 310 642 281 608 264
            C581 251 560 240 540 216
            C551 200 558 180 558 158
            C558 99 515 55 450 55
            Z
          "
        />
      </g>

      {/* Subtle map-grid background */}
      <g
        stroke="#E8ECF1"
        strokeWidth="5"
        fill="none"
        opacity="0.9"
        strokeLinecap="round"
      >
        <path d="M376 92 L376 218 L332 270 L324 396" />
        <path d="M413 66 L413 235 L370 284 L370 432" />
        <path d="M487 66 L487 224 L536 278 L542 412" />
        <path d="M524 93 L524 213 L580 270 L591 395" />
        <path d="M281 321 L405 321 L451 365 L577 365" />
        <path d="M254 386 L383 386 L429 431 L611 431" />
        <path d="M314 506 L422 506 L451 478 L586 478" />
        <path d="M335 580 L409 580 L450 540 L570 540" />
        <path d="M326 656 L378 656" />
        <path d="M522 656 L574 656" />
      </g>

      {/* Colored map routes */}
      <g
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Green route */}
        <path
          stroke="#22B573"
          d="
            M445 61
            L445 151
            L415 184
            L415 241
            L370 282
            L395 327
            L395 415
            L450 455
            L417 498
            L417 617
            L383 692
          "
        />

        {/* Red route */}
        <path
          stroke="#E63946"
          d="
            M509 66
            L509 145
            L489 178
            L489 237
            L539 274
            L500 323
            L456 362
            L382 409
            L369 499
            L365 619
            L325 703
          "
        />

        {/* Blue route */}
        <path
          stroke="#1D78D7"
          d="
            M472 192
            L518 235
            L561 286
            L604 314
            L624 385
            L640 468
            L607 521
            L568 569
            L568 675
            L584 727
          "
        />

        {/* Gold route */}
        <path
          stroke="#F4B400"
          d="
            M430 79
            L470 118
            L470 194
            L450 241
            L450 318
            L480 371
            L523 430
            L529 516
            L548 589
            L548 681
            L584 728
          "
        />
      </g>

      {/* Transit-style route nodes */}
      <g fill="#ffffff" strokeWidth="8">
        <circle cx="415" cy="184" r="10" stroke="#22B573" />
        <circle cx="395" cy="327" r="10" stroke="#22B573" />
        <circle cx="450" cy="455" r="10" stroke="#22B573" />

        <circle cx="509" cy="145" r="10" stroke="#E63946" />
        <circle cx="539" cy="274" r="10" stroke="#E63946" />
        <circle cx="369" cy="499" r="10" stroke="#E63946" />

        <circle cx="561" cy="286" r="10" stroke="#1D78D7" />
        <circle cx="624" cy="385" r="10" stroke="#1D78D7" />
        <circle cx="568" cy="569" r="10" stroke="#1D78D7" />

        <circle cx="470" cy="118" r="10" stroke="#F4B400" />
        <circle cx="480" cy="371" r="10" stroke="#F4B400" />
        <circle cx="548" cy="589" r="10" stroke="#F4B400" />
      </g>

      {/* Heart destination marker */}
      <g transform="translate(450 330)">
        <path
          d="
            M0 -58
            C-42 -58 -67 -28 -67 8
            C-67 49 -28 89 0 122
            C28 89 67 49 67 8
            C67 -28 42 -58 0 -58
            Z
          "
          fill="#E63946"
          stroke="#C62430"
          strokeWidth="7"
        />

        <path
          d="
            M0 47
            C-8 35 -31 23 -31 2
            C-31 -12 -20 -22 -7 -22
            C2 -22 8 -17 13 -10
            C18 -17 24 -22 33 -22
            C46 -22 57 -12 57 2
            C57 23 34 35 13 53
            Z
          "
          fill="#ffffff"
          transform="translate(-13 0)"
        />

        <path
          d="M-30 10 L-12 10 L-3 -9 L10 29 L21 4 L39 4"
          fill="none"
          stroke="#E63946"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Wordmark */}
      <text
        x="450"
        y="785"
        textAnchor="middle"
        fill="#0D1B3D"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="92"
        fontWeight="700"
        letterSpacing="5"
      >
        PEDIATLAS
      </text>

      {/* Tagline */}
      {showTagline && (
        <text
          x="450"
          y="818"
          textAnchor="middle"
          fill="#22B573"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="24"
          fontWeight="600"
          letterSpacing="7"
        >
          THE ROADMAP FOR DISEASES
        </text>
      )}
    </svg>
  );
}