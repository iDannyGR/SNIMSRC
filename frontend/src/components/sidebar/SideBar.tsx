import React from "react";

export default function SideBar(): React.JSX.Element {
  return (
    <aside className="h-[100vh] w-[250px] bg-blue-950 text-white text-center transition ease-in-out duration-300">
      <h1 className="text-2xl font-bold p-4">Bitacora interna</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
