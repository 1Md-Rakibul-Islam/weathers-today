import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import useScrollPosition from "../Hooks/useScrollPosition";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";

const NavBar = () => {

  const scrolled = useScrollPosition(50);

  const { user, isAuthenticated, isLoading } = useAuth0();

    const menuItems = <React.Fragment>
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 "><Link to={'/'}>Home</Link></li>
        {/* <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 "><a href="#skills">Skills</a></li> */}
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 "><Link to={'/portfolio'}>Portfolio</Link></li>
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 "><Link to={'/blogs'}>Blogs</Link></li>
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 "><Link to={'/contractUs'}>Contract Us</Link></li>
        <li className="font-normal font-poppins text-[16px]  cursor-pointer  mr-6 hover:text-purple-500 "><Link to={'/about'}>About</Link></li>
    </React.Fragment>

    if (isLoading) {
        return <div>Loading ...</div>;
    }

  return (
    <nav className="relative w-full mx-auto flex justify-center">
      <div className='fixed w-full px-5 md:border-b md:border-gray-200/30 md:bg-white/20 navmorphism md:backdrop-blur-2xl bg-white/0 z-30 transition-all '>
        <div className=" py-4 ">
          <div className="flex justify-between items-center gap-4 text-xl text-white">
             <div>
                {
                    isAuthenticated && <>
                        <div className="flex items-center gap-x-5">
                            <img class="w-12 h-12 rounded-full ring-2 ring-black" src={user?.picture} alt="Profile" />
                            <span>Wellcome, {user?.name}</span>
                        </div></>
                }
             </div>
             <div className="flex justify-end gap-5">
                <LoginButton /> 
                <LogoutButton />
             </div>
          </div>
          
          {/* <ul
            className={`list-none md:flex hidden justify-end items-center flex-1 text-white`}
          >
            {menuItems}
          </ul> */}
        </div>
      </div>
    </nav>

  );
};

export default NavBar;