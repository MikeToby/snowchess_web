import React from 'react';
import { WorksClient } from '@/components/works';
import { getWorksData } from '@/lib/works-db';

interface WorksPageProps {
  params: Promise<{ lang: string }>;
}

export default async function WorksPage({ params }: WorksPageProps) {
  const { lang } = await params;
  const works = await getWorksData();

  return <WorksClient works={works} lang={lang} />;
}
