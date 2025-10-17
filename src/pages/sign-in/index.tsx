import { Form, Button, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
import { z } from 'zod';

const formSchema = z.object({
    email: z.email({
        error: '올바른 형식의 이메일 주소를 입력해주세요.',
    }),
    password: z.string().min(8, {
        error: '비밀번호는 최소 8자 이상이어야 합니다.',
    }),
});

function SignIn() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <main className="w-full h-full min-h-[720px] flex items-center justify-center p-6 gap-6">
            <div className="w-100 max-w-100 flex flex-col px-6 gap-6">
                <div className="flex flex-col">
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">회원가입</h4>
                    <p className="text-muted-foreground">로그인을 위한 정보를 입력해주세요.</p>
                </div>
                <div className="grid gap-3">
                    <Button>
                        <img src="/assets/icons/social/google.svg" alt="@GOOGLE-LOGO" className="w-[18px] h-[18px] mr-1" />
                        구글 로그인
                    </Button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-2 text-muted-foreground bg-black uppercase">OR CONTINUE WITH</span>
                        </div>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>이메일</FormLabel>
                                        <FormControl>
                                            <Input placeholder="이메일을 입력하세요." {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>비밀번호</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="비밀번호를 입력하세요." {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <div className="w-full flex flex-col gap-3">
                                <Button type="submit" variant={'outline'} className="flex-1 !bg-sky-800/50">
                                    로그인
                                </Button>
                                <div className="text-center">
                                    계정이 없으신가요?
                                    <NavLink to={'/sign-up'} className="underline ml-1">
                                        회원가입
                                    </NavLink>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </main>
    );
}

export default SignIn;
