import React from 'react'

const Page7 = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center px-16 py-[5vw]">
      <div className="w-[60%] h-full text-[10vw] text-white ">
        <h1>
          <div className="float-left h-[10vw] w-[10vw] ">
            <img
              className="w-full h-full object-cover"
              src="/images/234b8405-b43c-4c0c-9195-9722e57929ff.jpg"
              alt=""
            />
          </div>{" "}
          have
        </h1>
        <h1>a Project</h1>
        <h1>in Mind</h1>
      </div>
      <div className="w-[30%] h-full ">
        <div id='morph' className="w-full h-[60%]"></div>
        <div className="w-full h-[40%]">
          <p className="text-[1.5vw]text-[#9a9a9abd]">
            Share your project idea with us! Should the partnership vibe not
            align, we're glad to furnish you with valuable insights that could
            prove beneficial.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page7