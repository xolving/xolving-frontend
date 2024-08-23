'use client';

import Link from 'next/link';

import HeaderIcon from './Header-Icon';

export function Header() {
  return (
    <header className="grid grid-cols-3 md:mx-36 mx-4 py-4 items-center">
      <Link href={'/'}>
        <HeaderIcon width={105} height={35} />
      </Link>
      <div className="flex mx-auto font-semibold gap-x-2">
        <Link
          className="hover:bg-[#44444488] duration-300 rounded-xl px-4 py-1"
          href={'/notice'}
        >
          공지
        </Link>
        <Link
          className="hover:bg-[#44444488] duration-300 rounded-xl px-4 py-1"
          href={'/update'}
        >
          업데이트
        </Link>
        <Link
          className="hover:bg-[#44444488] duration-300 rounded-xl px-4 py-1"
          href={'/board'}
        >
          게시판
        </Link>
      </div>
      <div className="ml-auto flex gap-x-2">
        <Link
          href={'/login'}
          className="bg-neutral-800 rounded-lg text-sm px-3 py-1 border border-neutral-600 text-neutral-300"
        >
          로그인 · 회원가입
        </Link>
      </div>
    </header>
  );
}
