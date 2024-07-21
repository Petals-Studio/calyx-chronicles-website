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
import Link from "next/link";
import Image from "next/image";
interface ICommunity {
  isInView?: boolean;
}
const Community = (props: ICommunity) => {
  const { isInView } = props;

  return (
    <div
      className={`w-full h-full overflow-hidden ${homepageContent.community.content.background} customFont`}
    >
      <div
        className={`w-full h-full px-[2rem] py-[6rem] flex justify-between sm:flex-col sm:py-[4rem]`}
      >
        <div className="flex w-[30%] sm:w-[100%] z-[2] rounded-full">
          <motion.div>
            <div className="flex flex-col items-start justify-center px-[1rem] h-full gap-2 w-full text-left  sm:px-[0] relative ">
              <div className="lg:text-[65px] z-[1] relative md:text-[60px] sm:text-[45px] w-[fit-content] uppercase roboto-light ">
                {homepageContent?.community.content.title}
              </div>

              {homepageContent?.community.content.paragraphs.map(
                (item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="my-2 text-left w-[90%] text-[18px] sm:text-[14px] uppercase roboto-medium"
                    >
                      {item}
                    </div>
                  );
                }
              )}

              <div className="flex gap-[1rem]">
                {homepageContent.community.content.followIcons.map(
                  (items, idx) => {
                    return (
                      <div key={idx}>
                        <Link href={items.url}>
                          <Image
                            width={40}
                            height={40}
                            src={items.src}
                            alt={items.alt}
                          />
                        </Link>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </motion.div>
        </div>
        {
          <div className="flex justify-center items-center w-[60%] sm:w-[100%] z-[1]">
            <div className="flex justify-center w-[100%]  h-[fit-content] items-end relative my-auto">
              {homepageContent.community.content.images.map((item, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={item.animation.initial}
                    animate={item.animation.animate}
                    className={`z-[${
                      idx === 0 ? 2 : idx === 1 ? 1 : 0
                    }] lg:mx-[-3rem] md:mx-[-1rem] sm:mx-[-1rem] translate-z-[-200px]`}
                  >
                    <img
                      style={{
                        aspectRatio: "1/1",
                      }}
                      className="lg:w-[400px] md:w-[400px] sm:w-[250px]  "
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
