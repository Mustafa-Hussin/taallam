import type { Metadata } from 'next';
import { courses } from '@/data/courses';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find(c => c.id === parseInt(params.id));
  
  if (!course) {
    return {
      title: 'كورس غير موجود',
      description: 'عذراً، الكورس المطلوب غير موجود'
    };
  }

  return {
    title: course.title,
    description: course.description
  };
}
