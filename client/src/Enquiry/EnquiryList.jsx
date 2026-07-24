import React from 'react'

export default function EnquiryList() {
  return (
      <>
    
          {/* Right Side */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-xl shadow-lg p-6">

              {/* Header */}

              <div className="flex justify-between items-center mb-6 flex-wrap gap-3">

                <h2 className="text-2xl font-bold text-indigo-600">
                  Enquiry List
                </h2>

                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                />

              </div>

              {/* Table */}

              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead>

                    <tr className="bg-indigo-600 text-white">

                      <th className="py-3 px-4">#</th>

                      <th>Name</th>

                      <th>Email</th>

                      <th>Phone</th>

                      <th>Message</th>

                      <th>Action</th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr className="border-b hover:bg-gray-50">

                      <td className="py-4 px-4">1</td>

                      <td>Izaz</td>

                      <td>izaz@gmail.com</td>

                      <td>03321234567</td>

                      <td>Hello Sir</td>

                      <td>

                        <div className="flex gap-2 justify-center">

                          <button
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                          >
                            Edit
                          </button>

                          <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                    <tr className="border-b hover:bg-gray-50">

                      <td className="py-4 px-4">2</td>

                      <td>Ali</td>

                      <td>ali@gmail.com</td>

                      <td>03123456789</td>

                      <td>Need Information</td>

                      <td>

                        <div className="flex gap-2 justify-center">

                          <button
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                          >
                            Edit
                          </button>

                          <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                    <tr className="border-b hover:bg-gray-50">

                      <td className="py-4 px-4">3</td>

                      <td>Ahmed</td>

                      <td>ahmed@gmail.com</td>

                      <td>03001234567</td>

                      <td>Testing CRUD</td>

                      <td>

                        <div className="flex gap-2 justify-center">

                          <button
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                          >
                            Edit
                          </button>

                          <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>
    </>
  )
}
