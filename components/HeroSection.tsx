import homepageContent from "@/cms/home";
import useInView from "@/hooks/useInView";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { inView, motion } from "framer-motion";
import Lottie from "lottie-react";
import jsonDtaa from "../public/images/jsonData.json";
import Link from "next/link";
interface IHeroSection {
  isInView?: boolean;
}
const HeroSection = (props: IHeroSection) => {
  const { isInView = false } = props;

  return (
    <div className="w-full flex justify-center items-center h-full overflow-hidden flex-col  bg-[#facc96] text-black relative">
      <div className="w-[100%] h-[100%] flex justify-center items-center flex-col fade-in-animation ">
        <div
          style={{
            objectFit: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex absolute top-0 left-0 justify-between  items-center w-[100%] h-[100dvh]">
            <motion.div
              initial={{ x: isInView ? "-100%" : "-15%" }}
              animate={{ x: "-15%" }}
              className="flex h-[100%] w-[50%] relative justify-end items-center translate-x-[-10%]"
            >
              <img
                className="h-[150%] md:h-[100%] sm:h-[100%] xs:h-[100%] min-w-[500px] md:min-w-[400px] sm:min-w-[350px] "
                src={homepageContent.landingPage.content.backgroundL.src}
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ x: isInView ? "100%" : "15%" }}
              animate={{ x: "15%" }}
              className="flex h-[100%] w-[50%] relative justify-start items-center translate-x-[10%]"
            >
              <img
                className="w-[100%] h-[150%] md:h-[100%] sm:h-[100%] xs:h-[100%] min-w-[500px] md:min-w-[400px] sm:min-w-[350px]"
                src={homepageContent.landingPage.content.backgroundR.src}
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>

          <div className="flex w-[100%] justify-center items-center">
            <Lottie
              style={{
                height: "90%",
                width: "90%",
              }}
              loop={false}
              animationData={jsonDtaa}
            />
          </div>

          <div
            className="spin-animation-rest"
            style={{
              zIndex: "23",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              bottom: "5%",
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
                <Link href={homepageContent.landingPage.content.playstore.url}>
                  <img
                    src={homepageContent.landingPage.content.playstore.src}
                    className="w-[220px] md:w-[150px] sm:w-[120px] xs:w-[120px]"
                    style={{
                      objectFit: "contain",
                      position: "relative",
                    }}
                  />
                </Link>
                <Link href={homepageContent.landingPage.content.appStore.url}>
                  <img
                    className="w-[220px] md:w-[150px] sm:w-[120px] xs:w-[120px] "
                    src={homepageContent.landingPage.content.appStore.src}
                    style={{
                      objectFit: "contain",
                      position: "relative",
                    }}
                  />
                </Link>
              </div>
              <div className="text-[#565252] uppercase">
                Begin Adventure {">"}{" "}
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
            <Link href={homepageContent.landingPage.content.playstore.url}>
              <img
                src={homepageContent.landingPage.content.playstore.src}
                className="w-[220px] md:w-[150px] sm:w-[120px] xs:w-[120px]"
                style={{
                  objectFit: "contain",
                  position: "relative",
                }}
              />
            </Link>
            <Link href={homepageContent.landingPage.content.appStore.url}>
              <img
                className="w-[220px] md:w-[150px] sm:w-[120px] xs:w-[120px]"
                src={homepageContent.landingPage.content.appStore.src}
                style={{
                  objectFit: "contain",
                  position: "relative",
                }}
              />
            </Link>
          </div>
        </div>
        {/* <div
          className="fixed grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 bottom-[10px] left-0 w-[100%] text-[#545454] sm:text-[14px] xs:text-[14px] z-[999]"
          style={{ fontFamily: "roboto" }}
        >
          <div className="flex justify-center items-center w-[100%] text-center">
            Copyright © 2024 Rivea World Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex w-[100%] gap-[.5rem] justify-center items-center z-100 cursor-pointer left-0 flex-wrap">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <div className="flex w-[1px] h-[10px] bg-black"></div>
            <Link href="/terms-of-service">Terms & Condition</Link>
            <div className="flex w-[1px] h-[10px] bg-black"></div>
            <Link href="mailto:contact@petals.studio">
              contact@petals.studio
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
