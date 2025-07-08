import React, { useState, useEffect } from 'react';
import {url} from '../../api/url';

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
          <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded ml-2">Cancel</button>
        </form>
      </div>
    );
  };

export default BlogEditModal;
