
import React from "react";
import { Pencil, Trash2, Mail, Phone } from "lucide-react";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";
export default function EnquiryList({ data ,getAllEnquiry}) {
  let deleteEnq = (delID)=>{
    axios.delete(`http://localhost:8020/api/website/enquiry/delete/${delID}`)
  .then((res)=>{
    toast.success("Enquiry Deleted successfully");
    getAllEnquiry();
  })
  }
  return (
    <div className="lg:col-span-2 min-w-0">
      <ToastContainer/>
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

        {/* Header */}
        <div className="px-5 py-5 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Enquiry List
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Manage and review student enquiries
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-60">
              <input
                type="text"
                placeholder="Search enquiries..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden">

          <table className="w-full table-fixed text-sm">

            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>

                <th className="w-[20%] px-4 py-4 text-left font-semibold text-gray-600">
                  Student
                </th>

                <th className="w-[22%] px-4 py-4 text-left font-semibold text-gray-600">
                  Email
                </th>

                <th className="w-[18%] px-4 py-4 text-left font-semibold text-gray-600">
                  Phone
                </th>

                <th className="w-[25%] px-4 py-4 text-left font-semibold text-gray-600">
                  Message
                </th>

                <th className="w-[15%] px-4 py-4 text-center font-semibold text-gray-600">
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

                    {/* Student */}
                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2 min-w-0">

                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                          {item.name?.charAt(0).toUpperCase()}
                        </div>

                        <div className="min-w-0">
                          <p
                            className="font-semibold text-gray-800 truncate"
                            title={item.name}
                          >
                            {item.name}
                          </p>

                        
                        </div>

                      </div>

                    </td>

                    {/* Email */}
                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2 min-w-0">

                       

                        <span
                          className="text-gray-600 truncate"
                          title={item.email}
                        >
                          {item.email}
                        </span>

                      </div>

                    </td>

                    {/* Phone */}
                    <td className="px-4 py-4">

                      <div className="flex items-center gap-2">

                      

                        <span
                          className="text-gray-600 truncate"
                          title={item.phone}
                        >
                          {item.phone}
                        </span>

                      </div>

                    </td>

                    {/* Message */}
                    <td className="px-4 py-4">

                      <p
                        className="text-gray-600 truncate"
                        title={item.message}
                      >
                        {item.message}
                      </p>

                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4">

                      <div className="flex items-center justify-center gap-2">

                        {/* Edit */}
                        <button
                          title="Edit enquiry" 
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-200"
                        >
                          <Pencil size={16} />
                        </button>

                        {/* Delete */}
                        <button
                          title="Delete enquiry" onClick={()=>deleteEnq(item._id)}
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition duration-200"
                        >
                          <Trash2 size={16} />
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
                        <span className="text-2xl">
                          📭
                        </span>
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

          <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">

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

