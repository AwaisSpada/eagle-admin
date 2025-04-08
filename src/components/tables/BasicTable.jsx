import React, { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import PerfectScrollBar from "react-perfect-scrollbar";
import Loader from "../common/Loader";

const Table = ({ data, columns }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setData] = useState([...data]);
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <div className="flex justify-between items-center py-10">
        <div>
          <div className="2xl:flex items-center space-x-4">
            <form className="space-x-4 space-y-4 2xl:space-y-0 ">
              <select className="w-[7rem] px-4 py-2 bg-gray-300 focus:border focus:border-background">
                <option value="action">Action</option>
                <option value="status">status</option>
                <option value="delete">delete</option>
                <option value="Restore">Restore</option>
                <option value="permanentlyDelete">Permanently Delete</option>
              </select>
              <button className="bg-background text-white px-4 py-2 rounded-md">
                Apply
              </button>
            </form>
            <button className="bg-gray-400 h-10 text-white px-4 py-2 rounded-md">
              Export
            </button>
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-row justify-center items-end gap-4">
          <div className="flex gap-4">
            <div>
              <select className="w-[7rem] px-4 py-2 bg-gray-300 focus:border focus:border-background">
                <option value="all">All</option>
                <option value="inActive">Inactive</option>
                <option value="active">Active</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-300 px-4 py-2"
                placeholder="search..."
              />
            </div>
            <div>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
                Advance Filter
              </button>
            </div>
          </div>
          <div>
            <button className="bg-background text-white px-4 py-2 rounded-md">
              New
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-white relative ">
        <PerfectScrollBar>
          <table className="overflow-x-auto w-full  border-collapse shadow-lg rounded-lg ">
            {/* Table Head */}
            <thead className="bg-gray-100  text-gray-700 uppercase text-sm font-semibold">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="p-3 text-left">
                      <div
                        className={`flex items-center justify-between ${
                          header.column.getCanSort() ? "cursor-pointer" : ""
                        }`}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanSort() && (
                          <ArrowUpDown size={14} className="ml-2" />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            {/* Table Body */}
            {isLoading ? (
              <div className="">
                {" "}
                <Loader />{" "}
              </div>
            ) : (
              <tbody className="divide-y divide-gray-200 ">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition ">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="p-3">
                        {cell.getValue() !== null
                          ? flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          : "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </PerfectScrollBar>
      </div>
    </div>
  );
};

export default Table;
