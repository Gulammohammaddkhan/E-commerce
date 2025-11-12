import React, { useState } from "react";
import Button from "../Button/Button";
import { Routes, Route, Link, Links, useNavigate } from "react-router-dom";
import SignUp from "../SignUp/SignUp";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function userNameHandler(e) {
    setUserName(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    fetch("https://e-commerce-backened-4fih.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, password: password }),
    })
      .then((res) => {
        if (res.ok) {
          // localStorage.setItem("username", userName);
          navigate("/products");
        }

        return res.json();
      })
      .then((data) => {
        setError(data);
        console.log(data.username);
        localStorage.setItem("userName", data.username);
      })
      .catch((e) => console.log("hgfshgfshgfsghsf", e));
  }

  // try {
  //   const res = await fetch(
  //     "https://e-commerce-backened-4fih.onrender.com/login",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ username: userName, password: password }),
  //     }
  //   );
  //   console.log(res);

  //   if (res.ok) {
  //     navigate("/products");
  //     return;
  //   }
  //   const resData = await res.json();
  //   setError();
  // } catch (error) {
  //   console.log("error", error);
  // }

  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);
  //   navigate("/products");
  // })
  // .catch((error) => console.log("error!", error));

  return (
    <div className="h-screen bg-gradient-to-br from-blue-950 to-blue-500 flex justify-center items-center">
      <div className=" flex flex-col items-center bg-[#ededed] rounded-lg justify-center p-6  sm:p-10 shadow-2xl shadow-gray-800 w-[80%] sm:w-auto  h-[80%] sm:h-auto ">
        <h2 className="text-md sm:text-2xl font-semibold font-serif pb-2">
          Welcome,Login to your Account.
        </h2>
        <p className="text-md font-extralight text-gray-400 font-serif pb-6">
          Please enter your details
        </p>
        {error && (
          <p className="text-red-500 font-sans font-semibold">{error}</p>
        )}
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full flex-wrap "
        >
          <label className="text-md font-extralight  font-serif py-2">
            UserName
          </label>
          <input
            onChange={userNameHandler}
            type="text"
            className="border-2 rounded-md px-2 py-2 border-gray-400 outline-0"
            placeholder="entre your user name"
            value={userName}
            name="username"
          />
          <label className="text-md font-extralight  font-serif  py-2">
            Password
          </label>
          <input
            onChange={passwordHandler}
            type="password"
            className="border-2 rounded-md px-2 py-2 border-gray-400 outline-0 mb-4"
            placeholder="password..."
            value={password}
            name="password"
            required
          />

          <Button text=" Log-in" />
        </form>
        <div className="flex items-center justify-between gap-4 pt-2 text-sm font-serif text-gray-500">
          <div>New Customer?</div>
          <Link
            className="text-blue-700 font-semibold hover:scale-102"
            to="/signup"
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
