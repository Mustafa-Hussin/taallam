import { courses } from '@/data/courses';
import type { Metadata } from 'next';
import CourseClient from './CourseClient';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const courseId = parseInt(params.id, 10);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return {
      title: 'الكورس غير موجود | منصة تعلم',
      description: 'عذراً، الكورس الذي تبحث عنه غير موجود',
      openGraph: {
        title: 'الكورس غير موجود | منصة تعلم',
        description: 'عذراً، الكورس الذي تبحث عنه غير موجود',
      },
    };
  }

  return {
    title: `${course.title} | منصة تعلم`,
    description: course.description,
    keywords: `${course.title}, ${course.category}, تعلم عن بعد, دورات اونلاين`,
    openGraph: {
      title: `${course.title} | منصة تعلم`,
      description: course.description,
      images: [course.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} | منصة تعلم`,
      description: course.description,
      images: [course.image],
    },
  };
}

export default function CourseDetailsPage({ params }: Props) {
  const courseId = parseInt(params.id, 10);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">عذراً، الكورس غير موجود</div>
      </div>
    );
  }

  return <CourseClient course={course} />;
}
