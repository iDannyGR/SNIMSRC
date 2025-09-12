import { Textarea } from "@headlessui/react";
import React from "react";

export default function NoteForm(): React.JSX.Element {
  return (
    <div>
      <form action="">
        <Textarea name="objetivo" className="border"></Textarea>
      </form>
    </div>
  );
}
