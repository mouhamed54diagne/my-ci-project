const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process...\n');

// Create dist directory
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('✅ Created dist directory');
}

// Copy source files to dist
const srcDir = path.join(__dirname, '..', 'src');
const files = fs.readdirSync(srcDir).filter(file => 
  file.endsWith('.js') && !file.endsWith('.test.js') && !file.endsWith('.spec.js')
);

console.log('\n📦 Copying files to dist:');
files.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const distPath = path.join(distDir, file);
  fs.copyFileSync(srcPath, distPath);
  console.log(`   ✓ ${file}`);
});

// Create package info
const packageInfo = {
  name: 'ci-pipeline-project',
  version: '1.0.0',
  buildDate: new Date().toISOString(),
  files: files,
};

fs.writeFileSync(
  path.join(distDir, 'build-info.json'),
  JSON.stringify(packageInfo, null, 2)
);
console.log('   ✓ build-info.json');

console.log('\n✅ Build completed successfully!\n');
console.log(`📂 Output directory: ${distDir}`);
console.log(`📄 Files built: ${files.length}`);
console.log('');

process.exit(0);