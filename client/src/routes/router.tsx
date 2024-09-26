import React from "react";
import { Route, Routes } from "react-router-dom";
// Normal imports
import Home from "../Pages/User/Home";
import AboutUs from "../Pages/User/AboutUs";
import Yoga from "../Pages/User/Yoga";
import Meditation from "../Pages/User/Meditation";
import Courses from "../Pages/User/Courses";
import Gallery from "../Pages/User/Gallery";
import Blogs from "../Pages/User/Blog";
import Contact from "../Pages/User/Contact";
import BeginnerYoga from "../Pages/User/BeginnerYoga";
import AdminPublicRoutes from "../utils/AdminPublicRoutes";
import AdminPrivateRoutes from "../utils/AdminPrivateRoutes";
import BlogPage from "../Pages/User/BlogPage";
import Login from "../Pages/Admin/Login";
import Dashboard from "../Pages/Admin/Dashboard";
import BlogForm from "../Pages/Admin/AdminBlog";
import BlogList from "../Pages/Admin/BlogList";
import CourseForm from "../Pages/Admin/AdminCourse";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/meditation" element={<Meditation />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/beginner_yoga" element={<BeginnerYoga />} /> */}
      {/* <Route path="/blog_page" element={<BlogPage />} /> */}
      <Route path="/course/:id" element={<BeginnerYoga />} />
      <Route path="/blog/:id" element={<BlogPage />} />




      <Route element={<AdminPublicRoutes />}>
            <Route path="/admin" element={<Login />} />
          </Route>
          {/* admin privte routes */}
          <Route element={<AdminPrivateRoutes />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
           <Route path="/admin/blog" element={<BlogForm />} />
            <Route path="/admin/bloglist" element={<BlogList />} />
            <Route path="/admin/course" element={<CourseForm />} />

           {/* <Route path="/admin/bloglist/edit/:id" element={<BlogEdit />} />  */}
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
  );
};
