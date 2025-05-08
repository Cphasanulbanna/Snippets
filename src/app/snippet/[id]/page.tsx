import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type SnippetDetailsPageProps = {
  params: Promise<{ id: string }>;
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

  const deleteSnippetAction = deleteSnippet.bind(null, id);

  if (!snippet) return notFound();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-end gap-x-2">
        <Link href={`/snippet/${snippet?.id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <form action={deleteSnippetAction}>
          <Button type="submit" variant={"destructive"}>
            Delete
          </Button>
        </form>
      </div>
      <h1 className="font-semibold">{snippet?.title}</h1>
      <pre className="bg-gray-200 p-3 rounded-md">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailsPage;

export const generateStaticParams = async () => {
  const snippets = await prisma.snippet.findMany();

  return snippets?.map((snippet) => {
    return { id: snippet.id?.toString() };
  });
};
