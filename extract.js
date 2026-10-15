const ffmpegPath = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = 'public/video/gypsumvideo.mp4';
const outputDir = 'public/video-frames';

// Clear old frames
if (fs.existsSync(outputDir)) {
    console.log('Clearing old frames...');
    const files = fs.readdirSync(outputDir);
    for (const file of files) {
        fs.unlinkSync(path.join(outputDir, file));
    }
} else {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Extracting new frames...');
try {
  execSync(`"${ffmpegPath}" -i "${videoPath}" -vf "fps=24,scale=-1:720" -q:v 5 "${outputDir}/frame_%04d.jpg" -y`);
  console.log('Frames extracted successfully!');
  
  const files = fs.readdirSync(outputDir).filter(fn => fn.endsWith('.jpg'));
  console.log(`Total frames: ${files.length}`);
} catch (error) {
  console.error('Error extracting frames:', error.message);
}
