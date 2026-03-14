import fs from 'fs';
import path from 'path';
import { WorkCardProps } from '@/components/works';
import { toWorkThumbPath } from '@/lib/brand';
import { imageSizeFromFile } from 'image-size/fromFile';

// Base works configuration (metadata)
const worksMetadata: Omit<WorkCardProps, 'allImages'>[] = [
  { 
    id: '1', 
    image: '/images/works/annual/1.jpg', 
    title: '年度盛典', 
    titleEn: 'Annual Gala', 
    category: 'annual', 
    categoryLabel: '年会活动'
  },
  { 
    id: '2', 
    image: '/images/works/study/1.jpg', 
    title: '自然探索', 
    titleEn: 'Nature Exploration', 
    category: 'study', 
    categoryLabel: '研学'
  },
  { 
    id: '3', 
    image: '/images/works/travel/1.jpg', 
    title: '山川湖海', 
    titleEn: 'Mountains & Seas', 
    category: 'travel', 
    categoryLabel: '旅行'
  },
  { 
    id: '4', 
    image: '/images/works/wedding/1.jpg', 
    title: '浪漫婚礼', 
    titleEn: 'Romantic Wedding', 
    category: 'wedding', 
    categoryLabel: '婚礼'
  },
  { 
    id: '5', 
    image: '/images/works/birthday/1.jpg', 
    title: '生日庆典', 
    titleEn: 'Birthday Celebration', 
    category: 'birthday', 
    categoryLabel: '生日宴'
  },
  { 
    id: '6', 
    image: '/images/works/aerial/1.jpg', 
    title: '航拍视角', 
    titleEn: 'City Overview', 
    category: 'aerial', 
    categoryLabel: '航拍'
  },
  { 
    id: '7', 
    image: '/images/works/annual/2.jpg', 
    title: '企业年会', 
    titleEn: 'Corporate Event', 
    category: 'annual', 
    categoryLabel: '年会活动'
  },
  { 
    id: '8', 
    image: '/images/works/study/2.jpg', 
    title: '研学之旅', 
    titleEn: 'Study Tour', 
    category: 'study', 
    categoryLabel: '研学'
  },
];

export async function getWorksData(): Promise<WorkCardProps[]> {
  // Adjust path based on your project structure. 
  // Assuming src/public is where images are located relative to process.cwd()
  // Since package.json is in src, process.cwd() is src, so public is directly under it.
  const worksDir = path.join(process.cwd(), 'public', 'images', 'works');
  
  const worksWithImages = await Promise.all(worksMetadata.map(async (work) => {
    const categoryDir = path.join(worksDir, work.category);
    let images: string[] = [];
    
    try {
      if (fs.existsSync(categoryDir)) {
        const files = await fs.promises.readdir(categoryDir);
        
        // Filter for images and sort numerically
        const allFiles = files
          .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
          .sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)?.[0] || '0');
            const numB = parseInt(b.match(/\d+/)?.[0] || '0');
            return numA - numB;
          });

        const verticalImages: string[] = [];
        const horizontalImages: string[] = [];

        for (const file of allFiles) {
          const filePath = path.join(categoryDir, file);
          try {
            const dimensions = await imageSizeFromFile(filePath);
            // Check if vertical (height > width)
            if (dimensions && dimensions.height && dimensions.width && dimensions.height > dimensions.width) {
              verticalImages.push(`/images/works/${work.category}/${file}`);
            } else {
              horizontalImages.push(`/images/works/${work.category}/${file}`);
            }
          } catch {
            // If checking fails, treat as horizontal/fallback
            horizontalImages.push(`/images/works/${work.category}/${file}`);
          }
        }

        // Prioritize vertical images: if any vertical exist, use ONLY them.
        // Otherwise use horizontal images.
        let selectedAspectRatio: 'vertical' | 'horizontal' = 'horizontal';
        if (verticalImages.length > 0) {
          images = verticalImages;
          selectedAspectRatio = 'vertical';
        } else {
          images = horizontalImages;
          selectedAspectRatio = 'horizontal';
        }

        return {
          ...work,
          thumbnailImage: toWorkThumbPath(work.image),
          allImages: images,
          aspectRatio: selectedAspectRatio
        };
      }
    } catch (error) {
      console.error(`Error reading directory for category ${work.category}:`, error);
    }

    // If no images found, fallback to just the cover image if it exists, or empty array
    if (images.length === 0) {
      images = [work.image];
    }

    return {
      ...work,
      thumbnailImage: toWorkThumbPath(work.image),
      allImages: images
    };
  }));

  return worksWithImages;
}
