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

import useInView from "@/hooks/useInView";
import Lottie from "lottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface IStoreSection {}
const StoreSection = (props: { isInView?: boolean }) => {
  const { isInView } = props;

  return (
    <>
      <div className="w-[100%] h-[100%] overflow-hidden flex justify-center items-end bg-[#FFF2CF]">
        <div className="flex w-[100%]">
          {/* <DotLottieReact
            src="/images/store.lottie"
            loop
            autoplay
            width={100}
            height={100}
          /> */}
          <Lottie
            loop={false}
            autoplay={isInView}
            animationData={jsonDtaa}
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
