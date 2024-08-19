'use client';

import ExternalTitle from '@/components/External-Title';
import { useEffect, useState } from 'react';
import { mocks } from './mocks/posts';

export default function Home() {
  const maxPage = mocks.length / 10;
  const pageArray = Array.from({ length: maxPage + 1 }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // TODO 페이지네이션은 나중에 백엔드에 요청하는 식으로 변경해야한다.
    setPosts(mocks.slice(currentPage * 10 - 10, currentPage * 10));
  }, [currentPage]);

  return (
    <main className="grid text-neutral-200 md:mx-36 mx-4">
      <div className="left-[-70rem] top-[-40rem] w-[120rem] h-[120rem] from-[#4942ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />
      <div className="left-[30rem] top-[-5rem] w-[120rem] h-[120rem] from-[#6f42ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />

      <div className="grid gap-y-4 mt-16">
        {/* 왼쪽 메뉴 */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4">
          <div>
            <div className="bg-neutral-800 p-5 rounded-sm border-b border-b-neutral-700">
              <ExternalTitle href={'/notice'}>공지사항</ExternalTitle>
              <div className="text-sm">
                {mocks.slice(0, 4).map((mock) => (
                  <div key={mock.title}>
                    <h1>{mock.title}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-800 p-5 rounded-sm border-b border-b-neutral-700">
              <ExternalTitle href={'/update'}>업데이트 내역</ExternalTitle>
              <div className="text-sm">
                {mocks.slice(0, 4).map((mock) => (
                  <div key={mock.title}>
                    <h1>{mock.title}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽 메뉴 */}
          <div className="bg-neutral-800 p-5 rounded-sm border-b border-b-neutral-700">
            <ExternalTitle href="/recruit">홍보 및 구인구직</ExternalTitle>
            <div className="text-sm">
              {mocks.slice(0, 4).map((mock) => (
                <div key={mock.title}>
                  <h1>{mock.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 p-5 rounded-sm border-b border-b-neutral-700 grid">
          <div className="text-sm grid">
            {posts.map((mock) => (
              <div key={mock.title} className="py-2">
                <div className="flex mb-1 gap-x-2">
                  <div className="bg-neutral-600 rounded-2xl py-0 px-3 text-sm inline">
                    {mock.category}
                  </div>
                  <p>/</p>
                  <div className="flex gap-x-2">
                    {mock.tags.map((tag: string) => (
                      <div
                        key={tag}
                        className="bg-neutral-600 rounded-2xl py-0 px-3 text-sm inline"
                      >
                        {`#${tag}`}
                      </div>
                    ))}
                  </div>
                </div>
                <h1 className="font-semibold text-base">{mock.title}</h1>
                <h2 className="text-neutral-300 text-sm">{mock.date}</h2>
              </div>
            ))}
          </div>
          <div className="mx-auto text-lg flex gap-x-2 divide-x-2 font-mono">
            {pageArray.map((value) => (
              <p
                key={value}
                onClick={() => {
                  setCurrentPage(value);
                }}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
