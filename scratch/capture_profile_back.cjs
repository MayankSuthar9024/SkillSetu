const { execSync } = require('child_process');
const path = require('path');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targetDir = 'C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\5f628e77-eec9-44a5-8184-08ea06c84264\\screenshots';

const files = [
  { file: 'profile_about_section.png', w: 1280, h: 1800, url: 'http://localhost:3000/#profile' }
];

for (const f of files) {
  const dest = path.join(targetDir, f.file);
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${f.w},${f.h} --virtual-time-budget=3000 --screenshot="${dest}" "${f.url}"`;
  console.log('Running:', cmd);
  execSync(cmd, { stdio: 'inherit' });
  console.log('Saved:', dest);
}
