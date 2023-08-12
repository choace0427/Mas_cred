import React from "react";
import bg_world from "../../../public/world.png";

const data = [
  {
    img: "live_ico.svg",
    number: 567,
    type: "Classes Live",
    color: "#FF640B",
  },
  {
    img: "online_ico.svg",
    number: 34,
    type: "Cursos Online",
    color: "#FEB800",
  },
  {
    img: "consulting_ico.svg",
    number: 2000,
    type: "Asesorias",
    color: "#06D6B4",
  },
  {
    img: "student_ico.svg",
    number: 2147,
    type: "Alumnos",
    color: "#A6A7F6",
  },
];

export default function Numbers() {
  return (
    <div className="bg-white md:px-36 px-10 py-10">
      <div className="grid lg:grid-cols-6 grid-cols-4 gap-5">
        <div
          data-aos="fade-right"
          style={{
            backgroundImage: `url(${bg_world.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "#6AAD32",
          }}
          className=" lg:col-span-2 col-span-4 md:px-5 px-5 md:py-0 h-[180px] flex items-center text-white"
        >
          <span className="md:text-[30px] text-[20px]">
            CONOCE NUESTROS NÚMEROS
          </span>
        </div>
        {data.map((item, index) => {
          return (
            <div
              data-aos="fade-left"
              key={index}
              className=" lg:col-span-1 col-span-2 h-[180px] px-30 bg-white drop-shadow-2xl flex flex-col justify-center items-center rounded-[15px]"
            >
              <img
                alt="live_ico"
                src={item.img}
                className="w-[55px] h-[55px]"
              />
              <p className="text-[35px] font-normal">{item.number}</p>
              <p className="text-[18px] text-[#575757] font-medium">
                {item.type}
              </p>
              <div
                style={{ background: item.color }}
                className="h-[3px] w-[60px] rounded-2xl flex justify-center absolute bottom-[-2px]"
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
