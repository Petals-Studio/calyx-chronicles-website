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
  ];

  return (
    <main
      onClick={() => {
        EventBus.getInstance().fireEvent(SidebarCloseEvent);
      }}
    >
      <div className="scroll-body">
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {renderComponent.map((component, idx) => {
          return (
            <PageRender
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
