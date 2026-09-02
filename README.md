<div align="center">

# SkillSetu (कौशलसेतु)

### National Ayush Academia-Industry-Ministry Collaboration Ecosystem
**Smart India Hackathon 2026 (SIH 2026) • Problem Statement ID: SIH26044**  
*Ministry of Ayush, Government of India*

[![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![CI/CD](https://img.shields.io/badge/GitHub_Actions-Automated_Deploy-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Executive Summary

**SkillSetu (कौशलसेतु)** is a national-scale platform engineered to solve the systemic disconnect between Ayush academia (**Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homoeopathy**) and evolving pharmaceutical, clinical, and regulatory industry demands.

Traditional recruitment relies on generic marks and multiple-choice questions that fail to assess real-world practical competencies such as **Schedule T GMP compliance, phytochemistry (HPTLC), Rasa Shastra formulation protocols, and pharmacovigilance reporting**. SkillSetu bridges this gap by introducing **standardized diagnostic radar benchmarking, hands-on industry micro-sprints, cryptographically verified digital dossiers, and role-tailored portals for 5 key stakeholders**.

---

## 🏛️ 5 Dedicated Stakeholder Portals

SkillSetu features a unified role-based authentication and gateway system providing specialized workflows for each stakeholder in the Ayush ecosystem:

```
                          ┌────────────────────────────────┐
                          │   SkillSetu National Gateway   │
                          └───────────────┬────────────────┘
                                          │
        ┌──────────────┬──────────────────┼──────────────────┬──────────────┐
        ▼              ▼                  ▼                  ▼              ▼
   ┌─────────┐   ┌───────────┐      ┌───────────┐      ┌───────────┐   ┌─────────┐
   │ Student │   │  Company  │      │  Faculty  │      │  College  │   │Ministry │
   │ Portal  │   │  Portal   │      │  Portal   │      │  Portal   │   │  Admin  │
   └─────────┘   └───────────┘      └───────────┘      └───────────┘   └─────────┘
```

### 1. 🎓 Student & Scholar Portal
- **Diagnostic Competency Radar**: Live multi-dimensional assessment across 6 core pillars (*Schedule T GMP, HPTLC Standardization, Classical Formulations, Clinical Diagnostics, Pharmacovigilance, and Regulatory Compliance*).
- **1-Click Verified Job Matches**: Direct matching with top enterprises (*Dabur R&D, Patanjali Research Foundation, Kottakkal Arya Vaidya Sala*) with pre-filtered competency vector thresholds.
- **Practical Micro-Bridge Courses**: Interactive laboratory micro-sprints designed to bridge identified skill gaps.
- **Cryptographic Digital Portfolio**: Tamper-proof student credentials with SHA-256 hash verification and downloadable verifiable PDF dossier.

### 2. 🏢 Industry & Enterprise Recruiter Portal
- **Candidate ATS Pipeline**: Zero-noise candidate sourcing filtered by practical competency scores rather than generic resumes.
- **Vector Match Filtering**: Granular candidate discovery with match thresholds (*>75%, >85%, >90%*).
- **Micro-Sprint Evidence Review**: Direct evaluation of practical student submissions (e.g., *HPTLC Rf Quantification Protocols, Cleanroom SOPs*).
- **1-Click Fast-Track Shortlisting**: Immediate candidate shortlisting and interview dispatch.
- **Role & Challenge Deployment**: Studio to deploy custom practical micro-sprint challenges.

### 3. 👨‍🏫 Faculty & Preceptor Portal
- **Cohort Radar Analytics**: Department-wide competency heatmaps across all enrolled scholars.
- **Pedagogical Interventions**: Data-driven recommendations to assign targeted micro-courses to cohorts before campus placement drives.
- **Micro-Sprint Evaluation Desk**: Dual-evaluation workflow with cryptographic mentor signature integration.
- **Micro-Course Authoring Studio**: Course builder aligned with NCISM/NCH syllabus guidelines.

### 4. 🏛️ College & Institutional Dean Portal
- **Departmental Competency Heatmap**: Real-time readiness metrics across *Dravyaguna, Rasa Shastra, Kayachikitsa, Panchakarma, and Shalya Tantra*.
- **NAAC Accreditation Audit Generator**: 1-Click generation of verifiable compliance packages for **NAAC Criteria 3.5 (Collaborations)** and **5.2 (Student Placement)**.
- **Placement Console & MoUs**: Tracking active corporate partnerships, placement rates, and institutional benchmarking.

### 5. 🛡️ Ministry of Ayush National Command Center
- **State-Wise Skill Deficit Map**: Interactive geographic intelligence monitoring talent supply and regional deficit alerts (*Rajasthan, Kerala, Uttar Pradesh, Maharashtra, Gujarat*).
- **National Ayush Talent Index**: Aggregated talent metrics across 1,24,500+ enrolled scholars and 300+ accredited colleges.
- **Role-Based Access Control (RBAC)**: Centralized identity governance and institutional verification.
- **Blockchain Consortium Nodes**: Real-time status monitor of 14 national apex ledger nodes (*NIA, AIIA, IPGT&RA, CCRAS*).

---

## 🛠️ Technology Stack

| Layer | Technologies | Description |
|---|---|---|
| **Frontend Core** | **React 19.2.8** | Modern component-driven UI architecture with hooks and state management |
| **Build Tooling** | **Vite 8.2.2** | Next-generation frontend tooling with lightning-fast HMR and bundling |
| **Styling & Design** | **Tailwind CSS 3.4.19** + **PostCSS** | Utility-first styling with custom botanical Ayush design tokens |
| **Icons & Visuals** | **Lucide React** + **Google Material Symbols** | Pixel-perfect, accessible, scalable vector icons |
| **Typography** | **Google Fonts** (*Plus Jakarta Sans*, *Inter*, *Noto Sans Devanagari*) | High-readability national typography system |
| **CI / CD Pipeline** | **GitHub Actions** (`deploy.yml`) | Automated build, test, and zero-downtime deployment to GitHub Pages |
| **Compliance** | **WCAG 2.1 AAA** | Contrast toggling, keyboard navigation, and responsive accessibility |

---

## 📁 Repository & Portfolio Folder Structure

```text
Skill-Setu-P2/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Actions CI/CD to GitHub Pages
├── public/                         # Public static assets & favicon
├── src/
│   ├── components/                 # Reusable UI components & modules
│   │   ├── portals/                # 5 Stakeholder role-specific portal views
│   │   │   ├── CollegePortalView.jsx       # Institutional dean analytics & NAAC generator
│   │   │   ├── CompanyPortalView.jsx       # Enterprise ATS & practical sprint review
│   │   │   ├── FacultyPortalView.jsx       # Cohort radar & micro-course authoring
│   │   │   ├── MinistryAdminPortalView.jsx # State deficit map & blockchain nodes
│   │   │   └── StudentPortalView.jsx       # Diagnostic assessment & 1-click jobs
│   │   ├── AboutEcosystem.jsx      # National Ayush framework & stakeholder quadrants
│   │   ├── AuthModal.jsx           # Quick modal authentication fallback
│   │   ├── FaqSection.jsx          # Comprehensive SIH FAQ accordion
│   │   ├── Features.jsx            # Core platform capabilities & bento grid
│   │   ├── Footer.jsx              # Official Ministry footer & navigation links
│   │   ├── Hero.jsx                # Asymmetrical botanical hero with live metrics
│   │   ├── HowItWorks.jsx          # 4-stage competency mapping pipeline
│   │   ├── Navbar.jsx              # Top sticky navigation with portal switcher
│   │   ├── ReadinessModal.jsx      # Interactive student readiness calculator
│   │   ├── RoleLoginModal.jsx      # Role-specific authentication with 1-Click demo login
│   │   └── ScrollReveal.jsx        # Viewport intersection animation wrapper
│   ├── data/                       # Application datasets and metadata
│   │   ├── portalData.js           # 5 stakeholder portals data, credentials & metadata
│   │   └── stitchData.js           # Ayush disciplines, opportunities & pipeline steps
│   ├── pages/                      # Top-level full-page views
│   │   ├── PortalSelectPage.jsx    # "Select Your Portal" 5-stakeholder selection screen
│   │   └── StakeholderDashboard.jsx# Unified dashboard wrapper with role switching
│   ├── App.jsx                     # Central routing & global application state manager
│   ├── index.css                   # Tailwind base directives & custom design system tokens
│   └── main.jsx                    # Application entry point & root renderer
├── index.html                      # HTML5 entry template with Google Fonts
├── package.json                    # Project metadata, dependencies & scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind theme extensions & Ayush color tokens
├── vite.config.js                  # Vite configuration & React plugin setup
└── README.md                       # Comprehensive platform documentation
```

---

## ⚡ Getting Started Locally

### Prerequisites
- **Node.js**: v20.x or v22.x LTS
- **npm**: v10+

### 1. Clone the Repository
```bash
git clone https://github.com/ShubhamRawal26/Skill-Setu-P2.git
cd Skill-Setu-P2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to interact with the platform.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🚀 Instant Jury Demonstration Mode

For judges and evaluators reviewing the prototype:
1. Click **"Log in"** in the top navigation bar to open the **Select Your Portal** screen.
2. Select any of the 5 stakeholder cards (**Student**, **Company**, **Faculty**, **College**, or **Ministry Admin**).
3. In the authentication modal, click the **"⚡ 1-Click Quick Demo Login"** button to immediately authenticate into that role's live workspace without typing credentials.
4. Use the **"Switch Portal"** dropdown in the top dashboard bar to switch between roles on the fly.

---

## 🌐 Automated GitHub Pages Deployment

This project includes an automated **GitHub Actions CI/CD workflow** (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages upon pushing to the `main` or `master` branch.

### Enabling GitHub Pages on your repository:
1. Go to your GitHub repository **Settings** → **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push any commit to `master` / `main` — the workflow will automatically compile and deploy.
4. Live site URL: `https://<USERNAME>.github.io/Skill-Setu-P2/`

---

## 📋 Hackathon Compliance & Standards

- **SIH 2026 Problem Statement**: `SIH26044` — *Academia-Industry Collaboration Platform for Ayush Skill Mapping & Placements*.
- **Ministry Alignment**: Formulated strictly under guidelines of the **Ministry of Ayush, Government of India**, aligning with **NCISM** and **NCH** curriculum standards.
- **Accessibility**: 100% semantic HTML5, focus indicator rings, and WCAG 2.1 AAA high-contrast accessibility support.
- **Responsiveness**: Fluid layout across all viewports (Mobile 360px, Tablet 768px, Desktop 1024px, 4K Displays 1920px+).

---

<div align="center">
  <sub>Developed for <strong>Smart India Hackathon 2026 (SIH 2026)</strong> • Ministry of Ayush, Government of India</sub>
</div>
