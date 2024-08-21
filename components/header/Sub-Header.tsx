'use client';

import Link from 'next/link';

export function SubHeader() {
  return (
    <header className="flex gap-x-6 md:mx-36 mx-4 items-center bg-neutral-800 px-5 pb-3 rounded-b-sm border-b border-x border-neutral-700 text-sm">
      <Link href={'/board'}>게시판</Link>
      <Link href={'/blog'}>블로그</Link>
      <Link href={'/notice'}>공지</Link>
      <Link href={'/update'}>업데이트 내역</Link>
    </header>
  );
}
