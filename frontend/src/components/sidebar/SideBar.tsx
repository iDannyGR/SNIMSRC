import React from "react";

export default function SideBar(): React.JSX.Element {
  return (
    <aside className="h-[100vh] w-[250px] bg-blue-950 text-white text-center transition ease-in-out duration-300">
      <h1 className="text-2xl p-4">Bitacora interna</h1>
      <nav>
        <ul className="space-y-2"></ul>
      </nav>
    </aside>
  );
}
