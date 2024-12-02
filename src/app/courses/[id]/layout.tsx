import { Metadata } from 'next';

// نفس بيانات الدورات من الصفحة السابقة
const COURSES = [
  {
    id: 1,
    title: 'مقدمة في البرمجة بلغة Python',
    instructor: 'د. أحمد محمد',
    description: 'تعلم أساسيات البرمجة باستخدام لغة Python مع التطبيقات العملية',
    image: '/images/python-course.jpg',
    price: 0,
    rating: 4.8,
    studentsCount: 1250,
    category: 'برمجة',
    duration: '12 ساعة'
  },
  // ... باقي الدورات
];

// إنشاء metadata ديناميكي لكل دورة
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const courseId = Number(params.id);
  const course = COURSES.find(c => c.id === courseId);

  if (!course) {
    return {
      title: 'الدورة غير موجودة',
      description: 'عذراً، لم يتم العثور على الدورة المطلوبة'
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://taallam.com';
  const imageUrl = `${baseUrl}${course.image}`;
  const courseUrl = `${baseUrl}/courses/${courseId}`;

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      url: courseUrl,
      type: 'website',
      siteName: 'منصة تعلم',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description,
      images: [imageUrl],
    },
    other: {
      'og:locale': 'ar_AR',
    },
  };
}

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
