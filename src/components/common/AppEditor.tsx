import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { ko } from '@blocknote/core/locales';
import '@blocknote/mantine/style.css';
import '@blocknote/core/fonts/inter.css';
import type { Block } from '@blocknote/core';
import { useEffect } from 'react';

interface Props {
    props?: Block[];
    setContent?: (content: Block[]) => void;
    readonly?: boolean;
}

function AppEditor({ props, setContent, readonly }: Props) {
    const locale = ko;
    const editor = useCreateBlockNote({
        dictionary: {
            ...locale,
            placeholders: {
                ...locale.placeholders,
            },
        },
    });

    useEffect(() => {
        if (props && props.length > 0) {
            const current = JSON.stringify(editor.document);
            const next = JSON.stringify(props);

            if (current !== next) {
                editor.replaceBlocks(editor.document, props);
            }
        }
    }, [props, editor]);
    return (
        <BlockNoteView
            editor={editor}
            editable={!readonly}
            onChange={() => {
                if (!readonly) {
                    setContent?.(editor.document);
                }
            }}
        />
    );
}

export { AppEditor };
