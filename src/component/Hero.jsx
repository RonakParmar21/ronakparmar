import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import reactLogo from "../assets/react.svg";
import javaLogo from "../assets/java.svg";
import tailwind from "../assets/tailwindCSS.svg";
import hero from "../assets/hero/hero.png";
import resume from "/Ronak Parmar.pdf";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Ronak <span className="text-[#488482]">Parmar</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React, Java and
              modern web technologies. I love creating beautiful and functional
              website that solve real world problems.
            </p>
            <a
              href={resume}
              target="_blank"
              className="bg-[#378785] text-white px-3 py-2 w-max rounded-md"
            >
              Download CV
            </a>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[90vh] h-96" />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={javaLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:hidden flex-col gap-6 rounded-full">
        <img src={facebook} alt="" className="w-20" />
        <img src={instagram} alt="" className="w-20" />
        <img src={twitter} alt="" className="w-20" />
        <img src={linkedin} alt="" className="w-20" />
      </div>
    </section>
  );
};

export default Hero;
