import homepageContent from "@/cms/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      id={"Contact-Us"}
      className={`w-[100%] min-h-[50dvh] sm:minH-[100dvh] text-[#000]  bg-no-repeat bg-center bg-cover flex flex-wrap justify-between gap-[1rem] uppercase roboto-thin`}
      style={{
        backgroundImage: ` url(${homepageContent.footer.content.background})`,
      }}
    >
      <div className="flex  w-[100%] h-[100%] flex-col justify-center items-center p-[2rem] sm:p-[.5rem] gap-[.5rem] text-[#fff]">
        <Image
          width={200}
          height={10}
          src={homepageContent.footer.content.rightSide.logo}
          alt={homepageContent.footer.content.rightSide.logo}
        />
        <div className="flex items-center gap-1 text-left text-[16px] mt-[1rem]">
          {" "}
          <div className="roboto-regular">Address - </div>{" "}
          <div>{homepageContent.footer.content.rightSide.address}</div>
        </div>
        <div className="flex items-center gap-1 text-left text-[16px]">
          {" "}
          <div className="roboto-regular">Contact Us - </div>{" "}
          <Link
            href="mailto:contact@petals.studio"
            className="underline italic"
          >
            contact@petals.studio
          </Link>
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
        <div className="flex w-[100%] items-end justify-between flex-wrap">
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

          <div className="flex gap-[1rem] text-[16px]  sm:hidden">
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
                          ? "1px solid #fff"
                          : "",
                    }}
                  >
                    <a href={items.url}>{items.text}</a>
                  </div>
                );
              }
            )}
          </div>

          <div className="text-right text-[16px]">
            Developed At
            <div className="pt-[.4rem]">
              <Image
                width={100}
                height={40}
                src={homepageContent.footer.content.rightSide.developed_at.src}
                alt={homepageContent.footer.content.rightSide.developed_at.alt}
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex gap-[1rem] sm:gap-[.5rem] text-[12px]">
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
                        ? "1px solid #fff"
                        : "",
                  }}
                >
                  <a href={items.url}>{items.text}</a>
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
