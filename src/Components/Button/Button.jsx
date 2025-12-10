import React, { useState } from "react";

function Button({
  text,
  clickHandler,
  backGroundColor,
  icon,
  display,
  flexDirection,
  width,
  justifyContent,
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
        className={` px-6 py-3 items-center gap-2 sm:gap-1 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[15px] cursor-pointer hover:scale-101 transition-all rounded-md text-white font-semibold font-serif bg-blue-950`} // disabled={disabledHandler}
        style={{
          backgroundColor: backGroundColor,
          display: display,
          flexDirection: flexDirection,
          width: width,
          justifyContent: justifyContent,
        }}
      >
        {icon && icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
