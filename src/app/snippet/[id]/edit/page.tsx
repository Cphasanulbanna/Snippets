
import CodeEditor from "@/components/CodeEditor";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditSnippet = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params)?.id);
  const snippet = await prisma?.snippet?.findUnique({
    where: {
      id,
    },
  });


  if (!snippet) return <h1>Code snippet not found</h1>;

  return <CodeEditor snippet={snippet} />;
};

export default EditSnippet;
