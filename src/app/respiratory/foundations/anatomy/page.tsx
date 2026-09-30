"use client";

import Link from "next/link";

import { DiseaseSection, InfoCard, Callout } from "@/components/disease";

import { MobileSectionNav } from "@/components";

const sections = [
  { id: "respiratory-map", label: "Respiratory Map" },
  { id: "lungs-lobes", label: "Lungs & Lobes" },
  { id: "pleura", label: "Pleura & Chest Wall" },
  { id: "circulation", label: "Pulmonary Circulation" },
  { id: "pediatric", label: "Why Kids Are Different" },
  { id: "localization", label: "Clinical Localization" },
  { id: "quiz", label: "Knowledge Check" },
];
import RespiratoryLobesFigure from "@/components/disease/figures/RespiratoryFoundations/RespiratoryLobesFigure";
import PleuraChestWallFigure from "@/components/disease/figures/RespiratoryFoundations/PleuraChestWallFigure";

export default function RespiratoryAnatomyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* =================================================
          HERO
      ================================================== */}

      <header className="border-b border-sky-100 bg-gradient-to-b from-sky-100 via-sky-50/70 to-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/" className="text-blue-800 hover:text-blue-600">
              PediAtlas
            </Link>

            <span className="text-slate-400">/</span>

            <Link
              href="/respiratory"
              className="text-blue-800 hover:text-blue-600"
            >
              Respiratory
            </Link>

            <span className="text-slate-400">/</span>

            <Link
              href="/respiratory/foundations"
              className="text-blue-800 hover:text-blue-600"
            >
              Foundations
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-slate-600">Anatomy & Localization</span>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Respiratory Foundations · Module 01
              </p>

              <h1 className="mt-3 text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                Anatomy & Localization
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Follow air from the upper airway to the alveoli, map the lungs
                and pleural spaces, and connect respiratory findings to the
                anatomy producing them.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Airways",
                  "Lungs & Lobes",
                  "Pleura",
                  "Pulmonary Vasculature",
                  "Clinical Localization",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-semibold text-sky-800"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-7xl" aria-hidden="true">
              🫁
            </div>
          </div>

          <div className="mt-8 max-w-4xl rounded-2xl border border-sky-200 bg-white/80 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Core idea
            </p>

            <p className="mt-2 text-lg font-semibold leading-7 text-blue-950">
              Before you can understand respiratory disease, you need to know
              where the problem lives.
            </p>
          </div>
        </div>
      </header>

      <MobileSectionNav sections={sections} />

      {/* =================================================
          PAGE BODY
      ================================================== */}

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Desktop navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              On this page
            </p>

            <nav className="space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-blue-800"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 space-y-8">
          {/* =================================================
              RESPIRATORY MAP
          ================================================== */}

          <DiseaseSection
            id="respiratory-map"
            label="Start with the pathway"
            title="The Respiratory Map"
            description="Air travels through a branching system that transitions from conducting airways to specialized gas-exchanging units."
          >
            <div className="space-y-6">
              <Callout
                tone="blue"
                label="Mental Model"
                title="Follow one breath"
              >
                <p>
                  Instead of memorizing respiratory structures as an isolated
                  list, follow a breath from the nose and mouth through the
                  conducting airways until it reaches the alveoli.
                </p>
              </Callout>

              {/* Airflow pathway */}
              <div className="rounded-3xl border border-sky-200 bg-gradient-to-b from-sky-50 to-white p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                  Airflow pathway
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    {
                      number: "01",
                      title: "Nose & oral cavity",
                      description:
                        "Entry points for inspired air. The nasal passages also warm, humidify, and filter incoming air.",
                    },
                    {
                      number: "02",
                      title: "Pharynx & larynx",
                      description:
                        "The upper airway channels air toward the trachea while the larynx protects the entrance to the lower respiratory tract.",
                    },
                    {
                      number: "03",
                      title: "Trachea",
                      description:
                        "The central conducting airway connecting the larynx to the right and left main bronchi.",
                    },
                    {
                      number: "04",
                      title: "Bronchi",
                      description:
                        "The main bronchi enter the lungs and repeatedly branch into progressively smaller conducting airways.",
                    },
                    {
                      number: "05",
                      title: "Bronchioles",
                      description:
                        "Small airways that lack the cartilaginous support of the larger bronchi and ultimately lead to the terminal bronchioles.",
                    },
                    {
                      number: "06",
                      title: "Respiratory bronchioles & alveolar ducts",
                      description:
                        "The transition into the respiratory zone, where alveoli begin appearing along the airway walls.",
                    },
                    {
                      number: "07",
                      title: "Alveoli",
                      description:
                        "Thin-walled gas-exchanging units closely associated with the pulmonary capillary network.",
                    },
                  ].map((step) => (
                    <div
                      key={step.number}
                      className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[56px_1fr]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-sm font-bold text-white">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-blue-950">
                          {step.title}
                        </h3>

                        <p className="mt-1 leading-7 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conducting vs respiratory zones */}
              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard title="Conducting Zone" tone="blue">
                  <p>
                    The conducting airways move air toward and away from the
                    gas-exchanging portion of the lung. They include the larger
                    airways and extend distally to the terminal bronchioles.
                  </p>

                  <p className="mt-3 font-semibold">
                    Primary job: move and condition air.
                  </p>
                </InfoCard>

                <InfoCard title="Respiratory Zone" tone="emerald">
                  <p>
                    Distal airways transition into respiratory bronchioles,
                    alveolar ducts, and alveoli, where inspired gas comes into
                    close contact with the pulmonary capillary circulation.
                  </p>

                  <p className="mt-3 font-semibold">
                    Primary job: gas exchange.
                  </p>
                </InfoCard>
              </div>

              <Callout
                tone="amber"
                label="Localization Pearl"
                title="The level of obstruction changes the clinical picture"
              >
                <p>
                  A problem at the larynx does not sound like a problem in the
                  bronchioles. Learning the airway as a continuous pathway gives
                  you the framework for later localizing findings such as
                  stridor, wheezing, and focal loss of airflow.
                </p>
              </Callout>
            </div>
          </DiseaseSection>

          {/* =================================================
              Lobes
          ================================================== */}

          <DiseaseSection
            id="lungs-lobes"
            label="Gross anatomy"
            title="Lungs, Lobes & Fissures"
            description="The lungs are divided into lobes by fissures, creating clinically useful regions for describing where disease is occurring."
          >
            <RespiratoryLobesFigure />

            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard title="Right Lung" tone="blue">
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Upper lobe</span>
                  </li>
                  <li>
                    <span className="font-semibold">Middle lobe</span>
                  </li>
                  <li>
                    <span className="font-semibold">Lower lobe</span>
                  </li>
                </ul>

                <p className="mt-4">
                  The <span className="font-semibold">horizontal fissure</span>{" "}
                  separates the upper and middle lobes, while the{" "}
                  <span className="font-semibold">oblique fissure</span>{" "}
                  separates the lower lobe from the upper and middle lobes.
                </p>
              </InfoCard>

              <InfoCard title="Left Lung" tone="emerald">
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Upper lobe</span>
                  </li>
                  <li>
                    <span className="font-semibold">Lower lobe</span>
                  </li>
                </ul>

                <p className="mt-4">
                  The <span className="font-semibold">oblique fissure</span>{" "}
                  separates the upper and lower lobes.
                </p>

                <p className="mt-3">
                  The <span className="font-semibold">lingula</span> is part of
                  the left upper lobe and is anatomically analogous to the right
                  middle lobe.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="slate"
              label="Bronchopulmonary Segments"
              title="Lobes can be localized even further"
            >
              <p>
                Each lobe is subdivided into bronchopulmonary segments supplied
                by segmental bronchi. You do not need to memorize every segment
                here. The important concept is that the bronchial tree creates
                progressively smaller anatomic regions that can help localize
                disease.
              </p>
            </Callout>

            <Callout
              tone="amber"
              label="Clinical Localization"
              title="A lobe is more than an anatomy label"
            >
              <p>
                Descriptions such as{" "}
                <span className="font-semibold">
                  right lower lobe pneumonia
                </span>
                , focal atelectasis, or a localized aspiration pattern identify
                where in the branching respiratory system disease is occurring.
                Later, imaging and physical examination findings will build on
                this same map.
              </p>
            </Callout>
          </DiseaseSection>

          {/* =================================================
              Pleura
          ================================================== */}

          <DiseaseSection
            id="pleura"
            label="Outside the lung"
            title="Pleura & Chest Wall"
            description="The lungs do not function in isolation. Pleural membranes, the chest wall, and the diaphragm create the mechanical environment that allows the lungs to expand."
          >
            <PleuraChestWallFigure />

            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard title="Visceral Pleura" tone="blue">
                <p>
                  The <span className="font-semibold">visceral pleura</span>{" "}
                  closely covers the surface of the lung and extends into the
                  fissures between the lobes.
                </p>

                <p className="mt-3">
                  Think of it as the pleural layer that{" "}
                  <span className="font-semibold">travels with the lung</span>.
                </p>
              </InfoCard>

              <InfoCard title="Pleural Space" tone="slate">
                <p>
                  Between the visceral and parietal pleura is the{" "}
                  <span className="font-semibold">pleural space</span>, a
                  potential space containing a small amount of pleural fluid.
                </p>

                <p className="mt-3">
                  This thin fluid layer allows the pleural surfaces to move
                  smoothly against one another during respiration.
                </p>
              </InfoCard>

              <InfoCard title="Parietal Pleura" tone="emerald">
                <p>
                  The <span className="font-semibold">parietal pleura</span>{" "}
                  lines the inner surface of the thoracic cavity, including the
                  chest wall and diaphragm.
                </p>

                <p className="mt-3">
                  Think of it as the pleural layer that{" "}
                  <span className="font-semibold">stays with the thorax</span>.
                </p>
              </InfoCard>
            </div>

            <Callout
              tone="blue"
              label="Respiratory Pump"
              title="The lung expands because the thorax moves"
            >
              <p>
                The lungs sit inside a mechanically active thorax. Movement of
                the diaphragm and chest wall changes thoracic volume, while the
                closely opposed pleural surfaces allow those movements to be
                transmitted to the lungs.
              </p>

              <p className="mt-3">
                We will build on this relationship when we discuss{" "}
                <span className="font-semibold">
                  intrathoracic pressure, compliance, and work of breathing
                </span>{" "}
                in Respiratory Physiology.
              </p>
            </Callout>

            <Callout
              tone="amber"
              label="Clinical Localization"
              title="Pleural disease is outside the lung itself"
            >
              <p>
                Localization matters.{" "}
                <span className="font-semibold">Pneumonia</span> primarily
                involves the pulmonary parenchyma, while a{" "}
                <span className="font-semibold">pleural effusion</span> places
                fluid in the pleural space and a{" "}
                <span className="font-semibold">pneumothorax</span> places air
                there.
              </p>

              <p className="mt-3">
                These processes can all impair breathing, but they occur in
                different anatomical compartments and therefore produce
                different examination, imaging, and ultrasound findings.
              </p>
            </Callout>

            <Callout
              tone="rose"
              label="Clinical Pearl"
              title="Pleural pain comes from the parietal pleura"
            >
              <p>
                The visceral pleura does not carry pain sensation in the same
                way as the parietal pleura. Irritation of the{" "}
                <span className="font-semibold">parietal pleura</span> can
                therefore produce the sharp, respiration-associated pain we
                describe clinically as{" "}
                <span className="font-semibold">pleuritic pain</span>.
              </p>
            </Callout>
          </DiseaseSection>

          <DiseaseSection
            id="circulation"
            label="Air meets blood"
            title="Pulmonary Circulation"
            description="Follow blood from the right ventricle to the alveolar capillary bed and back to the left heart."
          >
            <p className="text-slate-600">Section coming next.</p>
          </DiseaseSection>

          <DiseaseSection
            id="pediatric"
            label="Pediatrics changes the anatomy"
            title="Why Kids Are Different"
            description="Small airways, a compliant chest wall, developing lungs, and high metabolic demand change respiratory physiology in children."
          >
            <p className="text-slate-600">Section coming next.</p>
          </DiseaseSection>

          <DiseaseSection
            id="localization"
            label="Put the map to work"
            title="Clinical Localization"
            description="Use respiratory findings to identify where in the system a problem is most likely occurring."
          >
            <p className="text-slate-600">Section coming next.</p>
          </DiseaseSection>

          <DiseaseSection
            id="quiz"
            label="Knowledge check"
            title="Can You Localize It?"
            description="Apply the respiratory map before moving into physiology."
          >
            <p className="text-slate-600">
              Quiz coming after the teaching sections are complete.
            </p>
          </DiseaseSection>
        </div>
      </div>
    </main>
  );
}
