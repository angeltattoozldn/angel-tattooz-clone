const fs = require('fs');
const path = require('path');

const FORBIDDEN_STRINGS = [
  "Mount Parade",
  "Mount Pleasant",
  "EN4 9DD",
  "en4 9dd",
  "020 8",
  "0208"
];

const SCAN_DIRS = ['app', 'components', 'config', 'content', 'lib'];
let violations = 0;

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(file)) {
        scanDir(fullPath);
      }
    } else if (/\.(tsx|ts|jsx|js|json|md|mdx)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      FORBIDDEN_STRINGS.forEach((forbidden) => {
        if (content.includes(forbidden)) {
          console.error(`[NAP VIOLATION] Legacy string "${forbidden}" found in ${fullPath}`);
          violations++;
        }
      });
    }
  }
}

console.log(">>> Starting NAP Integrity Audit...");
SCAN_DIRS.forEach(scanDir);

if (violations > 0) {
  console.error(`FAILED: ${violations} legacy NAP occurrences detected. Cleanse before deployment.`);
  process.exit(1);
} else {
  console.log("PASSED: 100% NAP Integrity. Zero legacy address traces found.");
  process.exit(0);
}
