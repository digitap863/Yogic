import React, { useState } from 'react';
import axios from 'axios';
import { postForm } from '../../api/req';
import Sidebar from '../../Components/Admin/Sidebar';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CourseForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseType: '',
    heading: '',
    description: '',
    content1Heading: '',
    content1Description: '',
    content2Heading: '',
    content2Description: '',
    // content3Heading: '',
    // content3Description: '',
    // content4Heading: '',
    // content4Description: '',
  });

  const [images, setImages] = useState({
    cardImage: null,
    content1Image: null,
    content2Image: null,
    // content3Image: null,
    // content4Image: null,
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

    const courseData = new FormData();
    courseData.append('courseType', formData.courseType);
    courseData.append('heading', formData.heading);
    courseData.append('description', formData.description);
    courseData.append('cardImage', images.cardImage);
    courseData.append('content1Heading', formData.content1Heading);
    courseData.append('content1Image', images.content1Image);
    courseData.append('content1Description', formData.content1Description);

    courseData.append('content2Heading', formData.content2Heading);
    courseData.append('content2Image', images.content2Image);
    courseData.append('content2Description', formData.content2Description);

    // courseData.append('content3Heading', formData.content3Heading);
    // courseData.append('content3Image', images.content3Image);
    // courseData.append('content3Description', formData.content3Description);

    // courseData.append('content4Heading', formData.content4Heading);
    // courseData.append('content4Image', images.content4Image);
    // courseData.append('content4Description', formData.content4Description);

    

    try {
        console.log(courseData,"?????????????????????????????????????????????????????????????????")
        const response = await postForm('/add-course', courseData);
        if (response.data.success) {
          toast.success(response.data.message);
          navigate('/admin/courselist');

        } else {
          toast.error(response.data.message);
        }
    } catch (error) {
      toast.error('An error occurred while  adding Course.');
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
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Course Type</option>
                          <option value="YogaCourse">Yoga Course</option>
                          <option value="MeditationCourse">Meditation Course</option>
                        </select>
                        </div>

                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Heading  <span className='text-red-600'>(Maximum of 6 words)</span></label>
                        <input 
                          type="text" 
                          name="heading" 
                          value={formData.heading} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Description </label>
                        <input 
                          type="text" 
                          name="description" 
                          value={formData.description} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Image</label>
                        <input 
                          type="file" 
                          name="cardImage" 
                          onChange={handleFileChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>

                        {[1, 2].map((index) => (
                          <div key={index} className="mb-4 border border-gray-300 p-4 rounded-lg bg-gray-50">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">About Course  {index}</h3>
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


