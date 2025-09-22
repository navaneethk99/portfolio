import { faGithub, faReadme } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faBuildingColumns,
  faGlobe,
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-screen h-screen desktop-only">
        {/* Top Bar */}
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
            <Link
              href="/"
              className="w-fit h-full px-3 flex gap-3 items-center"
            >
              <FontAwesomeIcon icon={faReadme} className="w-4 text-gray-400" />{" "}
              Overview
            </Link>

            <Link
              href="/repositories/codigo"
              className="w-fit h-full px-3 font-semibold border-b-2 border-orange-400 flex gap-2 items-center"
            >
              <FontAwesomeIcon icon={faBook} className="w-3 text-gray-400" />{" "}
              Repositories
            </Link>

            <Link
              href="/experiences"
              className="w-fit h-full px-3 flex gap-3 items-center"
            >
              <FontAwesomeIcon icon={faGlobe} className="w-4 text-gray-400" />{" "}
              Experience
            </Link>
          </div>
        </div>

        <div className="flex h-full w-full">
          {/* Left Sidebar */}
          <div className="bg-[#0D1117] w-120 h-full flex flex-col overflow-y-auto pl-5">
            <h1 className="font-semibold mt-10 text-xl mb-5">Repositories</h1>
            <a
              href="/repositories/codigo"
              className="w-full h-fit rounded-md border border-gray-600 p-4"
            >
              <h1 className="font-bold text-md text-blue-500 mb-2">codigo</h1>
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
            </a>
            <a
              href="/repositories/dashboard"
              className="w-full h-fit mt-5 rounded-md border border-gray-600 p-4"
            >
              <h1 className="font-bold text-md text-blue-500 mb-2">
                cryptic hunt dashboard
              </h1>
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
            </a>
            <a
              href="/repositories/rsvp"
              className="w-full h-fit mt-5 rounded-md border border-gray-600 p-4"
            >
              <h1 className="font-bold text-md text-blue-500 mb-2">
                cryptic hunt rsvp
              </h1>
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
            </a>
            <a
              href="/repositories/satellite"
              className="w-full h-fit mt-5 rounded-md border border-gray-600 p-4"
            >
              <h1 className="font-bold text-md text-blue-500 mb-2">
                satellite call monitoring dashboard
              </h1>
              <div className="flex gap-2 mt-2">
                <div className="bg-yellow-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  React JS
                </div>
                <div className="bg-green-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  HTML
                </div>
                <div className="bg-red-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  CSS
                </div>
                <div className="bg-blue-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  ReCharts
                </div>
              </div>
            </a>
            <a
              href="/repositories/123vit"
              className="w-full h-fit mt-5 rounded-md border border-gray-600 p-4"
            >
              <h1 className="font-bold text-md text-blue-500 mb-2">123vit</h1>
              <div className="flex gap-2 mt-2">
                <div className="bg-yellow-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  Go
                </div>
                <div className="bg-green-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  Nextjs
                </div>
                <div className="bg-red-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  GoFiber
                </div>
                <div className="bg-blue-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  Sqlite
                </div>
              </div>
            </a>
            <a
              href="/repositories/travelite"
              className="w-full h-fit mt-5 rounded-md border border-gray-600 p-4"
            >
              <h1 className="font-bold text-md text-blue-500 mb-2">
                travelite
              </h1>
              <div className="flex gap-2 mt-2">
                <div className="bg-yellow-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  go
                </div>
                <div className="bg-green-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  Nextjs
                </div>
                <div className="bg-red-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  GoFiber
                </div>
                <div className="bg-blue-500 w-fit rounded-full px-2 py-1 text-xs font-bold">
                  Sqlite
                </div>
              </div>
            </a>
          </div>

          {/* Main Content */}
          <div className="bg-[#0D1117] w-full h-full pt-10 px-8 pr-10 overflow-y-auto">
            <div className="border h-fit rounded-md border-gray-600 text-white">
              <div className="w-full font-semibold border-b-1 border-gray-600 px-4 py-2">
                README.md
              </div>
              <div className="min-h-40 ">
                <h1 className="text-center mt-6 text-6xl techno-font-heading">
                  cryptic hunt dashboard
                </h1>
                <div className="p-4 text-sm mt-2 techno-font-body">
                  Cryptic Hunt Dashboard is an internal moderation and
                  management tool designed specifically for the Cryptic Hunt
                  event, where hundreds of participants compete in real time.
                  Built to handle the scale of 400+ concurrent players, the
                  dashboard empowers moderators to efficiently oversee gameplay,
                  track progress, and ensure a smooth and fair competition
                  environment.
                  <br />
                  <br />
                  The system provides real-time visibility into player activity,
                  allowing moderators to quickly address issues, enforce rules,
                  and maintain game integrity. By streamlining event operations,
                  it reduces the chances of errors or delays, ensuring
                  participants enjoy a seamless experience from start to finish.
                  <br />
                  <br />
                  The dashboard leverages a modern and reliable tech stack:
                  <br />
                  <ol className="list-decimal list-inside mt-2">
                    <li className="mt-3">
                      Next.js powers the frontend ensuring moderators have fast
                      and responsive access to live data.
                    </li>
                    <li className="mt-3">
                      Prisma serves as the ORM layer, enabling efficient
                      database queries and seamless interaction with structured
                      event data such as player states, scores, and logs.
                    </li>
                    <li className="mt-3">
                      TailwindCSS is used for styling, delivering a clean,
                      responsive, and highly customizable UI that adapts well to
                      real-time dashboards.
                    </li>
                  </ol>
                  <br />
                  Key features include live player tracking, automated
                  scoring,With its focus on scalability, fairness, and ease of
                  use, the Cryptic Hunt Dashboard plays a crucial role in
                  ensuring that large-scale interactive events run smoothly and
                  participants have an engaging and fair gameplay experience.
                </div>
              </div>
            </div>
          </div>
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
      </div>{" "}
    </>
  );
};

export default Page;
