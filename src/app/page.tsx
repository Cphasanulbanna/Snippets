import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  return (
    <div>
      <div className="flex justify-between mb-3 items-center">
        <h1 className="font-bold text-3xl">Code Snippets</h1>
        <Link href={"/snippet/add"}>
          <Button>Add</Button>
        </Link>
      </div>

      <div className="flex flex-col gap-y-2">
        {snippets?.map((obj) => (
          <div
            key={obj?.id}
            className="flex justify-between  items-center bg-gray-200 p-2 rounded-md"
          >
            <h1>{obj?.title}</h1>
            <Link href={`/snippet/${obj?.id}`}>
              <Button variant={"link"}>View</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
