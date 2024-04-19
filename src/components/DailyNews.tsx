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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews() ?? []
      setNews(news);
      setLoading(false);
    }

    getNews();
  })

  return (
    <div>
      <h1 className="text-3xl font-medium">{title}</h1>
      <hr className="my-5" />
      <div>{
        isLoading ? 
        <Content>
              <h1 className="text-lg">로딩 중...</h1>
        </Content> 
        : news?.map( news => 
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