# PediAtlas Project Roadmap

# PediAtlas Development Philosophy

1. Education first.
2. Understand before memorizing.
3. Build reusable components whenever repetition appears.
4. Finish features before optimizing.
5. Keep the UI clean, consistent, and approachable.

Last Updated: July 2026

---

# Current Status

## Completed ✅

### Infrastructure
- [x] Next.js project initialized
- [x] Vercel deployment
- [x] GitHub repository
- [x] Responsive layout
- [x] Sidebar navigation
- [x] Breadcrumb navigation

### Reusable Components
- [x] Section
- [x] InfoCard
- [x] ImageCard
- [x] ProcessStep
- [x] EvidenceBase
- [x] Created Master Disease Template 

### Respiratory Diseases
- [x] Bronchiolitis
- [x] Asthma
- [x] Pneumonia
- [x] Pertussis

---

# Current Priorities

## High Priority

- [ ] Finish lower respiratory pathologies
- [ ] Continue Respiratory section

---

# Future Component Ideas

## Medium Priority

- [ ] DiseaseQuiz component
- [ ] ClinicalPearls component
- [ ] AnatomyLocalization component
- [ ] DiagnosticWorkup component (evaluate after more diseases)
- [ ] Component for InteractiveImage (annotations on Imagings)

---

# Future Architecture Improvements

## When ~10 Diseases Exist

- [ ] Move references into `/references`
- [ ] Store reference arrays separately from page components
- [ ] Review EvidenceBase component if needed

Example:

references/
- asthma.ts
- bronchiolitis.ts
- pneumonia.ts

---

# Image Improvements

- [ ] Click-to-expand images
- [ ] Image gallery component
- [ ] Optional image annotations
- [ ] Zoomable radiology images

---

# Educational Improvements

- [ ] Add direct article links where possible
- [ ] Add DOI/PubMed links when appropriate
- [ ] Review all references for highest-quality sources

---

# Design Standards (Do Not Change Without Discussion)

## Disease Page Order

1. Clinical Vignette
2. Anatomy Localization
3. Pathophysiology
4. History & Physical
5. Differential Diagnosis
6. Diagnostic Workup
7. Management
8. Disposition
9. Clinical Pearls
10. Quiz
11. Evidence Base (NOT included in sidebar)

---

## Sidebar Rules

- Evidence Base is NOT shown in "On This Page".
- Sidebar is educational navigation only.

---

## EvidenceBase Standards

- Use reusable component.
- Standard disclaimer.
- Clinical References heading.
- Optional Secondary Educational Sources.

---

# Ideas Parking Lot

Use this section to save ideas without interrupting development.

- Adult Atlas version
- 3D anatomy integration
- Interactive quizzes
- Animations
- Search function
- User accounts
- Notes feature
- Progress tracking