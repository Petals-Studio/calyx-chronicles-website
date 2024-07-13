import homepageContent from "@/cms/home";
import EventBus from "@/EventBus";
import { inter } from "@/fonts";
import usePlatform from "@/hooks/usePlatform";
import { ShowRegisterModalEvent } from "@/pages";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

export default function FloatingHeader() {
  const [show, setShow] = useState(false);
  const { os } = usePlatform();
  const downloadUrl =
    os === "iOS"
      ? homepageContent.landingPage.content.appStore.url
      : homepageContent.landingPage.content.playstore.url;
  useEffect(() => {
    const onScroll = (e) => {
      setShow(window.scrollY > 10);
    };

    if (typeof window !== "undefined") {
      document.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        document.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <div
      className={`w-full pt-4 px-2 transition-all flex justify-between bg-floating-header h-[100px] desktop:h-[150px] fixed z-20 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between">
        <div>
          <Logo
            height={40}
            width={120}
            className={"mt-2 desktop:w-[200px] desktop:h-[80px]"}
          />
        </div>
        <div>
          <a
            href={downloadUrl}
            onClick={() => {
              EventBus.getInstance().fireEvent(ShowRegisterModalEvent);
            }}
            className={`${inter.variable} font-inter bg-gray-100 uppercase rounded-3xl flex items-center p-2 text-sm text-black desktop:mt-4`}
          >
            <span className="mr-2">
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
      </div>
    </div>
  );
}
