import ServicePage from '@/components/service/ServicePage';
import { buildMetadata, buildPageUrl } from '@/lib/seo';
import { siteConfig, type Locale } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  return buildMetadata({
    locale,
    path: '/study-tour-photography/',
    title:
      locale === 'zh'
        ? '成都研学摄影_研学跟拍_学校活动摄影'
        : 'Chengdu Study Tour Photography',
    description:
      locale === 'zh'
        ? '专注成都研学摄影与研学跟拍，服务研学机构、学校与亲子教育场景，用真实影像记录服务细节、活动秩序与学生成长瞬间。'
        : 'Chengdu study tour and educational event photography for institutions, schools, and youth programs.',
  });
}

export default async function StudyTourPhotographyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isZh = lang === 'zh';
  const locale = lang as Locale;

  return (
    <ServicePage
      locale={locale}
      eyebrow={isZh ? '成都研学摄影' : 'Chengdu Study Tour Photography'}
      title={isZh ? '成都研学摄影与研学跟拍' : 'Chengdu Study Tour Coverage'}
      description={
        isZh
          ? '研学摄影真正要解决的是家长信任、学校认可和机构传播。我们更重视孩子状态、服务细节、活动秩序和完整故事，而不是单纯拍一堆漂亮空镜。'
          : 'Study tour coverage built around trust, safety, process, and storytelling rather than empty aesthetics.'
      }
      scenarios={isZh
        ? ['研学机构活动记录', '学校实践课程', '亲子研学活动', '教育项目成果展示', '营地活动和成长记录', '招生宣传素材']
        : ['Study tour programs', 'School activities', 'Family study tours', 'Education showcases', 'Camp stories', 'Enrollment materials']}
      highlights={isZh
        ? ['突出学生专注、互动、成长与情绪变化', '帮助机构展示服务质量和组织能力', '兼顾家长视角、学校视角和机构视角', '拍摄内容更适合招生、回顾和家长沟通']
        : ['Capture growth and emotion', 'Show service quality and order', 'Support parents, schools, and institutions', 'Useful for enrollment and parent communication']}
      faqs={[
        {
          question: isZh ? '为什么研学机构需要专业跟拍？' : 'Why use professional study tour coverage?',
          answer: isZh ? '因为机构需要的不只是“有照片”，而是能证明活动办得好、服务细节做得到位、孩子确实有收获的一套完整影像。' : 'Because institutions need visuals that prove quality, safety, service, and student engagement.' ,
        },
        {
          question: isZh ? '拍摄重点通常会放在哪些内容？' : 'What do you focus on most?',
          answer: isZh ? '通常会优先拍孩子的状态、老师和领队的服务细节、课程参与感、活动秩序以及适合家长和机构传播的画面。' : 'We focus on student engagement, service detail, process, order, and parent-facing trust signals.' ,
        },
      ]}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '成都研学摄影与研学跟拍',
        serviceType: 'Study Tour Photography',
        areaServed: '成都及其周边',
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.name,
          telephone: siteConfig.phone,
          url: buildPageUrl(locale, '/study-tour-photography/'),
        },
      }}
    />
  );
}
