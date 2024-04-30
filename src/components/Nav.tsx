import React, { useState } from "react";
import { menu } from "../data/constants";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Nav = () => {
    const [search, setSearch] = useState("");
  return (
    <>
      <div className="topad w-screen text-black/50 bg-[#fbf8f6] flex items-center justify-center py-3">
        Shop wholesale online from over 1,00,000 brands.{" "}
        <span className="underline">Sign up</span>
      </div>
      <nav className="w-screen flex flex-col sticky left-0 top-0 bg-white z-[1000]">
        <div className="main flex gap-6 px-5 py-3 text-center justify-center">
          <img
            src="https://cdn.faire.com/static/logo.svg"
            alt=""
            className="logo"
          />
          <div className="search flex gap-1 rounded-full flex-1 border-[1px] border-black/60 py-1 px-3 pr-4 items-center">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent px-2 py-1 outline-none flex-1"
              placeholder="Search products or brands"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <span className="text-2xl ">
              {!search ? <IoSearchOutline /> : <IoClose />}
            </span>
          </div>
          <div className="lang flex gap-1 items-center text-black/70 hover:text-black/90">
            <TbWorld className="text-2xl text-black/50" />
            EN-US
          </div>
          <div className="lang flex gap-1 items-center text-black/70 hover:text-black/90">
            Blog
          </div>
          <div className="lang flex gap-1 items-center text-black/70 hover:text-black/90">
            Sell on Faire
          </div>
          <div className="lang flex gap-1 items-center text-black/70 hover:text-black/90">
            Sign In
          </div>
          <div className="signup px-3.5 pb-0.5 bg-black text-white flex items-center justify-center">
            Sign Up to Shop
          </div>
        </div>
        <div className="menu flex items-center justify-center gap-2.5 py-2 px-3">
          {menu.map((item, ind) => {
            return (
              <p className="relative inline-block" key={ind}>
                <span className="text-black hover:text-black/80 hover:after:absolute hover:after:inset-x-0 hover:after:bottom-0 hover:after:block hover:after:h-px hover:after:bg-black/80 hover:after:content-[''] hover:after:transform hover:after:translate-y-1 hover:after:transition-transform hover:after:duration-300">
                  {item}
                </span>
              </p>
              // <div key={ind} className="text-black/70 hover:text-black/90">
              //   {item}
              // </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
