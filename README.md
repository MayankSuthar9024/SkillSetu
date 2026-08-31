# SkillSetu (कौशलसेतु) — Ministry of Ayush
### Unified Academia-Industry-Ministry Platform for Competency Mapping, Bridge Courses, and Verified Placements
**Smart India Hackathon 2026 (SIH 2026) • Problem Statement ID: SIH26044**

---

## 📌 Executive Overview

**SkillSetu** addresses the nationwide competency and skill gap between Ayush academic education (BAMS, MD, BHMS, BUMS, BYNS, BSMS) and modern pharmaceutical / clinical enterprise demands.

By combining:
1. **Radar Competency Benchmark Assessments** (diagnostics, phytochemistry, Schedule T GMP)
2. **Personalized 1-Click Micro-Bridge Course Modules** (e.g. Schedule T GMP Compliance 101)
3. **Hands-On Practical Micro-Sprints** (real industry case studies & rubric-evaluated tasks)
4. **Tamper-Proof Digital Portfolios** (verifiable cryptographic proof hashes)
5. **Industry Recruiter Pipelines** (1-click verified skill-vector matching)
6. **College & Faculty Deficit Heatmaps** (real-time departmental competency analytics)
7. **National Ministry Admin Heatmap** (state-by-state talent supply-demand tracking)

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Custom Design System Tokens (WCAG 2.1 AAA Compliant)
- **Icons**: Lucide React (100% SVG, strictly 0 emojis)
- **Animations**: Framer Motion & CSS hardware-accelerated transforms
- **Deployment**: GitHub Actions CI/CD to GitHub Pages (Automated on `main`/`master`)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v20+ or v22 LTS recommended)
- npm

### Installation & Local Run
```bash
# Clone the repository
git clone https://github.com/ShubhamRawal26/Skill-Setu-P2.git
cd Skill-Setu-P2

# Install dependencies
npm install

# Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the active port shown in terminal) in your browser.

### Building for Production
```bash
npm run build
```
The optimized production bundle is generated into the `dist/` directory.

---

## 🌐 Deployment (GitHub Pages via GitHub Actions)

The repository is configured with an automated continuous deployment pipeline using **GitHub Actions** (`.github/workflows/deploy.yml`).

### Setup & Automated Deployment Steps:

1. **Push Changes to GitHub**:
   Push your commits to the `main` (or `master`) branch:
   ```bash
   git add .
   git commit -m "Deploy SkillSetu to GitHub Pages"
   git push origin master
   ```

2. **Configure GitHub Repository Settings** *(One-Time Setup)*:
   - Navigate to your repository on GitHub: `https://github.com/USERNAME/REPOSITORY-NAME`
   - Click on **Settings** (top navigation tab).
   - In the left sidebar under *Code and automation*, click **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown.

3. **Monitor the Automated Build**:
   - Go to the **Actions** tab in your GitHub repository.
   - You will see the **Deploy SkillSetu to GitHub Pages** workflow run automatically.
   - Once completed, the deployment step outputs the active live URL.

4. **Access the Live Site**:
   GitHub Pages publishes your application at:
   ```text
   https://USERNAME.github.io/REPOSITORY-NAME/
   ```
   *(For this repository: `https://shubhamrawal26.github.io/Skill-Setu-P2/`)*

---

## 📜 Standards & Compliance
- **Design System**: Botanical Health-Tech & Gov-Tech design tokens with Medical Light and High-Contrast modes.
- **Accessibility**: Semantic HTML5, keyboard focus rings, WCAG 2.1 AAA contrast compliance.
- **Responsiveness**: Fully fluid across mobile (320px), tablet (768px), laptop (1024px), and ultra-wide desktops (1440px+).

---
*Created for Smart India Hackathon 2026 — Ministry of Ayush.*
