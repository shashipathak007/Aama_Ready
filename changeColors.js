const fs = require('fs');
const path = require('path');

const ColorMap = {
  // theme colors
  '#FDFBF7': '#FDFBFB',
  '#EBE1D8': '#EAE2E3',
  '#C19FA0': '#F48B9E',
  '#F4EAE9': '#FDF2F4',
  
  // greens
  '#748B77': '#2B6D45',
  '#EFF3EE': '#EBF5ED',
  '#C0D1C2': '#6EB88B',

  // reds
  '#B67979': '#A73C44',
  '#FDF6F6': '#FCEDED',
  '#E8C9C9': '#DE8E94',

  // ambers
  '#B5916A': '#9A5A17',
  '#FDF9F2': '#FBF2E1',
  '#D3BBA6': '#D69E58', // old D3BBA6

  // blues
  '#849BB4': '#1C6B9E',
  '#F2F5F8': '#EAF3FA',

  // teals
  '#689793': '#127163',
  '#EFF6F5': '#E1F5F2',

  // text
  '#4A4340': '#2D2325',
  '#8A7D78': '#6E6264',
  '#C2B8B3': '#A69B9D',

  // Phase Specific (faded previously)
  '#E1A69D': '#F77F6E', // Phase 2 Coral
  '#9CBEAD': '#48AD8F', // Phase 3 Mint
  '#C8AD8D': '#E69E45', // Phase 4 Honey

  // Misc UI Light Bgs
  '#FCFAF8': '#FEF7F9', // F8F7FF original
  '#FDF7F4': '#FFF5F0', // original
  '#F0F6F4': '#E8FAF4', // original 
  '#ECE4DD': '#F2EBEC', // F0F0F0 original
};

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = content;
      
      for (const [oldColor, newColor] of Object.entries(ColorMap)) {
        const regex = new RegExp(oldColor, 'gi');
        updated = updated.replace(regex, newColor);
      }
      
      if (updated !== content) {
        fs.writeFileSync(fullPath, updated);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
console.log("Done upgrading colors inside src!");
