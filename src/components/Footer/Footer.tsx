import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-4 text-white ">
      <div className="w-11/12 gap-3  m-auto flex flex-col  items-center justify-between md:grid md:grid-cols-3 md:w-full md:px-4 lg:px-0  lg:w-4/5 ">
        <h2 className=" truncate  flex items-center gap-2 text-lg md:mb-0">
          Developed using
          <b className="text-main flex  items-center text-2xl">
            Next.js &nbsp; <TbBrandNextjs className="text-blue-400" />
          </b>
        </h2>
        <h2 className="flex-1   text-center">
          Copyright © 2022 <b className="text-main">Uzair Zahoor</b>
        </h2>
        <ul className="flex justify-end items-center gap-4">
          <li className=" rounded-full custom-shadow">
            <a
              href="https://github.com/niaziiii"
              className=" text-lg  cursor-pointer text-white "
            >
              <AiFillGithub />
            </a>
          </li>
          <li className=" rounded-full custom-shadow">
            <a
              href="https://twitter.com/MuhabatNiazi"
              className=" text-lg  cursor-pointer text-white "
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className=" rounded-full custom-shadow">
            <a
              href="https://www.linkedin.com/in/muhabat-khan-niazi-926854192/"
              className=" text-lg  cursor-pointer text-white "
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li className=" rounded-full custom-shadow">
            <a
              href="tel:923083909131"
              className=" text-lg cursor-pointer text-white"
            >
              <AiOutlineWhatsApp />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
