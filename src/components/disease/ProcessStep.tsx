type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-800">
        {number}
      </div>

      <h3 className="mt-4 font-bold text-slate-950">{title}</h3>

      <p className="mt-2 leading-7 text-slate-700">{description}</p>
    </div>
  );
}
