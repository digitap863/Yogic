import "dotenv/config"
import jwt from "jsonwebtoken"
import { BlogModel } from "../model/blogModel.mjs";

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CourseModel } from "../model/courseModel.mjs";

// Convert import.meta.url to a filename
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = path.dirname(__filename);

const adminCredentials = {
    adminid: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
};



const adminLogin = (req, res) => {
    try {
        console.log("hello frm controller ")

        const { email, password } = req.body.data;
        console.log(email,password,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

        if (email && password) {
            if (adminCredentials.adminid !== email) {
                return res
                    .status(401)
                    .send({ message: "Invalid Credentials", success: false });
            }
            if (adminCredentials.password !== password) {
                return res
                    .status(401)
                    .send({ message: "Invalid Password", success: false });
            }
            const token = jwt.sign(
                { id: adminCredentials.adminid, role: "admin" },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d",
                }
            );

            res
                .status(200)
                .send({ message: "login successful", success: true, token });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message, success: false });
    }
};

const createBlog = async (req, res) => {
    try {
        const {
            title,
            summary,
            content1Heading,
            content1Description,
            content2Heading,
            content2Description,
            content3Heading,
            content3Description,
            content4Heading,
            content4Description
        } = req.body;

        // Build the blog object to save in the database
        const newBlog = new BlogModel({
            title,
            summary,
            cardImg: req.files.cardImg[0].filename, // Filename of the uploaded card image
            content1: {
                heading: content1Heading,
                image: req.files.content1Image[0].filename,
                Description: content1Description,
            },
            content2: {
                heading: content2Heading,
                image: req.files.content2Image[0].filename,
                Description: content2Description,
            },
            content3: {
                heading: content3Heading,
                image: req.files.content3Image[0].filename,
                Description: content3Description,
            },
            content4: {
                heading: content4Heading,
                image: req.files.content4Image[0].filename,
                Description: content4Description,
            }
        });

        await newBlog.save();
        res.status(201).json({ message: 'Blog added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add blog', error });
    }
}

const getBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        return res.status(200).send({ data: blogs, success: true })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message, success: false })
    }
}

const singleBlog = async (req, res) => {
    const { id } = req.params
    try {
        const blog = await BlogModel.findOne({ _id : id })
        return res.status(200).send({ data: blog, success: true })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message, success: false })
    }
}

const deleteFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(`Error deleting file ${filePath}: ${err.message}`);
            } else {
                resolve(`File deleted successfully: ${filePath}`);
            }
        });
    });
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await BlogModel.findById({ _id: id });
        if (!data) {
            return res.status(404).send({ message: "data not found" });
        }
        // Images to delete
        const imagesToDelete = [data.cardImg, data.content1.image, data.content2.image, data.content3.image, data.content4.image];

        // Directory path where images are stored
        const directoryPath = path.join(__dirname, '../uploads');

        // Helper function to check if file exists and delete it
        const deleteIfExists = async (image) => {
            if (image) {
                const filePath = path.join(directoryPath, image);
                if (fs.existsSync(filePath)) {
                    try {
                        const result = await deleteFile(filePath);
                        console.log(result);
                    } catch (err) {
                        console.error(err);
                    }
                } else {
                    console.log(`File not found: ${filePath}, skipping...`);
                }
            }
        };

        // Iterate through the images and delete if they exist
        await Promise.all(imagesToDelete.map(deleteIfExists));

        // Delete the course from the database
        await BlogModel.findOneAndDelete({ _id: id });
        res.status(200).send({ success: true, message: "Deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message, success: false });
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.files,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1")

        const existingBlog = await BlogModel.findById(id);
        if (!existingBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }


        // Destructure the text fields from the request body
        const {
           title, summary,'content1.heading': content1Heading, 
      'content1.Description': content1Description, 
      'content2.heading': content2Heading, 
      'content2.Description': content2Description, 
      'content3.heading': content3Heading, 
      'content3.Description': content3Description, 
      'content4.heading': content4Heading, 
      'content4.Description': content4Description
        } = req.body;
    
        // Prepare the updated data object
        const updatedData = {
          title,
          summary,
          content1: {
            heading: content1Heading,
            Description: content1Description,
            image: existingBlog.content1.image 
          },
          content2: {
            heading: content2Heading,
            Description: content2Description,
            image: existingBlog.content2.image
          },
          content3: {
            heading: content3Heading,
            Description: content3Description,
            image: existingBlog.content3.image
          },
          content4: {
            heading: content4Heading,
            Description: content4Description,
            image: existingBlog.content4.image
          },
          cardImg: existingBlog.cardImg
        };
    
        // Handle image uploads if any new images are uploaded
        if (req.files?.cardImg) {
          updatedData.cardImg = req.files.cardImg[0].filename;
        }
        if (req.files?.content1Image) {
          updatedData.content1.image = req.files.content1Image[0].filename;
        }
        if (req.files?.content2Image) {
          updatedData.content2.image = req.files.content2Image[0].filename;
        }
        if (req.files?.content3Image) {
          updatedData.content3.image = req.files.content3Image[0].filename;
        }
        if (req.files?.content4Image) {
          updatedData.content4.image = req.files.content4Image[0].filename;
        }
    
        // Find the blog by ID and update it
        console.log(id,"idididididididididididid")
        console.log(updatedData,"updatedDataupdatedDataupdatedData");
        
        const updatedBlog = await BlogModel.findByIdAndUpdate(id, updatedData, { new: true });
    
        // If blog is not found
        if (!updatedBlog) {
          return res.status(404).json({ message: 'Blog not found' });
        }
    
        res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
      } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

const createCourse = async (req, res) => {
    console.log(req.body)
    console.log(req.files)
    try {
      const { courseType, heading, description, content1, content2, content3 } = req.body;
  
    //   req.files.cardImg[0].filename,
      // Access the uploaded image
      const cardImage = req.files['cardImage'] ? req.files['cardImage'][0].filename : null;
      console.log(cardImage)
  
      if (!cardImage) {
        return res.status(400).json({ message: 'Image is required.' });
      }
  
      const newCourse = new CourseModel({
        courseType,
        heading,
        description,
        cardImage, 
        content1,
        content2,
        content3
      });
  
      await newCourse.save();
      res.status(201).json({ message: 'Course created successfully!' });
    } catch (error) {
        console.error('error in creating coures',error);
      res.status(500).json({ message: 'Error creating course', error });
    }
  };

  const getCourses = async (req, res) => {
    try {
        const Courses = await CourseModel.find({})
        return res.status(200).send({ data: Courses, success: true })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message, success: false })
    }
}

const singleCourse = async (req, res) => {
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    const { id } = req.params
    try {
        const course = await CourseModel.findOne({ _id : id })
        return res.status(200).send({ data: course, success: true })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message, success: false })
    }
}

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await CourseModel.findById({ _id: id });
        if (!data) {
            return res.status(404).send({ message: "data not found" });
        }
        const cardImg = data.cardImage
        const directoryPath = path.join(__dirname, '../uploads');

        const filePaths = path.join(directoryPath, cardImg)
        await deleteFile(filePaths).then(() => CourseModel.findOneAndDelete({ _id: id }))
        res.status(200).send({ success: true, message: "Deleted Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message, success: false });
    }
}

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.files,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1")

        const existingBlog = await CourseModel.findById(id);
        if (!existingBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }


        // Destructure the text fields from the request body
        const {
            courseType,
           heading,
           description,
           content1, 
            content2, 
            content3, 
        } = req.body;
    
        // Prepare the updated data object
        const updatedData = {
          courseType,
          heading,
          description,
          content1,
          content2,
          content3,
          cardImage: existingBlog.cardImage
        };
    
        // Handle image uploads if any new images are uploaded
        if (req.files?.cardImage) {
          updatedData.cardImage = req.files.cardImage[0].filename;
        }
            
        // Find the blog by ID and update it
        console.log(id,"idididididididididididid")
        console.log(updatedData,"updatedDataupdatedDataupdatedData");
        
        const updatedCourse = await CourseModel.findByIdAndUpdate(id, updatedData, { new: true });
    
        // If blog is not found
        if (!updatedCourse) {
          return res.status(404).json({ message: 'Course not found' });
        }
    
        res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
      } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};


export {
    adminLogin,
    createBlog,
    getBlog,
    singleBlog,
    deleteBlog,
    updateBlog,
    createCourse,
    getCourses,
    singleCourse,
    updateCourse,
    deleteCourse
   
}