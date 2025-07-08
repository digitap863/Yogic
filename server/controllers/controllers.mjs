import "dotenv/config"
import jwt from "jsonwebtoken"
import { BlogModel } from "../model/blogModel.mjs";

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CourseModel } from "../model/courseModel.mjs";
import { TeacherModel } from "../model/TeacherModel.mjs";
import { uploadToCloudinary } from "../helpers/multer.mjs";

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

    const cardImage = req.files.cardImage[0];
    const cardImageUrl = await uploadToCloudinary(cardImage);

    const content1Image = req.files.content1Image[0];
    const content1ImageUrl = await uploadToCloudinary(content1Image);

    const content2Image = req.files.content2Image[0];
    const content2ImageUrl = await uploadToCloudinary(content2Image);

     const content3Image = req.files.content3Image[0];
    const content3ImageUrl = await uploadToCloudinary(content3Image);

     const content4Image = req.files.content4Image[0];
    const content4ImageUrl = await uploadToCloudinary(content4Image);

    console.log(cardImageUrl,content1ImageUrl,content2ImageUrl ,content3ImageUrl ,content4ImageUrl,"*********************************************************")
       if (!cardImageUrl && !content1ImageUrl && !content2ImageUrl && !content3ImageUrl && !content4ImageUrl ) {
      return res.status(500).json({ message: 'Failed to upload image to Cloudinary' });
    }
  


        // Build the blog object to save in the database
        const newBlog = new BlogModel({
            title,
            summary,
            cardImg: cardImageUrl, // Filename of the uploaded card image
            content1: {
                heading: content1Heading,
                image: content1ImageUrl,
                Description: content1Description,
            },
            content2: {
                heading: content2Heading,
                image: content2ImageUrl,
                Description: content2Description,
            },
            content3: {
                heading: content3Heading,
                image: content3ImageUrl,
                Description: content3Description,
            },
            content4: {
                heading: content4Heading,
                image: content4ImageUrl,
                Description: content4Description,
            }
        });

        await newBlog.save();
        res.status(201).json({ message: 'Blog added successfully' , success:true});
    } catch (error) {
        res.status(500).json({ message: 'Failed to add blog', error });
    }
}

const getBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.find({}).sort({ createdAt: -1 });
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
    

        
        if (req.files?.cardImg) {
             const cardImg = req.files.cardImg[0];
            updatedData.cardImg = await uploadToCloudinary(cardImg);
          }
          if (req.files?.content1Image) {
            const content1Image = req.files.content1Image[0];
            updatedData.content1.image = await uploadToCloudinary(content1Image);
          }
          if (req.files?.content2Image) {
              const content2Image = req.files.content2Image[0];
             updatedData.content2.image = await uploadToCloudinary(content2Image);
          }
           if (req.files?.content3Image) {
              const content3Image = req.files.content3Image[0];
             updatedData.content3.image = await uploadToCloudinary(content3Image);
          }
           if (req.files?.content4Image) {
              const content4Image = req.files.content4Image[0];
             updatedData.content4.image = await uploadToCloudinary(content4Image);
          }

    
        // Find the blog by ID and update it
        console.log(id,"idididididididididididid")
        console.log(updatedData,"updatedDataupdatedDataupdatedData");
        
        const updatedBlog = await BlogModel.findByIdAndUpdate(id, updatedData, { new: true });
    
        // If blog is not found
        if (!updatedBlog) {
          return res.status(404).json({ message: 'Blog not found' });
        }
    
        res.status(200).json({ success: true, message: 'Blog updated successfully', blog: updatedBlog });
      } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

