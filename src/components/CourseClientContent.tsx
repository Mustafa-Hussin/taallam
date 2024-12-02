'use client';

import dynamic from 'next/dynamic';
import { Course } from '@/data/courses';

const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-gray-200 animate-pulse"></div>
  )
});

const CourseContent = dynamic(() => import('./CourseContent'), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
      ))}
    </div>
  )
});

interface CourseClientContentProps {
  course: Course;
}

export default function CourseClientContent({ course }: CourseClientContentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2">
        {/* Video Player */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {course.units[0]?.lessons[0] && (
            <VideoPlayer 
              videoUrl={course.units[0].lessons[0].contentUrl} 
              title={course.units[0].lessons[0].title} 
            />
          )}
        </div>

        {/* Course Content List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">محتوى الدورة</h2>
          <CourseContent units={course.units} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">معلومات الدورة</h3>
            <div className="space-y-3">
              <p><span className="font-semibold">المدرب:</span> {course.instructor}</p>
              <p><span className="font-semibold">المدة:</span> {course.duration}</p>
              <p><span className="font-semibold">المستوى:</span> {course.level}</p>
              <p><span className="font-semibold">عدد الطلاب:</span> {course.studentsCount}</p>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            سجل الآن
          </button>
        </div>
      </div>
    </div>
  );
}
