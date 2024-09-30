import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { deleteData, getdata } from '../../api/req';
import Sidebar from '../../Components/Admin/Sidebar';
import { url } from '../../api/url';
import { FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';


const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);


    // Fetch the list of teachers from the backend
    const fetchTeachers = async () => {
      try {
        const response = await getdata('/teachers');
        if (response.data.success) {
            setTeachers(response.data.data); // Access response.data.data
          } else {
            console.error('Error fetching teachers:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching teachers:', error);
        }
    };

    const deleteTeacherImage =  async (id) => {
        try {
            console.log(id,"teacherteacherteacherteacherteacher")
          const response = await deleteData(`/teacher/${id}`);
          console.log(response,"response after delete!!!!!!!!!!!!!!")
          setTeachers(teachers.filter((x:any) => x._id !== id));
          if (response.data.success) {
            toast.success(response.data.message);
            fetchTeachers();
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          console.error('Error deleting blog:', error);
          toast.error('An error occurred while deleting blog.');
        }
      };


  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className=' min-h-screen bg-gradient-to-r from-blue-300 to-green-300  dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className=" min-w-[60%] h-full">
                  <div className="container mx-auto py-2  ">
                    <h2 className="text-3xl font-semibold mb-6 text-center">List of Teachers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {teachers.map((teacher:any) => (
                        <div key={teacher._id} className="bg-white max-w-[230px] px-6  pt-6 rounded-lg shadow-md ">
                          <img src={`${url}/uploads/${teacher.Image}`} alt={teacher.Name} className="w-[90%] h-[60%] object-cover rounded-md mb-4"/>
                          <div className="flex items-center justify-between ">
                              <div>
                                <h3 className="text-xl font-semibold">{teacher.Name}</h3>
                                <p className="text-gray-600">{teacher.TeacherType}</p>
                              </div>
                              {/* Delete Icon aligned to the right */}
                              <button
                                onClick={() => deleteTeacherImage(teacher._id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <FaTrashAlt size={20} />
                              </button>
                                </div>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
          </div>
    </div>
  );
};

export default TeacherList;
