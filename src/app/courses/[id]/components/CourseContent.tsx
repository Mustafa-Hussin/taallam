'use client';

import { useState } from 'react';
import { Course, Unit } from '@/data/courses';
import { FiChevronDown, FiChevronUp, FiPlay, FiFile, FiCheckCircle } from 'react-icons/fi';

interface Props {
  course: Course;
}

export default function CourseContent({ course }: Props) {
  const [expandedUnits, setExpandedUnits] = useState<number[]>([]);

  const toggleUnit = (unitId: number) => {
    setExpandedUnits(prev =>
      prev.includes(unitId)
        ? prev.filter(id => id !== unitId)
        : [...prev, unitId]
    );
  };

  const getContentIcon = (contentType: string) => {
    switch (contentType) {
      case 'video':
        return <FiPlay className="w-4 h-4 text-primary" />;
      case 'practice':
        return <FiFile className="w-4 h-4 text-green-500" />;
      case 'quiz':
        return <FiCheckCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return <FiFile className="w-4 h-4 text-gray-500" />;
    }
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours > 0) {
      return `${hours} ساعة ${remainingMinutes > 0 ? `و ${remainingMinutes} دقيقة` : ''}`;
    }
    return `${minutes} دقيقة`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        محتوى الكورس
      </h2>

      <div className="space-y-4">
        {course.units.map((unit) => (
          <div key={unit.id} className="border dark:border-gray-700 rounded-lg">
            <button
              onClick={() => toggleUnit(unit.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-4 space-x-reverse">
                {expandedUnits.includes(unit.id) ? (
                  <FiChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                )}
                <div className="text-right">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {unit.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {unit.description}
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {unit.lessons.length} دروس
              </span>
            </button>

            {expandedUnits.includes(unit.id) && (
              <div className="p-4 border-t dark:border-gray-700">
                <ul className="space-y-2">
                  {unit.lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                    >
                      <div className="flex items-center space-x-3 space-x-reverse">
                        {getContentIcon(lesson.contentType)}
                        <span className="text-gray-700 dark:text-gray-300">
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDuration(lesson.duration)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
