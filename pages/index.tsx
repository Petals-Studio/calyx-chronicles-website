import Image from "next/image";
import { albertusNova, inter } from "@/fonts";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Sidebar, { SidebarCloseEvent } from "@/components/Sidebar";
import FloatingHeader from "@/components/FloatingHeader";
import RegisterModal from "@/components/RegisterModal";
import homepageContent from "@/cms/home";
import EventBus from "@/EventBus";

import Stories from "./Components/Stories/Stories";
import { useNavigate } from "react-router-dom";
import Section2 from "./Components/Section2";
export const ShowRegisterModalEvent = "ShowRegisterModal";

export default function Home() {
  return (
    <main
      onClick={() => {
        EventBus.getInstance().fireEvent(SidebarCloseEvent);
      }}
    >
      <div className="scroll-body">
        <Navbar />
        <div className="w-full h-screen wrapper-body text-black flex justify-center items-center">
          {" "}
          <a href="#story"> Begin Adventure</a>
        </div>
        <div className="w-full h-screen wrapper-body" id="story">
          <Stories />
        </div>
        <div className="w-full h-screen wrapper-body " id="section2">
          <Section2 />
        </div>

        <RegisterModal />
        <Sidebar />
      </div>
    </main>
  );
}
