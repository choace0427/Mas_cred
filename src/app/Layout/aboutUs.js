import React from "react";
import bg_us from "../../../public/bg_1.png";
import bg_image from "../../../public/bg_2.png";

const developer = [
  {
    image: "Michael.png",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d",
    name: "Michael",
    country: "USA",
  },
  {
    image: "John_Smith.png",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d",
    name: "John Smith",
    country: "USA",
  },
  {
    image: "Adam_K..png",
    introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d",
    name: "Adam K.",
    country: "USA",
  },
];

export default function AboutUs() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg_us.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#6AAD32",
        }}
        className="py-20 flex items-center text-white"
      >
        <div className="md:px-36 px-10">
          <img
            alt="about_us"
            src="aboutus.png"
            className="md:mb-[-85px] w-[80px] mb-[-38px] md:ml-[40px] ml-[20px] md:w-[160px]"
          />
          <div className="bg-[#00306F] flex justify-between md:py-36 py-10 md:pl-20 px-5">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
              <div className=" h-[350px]  flex flex-col text-white justify-center">
                <p className="text-[35px] text-white font">
                  What our client says about us
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut aliquam purus sit amet luctus. Arcu non odio euismod
                  lacinia at quis risus sed vulputate.
                </p>
              </div>
              {developer.map((item, index) => {
                return (
                  <div className=" rounded-xl  bg-white" key={index}>
                    <img
                      alt="michael"
                      src={item.image}
                      className=" rounded-t-[11px] w-full"
                    />
                    <img
                      alt="about_us"
                      src="aboutus.png"
                      className="w-[42px] h-[42px] mt-[-20px] ml-[30px]"
                    />
                    <div className="px-4 pb-8 pt-4 flex flex-col justify-between">
                      <p className="text-[#232323] text-[14px] font-medium">
                        {item.introduction}
                      </p>
                      <div>
                        <p className="text-4 font-semibold text-black">
                          {item.name}
                        </p>
                        <p className="text-4 font-medium text-[#6D6D6D]">
                          {item.country}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg_image.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#6AAD32",
        }}
        className="md:px-20 px-10 md:py-20 py-10 md:text-[55px] text-[26px] text-white flex justify-center"
      >
        <span>Conoce nuestras asesorías personalizadas</span>
      </div>
    </>
  );
}
