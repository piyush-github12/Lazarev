import { motion } from 'framer-motion';
import React, { useState } from 'react'

const Page3 = () => {

    const [mousemove, setmousemove] = useState(false)
    const [vidoeonoff, setvidoeonoff] = useState(false)

    const videoon= () => {
      document.querySelector(".video").play();
      setvidoeonoff(true);
    };

    const videoclick =()=>{
        document.querySelector(".video").pause()
        setvidoeonoff(false)
    }

  return (
    <div className="w-full h-[80vh] bg-red-400">
      <div className="w-full h-full relative ">
        <img
          className="w-full h-full object-cover"
          src="/images/page3videoimage.jpg"
          alt=""
        />
        <div
          onMouseEnter={() => setmousemove(true)}
          onMouseLeave={() => setmousemove(false)}
          onClick={videoon}
          className="absolute cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full w-[200px] h-[200px] bg-white "
        >
          <img
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px] object-cover"
            src="/images/play.png"
            alt=""
          />
          <motion.div
            initial={{ opacity: "0" }}
            animate={
              mousemove
                ? { bottom: "-50px", opacity: "1", display: "block" }
                : { bottom: "-70px", opacity: "0", display: "hidden" }
            }
            className={`absolute  hidden bottom-[-70px] left-[50%] translate-x-[-50%] whitespace-nowrap tracking-tight rounded-full bg-white px-3 py-2`}
          >
            <h1>WATCH SHOWREEL</h1>
          </motion.div>
        </div>
        <motion.div
          initial={{}}
          animate={
            vidoeonoff
              ? {
                  width: "100%",
                  height: "100vh",
                  top: 0,
                  // borderRadius: "0px",
                  position: "fixed",
                  transition: { duration: 1, ease: [0.5, 0, 0.75, 0] },
                }
              : {
                  width: "50%",
                  height: "0px",
                  bottom: "5vw",
                  position: "absolute",
                  // borderRadius: "40px",
                  // transition: { height: { delay: 0.1, duration: 1 } },
                }
          }
          className="absolute z-[999999] overflow-hidden w-[60%] h-[0px]  left-[50%] translate-x-[-50%] bg-red-200"
        >
          <video
            onClick={videoclick}
            className="video w-full h-full object-cover"
            autoPlay
            loop
            muted
            src="https://lazarev.kiev.ua/la24/la-reel--min.mp4"
          ></video>
        </motion.div>
      </div>
    </div>
  );
}

export default Page3