import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
interface IChapterComponent {
  chapterData: {
    image: {
      colored: string;
      uncolored: string;
    };
    title: string;
    heading: string;
    isActive: boolean;
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
  const isActive = chapterData.isActive;
  return (
    <div
      onMouseOver={() => {
        setActiveChapter(chapterData.title);
      }}
      onMouseLeave={() => {
        setActiveChapter("");
      }}
      className={`w-[100%] opacity-0 relative ${
        id !== 3 ? " after:bg-black" : "after:bg-transparent"
      } text-white after:absolute after:w-[1px] after:h-[70%] after:bg-black after:rounded-[100%] after:top-20 after:right-0   ${
        isActive ? chapterData.background : ""
      } ${isActive ? "hover:z-[2]" : ""} ${isInView ? "story-animation" : ""}`}
      style={{
        animationDelay: `${0.2 * id}s`,
      }}
    >
      <div
        className={`w-full flex flex-col  h-[100vh] p-[6rem]  ${
          isActive ? "justify-start" : "justify-center"
        } ${isActive ? "items-start" : "items-center"}`}
        style={{
          transform: "skew(7deg)",
        }}
      >
        {!isActive && <div className="text-black"> Comming Soon</div>}
        {isActive && (
          <>
            <div className="font-bold text-[34px] my-2">
              {chapterData.title}
            </div>
            <div className="font-bold text-[18px] my-2">
              {chapterData.heading}
            </div>
            <div>{chapterData.subText}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChapterComponents;
