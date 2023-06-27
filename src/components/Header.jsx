import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className=" bg-[#02175D] h-[90px] w-full flex items-center">
        <div className="flex justify-around items-center container mx-auto gap-x-20">
          <div className="">
            <a href=""><img src="/img/logo-alga.webp" alt="" className="w-full" /></a>
          </div>
          <div>
            <ul className="md:flex text-white gap-12">
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Service</Link>
              </li>
              <li>
                <Link to="/">Team</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
