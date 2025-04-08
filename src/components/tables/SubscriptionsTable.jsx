import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Eye, Trash2, Edit } from "lucide-react";
import React, { useState } from "react";
import { CircleUserRound } from "lucide-react";

const columnsHelper = createColumnHelper();

export const subscriptionColumn = [
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

  columnsHelper.accessor("plan", {
    cell: (info) => info.getValue(),
    header: "Plan",
  }),
  columnsHelper.accessor("dateSubscribed", {
    cell: (info) => info.getValue(),
    header: "Date Subscribed",
  }),
  columnsHelper.accessor("expireDate", {
    cell: (info) => info.getValue(),

    header: "Expiration Date",
  }),
  columnsHelper.accessor("price", {
    cell: (info) => info.getValue(),
    header: "Price",
  }),

  columnsHelper.accessor("status", {
    cell: (info) => {
      const status = info.getValue();
      return (
        <>
          <span
            className={`${
              status === "Active"
                ? "bg-green-300 text-green-900"
                : "bg-blue-300 text-background"
            } text-xs p-1 rounded-md font-semibold`}
          >
            {status}
          </span>
        </>
      );
    },
    header: "Status",
  }),
];
