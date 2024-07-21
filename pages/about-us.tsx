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
export const ShowRegisterModalEvent = "ShowRegisterModal";

export default function AboutUs() {
  const [currentTab, setCurrentTab] = useState("ABOUT US");
  const [termsData, setTermsData] = useState("");
  const [privacyData, setPrivacyData] = useState("");
  return (
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
        showCloseIcon={false}
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
        showCloseIcon={false}
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
            <div className="flex flex-col text-[calc(0.65vw+0.65vh)] sm:text-[14px] gap-3 text-[#fff]">
              {homepageContent.about.content.paragraphs.map((item, idx) => {
                return <p key={idx}> {item}</p>;
              })}
            </div>
            <div className="flex flex-col gap-4 text-[#fff]">
              <Link href="mailto:contact@petals.studio">
                <div className="w-[fit-content] cursor-pointer text-[#000] bg-[#fff] hover:bg-[#fff] focus:ring-4 focus:ring-[#fff] font-medium rounded-lg lg:text-[calc(1vw+1vh)] text-sm px-[1rem] py-[calc(0.55*(1vw+1vh))] me-2 mb-2 dark:bg-[#fff] dark:hover:bg-[#fff] focus:outline-none dark:focus:ring-[#fff]">
                  Contact US
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
              <img
                className="object-contain w-[100%] h-[100%]"
                src={homepageContent.about.content.images[0].image}
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="flex w-[100%] items-end justify-between flex-wrap px-[1rem] text-[#fff]">
          <div className="flex gap-[1rem]">
            {homepageContent.footer.content.rightSide.followIcons.map(
              (items, idx) => {
                return (
                  <div key={idx}>
                    <Link href={items.url} target="_blank">
                      <Image
                        width={40}
                        height={40}
                        className="lg:w-[calc(1*(1vw+1vh))] w-[40px]"
                        src={items.src}
                        alt={items.alt}
                      />
                    </Link>
                  </div>
                );
              }
            )}
          </div>

          <div className="flex gap-[1rem] text-[calc(0.75vw+0.75vh)] sm:text-[15px]  sm:hidden">
            <div
              className="cursor-pointer"
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

          <div className="text-right text-[calc(0.75vw+0.75vh)] sm:text-[15px]">
            Developed At
            <div className="pt-[.4rem]">
              <Image
                width={100}
                height={40}
                className="lg:w-[calc(5.2*(1vw+1vh))] w-[100px]"
                src={homepageContent.footer.content.rightSide.developed_at.src}
                alt={homepageContent.footer.content.rightSide.developed_at.alt}
              />
            </div>
          </div>
          <div className="hidden sm:flex gap-[1rem] text-[calc(0.75vw+0.75vh)] sm:text-[15px] w-[100%] items-center justify-center my-[1rem]">
            <div
              className="cursor-pointer"
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
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
