# PediAtlas

PediAtlas is an interactive pediatric medical education platform designed to teach disease processes through anatomy, pathophysiology, clinical reasoning, diagnostic strategy, management, and evidence-based medicine.

The goal is to help learners understand **where disease occurs, why it behaves the way it does, and how that translates to bedside decision-making**.

🌐 https://pediatlas.org

---

## Current Status

PediAtlas is actively under development.

### Respiratory Module

#### Lower Airway

- ✅ Bronchiolitis
- ✅ Asthma
- ✅ Pneumonia
- ✅ Pertussis
- ✅ Pulmonary Aspiration
- ✅ Foreign Body Aspiration

#### Upper Airway

- ✅ Croup
- 🚧 Epiglottitis
- ⏳ Bacterial Tracheitis
- ⏳ Viral URI
- ⏳ Sinusitis
- ⏳ Retropharyngeal Abscess
- ⏳ Peritonsillar Abscess
- ⏳ Upper Airway Foreign Body

Additional respiratory and organ-system modules are planned.

---

## Educational Structure

Disease modules generally include:

- Clinical vignette
- Anatomy & localization
- Pathophysiology
- History & physical examination
- Differential diagnosis
- Diagnostic workup
- Management
- Disposition / care setting
- Clinical pearls
- Progressive knowledge check
- Evidence base with clickable clinical references

The structure may be adapted when a disease does not benefit from every section.

---

## Interactive Features

Current and developing features include:

- Responsive desktop and mobile navigation
- Anatomy-based disease localization
- Interactive radiology and anatomy figures
- SVG-based medical annotations
- Show / hide annotation controls
- Expandable educational figures
- Progressive clinical reasoning quizzes
- Evidence-based clinical references
- Standardized educational disclaimer
- Feedback submission

Future features may include:

- 2D pediatric body map
- 3D interactive pediatric anatomy
- Search
- User progress tracking
- Notes
- Additional interactive learning tools

---

## Design Philosophy

PediAtlas follows several core principles:

1. **Education first**
2. **Understand before memorizing**
3. **Anatomy should explain disease**
4. **Clinical reasoning should drive organization**
5. **Reusable patterns should stay consistent across diseases**
6. **Medical accuracy takes priority over decorative design**
7. **Primary and authoritative clinical sources should be prioritized**
8. **Consistency > novelty**

---

## Technology

PediAtlas is currently built with:

- Next.js
- TypeScript
- React
- Tailwind CSS
- Vercel
- SVG-based interactive annotations

Development is performed in VS Code with GitHub used for source control.

---

## Project Architecture

Reusable site-wide components are located in:

```text
src/components/
```
