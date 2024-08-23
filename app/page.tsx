'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="grid text-neutral-200 md:mx-36 mx-4">
      <div className="left-[-70rem] top-[-40rem] w-[120rem] h-[120rem] from-[#4942ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />
      <div className="left-[30rem] top-[-5rem] w-[120rem] h-[120rem] from-[#6f42ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />

      <div className="min-h-screen">
        <div className="grid">
          <div className="text-center mt-32">
            <h1 className="font-semibold text-5xl">We are creator</h1>
            <p className="mt-2">창작을 즐긴다면 누구든지.</p>
          </div>

          <hr className="my-6 w-16 mx-auto border-neutral-200" />

          <div className="grid mx-auto text-neutral-400">
            <div className="flex gap-x-2 mx-auto">
              <p>#개발자</p>
              <p>#작가</p>
              <p>#크리에이터</p>
            </div>
            <div className="flex gap-x-2 mx-auto">
              <p>#편집자</p>
              <p>#디자이너</p>
              <p>#기획자</p>
              <p>#일러스트레이터</p>
            </div>
          </div>

          <div className="mx-auto mt-12">
            <div className="rounded-lg bg-neutral-800 px-5 py-2 flex gap-x-2 hover:gap-x-4 duration-300">
              <Link href={'https://discord.gg/36tCw3kYuJ'}>디스코드 열기</Link>
              <a>→</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
