"use client"

import Link from "next/link";
import styled from "styled-components";

const Content = styled.div`
  && {
    padding: 45px 20px 45px 20px;
    margin-bottom: 10px;
    column-gap: 18px;
    border-width: 1px;
    font-weight: 500;
    background-color: white;
    border-radius: 1rem;
  }
`;

export default function DailyQ(){
  return (
    <div className="mx-80">
      <h1 className="text-3xl font-medium">오늘의 주제</h1>
      <hr className="my-5" />
      <div>{
        mocks.map( mock => 
          <Link href={`/${mock.id}`}>
            <Content key={mock.id}>
              <h1 className="text-xl">{mock.title}</h1>
            </Content>
          </Link>
        )
      }</div>
    </div>
  )
}

const mocks = [
  {
    id: 1,
    title: "Git Flow와 Github Flow의 차이점이 뭘까?",
  },
  {
    id: 2,
    title: "Github와 Gitlab의 장단점이 뭘까?",
  },
  {
    id: 3,
    title: "Next.js를 쓰면 뭐가 좋을까?",
  }
]