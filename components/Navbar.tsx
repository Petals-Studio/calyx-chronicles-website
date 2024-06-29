import React from "react";
import Image from "next/image";
import homepageContent from "@/cms/home";
import { inter } from "@/fonts";
import EventBus from "@/EventBus";
import { SidebarToggleEvent } from "./Sidebar";
import Link from "next/link";
interface NavbarProps {
  noItems?: boolean;
  noFixed?: boolean;
  noMenu?: boolean;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div
      className={`z-10 w-full flex items-center justify-between ${
        props.noFixed ? "" : "fixed"
      } left-0 top-0 pt-6`}
    >
      <div className="w-full max-w-8xl mx-auto flex items-center px-2.5 tablet:pl-5 tablet:pr-12">
        {!props.noItems && (
          <div className="flex flex-1 justify-start">
            <div className="hidden tablet:flex flex-0 items-center space-x-6 desktop:space-x-12 tablet:justify-self-center">
              {homepageContent.menu.links.map((link, idx) => (
                <a
                  key={`menu-link-${idx}`}
                  href={link.url}
                  className={`${inter.variable} font-inter text-black uppercase`}
                >
                  {link.label}
                </a>
              ))}
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
              src={"/images/hamburger.svg"}
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
