const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('scratch/competitors_readmes.json', 'utf8'));
const withReadme = data.filter(d => d.hasReadme && d.readme.trim().length > 40);

// Sort by stars descending, then readme length descending
withReadme.sort((a, b) => b.stars - a.stars || b.readme.length - a.readme.length);

let md = `# SIH26044 Competitor Repositories - Comprehensive Intelligence & README Dossier

> **Problem Statement ID:** SIH26044  
> **Title:** Portal for Academia – Industry Collaboration for Skill Mapping, Internships and Placement  
> **Ministry / Org:** Ministry of Ayush / Smart Automation  
> **Total Repos Found on GitHub:** 58 (Top 40 Analyzed, ${withReadme.length} with full READMEs)

---

## 📊 Executive Summary: What Competitors Are Building

Across the analyzed competitor repositories, key trends, common features, and recurring patterns include:

1. **Core 4-Stakeholder Architecture:**
   - **Student Portal:** Skill profiling, resume upload/parsing (NLP), skill gap radar charts, recommended courses (SWAYAM/NPTEL/Coursera), internship/job application tracker.
   - **Industry / Recruiter Portal:** Job/internship posting with required skill vectors/levels, candidate search with match percentage filters, 1-click shortlisting, interview scheduling (WebRTC video calls in advanced repos).
   - **Institution / TPO / Faculty Portal:** Batch readiness analytics, curriculum gap insights, institutional student endorsements, placement drives management.
   - **Ministry / Admin Console:** National roll-up metrics, college performance benchmarks, macro skill trend monitoring.

2. **Common Buzzwords & Technical Differentiators Used:**
   - **NSQF Alignment:** Mapping skills to the National Skills Qualification Framework.
   - **AI / Explainable Matching:** Cosine similarity of skill vectors, weighted match scores with transparent explanations for judges.
   - **Skill Gap Diagnostics:** Visual radar charts showing acquired vs required skill levels.
   - **Ayush & Pharma Specialization:** Specifically tailoring skill sets for Ayurveda, Unani, Siddha, Homeopathy, and bio-pharma industrial compliance.

---

## 📑 Detailed Competitor Repositories & Full READMEs

`;

withReadme.forEach((r, idx) => {
  md += `### ${idx + 1}. [${r.full_name}](${r.html_url})\n\n`;
  md += `- **Repository URL:** [${r.html_url}](${r.html_url})\n`;
  md += `- **Primary Language:** \`${r.language || 'N/A'}\`\n`;
  md += `- **Stars:** ⭐ ${r.stars} | **Forks:** 🍴 ${r.forks}\n`;
  md += `- **Description:** ${r.description ? r.description : '*No description provided*'}\n`;
  md += `- **Last Updated:** ${r.updated_at}\n\n`;
  md += `<details>\n<summary><b>📄 Click to expand full README for ${r.full_name} (${r.readme.length} chars)</b></summary>\n\n`;
  md += `\`\`\`markdown\n${r.readme}\n\`\`\`\n\n`;
  md += `</details>\n\n---\n\n`;
});

const outPath = path.resolve('scratch/sih26044_competitors_dossier.md');
fs.writeFileSync(outPath, md, 'utf-8');
console.log('Saved comprehensive competitor dossier to:', outPath);
