import Link from 'next/link';
import { CheckCircle2, Clock3, MapPin, MessageCircle, PhoneCall } from 'lucide-react';
import { FloatingCapsuleNav, Footer } from '@/components';
import { JsonLd } from '@/components/seo';
import { testimonials } from '@/lib/site';

interface ServicePageProps {
  locale: 'zh' | 'en';
  eyebrow: string;
  title: string;
  description: string;
  scenarios: string[];
  highlights: string[];
  faqs: Array<{ question: string; answer: string }>;
  structuredData: Record<string, unknown>;
}

export default function ServicePage({
  locale,
  eyebrow,
  title,
  description,
  scenarios,
  highlights,
  faqs,
  structuredData,
}: ServicePageProps) {
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={structuredData} />
      <FloatingCapsuleNav locale={locale} />

      <section className="pt-32 pb-16 bg-snow-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
              {eyebrow}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-deep-black">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-medium-gray">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-soft-black">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <MapPin className="h-4 w-4 text-gold" />
                {isZh ? '服务范围：全成都及其周边' : 'Service area: Chengdu and nearby'}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <Clock3 className="h-4 w-4 text-gold" />
                {isZh ? '支持拍摄策划与高效交付' : 'Planning support and fast delivery'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-snow-gray bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-deep-black">
              {isZh ? '适合这些场景' : 'Best for these scenarios'}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {scenarios.map((scenario) => (
                <div
                  key={scenario}
                  className="rounded-2xl bg-snow-cream px-5 py-4 text-soft-black"
                >
                  {scenario}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-deep-black p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">
              {isZh ? '你能得到什么' : 'What you get'}
            </h2>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              <p className="text-sm text-white/70">
                {isZh
                  ? '如果你已经有活动日期、拍摄需求或预算范围，可以直接电话或微信沟通，我们会先帮你梳理拍摄重点。'
                  : 'If you already have a date, scope, or budget range, you can contact us directly for a shooting plan.'}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/contact/`}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-light"
                >
                  <MessageCircle className="h-4 w-4" />
                  {isZh ? '联系咨询' : 'Contact us'}
                </Link>
                <a
                  href="tel:17341518045"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4" />
                  17341518045
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-snow-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-deep-black">
              {isZh ? '客户为什么愿意继续合作' : 'Why clients continue to work with us'}
            </h2>
            <p className="mt-4 text-medium-gray">
              {isZh
                ? '我们不只拍结果，也会帮客户考虑后续怎么传播、怎么复用、怎么让照片和视频真正帮到业务。'
                : 'We focus on both capture quality and how the materials support later communication and marketing.'}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-soft-black leading-7">“{testimonial.quote}”</p>
                <div className="mt-5">
                  <p className="font-semibold text-deep-black">{testimonial.name}</p>
                  <p className="text-sm text-medium-gray">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-black">
            {isZh ? '常见问题' : 'FAQ'}
          </h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-snow-gray bg-snow-cream p-6">
                <h3 className="text-lg font-semibold text-deep-black">{faq.question}</h3>
                <p className="mt-3 text-medium-gray leading-7">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
