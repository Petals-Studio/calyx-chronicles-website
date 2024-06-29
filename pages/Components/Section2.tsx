import homepageContent from "@/cms/home";
import useInView from "@/hooks/useInView";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });

  return (
    <div ref={targetRef}>
      <div className="flex justify-center items-center w-full h-screen end flex-col overflow-hidden">
        {isInView && (
          <motion.div
            initial={{ transform: "translateY(-100%)" }}
            animate={{ transform: "translateY(0%)" }}
          >
            <div className="customFont text-[35px] text-[#C23C85] w-[50%] text-center mx-auto  pt-[10rem]">
              {homepageContent?.showcaseSection2?.content.title}
            </div>
          </motion.div>
        )}

        <div className="flex justify-between w-full ">
          {isInView && (
            <motion.div
              initial={{ transform: "translateX(-100%)" }}
              animate={{ transform: "translateX(0%)" }}
            >
              <img
                src={
                  homepageContent?.showcaseSection2?.content.images.leftImage
                }
                style={{
                  width: "500px",
                  height: "500px",
                }}
              />
            </motion.div>
          )}
          {isInView && (
            <motion.div
              initial={{ transform: "translateX(100%)" }}
              animate={{ transform: "translateX(0%)" }}
            >
              <img
                src={
                  homepageContent?.showcaseSection2?.content.images.rightImage
                }
                style={{
                  width: "500px",
                  height: "500px",
                }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section2;
