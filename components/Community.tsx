import homepageContent from "@/cms/home";
import useInView from "@/hooks/useInView";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
interface ICommunity {
  isInView?: boolean;
}
const Community = (props: ICommunity) => {
  const { isInView } = props;

  return (
    <div
      className={`w-full h-full overflow-hidden ${homepageContent.community.content.background}`}
    >
      <div
        className={`w-full h-full px-[2rem] py-[6rem] flex flex-col justify-between`}
      >
        <div className="flex">
          <motion.div>
            <div className="flex flex-col items-center justify-center h-full gap-2 w-full lg:px-[20%] md:px-[1rem] text-left lg:text-[16px] relative md:text-[16px] sm:text-[14px] ">
              <div className="lg:text-[35px] z-[1] relative md:text-[30px] sm:text-[25px] w-[fit-content] customFont">
                {homepageContent?.community.content.title}
              </div>

              {homepageContent?.community.content.paragraphs.map(
                (item, idx) => {
                  return (
                    <div key={idx} className="my-2 text-left w-[90%]">
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </motion.div>
        </div>
        {
          <div className="flex justify-center items-center absolute bottom-0 left-0 w-[100%]">
            <div className="flex justify-center w-[100%]  h-[fit-content] items-end relative my-auto">
              {homepageContent.community.content.images.map((item, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={item.animation.initial}
                    animate={item.animation.animate}
                    className={`z-[${
                      idx === 0 ? 2 : idx === 1 ? 1 : 0
                    }] hover:z-[9] lg:mx-[-3rem] md:mx-[-1rem] sm:mx-[-1rem] translate-z-[-200px]`}
                  >
                    <img
                      style={{
                        aspectRatio: "1/1",
                      }}
                      className="lg:w-[350px] md:w-[200px] sm:w-[120px] hover:scale-125 transition "
                      src={item.image}
                      alt={item.title}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Community;
