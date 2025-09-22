import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" }
];
interface personType {
  id: number;
  name: string | null;
}

export default function Dropdown() {
  const [selected, setSelected] = useState<personType | null>(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name?.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox value={selected} onChange={(value: personType | null) => setSelected(value)}>
      <div className="flex items-center justify-between">
        <ComboboxInput
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          displayValue={(person: personType | null) => person?.name || ""}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="relative right-5 cursor-pointer">
          <ChevronDownIcon className=" size-3 fill-white/60 group-data-hover:fill-white top-1" />
        </ComboboxButton>
      </div>
      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--input-width)] rounded-md border border-gray-200 bg-white py-1 shadow-lg z-50",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {filteredPeople.length === 0 ? (
          <div className="cursor-default select-none px-4 py-2 text-gray-500">No encontrado</div>
        ) : (
          filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="cursor-default select-none px-4 py-2 data-[focus]:bg-blue-100 data-[focus]:text-blue-900"
            >
              {person.name}
            </ComboboxOption>
          ))
        )}
      </ComboboxOptions>
    </Combobox>
  );
}
