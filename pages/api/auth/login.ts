import type { NextApiRequest, NextApiResponse } from 'next';
import { generateToken } from '@/lib/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    // TODO: البحث عن المستخدم في قاعدة البيانات
    // TODO: التحقق من كلمة المرور

    // إنشاء token مؤقت
    const token = generateToken({
      userId: 'temp-id',
      email,
      role: 'student',
    });

    res.status(200).json({
      message: 'تم تسجيل الدخول بنجاح',
      token,
      user: { email },
    });
  } catch (error) {
    res.status(500).json({ message: 'بيانات دخول غير صحيحة' });
  }
}
