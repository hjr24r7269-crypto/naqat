import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'الأساسية',
      price: 99,
      duration: 'شهر',
      features: ['وصول لاختبار واحد', '10 محاولات', 'إحصائيات أساسية'],
      color: 'primary',
    },
    {
      name: 'المتقدمة',
      price: 199,
      duration: 'شهر',
      features: ['وصول لجميع الاختبارات', '50 محاولة', 'تحليلات متقدمة', 'دعم أولويات'],
      color: 'secondary',
      popular: true,
    },
    {
      name: 'للمدارس',
      price: 2999,
      duration: 'شهر',
      features: ['عدد غير محدود من الطلاب', 'لوحة تحكم مدارس', 'تقارير شاملة', 'دعم متخصص'],
      color: 'success',
    },
  ];

  return (
    <Layout title="الأسعار - منصة نقت">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">خطط الاشتراك</h1>
        <p className="text-gray-600 mb-12 text-center">اختر الخطة المناسبة لك</p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? 'md:scale-105 shadow-2xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-warning text-white px-4 py-1 rounded-bl-lg">الأكثر شهرة</div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-gray-600 mr-2">ر.س/{plan.duration}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-600 flex items-center">
                    <span className="text-success mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={plan.color as any} className="w-full">
                اشترك الآن
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
