import fs from 'fs';
import path from 'path';

const assets = [
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/images/adham-dannaway-designer-coder.jpg',
    dest: 'public/images/adham-dannaway-designer-coder.jpg'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/images/sprite-home.png',
    dest: 'public/images/sprite-home.png'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/images/sprite.png',
    dest: 'public/images/sprite.png'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/images/sprite-mobile.png',
    dest: 'public/images/sprite-mobile.png'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/images/sprite@2x.png',
    dest: 'public/images/sprite@2x.png'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/images/sprite-mobile@2x.png',
    dest: 'public/images/sprite-mobile@2x.png'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/uploads/2025/05/feature-figma-design-system.webp',
    dest: 'public/images/feature-figma-design-system.webp'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/uploads/2022/12/feature-ui-design-book.webp',
    dest: 'public/images/feature-ui-design-book.webp'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/uploads/2020/08/feature-william-hill-design-system.jpg',
    dest: 'public/images/feature-william-hill-design-system.jpg'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/fonts/proximanova-bold-webfont.woff',
    dest: 'public/fonts/proximanova-bold-webfont.woff'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/fonts/proximanova-semibold-webfont.woff2',
    dest: 'public/fonts/proximanova-semibold-webfont.woff2'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/fonts/proximanova-semibold-webfont.woff',
    dest: 'public/fonts/proximanova-semibold-webfont.woff'
  },
  {
    url: 'https://www.adhamdannaway.com/wp-content/themes/dannaway/fonts/proximanova-light-webfont.woff',
    dest: 'public/fonts/proximanova-light-webfont.woff'
  },
  {
    url: 'https://www.adhamdannaway.com/favicon.ico',
    dest: 'public/favicon.ico'
  }
];

async function download(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) {
      console.error(`Failed to download ${url}: status ${res.status}`);
      return;
    }
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
    console.log(`Downloaded ${url} -> ${dest} (${buffer.byteLength} bytes)`);
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
  }
}

async function main() {
  for (const asset of assets) {
    await download(asset.url, asset.dest);
  }
  console.log('All downloads finished.');
}

main();
