import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import { CategoriesPage } from "../pages/CategoriesPage";
import ContactPage from "../pages/ContactPage";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/categories" element={<CategoriesPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/payments" element={<PaymentsPage />} />

        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
