import Link from "next/link";

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 to-white px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-sm font-semibold text-blue-800 hover:text-blue-600"
          >
            ← Back to PediAtlas
          </Link>

          <p className="mt-9 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Help improve PediAtlas
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
            Suggestions & Feedback
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PediAtlas is actively being developed. Your feedback can help
            improve the medical content, design, navigation, and overall
            learning experience.
          </p>
        </div>
      </header>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSf8jdtsOUHefRuKbseBa8P2Y1ov1evNo7TjlvdIf7S7NvdmDQ/viewform?embedded=true"
    title="PediAtlas feedback form"
    className="h-[1723px] w-full"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
  >
    Loading...
  </iframe>
</div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PediAtlas · Suggestions & Feedback
      </footer>
    </main>
  );
}