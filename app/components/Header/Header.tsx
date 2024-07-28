import Link from "next/link";
import HeaderIcon from "./Header-Icon";

export default function Header() {
  return (
    <header className="py-2 px-16 items-center grid grid-cols-3 border-b border-b-neutral-900">
      <Link href={"/"}>
        <HeaderIcon width={120} height={40} />
      </Link>
      <div className="gap-x-12 flex font-semibold mx-auto">
        <Link href={"/pricing"}>가격표</Link>
        <Link href={"https://discord.gg/36tCw3kYuJ"}>디스코드</Link>
        <Link href={"https://xolving.com"}>팀 솔빙</Link>
      </div>
      <div className="font-semibold ml-auto">
        <Link href={"/"}>대시보드</Link>
      </div>
    </header>
  );
}
