import homepageContent from "@/cms/home";
import { albertusNova } from "@/fonts";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import ChapterComponents from "../../components/Stories/ChapterComponent";
import useInView from "@/hooks/useInView";
import MobileCharecterComp from "../../components/Stories/ChapterComponent/MobileCharecterComp";
import { useWindowDimensions } from "@/hooks/useWindowDimention";
import { useDeviceType } from "@/hooks/useDeviceType";

interface IStories {
  isInView?: boolean;
}
const Stories = (props: IStories) => {
  const { isInView = false } = props;
  const { isDesktop, isMobile } = useDeviceType();

  const [activeChapter, setActiveChapter] = useState("");

  useEffect(() => {
    if (isInView) {
      const tempArr = homepageContent.showcaseSection.content.filter((item) => {
        return item.isActive;
      });
      setActiveChapter(tempArr[tempArr?.length - 1]?.title);
      // tempArr[tempArr?.length - 1]?.title &&
      //   setTimeout(() => {
      //     document
      //       .getElementById(tempArr[tempArr?.length - 1]?.title)
      //       ?.scrollIntoView({ behavior: "smooth" });
      //   }, 1000);
    } else {
      setActiveChapter("");
    }
  }, [isInView]);
  // useEffect(() => {
  //   activeChapter &&
  //     setTimeout(() => {
  //       document
  //         .getElementById(activeChapter)
  //         ?.scrollIntoView({ behavior: "smooth" });
  //     }, 100);
  // }, [activeChapter]);

  return (
    <>
      <div className="w-full h-full bg-[#fff] ">
        <div
          id={homepageContent.showcaseSection.sectionId}
          className="w-full relative grid scroll-body-x lg:grid-cols-[repeat(3,1fr)] grid-cols-[minmax(350px,1fr)_minmax(350px,1fr)_minmax(350px,1fr)] h-full overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden  text-[#000]"
        >
          {homepageContent.showcaseSection.content.map((item, idx) => {
            return (
              <ChapterComponents
                isInView={isInView}
                chapterData={item}
                key={item.title}
                id={idx + 1}
                activeChapter={activeChapter}
                setActiveChapter={setActiveChapter}
              />
            );
          })}
        </div>
      </div>
      <div className="z-[9] flex absolute bottom-0 justify-center p-[2rem] items-center gap-2 lef-0  w-[100%] ">
        {homepageContent.showcaseSection.content.map((item, idx) => {
          return (
            <div
              onClick={() => {
                setActiveChapter(item.title);
              }}
              key={idx}
              className={`flex w-[10px] h-[10px] ${
                activeChapter?.toLowerCase() === item.title?.toLowerCase()
                  ? "bg-red-500"
                  : "bg-gray-300"
              } rounded`}
            ></div>
          );
        })}
      </div>
      {/* <div className="w-full h-[0] sm:h-full sm:block bg-[#fff]">
        <div
          id={homepageContent.showcaseSection.sectionId}
          className="w-full grid grid-cols-1 overflow-hidden grid-rows-3 h-full text-[#000]"
        >
          {homepageContent.showcaseSection.content.map((item, idx) => {
            return (
              <>
                <MobileCharecterComp
                  isInView={isInView}
                  chapterData={item}
                  key={item.title}
                  id={idx + 1}
                  activeChapter={activeChapter}
                  setActiveChapter={setActiveChapter}
                />
              </>
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default Stories;
