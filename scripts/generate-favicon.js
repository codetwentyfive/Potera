const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    // Convert SVG to PNG first (32x32 for favicon)
    await sharp('public/images/logo.svg')
      .resize(32, 32)
      .toFile('public/favicon.png');

    // Convert PNG to ICO using sharp
    const pngBuffer = await fs.promises.readFile('public/favicon.png');
    await sharp(pngBuffer)
      .toFile('public/favicon.ico');

    // Clean up temporary PNG file
    await fs.promises.unlink('public/favicon.png');

    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

// Run the function
generateFavicon(); 