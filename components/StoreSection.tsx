import homepageContent from "@/cms/home";

import React, {
  Dispatch,
  LegacyRef,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import jsonDtaa from "../public/images/store.json";
import jsonDtaa2 from "../public/images/store_2.json";

import useInView from "@/hooks/useInView";
import Lottie from "lottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

interface IStoreSection {}
const StoreSection = (props: { isInView?: boolean }) => {
  const { isInView } = props;

  return (
    <>
      <div
        id="Store"
        className="w-[100%] h-[100%] overflow-hidden flex justify-center items-end bg-[#FFF2CF]"
      >
        <div className="flex w-[100%] sm:hidden justify-center">
          <Lottie
            loop={false}
            className="mb-[-5rem] md:mb-[-2rem]"
            autoplay={isInView}
            animationData={jsonDtaa}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="hidden w-[100%] sm:flex justify-center items-center relative">
          <div className="absolute z-[2] w-[100%] h-[100%] flex justify-center items-end bottom-0 left-0 object-contain">
            <Image
              alt="bg-bottomm"
              src="https://ccx-assets.blr1.cdn.digitaloceanspaces.com/website/Clouds.png"
              width={100}
              height={100}
              className="w-[100%] h-[auto] mb-[-5%]"
            />
          </div>
          <Lottie
            loop={false}
            className="mb-[-5rem] z-[1]"
            autoplay={isInView}
            animationData={jsonDtaa2}
          />
        </div>
      </div>
    </>
  );
};

export default StoreSection;
