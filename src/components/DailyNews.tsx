"use client"

import { fetchNews, News } from '@/libs/supabase';
import Link from "next/link";
import { useEffect, useState } from 'react';
import styled from "styled-components";

const Content = styled.div`
  && {
    padding: 8px 120px 8px 30px;
    margin-bottom: 4px;
    column-gap: 18px;
    border-width: 1px;
    font-weight: 500;
    background-color: white;
    border-radius: 1rem;
  }
`;

export default function DailyNews({title, type}: {title: string, type?: number}){
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews() ?? []
      setNews(news);
    }

    getNews();
  })

  return (
    <div>
      <h1 className="text-3xl font-medium">{title}</h1>
      <hr className="my-5" />
      <div>{
        news?.map( news => 
          <Link href={`/${news.id}`} key={news.id}>
            <Content>
              <h1 className="text-lg">{news.title}</h1>
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