import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className=" bg-[#02175D] h-[90px] w-full flex items-center">
        <div className="flex justify-around items-center container mx-auto gap-x-20">
          <div className="">
            <Link to="/"><img src="/img/logo-alga.webp" alt="" className="w-full" /></Link>
          </div>
          <div>
            <ul className="md:flex text-white gap-12">
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
