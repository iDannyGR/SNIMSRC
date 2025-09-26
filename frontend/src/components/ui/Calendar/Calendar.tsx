"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarDropdownProps } from "./calendar.type";
import { ChevronDownIcon, CalendarIcon } from "@heroicons/react/16/solid";

export default function CalendarDropdown({date, onChange}:CalendarDropdownProps): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-40">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-3 py-2 border rounded-md shadow-sm cursor-pointer"
      >
        <CalendarIcon className="w-4 h-4" />
        <span className="flex text-sm tracking-wider">
          {date ? format(date, "dd/MM/yy", { locale: es }) : "dd/mm/yy"}
        </span>
        <span className="ml-2">
          <ChevronDownIcon className="text-black h-4 w-4" />
        </span>
      </div>
      {open && (
        <div className="absolute z-10 mt-2 bg-white border rounded-md shadow-lg">
          <DayPicker
            mode="single"
            locale={es}
            selected={date}
            onSelect={(d) => {
              onChange(d || undefined);
              setOpen(false); 
            }}
            className="text-sm"
          />
        </div>
      )}
    </div>
  );
}
