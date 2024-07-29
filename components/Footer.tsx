import homepageContent from "@/cms/home";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import StayConnected from "./StayConnected";
import DynamicModal from "./Modal";
import { inter } from "@/fonts";
import ImageFallback from "./ImageWithFallback";

const Footer = (props: {
  setPrivacyData?: React.Dispatch<React.SetStateAction<string>>;
  setTermsData?: React.Dispatch<React.SetStateAction<string>>;
  isInView?: boolean;
}) => {
  const { setPrivacyData, setTermsData, isInView } = props;
  return (
    <>
      <StayConnected isInView={isInView} />
      <div
        id={"Contact-Us"}
        className={`w-[100%] h-[55dvh] sm:h-[60dvh] text-[#000] bg-no-repeat bg-center bg-cover flex flex-wrap justify-between gap-[1rem] uppercase roboto-thin`}
        style={{
          backgroundImage: `url(${homepageContent.footer.content.background})`,
        }}
      >
        <div className="flex  w-[100%] h-[100%] flex-col justify-between items-center p-[2rem] sm:p-[.5rem]  gap-[.5rem] text-[#fff]">
          <ImageFallback
            width={200}
            height={10}
            className="lg:w-[calc(8*(1vw+1vh))] w-[200px] sm:w-[150px] sm:mt-[1rem]"
            src={homepageContent.footer.content.rightSide.logo}
            alt={homepageContent.footer.content.rightSide.logo}
            fallbackSrc={homepageContent.footer.content.rightSide.fallbackLogo}
          />
          <div className="flex gap-[1rem] lg:justify-end md:justify-center  items-center mt-[1rem]">
            <Link
              href={homepageContent.footer.content.leftSide.playstore.url}
              target="_blank"
            >
              <ImageFallback
                width={200}
                height={10}
                className="lg:w-[calc(8*(1vw+1vh))] w-[130px]"
                src={homepageContent.footer.content.leftSide.playstore.src}
                alt={homepageContent.footer.content.leftSide.playstore.alt}
                fallbackSrc={
                  homepageContent.footer.content.leftSide.playstore.fallbacksrc
                }
              />
            </Link>
            <Link
              className={`${
                homepageContent.landingPage.content.appStore.url
                  ? ""
                  : "cursor-not-allowed"
              }`}
              href={
                homepageContent.landingPage.content.appStore.url
                  ? homepageContent.landingPage.content.appStore.url
                  : ""
              }
              target={
                homepageContent.landingPage.content.appStore.url
                  ? " _blank"
                  : "_self"
              }
            >
              <ImageFallback
                width={200}
                height={10}
                className="lg:w-[calc(8*(1vw+1vh))] w-[130px]"
                src={homepageContent.footer.content.leftSide.appStore.src}
                alt={homepageContent.footer.content.leftSide.appStore.alt}
                fallbackSrc={
                  homepageContent.footer.content.leftSide.appStore.fallbacksrc
                }
              />
            </Link>
          </div>
          <div className="flex items-start gap-1 text-center lg:text-[calc(.75*(1vh+1vw))] text-[16px] mt-[3rem] sm:mt-[1rem]">
            {" "}
            <div className="roboto-regular">
              Address&nbsp;- {homepageContent.footer.content.rightSide.address}
            </div>{" "}
          </div>
          <div className="flex items-center gap-1 text-left lg:text-[calc(.75*(1vh+1vw))] text-[16px]">
            {" "}
            <div className="roboto-regular">
              Contact&nbsp;Us&nbsp;-{" "}
              <Link
                href="mailto:contact@petals.studio"
                className="underline italic"
              >
                contact@petals.studio
              </Link>
            </div>{" "}
          </div>

          <div className="flex w-[100%] items-end justify-between flex-wrap">
            <div className="flex gap-[1rem]">
              {homepageContent.footer.content.rightSide.followIcons.map(
                (items, idx) => {
                  return (
                    <div key={idx}>
                      <Link href={items.url} target="_blank">
                        <ImageFallback
                          fallbackSrc={items.fallbackSrc}
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

            <div className="text-right lg:text-[calc(0.55vw+0.55vh)] text-[10px] text-[#cacaca]">
              Developed At
              <div className="pt-[.4rem] sm:pt-0">
                <ImageFallback
                  fallbackSrc={
                    homepageContent.footer.content.rightSide.developed_at
                      .fallbacksrc
                  }
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
