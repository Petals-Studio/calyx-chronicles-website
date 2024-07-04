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
import ChapterComponents from "./ChapterComponent";
import useInView from "@/hooks/useInView";
import MobileCharecterComp from "./ChapterComponent/MobileCharecterComp";

interface IStories {
  setCurrentTab: Dispatch<SetStateAction<string>>;
}
const Stories = (props: IStories) => {
  const { setCurrentTab } = props;

  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });
  const [activeChapter, setActiveChapter] = useState("");

  useEffect(() => {
    if (isInView) {
      setCurrentTab(homepageContent.showcaseSection.label);
    }
  }, [isInView]);
  return (
    <>
      <div className="w-full h-full sm:hidden">
        <div
          ref={targetRef}
          id={homepageContent.showcaseSection.sectionId}
          className="w-full grid grid-cols-3 h-full overflow-hidden text-black"
        >
          {homepageContent.showcaseSection.content.map((item, idx) => {
            return (
              <ChapterComponents
                chapterData={item}
                key={item.title}
                id={idx + 1}
                activeChapter={activeChapter}
                setActiveChapter={setActiveChapter}
                isInView={isInView}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full h-[0] sm:h-full sm:block">
        <div
          ref={targetRef}
          id={homepageContent.showcaseSection.sectionId}
          className="w-full grid grid-cols-1 overflow-hidden grid-rows-3 h-full text-black"
        >
          {homepageContent.showcaseSection.content.map((item, idx) => {
            return (
              <>
                <MobileCharecterComp
                  chapterData={item}
                  key={item.title}
                  id={idx + 1}
                  activeChapter={activeChapter}
                  setActiveChapter={setActiveChapter}
                  isInView={isInView}
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
