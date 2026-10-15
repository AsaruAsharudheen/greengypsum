const ffmpegPath = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = 'public/video/mobile-size-hero-video.mp4';
const outputDir = 'public/video-frames-mobile';

if (fs.existsSync(outputDir)) {
    console.log('Clearing old frames...');
    const files = fs.readdirSync(outputDir);
    for (const file of files) {
        fs.unlinkSync(path.join(outputDir, file));
    }
} else {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Extracting new mobile frames...');
try {
  // Mobile videos are usually portrait. We'll use 24 fps and scale to 720p height or width (e.g., scale=720:-1 or scale=-1:720).
  // Actually, for portrait, height is the longer edge, so maybe scale to height 1280 or width 720. Let's just use 720 width.
  // We'll use scale=720:-1 to keep it reasonable.
  execSync(`"${ffmpegPath}" -i "${videoPath}" -vf "fps=24,scale=720:-1" -q:v 5 "${outputDir}/frame_%04d.jpg" -y`);
  console.log('Frames extracted successfully!');
  
  const files = fs.readdirSync(outputDir).filter(fn => fn.endsWith('.jpg'));
  console.log(`Total mobile frames: ${files.length}`);
} catch (error) {
  console.error('Error extracting frames:', error.message);
}
