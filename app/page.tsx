'use client';

import styled from 'styled-components';

const ScrollAnimate = styled.div`
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

export default function Home() {
  const mocks = [
    {
      title: '서버비 내기 싫어서 그냥 임시용 ㅋㅋ',
      date: '2024년 11월 11일',
    },
    {
      title: '서버비 내기 싫어서 그냥 임시용 ㅋㅋ',
      date: '2024년 11월 11일',
    },
    {
      title: '서버비 내기 싫어서 그냥 임시용 ㅋㅋ',
      date: '2024년 11월 11일',
    },
    {
      title: '서버비 내기 싫어서 그냥 임시용 ㅋㅋ',
      date: '2024년 11월 11일',
    },
    {
      title: '서버비 내기 싫어서 그냥 임시용 ㅋㅋ',
      date: '2024년 11월 11일',
    },
    {
      title: '서버비 내기 싫어서 그냥 임시용 ㅋㅋ',
      date: '2024년 11월 11일',
    },
  ];

  return (
    <main className="grid text-neutral-200 md:mx-36 mx-4">
      <div className="left-[-70rem] top-[-40rem] w-[120rem] h-[120rem] from-[#4942ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />
      <div className="left-[30rem] top-[-5rem] w-[120rem] h-[120rem] from-[#6f42ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />

      <div className="grid gap-y-4 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4">
          <div className="bg-neutral-900 p-5 rounded-sm border-b">
            <h1 className="text-lg font-semibold mb-2">공지사항</h1>
            <div className="text-sm">
              {mocks.slice(0, 4).map((mock) => (
                <div key={mock.title}>
                  <h1>{mock.title}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-neutral-900 p-5 rounded-sm border-b">
            <h1 className="text-lg font-semibold mb-2">업데이트 내역</h1>
            <div className="text-sm">
              {mocks.slice(0, 4).map((mock) => (
                <div key={mock.title}>
                  <h1>{mock.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-5 rounded-sm border-b grid">
          <div className="text-sm grid divide-y">
            {mocks.map((mock) => (
              <div key={mock.title} className="py-2">
                <h1>{mock.title}</h1>
                <h2 className="text-neutral-300">{mock.date}</h2>
              </div>
            ))}
          </div>
          <div className="mx-auto text-lg">1 | 2 | 3 | 4 | 5 | ...</div>
        </div>
      </div>
    </main>
  );
}
