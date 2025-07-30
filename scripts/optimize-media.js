/**
 * Media Optimization Script
 * This script provides recommendations for optimizing your media files
 */

const fs = require('fs');
const path = require('path');

// File size limits (in bytes)
const LIMITS = {
  IMAGE_MAX_SIZE: 500 * 1024, // 500KB
  VIDEO_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  HERO_VIDEO_MAX_SIZE: 2 * 1024 * 1024, // 2MB for hero videos
};

// Supported formats
const IMAGE_FORMATS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];
const VIDEO_FORMATS = ['.mp4', '.webm', '.mov', '.avi'];

function analyzeMediaFiles(directory) {
  const results = {
    images: [],
    videos: [],
    totalSize: 0,
    issues: []
  };

  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        const size = stat.size;
        const relativePath = path.relative(directory, filePath);
        
        results.totalSize += size;
        
        if (IMAGE_FORMATS.includes(ext)) {
          const imageInfo = {
            path: relativePath,
            size: size,
            sizeFormatted: formatBytes(size),
            ext: ext
          };
          
          results.images.push(imageInfo);
          
          if (size > LIMITS.IMAGE_MAX_SIZE) {
            results.issues.push({
              type: 'IMAGE_TOO_LARGE',
              file: relativePath,
              currentSize: formatBytes(size),
              recommendedSize: formatBytes(LIMITS.IMAGE_MAX_SIZE),
              priority: size > LIMITS.IMAGE_MAX_SIZE * 2 ? 'HIGH' : 'MEDIUM'
            });
          }
        }
        
        if (VIDEO_FORMATS.includes(ext)) {
          const isHeroVideo = file.toLowerCase().includes('hero') || file.toLowerCase().includes('layer');
          const maxSize = isHeroVideo ? LIMITS.HERO_VIDEO_MAX_SIZE : LIMITS.VIDEO_MAX_SIZE;
          
          const videoInfo = {
            path: relativePath,
            size: size,
            sizeFormatted: formatBytes(size),
            ext: ext,
            isHero: isHeroVideo
          };
          
          results.videos.push(videoInfo);
          
          if (size > maxSize) {
            results.issues.push({
              type: 'VIDEO_TOO_LARGE',
              file: relativePath,
              currentSize: formatBytes(size),
              recommendedSize: formatBytes(maxSize),
              priority: size > maxSize * 2 ? 'HIGH' : 'MEDIUM',
              isHero: isHeroVideo
            });
          }
        }
      }
    });
  }
  
  scanDirectory(directory);
  return results;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function generateOptimizationReport(results) {
  console.log('\\n🔍 MEDIA OPTIMIZATION REPORT\\n');
  console.log('📊 Summary:');
  console.log(`   Total files analyzed: ${results.images.length + results.videos.length}`);
  console.log(`   Total size: ${formatBytes(results.totalSize)}`);
  console.log(`   Issues found: ${results.issues.length}`);
  
  // High priority issues
  const highPriorityIssues = results.issues.filter(issue => issue.priority === 'HIGH');
  if (highPriorityIssues.length > 0) {
    console.log('\\n🚨 HIGH PRIORITY ISSUES:');
    highPriorityIssues.forEach(issue => {
      console.log(`   ❌ ${issue.file}`);
      console.log(`      Current: ${issue.currentSize} | Recommended: ${issue.recommendedSize}`);
    });
  }
  
  // Largest files
  const allFiles = [...results.images, ...results.videos].sort((a, b) => b.size - a.size).slice(0, 10);
  console.log('\\n📈 LARGEST FILES:');
  allFiles.forEach((file, index) => {
    console.log(`   ${index + 1}. ${file.path} (${file.sizeFormatted})`);
  });
  
  // Recommendations
  console.log('\\n💡 OPTIMIZATION RECOMMENDATIONS:\\n');
  
  console.log('📸 IMAGES:');
  console.log('   • Convert JPEGs to WebP format (60-80% size reduction)');
  console.log('   • Use AVIF format for even better compression');
  console.log('   • Implement responsive images with Next.js Image component');
  console.log('   • Add lazy loading for below-the-fold images');
  console.log('   • Consider progressive JPEG for large images');
  
  console.log('\\n🎥 VIDEOS:');
  console.log('   • Convert MP4 to WebM format (20-50% size reduction)');
  console.log('   • Use lower bitrates for background videos');
  console.log('   • Implement lazy loading for non-critical videos');
  console.log('   • Add poster images to reduce initial load');
  console.log('   • Consider using streaming services for large videos');
  
  console.log('\\n⚡ PERFORMANCE TIPS:');
  console.log('   • Preload critical media files');
  console.log('   • Use CDN for media delivery');
  console.log('   • Implement connection-aware loading');
  console.log('   • Add blur placeholders for better UX');
  console.log('   • Enable browser caching with proper headers');
}

