import React from "react";

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table className="min-w-[90%] bg-white shadow-md rounded-lg overflow-hidden text-center">
      {children}
    </table>
  );
};

export default Table;
