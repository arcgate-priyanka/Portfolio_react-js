import React from "react";
import tailwind from "../assets/tailwind.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] bg-black mx-auto p-5" id='work'>
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-black">Check out some of my Projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div
          className="transform transition-transform duration-300 hover:scale-105 
            overflow-hidden shadow-lg shadow-[#040c16] group rounder-md flex justify-center items-center
            h-[200px] bg-cover relative">

          <img src={tailwind} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 
            overflow-hidden shadow-lg shadow-[#040c16] group rounder-md flex justify-center items-center
            h-[200px] bg-cover relative">

          <img src={tailwind} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 
            overflow-hidden shadow-lg shadow-[#040c16] group rounder-md flex justify-center items-center
            h-[200px] bg-cover relative">

          <img src={tailwind} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 
            overflow-hidden shadow-lg shadow-[#040c16] group rounder-md flex justify-center items-center
            h-[200px] bg-cover relative">

          <img src={tailwind} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 
            overflow-hidden shadow-lg shadow-[#040c16] group rounder-md flex justify-center items-center
            h-[200px] bg-cover relative">

          <img src={tailwind} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 
            overflow-hidden shadow-lg shadow-[#040c16] group rounder-md flex justify-center items-center
            h-[200px] bg-cover relative">

          <img src={tailwind} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-black tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
