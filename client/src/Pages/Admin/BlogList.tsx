// AdminBlogList.jsx
import React, { useEffect, useState } from 'react';
import { deleteData, getdata, putForm } from '../../api/req'
import BlogEditModal from './BlogEditModal';
import  {url}  from '../../api/url'
import Sidebar from '../../Components/Admin/Sidebar';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);  // To hold the current blog for editing


  useEffect(() => {
    // Fetch all blogs from the backend
    const fetchBlogs = async () => {
      try {
        const response = await getdata('/blogs');
        console.log(response,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
        setBlogs(response.data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle blog deletion
  const handleDelete = async (id) => {
    try {
      await deleteData(`/blog/${id}`);
      setBlogs(blogs.filter((blog:any) => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleSave = async (id, updatedBlogData) => {
    try {
        console.log(updatedBlogData, "check................................................")
        for (let [key, value] of updatedBlogData.entries()) {
            console.log(key, value,"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
          }
          
      await putForm(`/blog/${id}`, updatedBlogData);
      setBlogs(blogs.map((blog) => (blog._id === id ? { ...blog, ...updatedBlogData } : blog)));
      setSelectedBlog(null);  // Close modal after save
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };


  return (
    <>
    {/* <Sidebar /> */}
    <div className="container mx-auto px-20">
      <table className="min-w-full bg-white ">
      <caption className="text-center text-2xl font-semibold py-4">Blog List</caption>

        <thead>
          <tr>
            <th className="w-1/12 py-2">ID</th>
            <th className="w-2/12 py-2">Image</th>
            <th className="w-3/12 py-2">Title</th>
            <th className="w-1/12 py-2">View/Edit</th>
            <th className="w-1/12 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog:any, index) => (
            <tr key={blog._id} className="text-center">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">
                <img
                  src={`${url}/uploads/${blog.cardImg}`}
                  alt={blog.title}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td className="py-2">{blog.title}</td>
              <td className="py-2">
                <button className="text-blue-500 hover:text-blue-700"
                onClick={() => setSelectedBlog(blog)}>
                  ✏️ Edit
                </button>
              </td>
              <td className="py-2">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(blog._id)}
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBlog && (
        <BlogEditModal
          blog={selectedBlog}
          onSave={handleSave}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </div>
    </>


  );
};

export default BlogList;
