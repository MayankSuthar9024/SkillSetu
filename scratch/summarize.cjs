const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scratch/competitors_readmes.json', 'utf8'));
const withReadme = data.filter(d => d.hasReadme && d.readme.trim().length > 40);

console.log('Total repos found:', data.length);
console.log('Repos with substantive READMEs:', withReadme.length);

const summary = withReadme.map(r => ({
  name: r.full_name,
  url: r.html_url,
  desc: r.description,
  lang: r.language,
  stars: r.stars,
  readmeLen: r.readme.length,
  headings: (r.readme.match(/^#+\s+.+$/gm) || []).slice(0, 10),
  readmeSnippet: r.readme.slice(0, 600)
}));

fs.writeFileSync('scratch/competitors_summary.json', JSON.stringify(summary, null, 2));
console.log('Summary written to scratch/competitors_summary.json');
