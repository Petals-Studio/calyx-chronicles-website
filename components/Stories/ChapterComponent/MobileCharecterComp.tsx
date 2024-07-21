import React from "react";

interface IMobileCharecterComp {
  chapterData: {
    image: {
      colored: string;
      uncolored: string;
    };
    title: string;
    styleResp: { [key: string]: string | number | undefined };
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
const MobileCharecterComp = (props: IMobileCharecterComp) => {
  const { chapterData, id, isInView, setActiveChapter, activeChapter } = props;
  const isActive = chapterData?.isActive;

  return (
    <>
      <div
        className="w-[100%] h-[100%]"
        onMouseEnter={() => {
          setActiveChapter(chapterData?.title);
        }}
      >
        <div
          className={`w-[100%] opacity-0 relative h-[100%] ${
            id !== 3 ? " after:bg-[#000]" : "after:bg-transparent"
          } text-[#fff] after:absolute after:w-[100%] after:h-[1px] after:bg-[#000] after:rounded-[100%] after:bottom-0 after:left-10  ${
            isActive && chapterData?.title === activeChapter
              ? chapterData?.background
              : ""
          } ${
            isActive && chapterData?.title === activeChapter ? "z-[2]" : ""
          } story-animation-mobile ${
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
            className={`w-[100%] flex flex-col h-[100%]  ${
              isActive ? "justify-start" : "justify-center"
            } ${isActive ? "items-start" : "items-center"}`}
          >
            {!isActive && <div className="text-[#000]"> Comming Soon</div>}
            {
              <>
                {isActive && chapterData?.title === activeChapter && (
                  <div className="p-[1rem]">
                    <div className="font-bold text-[34px] my-2">
                      {chapterData?.title}
                    </div>
                    <div className="font-bold text-[18px] my-2">
                      {chapterData?.heading}
                    </div>
                    <div>{chapterData?.subText}</div>
                  </div>
                )}
                <img
                  src={
                    isActive && chapterData?.title === activeChapter
                      ? chapterData?.image?.colored
                      : chapterData?.image?.uncolored
                  }
                  alt={chapterData?.title}
                  style={{
                    zIndex: 999,
                    objectFit: "contain",
                    margin: "0 auto",
                    top: "0%",
                    transition: "transform .2s",
                    transformOrigin: "center",
                    transform:
                      isActive && chapterData?.title === activeChapter
                        ? id === 3
                          ? "translateX(0%) translateY(-50%) scale(.6)"
                          : id === 1
                          ? "translateX(-20%) translateY(0%) scale(.6)"
                          : "translateX(60%) translateY(-50%) scale(.8)"
                        : id === 2
                        ? "translateX(30%) translateY(-20%)"
                        : "translateY(-10%)",

                    opacity:
                      isActive && chapterData?.title === activeChapter ? 1 : 1,

                    position: "absolute",
                    ...chapterData?.styleResp,
                  }}
                />
                {isActive && chapterData?.title !== activeChapter && (
                  <div className="absolute bottom-10 text-[24px] right-20 mr-[2rem] text-[#000]">
                    {chapterData?.title}
                  </div>
                )}
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileCharecterComp;
