import ReactQuill from "react-quill";

function QuillEditor({ label, handleChange, value }) {
  return (
    <>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={handleChange}
        id='rte-editor'
      />
    </>
  );
}

export default QuillEditor;
