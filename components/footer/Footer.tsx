'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <header className="grid md:grid-cols-3 grid-cols-1 mx-36 mt-4 px-8 py-6 bg-neutral-800 rounded-sm border-t border-t-neutral-700">
      <div>
        <h1 className="font-semibold text-base">팀 정보</h1>
        <div className="grid mt-4 text-sm text-neutral-200">
          <Link href={'/policy'}>이용약관</Link>
          <Link href={'/design'}>디자인 시스템</Link>
          <Link href={'/about'}>팀 솔빙</Link>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-base">외부 링크</h1>
        <div className="grid mt-4 text-sm text-neutral-200">
          <Link href={'https://github.com/xolving'}>깃허브</Link>
          <Link href={'https://discord.gg/36tCw3kYuJ'}>디스코드</Link>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-base">서비스</h1>
        <div className="grid mt-4 text-sm text-neutral-200">
          <Link href={'https://kolosseum.fodo.dev'}>콜로세움</Link>
        </div>
      </div>
    </header>
  );
}
