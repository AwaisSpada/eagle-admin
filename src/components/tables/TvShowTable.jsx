import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Eye, Trash2, Edit } from "lucide-react";
import React, { useState } from "react";

const columnsHelper = createColumnHelper();

export const tvShowColumns = [
  columnsHelper.accessor("tvShow", {
    cell: (info) => {
      const tvShow = info.getValue();
      return (
        <div className="flex items-center space-x-2 min-w-max">
          {tvShow.thumbnail && (
            <img
              src={tvShow.thumbnail}
              alt={tvShow.title}
              width={70}
              height={100}
              className="rounded-md object-cover w-[5rem] h-[5rem]"
            />
          )}
          <div className="flex flex-col justify-between space-y-2">
            <h4 className="font-semibold text-gray-800">{tvShow.title}</h4>
            <div className="flex  gap-1 text-sm text-gray-600">
              {tvShow.genre?.map((item) => (
                <span key={item} className="">
                  {item},
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500">{tvShow.releaseDate}</p>
          </div>
        </div>
      );
    },
    header: "Tv Show",
  }),

  columnsHelper.accessor("iLike", {
    cell: (info) => info.getValue(),
    header: "Likes",
  }),
  columnsHelper.accessor("look", {
    cell: (info) => info.getValue(),
    header: "Watch",
  }),
  columnsHelper.accessor("access", {
    cell: (info) => {
      const access = info.getValue();
      return (
        <span
          className={`${
            access == "Paid"
              ? "bg-blue-200 text-background"
              : "bg-green-200 text-green-900"
          }  text-sm  p-2 rounded-sm `}
        >
          {access}
        </span>
      );
    },
    header: "Access",
  }),
  columnsHelper.accessor("plan", {
    cell: (info) => (
      <p className="min-w-max text-sm"> {info.getValue() ?? "-"}</p>
    ),
    header: "Plan",
  }),
  columnsHelper.accessor("language", {
    cell: (info) => info.getValue(),
    header: "Language",
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
