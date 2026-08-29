type AnkiDeckProps = {
  title: string;
  cardCount: number;
  downloadHref: string;
};

export default function AnkiDeck({
  title,
  cardCount,
  downloadHref,
}: AnkiDeckProps) {
  return (
    <div className="rounded-2xl border border-violet-200 bg-violet-50/50 p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
            Anki Deck
          </p>

          <h3 className="mt-2 text-xl font-semibold text-slate-950">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Reinforce the highest-yield concepts from this module with{" "}
            {cardCount} spaced-repetition cards.
          </p>
        </div>

        <a
          href={downloadHref}
          download
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-800"
        >
          Download Anki Deck
        </a>
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Requires Anki. Deck content is intended for educational review and
        should be used alongside the full PediAtlas module.
      </p>
    </div>
  );
}
