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
export const ShowRegisterModalEvent = "ShowRegisterModal";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("Home");
  return (
    <main
      onClick={() => {
        EventBus.getInstance().fireEvent(SidebarCloseEvent);
      }}
    >
      <div className="scroll-body">
        <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div className="w-full h-[100dvh] wrapper-body text-black flex justify-center items-center">
          <HeroSection setCurrentTab={setCurrentTab} />
        </div>
        <div className="w-full h-[100dvh] wrapper-body" id="story">
          <Stories setCurrentTab={setCurrentTab} />
        </div>
        <div className="w-full h-[100dvh] wrapper-body" id="section2">
          <Section2 setCurrentTab={setCurrentTab} />
        </div>

        <div
          id="community"
          className={`w-full h-[100dvh] wrapper-body ${homepageContent.community.content.background} `}
        >
          <Community setCurrentTab={setCurrentTab} />
        </div>

        <RegisterModal />
        <Sidebar />
      </div>
    </main>
  );
}
