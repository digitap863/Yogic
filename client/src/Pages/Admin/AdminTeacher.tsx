import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { postForm } from '../../api/req';
import toast from 'react-hot-toast';
import Sidebar from '../../Components/Admin/Sidebar';
import { useNavigate } from 'react-router-dom';


const AdminTeacher = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: '',
    TeacherType: 'YogaTeacher',
  });
  const [images, setImages] = useState({
    Image: null
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
    const teacherData = new FormData();
    teacherData.append('Name', formData.Name);
    teacherData.append('TeacherType', formData.TeacherType);
    teacherData.append('Image', images.Image);
    try {
        console.log(teacherData)
      const response = await postForm('/add-teacher', teacherData);
      if (response.data.success) {
        toast.success(response.data.message);
        navigate(`/admin/teacherlist`)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error adding teacher:', error);
      toast.error('An error occurred while  adding Teacher.');

    }
  };

  return (
    <>
        <div className=' min-h-screen bg-gradient-to-r from-blue-300 to-green-300  dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className=" min-w-[20%] h-full">
                    <div className="overflow-x-auto  overflow-scroll h-[95vh]  bg-gradient-to-r from-blue-300 to-green-300 p-2 rounded-xl no-scrollbar ">
                        <form className="bg-white mx-auto p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-semibold mb-4">Add Teacher</h2>

                            <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="Name">Teacher Name</label>
                            <input
                                type="text"
                                name="Name"
                                value={formData.Name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter teacher name"
                                required
                            />
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="TeacherType">Teacher Type</label>
                            <select
                                name="TeacherType"
                                value={formData.TeacherType}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="YogaTeacher">Yoga Teacher</option>
                                <option value="MeditationTeacher">Meditation Teacher</option>
                            </select>
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="Image">Teacher Image URL</label>
                            <input
                                type="file"
                                name="Image"
                                onChange={handleFileChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            </div>

                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Teacher</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AdminTeacher;
