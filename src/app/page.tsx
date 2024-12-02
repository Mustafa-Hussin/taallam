import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaUsers, FaBook, FaArrowLeft } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white animate-fadeIn">
              تعلم
              <span className="gradient-text-multi mx-2">بلا حدود</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto floating">
              منصة تعليمية متكاملة تجمع بين أفضل المعلمين والطلاب في بيئة تفاعلية متطورة
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/auth/register"
                className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shine"
              >
                <span className="relative z-10">ابدأ الآن مجاناً</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 rounded-xl border-2 border-white"></span>
              </Link>
              <Link
                href="/auth/login"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover-glow"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التصنيفات الأكثر شعبية */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">التصنيفات الأكثر شعبية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/categories/marketing">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="bg-orange-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-2">التسويق</h3>
                <p className="text-gray-600">+150 دورة</p>
              </div>
            </Link>

            <Link href="/categories/business">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="bg-green-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">إدارة الأعمال</h3>
                <p className="text-gray-600">+200 دورة</p>
              </div>
            </Link>

            <Link href="/categories/programming">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">البرمجة</h3>
                <p className="text-gray-600">+300 دورة</p>
              </div>
            </Link>

            <Link href="/categories/design">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="bg-pink-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-pink-600 mb-2">التصميم</h3>
                <p className="text-gray-600">+250 دورة</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/categories" 
                  className="inline-block px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
              عرض جميع التصنيفات
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text-multi">مميزات المنصة</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="card-flip h-[300px]">
              <div className="card-flip-inner h-full">
                <div className="card-front bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 floating">
                    <FaGraduationCap className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">دورات متنوعة</h3>
                  <p className="text-gray-600 text-center">
                    مجموعة واسعة من الدورات في مختلف المجالات
                  </p>
                </div>
                <div className="card-back rounded-2xl p-8 flex flex-col items-center justify-center gradient-ocean text-white">
                  <h3 className="text-2xl font-bold mb-4">شهادات معتمدة</h3>
                  <p className="text-center">
                    احصل على شهادات معتمدة بعد إتمام كل دورة تدريبية
                  </p>
                  <FaArrowLeft className="mt-6 w-6 h-6 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover-glow">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 floating">
                  <FaUsers className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-sunset">مدربون محترفون</h3>
                <p className="text-gray-600 text-center">
                  نخبة من أفضل المدربين والخبراء في مجالاتهم
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 floating">
                  <FaBook className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-forest">محتوى تفاعلي</h3>
                <p className="text-gray-600 text-center">
                  محتوى تعليمي تفاعلي مع تمارين وتطبيقات عملية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text-multi">التصنيفات الأكثر شعبية</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link href="/categories/design" className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-sunset opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-pink-600">التصميم</h3>
                  <p className="text-pink-500">+250 دورة</p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-16 translate-y-16 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full"></div>
              </div>
            </Link>

            <Link href="/categories/programming" className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-ocean opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <span className="text-3xl">💻</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-600">البرمجة</h3>
                  <p className="text-blue-500">+300 دورة</p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-16 translate-y-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full"></div>
              </div>
            </Link>

            <Link href="/categories/business" className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-forest opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-green-600">إدارة الأعمال</h3>
                  <p className="text-green-500">+200 دورة</p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-16 translate-y-16 bg-gradient-to-br from-green-500/20 to-transparent rounded-full"></div>
              </div>
            </Link>

            <Link href="/categories/marketing" className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-sunset opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-orange-600">التسويق</h3>
                  <p className="text-orange-500">+150 دورة</p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-16 translate-y-16 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8 animate-fadeIn shine">
              ابدأ رحلة التعلم اليوم
            </h2>
            <p className="text-xl mb-12 opacity-90 floating">
              انضم إلى آلاف الطلاب الذين يطورون مهاراتهم ويحققون أحلامهم
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 hover-glow"
            >
              سجل الآن
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
