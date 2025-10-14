'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F6F7F8] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">错误</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          出现了一些问题
        </h2>

        <p className="text-gray-600 mb-8">
          很抱歉，页面加载时遇到了错误。请稍后再试。
        </p>

        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            重试
          </button>

          <a
            href="/"
            className="block w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-200"
          >
            返回首页
          </a>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-gray-400">
            错误代码: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
