'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { auth } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('Initial auth state:', auth.isAuthenticated());
    setIsAuthenticated(auth.isAuthenticated());

    const unsubscribe = auth.subscribe((newState) => {
      console.log('Auth state changed:', newState);
      setIsAuthenticated(newState);
    });

    return () => {
      console.log('Cleaning up auth subscription');
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    auth.logout();
    router.push('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            تعلم
          </Link>

          {/* القائمة الرئيسية - للشاشات الكبيرة */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              الرئيسية
            </Link>
            <Link href="/categories" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              التصنيفات
            </Link>
            <Link href="/courses" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              الكورسات
            </Link>
          </div>

          {/* أزرار تسجيل الدخول والتسجيل - للشاشات الكبيرة */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  تسجيل الخروج
                </button>
              ) : (
                <Link
                  href="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  تسجيل الدخول
                </Link>
              )}
            </div>
          </div>

          {/* زر القائمة - للشاشات الصغيرة */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة - للشاشات الصغيرة */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                التصنيفات
              </Link>
              <Link 
                href="/courses" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                الكورسات
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors w-full text-right"
                >
                  تسجيل الخروج
                </button>
              ) : (
                <Link
                  href="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors block text-right"
                  onClick={() => setIsMenuOpen(false)}
                >
                  تسجيل الدخول
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
