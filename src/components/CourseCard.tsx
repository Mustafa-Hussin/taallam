import { Course } from '@/data/courses';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const {
    id,
    title,
    instructor,
    description,
    image,
    price,
    rating,
    studentsCount,
    level,
    duration
  } = course;

  return (
    <Link href={`/courses/${id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {price === 0 ? 'مجاني' : `${price} جنيه`}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <span className="ml-2">👨‍🏫</span>
              <span className="line-clamp-1">{instructor}</span>
            </div>
            <div className="flex items-center gap-4">
              <span title="التقييم">⭐ {rating.toFixed(1)}</span>
              <span title="عدد الطلاب">👥 {studentsCount}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <span>🎯</span>
              <span>{level}</span>
            </span>
            <span className="flex items-center gap-1">
              <span>⏱️</span>
              <span>{duration}</span>
            </span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            عرض تفاصيل الدورة
          </button>
        </div>
      </div>
    </Link>
  );
}
