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

interface IStoreSection {
  setCurrentTab: Dispatch<SetStateAction<string>>;
}
const StoreSection = (props: IStoreSection) => {
  const { setCurrentTab } = props;

  const targetRef = useRef(null);
  const lottieRef = useRef<LegacyRef<HTMLDivElement> | undefined>(null);
  const isInView = useInView({ targetRef });
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setAnimation(true);
      }, 100);
      setCurrentTab(homepageContent.showcaseSection.label);
    } else {
      setAnimation(false);
    }
  }, [isInView]);

  return (
    <>
      <div
        ref={targetRef}
        className="w-[100%] h-[100%] overflow-hidden flex justify-center items-end bg-[#FFF2CF]"
      >
        {animation && (
          <div className="flex w-[100%]">
            <Lottie
              loop={false}
              animationData={jsonDtaa}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        )}
        {!animation && (
          <div className="flex w-[100%]">
            <Lottie
              loop={false}
              autoplay={false}
              animationData={jsonDtaa}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default StoreSection;
