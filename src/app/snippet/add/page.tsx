import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const CreateSnippet = () => {
  const createSnippet = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");
  };
  return (
    <form action={createSnippet} className="flex flex-col gap-y-4 w-1/4">
      <div className="flex flex-col gap-y-2">
        <Label>Title</Label>
        <Input name="title" placeholder="Title" id="title" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label>Code</Label>
        <Textarea name="code" placeholder="Code" id="code" />
      </div>
      <Button className="mt-4" type="submit">
        Save
      </Button>
    </form>
  );
};

export default CreateSnippet;
