import ReactQuill from "react-quill";

function QuillEditor({ handleChange, value }) {
  return <ReactQuill theme='snow' value={value} onChange={handleChange} />;
}

export default QuillEditor;
