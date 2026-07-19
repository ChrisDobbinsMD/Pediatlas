"use client";

import { useState } from "react";

type InteractiveImageProps = {
  image: string;
  annotatedImage?: string;
  alt: string;
  maxWidth?: string;
};

export default function InteractiveImage({
  image,
  annotatedImage,
  alt,
  maxWidth = "max-w-2xl",
}: InteractiveImageProps) {
  const [showAnnotations, setShowAnnotations] = useState(false);

  const currentImage =
    showAnnotations && annotatedImage ? annotatedImage : image;

  return (
    <div className="flex flex-col items-center">
      {annotatedImage && (
        <button
          onClick={() => setShowAnnotations(!showAnnotations)}
          className="mb-4 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          👁 {showAnnotations ? "Hide" : "Show"} annotations
        </button>
      )}

      <a
        href={currentImage}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={currentImage}
          alt={alt}
          className={`mx-auto w-full ${maxWidth} cursor-zoom-in rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-lg`}
        />
      </a>

    </div>
  );
}