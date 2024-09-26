import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

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

// Utils imports (keep these as normal imports)
import AdminPublicRoutes from "../utils/AdminPublicRoutes";
import AdminPrivateRoutes from "../utils/AdminPrivateRoutes";

export const MainRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
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
        </Route>
      </Routes>
    </Suspense>
  );
};
