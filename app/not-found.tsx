'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#F6F7F8] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          页面未找到
        </h2>

        <p className="text-gray-600 mb-8">
          抱歉，您访问的页面不存在或已被移除。
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            返回首页
          </Link>

          <button
            onClick={() => router.back()}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-200"
          >
            返回上一页
          </button>
        </div>
      </div>
    </div>
  );
}
