'use client';

import Image from 'next/image';
import { type Course } from '@/data/courses';
import CourseActions from './components/CourseActions';
import CourseDetails from './components/CourseDetails';
import CourseContent from './components/CourseContent';
import VideoPlayer from './components/VideoPlayer';
import { FiUsers, FiClock, FiCalendar, FiAward } from 'react-icons/fi';

interface Props {
  course: Course;
}

export default function CourseClient({ course }: Props) {
  if (!course) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Video */}
      <div className="relative w-full bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl font-bold leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-blue-100">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <FiUsers className="w-5 h-5" />
                  <span>{course.studentsCount} طالب</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-5 h-5" />
                  <span>آخر تحديث: {course.updatedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiAward className="w-5 h-5" />
                  <span>شهادة إتمام معتمدة</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <VideoPlayer
                videoUrl={course.previewVideo}
                posterImage={course.coverImage}
                title={course.title}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                نظرة عامة على الكورس
              </h2>
              <CourseDetails course={course} />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                محتوى الكورس
              </h2>
              <CourseContent course={course} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <CourseActions course={course} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
