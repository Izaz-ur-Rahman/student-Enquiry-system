
import React from "react";

export default function EnquiryList({ data }) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Enquiry List
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Manage and review all student enquiries
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search enquiries..."
                className="w-full border border-gray-200 rounded-lg pl-4 pr-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-sm text-left">

            {/* Table Head */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>

                <th className="px-6 py-4 font-semibold text-gray-600">
                  Student
                </th>

                <th className="px-6 py-4 font-semibold text-gray-600">
                  Email
                </th>

                <th className="px-6 py-4 font-semibold text-gray-600">
                  Phone
                </th>

                <th className="px-6 py-4 font-semibold text-gray-600">
                  Message
                </th>

                <th className="px-6 py-4 font-semibold text-gray-600 text-center">
                  Action
                </th>

              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">

              {data && data.length > 0 ? (

                data.map((item, index) => (

                  <tr
                    key={item._id || index}
                    className="hover:bg-indigo-50/40 transition duration-200"
                  >

                    {/* Name */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                          {item.name?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.name}
                          </p>

                          <p className="text-xs text-gray-400">
                            Enquiry #{index + 1}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4">
                      <span className="text-gray-600">
                        {item.email}
                      </span>
                    </td>

                    {/* Phone */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-gray-600">
                        {item.phone}
                      </span>
                    </td>

                    {/* Message */}
                    <td className="px-6 py-4 max-w-xs">
                      <p
                        className="text-gray-600 truncate"
                        title={item.message}
                      >
                        {item.message}
                      </p>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">

                        <button
                          className="px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition"
                        >
                          Edit
                        </button>

                        <button
                          className="px-3 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-12 text-center"
                  >
                    <div className="flex flex-col items-center">

                      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                        <span className="text-2xl">📭</span>
                      </div>

                      <h3 className="text-gray-700 font-semibold">
                        No enquiries found
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        There are currently no student enquiries.
                      </p>

                    </div>
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        {data && data.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">

            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-gray-700">
                {data.length}
              </span>{" "}
              {data.length === 1 ? "enquiry" : "enquiries"}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
