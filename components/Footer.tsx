import homepageContent from "@/cms/home";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import StayConnected from "./StayConnected";
import DynamicModal from "./Modal";
import { inter } from "@/fonts";

const Footer = (props: {
  setPrivacyData?: React.Dispatch<React.SetStateAction<string>>;
  setTermsData?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { setPrivacyData, setTermsData } = props;
  return (
    <>
      <StayConnected />
      <div
        id={"Contact-Us"}
        className={`w-[100%] h-[55dvh] sm:h-[60dvh] text-[#000] bg-no-repeat bg-center bg-cover flex flex-wrap justify-between gap-[1rem] uppercase roboto-thin`}
        style={{
          backgroundImage: ` url(${homepageContent.footer.content.background})`,
        }}
      >
        <div className="flex  w-[100%] h-[100%] flex-col justify-between items-center p-[2rem] sm:p-[.5rem]  gap-[.5rem] text-[#fff]">
          <Image
            width={200}
            height={10}
            className="lg:w-[calc(8*(1vw+1vh))] w-[200px] sm:w-[150px]"
            src={homepageContent.footer.content.rightSide.logo}
            alt={homepageContent.footer.content.rightSide.logo}
          />
          <div className="flex items-start gap-1 text-left lg:text-[calc(.75*(1vh+1vw))] text-[16px] mt-[1rem]">
            {" "}
            <div className="roboto-regular">Address&nbsp;- </div>{" "}
            <div>{homepageContent.footer.content.rightSide.address}</div>
          </div>
          <div className="flex items-center gap-1 text-left lg:text-[calc(.75*(1vh+1vw))] text-[16px]">
            {" "}
            <div className="roboto-regular">Contact&nbsp;Us&nbsp;- </div>{" "}
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
                className="lg:w-[calc(8*(1vw+1vh))] w-[200px]"
                src={homepageContent.footer.content.leftSide.playstore.src}
                alt={homepageContent.footer.content.leftSide.playstore.alt}
              />
            </Link>
            <Link href={homepageContent.footer.content.leftSide.appStore.url}>
              <Image
                width={200}
                height={10}
                className="lg:w-[calc(8*(1vw+1vh))] w-[200px]"
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
                      <Link href={items.url} target="_blank">
                        <Image
                          width={40}
                          height={40}
                          className="lg:w-[calc(1.25*(1vw+1vh))] w-[20px]"
                          src={items.src}
                          alt={items.alt}
                        />
                      </Link>
                    </div>
                  );
                }
              )}
            </div>

            <div className="flex gap-[1rem] lg:text-[calc(.75*(1vh+1vw))] text-[16px]  sm:hidden">
              {homepageContent.footer.content.rightSide.navlinks.map(
                (items, idx) => {
                  return (
                    <div
                      key={idx}
                      className="pr-[.3rem]"
                      style={{
                        borderRight:
                          idx !==
                          homepageContent?.footer?.content?.rightSide?.navlinks
                            ?.length -
                            1
                            ? "1px solid #fff"
                            : "1px",
                      }}
                    >
                      {items.text === "About Us" ? (
                        <a href={items.url}> {items.text}</a>
                      ) : (
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            if (items.text === "Terms & Conditions") {
                              setTermsData &&
                                setTermsData(
                                  homepageContent.termsConditions.data
                                );
                              setPrivacyData && setPrivacyData("");
                            } else {
                              setTermsData && setTermsData("");
                              setPrivacyData &&
                                setPrivacyData(
                                  homepageContent.privacyPolicy.data
                                );
                            }
                          }}
                        >
                          {items.text}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>

            <div className="text-right lg:text-[calc(0.55vw+0.55vh)] text-[15px]">
              Developed At
              <div className="pt-[.4rem]">
                <Image
                  width={100}
                  height={40}
                  className="lg:w-[calc(5.75*(1vw+1vh))] w-[100px]"
                  src={
                    homepageContent.footer.content.rightSide.developed_at.src
                  }
                  alt={
                    homepageContent.footer.content.rightSide.developed_at.alt
                  }
                />
              </div>
            </div>
          </div>
          <div className="hidden sm:flex gap-[1rem] sm:gap-[.5rem] lg:text-[calc(.75*(1vh+1vw))] text-[12px]">
            {homepageContent.footer.content.rightSide.navlinks.map(
              (items, idx) => {
                return (
                  <div
                    key={idx}
                    className="pr-[.3rem] font-bold"
                    style={{
                      borderRight:
                        idx !==
                        homepageContent?.footer?.content?.rightSide?.navlinks
                          ?.length -
                          1
                          ? "1px solid #fff"
                          : "1px",
                    }}
                  >
                    {items.text === "About Us" ? (
                      <a href={items.url}>{items.text}</a>
                    ) : (
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          if (items.text === "Terms & Conditions") {
                            setTermsData &&
                              setTermsData(
                                homepageContent.termsConditions.data
                              );
                            setPrivacyData && setPrivacyData("");
                          } else {
                            setTermsData && setTermsData("");
                            setPrivacyData &&
                              setPrivacyData(
                                homepageContent.privacyPolicy.data
                              );
                          }
                        }}
                      >
                        {items.text}
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
