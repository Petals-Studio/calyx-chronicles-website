import homepageContent from "@/cms/home";
import useInView from "@/hooks/useInView";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { inView, motion } from "framer-motion";
import Link from "next/link";
interface IHeroSection {
  setCurrentTab: Dispatch<SetStateAction<string>>;
}
const HeroSection = (props: IHeroSection) => {
  const { setCurrentTab } = props;
  const [gif, setGif] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setGif(false);
    }, 2400);
  }, []);

  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });
  useEffect(() => {
    if (isInView) {
      setCurrentTab(homepageContent.landingPage.label);
    }
  }, [isInView]);

  return (
    <div
      ref={targetRef}
      className="w-full flex justify-center items-center h-full flex-col relative bg-[#facc96]"
    >
      {""}
      <div className="w-[100%] h-[100%] relative flex justify-center items-center flex-col fade-in-animation ">
        <div className="flex w-[100%] justify-between items-center fixed p-[1rem] top-0 z-[100]">
          <img
            src={homepageContent.landingPage.content.logo.src}
            style={{
              objectFit: "contain",

              position: "relative",
              width: "120px",
            }}
          />
          <img
            src={homepageContent.landingPage.content.icon.src}
            style={{
              objectFit: "contain",

              position: "relative",
              width: "40px",
            }}
          />
        </div>
        <div
          style={{
            objectFit: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex fixed top-0 left-0 justify-between gap-[1rem] w-[100%] h-[100dvh]">
            <img
              className="lg:left-[-14rem] md:left-[-20rem] sm:left-[-13rem] xs:left-[-13rem]"
              src={homepageContent.landingPage.content.backgroundL.src}
              style={{
                position: "absolute",

                objectFit: "cover",
                top: "0",
                height: "100%",
              }}
            />
            <img
              className="lg:right-[-14rem] md:right-[-20rem]  sm:right-[-13rem] xs:right-[-13rem] "
              src={homepageContent.landingPage.content.backgroundR.src}
              style={{
                position: "absolute",

                objectFit: "cover",
                top: "1rem",
                height: "100%",
              }}
            />
          </div>
          {/* <video
            width={"200px"}
            height={"200px"}
            muted
            loop
            autoPlay
            src={homepageContent.landingPage.content.images.src}
          ></video> */}

          <div id="gif-container">
            {gif && (
              <img
                id="gif"
                src={homepageContent.landingPage.content.gifBG.src}
                alt="Animated GIF"
                style={{
                  objectFit: "contain",
                }}
              />
            )}
            {!gif && (
              <img
                id="static-image"
                src={homepageContent.landingPage.content.images.src}
                alt="Last Frame"
                className="static w-[70%] sm:w-[100%] xs:w-[100%]"
                style={{
                  objectFit: "contain",
                }}
              />
            )}
          </div>
          {/* <img
            className="lg:h-[100%] spin-animation"
            src={homepageContent.landingPage.content.images.src}
            style={{
              objectFit: "contain",
              position: "relative",
            }}
          /> */}
          <div
            className="spin-animation-rest"
            style={{
              zIndex: "23",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              bottom: "10%",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            <div
              style={{
                zIndex: "299",

                display: "flex",
                flexDirection: "column",

                justifyContent: "center",
                gap: "3rem",
                alignItems: "center",
                width: "100%",
                bottom: 0,
                left: 0,
              }}
            >
              {" "}
              <div className="flex w-[full] gap-[2rem] z-100 justify-center items-center cursor-pointer flex-wrap sm:hidden xs:hidden ">
                <img
                  className="w-[220px] md:w-[150px] sm:w-[120px] xs:w-[120px] "
                  src={homepageContent.landingPage.content.appStore.src}
                  style={{
                    objectFit: "contain",
                    position: "relative",
                  }}
                />
                <img
                  src={homepageContent.landingPage.content.playstore.src}
                  className="w-[220px] md:w-[150px] sm:w-[120px] xs:w-[120px]"
                  style={{
                    objectFit: "contain",
                    position: "relative",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            zIndex: "299",

            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
            gap: "3rem",
            alignItems: "center",
            width: "100%",
            bottom: 0,
            left: 0,
          }}
        >
          <div className="flex w-[full] gap-[1rem] z-100 justify-center items-center cursor-pointer mt-[2rem] hidden sm:flex xs:flex xs:flex-col">
            <img
              className="w-[220px] md:w-[150px] sm:w-[120px] xs:w-[120px]"
              src={homepageContent.landingPage.content.appStore.src}
              style={{
                objectFit: "contain",
                position: "relative",
              }}
            />
            <img
              src={homepageContent.landingPage.content.playstore.src}
              className="w-[220px] md:w-[150px] sm:w-[120px] xs:w-[120px]"
              style={{
                objectFit: "contain",
                position: "relative",
              }}
            />
          </div>
        </div>
        <div
          className="fixed grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 bottom-[10px] left-0 w-[100%] text-[#545454] sm:text-[14px] xs:text-[14px] z-[999]"
          style={{ fontFamily: "roboto" }}
        >
          <div className="flex justify-center items-center w-[100%] text-center">
            Copyright © 2024 Rivea World Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex w-[100%] gap-[.5rem] justify-center items-center z-100 cursor-pointer left-0">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <div className="flex w-[1px] h-[10px] bg-black"></div>
            <Link href="/terms-of-service">Terms & Condition</Link>
            <div className="flex w-[1px] h-[10px] bg-black"></div>
            <Link href="mailto:contact@petals.studio">
              contact@petals.studio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