function generateOptimizationCommands(results) {
  console.log('\\n🛠️  FFMPEG OPTIMIZATION COMMANDS:\\n');
  
  const largeVideos = results.videos.filter(video => 
    results.issues.some(issue => issue.file === video.path && issue.type === 'VIDEO_TOO_LARGE')
  );
  
  largeVideos.forEach(video => {
    const inputPath = video.path;
    const outputPath = inputPath.replace(/\\.(mp4|mov|avi)$/i, '_optimized.mp4');
    const webmpPath = inputPath.replace(/\\.(mp4|mov|avi)$/i, '_optimized.webm');
    
    console.log(`# Optimize ${video.path}:`);
    if (video.isHero) {
      // Hero video optimization (higher quality, smaller size)
      console.log(`ffmpeg -i "${inputPath}" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 64k -movflags +faststart "${outputPath}"`);
      console.log(`ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf 35 -b:v 0 -c:a libopus -b:a 64k "${webmpPath}"`);
    } else {
      // Regular video optimization
      console.log(`ffmpeg -i "${inputPath}" -c:v libx264 -crf 32 -preset fast -c:a aac -b:a 32k -movflags +faststart "${outputPath}"`);
      console.log(`ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf 40 -b:v 0 -c:a libopus -b:a 32k "${webmpPath}"`);
    }
    console.log('');
  });
  
  console.log('🖼️  IMAGE OPTIMIZATION COMMANDS:\\n');
  
  const largeImages = results.images.filter(image => 
    results.issues.some(issue => issue.file === image.path && issue.type === 'IMAGE_TOO_LARGE')
  );
  
  largeImages.forEach(image => {
    const inputPath = image.path;
    const webpPath = inputPath.replace(/\\.(jpg|jpeg|png)$/i, '.webp');
    const avifPath = inputPath.replace(/\\.(jpg|jpeg|png)$/i, '.avif');
    
    console.log(`# Optimize ${image.path}:`);
    console.log(`cwebp -q 80 "${inputPath}" -o "${webpPath}"`);
    console.log(`npx avif --input="${inputPath}" --output="${avifPath}" --quality=75`);
    console.log('');
  });
}

// Run the analysis
const publicDir = path.join(__dirname, '..', 'public');
if (fs.existsSync(publicDir)) {
  const results = analyzeMediaFiles(publicDir);
  generateOptimizationReport(results);
  generateOptimizationCommands(results);
  
  console.log('\\n📝 NEXT STEPS:');
  console.log('   1. Install optimization tools: npm install -g cwebp-bin avif-cli');
  console.log('   2. Run the optimization commands above');
  console.log('   3. Update your components to use OptimizedImage and OptimizedVideo');
  console.log('   4. Test the website performance with optimized media');
  console.log('   5. Monitor bundle size and loading times');
} else {
  console.log('❌ Public directory not found. Make sure you\'re running this from the project root.');
}
