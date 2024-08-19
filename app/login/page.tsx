'use client';

import ContinueButton from '@/components/account/Continue-Button';
import { IcRoundNavigateNext } from '@/components/Icons';
import Link from 'next/link';
import { useCallback } from 'react';

export default function Page() {
  const onSubmit = useCallback((formDate: FormData) => {
    formDate.get('');
  }, []);

  return (
    <main className="grid">
      <form
        className="mx-auto md:w-1/4 w-3/4 mt-16 grid gap-y-8"
        action={onSubmit}
      >
        <div className="grid items-center">
          <h1 className="font-semibold text-xl">로그인</h1>
          <div className="flex mt-1 gap-x-0 hover:gap-x-2 duration-300">
            <Link href={'/join'} className="text-sm">
              회원가입으로 이동
            </Link>
            <IcRoundNavigateNext scope={20} />
          </div>
        </div>
        <div>
          <p className="text-sm">이메일</p>
          <input
            name="email"
            style={{
              boxShadow: '0 0 0 1000px black inset',
              WebkitBoxShadow: '0 0 0 1000px black inset',
              WebkitTextFillColor: '#fff',
            }}
            className="bg-[#00000000] border-b border-b-neutral-600 focus:py-2 outline-none duration-300 w-full"
          ></input>
        </div>
        <div>
          <p className="text-sm">비밀번호</p>
          <input
            name="password"
            style={{
              boxShadow: '0 0 0 1000px black inset',
              WebkitBoxShadow: '0 0 0 1000px black inset',
              WebkitTextFillColor: '#fff',
            }}
            type="password"
            className="bg-[#00000000] border-b border-b-neutral-600 focus:py-2 outline-none duration-300 w-full"
          ></input>
        </div>
        <ContinueButton />
      </form>
    </main>
  );
}
