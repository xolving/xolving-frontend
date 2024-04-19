"use client"

import xolving from "@/public/xolving.svg";
import Image from "next/image";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  && {
    display: flex;
    padding: 18px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    column-gap: 18px;
    border-width: 1px;
    font-weight: 500;
    background-color: white;
    border-radius: 1rem;
    margin: 1rem;
    position: sticky;
    top: 1rem;
  }
`;

export default function Header(){
    return (
        <StyledHeader>
            <a href="/"><Image src={xolving} alt="xolving" width={35} height={35} /></a>
            <p className="text-2xl text-slate-300 font-extralight">/</p>
            <div className="flex gap-x-5">
                <a href="/about"><p>솔빙 소개</p></a>
                <a href="/news"><p>뉴스</p></a>
                <a href="/learn"><p>강의</p></a>
            </div>
            <div className="ml-auto">
              <a href="/login"><p>로그인</p></a>
            </div>
        </StyledHeader>
  )
}