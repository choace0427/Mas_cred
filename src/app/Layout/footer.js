import React from "react";

export default function Footer() {
  return (
    <div className="md:pt-24 pb-10 md:px-36 px-10">
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:space-y-0 gap-4 mt-5">
        <div className="flex flex-col justify-between">
          <ul className="list-none space-y-2 text-black/50">
            <li className="text-black">Product</li>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
          <img
            alt="logo"
            src="mascred_logo.png"
            className="md:block hidden w-[200px]"
          />
        </div>
        <div>
          <ul className="list-none space-y-2 text-black/50">
            <li className="text-black">Information</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="md:col-span-1 col-span-2">
          <ul className="list-none space-y-2 text-black/50">
            <li className="text-black">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Mascred Social</li>
          </ul>
        </div>
        <div className="bg-[#203C86]/5 p-10 space-y-4 lg:w-[300px] md:w-[280px] w-[300px]">
          <p>Subscribe</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <button className="bg-[#2E62A5] rounded-r-lg px-[15px]">
              <img alt="submit" src="arrows_ico.png" />
            </button>
          </div>
          <p>
            Hello, we are Mascred Social. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex md:flex-row flex-col gap-5 justify-end items-center mb-3">
        <div className=" space-x-8 flex justify-center w-full">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
        <div className="md:space-x-3 space-x-8 flex">
          <button>
            <img alt="Linkedin" src="Linkedin.png" />
          </button>
          <button>
            <img alt="Facebook" src="Facebook.png" />
          </button>
          <button>
            <img alt="Twitter" src="Twitter.png" />
          </button>
        </div>
      </div>
    </div>
  );
}
