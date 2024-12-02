import { ImageResponse } from 'next/server';
import { NextRequest } from 'next/server';

// نفس بيانات الدورات
const COURSES = [
  {
    id: 1,
    title: 'مقدمة في البرمجة بلغة Python',
    instructor: 'د. أحمد محمد',
    description: 'تعلم أساسيات البرمجة باستخدام لغة Python مع التطبيقات العملية',
    image: '/images/python-course.jpg',
    price: 0,
    rating: 4.8,
    category: 'برمجة',
  },
  // ... باقي الدورات
];

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const courseId = Number(params.id);
  const course = COURSES.find(c => c.id === courseId);

  if (!course) {
    return new Response('Course not found', { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* خلفية زخرفية */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 60%)',
            zIndex: '1',
          }}
        />

        {/* المحتوى الرئيسي */}
        <div
          style={{
            position: 'relative',
            zIndex: '2',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* الشعار والعنوان */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '36px',
            }}
          >
            <div
              style={{
                fontSize: '32px',
                color: 'white',
                fontWeight: 'bold',
                marginRight: '12px',
                padding: '8px 16px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
            >
              منصة تعلم
            </div>
          </div>

          {/* عنوان الدورة */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              direction: 'rtl',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {course.title}
          </div>

          {/* وصف الدورة */}
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '36px',
              direction: 'rtl',
              lineHeight: '1.4',
              maxWidth: '90%',
            }}
          >
            {course.description}
          </div>

          {/* معلومات إضافية */}
          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              gap: '32px',
              direction: 'rtl',
              background: 'rgba(0,0,0,0.2)',
              padding: '24px',
              borderRadius: '12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '24px',
                color: 'white',
                gap: '8px',
              }}
            >
              <span style={{ fontSize: '32px' }}>👨‍🏫</span>
              {course.instructor}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '24px',
                color: 'white',
                gap: '8px',
              }}
            >
              <span style={{ fontSize: '32px' }}>⭐</span>
              {course.rating}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '24px',
                color: 'white',
                gap: '8px',
                background: 'rgba(255,255,255,0.1)',
                padding: '8px 16px',
                borderRadius: '8px',
              }}
            >
              <span style={{ fontSize: '32px' }}>📚</span>
              {course.category}
            </div>
            {course.price === 0 ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '24px',
                  color: '#4ade80',
                  gap: '8px',
                  background: 'rgba(74,222,128,0.1)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  marginRight: 'auto',
                }}
              >
                مجاني
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '24px',
                  color: 'white',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  marginRight: 'auto',
                }}
              >
                {course.price} جنيه
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

export const runtime = 'edge';
