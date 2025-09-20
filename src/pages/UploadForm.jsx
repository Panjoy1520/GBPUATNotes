import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import courses from "../assets/courses";
import service from "../appwrite/services";
import Popup from "../components/Popup";
import branches from "../assets/branches";
import colleges from "../assets/colleges";

function UploadForm() {
  const [showPopup, setShowPopup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedCollege = watch("college");

  const onSubmit = async (data) => {
    try {
      console.log(data);
      
      const uploadedfile = await service.uploadFile(data.file[0]);
      if (uploadedfile) {
        const fileId = uploadedfile.$id;
        data.image = fileId;
        const dbDoc = await service.createDocument({ ...data });
        console.log("successful");
        console.log(data);
        

        setShowPopup(true);
      } else {
        console.log("Some error occoured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="bg-neutral-800 shadow-lg rounded-xl p-8 w-full max-w-lg">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Upload Notes/PYQs
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* College Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              College
            </label>
            <select
              {...register("college", { required: "College is required" })}
              className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="" disabled selected hidden>
                Select College
              </option>
              {/* mapping on colleges array */}
              {colleges.map((college, index) => (
                <option key={index} value={college.college_value}>
                  {college.college_name}
                </option>
              ))}
            </select>
            {errors.college && (
              <p className="text-red-400 text-sm">{errors.college.message}</p>
            )}
          </div>

          {/* Year Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Year
            </label>
            <select
              {...register("year", { required: "Year is required" })}
              className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="" disabled selected hidden>
                Select Year
              </option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
            {errors.year && (
              <p className="text-red-400 text-sm">{errors.year.message}</p>
            )}
          </div>

          {/* Semester Dropdown (not needed as of now )*/}
          {/* <div>
            <label className="block text-sm font-medium text-gray-300">
              Semester
            </label>
            <select
              {...register("semester", { required: "Semester is required" })}
              className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Select semester"
            >
              <option value="" disabled selected hidden>
                Select Semester
              </option>
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
              <option value="5">5th Semester</option>
              <option value="6">6th Semester</option>
              <option value="7">7th Semester</option>
              <option value="8">8th Semester</option>
            </select>
            {errors.semester && (
              <p className="text-red-400 text-sm">{errors.semester.message}</p>
            )}
          </div> */}

          {/* Branches Dropdown */}

          {selectedCollege === "COT" && (
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Branch
              </label>
              <select
                {...register("branch", { required: "Branch is required" })}
                className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="" disabled selected hidden>
                  Select Branch
                </option>
                {branches.map((branch, index) => (
                  <option key={index} value={branch.branch_value}>
                    {branch.branch_name}
                  </option>
                ))}
              </select>
              {errors.course && (
                <p className="text-red-400 text-sm">{errors.course.message}</p>
              )}
            </div>
          )}

          {/* all Courses section */}

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Courses
            </label>
            <select
              {...register("course", { required: "Course is required" })}
              className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="" disabled selected hidden>
                Select Course for which you want to upload
              </option>
              {courses.map((course, index) => (
                <option key={index} value={course.course_code}>
                  {course.course_name}
                  {/* TODO: change this parameter when taking new data from courses */}
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="text-red-400 text-sm">{errors.course.message}</p>
            )}
          </div>

          {/* file description section  */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Description of file
            </label>
            <input
              {...register("description", { required: "description is required" ,
                maxLength:{
                  value:30,
                  message:"Description cannot exceed 30 letters"
                },
              })}
              className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              type="text"
              id="description"
            />
            
            {errors.description && (
              <p className="text-red-400 text-sm">{errors.description.message}</p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Upload File
            </label>
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.pdf"
              {...register("file", {
                required: "File is required",
                //    TODO: add max file size to be 5gb per upload
              })}
              className="mt-1 block w-full text-gray-300 border border-neutral-600 bg-neutral-700 rounded-md px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.file && (
              <p className="text-red-400 text-sm">{errors.file.message}</p>
            )}
          </div>

          {/* Submit Button */}
          {/* TODO: might want to relaod the page afte form submission as it saves state and causes issue in branch  */}
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
            >
              Upload
            </button>
          </div>
        </form>
      </div>

      {/* popup component */}
      <Popup
        message="✅ Upload Successful!"
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
}

export default UploadForm;
