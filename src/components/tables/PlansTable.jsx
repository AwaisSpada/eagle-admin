import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Eye, Trash2, Edit } from "lucide-react";
import React, { useState } from "react";

const columnsHelper = createColumnHelper();

export const plansColumns = [
  columnsHelper.accessor("name", {
    cell: (info) => {
      const data = info.getValue();
      return <div className="font-semibold">{data}</div>;
    },
    header: "Name",
  }),
  columnsHelper.accessor("duration", {
    cell: (info) => info.getValue(),
    header: "Duration",
  }),
  columnsHelper.accessor("level", {
    cell: (info) => info.getValue(),
    header: "Level",
  }),
  columnsHelper.accessor("price", {
    cell: (info) => info.getValue(),
    header: "Price",
  }),
  columnsHelper.accessor("discount", {
    cell: (info) => info.getValue(),
    header: "Discount",
  }),
  columnsHelper.accessor("totalPrice", {
    cell: (info) => info.getValue(),
    header: "Total Price",
  }),

  columnsHelper.accessor("status", {
    cell: (info) => {
      const [checked, setChecked] = useState(info.getValue());
      return (
        <>
          <label className="inline-flex items-center ml-2 cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
              className="sr-only peer"
            />
            <div className="relative w-9 h-5 bg-gray-200 outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-background dark:peer-checked:bg-blue-600"></div>
          </label>
        </>
      );
    },
    header: "Status",
  }),

  columnsHelper.accessor("action", {
    enableSorting: false,
    cell: (info) => {
      const actions = info.getValue();
      return (
        <div className="flex space-x-2">
          {actions.edit && (
            <Edit className="cursor-pointer p-1 text-yellow-700 bg-yellow-200 rounded-md hover:bg-yellow-300" />
          )}
          {actions.view && (
            <Eye className="cursor-pointer p-1 text-blue-700 bg-blue-200 rounded-md hover:bg-blue-300" />
          )}
          {actions.delete && (
            <Trash2 className="cursor-pointer p-1 text-red-700 bg-red-200 rounded-md hover:bg-red-300" />
          )}
        </div>
      );
    },
    header: "Actions",
  }),
];
