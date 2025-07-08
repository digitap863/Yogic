// AdminBlogList.jsx
import React, { useEffect, useState } from 'react';
import { deleteData, getdata, putForm } from '../../api/req'
// import BlogEditModal from './BlogEditModal';
import  {url}  from '../../api/url'
import Sidebar from '../../Components/Admin/Sidebar';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Modal from 'react-modal';
import toast from 'react-hot-toast';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);


  const fetchBlogs = async () => {
    try {
      const response = await getdata('/blogs');
      setBlogs(response.data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);
 
  const handleDelete = async (id) => {
    try {
      const response = await deleteData(`/blog/${id}`);
      console.log(response,"response after delete!!!!!!!!!!!!!!")
      setBlogs(blogs.filter((blog:any) => blog._id !== id));
      if (response.data.success) {
        toast.success(response.data.message);
        fetchBlogs();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('An error occurred while deleting blog.');
    }
  };

  const handleSave = async (id, updatedBlogData) => {
    try {
      const response = await putForm(`/blog/${id}`, updatedBlogData);
      console.log(response,"response after update!!!!!!!!!!!!!!")
      // setBlogs(blogs.map((blog) => (blog._id === id ? { ...blog, ...updatedBlogData } : blog)));
      setIsModalOpen(false); // Close modal after save
      setSelectedBlog(null); // Clear selected blog
      if (response.data.success) {
        toast.success(response.data.message);
        fetchBlogs();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      toast.error('An error occurred while updating blog.');

    }
  };
  
  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };


  return (
    <>
          <div className=' min-h-screen bg-gradient-to-r from-blue-300 to-green-300  dark:bg-gray-900'>
            <Sidebar />
            <div className='px-8 pt-8 sm:ml-64'>
                <div className=" min-w-[60%] h-full">
                    <div className="overflow-x-auto  overflow-y-auto  h-[97vh] bg-slate-100 p-2 rounded-xl ">
                        <table className="table-auto w-full bg-white border border-gray-200 text-center ">
                            <caption className="text-center text-2xl font-semibold py-4">Blog List</caption>
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-4 py-2 text-center">ID</th>
                                    <th className="px-4 py-2 text-center">Image</th>
                                    <th className="px-4 py-2 text-center">Title</th>
                                    <th className="px-4 py-2 text-center">Edit</th>
                                    <th className="px-4 py-2 text-center">Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {blogs && blogs.map((blog, i) => (
                                    <tr key={i}>
                                        <td className="border px-4 py-2">{i + 1}</td>
                                        <td className="border px-4 py-2 max-w-md flex justify-center">
                                            <img
                                              src={ blog?.cardImg.startsWith('https://')
                                                  ? blog?.cardImg
                                                  : `${url}/uploads/${blog?.cardImg}`
                                                  }
                                              alt="" className='w-28 aspect-square object-cover ' />
                                        </td>
                                        <td className="border px-4 py-2 max-w-md">
                                            {blog?.title}
                                        </td>
                                        <td className="border px-4 py-2 ">
                                            <button  
                                            onClick={() => handleEdit(blog)}  className="bg-blue-500 p-2 text-white rounded-full hover:bg-blue-600">
                                                <FaRegEdit size={25} className='text-green-900'/>
                                            </button>
                                        </td>
                                        <td className="border px-4 py-2 ">
                                            <button
                                            onClick={() => handleDelete(blog._id)} >
                                            <RiDeleteBin5Fill  size={25} className='text-red-500'/>
                                              
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

            {selectedBlog && (
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
        <BlogEditModal blog={selectedBlog} onSave={handleSave} onClose={() => setIsModalOpen(false)} />
      </Modal>
      )}
      </div>

 
</>

  );
};


const BlogEditModal = ({ blog, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: blog.title,
    summary: blog.summary,
    content1: {
        heading: blog.content1.heading,
        Description: blog.content1.Description,
      },
      content2: {
        heading: blog.content2.heading,
        Description: blog.content2.Description,
      },
      content3: {
        heading: blog.content3.heading,
        Description: blog.content3.Description,
      },
      content4: {
        heading: blog.content4.heading,
        Description: blog.content4.Description,
      },
    });

  const [images, setImages] = useState({
    cardImg: null,
    content1Image: null,
    content2Image: null,
    content3Image: null,
    content4Image: null,
  });

  useEffect(() => {
    // Set the initial image URLs
    setImages({
        cardImg: `${blog.cardImg}`,
        content1Image: `${blog.content1.image}`,
        content2Image: `${blog.content2.image}`,
        content3Image: `${blog.content3.image}`,
        content4Image: `${blog.content4.image}`,
      });
    }, [blog]);
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
    const updatedBlogData = new FormData();
    updatedBlogData.append('title', formData.title);
    updatedBlogData.append('summary', formData.summary);

    // Check if new images have been uploaded; if not, keep the old images
    if (images.cardImg instanceof File) {
        updatedBlogData.append('cardImg', images.cardImg);
      }
  
      Object.keys(formData).forEach((contentKey) => {
        if (contentKey.startsWith('content')) {
          const contentData = formData[contentKey];
          updatedBlogData.append(`${contentKey}.heading`, contentData.heading);
          updatedBlogData.append(`${contentKey}.Description`, contentData.Description);
  
          if (images[`${contentKey}Image`] instanceof File) {
            updatedBlogData.append(`${contentKey}Image`, images[`${contentKey}Image`]);
          }
        }
      });
      console.log(updatedBlogData,"data add from the updated blog  .........................................")
      // Call the save function passed via props
      onSave(blog._id, updatedBlogData);
    };
  
    return (
      <div className="modal-container">
        <form onSubmit={handleSubmit} className="p-4">
          <h1 className="text-2xl mb-4">Edit Blog</h1>          
          <div className="mb-4">
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2" />
          </div>
          <div className="mb-4">
            <label>Summary</label>
            <textarea name="summary" value={formData.summary} onChange={handleChange} className="w-full border p-2" />
          </div>
  
          {/* Image inputs with previews */}
          <div className="mb-4">
            <label>Card Image</label>
            <img src={images.cardImg instanceof File ? URL.createObjectURL(images.cardImg) : images.cardImg} alt="Card" className="w-16 h-16 object-cover" />
            <input type="file" name="cardImg" onChange={handleFileChange} className="w-full border p-2" />
          </div>
  
          {[1, 2, 3, 4].map((index) => (
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


export default BlogList;