const createCourse = async (req, res) => {
    console.log(req.body)
    console.log(req.files)
    try {
      const { courseType, heading, description,content1Heading,
        content1Description,
        content2Heading,
        content2Description,
} = req.body;

console.log(courseType,heading,description,content1Heading,content1Description,content2Heading,content2Description,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  
    const cardImage = req.files.cardImage[0];
    const cardImageUrl = await uploadToCloudinary(cardImage);

    const content1Image = req.files.content1Image[0];
    const content1ImageUrl = await uploadToCloudinary(content1Image);

    const content2Image = req.files.content2Image[0];
    const content2ImageUrl = await uploadToCloudinary(content2Image);

    console.log(cardImageUrl,content1ImageUrl,content2ImageUrl ,"*********************************************************")
       if (!cardImageUrl && !content1ImageUrl && !content2ImageUrl ) {
      return res.status(500).json({ message: 'Failed to upload image to Cloudinary' });
    }
  
      const newCourse = new CourseModel({
        courseType,
        heading,
        description,
        cardImage : cardImageUrl, 
        content1: {
            heading: content1Heading,
            image: content1ImageUrl,
            Description: content1Description,
        },
        content2: {
            heading: content2Heading,
            image: content2ImageUrl,
            Description: content2Description,
        },
      });
  
      await newCourse.save();
      res.status(201).json({ message: 'Course created successfully!' ,success: true });
    } catch (error) {
        console.error('error in creating coures',error);
      res.status(500).json({ message: 'Error creating course', error });
    }
  };

  const getCourses = async (req, res) => {
    try {
        console.log("i am here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        const Courses = await CourseModel.find({}).sort({ createdAt: -1 });
        console.log(Courses,"CoursesCoursesCoursesCoursesCoursesCoursesCourses")
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
        // const imagesToDelete = [data.cardImage, data.content1.image, data.content2.image, data.content3.image, data.content4.image];

        await  CourseModel.findOneAndDelete({ _id: id })
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
            return res.status(404).json({ message: 'Course not found' });
        }


        // Destructure the text fields from the request body
        const {
        courseType,
        heading,
        description,
      'content1.heading': content1Heading, 
      'content1.Description': content1Description, 
      'content2.heading': content2Heading, 
      'content2.Description': content2Description, 
        } = req.body;
    
        // Prepare the updated data object
        const updatedData = {
          courseType,
          heading,
          description,
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
          cardImage: existingBlog.cardImage
        };
    
        if (req.files?.cardImage) {
             const cardImage = req.files.cardImage[0];
            updatedData.cardImage = await uploadToCloudinary(cardImage);
          }
          if (req.files?.content1Image) {
            const content1Image = req.files.content1Image[0];
            updatedData.content1.image = await uploadToCloudinary(content1Image);
          }
          if (req.files?.content2Image) {
              const content2Image = req.files.content2Image[0];
             updatedData.content2.image = await uploadToCloudinary(content2Image);
          }

            
        // Find the blog by ID and update it
        console.log(id,"idididididididididididid")
        console.log(updatedData,"updatedDataupdatedDataupdatedData");
        
        const updatedCourse = await CourseModel.findByIdAndUpdate(id, updatedData, { new: true });
    
        // If blog is not found
        if (!updatedCourse) {
          return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({  success: true, message: 'Course updated successfully', course: updatedCourse });
      } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

const createTeacher = async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  try {
    const { Name, TeacherType } = req.body;

    // Check if the image file exists
    if (!req.files || !req.files.Image || req.files.Image.length === 0) {
      return res.status(400).json({ message: 'No image uploaded' });
    }

    // Upload image to Cloudinary
    const imageFile = req.files.Image[0]; // multer with .array or .fields returns array
    const imageUrl = await uploadToCloudinary(imageFile);

    if (!imageUrl) {
      return res.status(500).json({ message: 'Failed to upload image to Cloudinary' });
    }

    // Save the teacher data with Cloudinary image URL
    const teacher = new TeacherModel({
      Name,
      TeacherType,
      Image: imageUrl,
    });

    await teacher.save();

    res.status(201).json({ message: 'Teacher Added successfully!', success: true });
  } catch (error) {
    console.error('Error in creating teacher:', error);
    res.status(500).json({ message: 'Error creating Teacher', error });
  }
};

 const getTeachers = async (req, res) => {
    try {
        console.log("i am here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      const teachers = await TeacherModel.find({}).sort({ createdAt: -1 });;
      console.log(teachers,"teachersteachersteachersteachers")
      return res.status(200).send({ data: teachers, success: true })
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving teachers', error });
    }
  };

  const deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await TeacherModel.findById({ _id: id });
        if (!data) {
            return res.status(404).send({ message: "Teacher not found" });
        }


        await TeacherModel.findOneAndDelete({ _id: id });

        res.status(200).send({ success: true, message: "Deleted Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message, success: false });
    }
}


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
    deleteCourse,
    createTeacher,
    getTeachers,
    deleteTeacher
}