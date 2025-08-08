import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// This component provides a form for adding a new job, styled with
// a modern, responsive user interface using Tailwind CSS.
export default function AddJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation. If any field is empty, show a toast error.
    if (!title || !company || !location) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      // Send a POST request to the server to add a new job.
      await axios.post("http://localhost:5000/api/jobs", {
        title,
        company,
        location,
      });
      
      // On success, show a success toast message and navigate to the home page.
      toast.success("Job added successfully");
      navigate("/");
    } catch (err) {
      // On failure, show an error toast message.
      toast.error("Failed to add job");
    }
  };

  return (
    // The main container. It uses a light blue background and flexbox to
    // center the form both horizontally and vertically.
    <div className=" min-h-[70vh] flex items-center justify-center bg-blue-50 p-4 sm:p-6">
      
      {/* The card containing the form. It's responsive, with a max-width,
          a prominent shadow, and large rounded corners for a modern feel. */}
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.01]">
        
        {/* The main heading for the form. */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Add New Job
        </h1>
        
        {/* A descriptive subtitle. */}
        <p className="text-center text-gray-500 mb-8">
          Fill in the details below to post a new job opening.
        </p>

        {/* The form itself. */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Job Title Input Group */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              placeholder="e.g. Frontend Developer"
            />
          </div>

          {/* Company Input Group */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              placeholder="e.g. Tech Solutions Ltd."
            />
          </div>

          {/* Location Input Group */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              placeholder="e.g. New Delhi, India"
            />
          </div>

          {/* Submit Button. The button has a blue background and a subtle
              scale and background change animation on hover. */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md 
                       hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
}
