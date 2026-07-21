import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary cursor-pointer">نقت</h1>
        </Link>

        <nav className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="text-gray-700 hover:text-primary">
                لوحة التحكم
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-danger text-white rounded-lg hover:bg-red-700"
              >
                تسجيل خروج
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-700 hover:text-primary">
                تسجيل دخول
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"
              >
                تسجيل جديد
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
