import React, { useState } from "react";
import Button from "../Button/Button";
import { Routes, Route, Link, Links } from "react-router-dom";
import SignIn from "../SignUp/SignUp";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function userNameHandler(e) {
    setUserName(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function submitHandler() {
    e.preventDefault();
    fetch("https://e-commerce-backened-4fih.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, password: password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-950 to-blue-500 flex justify-center items-center">
      <div className=" flex flex-col items-center bg-[#ededed] rounded-lg justify-center p-6  sm:p-10 shadow-2xl shadow-gray-800 w-[80%] sm:w-auto  h-[80%] sm:h-auto ">
        <h2 className="text-md sm:text-2xl font-semibold font-serif pb-2">
          Welcome,Login to your Account.
        </h2>
        <p className="text-md font-extralight text-gray-400 font-serif pb-6">
          Please enter your details
        </p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full flex-wrap "
        >
          <label className="text-md font-extralight  font-serif py-2">
            UserName
          </label>
          <input
            onChange={userNameHandler}
            type="mail"
            className="border-2 rounded-md px-2 py-2 border-gray-400 outline-0"
            placeholder="mail..."
            // value={formData.mail}
            name="mail"
          />
          <label className="text-md font-extralight  font-serif  py-2">
            Password
          </label>
          <input
            onChange={passwordHandler}
            type="password"
            className="border-2 rounded-md px-2 py-2 border-gray-400 outline-0 mb-4"
            placeholder="password..."
            // value={formData.password}
            name="password"
            required
          />

          <Button
            text=" Log-in"
            clickHandler={() => clickHandler("login")}
            // formData={formData}
          />
        </form>
        <div className="flex items-center justify-between gap-4 pt-2 text-sm font-serif text-gray-500">
          <div>New Customer?</div>
          <Link
            className="text-blue-700 font-semibold hover:scale-102"
            to="/signin"
            replace={true}
          >
            Sign-up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
