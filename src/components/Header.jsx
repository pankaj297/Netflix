import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex gap-4 justify-between shadow-lg  px-8 py-4 ">
        <div className="logo flex gap-2 items-center cursor-pointer">
          <img src="/favicon.ico" alt="" className="h-[20px] w-[20px]" />
          <h2 className="font-semibold">Netflix App</h2>
        </div>
        <ul className="links hidden xs:flex gap-4 ">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="https://github.com/AbbasGawali" target="_blank">
            <li>Github</li>
          </a>
          <a href="https://www.linkedin.com/in/abbasgawali/" target="_blank">
            <li>Linkedin</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
