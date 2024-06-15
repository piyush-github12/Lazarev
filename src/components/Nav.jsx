import { AnimatePresence, animate, easeInOut, motion, stagger } from "framer-motion";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const navlinks = [
    {
      headingLink: "case studies",
      sublinks: [],
    },
    {
      headingLink: "areas of experience",
      sublinks: ["🔥AI & ML", "FinTech", "Real Estate", "E-commerce", "Web-3"],
    },
    {
      headingLink: "UI UX design",
      sublinks: ["UX Audit", "UI Design", "UX Design", "UX Research"],
    },
    {
      headingLink: "Prodect Design ",
      sublinks: ["SaaS", "Web App", "Mobile App", "Website Design"],
    },
    {
      headingLink: "Design Process",
      sublinks: ["MVP", "Relaunch"],
    },
    {
      headingLink: "About Agency",
      sublinks: [
        "Our Story",
        "Client'sFeedback",
        "Careers",
        "",
        "News & Articles",
      ],
    },
  ];

  const [lestplayhover, setlestplayhover] = useState(false);
  const [onlinks, setonlinks] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    
    const handleScroll = () => {
      console.log(window.scrollY)
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <motion.div
      
      animate={
        scrollY > 200
          ? { padding: "0.5vw 5vw  0.5vw  5vw" }
          : { padding: "1.5vw  5vw  1.5vw  5vw"  }
      }
      transition={{ duration: 0.5 }}
      className="w-full  px-[5vw] py-[2vw]  fixed z-[9999] top-0 left-0 flex  justify-between items-start text-white bg-[#101011] "
    >
      <div>
        <h1 className="text-2xl font-bold ">LAZAREV.</h1>
      </div>
      <motion.div
        onMouseEnter={() => setonlinks(true)}
        onMouseLeave={() => setonlinks(false)}
        className="w-[60%]  flex   gap-5  bg-[#101011] mt-2"
      >
        {navlinks.map((item, index) => {
          return (
            <div className="">
              <motion.h3
                whileHover={{
                  color: "#e3e3e33e",
                  transition: { duration: 0.2 },
                }}
                className="text-sm font-bold cursor-pointer  "
              >
                {item.headingLink}
              </motion.h3>
              <AnimatePresence>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: onlinks ? "22vh" : "0px",
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="mt-5 uppercase "
                >
                  {item.sublinks.map((it, id) => (
                    <AnimatePresence>
                      {onlinks && (
                        <motion.h4
                          initial={{ display: "none", y: "10px" }}
                          animate={{
                            display: "block",
                            y: "0",
                            transition: { delay: id * 0.2 },
                          }}
                          className="text-xs leading-[30px]  mt-2 cursor-pointer overflow-hidden "
                        >
                          <motion.span className="hh">{it}</motion.span>
                        </motion.h4>
                      )}
                    </AnimatePresence>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
      <div className="w-[10%]  ">
        <motion.div
          onMouseEnter={() => setlestplayhover(true)}
          onMouseLeave={() => setlestplayhover(false)}
          className="w-[100%] h-[40px] relative rounded-full "
        >
          <motion.div
            animate={{ width: lestplayhover ? "40px" : "100%" }}
            className="w-[100%] h-[40px] rounded-full  bg-[#0da34e] absolute right-0 "
          ></motion.div>
          <h1 className="absolute left-[10%] top-[50%] translate-y-[-50%] ">
            LET'S TALK
          </h1>
        </motion.div>
      </div>
      <div className="absolute bottom-0 h-2 w-[90vw] border-b-2 border-[#414141] "></div>
    </motion.div>
  );
};

export default Nav;
