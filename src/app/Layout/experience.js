import React from "react";

export default function Experience() {
  return (
    <div className="bg-blue">
      <div className="lg:flex block bg-[#2E62A5] md:p-36 p-10 text-white gap-20">
        <img alt="experince_logo" src="experience.png" />
        <div className="flex flex-col items-start justify-center">
          <p className=" md:text-[55px] text-[30px] font-semibold ">
            We are working with 15 years Experience
          </p>
          <p className="text-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            aliquam purus sit amet luctus. Arcu non odio euismod lacinia at quis
            risus sed vulputate.
          </p>

          <button className=" text-white font-normal text-4 bg-[#6AAD32] px-[41px] py-[25px] mt-10">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
