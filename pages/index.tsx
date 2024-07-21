import Image from "next/image";
import { albertusNova, inter } from "@/fonts";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Sidebar, { SidebarCloseEvent } from "@/components/Sidebar";
import FloatingHeader from "@/components/FloatingHeader";
import RegisterModal from "@/components/RegisterModal";
import homepageContent from "@/cms/home";
import EventBus from "@/EventBus";

import Stories from "../components/Stories/Stories";
import { useNavigate } from "react-router-dom";
import Section2 from "../components/Section2";
import Community from "../components/Community";
import HeroSection from "../components/HeroSection";
import { useState } from "react";
import StoreSection from "@/components/StoreSection";
import PageRender from "@/components/PageRender";
import StayConnected from "@/components/StayConnected";
import Footer from "@/components/Footer";
import DynamicModal from "@/components/Modal";
export const ShowRegisterModalEvent = "ShowRegisterModal";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [isInVeiw, setIsInVeiw] = useState({
    name: "Home",
    view: true,
  });
  const renderComponent = [
    {
      component: <HeroSection />,
      id: "",
      label: homepageContent.landingPage.label,
    },
    {
      component: <Stories />,
      id: "story",
      label: homepageContent.showcaseSection.label,
    },
    {
      component: <StoreSection />,
      id: "store",
      label: "Store",
    },
    {
      component: <Community />,
      id: "community",
      label: homepageContent.community.label,
    },

    {
      component: <Footer />,
      id: "Contact Us",
      height: "h-[50vh]",
      label: "Contact Us",
    },
  ];
  const [termsData, setTermsData] = useState("");
  const [privacyData, setPrivacyData] = useState("");

  return (
    <main
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
      <div className="scroll-body">
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {renderComponent.map((component, idx) => {
          return (
            <PageRender
              setPrivacyData={setPrivacyData}
              setTermsData={setTermsData}
              setCurrentTab={setCurrentTab}
              component={component}
              key={idx}
            />
          );
        })}

        <RegisterModal />
        <Sidebar />
      </div>
    </main>
  );
}
