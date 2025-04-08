import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Eye, Trash2, Edit } from "lucide-react";
import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";
import { Lock } from "lucide-react";

const columnsHelper = createColumnHelper();

export const soonToExpire = [
  columnsHelper.accessor("user", {
    id: "user", // Unique ID to reference this column in filtering
    cell: (info) => {
      const user = info.getValue();
      return (
        <div className="flex items-center space-x-2 min-w-max">
          <CircleUserRound size={40} className="text-background" />
          <div className="min-w-max">
            <h4 className="font-semibold text-gray-800">{user.title}</h4>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      );
    },
    header: "User",
  }),

  columnsHelper.accessor("contact", {
    cell: (info) => {
      const data = info.getValue();
      return <div className="min-w-max">{data}</div>;
    },

    header: "Contact Number",
  }),
  columnsHelper.accessor("gender", {
    cell: (info) => info.getValue(),
    header: "Gender",
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
  columnsHelper.accessor("expireDate", {
    cell: (info) => info.getValue(),
    header: "Expiration Date",
  }),
];
