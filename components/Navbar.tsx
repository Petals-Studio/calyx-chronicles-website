import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import homepageContent from "@/cms/home";
import { inter } from "@/fonts";
import EventBus from "@/EventBus";
import { SidebarToggleEvent } from "./Sidebar";
import Link from "next/link";
import ImageFallback from "./ImageWithFallback";
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
    <div className="flex w-full fixed justify-end bg-[#fff] z-[9999] px-[1rem] py-[0.5rem]">
      <Link href={"/"}>
        {" "}
        <ImageFallback
          fallbackSrc=""
          width={40}
          height={40}
          src={"/petalIcon.png"}
          alt="logo"
        />
      </Link>
    </div>
  ) : (
    <div
      className={`z-10 w-full flex items-center justify-between lg:backdrop-blur-[4px] ${
        props.noFixed ? "" : "fixed"
      } left-0 top-0 py-2 lg:bg-gradient-to-b from-[#d2911800] ${
        currentTab === "ABOUT US" ? "to-[#d5b58d0c]" : "to-[#d5b58d4b]"
      }
      `}
    >
      <div className="w-full mx-auto flex items-center justify-center px-[5vw]">
        {!props.noItems && (
          <div className="flex flex-1 justify-between lg:text-[calc(0.55vw+0.55vh)] text-[14px]">
            <div className="lg:flex logo">
              <Link href={"/"}>
                {" "}
                <ImageFallback
                  fallbackSrc=""
                  width={35}
                  height={35}
                  className="w-[calc(2*(0.75vw+0.75vh))]"
                  src={"/petalIcon.png"}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="hidden lg:flex flex-0 items-center space-x-6 desktop:space-x-12 lg:justify-self-center">
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
                      ? "underlineLink text-[#C7315C] after:bg-[#C7315C] roboto-black"
                      : currentTab === "ABOUT US"
                      ? "text-[#ccc]"
                      : "text-[#000]"
                  }`}
                  // style={{ color: color ? color : "" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* <div className="hidden tablet:block tablet:w-[48px]"></div> */}
        {!props.noMenu && (
          <div className="lg:hidden flex w-[100%] justify-between items-center">
            {currentTab?.toLocaleLowerCase() === "home" ? (
              <Link href={"/"}>
                {" "}
                <ImageFallback
                  width={35}
                  height={35}
                  src={"/petalIcon.png"}
                  alt="logo"
                  fallbackSrc=""
                />
              </Link>
            ) : (
              <div></div>
            )}
            <button
              className="lg:hidden flex"
              onClick={(e) => {
                e.stopPropagation();
                EventBus.getInstance().fireEvent(SidebarToggleEvent);
              }}
            >
              <ImageFallback
                fallbackSrc={
                  currentTab !== "Community" && currentTab !== "ABOUT US"
                    ? "https://ccx-assets.blr1.cdn.digitaloceanspaces.com/website/hamburgerdark.png"
                    : "https://ccx-assets.blr1.cdn.digitaloceanspaces.com/website/hamburger.png"
                }
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src={
                  currentTab !== "Community" && currentTab !== "ABOUT US"
                    ? "https://ccx-assets.blr1.cdn.digitaloceanspaces.com/website/hamburgerdark.avif"
                    : "https://ccx-assets.blr1.cdn.digitaloceanspaces.com/website/hamburger.avif"
                }
                alt={"Menu"}
                width={27}
                height={34}
                priority
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
