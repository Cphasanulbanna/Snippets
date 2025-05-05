"use client";
import { Editor } from "@monaco-editor/react";
import React from "react";

const CodeEditor = () => {
  return (
    <div className="p-3">
      <Editor
        height="40vh"
        width="40vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
};

export default CodeEditor;
