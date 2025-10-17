import {
    Button,
    Input,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    Skeleton,
} from '@/components/ui';
import { TOPIC_CATEGORY } from '@/constants/category.constant';
import { Label } from '@radix-ui/react-label';
import { ArrowLeft, Asterisk, BookOpenCheck, ImageOff, Save } from 'lucide-react';

function createTopics() {
    return (
        <main className="w-full h-full min-h-[1024px] flex gap-6 p-6">
            <div className="fixed right-1/2 translate-x-1/2 bottom-10 flex items-center gap-2">
                <Button variant="outline" size="icon">
                    <ArrowLeft />
                </Button>
                <Button variant="outline" className="w-22 !bg-yellow-800/50">
                    <Save />
                    저장
                </Button>
                <Button variant="outline" className="w-22 !bg-emerald-800/50">
                    <BookOpenCheck />
                    발행
                </Button>
            </div>
            <section className="w-3/4 flex flex-col gap-6">
                <div className="flex flex-col pb-6 border-b">
                    <span className="text-[#F96859] font-semibold">Step 01</span>
                    <span className="text-base font-semibold">토픽 작성하기</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex item-center gap-1">
                        <Asterisk size={14} className="text-[#F96859]" />
                        <Label htmlFor="title" className="text-muted-foreground">
                            제목
                        </Label>
                    </div>
                    <Input
                        id="title"
                        placeholder="토픽 제목을 입력하세요."
                        className="h-16 pl-6 !text-lg placeholder:text-lg placeholder:font-semibold border-0"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex item-center gap-1">
                        <Asterisk size={14} className="text-[#F96859]" />
                        <Label htmlFor="cont" className="text-muted-foreground">
                            본문
                        </Label>
                    </div>
                    <Skeleton className="w-full h-100" />
                </div>
            </section>
            <section className="w-1/4 flex flex-col gap-6">
                <div className="flex flex-col pb-6 border-b">
                    <span className="text-[#F96859] font-semibold">Step 02</span>
                    <span className="text-base font-semibold">카테고리 및 썸네일 등록</span>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <Asterisk size={14} className="text-[#F96859]" />
                        <Label className="text-muted-foreground">카테고리</Label>
                    </div>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="토픽(주제) 선택" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>카테고리(주제)</SelectLabel>
                                {TOPIC_CATEGORY.map((topic) => {
                                    return (
                                        <SelectItem value={topic.category} key={topic.id}>
                                            {topic.label}
                                        </SelectItem>
                                    );
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex item-center gap-1">
                        <Asterisk size={14} className="text-[#F96859]" />
                        <Label className="text-muted-foreground">썸네일</Label>
                    </div>
                    <Skeleton className="w-full aspect-video" />
                    <Button variant="outline" className="border-0">
                        <ImageOff />
                        썸네일 제거
                    </Button>
                </div>
            </section>
        </main>
    );
}

export default createTopics;
