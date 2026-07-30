import React, { useState } from "react";
import EnquiryList from "./Enquiry/EnquiryList";
import {ToastContainer,toast} from "react-toastify";
import axios from "axios";
export default function Enquiry() {
  let [FormData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })
  const enquiryOnSubmit = (e) => {
    e.preventDefault();

   

    axios.post(
        "http://localhost:8020/api/website/enquiry/insert",
        FormData
    )
    .then((res) => {
      
      toast.success("Enquiry submitted Successfully");
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    })
    .catch((err) => {
        console.log(err.response?.data);
    });
};
//   const enquiryOnSubmit = (e) => {
//     e.preventDefault();

// //     let formData = {
// //   name: e.target.name.value,
// //   email: e.target.email.value,
// //   phone: e.target.phone.value,
// //   message: e.target.message.value
// // };

// // console.log(formData);

// axios.post(
//     "http://localhost:8020/api/website/enquiry/insert",
//     FormData
// )
// .then((res)=>{
//   console.log("reseting here");
//     setFormData({
//         name:"",
//     email:"",
//     phone:"",
//     message:""
//     })
// })
// .catch((err)=>{
//     console.log(err.response?.data);
// });
//     //alert("Backend will be connected later.");
//   };

  let getValue = (e)=>{
    let InputName = e.target.name;
    let InputValue = e.target.value;
    let oldData = {...FormData};
    console.log(InputName);
    oldData[InputName] = InputValue;
    setFormData(oldData);

  }

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <ToastContainer/>
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
                  placeholder="Enter Name" value={FormData.name}  name = "name" onChange={getValue} 
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter Email" value={FormData.email}  name = "email" onChange={getValue} 
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter Phone Number"  value={FormData.phone} name = "phone" onChange={getValue} 
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write Message..."  value={FormData.message} name = "message" onChange={getValue} 
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

