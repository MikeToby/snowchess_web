import type { TeamMember } from '@/components/team';

export interface TeamProfile extends TeamMember {
  slug: string;
  motto: string;
  experience: string[];
  specialties: string[];
  longBio: string;
}

export const teamMembers: TeamProfile[] = [
  {
    id: '1',
    slug: 'yuan-tianyi',
    name: '袁天弈',
    nameEn: 'Yuan Tianyi',
    title: '创始人 / 首席摄影师',
    titleEn: 'Founder / Lead Photographer',
    bio: '10年商业摄影经验，专注品牌视觉塑造。曾为多家知名企业提供视觉解决方案。',
    bioEn: '10 years of commercial photography experience focused on brand visuals.',
    longBio:
      '袁天弈是雪弈摄影工作室创始人，长期深耕成都本地活动摄影、商业拍摄与纪实影像服务。擅长从客户传播目标出发，统筹活动现场的关键镜头、品牌露出与情绪节点，用更完整的视觉叙事帮助客户沉淀可复用的内容资产。',
    image: '/images/team/team-1.jpg',
    skills: ['商业摄影', '婚礼跟拍', '品牌视觉'],
    specialties: ['品牌活动记录', '企业活动摄影', '纪实婚礼跟拍'],
    experience: ['服务理想汽车、平安保险、平安银行等客户项目', '长期拍摄成都本地品牌活动与商业现场', '负责雪弈摄影工作室整体拍摄统筹与交付把控'],
    motto: '用真实瞬间建立品牌信任感',
    xiaohongshuName: '@袁天弈摄影',
  },
  {
    id: '2',
    slug: 'zhao-benzhi',
    name: '赵本志',
    nameEn: 'Zhao Benzhi',
    title: '商业摄影总监',
    titleEn: 'Commercial Director',
    bio: '曾任4A广告公司视觉总监，服务过众多国际品牌，擅长商业广告摄影。',
    bioEn: 'Former visual director at a 4A agency, experienced in commercial advertising photography.',
    longBio:
      '赵本志长期参与品牌传播项目与商业影像策划，熟悉从活动主视觉到执行细节的整体把控。对于灯光、空间、现场节奏和画面调度有成熟经验，尤其适合发布会、商业活动和品牌事件的拍摄。',
    image: '/images/team/team-2.jpg',
    skills: ['活动摄影', '航拍', '广告摄影'],
    specialties: ['商业活动摄影', '发布会与会务记录', '广告视觉执行'],
    experience: ['曾任4A广告公司视觉总监', '长期服务品牌活动与广告拍摄项目', '擅长多机位、多场景拍摄调度'],
    motto: '让商业现场既有秩序，也有传播力',
    xiaohongshuName: '@赵本志视觉',
  },
  {
    id: '3',
    slug: 'lu-jinchuan',
    name: '陆金川',
    nameEn: 'Lu Jinchuan',
    title: '人像摄影专家',
    titleEn: 'Portrait Specialist',
    bio: '擅长捕捉人物情感，作品多次入选国际摄影展。专注于人像与旅行摄影。',
    bioEn: 'Specialized in portrait and travel photography with works selected by international exhibitions.',
    longBio:
      '陆金川更擅长把人物情绪与环境氛围结合在一起，不管是人像、旅行跟拍还是具有情感表达需求的活动现场，都能把人物状态拍得自然且有故事感。',
    image: '/images/team/team-3.jpg',
    skills: ['旅行摄影', '人像', '情感捕捉'],
    specialties: ['人像摄影', '旅行跟拍', '情绪抓拍'],
    experience: ['作品多次入选国际摄影展', '专注人物状态与情绪记录', '擅长旅行、人像和轻纪实内容'],
    motto: '把人拍进故事里，而不是只拍进画面里',
    xiaohongshuName: '@陆金川镜头',
  },
  {
    id: '4',
    slug: 'guo-chenxi',
    name: '郭晨曦',
    nameEn: 'Guo Chenxi',
    title: '活动摄影主管',
    titleEn: 'Event Lead',
    bio: '快速抓拍专家，大型活动经验丰富。研学摄影与视频制作领域专家。',
    bioEn: 'Fast-capture specialist experienced in large events, study tours, and video production.',
    longBio:
      '郭晨曦长期参与大型活动和研学项目记录，擅长在复杂流程里快速判断重点，兼顾服务细节、学生状态和活动节奏，是雪弈团队在研学与活动纪录方向的重要执行力量。',
    image: '/images/team/team-4.jpg',
    skills: ['研学摄影', '视频制作', '活动记录'],
    specialties: ['研学活动摄影', '现场纪录视频', '大型活动抓拍'],
    experience: ['长期拍摄成都本地研学与教育活动', '擅长活动现场快节奏抓拍', '可兼顾短视频素材和现场故事线'],
    motto: '把现场真正重要的东西留住',
    xiaohongshuName: '@郭晨曦记录',
  },
];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

