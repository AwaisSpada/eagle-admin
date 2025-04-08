import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Eye, Trash2, Edit } from "lucide-react";
import React, { useState } from "react";

const columnsHelper = createColumnHelper();

export const directorsColumn = [
  columnsHelper.accessor("director", {
    cell: (info) => {
      const actor = info.getValue();
      return (
        <div className="flex items-center space-x-2 min-w-max">
          {actor.thumbnail && (
            <img
              src={actor.thumbnail}
              alt={actor.title}
              width={70}
              height={100}
              className="rounded-md object-cover w-[5rem] h-[5rem]"
            />
          )}
          <div className="flex flex-col justify-between space-y-2">
            <h4 className="font-semibold text-gray-800">{actor.title}</h4>
          </div>
        </div>
      );
    },
    header: "Director",
  }),

  columnsHelper.accessor("dob", {
    cell: (info) => (
      <p className="min-w-max text-sm"> {info.getValue() ?? "-"}</p>
    ),

    header: "Date Of Birth",
  }),
  columnsHelper.accessor("birthPlace", {
    cell: (info) => (
      <p className="min-w-max text-sm"> {info.getValue() ?? "-"}</p>
    ),

    header: "Birth Place",
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
