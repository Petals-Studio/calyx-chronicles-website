import homepageContent from "@/cms/home";
import useInView from "@/hooks/useInView";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { inView, motion } from "framer-motion";
interface ISection2 {
  setCurrentTab: Dispatch<SetStateAction<string>>;
}
const Section2 = (props: ISection2) => {
  const { setCurrentTab } = props;

  const targetRef = useRef<HTMLDivElement>(null);
  const isInView = useInView({ targetRef });
  useEffect(() => {
    if (isInView) {
      setCurrentTab(homepageContent.showcaseSection.label);
    }
  }, [isInView]);

  return (
    <div ref={targetRef} className="w-full h-full">
      <div
        className={`flex justify-between items-center w-full h-full end flex-col overflow-hidden`}
        style={{
          background: `url(${homepageContent?.showcaseSection2.content.images.background}) no-repeat`,
          backgroundSize: "cover",
        }}
      >
        {isInView && (
          <motion.div
            initial={{ transform: "translateY(-100%)" }}
            animate={{ transform: "translateY(0%)" }}
          >
            <div className="customFont lg:text-[90px] md:text-[70px] sm:text-[50px] leading-[117px] sm:leading-[80px] text-[#C23C85] lg:w-[50%] md:w-[70%] sm:w-[90%] text-center mx-auto  lg:pt-[5%] md:pt-[2rem] sm:pt-[5rem] xs:pt-[2rem]">
              {homepageContent?.showcaseSection2?.content.title}
            </div>
          </motion.div>
        )}
        {!isInView && (
          <div className="customFont opacity-0 lg:text-[35px] md:text-[30px] sm:text-[30px] text-[#C23C85] lg:w-[50%] md:w-[70%] sm:w-[90%] text-center mx-auto  lg:pt-[10rem] md:pt-[3rem] sm:pt-[2rem]">
            asdas
          </div>
        )}

        {isInView && (
          <div className="flex justify-between w-full mt-[-20rem]">
            <motion.div
              initial={{ transform: "translateX(-100%)" }}
              animate={{ transform: "translateX(0%)" }}
            >
              <img
                className="lg:w-[500px] md:w-[350px] sm:w-[350px]"
                src={
                  homepageContent?.showcaseSection2?.content.images.leftImage
                }
                style={{
                  aspectRatio: "1/1",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ transform: "translateX(100%)" }}
              animate={{ transform: "translateX(0%)" }}
            >
              <img
                className="lg:w-[500px] md:w-[350px] sm:w-[350px]"
                src={
                  homepageContent?.showcaseSection2?.content.images.rightImage
                }
                style={{
                  aspectRatio: "1/1",
                }}
              />
            </motion.div>
          </div>
        )}
        {!isInView && (
          <div className="flex justify-between w-full opacity-0">
            <motion.div
              initial={{ transform: "translateX(-100%)" }}
              animate={{ transform: "translateX(0%)" }}
            >
              <img
                className="lg:w-[500px] md:w-[350px] sm:w-[350px]"
                src={""}
                style={{
                  aspectRatio: "1/1",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ transform: "translateX(100%)" }}
              animate={{ transform: "translateX(0%)" }}
            >
              <img
                className="lg:w-[500px] md:w-[350px] sm:w-[350px]"
                src={""}
                style={{
                  aspectRatio: "1/1",
                }}
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section2;
