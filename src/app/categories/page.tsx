'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'programming',
    title: 'البرمجة',
    icon: '💻',
    color: 'blue',
    coursesCount: '300+',
    bgGradient: 'from-blue-50 to-blue-100'
  },
  {
    id: 'marketing',
    title: 'التسويق',
    icon: '📱',
    color: 'orange',
    coursesCount: '150+',
    bgGradient: 'from-orange-50 to-orange-100'
  },
  {
    id: 'business',
    title: 'إدارة الأعمال',
    icon: '💼',
    color: 'green',
    coursesCount: '200+',
    bgGradient: 'from-green-50 to-green-100'
  },
  {
    id: 'design',
    title: 'التصميم',
    icon: '🎨',
    color: 'pink',
    coursesCount: '250+',
    bgGradient: 'from-pink-50 to-pink-100'
  }
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">التصنيفات</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id}>
            <motion.div 
              className={`p-6 rounded-xl shadow-lg bg-gradient-to-br ${category.bgGradient} 
                         hover:shadow-xl transition-shadow cursor-pointer`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <span className="text-4xl">{category.icon}</span>
                <h3 className={`text-xl font-semibold text-${category.color}-600`}>
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.coursesCount} دورة
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
