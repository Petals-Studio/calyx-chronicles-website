import homepageContent from "@/cms/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      id={"Contact-Us"}
      className={`w-[100%] min-h-[50dvh] sm:minH-[100dvh] text-black  bg-no-repeat bg-center bg-cover flex flex-wrap justify-between gap-[1rem] customFont uppercase`}
      style={{
        backgroundImage: ` url(${homepageContent.footer.content.background})`,
      }}
    >
      <div className="flex w-[100%] lg:w-[50%]  lg:flex-[40%] h-[100%]  text-white flex-col p-[3rem] gap-[1rem]">
        <div className="text-[50px] sm:text-[40px] font-thin">
          {homepageContent.footer.content.leftSide.title}
        </div>
        <div className="text-[16px]">
          {homepageContent.footer.content.leftSide.subHeading}
        </div>
        <div className="flex gap-[1rem]">
          <input type="email" className="bg-[#E5E3E3] lg:w-[40%] rounded-xl" />
          <div className="bg-gradient-to-b from-[#989898] to-[#4A4A4A] p-[.5rem] rounded-xl">
            Send
          </div>
        </div>
        <div className="flex gap-[1rem] lg:justify-end md:justify-center  items-center mt-[3rem]">
          <Link href={homepageContent.footer.content.leftSide.playstore.url}>
            <Image
              width={200}
              height={10}
              src={homepageContent.footer.content.leftSide.playstore.src}
              alt={homepageContent.footer.content.leftSide.playstore.alt}
            />
          </Link>
          <Link href={homepageContent.footer.content.leftSide.appStore.url}>
            <Image
              width={200}
              height={10}
              src={homepageContent.footer.content.leftSide.appStore.src}
              alt={homepageContent.footer.content.leftSide.appStore.alt}
            />
          </Link>
        </div>
      </div>
      <div className="flex  w-[100%] lg:w-[50%] lg:flex-[40%] h-[100%] flex-col justify-start items-end p-[2rem] sm:p-[.5rem] gap-[1rem] text-white customFont">
        <Image
          width={100}
          height={10}
          src={homepageContent.footer.content.rightSide.logo}
          alt={homepageContent.footer.content.rightSide.logo}
        />
        <div className="text-right text-[12px]">
          Address
          <div>{homepageContent.footer.content.rightSide.address}</div>
        </div>
        <div className="flex gap-[1rem]">
          {homepageContent.footer.content.rightSide.followIcons.map(
            (items, idx) => {
              return (
                <div key={idx}>
                  <Link href={items.url}>
                    <Image
                      width={40}
                      height={40}
                      src={items.src}
                      alt={items.alt}
                    />
                  </Link>
                </div>
              );
            }
          )}
        </div>

        <div className="text-right text-[12px]">
          Developed At
          <div className="p-[1rem]">
            <Image
              width={100}
              height={40}
              src={homepageContent.footer.content.rightSide.developed_at.src}
              alt={homepageContent.footer.content.rightSide.developed_at.alt}
            />
          </div>
        </div>

        <div className="flex gap-[1rem] sm:gap-[.5rem] text-[12px]">
          {homepageContent.footer.content.rightSide.navlinks.map(
            (items, idx) => {
              return (
                <div
                  key={idx}
                  className="pr-[.3rem]"
                  style={{
                    borderRight:
                      idx !==
                      homepageContent.footer.content.rightSide.navlinks
                        ?.length -
                        1
                        ? "1px solid #000"
                        : "",
                  }}
                >
                  <Link href={items.url}>{items.text}</Link>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
