import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function QuillEditor() {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      theme='snow'
      value={value}
      onChange={setValue}
      style={{ minHeight: "10em" }}
    />
  );
}

export default QuillEditor;
