'use client';

import ContinueButton from '@/components/account/Continue-Button';
import { IcRoundNavigateNext } from '@/components/Icons';
import Link from 'next/link';
import { useCallback, useState } from 'react';

export default function Page() {
  // 1: 비밀번호가 서로 일치하지 않음
  // 2: 비밀번호 정규식이 일치하지 않음
  // 3: 이메일 정규식이 일치하지 않음
  const [error, setError] = useState<number[]>([]);
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onSubmit = useCallback((formData: FormData) => {
    const email = formData.get('email')?.valueOf() as string;
    const password = formData.get('password')?.valueOf() as string;
    const rePassword = formData.get('repassword')?.valueOf();

    if (!emailRegex.test(email)) setError([...error, 2]);
    else if (password != rePassword || !passwordRegex.test(password))
      setError([...error, 1]);
    else setError([]);
  }, []);

  return (
    <main className="grid">
      <form
        className="mx-auto md:w-1/4 w-3/4 mt-16 grid gap-y-8"
        action={onSubmit}
      >
        <div className="grid items-center">
          <h1 className="font-semibold text-xl">회원가입</h1>
          <div className="flex mt-1 gap-x-0 hover:gap-x-2 duration-300">
            <Link href={'/login'} className="text-sm">
              로그인으로 이동
            </Link>
            <IcRoundNavigateNext scope={20} />
          </div>
        </div>
        <div>
          <p className="text-sm">
            이메일<a className="text-red-500">*</a>
          </p>
          <input
            name="email"
            style={{
              boxShadow: '0 0 0 1000px black inset',
              WebkitBoxShadow: '0 0 0 1000px black inset',
              WebkitTextFillColor: '#fff',
            }}
            className={`bg-[#00000000] border-b ${
              error.includes(2) ? 'border-b-red-600' : 'border-b-neutral-600'
            } focus:py-2 outline-none duration-300 w-full`}
          ></input>
          {error.includes(2) && (
            <p className="text-red-600 text-sm">이메일이 올바르지 않습니다.</p>
          )}
        </div>
        <div>
          <p className="text-sm">
            비밀번호<a className="text-red-500">*</a>
          </p>
          <input
            name="password"
            placeholder="대소문자, 숫자, 특수문자 각 1개 이상"
            style={{
              boxShadow: '0 0 0 1000px black inset',
              WebkitBoxShadow: '0 0 0 1000px black inset',
              WebkitTextFillColor: '#fff',
            }}
            type="password"
            className={`placeholder:opacity-50 placeholder:text-sm bg-[#00000000] border-b ${
              error.includes(1) ? 'border-b-red-600' : 'border-b-neutral-600'
            } focus:py-2 outline-none duration-300 w-full`}
          ></input>
          {error.includes(1) && (
            <p className="text-red-600 text-sm">
              비밀번호가 일치하지 않거나 올바르지 않습니다.
            </p>
          )}
        </div>
        <div>
          <p className="text-sm">
            비밀번호 확인<a className="text-red-500">*</a>
          </p>
          <input
            name="repassword"
            placeholder="대소문자, 숫자, 특수문자 각 1개 이상"
            style={{
              boxShadow: '0 0 0 1000px black inset',
              WebkitBoxShadow: '0 0 0 1000px black inset',
              WebkitTextFillColor: '#fff',
            }}
            type="password"
            className={`placeholder:opacity-50 placeholder:text-sm bg-[#00000000] border-b ${
              error.includes(1) ? 'border-b-red-600' : 'border-b-neutral-600'
            } focus:py-2 outline-none duration-300 w-full`}
          ></input>
        </div>
        <ContinueButton />
      </form>
    </main>
  );
}
