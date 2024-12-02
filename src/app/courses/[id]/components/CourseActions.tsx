'use client';

import { Course } from '@/data/courses';
import { FiShare2, FiBookmark } from 'react-icons/fi';

interface Props {
  course: Course;
}

export default function CourseActions({ course }: Props) {
  return (
    <div className="space-y-6">
      {/* السعر */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {course.price} ر.س
          </span>
        </div>
      </div>

      {/* أزرار التفاعل */}
      <div className="space-y-3">
        <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
          سجل الآن
        </button>
        <div className="flex gap-2">
          <button className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition duration-200">
            <FiBookmark className="w-5 h-5 mx-auto" />
          </button>
          <button className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition duration-200">
            <FiShare2 className="w-5 h-5 mx-auto" />
          </button>
        </div>
      </div>

      {/* مميزات الكورس */}
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">
          يتضمن هذا الكورس
        </h3>
        <ul className="space-y-2">
          {course.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
