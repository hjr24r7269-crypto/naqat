import type { NextApiRequest, NextApiResponse } from 'next';
import { generateToken } from '@/lib/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password, name, role } = req.body;

    // TODO: التحقق من صحة البيانات
    // TODO: التحقق من عدم وجود البريد الإلكتروني مسبقاً
    // TODO: تشفير كلمة المرور
    // TODO: إنشاء المستخدم في قاعدة البيانات

    // إنشاء token مؤقت
    const token = generateToken({
      userId: 'temp-id',
      email,
      role: role as any,
    });

    res.status(201).json({
      message: 'تم التسجيل بنجاح',
      token,
      user: { email, name, role },
    });
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ في الخادم' });
  }
}
