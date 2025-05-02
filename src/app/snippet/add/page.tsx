import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CreateSnippet = () => {
  return (
    <form className="flex flex-col gap-y-4 w-1/4">
      <div className="flex flex-col gap-y-2">
        <Label>Title</Label>
        <Input placeholder="Title" id="title" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label>Code</Label>
        <Textarea placeholder="Code" id="code" />
      </div>
      <Button className="mt-4" type="submit">
        Save
      </Button>
    </form>
  );
};

export default CreateSnippet;
