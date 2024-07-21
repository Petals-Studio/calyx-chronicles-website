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
import jsonDtaa2 from "../public/images/store2.json";

import useInView from "@/hooks/useInView";
import Lottie from "lottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
            className="mb-[-5rem]"
            autoplay={isInView}
            animationData={jsonDtaa}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="hidden w-[100%] sm:flex justify-center pt-[4rem]">
          <Lottie
            loop={false}
            className="mb-[0rem]"
            autoplay={isInView}
            animationData={jsonDtaa2}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default StoreSection;
