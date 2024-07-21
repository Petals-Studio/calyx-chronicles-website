import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import homepageContent from "@/cms/home";
import { inter } from "@/fonts";
import EventBus from "@/EventBus";
import { SidebarToggleEvent } from "./Sidebar";
import Link from "next/link";
interface NavbarProps {
  noItems?: boolean;
  noFixed?: boolean;
  onlyIcon?: boolean;
  noMenu?: boolean;
  currentTab?: string;
  color?: string;
  setCurrentTab?: Dispatch<SetStateAction<string>>;
}

export default function Navbar(props: NavbarProps) {
  const { currentTab, setCurrentTab, color } = props;
  return props.onlyIcon ? (
    <div className="flex w-full fixed justify-end bg-[#fff] z-[9999] p-[1rem] ">
      <Link href={"/"}>
        {" "}
        <Image width={40} height={40} src={"/petalIcon.png"} alt="logo" />
      </Link>
    </div>
  ) : (
    <div
      className={`z-10 w-full flex items-center justify-between backdrop-blur-[4px] ${
        props.noFixed ? "" : "fixed"
      } left-0 top-0 py-4 tablet:bg-gradient-to-b from-[#D29218] to-[#d5b58d78]
      `}
    >
      <div className="w-full max-w-8xl mx-auto flex items-center px-2.5 tablet:pl-5 ">
        {!props.noItems && (
          <div className="flex flex-1 justify-between text-[12px]">
            <div className="hidden tablet:flex flex-0 items-center space-x-6 desktop:space-x-12 tablet:justify-self-center">
              {homepageContent.menu.links.map((link, idx) => (
                <a
                  key={`menu-link-${idx}`}
                  href={link.url}
                  onClick={() => {
                    setCurrentTab && setCurrentTab(link.label);
                  }}
                  className={`roboto-regular relative uppercase ${
                    currentTab?.toLocaleLowerCase() ===
                    link.label?.toLocaleLowerCase()
                      ? "underlineLink text-[#C7315C] after:bg-[#C7315C]"
                      : "text-[#000]"
                  }`}
                  // style={{ color: color ? color : "" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="hidden tablet:flex logo">
              <Link href={"/"}>
                {" "}
                <Image
                  width={40}
                  height={40}
                  src={"/petalIcon.png"}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        )}

        <div className="hidden tablet:block tablet:w-[48px]"></div>

        {!props.noMenu && (
          <button
            className="tablet:hidden"
            onClick={(e) => {
              e.stopPropagation();
              EventBus.getInstance().fireEvent(SidebarToggleEvent);
            }}
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src={
                currentTab !== "Community"
                  ? "/images/hamburgerdark.svg"
                  : "/images/hamburger.svg"
              }
              alt={"Menu"}
              width={27}
              height={34}
              priority
            />
          </button>
        )}
      </div>
    </div>
  );
}
