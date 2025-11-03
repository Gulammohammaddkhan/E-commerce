import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <SignUp
        formData={formData}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        clickHandler={clickHandler}
        /> */}
      {/* <Products /> */}
    </>
  );
}

export default App;
