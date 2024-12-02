// نمط المراقب للتحديثات
type AuthListener = (isAuthenticated: boolean) => void;

class AuthService {
  private static instance: AuthService;
  private isAuth: boolean = false;
  private subscribers: Set<(isAuth: boolean) => void> = new Set();

  private constructor() {
    if (typeof window !== 'undefined') {
      // تحميل الحالة من localStorage عند بدء التطبيق
      const savedAuth = localStorage.getItem('auth');
      this.isAuth = savedAuth === 'true';

      // الاستماع لتغييرات localStorage من النوافذ الأخرى
      window.addEventListener('storage', (event) => {
        if (event.key === 'auth') {
          this.isAuth = event.newValue === 'true';
          this.notifySubscribers();
        }
      });
    }
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public isAuthenticated(): boolean {
    return this.isAuth;
  }

  public login(): void {
    this.isAuth = true;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', 'true');
    }
    this.notifySubscribers();
  }

  public logout(): void {
    this.isAuth = false;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', 'false');
    }
    this.notifySubscribers();
  }

  public subscribe(callback: (isAuth: boolean) => void): () => void {
    this.subscribers.add(callback);
    // تنفيذ callback مباشرة مع الحالة الحالية
    callback(this.isAuth);
    
    // إرجاع دالة لإلغاء الاشتراك
    return () => {
      this.subscribers.delete(callback);
    };
  }

  private notifySubscribers(): void {
    this.subscribers.forEach(callback => callback(this.isAuth));
  }
}

// تصدير نسخة واحدة من الخدمة
export const auth = AuthService.getInstance();
