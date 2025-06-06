import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Eye, Trash2, Edit } from "lucide-react";
import { div } from "motion/react-client";
import React, { useState } from "react";

//this is the sample column apply these stylings to all tables

const columnsHelper = createColumnHelper();

export const seasonsTable = [
  columnsHelper.accessor("season", {
    enableSorting: false,
    cell: (info) => {
      const tvShow = info.getValue();
      return (
        <div className="flex items-center space-x-2 min-w-max">
          {tvShow.thumbnail && (
            <img
              src="https://media.iqonic.design/streamit-laravel/s2_the_cutthroat_mission_thumb.png"
              alt={tvShow.title}
              width={100}
              height={200}
              className="rounded-md object-cover w-[5rem] h-[5rem]"
            />
          )}
          <div className="flex flex-col justify-between">
            <h4 className="font-semibold text-gray-800">{tvShow.title}</h4>
          </div>
        </div>
      );
    },
    header: "Season",
  }),

  columnsHelper.accessor("tvShow", {
    cell: (info) => {
      const title = info.getValue();
      return <div className="min-w-max">{title}</div>;
    },
    header: "Tv Show",
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

  columnsHelper.accessor("status", {
    cell: (info) => {
      const [checked, setChecked] = useState(info.getValue());
      return (
        <>
          <label className="inline-flex items-center mb-5 cursor-pointer">
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
