'use client';

import Link from 'next/link';

import HeaderIcon from './Header-Icon';

export function Header() {
  return (
    <header className="flex md:mx-36 mx-4 py-4 items-center bg-neutral-800 px-5 border-x border-x-neutral-700">
      <Link href={'/'}>
        <HeaderIcon width={105} height={35} />
      </Link>
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
