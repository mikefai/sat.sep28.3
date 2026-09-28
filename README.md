# ApexDSAT 2026 — Elite Digital SAT Mock Exam Suite

A premium, full-featured web application delivering **two complete, full-length Digital SAT 2026 mock exams** (196 total original questions) engineered to closely replicate the College Board's official Bluebook™ testing experience, psychometric Item Response Theory (IRT) scoring curves, and distractor analysis system.

---

## 🚀 Key Features

- **Exactly Two Complete Full-Length DSAT Exams**:
  - **Mock Exam 1 (98 Questions)**: Standard Adaptive Benchmark Examination.
  - **Mock Exam 2 (98 Questions)**: 1500+ Calibrated Diagnostic Examination.
- **Authentic DSAT Bluebook UI/UX**:
  - Split-screen Reading & Writing layout with authentic Lora serif typography.
  - Active Section & Module progression (`RW M1 (27 Qs, 32m)` $\to$ `RW M2 (27 Qs, 32m)` $\to$ `10-Min Break` $\to$ `Math M1 (22 Qs, 35m)` $\to$ `Math M2 (22 Qs, 35m)`).
  - Live Countdown Timer with "Hide/Show" toggle and 5-minute warning alert.
  - Interactive **Desmos-Style Graphing & Scientific Calculator** (supports functions, trig, logs, powers, roots, real-time plotting).
  - Official **Math Reference Sheet Modal** with SVG geometry diagrams (Pythagorean, 30-60-90, 45-45-90, 3D solids, circle radians).
  - **Option Eliminator (Strikethrough)** tool for cross-outs on answer choices.
  - **Mark for Review** flag system with real-time Question Palette grid modal.
  - **Student-Produced Response (SPR / Grid-In)** input with decimal and fraction format validation.
  - **Scratchpad & Notes Drawer** with automatic persistence.
  - **Module Review Screen** prior to submission with filters for Unanswered and Flagged questions.
  - **Official 10-Minute Break Screen** with countdown timer, test-taking strategies, and resume controls.
- **Psychometric IRT Scoring Engine**:
  - Non-linear equating algorithm mapping raw correct counts to scaled scores ($200 - 800$ RW, $200 - 800$ Math, $400 - 1600$ Composite).
  - Standard Error of Measurement (SEM) score range estimation (e.g., $1480 - 1540$).
  - Official National Representative Percentile rankings ($99+$ percentile for $1520+$).
  - College Readiness Benchmark status for both sections.
- **100% Distractor Trap Explanations**:
  - Every single question includes deep rationale for the correct answer.
  - Options A, B, C, D have individual distractor analyses explaining:
    1. *Why students choose the trap*
    2. *Why it is mathematically/logically incorrect*
    3. *Core misconception or trap tested*
- **Comprehensive Analytics Dashboard**:
  - Domain mastery breakdown: Information & Ideas, Craft & Structure, Expression of Ideas, Standard English Conventions, Algebra, Advanced Math, Problem Solving & Data Analysis, Geometry & Trig.
  - Difficulty distribution tracking (Easy 20%, Medium 45%, Hard 25%, Elite 1500+ 10%).
  - Time management analytics (average time spent per question, time on correct vs incorrect items).
  - Printable score report / PDF export mode.
- **Interactive Question Bank Explorer**:
  - Filter and practice with all 196 questions with instant solution reveals, LaTeX math rendering, and distractor breakdowns.
- **LocalStorage State Persistence**:
  - Automatically saves active exam sessions and full multi-attempt score history.

---

## 📁 Project Architecture & Folder Structure

```
modest-einstein/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── CalculatorModal.tsx     # Desmos-style graphing & scientific calculator
│   │   │   ├── DirectionsModal.tsx     # Official Bluebook testing instructions
│   │   │   ├── Header.tsx / Navbar.tsx # Navigation and dark mode toggle
│   │   │   ├── MathRenderer.tsx        # KaTeX LaTeX mathematical formula renderer
│   │   │   └── ReferenceSheetModal.tsx # Geometry formula sheet with SVG diagrams
│   │   └── exam/
│   │       ├── BreakScreen.tsx         # 10-minute scheduled section break screen
│   │       ├── ExamFooter.tsx          # Back, Next, and Question Palette trigger
│   │       ├── ExamHeader.tsx          # Timer, Section/Module, and Testing Tools
│   │       ├── ModuleReviewScreen.tsx  # End-of-module review grid and filters
│   │       ├── QuestionPalette.tsx     # 27/22 question grid jump modal
│   │       └── QuestionView.tsx        # Split-pane Bluebook question interface
│   ├── data/
│   │   ├── mock1/
│   │   │   ├── rw_module1.ts           # Mock 1 RW Module 1 (27 questions)
│   │   │   ├── rw_module2.ts           # Mock 1 RW Module 2 (27 questions)
│   │   │   ├── math_module1.ts         # Mock 1 Math Module 1 (22 questions)
│   │   │   └── math_module2.ts         # Mock 1 Math Module 2 (22 questions)
│   │   ├── mock2/
│   │   │   ├── rw_module1.ts           # Mock 2 RW Module 1 (27 questions)
│   │   │   ├── rw_module2.ts           # Mock 2 RW Module 2 (27 questions)
│   │   │   ├── math_module1.ts         # Mock 2 Math Module 1 (22 questions)
│   │   │   └── math_module2.ts         # Mock 2 Math Module 2 (22 questions)
│   │   └── index.ts                    # Master dataset index and metadata
│   ├── pages/
│   │   ├── ExamInterfacePage.tsx       # Live Bluebook testing engine controller
│   │   ├── ExamSelectionPage.tsx       # Mock 1 & 2 exam catalog cards
│   │   ├── HomePage.tsx                # Hero landing page & interactive score predictor
│   │   ├── QuestionBankPage.tsx        # 196-question interactive study repository
│   │   ├── ResultsHistoryPage.tsx      # Past exam attempts and progress tracker
│   │   └── ResultsPage.tsx             # Score report, domain analytics & review table
│   ├── types/
│   │   └── exam.ts                     # TypeScript interfaces for questions, sessions, scores
│   ├── utils/
│   │   └── scoring.ts                  # Psychometric IRT curves, percentiles, SEM ranges
│   ├── App.tsx                         # Main app routing & session lifecycle
│   ├── index.css                       # Tailwind CSS, Lora typography & print styles
│   └── main.tsx                        # React 19 entry point
├── index.html                          # HTML5 template with KaTeX and Google Fonts
├── tailwind.config.js                  # Tailwind configuration with Bluebook palette
└── package.json
```

---

## 🛠️ Installation & Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build production bundle
npm run build
```
