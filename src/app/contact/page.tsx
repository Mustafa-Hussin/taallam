'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // هنا يمكنك إضافة منطق إرسال النموذج إلى الخادم
      await new Promise(resolve => setTimeout(resolve, 1000)); // محاكاة طلب الشبكة
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* قسم المقدمة */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            اتصل بنا
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتك ومساعدتك في كل ما تحتاج. يمكنك التواصل معنا
            من خلال النموذج أدناه أو عبر وسائل التواصل المختلفة
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* معلومات الاتصال */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              وسائل التواصل
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold text-gray-800">البريد الإلكتروني</h3>
                  <p className="text-gray-600">info@taallam.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="text-2xl">📱</div>
                <div>
                  <h3 className="font-semibold text-gray-800">الهاتف</h3>
                  <p className="text-gray-600">+20 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-800">العنوان</h3>
                  <p className="text-gray-600">القاهرة، مصر</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="text-2xl">⏰</div>
                <div>
                  <h3 className="font-semibold text-gray-800">ساعات العمل</h3>
                  <p className="text-gray-600">السبت - الخميس: 9 صباحاً - 5 مساءً</p>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج الاتصال */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              أرسل رسالة
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-md">
                  تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت ممكن.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-md">
                  حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
