import React from "react";
import profileimg from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70hv] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={profileimg} alt="profile" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white sm:text-xl lg:text-6xl font-extrabold">
          <span className="primary-color">I'm</span> <br />
          <TypeAnimation
            sequence={["Frontend Dev", 100, "Web Designer", 100]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white sm-text-lg my-6 lg:text-xl">
          My name is Priyanka Mishra and I have 1+ years experience as a
          Frontend developer.
        </p>

        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4
          bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
          text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
