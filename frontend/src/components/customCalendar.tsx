"use client";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface CalendarPickerProps {
  label?: string;
  value?: Date;
  onChange?: (date: Date | null) => void;
}

export default function CalendarPicker({ label, value, onChange }: CalendarPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [internalDate, setInternalDate] = React.useState<Date | null>(null);

  // Si no se pasa value/onChange, usar estado interno
  const date = value ?? internalDate;
  const handleChange = (date: Date | null) => {
    if (onChange) {
      onChange(date);
    } else {
      setInternalDate(date);
    }
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" id="date" className="w-48 justify-between font-normal">
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date ?? undefined}
            captionLayout="dropdown"
            onSelect={(d) => handleChange(d ?? null)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
