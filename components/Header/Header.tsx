'use client';

import Link from 'next/link';

import HeaderIcon from './Header-Icon';

export function Header() {
  return (
    <header className="flex px-36 py-4 items-center">
      <Link href={'/'}>
        <HeaderIcon width={105} height={35} />
      </Link>
      <div className="ml-auto flex gap-x-2">
        <Link
          href={'/login'}
          className="bg-neutral-800 rounded-lg text-sm px-3 py-1 border border-neutral-600 text-neutral-300"
        >
          로그인 <a className="px-1">·</a> 회원가입
        </Link>
      </div>
    </header>
  );
}
