import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
interface IChapterComponent {
  chapterData: {
    image: {
      colored: string;
      uncolored: string;
    };
    title: string;
    heading: string;
    isActive: boolean;
    style: { [key: string]: string | number | undefined };
    subText: string;
    background: string;
  };
  id: number;
  setActiveChapter: React.Dispatch<React.SetStateAction<string>>;
  isInView: boolean;
  activeChapter: string;
}
const ChapterComponents = (props: IChapterComponent) => {
  const { chapterData, isInView, id, setActiveChapter, activeChapter } = props;
  const isActive = chapterData?.isActive;
  return (
    <div
      className="p-[0rem]"
      onMouseEnter={() => {
        id === 3 && console.log("called");
        setActiveChapter(chapterData.title);
      }}
    >
      <div
        className={`w-[100%] opacity-0 relative ${
          id !== 3 ? " after:bg-black" : "after:bg-transparent"
        } text-white after:absolute after:w-[1px] after:h-[70%] after:bg-black after:rounded-[100%] after:top-20 after:right-0  ${
          isActive && chapterData.title === activeChapter
            ? chapterData.background
            : ""
        } ${isActive && chapterData.title === activeChapter ? "z-[2]" : ""} ${
          isInView ? "story-animation" : ""
        } ${chapterData.title === activeChapter ? "" : "overflow-hidden"}`}
        style={{
          animationDelay: `${0.1 * id}s`,
        }}
      >
        <div
          className={`w-full flex flex-col  h-[100vh]  ${
            isActive ? "justify-start" : "justify-center"
          } ${isActive ? "items-start" : "items-center"}`}
          style={{
            transform: "skew(7deg)",
          }}
        >
          {!isActive && <div className="text-black"> Comming Soon</div>}
          {
            <>
              {isActive && chapterData.title === activeChapter && (
                <div className=" p-[20%]">
                  <div className="font-bold text-[34px] my-2">
                    {chapterData.title}
                  </div>
                  <div className="font-bold text-[18px] my-2">
                    {chapterData.heading}
                  </div>
                  <div>{chapterData.subText}</div>
                </div>
              )}
              <img
                className="image"
                src={
                  isActive && chapterData.title === activeChapter
                    ? chapterData?.image?.colored
                    : chapterData?.image?.uncolored
                }
                alt={chapterData.title}
                style={{
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  objectFit: "contain",

                  margin: "0 auto",
                  transition: "transform .2s",
                  transformOrigin: "center",
                  transform:
                    isActive && chapterData.title === activeChapter
                      ? id === 3
                        ? "translateX(-10%) translateY(0%) scale(1.3)"
                        : id === 1
                        ? "translateX(10%) translateY(0%) scale(1.3)"
                        : "translateY(-20%) scale(1.3)"
                      : "translateY(-10%) scale(1)",

                  opacity:
                    isActive && chapterData.title === activeChapter ? 1 : 1,

                  position: "absolute",
                  ...chapterData.style,
                }}
              />
              {isActive && chapterData.title !== activeChapter && (
                <div className="absolute bottom-10 text-[24px] right-20 mr-[2rem] text-black">
                  {chapterData?.title}
                </div>
              )}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default ChapterComponents;
