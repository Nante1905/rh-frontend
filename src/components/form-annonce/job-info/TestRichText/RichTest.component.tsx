import React from 'react';
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { 
    MenuControlsContainer,
    MenuSelectHeading,
    MenuDivider,
    RichTextEditorProvider, 
    RichTextField, 
    MenuButtonBold, 
    MenuButtonItalic, 
} from 'mui-tiptap';
import './RichTest.components.scss'; 

interface RichTextProps {
  onContentChange: (content: string) => void; 
}

function RichText({ onContentChange }: RichTextProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    onUpdate: ({ editor }) => {
      onContentChange(editor.getText());
    }
  });

  return (
    <div className="richTextContainer">
      <label htmlFor="mission" className="label">Mission:</label>
      <RichTextEditorProvider editor={editor}>
        <RichTextField
          controls={
            <MenuControlsContainer>
              <MenuSelectHeading />
              <MenuDivider />
              <MenuButtonBold />
              <MenuButtonItalic />
            </MenuControlsContainer>
          }
        />
      </RichTextEditorProvider>
    </div>
  );
}

export default RichText;
