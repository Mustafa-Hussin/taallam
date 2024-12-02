'use client';

import { useState, useEffect } from 'react';
import { Unit, Lesson } from '@/data/courses';

interface CourseContentProps {
  units: Unit[];
}

export default function CourseContent({ units }: CourseContentProps) {
  const [expandedUnits, setExpandedUnits] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleUnit = (unitId: string) => {
    setExpandedUnits(prev =>
      prev.includes(unitId)
        ? prev.filter(id => id !== unitId)
        : [...prev, unitId]
    );
  };

  const getContentIcon = (contentType: Lesson['contentType']) => {
    switch (contentType) {
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'pdf':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'image':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="space-y-4">
      {units.map(unit => (
        <div key={unit.id} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleUnit(unit.id)}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition"
          >
            <h3 className="text-lg font-semibold">{unit.title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transform transition-transform ${
                expandedUnits.includes(unit.id) ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedUnits.includes(unit.id) && (
            <div className="divide-y">
              {unit.lessons.map(lesson => (
                <div
                  key={lesson.id}
                  className="flex items-center space-x-4 rtl:space-x-reverse p-4 hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className="text-gray-600">
                    {getContentIcon(lesson.contentType)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{lesson.title}</h4>
                    {lesson.description && (
                      <p className="text-sm text-gray-500">{lesson.description}</p>
                    )}
                  </div>
                  {lesson.duration && (
                    <div className="text-sm text-gray-500">
                      {lesson.duration} دقيقة
                    </div>
                  )}
                  {lesson.isCompleted && (
                    <div className="text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
