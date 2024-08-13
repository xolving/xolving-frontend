'use client';

import { IcRoundKeyboardDoubleArrowDown } from '@/components/Icons';
import styled from 'styled-components';
import { projectList } from './mocks/project';

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
  return (
    <main className="grid">
      <div className="left-[-70rem] top-[-40rem] w-[120rem] h-[120rem] from-[#4942ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />
      <div className="left-[30rem] top-[-5rem] w-[120rem] h-[120rem] from-[#6f42ad6b] via-[#00000000] bg-gradient-radial rounded-full fixed z-[-1] bg-blend-overlay" />

      <div className="min-h-screen grid">
        <div className="text-center mt-[10rem] md:font-6xl sm:text-5xl">
          <div className="mb-8">
            <h1 className="font-black md:mb-3 text-purple-600">
              개발자 커뮤니티
            </h1>
            <p className="font-bold">현재 베타 버전입니다</p>
          </div>
          <div className="mx-auto grid grid-cols-3 mt-20 w-fit gap-3">
            {projectList.map((project) => (
              <div
                key={project.id}
                className="border w-[8rem] px-5 py-3 border-neutral-600 rounded-xl"
              >
                <h1 className="text-lg">{project.name}</h1>
                <p className="font-semibold text-lg">{project.content}</p>
              </div>
            ))}
          </div>
        </div>

        <ScrollAnimate className="mx-auto">
          <IcRoundKeyboardDoubleArrowDown scope={35} />
        </ScrollAnimate>
      </div>

      <div className="mx-auto font-semibold text-xl my-10">
        <h1>하하 아무것도 없습니다.</h1>
      </div>
    </main>
  );
}
