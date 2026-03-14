import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Camera, ChevronRight, Sparkles } from 'lucide-react';
import { FloatingCapsuleNav, Footer, TeamDetailSection } from '@/components';
import { JsonLd } from '@/components/seo';
import { buildMetadata, buildPageUrl } from '@/lib/seo';
import { type Locale } from '@/lib/site';
import { getTeamMemberBySlug, teamMembers } from '@/lib/team';

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const member = getTeamMemberBySlug(slug);
  const locale = lang as Locale;

  if (!member) {
    return {};
  }

  return buildMetadata({
    locale,
    path: `/team/${slug}/`,
    title: `${member.name}_${member.title}_雪弈摄影工作室`,
    description: member.longBio,
    image: member.image,
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const isZh = lang === 'zh';
  const locale = lang as Locale;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: member.name,
          jobTitle: member.title,
          image: member.image,
          description: member.longBio,
          worksFor: {
            '@type': 'Organization',
            name: '雪弈摄影工作室',
          },
          url: buildPageUrl(locale, `/team/${member.slug}/`),
        }}
      />
      <FloatingCapsuleNav locale={lang} />

      <section className="pt-28 md:pt-32 pb-12 bg-snow-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${lang}/team/`} className="inline-flex items-center gap-2 text-medium-gray hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{isZh ? '返回团队列表' : 'Back to team'}</span>
          </Link>
          <div className="mt-8">
            <TeamDetailSection member={member} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-snow-cream p-8">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-gold" />
              <h2 className="text-2xl font-bold text-deep-black">{isZh ? '擅长方向' : 'Specialties'}</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {member.specialties.map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 text-sm text-soft-black">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-snow-cream p-8">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-gold" />
              <h2 className="text-2xl font-bold text-deep-black">{isZh ? '项目经历' : 'Experience'}</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {member.experience.map((item) => (
                <li key={item} className="flex items-start gap-3 text-soft-black">
                  <ChevronRight className="mt-0.5 w-4 h-4 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <Footer locale={lang} />
    </main>
  );
}
