import { TableCellProps } from "@/models/table.type";
import React from "react";

const TableCell = ({ value }: TableCellProps) => {
  return <td className="border-b-2">{value}</td>;
};

export default TableCell;
