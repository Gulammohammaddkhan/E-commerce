import React, { useState } from "react";

function Button({
  text,
  clickHandler,
  backGroundColor,
  icon,
  display,
  flexDirection,
}) {
  // const [btnDisabled, setBtnDisabled] = useState(false);

  // function disabledHandler() {
  //   if (formData.mail === "" && formData.password === "") {
  //     setBtnDisabled(true);
  //   } else if (
  //     formData.signupmail === "" &&
  //     formData.signupcontact === "" &&
  //     formData.signupusername === "" &&
  //     formData.signuppassword === ""
  //   ) {
  //     setBtnDisabled(true);
  //   } else {
  //     alert("fill the form");
  //   }
  // }

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={clickHandler}
        className={` w-full px-6 py-2 items-center gap-2 cursor-pointer hover:scale-101 transition-all rounded-md text-white font-semibold font-serif bg-blue-950`} // disabled={disabledHandler}
        style={{
          backgroundColor: backGroundColor,
          display: display,
          flexDirection: flexDirection,
        }}
      >
        {icon && icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
