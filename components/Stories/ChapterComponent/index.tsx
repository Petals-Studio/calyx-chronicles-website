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
  isInView: boolean;
  setActiveChapter: React.Dispatch<React.SetStateAction<string>>;

  activeChapter: string;
}
const ChapterComponents = (props: IChapterComponent) => {
  const { chapterData, id, isInView, setActiveChapter, activeChapter } = props;
  const isActive = chapterData?.isActive;
  return (
    <div
      className="p-[0rem]  wrapper-body"
      onMouseEnter={() => {
        setActiveChapter(chapterData?.title);
      }}
    >
      <div
        className={`w-[100%] h-[100vh] opacity-0 relative ${
          id !== 3 ? "lg:after:bg-black" : "after:bg-transparent"
        } text-white after:absolute after:z-[-1] after:w-[1px] after:h-[70%] lg:after:bg-black after:rounded-[100%] after:top-20 after:right-0  ${
          isActive && chapterData?.title === activeChapter
            ? chapterData?.background
            : ""
        } bg-cover bg-no-repeat ${
          isActive && chapterData?.title === activeChapter ? "z-[2]" : ""
        } story-animation ${
          chapterData?.title === activeChapter ? "" : "overflow-hidden"
        }`}
        style={
          isInView
            ? {
                animationDelay: `${0.3 * (id - 1)}s`,
              }
            : { animation: "none" }
        }
      >
        <div
          className={`w-full flex flex-col h-[100%] ${
            isActive ? "justify-start" : "justify-center"
          } ${isActive ? "items-start" : "items-center"}`}
          style={{
            transform: "skew(7deg)",
          }}
        >
          {!isActive && (
            <div className="text-[#737373c4] uppercase text-[35px] sm:text-[14px] roboto-bold-italic">
              {" "}
              Coming Soon
            </div>
          )}
          {
            <>
              {isActive && chapterData?.title === activeChapter && (
                <div className="p-[20%] sm:p-[2%] sm:pl-[3.5rem] sm:pr-[0] uppercase">
                  <div className=" text-[34px] sm:text-[24px]  my-2 roboto-thin">
                    {chapterData?.title}
                  </div>
                  <div className="roboto-bold-italic text-[18px] my-2 sm:text-[14px] italic">
                    {chapterData?.heading}
                  </div>
                  <div className="sm:text-[10px] roboto-regular">
                    {chapterData?.subText}
                  </div>
                </div>
              )}
              <img
                className="image"
                src={
                  isActive && chapterData?.title === activeChapter
                    ? chapterData?.image?.colored
                    : chapterData?.image?.uncolored
                }
                alt={chapterData?.title}
                style={{
                  zIndex: 999,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  objectFit: "contain",
                  margin: "0 auto",
                  transition: "transform .2s",
                  transformOrigin: "center",
                  transform:
                    isActive && chapterData?.title === activeChapter
                      ? id === 3
                        ? "translateX(-10%) translateY(0%)"
                        : id === 1
                        ? "translateX(10%) translateY(0%)"
                        : "translateY(-20%)"
                      : "translateY(-10%) scale(1)",

                  opacity:
                    isActive && chapterData?.title === activeChapter ? 1 : 1,

                  position: "absolute",
                  ...chapterData?.style,
                }}
              />
              {isActive && chapterData?.title !== activeChapter && (
                <div className="absolute bottom-10 uppercase text-[20px] right-20 mr-[2rem] sm:right-10 text-[#ccc] roboto-medium">
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
