import { motion } from "framer-motion";
import React, { useState } from "react";

const Page2 = () => {
  return (
    <div className="bg-[#101011] py-20 px-14 text-white">
      <div className="flex w-full h-[80vh]   ">
        <div className=" dabba w-[40%] h-full  flex flex-col py-10 justify-between border-t-[2px] border-[#ffffff2e]">
          <h1>
            Exclusive insights into <br /> UI/UX and product design
          </h1>
          <p class="w-[80%]">
            Being a design studio at the forefront of digital transformation and
            product design, we take it upon ourselves to drop some knowledge,
            share insights, let out insider tips, and put our work on full
            display
          </p>
        </div>
        <div className="w-[60%] h-full ">
          <div className="relative h-[25%] w-full border-t-[2px] border-[#ffffff2e]">
            <h2 class="w-[65%] mt-5 text-[1.5vw]">
              The Gestalt Principles of Design: How Design Forms Visual
              Perception
            </h2>

            <div className="absolute pointer-events-none  left-0 top-0 translate-x-[-50%] translate-y-[-50%] w-[100px] h-[100px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover "
                src="/images/secondbox.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="relative h-[25%] w-full border-t-[2px] border-[#ffffff2e]">
            <h2 class="w-[65%] mt-5 text-[1.5vw]">
              The Gestalt Principles of Design: How Design Forms Visual
              Perception
            </h2>

            <div className="absolute pointer-events-none  left-0 top-0 translate-x-[-50%] translate-y-[-50%] w-[100px] h-[100px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover "
                src="/images/secondbox.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="relative h-[25%] w-full border-t-[2px] border-[#ffffff2e]">
            <h2 class="w-[65%] mt-5 text-[1.5vw]">
              The Gestalt Principles of Design: How Design Forms Visual
              Perception
            </h2>

            <div className="absolute pointer-events-none  left-0 top-0 translate-x-[-50%] translate-y-[-50%] w-[100px] h-[100px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover "
                src="/images/secondbox.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="relative h-[25%] w-full border-t-[2px] border-[#ffffff2e]">
            <h2 class="w-[65%] mt-5 text-[1.5vw]">
              The Gestalt Principles of Design: How Design Forms Visual
              Perception
            </h2>

            <div className="absolute pointer-events-none  left-0 top-0 translate-x-[-50%] translate-y-[-50%] w-[100px] h-[100px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover "
                src="/images/secondbox.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
