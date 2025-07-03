import express from 'express';
import {  adminLogin, createBlog, createCourse, createTeacher, deleteBlog, deleteCourse, deleteTeacher, getBlog, getCourses, getTeachers, singleBlog, singleCourse, updateBlog, updateCourse } from '../controllers/controllers.mjs';
import { upload } from '../helpers/multer.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';



const router = express.Router();


console.log("inside the route")
router.post("/login", adminLogin)
router.post("/add-blog", authMiddleware,upload.fields([
    { name: 'cardImg', maxCount: 1 },
    { name: 'content1Image', maxCount: 1 },
    { name: 'content2Image', maxCount: 1 },
    { name: 'content3Image', maxCount: 1 },
    { name: 'content4Image', maxCount: 1 }
]), createBlog)
router.get("/blogs", getBlog)
router.get("/blog/:id", singleBlog)
router.delete("/blog/:id", authMiddleware, deleteBlog)
router.put("/blog/:id",authMiddleware, upload.fields([
    { name: 'cardImg', maxCount: 1 },
    { name: 'content1Image', maxCount: 1 },
    { name: 'content2Image', maxCount: 1 },
    { name: 'content3Image', maxCount: 1 },
    { name: 'content4Image', maxCount: 1 }
]), updateBlog)

router.post("/add-course", authMiddleware,upload.fields([
    { name: 'cardImage', maxCount: 1 },
    { name: 'content1Image', maxCount: 1 },
    { name: 'content2Image', maxCount: 1 },
]), createCourse)
router.get("/courses", getCourses)
router.get("/course/:id", singleCourse)
router.delete("/course/:id", authMiddleware, deleteCourse)
router.put("/course/:id",authMiddleware, upload.fields([
    { name: 'cardImage', maxCount: 1 },
    { name: 'content1Image', maxCount: 1 },
    { name: 'content2Image', maxCount: 1 },
]), updateCourse);

router.post('/add-teacher',authMiddleware,upload.fields([
    { name: 'Image', maxCount: 1 }]),
    createTeacher);
router.get('/teachers', getTeachers);
router.delete("/teacher/:id", authMiddleware, deleteTeacher)




export default router;