const fs = require('fs');
const path = require('path');
const axios = require('axios');
const sharp = require('sharp');

// --- CONFIGURATION ---
const TARGET_FOLDER = './public/images/gallery'; // Where to save the images
const QUALITY = 80; // WebP quality (1-100)

// --- IMAGE LIST EXTRACTED FROM YOUR JSX ---
const imageUrls = [

    // --- FROM GALLERY GRID (July 2024) ---
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-fine-line-neck-ghost-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-name-arm-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-fine-line-hand-flower-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-memorial-arm-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-lion-arm-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-zeus-leg-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-chest-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-colour-arm-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-fine-line-leg-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-dragon-shoulder-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-colour-arm-art-design1.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-star-leg-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-fine-line-neck-flower-initial-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-zeus-leg-art-design-3.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-shoulder-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-fine-line-arm-butterfly-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-fine-line-back-art-design.jpg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/ewdxw3ed.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-zeus-leg-art-design-2.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-clock-dove-arm-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-cat-arm-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-graphic-arm-art-design.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/07/Tattoo-face-cover-up-art-design.png",

    // --- FROM GALLERY GRID (August 2024) ---
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Warrior-with-lion-tattoo-.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Under-boobs-tattoo.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Sun-tattoo.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Stairwaydove-smile-now-cry-later-tatto.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Spark-minimalist-tattoo-.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Roman-numeral-tattoo.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Praying-hand-with-script-tattoo.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Polynesian-tattoo-.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Panda-warrior-colored-tattoo-.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Hand-holding-sword-tattoo-.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Illusion-3d-butterfly-tattoo-.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/IMG_3583.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/IMG_3608.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Koi-fish-tattoo-.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Leaf-hand-wrap-around-tattoo-.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Matching-water-and-fire-tattoo-.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Mirror-with-chess-piece-tattoo.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Number-14-minimalist-tattoo.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Gojo-and-levi-anime-tattoo-.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Geometric-tattoo-.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Full-sleeve-clock-dove-and-rose-tattoo.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Geometric-neck-tattoo-.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Foo-dog-chest-tattoo-.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Fist-bomb-tattoo.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Egyptian-sign-tattoo-.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Colored-spiderman-tattoo-.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Colored-portrait-tattoo.png",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Cherry-minimalist-tattoo-.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Cat-portrait-tattoo.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Back-piece-butterfly-tattoo.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Angel-number-tattoo.jpeg",
    "https://www.angeltattooz.co.uk/wp-content/uploads/2024/08/Hot-Dog-portrait-tattoo.png"
];

// Ensure directory exists
if (!fs.existsSync(TARGET_FOLDER)) {
    fs.mkdirSync(TARGET_FOLDER, { recursive: true });
}

async function downloadAndConvert(url) {
    try {
        // 1. Get Filename
        const filename = url.split('/').pop().split('.')[0]; // Remove extension
        const cleanFilename = filename.toLowerCase().replace(/[^a-z0-9]/g, '-'); // Clean chars
        const outputPath = path.join(TARGET_FOLDER, `${cleanFilename}.webp`);

        // 2. Check if already exists
        if (fs.existsSync(outputPath)) {
            console.log(`⏩ Skipping (Exists): ${cleanFilename}.webp`);
            return;
        }

        // 3. Download Image
        const response = await axios({ url, responseType: 'arraybuffer' });

        // 4. Convert to WebP
        await sharp(response.data)
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        console.log(`✅ Converted: ${cleanFilename}.webp`);

    } catch (error) {
        console.error(`❌ Error downloading ${url}:`, error.message);
    }
}

async function processAll() {
    console.log(`🚀 Starting download of ${imageUrls.length} images...`);

    // Process in chunks to avoid overwhelming the network
    const chunkSize = 5;
    for (let i = 0; i < imageUrls.length; i += chunkSize) {
        const chunk = imageUrls.slice(i, i + chunkSize);
        await Promise.all(chunk.map(url => downloadAndConvert(url)));
    }

    console.log('✨ All done! Images saved to ' + TARGET_FOLDER);
}

processAll();