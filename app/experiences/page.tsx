import { faGithub, faReadme } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faBuildingColumns,
  faGlobe,
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-screen h-screen desktop-only">
        <div className="bg-black w-full h-23 border-b border-gray-500 flex flex-col justify-end px-2 gap-3">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-full flex items-center justify-center mt-1 ml-4">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <a href="https://github.com/navaneethk99">
              <p className="font-bold text-md">navaneethk99</p>
            </a>
          </div>

          <div className="w-full h-8 flex gap-3 text-sm">
            <a href="/" className="w-fit h-full px-3 flex gap-3 items-center">
              <FontAwesomeIcon icon={faReadme} className="w-4 text-gray-400" />{" "}
              Overview
            </a>
            <a
              href="/repositories/codigo"
              className="w-fit h-full px-3 flex gap-3 items-center"
            >
              <FontAwesomeIcon icon={faBook} className="w-3 text-gray-400" />{" "}
              Repositories
            </a>
            <a
              href="/experiences"
              className="w-fit h-full px-3 font-semibold border-b-2 border-orange-400 flex gap-2 items-center"
            >
              <FontAwesomeIcon icon={faGlobe} className="w-4 text-gray-400" />{" "}
              Experience
            </a>
          </div>
        </div>
        <div className="w-full h-full bg-[#0D1117] flex justify-center items-center flex-col">
          <img
            className="w-150"
            src="/images/vecteezy_404-error-in-webpage-template_19633963.png"
          />
          <h1 className="mt-5 text-5xl font-bold">Coming Soon!</h1>
        </div>
      </div>

      {/* -------------- MOBILE ONLY VIEW -------------- */}

      <div className="w-screen h-screen bg-[#0D1117] mobile-only overflow-x-hidden">
        <div className="bg-black flex justify-center items-center text-xl h-15 border-b-1 border-gray-500 gap-3">
          <FontAwesomeIcon icon={faGithub} className="w-8" />
          <p className="font-semibold">navaneethk99</p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-10">
          <img
            className="w-150"
            src="/images/vecteezy_404-error-in-webpage-template_19633963.png"
          />
          <h1 className="mt-5 text-3xl font-bold">Coming Soon!</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
