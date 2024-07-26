import Link from "next/link";
import HeaderIcon from "./Header-Icon";

export default function Header() {
  return (
    <header className="mt-2 px-8 flex items-center">
      <Link href={"/"}>
        <HeaderIcon width={125} height={40} />
      </Link>
      <div className="ml-auto gap-x-8 flex text-lg font-semibold pt-2">
        <Link href={"/notice"}>공지</Link>
        <Link href={"https://discord.gg/36tCw3kYuJ"}>디스코드</Link>
        <Link href={"/blog"}>블로그</Link>
      </div>
    </header>
  );
}
