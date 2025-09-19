"use client";

import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full border border-gray-200">
        {/* Table Head */}
        <thead className="bg-[#5e0304] text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-medium"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200 text-sm">
          {data && data.length > 0 ? (
            data.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
