import React from 'react'
import Headinghover from '../components/Headinghover';

const Page4 = () => {

    const mp = [
      {
        mainheading: "$500M",
        text: "In funding secured owning to our designs",
      },
      {
        mainheading: "+1 million",
        text: "Increase in customer base",
      },
      {
        mainheading: "100000+",
        text: "Of active marketplace users",
      },
      {
        mainheading:"25 million",
        text:"monthly E-commerce Visiter"
      },
      {
        mainheading:"+300%",
        text :"Sign-up Convesion Rate"
      },
      {
        mainheading:"+45%",
        text:"Increase in Apps Retention rate "
      }
    ];
  return (
    <div className="w-full min-h-[100vh] bg-white py-40 ">
      <div className="w-full h-[60vh] flex items-center justify-center  ">
        <div className="w-[50vw] h-full px-14  ">
          <h2 className="text-[3.5vw] w-[70%] ">
            Success Stories Shaped by Our User Experience Design Agency
          </h2>
        </div>
        <div className="w-[50vw] h-full flex flex-col gap-10 ">
          <h3 className="text-[#00000094] uppercase">Partnership Mentality </h3>
          <p class="w-[80%] text-xl font-normal ">
            Along with taking the lead in designing AI-powered solutions, we
            embody a partnership mentality. This exact commitment has been the
            bedrock of our clients’ successes. &nbsp;When you choose to
            collaborate with us, we promise to be right where your audience's
            changing desires meet your ambitious business goals. We don't settle
            for mediocrity; we strive for excellence in every Figma pixel, every
            touchpoint, and every UX interaction.
          </p>
          <h3 className="text-[#00000094] uppercase">results</h3>
          <p class="w-[80%] text-xl  font-normal">
            That is how we've built 50+ sustainable startup products and helped
            400+ brands secure millions in funding, achieve successful
            acquisitions, and establish themselves as globally recognized
            companies.
          </p>
        </div>
      </div>
      <div className="w-screen h-[60vh] px-[5vw] mt-10">
        {mp.map((item, index) => {
          return (
            <div className="w-[28vw] h-[30vh] inline-block align-top mr-[2vw] mb-4 bg-[#e7e7e7] p-5 ">
              <h1 className="text-[5vw] font-normal ">{item.mainheading}</h1>
              <h2 className="text-[#00000094] text-xs mt-10">{item.text}</h2>
              <h2 className="text-[#00000094] text-xs mt-20">/00{index + 1}</h2>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[40vh] mt-40 flex px-[5vw]">
        <div className="w-[20vw] h-[full] "></div>
        <div className="w-[70vw] h-full ">
          <p class="text-[2.5vw] font-normal">
            <div className="w-[300px] h-[60px] float-left ">
              <h2 className="text-xs">
                Featured Degital <br />
                Design Products
              </h2>
            </div>
            Our portfolio encompasses a wide range of digital designs essential
            for the growth of modern businesses. From B2B SaaS and B2C mobile
            apps to marketing design for promotions, we display our work created
            for early-stage startups and enterprises at various stages of their
            growth.
          </p>
        </div>
      </div>
      <div className="w-full h-[50vh] mt-40 flex gap-10 px-[5vw]">
        <div className="w-[25vw] h-full ">
          <Headinghover text="Accern.Reah" />
          <p className="text-[#00000094] text-lg font-normal mt-20 p-5">
            Founded by Accern, a front-runner in No-Code NLP, Rhea stands as a
            personalized AI Associate designed to streamline FinTech workflows.
          </p>
        </div>
        <div className="w-[65vw] h-full ">
          <img
            className="w-full h-full object-cover"
            src="/images/page4-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[50vh] mt-40 flex gap-10 px-[5vw]">
        <div className="w-[25vw] h-full ">
          <Headinghover text="AfroTech" />
          <p className="text-[#00000094] text-lg font-normal mt-20 p-5">
            A media and events company that focuses on promoting and
            highlighting the achievements of Black innovators, entrepreneurs,
            and technologists.
          </p>
        </div>
        <div className="w-[65vw] h-full ">
          <img
            className="w-full h-full object-cover"
            src="/images/page4-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[70vh] mt-40 flex gap-10 px-[5vw]">
        <div className="w-[25vw] h-full "></div>
        <div className="w-[65vw] h-full flex gap-10 ">
          <div className="w-[50%] h-full relative ">
            <Headinghover text="BlockBeat" />
            <p className="text-[#00000094] text-lg font-normal mt-10 p-5">
              AI-powered crypto trading terminal that provides traders with
              continuously updated, streamlined, and distilled data throughout
              the day.
            </p>
            <img
              className="w-[80%] h-[30vh]  ml-5 absolute bottom-0"
              src="/images/page4-3.jpg"
              alt=""
            />
          </div>
          <div className="w-[50%] h-full relative ">
            <Headinghover text="PikaAI" />
            <p className="text-[#00000094] text-lg font-normal mt-10 p-5">
              Pika AI is a new and better search engine that harnesses AI
              technology and helps people find the most relevant and interesting
              information from across the web.
            </p>
            <img
              className="w-[80%] h-[30vh] ml-5 absolute bottom-0"
              src="/images/page4-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4