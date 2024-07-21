import Navbar from "@/components/Navbar";

import homepageContent from "@/cms/home";

import { useState } from "react";
import { motion } from "framer-motion";
import DynamicModal from "@/components/Modal";
import { inter } from "@/fonts";
import EventBus from "@/EventBus";
import Sidebar, { SidebarCloseEvent } from "@/components/Sidebar";
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
        child={
          termsData && (
            <div
              className={`${inter.variable} font-inter dangerous-content sm:text-[14px]`}
              dangerouslySetInnerHTML={{ __html: termsData }}
            ></div>
          )
        }
        type="center"
        closeClickOutside
        title={
          <div className={`${inter.className} text-[30px]`}>
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
              className={`${inter.variable} font-inter dangerous-content`}
              dangerouslySetInnerHTML={{ __html: privacyData }}
            ></div>
          )
        }
        type="center"
        title={
          <div className={`${inter.className} text-[30px]`}>Privacy Policy</div>
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
      <div className="customFont w-full h-[100dvh]  md:h-[auto] sm:h-[auto] xs:h-[auto] wrapper-body  flex flex-wrap mt-[2rem]">
        <div className="flex justify-between min-w-[500px] sm:min-w-[300px] xs:min-w-[300px] w-[100%] basis-[100%] lg:basis-[50%] h-[100%] px-[4rem] sm:px-[1rem] xs:px-[1rem] py-[4rem] flex-col gap-[1rem]">
          <div className="text-[35px] lg:mt-[4rem]">
            {homepageContent.about.content.title}
          </div>
          <div className="flex flex-col gap-3 lg:mt-[-4rem]">
            {homepageContent.about.content.paragraphs.map((item, idx) => {
              return <p key={idx}> {item}</p>;
            })}
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-[fit-content] text-black bg-white-700 hover:bg-white-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800">
              Contact Us
            </div>
            <div className="flex gap-4">
              <div
                onClick={() => {
                  setPrivacyData(homepageContent.privacyPolicy.data);
                }}
              >
                Privacy Policy
              </div>
              <div
                onClick={() => {
                  setTermsData(homepageContent.termsConditions.data);
                }}
              >
                Terms & Conditions
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[100%] h-[100%] basis-[100%] lg:basis-[50%]  min-w-[500px] sm:min-w-[200px] xs:min-w-[200px] p-[2rem] sm:p-[0] xs:p-[0]">
          <motion.div
            initial={homepageContent.about.content.images[0].animation.initial}
            animate={homepageContent.about.content.images[0].animation.animate}
          >
            <img
              className="object-cover w-[100%] h-[100%]"
              src={homepageContent.about.content.images[0].image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}