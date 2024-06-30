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
      <div
        ref={targetRef}
        id={homepageContent.showcaseSection.sectionId}
        className="w-full grid grid-cols-3 h-[100vh] overflow-hidden text-black"
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
        {/* {homepageContent.showcaseSection.title.map((titleText, index) => (
          <h1
            key={`${homepageContent.showcaseSection.sectionId}-title-${index}`}
            className={`${albertusNova.variable} font-albertus-nova font-bold uppercase text-center text-2xl desktop:text-4xl`}
          >
            {titleText}
          </h1>
        ))} */}

        {/* <div className="bg-showcase-img bg-cover bg-no-repeat bg-center pb-32 mt-10 w-full">
          <div className="w-full max-w-8xl mx-auto">
            <div className="grid grid-flow-col auto-cols-[150px] tablet:auto-cols-[1fr] overflow-x-auto snap-x snap-proximity scroll-pl-[150px] overscroll-contain gap-10 horizontal-media-scroller px-10">
              {homepageContent.showcaseSection.content.items.map(
                (item, idx) => (
                  <figure
                    className="snap-start relative"
                    key={`showcase-item-${idx}`}
                  >
                    <>
                      <div className="absolute z-10 h-[90px] w-full bg-linear-gradient bg-gradient-to-b from-transparent to-black bottom-0"></div>
                      <picture>
                        <Image
                          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                          src={item.img}
                          alt={item.caption.join(" ")}
                          width={500}
                          height={500}
                          priority
                        />
                      </picture>
                      <figcaption className="flex flex-col place-items-center absolute z-10 bottom-0 w-full pb-6">
                        {item.caption.map((caption) => (
                          <p
                            key={caption}
                            className={`${albertusNova.variable} font-albertus-nova text-white font-bold text-xs tablet:text-lg mb-0 uppercase`}
                          >
                            {caption}
                          </p>
                        ))}
                      </figcaption>
                    </>
                  </figure>
                )
              )}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Stories;
