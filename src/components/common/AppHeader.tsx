import { Separator } from "../ui";

function AppHeader() {
  return (
    <header className="w-full fixed top-0 z-20 flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/* 로고 & 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5">
          <img
            src="https://avatars.githubusercontent.com/u/102867392?s=400&amp;u=d2716479c072c17f0084073d6359b3151493e458&amp;v=4"
            className="w-6 h-6 cursor-pointer"
            alt="@leehyerrr"
          />
          <div className="flex items-center gap-5">
            <div className="font-semibold">토픽 인사이트</div>
            <Separator orientation="vertical" className="!h-4" />
            <div className="font-semibold">포트폴리오</div>
          </div>
        </div>
        {/* 로그인 UI */}
        <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-500">
          로그인
        </div>
      </div>
    </header>
  );
}

export { AppHeader };
