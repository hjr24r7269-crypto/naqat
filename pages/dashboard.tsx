import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Card from '@/components/Card';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // TODO: جلب بيانات المستخدم من API
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <Layout title="لوحة التحكم">
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl text-gray-600">جاري التحميل...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="لوحة التحكم - منصة نقت">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">لوحة التحكم</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-bold mb-2">الاختبارات المتاحة</h3>
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="text-gray-600">نافس، القدرات، التحصيلي</p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold mb-2">اختباراتك</h3>
            <p className="text-3xl font-bold text-secondary">0</p>
            <p className="text-gray-600">لم تبدأ أي اختبارات بعد</p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold mb-2">نسبة النجاح</h3>
            <p className="text-3xl font-bold text-success">-</p>
            <p className="text-gray-600">لا توجد نتائج بعد</p>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">ابدأ الآن</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['نافس', 'القدرات', 'التحصيلي'].map((exam) => (
              <Card key={exam} className="cursor-pointer hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-2">{exam}</h3>
                <p className="text-gray-600 mb-4">اختبر نفسك الآن</p>
                <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700">
                  ابدأ الاختبار
                </button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
