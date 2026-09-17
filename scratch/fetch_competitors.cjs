const { execSync } = require('child_process');
const fs = require('fs');

try {
  const jsonStr = execSync('gh api "search/repositories?q=SIH26044&per_page=40"', { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 });
  const data = JSON.parse(jsonStr);
  console.log('Total repos found:', data.total_count, 'Fetched items:', data.items.length);

  const results = [];
  for (const item of data.items) {
    let readme = '';
    let hasReadme = false;
    try {
      const readmeBase64 = execSync(`gh api "repos/${item.full_name}/readme" --jq .content`, {
        encoding: 'utf-8',
        stdio: ['pipe', 'pipe', 'ignore']
      }).trim();
      readme = Buffer.from(readmeBase64, 'base64').toString('utf-8');
      hasReadme = true;
    } catch (e) {
      hasReadme = false;
    }

    results.push({
      full_name: item.full_name,
      html_url: item.html_url,
      description: item.description,
      language: item.language,
      stars: item.stargazers_count,
      forks: item.forks_count,
      updated_at: item.updated_at,
      hasReadme,
      readme
    });
  }

  fs.writeFileSync('scratch/competitors_readmes.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Successfully saved to scratch/competitors_readmes.json');
} catch (err) {
  console.error('Error:', err);
}
