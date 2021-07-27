import React from "react";

const CustomButton = ({ title, activeClass, _callback }) => {
  return (
    <button className={activeClass} onClick={_callback}>
      {title}
    </button>
  );
};

export default CustomButton;
