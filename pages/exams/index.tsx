import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Exams() {
  const exams = [
    {
      id: 1,
      name: 'اختبار نافس',
      description: 'اختبار القدرات العامة للطلاب الثانويين',
      totalQuestions: 120,
      duration: 180,
      image: '📚',
    },
    {
      id: 2,
      name: 'اختبار القدرات',
      description: 'اختبار القدرات العقلية والاستدلالية',
      totalQuestions: 99,
      duration: 170,
      image: '🧠',
    },
    {
      id: 3,
      name: 'اختبار التحصيلي',
      description: 'اختبار التحصيل الدراسي في المواد العلمية',
      totalQuestions: 110,
      duration: 180,
      image: '📖',
    },
  ];

  return (
    <Layout title="الاختبارات - منصة نقت">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">الاختبارات المتاحة</h1>
        <p className="text-gray-600 mb-12">اختر الاختبار الذي تريد التدريب عليه</p>

        <div className="grid md:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <Card key={exam.id} className="hover:shadow-xl transition">
              <div className="text-5xl mb-4">{exam.image}</div>
              <h3 className="text-2xl font-bold mb-2">{exam.name}</h3>
              <p className="text-gray-600 mb-4">{exam.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
                <p>📝 {exam.totalQuestions} سؤال</p>
                <p>⏱️ {exam.duration} دقيقة</p>
              </div>
              <Button className="w-full">ابدأ التدريب</Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
