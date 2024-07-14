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

interface IStories {
  isInView?: boolean;
}
const Stories = (props: IStories) => {
  const { isInView = false } = props;

  const [activeChapter, setActiveChapter] = useState("");

  return (
    <>
      <div className="w-full h-full sm:hidden bg-white">
        <div
          id={homepageContent.showcaseSection.sectionId}
          className="w-full grid grid-cols-3 h-full overflow-hidden text-black"
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
      <div className="w-full h-[0] sm:h-full sm:block bg-white">
        <div
          id={homepageContent.showcaseSection.sectionId}
          className="w-full grid grid-cols-1 overflow-hidden grid-rows-3 h-full text-black"
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
      </div>
    </>
  );
};

export default Stories;
