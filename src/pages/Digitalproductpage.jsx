import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";


const Digitalproductpage = () => {

    const [oncl, setoncl] = useState(false)

    const onclickhandler =()=>{
        
    }

  return (
    <div className="w-full min-h-[100vh] px-[5vw] py-40 text-white">
      <div className="w-full h-[30vh] flex border-b-[2px] border-[#ffffff2e] ">
        <div className="w-[30%] h-full"></div>
        <div className="w-[70%] h-full ">
          <h2 className="text-[4vw]">
            Digital Product <br />
            Design Services and <br />
            Solutions We Offer
          </h2>
        </div>
      </div>
      <div className="w-full h-fit flex border-b-[2px] border-[#ffffff2e] py-20 ">
        <div className="w-[30%] h-full"></div>
        <div className="w-[70%] h-full ">
          <p class="text-[2.5vw] font-normal">
            <div className="w-[300px] h-[60px] float-left ">
              <h2 className="text-xs">Services</h2>
            </div>
            We lead your startup at every step of its growth, providing
            unparalleled personal service at every interaction. Whether it's
            launching an MVP, revamping an existing product, securing funding
            with UI prototypes, increasing customer engagement, or boosting
            conversions, we develop a suite of custom-tailored design services
            to fulfill your expectations.
          </p>
          <div
            id="uiux"
            className="relative w-full h-[100vh] border-t-[2px] border-[#ffffff2e] -teal-300 mt-20 py-5"
          > 
            <div onClick={onclickhandler} className='absolute right-5 top-5 w-[40px] h-[40px] '>
                <FaAngleDown  className='text-white w-full h-full '/>
            </div>
            <h1 className="text-[4vw]">UI UX Design</h1>
            <div className='w-full flex items-start gap-2 mt-5 '>

                {["UX Audit", "UI Design ", "UX Design ", "UX Research"].map((item, index)=>{
                    return(
                        <div className='text-xs font-light border-[1px] rounded-full p-2' >
                            {item}
                        </div>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digitalproductpage