const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const QUALITY = {
  WEBP: 80,
  AVIF: 75,
  JPEG: 85,
  PNG: 90
};

const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;

async function optimizeImage(inputPath, outputDir) {
  try {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const inputBuffer = fs.readFileSync(inputPath);
    
    // Get image metadata
    const metadata = await sharp(inputBuffer).metadata();
    console.log(`Processing: ${inputPath} (${metadata.width}x${metadata.height})`);
    
    // Calculate new dimensions while maintaining aspect ratio
    let newWidth = metadata.width;
    let newHeight = metadata.height;
    
    if (newWidth > MAX_WIDTH || newHeight > MAX_HEIGHT) {
      const widthRatio = MAX_WIDTH / newWidth;
      const heightRatio = MAX_HEIGHT / newHeight;
      const ratio = Math.min(widthRatio, heightRatio);
      
      newWidth = Math.round(newWidth * ratio);
      newHeight = Math.round(newHeight * ratio);
    }
    
    // Create sharp instance with resizing
    const sharpInstance = sharp(inputBuffer).resize(newWidth, newHeight, {
      fit: 'inside',
      withoutEnlargement: true
    });
    
    // Generate WebP version
    const webpPath = path.join(outputDir, `${filename}.webp`);
    await sharpInstance.clone()
      .webp({ quality: QUALITY.WEBP, effort: 6 })
      .toFile(webpPath);
    console.log(`✓ Created WebP: ${webpPath}`);
    
    // Generate AVIF version (smaller but newer format)
    const avifPath = path.join(outputDir, `${filename}.avif`);
    await sharpInstance.clone()
      .avif({ quality: QUALITY.AVIF, effort: 9 })
      .toFile(avifPath);
    console.log(`✓ Created AVIF: ${avifPath}`);
    
    // Generate optimized original format
    const ext = path.extname(inputPath).toLowerCase();
    const optimizedPath = path.join(outputDir, `${filename}_optimized${ext}`);
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharpInstance.clone()
        .jpeg({ quality: QUALITY.JPEG, mozjpeg: true })
        .toFile(optimizedPath);
    } else if (ext === '.png') {
      await sharpInstance.clone()
        .png({ quality: QUALITY.PNG, compressionLevel: 9 })
        .toFile(optimizedPath);
    }
    console.log(`✓ Created optimized: ${optimizedPath}`);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const avifSize = fs.statSync(avifPath).size;
    
    console.log(`  Original: ${formatBytes(originalSize)}`);
    console.log(`  WebP: ${formatBytes(webpSize)} (${Math.round((1 - webpSize/originalSize) * 100)}% smaller)`);
    console.log(`  AVIF: ${formatBytes(avifSize)} (${Math.round((1 - avifSize/originalSize) * 100)}% smaller)`);
    console.log('');
    
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function optimizeImagesInDirectory(inputDir, outputDir) {
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(async (file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Create corresponding subdirectory in output
        const relativePath = path.relative(inputDir, filePath);
        const outputSubDir = path.join(outputDir, relativePath);
        if (!fs.existsSync(outputSubDir)) {
          fs.mkdirSync(outputSubDir, { recursive: true });
        }
        processDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          const relativePath = path.relative(inputDir, dir);
          const targetOutputDir = path.join(outputDir, relativePath);
          await optimizeImage(filePath, targetOutputDir);
        }
      }
    });
  }
  
  processDirectory(inputDir);
}

// Run optimization
const publicDir = path.join(__dirname, '..', 'public');
const optimizedDir = path.join(publicDir, 'optimized');

console.log('🖼️  Starting image optimization...');
console.log(`Input: ${publicDir}`);
console.log(`Output: ${optimizedDir}`);
console.log('');

optimizeImagesInDirectory(publicDir, optimizedDir).then(() => {
  console.log('✨ Image optimization complete!');
}).catch(error => {
  console.error('❌ Error during optimization:', error);
});
