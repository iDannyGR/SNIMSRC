"use client";
import { TableRowProps } from "@/models/table.type";
import React from "react";
import TableCell from "./TableCell";
import GenericButton from "../Button";
import { CheckIcon, PencilIcon } from "@heroicons/react/16/solid";

const TableRow = ({ row }: TableRowProps): React.ReactElement => {
  const test = () => console.log("hola mundo");
  return (
    <tbody>
      <tr className="hover:bg-white">
        {Object.values(row).map((value, idx) => (
          <TableCell key={idx} value={value} />
        ))}
        <td className="h-22 border-b-2">
          <GenericButton
            onClick={test}
            label="editar"
            type="button"
            className="text-blue-950 text-sm"
            icon={<PencilIcon className="h-6 me-2" />}
          />
          <GenericButton
            onClick={test}
            label="finalizar"
            type="button"
            className="text-red-700 text-sm"
            icon={<CheckIcon className="h-6 me-2" />}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
