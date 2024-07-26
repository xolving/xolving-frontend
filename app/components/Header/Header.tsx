import Link from "next/link";
import HeaderIcon from "./Header-Icon";

export default function Header() {
  return (
    <header className="py-2 px-16 items-center grid grid-cols-3 border-b">
      <Link href={"/"}>
        <HeaderIcon width={120} height={40} />
      </Link>
      <div className="gap-x-12 flex text-lg font-semibold mx-auto">
        <Link href={"/notice"}>공지</Link>
        <Link href={"https://discord.gg/36tCw3kYuJ"}>디스코드</Link>
        <Link href={"/blog"}>블로그</Link>
      </div>
      <div className="text-lg font-semibold ml-auto">
        <Link href={"/"}>대시보드</Link>
      </div>
    </header>
  );
}
