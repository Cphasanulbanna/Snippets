import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

type SnippetDetailsPageProps = {
  params: Promise<{id: string }>;
};

const SnippetDetailsPage: React.FC<SnippetDetailsPageProps> = async ({
  params,
}) => {
  const id = parseInt((await params)?.id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1>Snippet not Found</h1>;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-end gap-x-2">
        <Link href={`/snippet/${snippet?.id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Button variant={"destructive"}>Delete</Button>
      </div>
      <h1>{snippet?.title}</h1>
      <pre>
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailsPage;
