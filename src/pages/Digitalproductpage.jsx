import { AnimatePresence, animate, motion } from "framer-motion";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Digitalproductpage = () => {
  const [oncl, setoncl] = useState(false);

  const onhover = () => {
    animate("#sk",{y:"100%"} , )
  };
  const onhoveroff = () => {
    animate("#sk", { y: "200%" },)
    
  };

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
            className="relative w-full h-fit  border-t-[2px] border-[#ffffff2e] -teal-300 mt-20 py-5"
          >
            <details open name="ui">
              <summary>
                <div
                  id="summarker"
                  className="absolute right-5 top-5 w-[40px] h-[40px] "
                >
                  <FaAngleDown className="text-white w-full h-full rotate-[-90deg] " />
                </div>
                <h1 className="text-[4vw]">UI UX Design</h1>

                <div className="w-full flex items-start gap-2 mt-10 ">
                  {["UX Audit", "UI Design ", "UX Design ", "UX Research"].map(
                    (item, index) => {
                      return (
                        <div className="text-xs font-light border-[1px] rounded-full p-2">
                          {item}
                        </div>
                      );
                    }
                  )}
                </div>
              </summary>
              <div className="w-full h-[40vw] mt-5">
                <div
                  onMouseEnter={onhover}
                  onMouseLeave={onhoveroff}
                  className="overflow-hidden relative w-full h-[25%] border-t-[1px] border-[#ffffff2e] flex items-center  gap-10 py-5  "
                >
                  
                    <motion.div
                      id="sk"
                      
                      className="w-full h-full absolute  bg-zinc-600 left-0 top-[-100%] "
                    ></motion.div>
               
                  <div className="w-[30%] h-full font-light text-[30px] z-[99] ">
                    UI & UX Design
                  </div>
                  <div className="w-[50%] h-full z-[99] ">
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, sit animi fuga temporibus nihil assumenda
                      corrupti. Magni cupiditate perspiciatis at.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[25%] border-t-[1px] border-[#ffffff2e] flex items-center  gap-10 py-5  ">
                  <div className="w-[30%] h-full font-light text-[30px] ">
                    UI & UX Design
                  </div>
                  <div className="w-[50%] h-full  ">
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, sit animi fuga temporibus nihil assumenda
                      corrupti. Magni cupiditate perspiciatis at.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[25%] border-t-[1px] border-[#ffffff2e] flex items-center  gap-10 py-5  ">
                  <div className="w-[30%] h-full font-light text-[30px] ">
                    UI & UX Design
                  </div>
                  <div className="w-[50%] h-full  ">
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, sit animi fuga temporibus nihil assumenda
                      corrupti. Magni cupiditate perspiciatis at.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[25%] border-t-[1px] border-[#ffffff2e] flex items-center  gap-10 py-5  ">
                  <div className="w-[30%] h-full font-light text-[30px] ">
                    UI & UX Design
                  </div>
                  <div className="w-[50%] h-full  ">
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, sit animi fuga temporibus nihil assumenda
                      corrupti. Magni cupiditate perspiciatis at.
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>
          <div
            id="uiux"
            className="relative w-full h-fit border-t-[2px] border-[#ffffff2e] -teal-300  py-5"
          >
            <details name="ui">
              <summary>
                <div
                  id="summarker"
                  className="absolute right-5 top-5 w-[40px] h-[40px] "
                >
                  <FaAngleDown className="text-white w-full h-full rotate-[-90deg] " />
                </div>
                <h1 className="text-[4vw]">Product Design</h1>

                <div className="w-full flex items-start gap-2 mt-10 ">
                  {["Website Design", "Mobile app ", "Web App ", "SAAS"].map(
                    (item, index) => {
                      return (
                        <div className="text-xs font-light border-[1px] rounded-full p-2">
                          {item}
                        </div>
                      );
                    }
                  )}
                </div>
              </summary>
              <div className="w-full h-[40vw] mt-5">
                <div className="w-full h-[25%] border-t-[1px] border-[#ffffff2e] flex items-center  gap-10 py-5  ">
                  <div className="w-[30%] h-full font-light text-[30px] ">
                    UI & UX Design
                  </div>
                  <div className="w-[50%] h-full  ">
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, sit animi fuga temporibus nihil assumenda
                      corrupti. Magni cupiditate perspiciatis at.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[25%] border-t-[1px] border-[#ffffff2e] flex items-center  gap-10 py-5  ">
                  <div className="w-[30%] h-full font-light text-[30px] ">
                    UI & UX Design
                  </div>
                  <div className="w-[50%] h-full  ">
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, sit animi fuga temporibus nihil assumenda
                      corrupti. Magni cupiditate perspiciatis at.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[25%] border-t-[1px] border-[#ffffff2e] flex items-center  gap-10 py-5  ">
                  <div className="w-[30%] h-full font-light text-[30px] ">
                    UI & UX Design
                  </div>
                  <div className="w-[50%] h-full  ">
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, sit animi fuga temporibus nihil assumenda
                      corrupti. Magni cupiditate perspiciatis at.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[25%] border-t-[1px] border-[#ffffff2e] flex items-center  gap-10 py-5  ">
                  <div className="w-[30%] h-full font-light text-[30px] ">
                    UI & UX Design
                  </div>
                  <div className="w-[50%] h-full  ">
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, sit animi fuga temporibus nihil assumenda
                      corrupti. Magni cupiditate perspiciatis at.
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digitalproductpage;
