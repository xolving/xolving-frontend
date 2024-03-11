"use client"

import Image from "next/image";
import { styled } from "styled-components";
import xolving from "@/public/xolving.svg"

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
                <a href="/about"><p>소개</p></a>
                <a href="/discord"><p>포럼</p></a>
                <a href="/contribute"><p>기여하기</p></a>
            </div>
            <div className="ml-auto">
              <a href="/login"><p>로그인</p></a>
            </div>
        </StyledHeader>
  )
}