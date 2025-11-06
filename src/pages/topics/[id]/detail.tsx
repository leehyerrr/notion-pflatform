import { AppEditor } from '@/components/common';
import { Button, Separator } from '@/components/ui';
import supabase from '@/lib/supabase';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';

function TopicDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [thumbnail, setThumbnail] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const fetchTopic = async () => {
        try {
            const { data: topic, error } = await supabase.from('topic').select('*').eq('id', id);

            if (error) {
                toast.error(error.message);
                return;
            }
            if (topic) {
                console.log(topic);
                setTitle(topic[0].title);
                setCategory(topic[0].category);
                setThumbnail(topic[0].thumbnail);
                setContent(topic[0].content);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    useEffect(() => {
        fetchTopic();
    }, [id]);
    return (
        <main className="w-full h-full min-h-[720px] flex flex-col">
            <div className="relative w-full h-60 md:h-100 bg-cover bg-[50%_35%] bg-accent" style={{ backgroundImage: `url(${thumbnail})` }}>
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <ArrowLeft />
                    </Button>
                    <Button variant="outline" size="icon" className="!bg-red-800/50">
                        <Trash2 />
                    </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>
            <section className="relative w-full flex flex-col items-center -mt-40">
                <span className="mb-4"># {category}</span>
                <h1 className="scroll-m-20 text-center font-extrabold tracking-tight text-xl sm:text-2xl md:text-4xl">{title}</h1>
                <Separator className="!w-6 my-6 bg-foreground" />
                <span>2025. 10. 03.</span>
            </section>
            <div className="w-full pt-12 pb-6">{content && <AppEditor props={JSON.parse(content)} readonly />}</div>
        </main>
    );
}

export default TopicDetail;
