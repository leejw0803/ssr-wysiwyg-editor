import * as React from "react";
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import MagicUrl from "quill-magic-url";
import "react-quill/dist/quill.bubble.css";

Quill.register("modules/magicUrl", MagicUrl);

interface EditorProps {
  htmlStr: string;
  setHtmlStr: React.Dispatch<React.SetStateAction<string>>;
}

const CustomReactQuill = styled(ReactQuill)`
  height: 300px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 10px 0;

  .ql-container.ql-bubble:not(.ql-disabled) a::before {
    display: none;
  }
  .ql-container.ql-bubble:not(.ql-disabled) a::after {
    display: none;
  }

  .ql-bubble .ql-editor a {
    text-decoration: underline;
    color: blue;
    white-space: normal;
    word-wrap: break-word;
  }
`;

const Editor = ({ htmlStr, setHtmlStr }: EditorProps) => {
  const quillRef = React.useRef<ReactQuill>(null);

  const formats = [
    "background",
    "bold",
    "color",
    "font",
    "code",
    "italic",
    "link",
    "size",
    "strike",
    "script",
    "underline",
    "blockquote",
    "header",
    "indent",
    "list",
    "align",
    "direction",
    "code-block",
    "formula",
  ];

  const modules = React.useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike"],
      ],
      magicUrl: true,
    }),
    []
  );

  return (
    <CustomReactQuill
      ref={quillRef}
      theme="bubble"
      formats={formats}
      modules={modules}
      value={htmlStr}
      placeholder="Please enter the contents"
      onChange={(_content, _delta, _source, editor) =>
        setHtmlStr(editor.getHTML())
      }
    />
  );
};

export default Editor;
