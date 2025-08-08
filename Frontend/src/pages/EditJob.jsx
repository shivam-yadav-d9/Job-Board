import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// This component provides a form to edit an existing job listing.
// It fetches the job data on load to pre-fill the form and then
// handles the update request.
export default function EditJob() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // UseEffect hook to fetch job details from the API when the component mounts
  // or when the 'id' parameter changes.
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        // Set the state with the fetched job data to pre-fill the form.
        setTitle(res.data.title);
        setCompany(res.data.company);
        setLocation(res.data.location);
      } catch (err) {
        // Display an error message if fetching the job fails.
        toast.error("Failed to load job");
      }
    };
    fetchJob();
  }, [id]); // Dependency array ensures this effect runs only when 'id' changes.

  // Function to handle the form submission for updating a job.
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation to ensure all fields are filled.
    if (!title || !company || !location) {
      toast.error("Please fill all fields");
      return;
    }
    
    try {
      // Send a PUT request to the server to update the job with the new data.
      await axios.put(`http://localhost:5000/api/jobs/${id}`, {
        title,
        company,
        location,
      });
      
      // On success, show a toast message and navigate back to the home page.
      toast.success("Job updated successfully");
      navigate("/");
    } catch (err) {
      // On failure, display an error message.
      toast.error("Failed to update job");
    }
  };

  return (
    // The main container with a light blue background and a flexbox layout
    // to center the form on the screen. It is fully responsive.
    <div className=" min-h-[70vh] flex items-center justify-center bg-blue-50 p-4 sm:p-6">
      
      {/* The card for the form with a white background, rounded corners,
          and a shadow for a modern, clean look. */}
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.01]">
        
        {/* The main heading for the form. */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Edit Job
        </h1>
        
        {/* A subtitle to provide context for the user. */}
        <p className="text-center text-gray-500 mb-8">
          Update the details for this job opening.
        </p>

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

          {/* Submit Button. It has a green background (common for update/save actions),
              a subtle hover scale animation, and a shadow. */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md 
                       hover:bg-green-600 transform hover:scale-[1.02] transition-all duration-200"
          >
            Update Job
          </button>
        </form>
      </div>
    </div>
  );
}
