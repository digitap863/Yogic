import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import { deleteData, getdata, putForm } from '../../api/req'
import { url } from '../../api/url'
import { FaRegEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";
import toast from 'react-hot-toast';
import Modal from 'react-modal';



const CourseList = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [selectedCourse, setSelectedCourse] = useState(null);  
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getCourse = async () => {
       try {
        const response = await getdata("/courses")
        setData(response.data.data)
       } catch (error) {
      console.error('Error fetching courses:', error);
       }
    }
    useEffect(() => {
        getCourse()
    }, [])

    const handleDelete = async (id) => {
        try {
          const response = await deleteData(`/course/${id}`);
          console.log(response,"response after delete!!!!!!!!!!!!!!")
          setData(data.filter((x:any) => x._id !== id));
          if (response.data.success) {
            toast.success(response.data.message);
            getCourse();
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          console.error('Error deleting blog:', error);
          toast.error('An error occurred while deleting blog.');
        }
      };

      
  const handleSave = async (id, updatedCourseData) => {
    try {
        console.log("qqq",updatedCourseData)
      const response = await putForm(`/course/${id}`, updatedCourseData);
      console.log(response,"response after update!!!!!!!!!!!!!!")
      // setCourses(Courses.map((Course) => (Course._id === id ? { ...Course, ...updatedCourseData } : Course)));
      setIsModalOpen(false); // Close modal after save
      setSelectedCourse(null); // Clear selected Course
      if (response.data.success) {
        toast.success(response.data.message);
        getCourse();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error updating Course:', error);
      toast.error('An error occurred while updating Course.');

    }
  };
  
  const handleEdit = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

    console.log(data)
    return (
        <div className=' min-h-screen bg-gradient-to-r from-blue-300 to-green-300  dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className=" min-w-[60%] h-full">
                    <div className="overflow-x-auto  overflow-y-auto  h-[97vh] bg-slate-100 p-2 rounded-xl ">
                        <table className="table-auto w-full bg-white border border-gray-200 text-center ">
                        <caption className="text-center text-2xl font-semibold py-4">Course List</caption>

                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-4 py-2 text-center">ID</th>
                                    <th className="px-4 py-2 text-center">Image</th>
                                    <th className="px-4 py-2 text-center">courseType</th>
                                    <th className="px-4 py-2 text-center">Title</th>
                                    <th className="px-4 py-2 text-center">Edit</th>
                                    <th className="px-4 py-2 text-center">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((items, i) => (
                                    <tr key={i}>
                                        <td className="border px-4 py-2">{i + 1}</td>
                                        <td className="border px-4 py-2 max-w-md flex justify-center">
                                            <img src={`${url}/uploads/${items?.cardImage}`} alt="" className='w-28 aspect-square object-cover ' />
                                        </td>
                                        <td className="border px-4 py-2 max-w-md">
                                            {items?.courseType}
                                        </td>
                                        <td className="border px-4 py-2 max-w-md">
                                            {items?.heading}
                                        </td>
                                        <td className="border px-4 py-2 ">
                                            <button  
                                            onClick={() => handleEdit(items)}>
                                                <FaRegEdit size={25} className='text-green-900'/>
                                            </button>
                                        </td>
                                        <td className="border px-4 py-2 ">
                                            <button 
                                             onClick={() => handleDelete(items._id)} >
                                            <RiDeleteBin5Fill  size={25} className='text-red-500'/>
                                                {/* <MdDelete size={25} /> */}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {selectedCourse && (
        <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            width: '90%',
            maxWidth: '600px',
            maxHeight: '80vh', // Set max height for scrolling
            overflowY: 'auto', // Enable vertical scrolling
            borderRadius: '8px',
            padding: '20px',
            margin: '0 auto',
          },
        }}
      >
        <button onClick={() => setIsModalOpen(false)} className="absolute top-0 right-0 m-4 bg-gray-400 p-2 rounded">
          Close
        </button>
        <CourseEditModal course={selectedCourse} onSave={handleSave} onClose={() => setIsModalOpen(false)} />
      </Modal>
      )}
    </div>
    )
}

const CourseEditModal = ({ course, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        courseType: course.courseType,
        heading: course.heading,
      description: course.description,
      content1: {
          heading: course.content1.heading,
          Description: course.content1.Description,
        },
        content2: {
          heading: course.content2.heading,
          Description: course.content2.Description,
        },
        // content3: {
        //   heading: course.content3.heading,
        //   Description: course.content3.Description,
        // },
        // content4: {
        //   heading: course.content4.heading,
        //   Description: course.content4.Description,
        // },
      });
  
    const [images, setImages] = useState({
      cardImage: null,
      content1Image: null,
      content2Image: null,
      // content3Image: null,
      // content4Image: null,
    });
  
    useEffect(() => {
      // Set the initial image URLs
      setImages({
          cardImage: `${url}/uploads/${course.cardImage}`,
          content1Image: `${url}/uploads/${course.content1.image}`,
          content2Image: `${url}/uploads/${course.content2.image}`,
          // content3Image: `${url}/uploads/${course.content3.image}`,
          // content4Image: `${url}/uploads/${course.content4.image}`,
        });
      }, [course]);
    // Handle form field changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name.includes('.')) {
        const [content, key] = name.split('.');
        setFormData({
          ...formData,
          [content]: {
            ...formData[content],
            [key]: value,
          },
        });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
    
  
    // Handle image input changes
    const handleFileChange = (e) => {
      const { name, files } = e.target;
      setImages({ ...images, [name]: files[0] });
    };
  
    // Submit the updated data
    const handleSubmit = async (e) => {
      e.preventDefault();
      const updatedcourseData = new FormData();
      updatedcourseData.append('courseType', formData.courseType);
      updatedcourseData.append('heading', formData.heading);
      updatedcourseData.append('description', formData.description);
  
      // Check if new images have been uploaded; if not, keep the old images
      if (images.cardImage instanceof File) {
          updatedcourseData.append('cardImage', images.cardImage);
        }
    
        Object.keys(formData).forEach((contentKey) => {
          if (contentKey.startsWith('content')) {
            const contentData = formData[contentKey];
            updatedcourseData.append(`${contentKey}.heading`, contentData.heading);
            updatedcourseData.append(`${contentKey}.Description`, contentData.Description);
    
            if (images[`${contentKey}Image`] instanceof File) {
              updatedcourseData.append(`${contentKey}Image`, images[`${contentKey}Image`]);
            }
          }
        });
        console.log(updatedcourseData,"data add from the updated course  .........................................")
        // Call the save function passed via props
        onSave(course._id, updatedcourseData);
      };
    
      return (
        <div className="modal-container">
          <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-2xl mb-4">Edit course</h1>          
            <div className="mb-4">
              <label>courseType</label>
              
              <select 
                    name="courseType" 
                    value={formData.courseType} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="YogaCourse">Yoga Course</option>
                    <option value="MeditationCourse">Meditation Course</option>
                </select>
            </div>
            <div className="mb-4">
              <label>heading</label>
              <input type="text" name="heading" value={formData.heading} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div className="mb-4">
              <label>description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2" />
            </div>
    
            {/* Image inputs with previews */}
            <div className="mb-4">
              <label>Card Image</label>
              <img src={images.cardImage instanceof File ? URL.createObjectURL(images.cardImage) : images.cardImage} alt="Card" className="w-16 h-16 object-cover" />
              <input type="file" name="cardImage" onChange={handleFileChange} className="w-full border p-2" />
            </div>
    
            {[1, 2].map((index) => (
              <div key={index} className="mb-4">
                <h3>Content {index}</h3>
                <label>Heading</label>
                <input type="text" name={`content${index}.heading`} value={formData[`content${index}`].heading} onChange={handleChange} className="w-full border p-2" />
                
                <label>Image</label>
                <img src={images[`content${index}Image`] instanceof File ? URL.createObjectURL(images[`content${index}Image`]) : images[`content${index}Image`]} alt={`Content ${index}`} className="w-16 h-16 object-cover" />
                <input type="file" name={`content${index}Image`} onChange={handleFileChange} className="w-full border p-2" />
                
                <label>Description</label>
                <textarea name={`content${index}.Description`} value={formData[`content${index}`].Description} onChange={handleChange} className="w-full border p-2" />
              </div>
            ))}
    
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
            {/* <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded ml-2">Cancel</button> */}
          </form>
        </div>
      );
    };
  

export default CourseList