import Navbar from "@/components/Navbar";

import homepageContent from "@/cms/home";

import { useState } from "react";
import { motion } from "framer-motion";
import DynamicModal from "@/components/Modal";
import { inter } from "@/fonts";
import EventBus from "@/EventBus";
import Sidebar, { SidebarCloseEvent } from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useDeviceType } from "@/hooks/useDeviceType";
import ImageFallback from "@/components/ImageWithFallback";
import Head from "next/head";

export const ShowRegisterModalEvent = "ShowRegisterModal";

export default function AboutUs() {
  const { isDesktop } = useDeviceType();
  const [currentTab, setCurrentTab] = useState("ABOUT US");
  const [termsData, setTermsData] = useState("");
  const [privacyData, setPrivacyData] = useState("");

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Join the adventure in Calyx Chronicles, the ultimate mobile arcade multiplayer seasional game! Experience captivating storylines, fresh arcade games, and quick, exciting gameplay. Compete globally, customize your character, and unravel the mysteries of planet Calyx. Download now and conquer the world of Calyx Chronicles!"
        />
        <link
          id="light-scheme-icon"
          rel="shortcut icon"
          href="/petalIcon.png"
        />
        <title>About Us</title>
        {/* <link id="dark-scheme-icon" rel="shortcut icon" href="/petals-favicon-black.png" /> */}
      </Head>
      <div
        className="scroll-body"
        style={{ background: "#1C2543 !important" }}
        onClick={() => {
          EventBus.getInstance().fireEvent(SidebarCloseEvent);
        }}
      >
        <DynamicModal
          width="400px"
          child={
            termsData && (
              <div
                className={`${inter.variable} roboto-regular  dangerous-content lg:text-[calc(0.75vw+0.75vh)]  text-[14px]`}
                dangerouslySetInnerHTML={{ __html: termsData }}
              ></div>
            )
          }
          type="center"
          closeClickOutside
          title={
            <div
              className={`${inter.className} lg:text-[calc(2*(0.75vw+0.75vh))] text-[30px]`}
            >
              {" "}
              Terms & Conditions
            </div>
          }
          isCloseIcon
          position={""}
          showCloseIcon={isDesktop ? false : true}
          isOpen={termsData ? true : false}
          dynamicCloser={() => {
            setTermsData("");
          }}
        />
        <DynamicModal
          closeClickOutside
          child={
            privacyData && (
              <div
                className={`${inter.variable} roboto-regular dangerous-content lg:text-[calc(0.75vw+0.75vh)]  text-[14px]`}
                dangerouslySetInnerHTML={{ __html: privacyData }}
              ></div>
            )
          }
          type="center"
          title={
            <div
              className={`${inter.className} lg:text-[calc(2*(0.75vw+0.75vh))]  text-[30px]`}
            >
              Privacy Policy
            </div>
          }
          isCloseIcon
          showCloseIcon={isDesktop ? false : true}
          position={""}
          isOpen={privacyData ? true : false}
          dynamicCloser={() => {
            setPrivacyData("");
          }}
        />
        <Navbar
          color={"#fff"}
          currentTab={"ABOUT US"}
          setCurrentTab={setCurrentTab}
        />
        <div className="wrapper-body roboto-regular flex-col text-[calc(0.75vw+0.75vh)] sm:text-[15px]">
          <div className="w-[100%] min-h-[90dvh] md:h-[auto] sm:h-[auto] xs:h-[auto] flex flex-wrap pt-[2rem] overflow-hidden">
            <div className="flex justify-between min-w-[500px] sm:min-w-[300px] xs:min-w-[300px] w-[100%] basis-[100%] lg:basis-[50%] h-[100%] px-[4rem] sm:px-[1rem] xs:px-[1rem] py-[5rem] sm:py-[1rem] flex-col gap-[1rem]">
              <div className="text-[3em] sm:text-[35px] text-[#fff]">
                {homepageContent.about.content.title}
              </div>
              <div className="flex flex-col text-[calc(0.65vw+0.65vh)] sm:text-[12px] gap-3 text-[#fff]">
                {homepageContent.about.content.paragraphs.map((item, idx) => {
                  return <p key={idx}> {item}</p>;
                })}
              </div>
              <div className="flex flex-col gap-4 text-[#fff] mt-[1rem]">
                <Link href="mailto:contact@petals.studio">
                  <div className="w-[fit-content] uppercase cursor-pointer text-[#000] bg-[#fff] hover:bg-[#fff] focus:ring-4 focus:ring-[#fff] font-medium rounded-lg lg:text-[calc(0.75vw+0.75vh)] text-sm px-[1rem] py-[calc(0.55*(1vw+1vh))] me-2 mb-2 dark:bg-[#fff] dark:hover:bg-[#fff] focus:outline-none dark:focus:ring-[#fff]">
                    Contact Us
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex w-[100%] h-[80vh]  basis-[100%] lg:basis-[50%] sm:min-w-[200px] xs:min-w-[200px] p-[2rem] sm:p-[0] xs:p-[0] lg:pt-[4rem] items-start justify-start">
              <motion.div
                initial={
                  homepageContent.about.content.images[0].animation.initial
                }
                animate={
                  homepageContent.about.content.images[0].animation.animate
                }
                className="w-[100%] h-[100%]"
              >
                <ImageFallback
                  fallbackSrc={
                    homepageContent.about.content.images[0].fallbackImage
                  }
                  width={100}
                  height={100}
                  className="object-contain w-[100%] h-[100%] ml-[-2rem]"
                  src={homepageContent.about.content.images[0].image}
                  alt="about"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex w-[100%] items-end justify-between sm:justify-center gap-2 sm:gap-[1rem] flex-wrap sm:flex-col px-[4rem] sm:px-[1rem] text-[#fff] sm:pb-[.5rem]">
            <div className="flex gap-[1rem] sm:justify-start sm:w-[100%]">
              {homepageContent.footer.content.rightSide.followIcons.map(
                (items, idx) => {
                  return (
                    <div key={idx}>
                      <Link href={items.url} target="_blank">
                        <ImageFallback
                          fallbackSrc={items.fallbackSrc}
                          width={40}
                          height={40}
                          className="lg:w-[calc(1.65*(1vw+1vh))] w-[30px] sm:w-[20px]"
                          src={items.src}
                          alt={items.alt}
                        />
                      </Link>
                    </div>
                  );
                }
              )}
            </div>

            <div className="flex uppercase gap-[1rem] text-[calc(0.75vw+0.75vh)] sm:justify-start sm:w-[100%] sm:text-[10px]">
              <div
                className="cursor-pointer"
                style={{ borderRight: "1px solid #fff", paddingRight: "1rem" }}
                onClick={() => {
                  setPrivacyData(homepageContent.privacyPolicy.data);
                }}
              >
                Privacy Policy
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setTermsData(homepageContent.termsConditions.data);
                }}
              >
                Terms & Conditions
              </div>
            </div>

            <div className="text-right sm:flex sm:justify-start sm:items-center text-[calc(0.55vw+0.55vh)] sm:w-[100%] sm:gap-2 uppercase sm:text-[12px]">
              Developed At
              <div className="pt-[.4rem] sm:pt-0">
                <ImageFallback
                  fallbackSrc={
                    homepageContent.footer.content.rightSide.developed_at
                      .fallbacksrc
                  }
                  width={100}
                  height={40}
                  className="lg:w-[calc(5.2*(1vw+1vh))] w-[100px]"
                  src={
                    homepageContent.footer.content.rightSide.developed_at.src
                  }
                  alt={
                    homepageContent.footer.content.rightSide.developed_at.alt
                  }
                />
              </div>
            </div>
            {/* <div className="hidden sm:flex uppercase gap-[1rem] text-[calc(0.75vw+0.75vh)] sm:text-[12px] w-[100%] items-center justify-center my-[1rem]">
            <div
              className="cursor-pointer"
              style={{ borderRight: "1px solid #fff", paddingRight: "1rem" }}
              onClick={() => {
                setPrivacyData(homepageContent.privacyPolicy.data);
              }}
            >
              Privacy Policy
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setTermsData(homepageContent.termsConditions.data);
              }}
            >
              Terms & Conditions
            </div>
          </div> */}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
