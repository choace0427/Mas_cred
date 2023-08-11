import React from "react";

export default function Logos() {
  return (
    <>
      <div className="bg-white/90 md:px-40 px-10 py-12">
        <div style={{ backgroundImage: 'url("/world.png")' }}></div>
        <div className=" gap-5 grid lg:grid-cols-6  grid-cols-3 items-center bg-white py-[25px] px-[50px] drop-shadow-2xl rounded-xl">
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
          <div>
            <img alt="frame2" src="frame2.png" className="w-full" />
          </div>
          <div>
            <img alt="frame1" src="frame1.png" className="w-full" />
          </div>
          {/* <img alt="frame" src="Frame.png" /> */}
        </div>
      </div>
      <div></div>
    </>
  );
}
