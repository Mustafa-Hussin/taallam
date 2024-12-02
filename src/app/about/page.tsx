export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* قسم المقدمة */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            عن منصة تعلم
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            منصة تعلم هي منصة تعليمية عربية متكاملة تهدف إلى توفير تعليم عالي الجودة
            للجميع من خلال دورات تفاعلية في مختلف المجالات
          </p>
        </section>

        {/* قسم رؤيتنا */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            رؤيتنا
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            نسعى لأن نكون المنصة التعليمية الرائدة في العالم العربي، نقدم تعليماً
            عالي الجودة يساهم في تطوير مهارات الطلاب وتحقيق طموحاتهم
          </p>
        </section>

        {/* قسم مميزاتنا */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              أفضل المدرسين
            </h3>
            <p className="text-gray-600">
              نختار بعناية نخبة من المدرسين المتميزين في مجالاتهم لتقديم أفضل تجربة تعليمية
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              محتوى متنوع
            </h3>
            <p className="text-gray-600">
              نقدم دورات في مختلف المجالات من البرمجة إلى العلوم والرياضيات واللغات
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              تعلم تفاعلي
            </h3>
            <p className="text-gray-600">
              نوفر تجربة تعلم تفاعلية مع تمارين عملية واختبارات ومناقشات جماعية
            </p>
          </div>
        </section>

        {/* قسم الإحصائيات */}
        <section className="bg-blue-600 text-white rounded-lg shadow-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">+1000</div>
              <div className="text-lg">دورة تعليمية</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+50,000</div>
              <div className="text-lg">طالب مسجل</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+100</div>
              <div className="text-lg">مدرس متميز</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
