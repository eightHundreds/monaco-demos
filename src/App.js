import React from "react";

import Editor from "@monaco-editor/react";

function App() {
  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }

  return (
    <Editor
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onChange={handleEditorChange}
      options={{}}
    />
  );
}

export default App;
