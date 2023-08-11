import React from "react";

export default function Service() {
  return (
    <div className="bg-[#C3C3C3]/13 md:px-36 px-10 md:py-20 py-10 text-center">
      <span className=" md:text-[55px] text-[30px] font-semibold">
        Nuestros Servicios
      </span>
      {/* <div className="md:flex justify-between text-start mt-10"> */}
      <div className="text-start grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div className=" rounded-[10px] bg-white h-[280px] p-4 flex flex-col justify-between">
          <img
            alt="work_1"
            src="workshop_1.png"
            className="w-[75px] h-[75px]"
          />
          <p className=" text-6 font-semibold">Talleres Online</p>
          <p className="text-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
        <div className=" rounded-[10px] bg-white h-[280px] p-4 flex flex-col justify-between">
          <img
            alt="influencer"
            src="influencer.png"
            className="w-[75px] h-[75px]"
          />
          <p className=" text-6 font-semibold">
            Asesorias <br /> Personalizadas
          </p>
          <p className="text-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
        <div className=" rounded-[10px] bg-white  h-[280px] p-4 flex flex-col justify-between">
          <img
            alt="presentation"
            src="presentation.png"
            className="w-[75px] h-[75px]"
          />
          <p className=" text-6 font-semibold">Conferencias</p>
          <p className="text-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
        <div className=" rounded-[10px] bg-white  h-[280px] p-4 flex flex-col justify-between">
          <img
            alt="consultation"
            src="consultation.png"
            className="w-[75px] h-[75px]"
          />
          <p className=" text-6 font-semibold">
            Asesorias Para <br /> Empresas
          </p>
          <p className="text-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
      </div>
    </div>
  );
}
