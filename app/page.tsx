import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-red-500 w-screen h-screen">
        <div className="bg-black w-full h-15 border-b-1 border-gray-500">
          navaneethk99
        </div>
        <div className="flex h-full w-full">
          <div className="bg-gray-900 w-120 h-full flex flex-col items-center">
            <div className="w-75 h-75 rounded-full bg-white mt-10"></div>
            <div className="w-full">
              <h1 className="mt-5 ml-10 text-xl text-gray-400">navaneethk99</h1>
              <p className="mt-2 ml-10 text-sm text-gray-500 flex">
                <b>
                  <p className="text-white mr-1">1</p>
                </b>{" "}
                follower{" "}
                <b>
                  <p className="text-white mr-1 ml-1">· 3</p>
                </b>{" "}
                following
              </p>
              <p className="ml-10 text-sm mt-5 font-bold">
                Vellore Institute of Technology
              </p>
              <p className="ml-10 text-sm mt-1 font-bold">Vellore</p>
              <p className="ml-10 text-sm mt-1 font-bold">
                BTech Computer Science Engineering
              </p>
              <p className="ml-10 text-xs text-gray-500">
                Artificial Intelligence and Data Engineering
              </p>
              <div className="w-full border-t-1 border-gray-700 ml-10 mt-5">
                <h1 className="mt-5 font-bold text-lg">Organisations</h1>
                <div className="mt-2 w-full flex gap-2">
                  <div className="w-10 h-10 rounded-md bg-white">logo</div>
                  <div>
                    <p className="text-sm">
                      Association for Computing Machinery
                    </p>
                    <p className="font-bold">May 2025 - Present</p>
                  </div>
                </div>
                <div className="mt-2 w-full flex gap-2">
                  <div className="w-10 h-10 rounded-md bg-white">logo</div>
                  <div>
                    <p className="text-sm">
                      Stratign (Internship) - Software Developer
                    </p>
                    <p className="font-bold">June 2025 - July 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 w-full h-full">popular repositories</div>
        </div>
      </div>
    </>
  );
};

export default page;
