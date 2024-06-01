import React from 'react'

const DP_page6 = () => {


    const da  = [
        {
            mnam:"Product  Strategy",
            tags:[
                {
                    tagnm : "Strategy Workshop" ,
                    tagnum: 1 
                },
                {
                    tagnm : "idea Validation",
                    tagnum: 2 , 
                },
                {
                    tagnm :"Market Research" ,
                    tagnum: 3 
                },
                {
                    tagnm :"Product Positioning" ,
                    tagnum: 4   
                },
                {
                    tagnm :"UX Reserach" ,
                    tagnum: 5   
                },
                {
                    tagnm :"fucntional Decompostion" ,
                    tagnum: 6  
                },
            ]
        },
        {
            mnam:"UX Design",
            tags:[
                {
                    tagnm : "User Flow" ,
                    tagnum: 7 
                },
                {
                    tagnm : "Prototyping",
                    tagnum: 8 , 
                },
                
            ]
        },
        {
            mnam:"UI design",
            tags:[
                {
                    tagnm : "Mood Boards" ,
                    tagnum: 9
                },
                {
                    tagnm : "Visual Design",
                    tagnum: 10 , 
                },
                {
                    tagnm : "Hand-Off",
                    tagnum: 11 , 
                },
                
            ]
        },
        {
            mnam:"Delivery"
        }
    ]

  return (
    <div className="bg-white w-full min-h-[100vw] px-[5vw] py-20">
      <div className="w-full h-[30vh] flex border-b-2 border-[#000000ba] ">
        <h2 className="text-[6vw] text-center w-full">
          Digital Product <br />
          Design Process
        </h2>
      </div>
      <div className="w-full h-fit flex  py-20 ">
        <div className="w-[30%] h-full"></div>
        <div className="w-[70%] h-full ">
          <p className="text-[#000000ba] w-[70%] text-[1.8vw] font-normal">
            We do not take on projects that involve blind conformity or
            designing out of context. We won't settle for a user interface
            design that is misaligned with your product and digital strategy.
            Neither will we launch web development ventures without user testing
            to validate our design solutions.
          </p>
          <p className="text-[#000000ba] w-[70%] text-[1.8vw] mt-32 font-normal">
            Instead, we create scalable digital products that meet the
            ever-evolving demands of our customers, ensuring long-term
            sustainability.
          </p>
        </div>
      </div>
      <div className="w-full h-fit flex border-t-[2px] border-[#000000ba] mt-2">
        <div className="w-[30%] h-[40vh]  border-[1px] border-[#000000ba]"></div>
        <div className="w-[25%] h-[40vh]  border-[1px] border-[#000000ba] px-4 py-4 ">
          <h2>{da[0].mnam}</h2>
          <br />
          <br />
          {da[0].tags.map((item, index) => {
            return (
              <h2 className="px-2 py-2 rounded-full bg-[#111111] w-[100%] mt-[2px]  text-white font-normal text-[15px] whitespace-nowrap flex justify-start items-center gap-2">
                <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center bg-[#4e4e4e]">
                  <h2>{item.tagnum}</h2>
                </div>
                {item.tagnm}
              </h2>
            );
          })}
        </div>
        <div className="w-[15%] h-[40vh]  border-[1px] border-[#000000ba] px-4 py-4 ">
          <h2>{da[1].mnam}</h2>
          <br />
          <br />
          {da[1].tags.map((item, index) => {
            return (
              <h2 className="px-2 py-2 rounded-full bg-[#111111] w-[100%] mt-[2px]  text-white font-normal text-[15px] whitespace-nowrap flex justify-start items-center gap-2">
                <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center bg-[#4e4e4e]">
                  <h2>{item.tagnum}</h2>
                </div>
                {item.tagnm}
              </h2>
            );
          })}
        </div>
        <div className="w-[15%] h-[40vh]  border-[1px] border-[#000000ba] px-4 py-4 ">
          <h2>{da[2].mnam}</h2>
          <br />
          <br />
          {da[2].tags.map((item, index) => {
            return (
              <h2 className="px-2 py-2 rounded-full bg-[#111111] w-[100%] mt-[2px]  text-white font-normal text-[15px] whitespace-nowrap flex justify-start items-center gap-2">
                <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center bg-[#4e4e4e]">
                  <h2 >{item.tagnum}</h2>
                </div>
                {item.tagnm}
              </h2>
            );
          })}
        </div>
        <div className="w-[15%] h-[40vh]  border-[1px] border-[#000000ba] px-4 py-4 ">
          <h2>{da[3].mnam}</h2>
        </div>
      </div>
      
    </div>
  );
}

export default DP_page6