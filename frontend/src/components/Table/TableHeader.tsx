import React from "react";

const TableHeader = ({ columns }: { columns: string[] }): React.ReactElement => {
  return (
    <thead className="bg-blue-950 text-white">
      <tr className="h-10">
        {columns.map((col) => (
          <th key={col} className="h-16">
            {col}
          </th>
        ))}
        <th className="p-2">Acciones</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
