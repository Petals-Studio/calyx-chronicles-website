import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDeviceType } from "@/hooks/useDeviceType";
import useInView from "@/hooks/useInView";
import Link from "next/link";
import ImageFallback from "@/components/ImageWithFallback";
interface IChapterComponent {
  chapterData: {
    image: {
      colored: string;
      uncolored: string;
      coloredFallback: string;
      uncoloredFallback: string;
    };

    color: string;
    videoLink?: string;
    title: string;
    heading: string;
    isActive: boolean;
    style: { [key: string]: string | number | undefined };
    subText: string;
    background: string;
  };
  id: number;

  isInView: boolean;
  setVideoData?: Dispatch<
    SetStateAction<
      | {
          chaptername: string;
          chapterLink: string;
          chapterColor: string;
          chapterDiscription: string;
        }
      | undefined
    >
  >;
  setActiveChapter: React.Dispatch<React.SetStateAction<string>>;

  activeChapter: string;
}
const ChapterComponents = (props: IChapterComponent) => {
  const { isDesktop } = useDeviceType();
  const divRef = useRef<HTMLDivElement>(null);
  const isChapterInView = useInView({ targetRef: divRef });
  const {
    chapterData,
    id,
    isInView,
    setVideoData,
    setActiveChapter,
    activeChapter,
  } = props;
  const isActive = chapterData?.isActive;

  useEffect(() => {
    if (!isDesktop && isInView && isChapterInView) {
      setActiveChapter(chapterData.title);
    }
  }, [
    isInView,
    isChapterInView,
    isDesktop,
    setActiveChapter,
    chapterData.title,
  ]);

  return (
    <div
      ref={divRef}
      id={chapterData?.title}
      className="p-[0rem] wrapper-body"
      onMouseEnter={() => {
        setActiveChapter(chapterData?.title);
      }}
    >
      <div
        className={`w-[100%] h-[100dvh] opacity-0 relative ${
          id !== 3 ? "" : "after:bg-transparent"
        } text-[#fff] after:absolute after:z-[-1] after:w-[1px] after:h-[70%] after:rounded-[100%] after:top-20 after:right-0  ${
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
                animationDelay: `${0.0 * (id - 1)}s`,
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
            <div
              style={{
                color:
                  chapterData?.title === activeChapter
                    ? chapterData.color
                    : "#737373c4",
              }}
              className={` uppercase text-[35px] sm:text-[24px] roboto-bold-italic`}
            >
              Coming Soon
            </div>
          )}
          {
            <>
              {isActive && chapterData?.title === activeChapter && (
                <div
                  className="p-[20%] sm:p-[2%] sm:pl-[3.5rem] sm:pr-[0] uppercase sm:mt-[2rem]"
                  style={{ zIndex: 100 }}
                >
                  <div className="lg:text-[calc(1.25*(1vh+1vw))] text-[34px] my-2 roboto-thin">
                    {chapterData?.title}
                  </div>
                  <div className="roboto-bold-italic lg:text-[calc(.75*(1vh+1vw))] text-[18px] my-2 sm:text-[16px] italic">
                    {chapterData?.heading}
                  </div>
                  <div className="lg:text-[calc(.55*(1vh+1vw))] text-[12px] roboto-regular">
                    {chapterData?.subText}
                  </div>

                  <div
                    className="flex items-center justify-start gap-2 mt-[1rem] cursor-pointer lg:text-[calc(.75*(1vh+1vw))] text-[14px] roboto-regular"
                    onClick={() => {
                      setVideoData &&
                        setVideoData({
                          chapterLink: chapterData?.videoLink ?? "",
                          chaptername: chapterData.title,
                          chapterColor: chapterData.color,
                          chapterDiscription: chapterData.heading,
                        });
                    }}
                  >
                    <ImageFallback
                      fallbackSrc="https://assets.calyxchronicles.com/website/playIcon.png"
                      width={25}
                      height={25}
                      src={
                        "https://assets.calyxchronicles.com/website/playIcon.avif"
                      }
                      alt="play_icon"
                    />

                    <div>Trailer</div>
                  </div>
                </div>
              )}
              <ImageFallback
                width={100}
                height={100}
                className="image"
                src={
                  isActive && chapterData?.title === activeChapter
                    ? chapterData?.image?.colored
                    : chapterData?.image?.uncolored
                }
                alt={chapterData?.title}
                style={{
                  zIndex: 99,
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
                        ? "translateX(20%) translateY(0%)"
                        : id === 1
                        ? "translateX(10%) translateY(0%)"
                        : "translateY(-20%)"
                      : "translateY(-10%) scale(1)",

                  opacity:
                    isActive && chapterData?.title === activeChapter ? 1 : 1,

                  position: "absolute",
                  ...chapterData?.style,
                }}
                fallbackSrc={
                  isActive && chapterData?.title === activeChapter
                    ? chapterData?.image?.colored
                    : chapterData?.image?.uncolored
                }
              />

              {(chapterData?.title !== activeChapter || !isActive) && (
                <div
                  className="absolute uppercase lg:text-[calc(.75*(1vh+1vw))] text-[20px]  right-[50%] mr-[-.4rem] translate-x-[50%] bottom-[3rem] text-[#ccc] roboto-medium"
                  style={{
                    color:
                      chapterData?.title === activeChapter
                        ? chapterData.color
                        : "",
                  }}
                >
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
