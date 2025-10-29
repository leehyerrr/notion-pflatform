import { Badge, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Separator } from '@/components/ui';

interface Props {
    children: React.ReactNode;
}

function AppDraftsDialog({ children }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>임시 저장된 토픽</DialogTitle>
                    <DialogDescription>임시 저장된 토픽 목록입니다. 이어서 작성하거나 삭제할 수 있습니다.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 py-4">
                    <div className="flex items-center gap-2">
                        <p>임시저장</p>
                        <p className="text-base text-green-600 -mr-[6px]">7</p>
                        <p>건</p>
                    </div>
                    <div className="min-h-60 h-60 flex flex-col items-center gap-3 overflow-y-scroll">
                        <div className="w-full flex items-center justify-between py-2 px-4 gap-3 rounded-md bg-card/50 cursor-pointer">
                            <div className="flex items-start gap-2">
                                <Badge className="w-5 h-5 mt-[3px] rounded-sm aspect-square text-foreground bg-[#E26F24] hover:bg-[#E26F24]">2</Badge>
                                <div className="flex flex-col">
                                    <p className="line-clamp-1">타이틀 타이틀타이틀타이틀타이틀 타이틀 타이틀 타이틀</p>
                                    <p className="text-xs text-muted-foreground">작성일: 1111.22.33</p>
                                </div>
                            </div>
                            <Badge variant={'outline'}>작성중</Badge>
                        </div>
                    </div>
                    <div className="min-h-60 flex items-center justify-center">
                        <p className="text-muted-foreground/50">조회 가능한 정보가 없습니다.</p>
                    </div>
                </div>
                <Separator />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="outline" className="border-0">
                            닫기
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export { AppDraftsDialog };
