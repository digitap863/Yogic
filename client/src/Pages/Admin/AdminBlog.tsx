import React, { useState } from 'react';
import axios from 'axios';
import { postForm } from "../../api/req"
import Sidebar from '../../Components/Admin/Sidebar';


const BlogForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setImages({ ...images, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
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
    blogData.append('content4Image', images.content4Image);
    blogData.append('content4Description', formData.content4Description);

    try {
        console.log(blogData)
      const response = await postForm('/add-blog', blogData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting blog:', error);
      alert('Failed to add blog');
    }
  };

  return (
    <>
    <Sidebar/>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl mb-4 text-center">Add New Blog</h1>

      {/* Blog Text Inputs */}
      <div className = "border border-gray-600 p-3 rounded-lg">
      <div className="mb-4">
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange} className="w-full border p-2" required />
      </div>
      <div className="mb-4">
        <label>Summary</label>
        <textarea name="summary" onChange={handleChange} className="w-full border p-2" required />
      </div>

      {/* Blog Image Uploads */}
      <div className="mb-4">
        <label>Card Image</label>
        <input type="file" name="cardImg" onChange={handleFileChange} className="w-full border border-gray-400p-2" required />
      </div>

      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="mb-4 border p-2 border-gray-400 rounded-3xl ">
          <h3 className='text-center font-semibold'>Content {index}</h3>
          <label>Heading</label>
          <input type="text" name={`content${index}Heading`} onChange={handleChange} className="w-full border p-2" required />
          <label>Image</label>
          <input type="file" name={`content${index}Image`} onChange={handleFileChange} className="w-full border p-2" required />
          <label>Description</label>
          <textarea name={`content${index}Description`} onChange={handleChange} className="w-full border p-2" required />
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </div>
    </form>
    </>
   
  );
};

export default BlogForm;
