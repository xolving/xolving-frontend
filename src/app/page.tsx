import DailyBoard from "@/components/DailyBoard";
import DailyQ from "@/components/DailyQ";

export default function Home() {
  return (
    <main>
      <div className="font-light">
        <div className="flex gap-x-3 justify-center">
          <DailyBoard title="게시판" />
          <DailyQ title="뉴스" />
        </div>
      </div>
    </main>
  );
}
