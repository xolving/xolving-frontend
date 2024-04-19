import DailyBoard from "@/components/DailyBoard";
import DailyNews from "@/components/DailyNews";

export default function Home() {
  return (
    <main>
      <div className="font-light">
        <div className="flex gap-x-3 justify-center">
          <DailyBoard title="커뮤니티" />
          <DailyNews title="뉴스" />
        </div>
      </div>
    </main>
  );
}
