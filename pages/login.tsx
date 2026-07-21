import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('بيانات دخول غير صحيحة');

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
    <Layout title="تسجيل دخول - منصة نقت">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">تسجيل الدخول</h2>

          {error && <div className="mb-4 p-4 bg-red-100 text-danger rounded-lg">{error}</div>}

          <form onSubmit={handleSubmit}>
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

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'جاري الدخول...' : 'دخول'}
            </Button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            لا تملك حسابًا؟{' '}
            <a href="/register" className="text-primary font-bold hover:underline">
              تسجيل جديد
            </a>
          </p>
        </Card>
      </div>
    </Layout>
  );
}
