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
import ImageFallback from "./ImageWithFallback";
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
        className={`w-full h-full px-[2rem] py-[3rem] flex justify-between lg:flex-row flex-col sm:py-[3rem] lg:pl-[3.5rem]`}
      >
        <div className="flex lg:w-[30%]  w-[100%] z-[2] rounded-full text-[#fff]">
          <motion.div>
            <div className="flex flex-col items-start justify-center px-[1rem] h-full gap-1 w-full text-left  sm:px-[0] relative ">
              <div className="lg:text-[calc(2.75*(1vh+1vw))] z-[1] relative md:text-[60px] sm:text-[45px] w-[fit-content] uppercase roboto-light ">
                {homepageContent?.community.content.title.map((item, idx) => {
                  return <div key={idx}>{item}</div>;
                })}
              </div>

              {homepageContent?.community.content.paragraphs.map(
                (item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="my-2 text-left w-[90%] lg:text-[calc(.55*(1vh+1vw))]  md:text-[14px] sm:text-[12px] uppercase roboto-medium"
                    >
                      {item}
                    </div>
                  );
                }
              )}

              <div className="flex gap-[1rem] items-end">
                {homepageContent.community.content.followIcons.map(
                  (items, idx) => {
                    return (
                      <div key={idx}>
                        <Link href={items.url} target="_blank">
                          <ImageFallback
                            width={40}
                            height={40}
                            className="lg:w-[calc(1.55*(1vw+1vh))] w-[40px]"
                            src={items.src}
                            fallbackSrc={items.fallbackSrc}
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

        <div className="flex justify-center items-center lg:w-[60%] w-[100%] z-[1]">
          <div className="flex justify-center w-[100%]  h-[fit-content] items-end relative my-auto md:mb-[-10rem]">
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
                  <Link href={item.action} target="_blank">
                    <ImageFallback
                      fallbackSrc={item.fallbackImages}
                      width={100}
                      height={100}
                      style={{
                        aspectRatio: "1/1",
                      }}
                      className="lg:w-[400px] md:w-[400px] sm:w-[250px] hover:scale-[1.3] transition"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
