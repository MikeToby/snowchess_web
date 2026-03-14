export type BlogEntry = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  category: string;
  readTime: string;
  content: string;
};

export const blogPosts: BlogEntry[] = [
  {
    id: '1',
    slug: 'chengdu-event-photography-checklist',
    title: '成都活动摄影都拍什么，后期宣传更好用',
    excerpt:
      '一场企业活动真正有用的影像，不只是拍全流程，而是要把品牌露出、来宾互动、主视觉与传播素材都系统记录下来。',
    coverImage: '/images/hero/hero-1.jpg',
    author: {
      name: '袁天弈',
      avatar: '/images/team/team-1.jpg',
      bio: '雪弈摄影工作室创始人，专注成都活动摄影与品牌现场记录。',
    },
    publishedAt: '2026-03-13',
    category: '活动摄影',
    readTime: '6分钟',
    content: `
      <p>企业活动的拍摄价值，不只是“活动办过了留个纪念”，更重要的是为后续宣传、复盘和客户沟通留下一整套能继续使用的素材。</p>
      <h3>1. 活动主视觉一定要拍完整</h3>
      <p>签到区、主舞台、品牌展板、现场导视都应该完整记录，这些素材往往是公众号、海报和复盘 PPT 的基础。</p>
      <h3>2. 关键人物与互动环节不能漏</h3>
      <p>领导发言、嘉宾互动、现场签约、观众反馈，这些比单纯的大场景更能体现活动含金量。</p>
      <h3>3. 提前想好传播用途</h3>
      <p>如果后续要发朋友圈、公众号、海报或招商资料，摄影摄像在现场的机位安排和画面重点就要提前规划。</p>
    `,
  },
  {
    id: '2',
    slug: 'chengdu-study-tour-photography-trust',
    title: '成都研学摄影怎么拍，家长和机构更买账',
    excerpt:
      '研学摄影真正要解决的不是“拍得好不好看”，而是让家长放心、让学校看见秩序、让机构更容易展示服务质量。',
    coverImage: '/images/hero/hero-2.jpg',
    author: {
      name: '郭晨曦',
      avatar: '/images/team/team-4.jpg',
      bio: '长期参与研学活动记录，擅长把成长、秩序与服务细节拍进同一套故事里。',
    },
    publishedAt: '2026-03-13',
    category: '研学摄影',
    readTime: '7分钟',
    content: `
      <p>成都研学摄影的重点，不是给同行看的技术炫耀，而是帮助机构把服务细节、活动安全和孩子成长真实呈现出来。</p>
      <h3>1. 家长最想看的是孩子状态</h3>
      <p>笑容、专注、互动、成果展示，这些细节比单纯的风景照更能提升家长信任感。</p>
      <h3>2. 学校与机构更看重流程和秩序</h3>
      <p>整队、讲解、课程环节、服务保障，都需要有画面支撑，才能体现组织能力和专业度。</p>
      <h3>3. 一套完整故事比单张美图更有说服力</h3>
      <p>从出发、到达、参与、学习到结束，如果能形成完整叙事，机构在招生和传播时会更好用。</p>
    `,
  },
  {
    id: '3',
    slug: 'chengdu-opening-photography-shots',
    title: '成都开业活动摄影摄像清单：哪些画面一定要留',
    excerpt:
      '门店开业、品牌快闪和庆典活动最怕热闹过后没有素材。提前知道哪些画面要拍，后续传播会轻松很多。',
    coverImage: '/images/hero/hero-3.jpg',
    author: {
      name: '赵本志',
      avatar: '/images/team/team-2.jpg',
      bio: '商业摄影总监，擅长品牌活动、发布会与线下传播画面的组织与调度。',
    },
    publishedAt: '2026-03-13',
    category: '开业摄影',
    readTime: '5分钟',
    content: `
      <p>开业活动往往只有一次，布场、剪彩、来宾签到、品牌露出和现场氛围，都是后续宣传最常用的画面。</p>
      <h3>1. 外立面与品牌露出</h3>
      <p>门头、招牌、花篮、主视觉物料，是开业素材里最基础也最常用的部分。</p>
      <h3>2. 仪式感环节</h3>
      <p>剪彩、合影、启动仪式、祝酒、主持流程，这些一定要完整记录。</p>
      <h3>3. 人气和真实互动</h3>
      <p>来宾交流、顾客体验、排队与热闹氛围，能直接影响别人对活动热度的判断。</p>
    `,
  },
];

