const fs = require('fs');
const path = require('path');

const FORBIDDEN_TOKENS = [
  "248 Chase Side",
  "N14 4PL",
  "Mount Parade",
  "Mount Pleasant",
  "EN4 9DD",
  "020 8216 3400",
  "02082163400",
  "020 8",
  "0208"
];

const TARGET_DIRECTORIES = ['app', 'components', 'config', 'content', 'lib', 'public'];
const ALLOWED_DISAVOWAL_FILES = [path.join('app', 'llms.txt', 'route.ts')];
let violations = 0;

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(entry.name)) {
        scanDirectory(fullPath);
      }
    } else if (/\.(tsx|ts|jsx|js|json|md|mdx|txt)$/.test(entry.name)) {
      if (ALLOWED_DISAVOWAL_FILES.includes(fullPath)) continue;
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      FORBIDDEN_TOKENS.forEach((token) => {
        if (fileContent.includes(token)) {
          console.error(`[CRITICAL NAP VIOLATION] Legacy token "${token}" detected in: ${fullPath}`);
          violations++;
        }
      });
    }
  }
}

console.log(">>> Running NAP & Contact Number Integrity Audit...");
TARGET_DIRECTORIES.forEach(scanDirectory);

if (violations > 0) {
  console.error(`FAILED: ${violations} legacy data violation(s) detected. Cleanse before proceeding.`);
  process.exit(1);
} else {
  console.log("PASSED: Repository is 100% clean. Zero legacy addresses or retired landlines found.");
  process.exit(0);
}
