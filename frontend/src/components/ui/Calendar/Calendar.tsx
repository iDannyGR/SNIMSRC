"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronDownIcon, CalendarIcon } from "@heroicons/react/16/solid";

export default function CalendarDropdown() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false); // cerrar al seleccionar
  };

  return (
    <div className="w-40">
      {/* Caja que simula un dropdown */}
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

      {/* Contenido del dropdown */}
      {open && (
        <div className="absolute z-10 mt-2 bg-white border rounded-md shadow-lg">
          <DayPicker
            mode="single"
            locale={es}
            selected={date}
            onSelect={handleSelect}
            className="text-sm"
          />
        </div>
      )}
    </div>
  );
}
