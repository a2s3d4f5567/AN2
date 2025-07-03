'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PersonalInfo() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        <Image 
          src="./images/avatar.svg"
          alt="个人头像"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">九月</div>
        <p className="text-slate-500">一位热情的 Web 学习者。</p>
        <button 
          onClick={() => setShowMore(!showMore)}
          className="mt-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          {showMore ? '收起' : '了解更多'}
        </button>
        {showMore && (
          <div className="mt-2 text-sm text-slate-600">
            <p>这里是更多关于我的详细介绍... 我精通 React、Next.js .</p>
          </div>
        )}
      </div>
    </div>
  );
}
