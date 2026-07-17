import Link from "next/link";

export default function FeedbackButton() {
  return (
    <Link
      href="/feedback"
      aria-label="Open suggestions and feedback page"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/95 px-4 py-2 text-sm font-semibold text-blue-900 shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:shadow-lg"
    >
      <span aria-hidden="true">💬</span>
      <span>Feedback</span>
    </Link>
  );
}