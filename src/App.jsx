import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import CatergoryProduct from "./Components/Category/CategoryProduct";
import Category from "./Components/Category/Category";
import CategoryProduct from "./Components/Category/CategoryProduct";
import Cart from "./Components/Cart/Cart";

function App() {
  const location = useLocation();

  console.log("location", location);

  const routestobehidden = ["/login", "/signup"];

  let isNavbarHidden = routestobehidden.includes(location.pathname);

  return (
    <>
      {/* {location.pathname !== "/login" && <Navbar />} */}
      {!isNavbarHidden && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route
          path="/products/category/:category"
          element={<CatergoryProduct />}
        /> */}
        <Route
          path="/products/category/:category"
          element={<CategoryProduct />}
        />
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
