import { WorkCardProps } from '@/components/works';
import { toWorkThumbPath } from '@/lib/brand';

// Helper to generate 18 images for a category
const generateImages = (category: string) => {
  return Array.from({ length: 18 }, (_, i) => `/images/works/${category}/${i + 1}.jpg`);
};

export const allWorks: WorkCardProps[] = [
  { 
    id: '1', 
    image: '/images/works/annual/1.jpg', 
    thumbnailImage: toWorkThumbPath('/images/works/annual/1.jpg'),
    title: '年度盛典', 
    titleEn: 'Annual Gala', 
    category: 'annual', 
    categoryLabel: '年会活动',
    allImages: generateImages('annual')
  },
  { 
    id: '2', 
    image: '/images/works/study/1.jpg', 
    thumbnailImage: toWorkThumbPath('/images/works/study/1.jpg'),
    title: '自然探索', 
    titleEn: 'Nature Exploration', 
    category: 'study', 
    categoryLabel: '研学',
    allImages: generateImages('study')
  },
  { 
    id: '3', 
    image: '/images/works/travel/1.jpg', 
    thumbnailImage: toWorkThumbPath('/images/works/travel/1.jpg'),
    title: '山川湖海', 
    titleEn: 'Mountains & Seas', 
    category: 'travel', 
    categoryLabel: '旅行',
    allImages: generateImages('travel')
  },
  { 
    id: '4', 
    image: '/images/works/wedding/1.jpg', 
    thumbnailImage: toWorkThumbPath('/images/works/wedding/1.jpg'),
    title: '浪漫婚礼', 
    titleEn: 'Romantic Wedding', 
    category: 'wedding', 
    categoryLabel: '婚礼',
    allImages: generateImages('wedding')
  },
  { 
    id: '5', 
    image: '/images/works/birthday/1.jpg', 
    thumbnailImage: toWorkThumbPath('/images/works/birthday/1.jpg'),
    title: '生日庆典', 
    titleEn: 'Birthday Celebration', 
    category: 'birthday', 
    categoryLabel: '生日宴',
    allImages: generateImages('birthday')
  },
  { 
    id: '6', 
    image: '/images/works/aerial/1.jpg', 
    thumbnailImage: toWorkThumbPath('/images/works/aerial/1.jpg'),
    title: '航拍视角', 
    titleEn: 'City Overview', 
    category: 'aerial', 
    categoryLabel: '航拍',
    allImages: generateImages('aerial')
  },
  { 
    id: '7', 
    image: '/images/works/annual/2.jpg', 
    thumbnailImage: toWorkThumbPath('/images/works/annual/2.jpg'),
    title: '企业年会', 
    titleEn: 'Corporate Event', 
    category: 'annual', 
    categoryLabel: '年会活动',
    allImages: generateImages('annual')
  },
  { 
    id: '8', 
    image: '/images/works/study/2.jpg', 
    thumbnailImage: toWorkThumbPath('/images/works/study/2.jpg'),
    title: '研学之旅', 
    titleEn: 'Study Tour', 
    category: 'study', 
    categoryLabel: '研学',
    allImages: generateImages('study')
  },
];
