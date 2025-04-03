import React, { useState } from 'react';
import axios from 'axios';
import { postForm } from "../../api/req"
import Sidebar from '../../Components/Admin/Sidebar';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const BlogForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content1Heading: '',
    content1Description: '',
    content2Heading: '',
    content2Description: '',
    content3Heading: '',
    content3Description: '',
    content4Heading: '',
    content4Description: '',
  });

  const [images, setImages] = useState({
    cardImg: null,
    content1Image: null,
    content2Image: null,
    content3Image: null,
    content4Image: null,
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e:any) => {
    const { name, files } = e.target;
    setImages({ ...images, [name]: files[0] });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const blogData = new FormData();
    blogData.append('title', formData.title);
    blogData.append('summary', formData.summary);

    blogData.append('cardImg', images.cardImg);
    blogData.append('content1Heading', formData.content1Heading);
    blogData.append('content1Image', images.content1Image);
    blogData.append('content1Description', formData.content1Description);

    blogData.append('content2Heading', formData.content2Heading);
    blogData.append('content2Image', images.content2Image);
    blogData.append('content2Description', formData.content2Description);

    blogData.append('content3Heading', formData.content3Heading);
    blogData.append('content3Image', images.content3Image);
    blogData.append('content3Description', formData.content3Description);

    blogData.append('content4Heading', formData.content4Heading);
    blogData.append('content4Image', images?.content4Image);
    blogData.append('content4Description', formData.content4Description);

    try {
      console.log(blogData)
      const response = await postForm('/add-blog', blogData);
      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/admin/bloglist');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
      toast.error('An error occurred while Adding blog.');

    }
  };

  return (
    <>
          <div className=' min-h-screen bg-gradient-to-r from-blue-300 to-green-300  dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className=" min-w-[20%] h-full">
                    <div className="overflow-x-auto  overflow-scroll h-[95vh]  bg-gradient-to-r from-blue-300 to-green-300 p-2 rounded-xl no-scrollbar ">
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-lg">
  <h1 className="text-2xl mb-4 text-center font-bold text-gray-800">Add New Blog</h1>

  {/* Blog Text Inputs */}
  <div className="border border-gray-300 p-4 rounded-lg">
    <div className="mb-4">
      <label className="block mb-1 text-gray-700 font-medium">Title</label>
      <input 
        type="text" 
        name="title" 
        onChange={handleChange} 
        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required 
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-gray-700 font-medium">Summary</label>
      <textarea 
        name="summary" 
        onChange={handleChange} 
        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
        required 
      />
    </div>

    {/* Blog Image Uploads */}
    <div className="mb-4">
      <label className="block mb-1 text-gray-700 font-medium">Card Image</label>
      <input 
        type="file" 
        name="cardImg" 
        onChange={handleFileChange} 
        className="w-full border border-gray-300 p-2 rounded-lg cursor-pointer focus:outline-none"
        required 
      />
    </div>

    {[1, 2, 3, 4].map((index) => (
      <div key={index} className="mb-4 border border-gray-300 p-4 rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Content {index}</h3>
        <div className="mb-3">
          <label className="block mb-1 text-gray-700 font-medium">Heading</label>
          <input 
            type="text" 
            name={`content${index}Heading`} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required 
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 text-gray-700 font-medium">Image</label>
          <input 
            type="file" 
            name={`content${index}Image`} 
            onChange={handleFileChange} 
            className="w-full border border-gray-300 p-2 rounded-lg cursor-pointer focus:outline-none"
            required 
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 text-gray-700 font-medium">Description</label>
          <textarea 
            name={`content${index}Description`} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
      </div>
    ))}

    <button 
      type="submit" 
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
    >
      Submit
    </button>
  </div>
</form>

                    </div>
                  </div>
              </div>
           </div>
    </>
   
  );
};

export default BlogForm;
