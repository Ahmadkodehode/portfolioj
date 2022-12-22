import React from "react";
function Header() {
  return (
    <header
      className="relative
    w-full
    flex flex-wrap
    items-center
    justify-end
   
  

    
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg "
    >
      <button className="m-4 hover:text-gray-700">Projects</button>
      <button className="m-4 hover:text-gray-700">About Me</button>
      <button className="m-4 hover:text-gray-700">Home</button>
    </header>
  );
}

export default Header;
