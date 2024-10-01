import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';



// Lazy imports for user pages
const Home = lazy(() => import("../Pages/User/Home"));
const AboutUs = lazy(() => import("../Pages/User/AboutUs"));
const Yoga = lazy(() => import("../Pages/User/Yoga"));
const Meditation = lazy(() => import("../Pages/User/Meditation"));
const Courses = lazy(() => import("../Pages/User/Courses"));
const Gallery = lazy(() => import("../Pages/User/Gallery"));
const Blogs = lazy(() => import("../Pages/User/Blog"));
const Contact = lazy(() => import("../Pages/User/Contact"));
const BeginnerYoga = lazy(() => import("../Pages/User/BeginnerYoga"));
const BlogPage = lazy(() => import("../Pages/User/BlogPage"));

// Lazy imports for admin pages
const Login = lazy(() => import("../Pages/Admin/Login"));
const Dashboard = lazy(() => import("../Pages/Admin/Dashboard"));
const BlogForm = lazy(() => import("../Pages/Admin/AdminBlog"));
const BlogList = lazy(() => import("../Pages/Admin/BlogList"));
const CourseForm = lazy(() => import("../Pages/Admin/AdminCourse"));
const CourseList = lazy(() => import("../Pages/Admin/CourseList"));
const TeacherForm = lazy(() => import("../Pages/Admin/AdminTeacher"));
const TeacherList = lazy(() => import("../Pages/Admin/TeacherList"));
const NotFound = lazy (()=> import("../Pages/User/ErrorPage"))



// Utils imports (keep these as normal imports)
import AdminPublicRoutes from "../utils/AdminPublicRoutes";
import AdminPrivateRoutes from "../utils/AdminPrivateRoutes";

export const MainRouter = () => {

  useEffect(() => {
    AOS.init({
      // once: true,
      // disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
      delay: 100
    });
    AOS.refresh();
  }, []);

  const location = useLocation()
  return (
    <Suspense fallback={<div className= "flex items-center justify-center min-h-screen">
                              <div className="spinner">
                              </div>    
                          </div>}>
      
      <Routes location={location} key={location.pathname}>
        {/* User routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:id" element={<BeginnerYoga />} />
        <Route path="/blog/:id" element={<BlogPage />} />

        {/* Admin public routes */}
        <Route element={<AdminPublicRoutes />}>
          <Route path="/admin" element={<Login />} />
        </Route>

        {/* Admin private routes */}
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/blog" element={<BlogForm />} />
          <Route path="/admin/bloglist" element={<BlogList />} />
          <Route path="/admin/course" element={<CourseForm />} />
          <Route path="/admin/courselist" element={<CourseList />} />
          <Route path="/admin/teacher" element={<TeacherForm />} />
          <Route path="/admin/teacherlist" element={<TeacherList />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
