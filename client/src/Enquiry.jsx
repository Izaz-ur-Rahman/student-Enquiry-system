import React from "react";

export default function Enquiry() {
  const enquiryOnSubmit = (e) => {
    e.preventDefault();
    alert("Backend will be connected later.");
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-700">
            Student Enquiry Management
          </h1>
          <p className="text-gray-500 mt-2">
            Manage all student enquiries in one place.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
            <h2 className="text-gray-500 text-sm">Total Enquiries</h2>
            <h1 className="text-4xl font-bold mt-2">25</h1>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
            <h2 className="text-gray-500 text-sm">Today's Enquiries</h2>
            <h1 className="text-4xl font-bold mt-2">6</h1>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-600">
            <h2 className="text-gray-500 text-sm">Pending Response</h2>
            <h1 className="text-4xl font-bold mt-2">12</h1>
          </div>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit">

            <h2 className="text-2xl font-bold text-indigo-600 mb-6">
              Add New Enquiry
            </h2>

            <form onSubmit={enquiryOnSubmit}>

              <div className="mb-4">
                <label className="block mb-2 font-medium">
                  Student Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write Message..."
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>

              <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Save Enquiry
              </button>

            </form>


          </div>
<EnquiryList/>
        </div>

      </div>
    </div>
  );
}

function EnquiryList (){
  return(
    
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
  );
}