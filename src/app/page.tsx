import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <h1>Code Snippets</h1>
      <Link href={"/snippet/add"}>
        <Button>Add</Button>
      </Link>
    </div>
  );
}
