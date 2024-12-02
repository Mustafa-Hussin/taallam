'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { courses } from '@/data/courses';
import CourseCard from '@/components/CourseCard';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

// تعريف التصنيفات وخصائصها
const categories = {
  programming: {
    title: 'البرمجة',
    icon: '💻',
    keywords: ['البرمجة', 'تطوير الويب', 'تطوير التطبيقات', 'HTML', 'CSS', 'JavaScript', 'React'],
    description: 'تعلم أحدث تقنيات البرمجة وتطوير الويب والتطبيقات'
  },
  marketing: {
    title: 'التسويق',
    icon: '📱',
    keywords: ['تسويق', 'التسويق الرقمي', 'وسائل التواصل الاجتماعي', 'تسويق إلكتروني'],
    description: 'اكتشف أسرار التسويق الرقمي وإدارة وسائل التواصل الاجتماعي'
  },
  business: {
    title: 'إدارة الأعمال',
    icon: '💼',
    keywords: ['إدارة', 'أعمال', 'ريادة', 'مشاريع', 'شركات'],
    description: 'طور مهاراتك في إدارة الأعمال وريادة المشاريع'
  },
  design: {
    title: 'التصميم',
    icon: '🎨',
    keywords: ['تصميم', 'UI', 'UX', 'جرافيك', 'واجهات'],
    description: 'تعلم فنون التصميم وتطوير واجهات المستخدم'
  }
} as const;

export default function CategoryPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const categoryId = params.id as keyof typeof categories;
  
  // تأكد من تحميل الصفحة قبل عرض المحتوى لتجنب مشكلة عدم تطابق الواجهة
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // التحقق من وجود التصنيف
  if (!categories[categoryId]) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">عذراً</h1>
        <p className="text-gray-600 dark:text-gray-400">هذا التصنيف غير موجود</p>
      </div>
    );
  }

  const category = categories[categoryId];
  
  // تصفية الكورسات حسب الكلمات المفتاحية للتصنيف
  const filteredCourses = courses.filter(course => 
    category.keywords.some(keyword => 
      course.category?.toLowerCase().includes(keyword.toLowerCase()) ||
      course.title.toLowerCase().includes(keyword.toLowerCase()) ||
      course.description.toLowerCase().includes(keyword.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* شريط التنقل */}
      <nav className="bg-gray-50 dark:bg-gray-800 py-4 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 flex-row-reverse overflow-x-auto whitespace-nowrap py-1">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 min-w-fit">
              الرئيسية
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link href="/categories" className="hover:text-blue-600 dark:hover:text-blue-400 min-w-fit">
              التصنيفات
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-gray-900 dark:text-white font-medium min-w-fit">
              {category.title}
            </span>
          </div>
        </div>
      </nav>

      {/* رأس الصفحة */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-4xl mb-4 inline-block">{category.icon}</span>
            <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              دورات {category.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-3">
              {category.description}
            </p>
            <p className="text-blue-600 dark:text-blue-400">
              {filteredCourses.length} دورة متاحة
            </p>
          </motion.div>
        </div>
      </div>

      {/* قائمة الكورسات */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {/* رسالة إذا لم يتم العثور على كورسات */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              لم يتم العثور على دورات في هذا التصنيف حالياً
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
