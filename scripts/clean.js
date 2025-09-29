const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning build artifacts...\n');

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`✅ Removed: ${path.basename(dirPath)}/`);
    return true;
  }
  return false;
}

const dirsToClean = ['dist', 'coverage'];
let cleaned = 0;

dirsToClean.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (removeDir(dirPath)) {
    cleaned++;
  }
});

if (cleaned > 0) {
  console.log(`\n✅ Cleaned ${cleaned} director${cleaned > 1 ? 'ies' : 'y'}\n`);
} else {
  console.log('\n✅ Nothing to clean\n');
}

process.exit(0);