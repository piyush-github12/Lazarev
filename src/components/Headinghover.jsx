import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Headinghover = ({ text }) => {
  const [hover, sethover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      initial={{borderTop : "2px solid white"  }}
      whileHover={{ borderTop: "2px solid black" }}
      className="w-full h-[100px] cursor-pointer py-5 px-5 flex justify-between items-center  "
    >
      <h1 className="text-[2.5vw] font-light ">{text}</h1>
      <motion.div
        animate={
          hover
            ? {
                x: [5, -5, 5, -5, 0],
                y: [-5, 5, -5, 5, -0],
                opacity: [0.2, 1, 0.2, 1, 0.2, 1],
              }
            : {}
        }
        transition={{ duration: 0.5 }}
      >
        <IoMdArrowRoundForward className="scale-[1.5] rotate-[-45deg]" />
      </motion.div>
    </motion.div>
  );
};

export default Headinghover;
