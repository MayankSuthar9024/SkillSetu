import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\04922870-97d8-4c19-936b-e03d314b5201';

if (!fs.existsSync(artifactDir)) {
  fs.mkdirSync(artifactDir, { recursive: true });
}

function capture(url, outputFile, width = 1280, height = 1200) {
  const fullPath = path.join(artifactDir, outputFile);
  const cmd = `"${chromePath}" --headless --disable-gpu --force-color-profile=srgb --virtual-time-budget=3000 --hide-scrollbars --window-size=${width},${height} --screenshot="${fullPath}" "${url}"`;
  console.log('Capturing:', outputFile);
  try {
    execSync(cmd, { stdio: 'ignore' });
    console.log('Saved:', outputFile);
  } catch (e) {
    console.error('Failed:', outputFile, e.message);
  }
}

capture('http://localhost:3000/#profile', 'verified_desktop_profile.png', 1280, 1400);
capture('http://localhost:3000/#profile', 'verified_mobile_profile.png', 390, 1800);
capture('http://localhost:3000/#dashboard-student', 'verified_desktop_dashboard.png', 1280, 1400);
capture('http://localhost:3000/#dashboard-student', 'verified_mobile_dashboard.png', 390, 1800);
console.log('Screenshots capture complete!');
