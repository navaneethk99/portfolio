import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="bg-red-500 w-screen h-screen">
        {/* Top Bar */}
        <div className="bg-black w-full h-15 border-b border-gray-500 flex items-center px-2 gap-3">
          <div className="w-10 h-full flex items-center justify-center mt-1">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <a href="https://github.com/navaneethk99">
            <p className="font-bold text-md">navaneethk99</p>
          </a>
        </div>

        <div className="flex h-full w-full">
          {/* Left Sidebar */}
          <div className="bg-[#0D1117] w-120 h-full flex flex-col items-center">
            <div className="w-75 h-75 rounded-full bg-white mt-10">
              <img
                src="/images/88372623.jpeg"
                className="w-full h-full rounded-full"
                alt="profile"
              />
            </div>

            <div className="w-full">
              <h1 className="mt-5 ml-10 text-xl text-gray-400">navaneethk99</h1>
              <div className="mt-2 ml-10 text-sm text-gray-500 flex">
                <b>
                  <p className="text-white mr-1">1</p>
                </b>{" "}
                follower{" "}
                <b>
                  <p className="text-white mr-1 ml-1">· 3</p>
                </b>{" "}
                following
              </div>

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

              {/* Organisations Section */}
              <div className="w-full border-t border-gray-700 ml-10 mt-5">
                <h1 className="mt-5 font-bold text-lg">Organisations</h1>

                <div className="mt-2 w-full flex gap-2">
                  <div className="w-10 h-10 rounded-md">
                    <img
                      src="/images/1_gpyPa2lnqhHz5GeoUq-vgQ.png"
                      className="w-full h-full rounded-md"
                    ></img>
                  </div>
                  <div>
                    <p className="text-sm">
                      Association for Computing Machinery
                    </p>
                    <p className="font-bold">May 2025 - Present</p>
                  </div>
                </div>

                <div className="mt-2 w-full flex gap-2">
                  <div className="w-10 h-10 rounded-md">
                    <img
                      src="/images/stratign_logo.jpeg"
                      className="w-full h-full rounded-md"
                    ></img>
                  </div>
                  <div>
                    <p className="text-sm">
                      Stratign (Internship) - Software Developer
                    </p>
                    <p className="font-bold">June 2025 - July 2025</p>
                  </div>
                </div>

                <div className="mt-2 w-full flex gap-2">
                  <div className="w-10 h-10 rounded-md bg-white p-1">
                    <img
                      src="/images/Vellore_Institute_of_Technology_seal_2017.svg.png"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div>
                    <p className="text-sm">Vellore Institute of Technology</p>
                    <p className="font-bold">July 2024 - Present</p>
                  </div>
                </div>

                <div className="mt-2 w-full flex gap-2">
                  <div className="w-10 h-10 rounded-md bg-white">
                    <img
                      src="/images/delhi_public_school_ghaziabad_vasundhara_logo.jpeg"
                      className="w-full h-full rounded-md"
                    ></img>
                  </div>
                  <div>
                    <p className="text-sm">Delhi Public School Vasundhara</p>
                    <p className="font-bold">April 2010 - April 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-[#0D1117] w-full h-full pt-10 px-8 pr-10">
            <h1 className="font-bold">Popular Repositories</h1>

            {/* Repo Grid */}
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div className="w-full h-full rounded-md border border-gray-600 p-4">
                <h1 className="font-bold text-md text-blue-500 mb-2">codigo</h1>
                <p className="text-sm text-gray-400">
                  Codigo is a mobile app that makes learning to code simple and
                  engaging. Designed to be the “Duolingo for programming,” it
                  helps beginners step into the world of computer programming
                  through lessons, interactive challenges, and gamified progress
                  tracking.
                </p>
                <div className="flex gap-2 mt-2">
                  <div className="bg-yellow-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    React Native
                  </div>
                  <div className="bg-green-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    Python
                  </div>
                  <div className="bg-red-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    Fast API
                  </div>
                  <div className="bg-blue-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    MongoDB
                  </div>
                </div>
              </div>

              <div className="w-full h-full rounded-md border border-gray-600 p-4">
                <h1 className="font-bold text-md text-blue-500 mb-2">
                  cryptic hunt dashboard
                </h1>
                <p className="text-sm text-gray-400">
                  Cryptic Hunt Dashboard is an internal moderation tool. It
                  enables moderators to manage and oversee gameplay for the
                  Cryptic Hunt event, handling around 400 concurrent players in
                  real time. The dashboard ensures a smooth and fair experience
                  for all participants.
                </p>
                <div className="flex gap-2 mt-2">
                  <div className="bg-yellow-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    Nextjs
                  </div>
                  <div className="bg-green-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    Prisma
                  </div>
                  <div className="bg-red-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    TailwindCSS
                  </div>
                </div>
              </div>

              <div className="w-full h-full rounded-md border border-gray-600 p-4">
                <h1 className="font-bold text-md text-blue-500 mb-2">
                  cryptic hunt rsvp
                </h1>
                <p className="text-sm text-gray-400">
                  Cryptic Hunt RSVP is a participant management tool designed to
                  handle signups and event onboarding smoothly for the Cryptic
                  Hunt. It ensures seamless registration and fair participation.
                </p>
                <div className="flex gap-2 mt-2">
                  <div className="bg-yellow-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    Nextjs
                  </div>
                  <div className="bg-green-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    Framer Motion
                  </div>
                  <div className="bg-red-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                    TailwindCSS
                  </div>
                </div>
              </div>

              <div className="w-full h-full rounded-md border border-gray-600 p-4"></div>
            </div>

            {/* About Me */}
            <h1 className="font-bold mt-10">Description</h1>
            <div className="mt-5 border rounded-md border-gray-600 p-4">
              about me
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
