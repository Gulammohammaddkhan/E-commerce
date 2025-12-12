import React, { useState } from "react";
import Button from "../Button/Button";
import { Routes, Route, Link, data, useNavigate } from "react-router-dom";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [massege, setMassege] = useState("");

  const navigate = useNavigate();

  function userNameHandler(e) {
    // const { name, value } = e.target;
    // setUserName((prev) => ({ ...prev, [name]: value }));
    // console.log(userName);
    console.log(e.target.value);
    setUserName(e.target.value);
  }

  function passwordHandler(e) {
    console.log(e.target.value);
    // const { name, value } = e.target;
    // setUserPassword((prev) => ({ ...prev, [name]: value }));
    // console.log(userPassword);
    setUserPassword(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    fetch("https://e-commerce-backened-4fih.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, password: userPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("signupData", data);
        setMassege(data);
        // logic to go to login page
        navigate("/login");
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className=" h-screen bg-gradient-to-br from-blue-950 to-blue-500 flex justify-center items-center">
      <div className=" flex flex-col items-center bg-[#ededed] rounded-lg justify-center  p-6  sm:p-10 shadow-2xl shadow-gray-800 w-[80%] sm:w-[40%] h-[400px] ">
        <h2 className="text-md sm:text-2xl font-semibold font-serif pb-1">
          Sign up.
        </h2>
        <p className="text-sm sm:text-md font-extralight text-gray-400 font-serif pb-2">
          Create an account
        </p>
        {/* <p>{massege}</p> */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full flex-wrap "
        >
          <label className="text-sm sm:text-md font-extralight  font-serif py-1">
            Username
          </label>
          <input
            onChange={userNameHandler}
            type="text"
            className="border-2 rounded-md px-2 py-1 border-gray-400 outline-0"
            placeholder="Name..."
            name="username"
            // value={userName.username}
            value={userName}
            required
          />
          <label className="text-sm sm:text-md font-extralight  font-serif  py-1">
            Password
          </label>
          <input
            onChange={passwordHandler}
            type="password"
            className="border-2 rounded-md px-2 py-1 border-gray-400 outline-0 mb-4"
            placeholder="password..."
            name="password"
            // value={userPassword.password}
            value={userPassword}
            required
          />
          <Button text={"Sign up"} />
        </form>
      </div>
      <div>to delete</div>
    </div>
  );
}

export default SignUp;
