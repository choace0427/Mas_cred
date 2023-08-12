import React from "react";

export default function Experience() {
  return (
    <div className="bg-blue" id="experience">
      {/* <div className="lg:flex block bg-[#2E62A5] md:p-36 p-10 text-white gap-20"> */}
      <div className="grid md:grid-cols-2 grid-cols-1 bg-[#2E62A5] md:p-36 p-10 text-white gap-20">
        <img
          data-aos="fade-right"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
          alt="experince_logo"
          src="experience.png"
        />
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col items-start justify-center"
        >
          <p className=" lg:text-[55px] md:text-[35px] text-[30px] font-semibold ">
            Más de 15 años de experiencia
          </p>
          <p className="text-4 font-normal">
            rabajamos con mexicanos y mexicanas de todos los estratos sociales
            para ayudarlos a invertir su dinero de una forma más inteligente,
            consiente e informada. ¨Que el dinero trabaje para tí y no al
            revés.¨ <br /> José N. CTA.
          </p>

          <button className=" text-white font-normal text-4 bg-[#6AAD32] px-[41px] py-[25px] mt-10">
            VER TESTIMONIOS
          </button>
        </div>
      </div>
    </div>
  );
}
