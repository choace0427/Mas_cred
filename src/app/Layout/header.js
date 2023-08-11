import React from "react";
import bg_logo from "../../../public/logo_shape.png";

export default function Header() {
  return (
    <>
      {/* <img alt="logo_shape" src="logo _shape.png" /> */}
      <div
        style={{
          backgroundImage: `url(${bg_logo.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className="bg-[#C3C3C3]/13 h-[175px]"
      >
        <div className="flex space-x-2 text-[24px] pl-24 pt-6">
          <img src="logo.png" alt="logo" />
          <div className="flex items-center">
            <span className="text-[#2E62A5] ">MAS</span>
            <span className="text-[#6AAD32]">CRED </span>
          </div>
        </div>
      </div>
    </>
  );
}
