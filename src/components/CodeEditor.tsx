/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Snippet } from "@/generated/prisma";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const CodeEditor = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);
  return (
    <div  className="flex flex-col gap-3 w-2/5 p-2">
      <form action={saveSnippetAction} className="flex justify-between item-center">
        <h2>Code Editor:</h2>
        <Button>Save</Button>
      </form>
      <div className="w-full">
        <Editor
          height="40vh"
          width="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={code}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
