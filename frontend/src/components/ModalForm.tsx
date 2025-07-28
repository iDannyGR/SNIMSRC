import React from "react";

export default function ModalForm() {
  return (
    <div className="w-[100vh] h-[100%] flex items-center justify-center border-2 border-red-800">
      <form action="">
        <input
          type="date"
          id="date"
          className="rounded-xl inline-flex p-3 border-2 bg-white "
        />
      </form>
    </div>
  );
}
