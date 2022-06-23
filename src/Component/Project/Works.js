import React, { useEffect, useState } from "react";
import Work from "./Work";
import TypeAnimation from "react-type-animation";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("work.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <div
      name="works"
      className="w-full min-h-screen h-full pt-[80px] text-gray-300 bg-dark"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-black  bg-accent px-3">
            My Project
            <TypeAnimation className="block-inline"
              cursor={true}
              sequence={[
                '.',
                2000,
                '. .',
                2000,
                ' . . .',
              ]}
              wrapper="a"
              repeat={1}
            />
          </p>
          <p className="py-6 text-white font-bold">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Grid Item */}
          {works.map((work) => (
            <Work key={work.id} work={work} />
          ))}
          <div
            className="shadow-lg shadow-dark group container rounded-md flex justify-center items-center mx-auto comingSoon-div bg-slate-500"
          >
            <h2 className="text-3xl text-white ">Next Project <br /> Coming Soon...</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
