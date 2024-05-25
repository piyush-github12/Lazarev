
import { motion } from 'framer-motion';
import React from 'react'

const Heropage = () => {
    
  return (
    <div className="w-full h-[100vh] pt-1 text-white">
      <div className="text-[10vw] mt-52 select-none  text-center leading-[9vw] tracking-tighter font-bold">
        <h1 className=" flex items-center justify-center gap-2 ">
          AI & ML PRO{" "}
          <span className="w-[7vw] h-[7vw] mt-2 ml-2 bg-[#0da34e] rounded-full"></span>
          DUCT
        </h1>
        <h1>DESIGN AGENCY</h1>
      </div>
      <div className="text-center mt-14 ">
        <p>
          We partner with AI & ML businesses, guiding them from series A <br />{" "}
          to series D and beyond with our expertise in
        </p>
        <div>
          {[
            "Brand design",
            "user experience",
            "and",
            "design digital product",
          ].map((item, index) => (
            <h3
              className={`px-2 inline-block  py-1 ${
                index === 2 ? "" : "border-2"
              }  rounded-full border-[#2e2e2e]`}
            >
              {item}
            </h3>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center  h-[8vw] mt-16">
        <div className="w-[70vw] relative whitespace-nowrap overflow-hidden ">
          <div className="absolute z-10 left-0 top-0 w-[150px] h-full bg-gradient-to-r  from-[#101011] to-[#0000]"></div>
          <div className="absolute z-10 right-0 top-0 w-[150px] h-full bg-gradient-to-r  to-[#101011] from-[#0000]"></div>
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="inline-flex w-full  justify-between items-center pr-10"
          >
            <img src="https://lazarev.kiev.ua/la24/awww.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/rd.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/fwa.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
          </motion.div>
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="inline-flex w-full  justify-between items-center pr-10"
          >
            <img src="https://lazarev.kiev.ua/la24/awww.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/rd.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/webby.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/fwa.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/forbes.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/wf.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/pmi.svg" alt="" />
            <img src="https://lazarev.kiev.ua/la24/adweek.svg" alt="" />
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}

export default Heropage