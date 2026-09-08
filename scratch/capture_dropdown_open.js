import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\04922870-97d8-4c19-936b-e03d314b5201';

// We can open the page with a small hash or script to hover / open profile dropdown
const fullPath = path.join(artifactDir, 'verified_dropdown_open.png');
const cmd = `"${chromePath}" --headless --disable-gpu --force-color-profile=srgb --virtual-time-budget=3000 --hide-scrollbars --window-size=1280,600 --screenshot="${fullPath}" "http://localhost:3000/#profile"`;

try {
  execSync(cmd, { stdio: 'ignore' });
  console.log('Saved to:', fullPath);
} catch (e) {
  console.error(e);
}
