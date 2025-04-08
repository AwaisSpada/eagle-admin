import React, { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  Search,
  Filter,
  Plus,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PerfectScrollBar from "react-perfect-scrollbar";
import Loader from "../common/Loader";
import SkeletonTable from "../ui/SkeletonLoader";
import { useNavigate } from "react-router-dom";

const customGlobalFilter = (row, columnId, filterValue) => {
  const rowData = row.original;
  const searchValue = filterValue.toLowerCase();

  // Recursive function to extract all string values from objects
  const extractStringValues = (obj) => {
    if (typeof obj === "string" || typeof obj === "number") {
      return obj.toString().toLowerCase();
    }
    if (Array.isArray(obj)) {
      return obj.map(extractStringValues).join(" ");
    }
    if (typeof obj === "object" && obj !== null) {
      return Object.values(obj).map(extractStringValues).join(" ");
    }
    return "";
  };

  // Convert entire row data to searchable text
  const searchableText = extractStringValues(rowData);

  return searchableText.includes(searchValue);
};

const Table = ({
  data,
  columns,
  selectable = true,
  onRowSelect,
  onBulkAction,
  onExport,
  onNewItem,
  onAdvancedFilter,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination: {
        pageIndex: currentPage,
        pageSize,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: customGlobalFilter,
  });

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newSelectedRows = {};
    if (newSelectAll) {
      table.getRowModel().rows.forEach((row) => {
        newSelectedRows[row.id] = true;
      });
    }
    setSelectedRows(newSelectedRows);
    onRowSelect?.(Object.keys(newSelectedRows));
  };

  const handleRowSelect = (rowId) => {
    setSelectedRows((prev) => {
      const newSelectedRows = { ...prev, [rowId]: !prev[rowId] };
      setSelectAll(
        Object.keys(newSelectedRows).length === table.getRowModel().rows.length,
      );
      onRowSelect?.(
        Object.keys(newSelectedRows).filter((id) => newSelectedRows[id]),
      );
      return newSelectedRows;
    });
  };

  const handleBulkAction = (action) => {
    const selectedIds = Object.keys(selectedRows).filter(
      (id) => selectedRows[id],
    );
    onBulkAction?.(action, selectedIds);
  };

  return (
    <div className="space-y-4">
      {/* Table Controls */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          {/* Left Controls */}
          <div className="flex flex-wrap gap-3">
            <select
              className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => handleBulkAction(e.target.value)}
            >
              <option value="">Bulk Actions</option>
              <option value="delete">Delete Selected</option>
              <option value="archive">Archive Selected</option>
              <option value="restore">Restore Selected</option>
            </select>

            <button
              onClick={() => onExport?.()}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Export
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search in table..."
              />
            </div>

            <button
              onClick={() => onAdvancedFilter?.()}
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter size={16} className="mr-2" />
              Filters
            </button>

            <button
              onClick={() => onNewItem?.(navigate("create"))}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} className="mr-2" />
              New Item
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <PerfectScrollBar>
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="bg-gray-50 border-b border-gray-200"
                >
                  {selectable && (
                    <th className="w-12 px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </th>
                  )}
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {header.column.getCanSort() ? (
                        <button
                          className="flex items-center gap-2 hover:text-gray-900"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          <ArrowUpDown size={14} />
                        </button>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className="px-4 py-8 text-center"
                  >
                    <SkeletonTable />
                  </td>
                </tr>
              ) : table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No results found
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {selectable && (
                      <td className="w-12 px-4 py-3">
                        <input
                          type="checkbox"
                          checked={!!selectedRows[row.id]}
                          onChange={() => handleRowSelect(row.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                    )}
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4  py-3 text-sm text-gray-900"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </PerfectScrollBar>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                {[5, 20, 30, 40, 50].map((size) => (
                  <option key={size} value={size}>
                    Show {size}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-600">
                Page {currentPage + 1} of {table.getPageCount()}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                disabled={!table.getCanPreviousPage()}
                className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={!table.getCanNextPage()}
                className="p-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
