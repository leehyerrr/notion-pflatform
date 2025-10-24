import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { ko } from '@blocknote/core/locales';
import '@blocknote/mantine/style.css';
import '@blocknote/core/fonts/inter.css';
import type { Block } from '@blocknote/core';

interface Props {
    setContent: (content: Block[]) => void;
}

function AppEditor({ setContent }: Props) {
    const locale = ko;
    const editor = useCreateBlockNote({
        dictionary: {
            ...locale,
            placeholders: {
                ...locale.placeholders,
            },
        },
    });
    return <BlockNoteView editor={editor} onChange={() => setContent(editor.document)} />;
}

export { AppEditor };
