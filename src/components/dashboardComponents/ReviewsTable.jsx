import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { FaStar } from "react-icons/fa";

const data = [
  {
    name: "Felix Harris",
    email: "felix@gmail.com",
    date: "8th January 2025",
    category: "Tvshow",
    rating: 5,
  },
  {
    name: "Stella Green",
    email: "stella@gmail.com",
    date: "15th March 2024",
    category: "Tvshow",
    rating: 4,
  },
  {
    name: "Deborah Thomas",
    email: "deborah@gmail.com",
    date: "29th December 2024",
    category: "Tvshow",
    rating: 5,
  },
  {
    name: "Jorge Perez",
    email: "jorge@gmail.com",
    date: "29th September 2024",
    category: "Tvshow",
    rating: 3,
  },
  {
    name: "Tristan Erickson",
    email: "tristan@gmail.com",
    date: "4th June 2024",
    category: "Tvshow",
    rating: 4,
  },
  {
    name: "Felix Harris",
    email: "felix@gmail.com",
    date: "20th April 2024",
    category: "Tvshow",
    rating: 5,
  },
];

const columns = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        <div>
          <p className="font-medium">{row.original.name}</p>
          <p className="text-sm text-gray-400">{row.original.email}</p>
        </div>
      </div>
    ),
  },
  { header: "Date", accessorKey: "date" },
  { header: "Category", accessorKey: "category" },
  {
    header: "Rating",
    accessorKey: "rating",
    cell: ({ row }) => (
      <div className="flex space-x-1 text-yellow-400">
        {Array.from({ length: row.original.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    ),
  },
];

const ReviewsTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-card-background text-black p-4 rounded-lg  shadow-lg w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <a href="#" className="text-background hover:underline">
          View All
        </a>
      </div>

      <div className="bg-card-background rounded-lg overflow-hidden">
        <PerfectScrollbar>
          <table className="w-full min-w-[600px] text-left">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-background text-white">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="py-2 px-3 whitespace-nowrap">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b border-gray-600">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-2 px-3 whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default ReviewsTable;
