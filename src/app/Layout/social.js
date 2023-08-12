import React from "react";

const tableData = [
  {
    feature: "Write the naming of the feature here.",
    maxcred: true,
    otro: true,
  },
  {
    feature: "Write the naming of the feature here.",
    maxcred: false,
    otro: false,
  },
  {
    feature: "Write the naming of the feature here.",
    maxcred: true,
    otro: true,
  },
  {
    feature: "Write the naming of the feature here.",
    maxcred: false,
    otro: false,
  },
  {
    feature: "Write the naming of the feature here.",
    maxcred: true,
    otro: true,
  },
  {
    feature: "Write the naming of the feature here.",
    maxcred: false,
    otro: false,
  },
  {
    feature: "Write the naming of the feature here.",
    maxcred: true,
    otro: true,
  },
  {
    feature: "Write the naming of the feature here.",
    maxcred: false,
    otro: false,
  },
];

export default function Social() {
  return (
    <div className="mx-auto md:px-36 px-10 text-center py-20">
      <span className=" md:text-[55px] text-[30px] font-semibold">
        Mascred Social vs Otros
      </span>
      <table className="table-fixed border-collapse border border-slate-400 text-center w-full mt-10">
        <thead className="bg-gradient-to-b from-blue-800 via-blue-900 to-blue-800 text-white h-[130px]">
          <tr>
            <th className="border border-slate-300 md:text-[30px] text-[14px] font-semibold">
              Name Of The Feature
            </th>
            <th className="border border-slate-300">
              <div className="flex justify-center">
                <img alt="tilte" src="mascred_logo.png" />
              </div>
            </th>
            <th className="border border-slate-300">
              <div className="flex justify-center">
                <img alt="tilte" src="otro_logo.png" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr className=" h-[130px]" key={index}>
                <td className="border border-slate-300">{item.feature}</td>
                <td className="border border-slate-300">
                  {item.maxcred ? <Checkfeature /> : <UnCheckfeature />}
                </td>
                <td className="border border-slate-300 ...">
                  {item.otro ? <Checkfeature /> : <UnCheckfeature />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function Checkfeature() {
  return (
    <>
      <div className=" bg-[#F0F0F0] border-[#D3D3D3] rounded-full p-2 inline-flex gap-4 justify-center items-center border-2">
        <img alt="check" src="Check.png" />
        <span className="text-4 font-medium md:block hidden">
          Have this feature
        </span>
      </div>
    </>
  );
}

export function UnCheckfeature() {
  return (
    <>
      <div className="bg-[#F0F0F0] border-[#D3D3D3] rounded-full p-2 inline-flex gap-4 justify-center items-center border-2">
        <img alt="check" src="unCheck.png" />
        <span className="text-4 font-medium hidden md:block">
          Don’t have this feature
        </span>
      </div>
    </>
  );
}
