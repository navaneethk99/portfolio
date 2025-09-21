import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuildingColumns,
  faGraduationCap,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-screen h-screen desktop-only">
        {/* Top Bar */}
        <div className="bg-black w-full h-15 border-b border-gray-500 flex items-center px-2 gap-3">
          <div className="w-8 h-full flex items-center justify-center mt-1 ml-4">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <a href="https://github.com/navaneethk99">
            <p className="font-bold text-md">navaneethk99</p>
          </a>
        </div>

        <div className="flex h-full w-full">
          {/* Left Sidebar */}
          <div className="bg-[#0D1117] w-120 h-full flex flex-col items-center  overflow-y-auto">
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

              <div className="ml-10 text-sm mt-5 font-bold flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className="w-4 text-gray-600"
                />
                <p className="mt-1">Vellore Institute of Technology</p>
              </div>
              <div className="ml-10 text-sm mt-1 font-bold flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-3 text-gray-600"
                />
                <p className="mt-1">Vellore</p>
              </div>
              <div className="ml-10 text-sm mt-1 font-bold flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="w-4 text-gray-600"
                />
                BTech Computer Science Engineering
              </div>
              <p className="ml-16 text-xs text-gray-500 italic">
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
          <div className="bg-[#0D1117] w-full h-full pt-10 px-8 pr-10 overflow-y-auto">
            <h1 className="font-bold">Popular Repositories</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
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

              <div className="w-full h-full rounded-md border border-gray-600 p-4">
                <h1 className="font-bold text-md text-blue-500 mb-2">
                  satellite call monitoring dashboard
                </h1>
                <p className="text-sm text-gray-400">
                  A dashboard for visualizing data from an advanced satellite
                  monitoring system. Features include audio call transcription
                  from Thuraya, Iridium, and ISAT satellite phones, and
                  interactive graphs for easy data analysis and insights.
                </p>
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
              </div>
            </div>

            {/* About Me */}
            <h1 className="font-bold mt-7">Description</h1>
            <div className="mt-4 border rounded-md border-gray-600 p-4 text-gray-400">
              Hi, I’m{" "}
              <span className="text-blue-300 font-semibold">Navaneeth</span>, a
              passionate tech enthusiast and budding software developer with a
              strong{" "}
              <span className="text-blue-300 font-semibold">
                focus on full-stack development
              </span>{" "}
              and interactive applications. I’ve been fascinated by coding since
              I was a little kid, and that curiosity has driven me to explore
              and build a variety of projects over the years. I have{" "}
              <span className="text-blue-300 font-semibold">
                hands-on experience building web and mobile apps
              </span>
              , and I enjoy creating projects that combine functionality with a
              smooth user experience. When I’m not coding, I like exploring new
              frameworks, brainstorming project ideas, and staying up-to-date
              with the latest in tech and programming education.
            </div>

            <h1 className="font-bold mt-7">External Links</h1>
            <div className="mt-4 border rounded-md border-gray-600 p-3 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-2 justify-center items-center">
              <a href="https://www.linkedin.com/in/navaneeth-krishna-001644321/">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full">
                    <img
                      src="/images/2496097.png"
                      className="w-full h-full rounded-sm"
                    ></img>
                  </div>
                  <p>Linkedin</p>
                </div>
              </a>
              <a href="https://www.instagram.com/nahweneat">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-sm overflow-hidden">
                    <img
                      src="/images/instagram-logo_1199-122.jpg"
                      className="w-full h-full object-cover scale-150"
                      alt="Instagram logo"
                    />
                  </div>
                  <p>Instagram</p>
                </div>
              </a>

              <a href="https://github.com/navaneethk99">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-sm">
                    <img
                      src="/images/GitHub-Mark-ea2971cee799.png"
                      className="w-full h-full rounded-sm"
                    ></img>
                  </div>
                  <p>Github</p>
                </div>
              </a>

              <a href="https://leetcode.com/u/NavaneethKrishna01/">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-sm p-1">
                    <img
                      src="/images/2944960.webp"
                      className="w-full h-full object-cover"
                    ></img>
                  </div>
                  <p>Leetcode</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* -------------- MOBILE ONLY VIEW -------------- */}

      <div className="w-screen h-screen bg-[#0D1117] mobile-only">
        <div className="bg-black flex justify-center items-center text-xl h-15 border-b-1 border-gray-500 gap-3">
          <FontAwesomeIcon icon={faGithub} className="w-8" />
          <p className="font-semibold">navaneethk99</p>
        </div>
        <div className="w-full p-5">
          <div className="flex items-center">
            <div className="w-25 h-25 rounded-full bg-white"></div>
            <div className="h-full ml-5">
              <p className="text-2xl text-gray-400">navaneethk99</p>
              <div className="mt-2 text-sm text-gray-500 flex">
                <b>
                  <p className="text-white mr-1">1</p>
                </b>{" "}
                follower{" "}
                <b>
                  <p className="text-white mr-1 ml-1">· 3</p>
                </b>{" "}
                following
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 border-b mx-10">
          <div className="ml-10 text-sm mt-5 font-bold flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBuildingColumns}
              className="w-4 text-gray-600"
            />
            <p className="mt-1">Vellore Institute of Technology</p>
          </div>
          <div className="ml-10 text-sm mt-1 font-bold flex items-center gap-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-3 text-gray-600"
            />
            <p className="mt-1">Vellore</p>
          </div>
          <div className="ml-10 text-sm mt-1 font-bold flex items-center gap-2">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="w-4 text-gray-600"
            />
            BTech Computer Science Engineering
          </div>
          <p className="ml-16 text-xs text-gray-500 italic mb-5">
            Artificial Intelligence and Data Engineering
          </p>
        </div>

        <div className="px-5">
          <h1 className="font-bold mt-7">Description</h1>
          <div className="mt-4 border rounded-md border-gray-600 p-4 text-gray-400">
            Hi, I’m{" "}
            <span className="text-blue-300 font-semibold">Navaneeth</span>, a
            passionate tech enthusiast and budding software developer with a
            strong{" "}
            <span className="text-blue-300 font-semibold">
              focus on full-stack development
            </span>{" "}
            and interactive applications. I’ve been fascinated by coding since I
            was a little kid, and that curiosity has driven me to explore and
            build a variety of projects over the years. I have{" "}
            <span className="text-blue-300 font-semibold">
              hands-on experience building web and mobile apps
            </span>
            , and I enjoy creating projects that combine functionality with a
            smooth user experience. When I’m not coding, I like exploring new
            frameworks, brainstorming project ideas, and staying up-to-date with
            the latest in tech and programming education.
          </div>
        </div>

        <div className="px-5 mt-5">
          <h1 className="font-bold">Popular Repositories</h1>
          <div className="flex overflow-x-auto gap-5 mt-4">
            <div className="flex-shrink-0 w-90 rounded-md border border-gray-600 p-4 box-border">
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

            <div className="flex-shrink-0 w-85 rounded-md border border-gray-600 p-4 box-border">
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

            <div className="flex-shrink-0 w-80 rounded-md border border-gray-600 p-4 box-border">
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

            <div className="flex-shrink-0 w-90 rounded-md border border-gray-600 p-4 box-border">
              <h1 className="font-bold text-md text-blue-500 mb-2">
                satellite call monitoring dashboard
              </h1>
              <p className="text-sm text-gray-400">
                A dashboard for visualizing data from an advanced satellite
                monitoring system. Features include audio call transcription
                from Thuraya, Iridium, and ISAT satellite phones, and
                interactive graphs for easy data analysis and insights.
              </p>
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
            </div>
          </div>
        </div>

        <div className="w-full ml-10 mt-5">
          <h1 className="mt-5 font-bold text-lg">Organisations</h1>

          <div className="mt-2 w-full flex gap-2">
            <div className="w-10 h-10 rounded-md">
              <img
                src="/images/1_gpyPa2lnqhHz5GeoUq-vgQ.png"
                className="w-full h-full rounded-md"
              ></img>
            </div>
            <div>
              <p className="text-sm">Association for Computing Machinery</p>
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

        <div className="px-5 mt-5 mb-30">
          <h1 className="font-bold mt-7">External Links</h1>
          <div className="mt-4 mb-10 border rounded-md border-gray-600 p-3 grid grid-cols-4 gap-2 justify-center items-center">
            <a href="https://www.linkedin.com/in/navaneeth-krishna-001644321/">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full">
                  <img
                    src="/images/2496097.png"
                    className="w-full h-full rounded-sm"
                  ></img>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/nahweneat">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-sm overflow-hidden">
                  <img
                    src="/images/instagram-logo_1199-122.jpg"
                    className="w-full h-full object-cover scale-150"
                    alt="Instagram logo"
                  />
                </div>
              </div>
            </a>

            <a href="https://github.com/navaneethk99">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-sm">
                  <img
                    src="/images/GitHub-Mark-ea2971cee799.png"
                    className="w-full h-full rounded-sm"
                  ></img>
                </div>
              </div>
            </a>

            <a href="https://leetcode.com/u/NavaneethKrishna01/">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-white rounded-sm p-1">
                  <img
                    src="/images/2944960.webp"
                    className="w-full h-full object-cover"
                  ></img>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
