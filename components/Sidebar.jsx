import homepageContent from "@/cms/home";
import EventBus from "@/EventBus";
import { inter } from "@/fonts";
import usePlatform from "@/hooks/usePlatform";
import { ShowRegisterModalEvent } from "@/pages";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

export const SidebarToggleEvent = "ToggleSidebar";
export const SidebarCloseEvent = "CloseSidebar";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const { os } = usePlatform();
  const downloadUrl =
    os === "iOS"
      ? homepageContent.landingPage.content.appStore.url
      : homepageContent.landingPage.content.playstore.url;

  useEffect(() => {
    const toggleSidebar = () => {
      setShowSidebar((val) => !val);
    };

    const closeSidebar = () => {
      setShowSidebar(false);
    };

    EventBus.getInstance().addListener(SidebarToggleEvent, toggleSidebar);
    EventBus.getInstance().addListener(SidebarCloseEvent, closeSidebar);

    return () => {
      EventBus.getInstance().removeListener(toggleSidebar);
      EventBus.getInstance().removeListener(closeSidebar);
    };
  }, []);

  return (
    <div
      onClick={() => {
        EventBus.getInstance().fireEvent(SidebarToggleEvent);
      }}
      className={`top-0 right-0 w-[75vw] bg-black p-10 text-white fixed  h-screen ease-in-out duration-300 flex flex-col items-center overflow-x-hidden overflow-y-scroll z-[9999] ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <Logo />

      <div className="flex flex-col space-y-5 mt-10">
        {homepageContent.menu.links.map((link, idx) => (
          <a
            key={`sidebar-link-${idx}`}
            href={link.url}
            className={`${
              inter.variable
            } font-inter font-bold text-white uppercase text-center ${
              idx > 0 ? "border-t border-1 border-gray-500 pt-4" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={downloadUrl}
        onClick={() => {
          EventBus.getInstance().fireEvent(ShowRegisterModalEvent);
        }}
        className={`${inter.variable} font-inter bg-gray-100 uppercase rounded-3xl flex items-center p-2 text-sm text-black mt-10`}
      >
        <span className=" mr-2">
          <svg
            width="14"
            height="7"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.160176 0.148569C-0.053392 0.346661 -0.053392 0.667832 0.160176 0.865924L6.6133 6.85143C6.82687 7.04952 7.17313 7.04952 7.3867 6.85143L13.8398 0.865924C14.0534 0.667832 14.0534 0.346661 13.8398 0.148569C13.6263 -0.049523 13.28 -0.049523 13.0664 0.148569L7 5.7754L0.933574 0.148569C0.720006 -0.049523 0.373744 -0.049523 0.160176 0.148569Z"
              fill="#212121"
            />
          </svg>
        </span>
        DOWNLOAD NOW
      </a>
    </div>
  );
}
