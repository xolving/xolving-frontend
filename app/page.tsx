'use client';

import Banner from '@/components/Banner';
import DefaultBlock from '@/components/Default-Block';
import ExternalTitle from '@/components/External-Title';
import { PhMagnifyingGlass } from '@/components/Icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { mocks } from './mocks/posts';

export default function Home() {
  const maxPage = mocks.length / 10;
  const pageArray = Array.from({ length: maxPage + 1 }, (_, i) => i + 1);
  const router = useRouter();
  const params = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // TODO 페이지네이션은 나중에 백엔드에 요청하는 식으로 변경해야한다.
    setPosts(mocks.slice(currentPage * 10 - 10, currentPage * 10));
  }, [currentPage]);

  useEffect(() => {
    if (params.get('page') != undefined) {
      setCurrentPage(Number.parseInt(params.get('page')!));
    }
  }, [params.get('page')]);

  return (
    <main className="grid text-neutral-200 md:mx-36 mx-4">
      <div className="left-[-70rem] top-[-40rem] w-[120rem] h-[120rem] from-[#4942ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />
      <div className="left-[30rem] top-[-5rem] w-[120rem] h-[120rem] from-[#6f42ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />

      <div className="grid gap-y-8 mt-8">
        {/* 왼쪽 메뉴 */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-4">
          <div className="md:col-span-3 col-span-1">
            <DefaultBlock>
              <ExternalTitle href={'/notice'}>공지사항</ExternalTitle>
              <div className="text-sm">
                {mocks.slice(0, 4).map((mock) => (
                  <div key={mock.title}>
                    <h1>{mock.title}</h1>
                  </div>
                ))}
              </div>
            </DefaultBlock>
            <DefaultBlock>
              <ExternalTitle href={'/update'}>업데이트 내역</ExternalTitle>
              <div className="text-sm">
                {mocks.slice(0, 4).map((mock) => (
                  <div key={mock.title}>
                    <h1>{mock.title}</h1>
                  </div>
                ))}
              </div>
            </DefaultBlock>
          </div>

          {/* 오른쪽 메뉴 */}
          <DefaultBlock className="grid w-full">
            <div className="m-auto text-center">
              <div className="w-24 h-24 bg-white rounded-full" />
              <div className="mt-4">
                <h1 className="text-lg font-semibold text-neutral-50">
                  @velo_ox
                </h1>
                <h2 className="text-sm text-neutral-400">나이츠 | 109p</h2>
              </div>
            </div>
          </DefaultBlock>
        </div>

        <DefaultBlock className="grid">
          <div className="text-sm">
            <div className="mb-2 flex">
              <div>
                <ExternalTitle href="/board">게시판</ExternalTitle>
              </div>
              <div className="relative ml-auto">
                <PhMagnifyingGlass className="absolute" scope={20} />
                <input className="bg-neutral-800 border-b border-b-neutral-600 pl-6 pb-2 outline-none md:w-60 w-full"></input>
              </div>
            </div>
            <div className="grid divide-y divide-neutral-700">
              <Suspense>
                {posts.map((mock) => (
                  <div key={mock.title} className="py-2">
                    <div className="flex mb-1 gap-x-2">
                      <h2 className="text-neutral-300 text-sm">{mock.date}</h2>
                      <p className="text-neutral-200">/</p>
                      <div className="bg-neutral-600 rounded-2xl py-0 px-3 text-sm inline">
                        {mock.category}
                      </div>
                    </div>
                    <h1 className="font-semibold text-base">{mock.title}</h1>
                  </div>
                ))}
              </Suspense>
            </div>
          </div>
          <div className="mx-auto text-lg flex gap-x-2 divide-x-2 font-mono">
            {pageArray.map((value) => (
              <p
                key={value}
                className={`${
                  currentPage == value ? 'text-neutral-500' : 'text-white'
                }`}
                onClick={() => {
                  router.push(`?page=${value}`);
                }}
              >
                {value}
              </p>
            ))}
          </div>
        </DefaultBlock>
        <Banner />
      </div>
    </main>
  );
}
