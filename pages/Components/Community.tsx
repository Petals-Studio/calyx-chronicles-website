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
  setCurrentTab: Dispatch<SetStateAction<string>>;
}
const Community = (props: ICommunity) => {
  const { setCurrentTab } = props;

  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });
  useEffect(() => {
    if (isInView) {
      setCurrentTab(homepageContent.community.label);
    }
  }, [isInView]);

  return (
    <div ref={targetRef}>
      <div
        className={`grid lg:grid-cols-[1.5fr_minmax(300px,1.2fr)] md:grid-cols-1 place-content-center w-full h-screen overflow-visible p-[2rem]`}
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex justify-center w-[100%]  h-[fit-content] items-center relative my-auto">
            {homepageContent.community.content.images.map((item, idx) => {
              return (
                isInView && (
                  <motion.div
                    key={idx}
                    initial={item.animation.initial}
                    animate={item.animation.animate}
                    className={`hover:z-20 ${
                      idx === 1
                        ? "lg:mb-[20rem]  md:mb-[6rem]  sm:mb-[6rem] "
                        : ""
                    } lg:mx-[-3rem] md:mx-[-1rem] sm:mx-[-1rem]`}
                    style={{
                      zIndex: idx === 1 ? "1" : "",
                    }}
                  >
                    <img
                      style={{
                        aspectRatio: "1/1",
                      }}
                      className="lg:w-[250px] md:w-[200px] sm:w-[120px] hover:scale-125 transition "
                      src={item.image}
                      alt={item.title}
                    />
                  </motion.div>
                )
              );
            })}
          </div>
        </div>
        <div className="flex">
          {" "}
          {isInView && (
            <motion.div>
              <div className="flex flex-col items-center justify-center h-full gap-2 w-full lg:px-[20%] md:px-[1rem] text-left lg:text-[16px] relative md:text-[16px] sm:text-[14px] ">
                <div className="lg:text-[35px] z-[1] relative md:text-[30px] sm:text-[25px] after:z-[-1] w-[fit-content] after:absolute after:w-[100%] after:left-0 after:bottom-0  after:h-[20px] after:bg-[#ea459e]">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
