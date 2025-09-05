"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function Breadcrumb(): React.ReactElement {
  const route = usePathname();
  const customRoute = route === "/" ? "Inicio" : route.replace("/", "").replace("-", " ").toUpperCase();
  return (
    <div className="pt-5 pl-6">
      <h3 className="inline-flex font-bold text-2xl text-blue-900 space-x-1">
        <Link href={route} className="hover:text-neutral-600">
          {customRoute}
        </Link>
      </h3>
    </div>
  );
}
