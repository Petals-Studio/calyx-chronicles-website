import Image from "next/image";
import { albertusNova, inter } from "@/fonts";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Sidebar, { SidebarCloseEvent } from "@/components/Sidebar";
import FloatingHeader from "@/components/FloatingHeader";
import RegisterModal from "@/components/RegisterModal";
import homepageContent from "@/cms/home";
import EventBus from "@/EventBus";
import Link from "next/link";

export default function ContactUs() {
  const data = `
    <p>If you have any questions or need assistance, please feel free to email us at:</p>
    <p><a href="mailto:contact@petals.studio">contact@petals.studio</a></p>
  `;

  return (
    <main
      className="w-full flex min-h-screen flex-col items-center bg-[#000] text-[#fff]"
      onClick={() => {
        EventBus.getInstance().fireEvent(SidebarCloseEvent);
      }}
    >
      <Navbar noItems noFixed noMenu />
      <div className="relative py-8 tablet:py-12 w-full">
        <div className="w-full max-w-8xl mx-auto flex flex-col px-2.5 tablet:pl-5 tablet:pr-12">
          <h1
            className={`${inter.variable} font-inter tablet:text-lg font-bold tracking-wide mb-4`}
          >
            CONTACT US
          </h1>
          <div
            className={`${inter.variable} font-inter dangerous-content`}
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        </div>
      </div>
    </main>
  );
}
