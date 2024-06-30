import homepageContent from "@/cms/home";
import useInView from "@/hooks/useInView";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { inView, motion } from "framer-motion";
interface IHeroSection {
  setCurrentTab: Dispatch<SetStateAction<string>>;
}
const HeroSection = (props: IHeroSection) => {
  const { setCurrentTab } = props;
  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });
  useEffect(() => {
    if (isInView) {
      setCurrentTab(homepageContent.landingPage.label);
    }
  }, [isInView]);

  return (
    <div ref={targetRef} className="w-full h-full relative">
      <img
        src={homepageContent.landingPage.content.images.src}
        className="w-[100%] h-auto absolute bottom-0 left-0"
      ></img>
      <div className="absolute lg:bottom-10 md:top-[20%] sm:top-[20%] left-[50%] translate-x-[-50%]">
        <a href="#story">{homepageContent.landingPage.content.title}</a>
      </div>
    </div>
  );
};

export default HeroSection;
