import React from "react";
import { Link, animateScroll } from "react-scroll";

export default function Hero() {
  return (
    <>
      {/* <div className="lg:flex block md:pl-40 px-10 bg-[#C3C3C3]/13"> */}
      <div className=" grid md:grid-cols-2 grid-cols-1 md:pl-40 px-10 bg-[#C3C3C3]/13">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex flex-col md:justify-around mb-20"
        >
          <span className="lg:text-[55px] md:text-[35px] text-[30px] font-bold">
            Pioneros en la educación financiera en México
            <br />
            {/* CTA. */}
          </span>

          {/* <div className="flex flex-col gap-[15px]">
            <div className="flex gap-5">
              <img
                alt="mark"
                src="mark.png"
                className=" w-[10px] h-[10px] mt-2"
              />
              <span>
                En 2020 en mexico habia menos de 250 mil cuentas de inversion en
                un pais de 120 millones. ( menos del .20 de la poblacion)
              </span>
            </div>
            <div className="flex gap-5">
              <img
                alt="mark"
                src="mark.png"
                className=" w-[10px] h-[10px] mt-2"
              />
              <span>250,000 millones dls en los bancos a tasa 0.</span>
            </div>
            <div className="flex gap-5">
              <img
                alt="mark"
                src="mark.png"
                className=" w-[10px] h-[10px] mt-2"
              />
              <span>
                En Mexico el 58.6% de la poblacion ahorra activamente.
              </span>
            </div>
          </div> */}
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className=" text-white font-normal text-4 bg-[#6AAD32] px-[41px] py-[25px] mt-10">
              CONOCER MÁS
            </button>
          </Link>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          alt="hero"
          src="hero.png"
          className=""
        />
      </div>
    </>
  );
}
