import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'student',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('فشل التسجيل');

      const data = await res.json();
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="تسجيل جديد - منصة نقت">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">تسجيل حساب جديد</h2>

          {error && <div className="mb-4 p-4 bg-red-100 text-danger rounded-lg">{error}</div>}

          <form onSubmit={handleSubmit}>
            <Input
              label="الاسم الكامل"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              label="البريد الإلكتروني"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              label="كلمة المرور"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="mb-4">
              <label className="block mb-2 font-semibold text-gray-700">نوع الحساب</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="student">طالب</option>
                <option value="parent">ولي أمر</option>
                <option value="school">مدرسة</option>
              </select>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'جاري التسجيل...' : 'تسجيل'}
            </Button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            هل لديك حساب بالفعل؟{' '}
            <a href="/login" className="text-primary font-bold hover:underline">
              تسجيل دخول
            </a>
          </p>
        </Card>
      </div>
    </Layout>
  );
}
