export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">نقت</h3>
          <p className="text-gray-400">منصة تدريبية شاملة للاختبارات الموحدة</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">الاختبارات</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">اختبار نافس</a></li>
            <li><a href="#" className="hover:text-white">اختبار القدرات</a></li>
            <li><a href="#" className="hover:text-white">اختبار التحصيلي</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">الدعم</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">من نحن</a></li>
            <li><a href="#" className="hover:text-white">الأسعار</a></li>
            <li><a href="#" className="hover:text-white">اتصل بنا</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">القانوني</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-white">شروط الخدمة</a></li>
            <li><a href="#" className="hover:text-white">الشروط والأحكام</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 منصة نقت. جميع الحقوق محفوظة. صُنع بـ ❤️ للتعليم في السعودية 🇸🇦</p>
      </div>
    </footer>
  );
}
