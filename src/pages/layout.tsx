import { AppFooter, AppHeader, AppSidebar } from "@/components/common";
import { Button } from "@/components/ui";
import { PencilLine } from "lucide-react";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="page">
      <AppHeader />
      <div className="container">
        <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
          <div className="fixed right-1/2 bottom-10 translate-x-1/2 z-20 flex items-center gap-2">
            <Button
              variant={"destructive"}
              className="!py-5 !px-6 rounded-full"
            >
              <PencilLine />
              나만의 토픽 작성
            </Button>
          </div>
          <AppSidebar />
          <Outlet />
        </main>
      </div>
      <AppFooter />
    </div>
  );
}

export default RootLayout;
