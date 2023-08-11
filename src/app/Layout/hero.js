import React from "react";

export default function Hero() {
  return (
    <>
      <div className="lg:flex block md:pl-40 px-10 bg-[#C3C3C3]/13">
        <div className="">
          <span className="md:text-[60px] text-[30px] font-bold">
            La educacion financiera es una de las grandes oportunidades en
            mexico.
          </span>

          <div className="flex flex-col gap-[15px]">
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
          </div>
        </div>
        <img alt="hero" src="hero.png" />
      </div>
    </>
  );
}
