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
import Stories from "./Components/Stories/Stories";
import { useNavigate } from "react-router-dom";
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
      </div>
      {/* <FloatingHeader /> */}

      <Sidebar />

      <RegisterModal />

      {/* <footer className="pb-28 pt-20 snap-start w-full overflow-x-hidden flex flex-col place-items-center bg-footer-img desktop:bg-footer-img-desktop bg-no-repeat bg-cover bg-center">
        <Logo
          className={"desktop:w-[350px] desktop:h-[100px]"}
          width={223}
          height={64}
        />

        <h4
          className={`${albertusNova.variable} desktop:text-xl font-albertus-nova text-white text-center uppercase py-5`}
          style={{ letterSpacing: "0.35em" }}
        >
          {homepageContent.footer.content.title}
        </h4>

        <div className="flex place-items-center">
          <a
            href={homepageContent.heroSection.playStoreLink}
            onClick={() => {
              EventBus.getInstance().fireEvent(ShowRegisterModalEvent);
            }}
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src={"/images/play_store.svg"}
              alt={"Download on Google Play"}
              width={130}
              height={45}
              priority
            />
          </a>
          <div className="h-5 w-5"></div>
          <a
            href={homepageContent.heroSection.appleStoreLink}
            onClick={() => {
              EventBus.getInstance().fireEvent(ShowRegisterModalEvent);
            }}
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src={"/images/app_store.svg"}
              alt={"Download on Apple Store"}
              width={130}
              height={45}
              priority
            />
          </a>
        </div>

        <p
          className={`${inter.className} text-xs text-center text-muted mt-8 mb-3 font-bold`}
        >
          {homepageContent.footer.copyrightText}
        </p>

        <div className="flex place-items-center">
          {homepageContent.footer.sitemap.links.map((link, idx) => {
            const classList = "border-l border-1 border-muted";
            const commonClasses = "px-2";
            return (
              <div
                key={`sitemap-link-${idx}`}
                className={
                  idx > 0 ? [commonClasses, classList].join(" ") : commonClasses
                }
              >
                <Link
                  href={link.url}
                  className={`$${inter.variable} font-inter font-bold text-2xs desktop:text-xs text-muted whitespace-nowrap`}
                >
                  {link.title}
                </Link>
              </div>
            );
          })}
        </div>
      </footer> */}
    </main>
  );
}
