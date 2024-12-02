'use client';

import { Course } from '@/data/courses';
import { FiCheck } from 'react-icons/fi';
import Image from 'next/image';

interface Props {
  course: Course;
}

export default function CourseDetails({ course }: Props) {
  return (
    <div className="space-y-6">
      {/* وصف الكورس */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          وصف الكورس
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* المميزات */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          مميزات الكورس
        </h3>
        <ul className="space-y-2">
          {course.features?.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
              <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* المستوى والمدة */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1">المستوى</h4>
          <p className="text-gray-600 dark:text-gray-300">{course.level}</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 dark:text-white mb-1">المدة</h4>
          <p className="text-gray-600 dark:text-gray-300">{course.duration}</p>
        </div>
      </div>

      {/* المدرب */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          المدرب
        </h3>
        <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={course.instructorImage}
              alt={course.instructor}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white">
              {course.instructor}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
