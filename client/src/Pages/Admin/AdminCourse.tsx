import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, {
  modules,
  formats,
} from "../../Components/Admin/EditorToolbar";
import { postForm } from '../../api/req';
import Sidebar from '../../Components/Admin/Sidebar';

const CourseForm = () => {
  const [formData, setFormData] = useState({
    courseType: '',
    heading: '',
    description: '',
    content1: '',
    content2: '',
    content3: '',
  });

  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuillChange = (content, fieldName) => {
    setFormData({ ...formData, [fieldName]: content });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]); // Capture the selected image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('courseType', formData.courseType);
    data.append('heading', formData.heading);
    data.append('description', formData.description);
    data.append('content1', formData.content1);
    data.append('content2', formData.content2);
    data.append('content3', formData.content3);
    if (imageFile) {
      data.append('cardImage', imageFile); // Append image to FormData
    }

    try {
        const response = await postForm('/add-course', data);
      alert(response.data.message);
    //   alert('Course submitted successfully!');
    } catch (error) {
      console.error('There was an error submitting the course!', error);
    }
  };

  return (
    <>
    <div className=' min-h-screen bg-gradient-to-r from-blue-300 to-green-300  dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className=" min-w-[20%] h-full">
                    <div className="overflow-x-auto  overflow-scroll h-[95vh]  bg-gradient-to-r from-blue-300 to-green-300 p-2 rounded-xl no-scrollbar ">
                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                        <h1 className='text-center uppercase font-bold text-2xl '>Add a Course</h1>
                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Course Type</label>
                        <select 
                          name="courseType" 
                          value={formData.courseType} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Course Type</option>
                          <option value="YogaCourse">Yoga Course</option>
                          <option value="MeditationCourse">Meditation Course</option>
                        </select>
                        </div>

                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Heading  <span className='text-red-600'>(Maximum of 5 words)</span></label>
                        <input 
                          type="text" 
                          name="heading" 
                          value={formData.heading} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Description <span className='text-red-600'>(Maximum of 10 words)</span> </label>
                        <input 
                          type="text" 
                          name="description" 
                          value={formData.description} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Image</label>
                        <input 
                          type="file" 
                          name="cardImage" 
                          onChange={handleImageChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>

                        <div className="mb-6">
                        <EditorToolbar toolbarId={"t1"} />
                        <label className="block text-gray-700 font-semibold mb-2">Content 1</label>
                        <ReactQuill 
                          theme="snow"
                          value={formData.content1} 
                          onChange={(content) => handleQuillChange(content, 'content1')}
                          placeholder={"Write something ..."} 
                          modules={modules("t1")}
                          formats={formats}
                          className="h-40 mb-4 text-gray-700"
                        />
                        </div>

                        <div className="mb-6">
                        <EditorToolbar toolbarId={"t2"} />
                        <label className="block text-gray-700 font-semibold mb-2">Content 2</label>
                        <ReactQuill 
                          theme="snow"
                          value={formData.content2} 
                          onChange={(content) => handleQuillChange(content, 'content2')} 
                          placeholder={"Write something ..."} 
                          modules={modules("t2")}
                          formats={formats}
                          className="h-40 mb-4 text-gray-700"
                        />
                        </div>

                        <div className="mb-6">
                        <EditorToolbar toolbarId={"t3"} />
                        <label className="block text-gray-700 font-semibold mb-2">Content 3</label>
                        <ReactQuill 
                          theme="snow"
                          value={formData.content3} 
                          onChange={(content) => handleQuillChange(content, 'content3')}
                          placeholder={"Write something ..."} 
                          modules={modules("t3")}
                          formats={formats}
                          className="h-40 mb-4 text-gray-700"
                        />
                        </div>

                        <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-200"
                        >
                        Submit Course
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default CourseForm;


