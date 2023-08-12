import React from "react";
import bg_frame from "../../../public/frame.png";

export default function Logos() {
  return (
    <>
      <div className="bg-white/90 md:px-40 px-10 py-12">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className=" gap-5 grid lg:grid-cols-6  grid-cols-3 items-center bg-white py-[25px] px-[50px] drop-shadow-2xl rounded-xl"
        >
          <div className="flex justify-center">
            <img alt="fprbes_logo" src="fprbes_logo.png" />
          </div>
          <div className="flex justify-center">
            <img alt="vogue_logo" src="vogue_logo.png" />
          </div>

          <div className="flex justify-center">
            <img alt="excelsior_logo" src="excelsior_logo.png" />
          </div>
          <div className="flex justify-center">
            <img alt="gq_logo" src="gq_logo.png" />
          </div>
          <div className="flex justify-center">
            <img alt="groupo_logo" src="groupo_logo.png" />
          </div>
          <div className="flex justify-center">
            <img alt="moi_logo" src="moi_logo.png" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 py-20 gap-6">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{
              backgroundImage: `url(${bg_frame.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "#6AAD32",
              color: "white",
            }}
            className="p-10"
          >
            Mascred educacion una plataforma que busca dar informacion
            financiera de diferentes personas del medi1 etapao que puedan dar el
            como ellos manejan sus finanzas.
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{
              backgroundImage: `url(${bg_frame.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "#6AAD32",
              color: "white",
            }}
            className="p-10"
          >
            Financiera social, creditos a tasas mucho mas accesibles cerca de un
            18% a personas que tienen necesidad
          </div>
          {/* <img alt="frame" src="Frame.png" /> */}
        </div>
      </div>
      <div></div>
    </>
  );
}
