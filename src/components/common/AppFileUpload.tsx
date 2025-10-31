import { useRef, type ChangeEvent } from 'react';
import { Button, Input } from '../ui';
import { Image } from 'lucide-react';

interface Props {
    file: File | string | null;
    onChange: (file: File | string | null) => void;
}

function AppFileUpload({ file, onChange }: Props) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.files?.[0] ?? null);
        e.target.value = '';
    };
    const handleRenderPreview = () => {
        console.log(typeof file);
        if (typeof file === 'string') {
            return <img src={file} alt="@THUMBNAIL" className="w-full aspect-video rounded-lg object-cover border" />;
        } else if (file instanceof File) {
            return <img src={URL.createObjectURL(file)} alt="@THUMBNAIL" className="w-full aspect-video rounded-lg object-cover border" />;
        }
        return (
            <div className="w-full flex items-center justify-center aspect-video bg-card rounded-lg">
                <Button size={'icon'} variant={'ghost'} onClick={() => fileInputRef.current?.click()}>
                    <Image />
                </Button>
            </div>
        );
    };
    return (
        <>
            {handleRenderPreview()}
            <Input type="file" accept="image/*" ref={fileInputRef} onChange={handleChangeFile} className="hidden" />
        </>
    );
}

export { AppFileUpload };
