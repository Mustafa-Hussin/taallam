'use client';

import { courses } from '@/data/courses';
import Link from 'next/link';
import Image from 'next/image';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">الكورسات المتاحة</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link 
            key={course.id} 
            href={`/courses/${course.id}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-48">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
              {course.price > 0 && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {course.price} جنيه
                </div>
              )}
              {course.price === 0 && (
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  مجاني
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
                {course.duration}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{course.category}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{course.level}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-1">
                {course.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <span className="ml-2">👨‍🏫</span>
                  <span className="line-clamp-1">{course.instructor}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span title="التقييم" className="flex items-center">
                    <span className="ml-1">⭐</span>
                    {course.rating.toFixed(1)}
                  </span>
                  <span title="عدد الطلاب" className="flex items-center">
                    <span className="ml-1">👥</span>
                    {course.studentsCount}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {course.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
