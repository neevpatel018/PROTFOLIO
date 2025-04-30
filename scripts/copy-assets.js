const fs = require('fs');
const path = require('path');

// Create public/fonts directory if it doesn't exist
const fontsDir = path.join(__dirname, '../public/fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Copy grid.svg to public directory
const gridSource = path.join(__dirname, '../public/grid.svg');
const gridDest = path.join(__dirname, '../out/grid.svg');
if (fs.existsSync(gridSource)) {
  fs.copyFileSync(gridSource, gridDest);
}

console.log('Static assets copied successfully!'); 