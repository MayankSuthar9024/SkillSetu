const { execSync } = require('child_process');
const fs = require('fs');

async function main() {
  console.log('Fetching all SIH26044 repositories (Page 1 & 2)...');
  
  // Fetch up to 100 items per_page=100
  const jsonStr = execSync('gh api "search/repositories?q=SIH26044&per_page=100"', { 
    encoding: 'utf-8', 
    maxBuffer: 20 * 1024 * 1024 
  });
  
  const data = JSON.parse(jsonStr);
  console.log(`Total count reported by GitHub: ${data.total_count}, Items returned: ${data.items.length}`);

  const repos = [];

  for (let i = 0; i < data.items.length; i++) {
    const item = data.items[i];
    console.log(`[${i + 1}/${data.items.length}] Fetching ${item.full_name}...`);

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

    // Also get commit count or languages if available
    let fileList = [];
    try {
      const rootContents = execSync(`gh api "repos/${item.full_name}/contents" --jq ".[].name"`, {
        encoding: 'utf-8',
        stdio: ['pipe', 'pipe', 'ignore']
      }).trim().split('\n').filter(Boolean);
      fileList = rootContents;
    } catch (e) {}

    repos.push({
      index: i + 1,
      full_name: item.full_name,
      html_url: item.html_url,
      description: item.description,
      language: item.language,
      stars: item.stargazers_count,
      forks: item.forks_count,
      open_issues: item.open_issues_count,
      created_at: item.created_at,
      updated_at: item.updated_at,
      pushed_at: item.pushed_at,
      size_kb: item.size,
      hasReadme,
      readme,
      fileList
    });
  }

  fs.writeFileSync('scratch/all_58_competitors_raw.json', JSON.stringify(repos, null, 2), 'utf-8');
  console.log('Successfully saved scratch/all_58_competitors_raw.json');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
