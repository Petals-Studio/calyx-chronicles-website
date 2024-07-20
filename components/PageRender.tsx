import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";
import homepageContent from "@/cms/home";
interface IPageRender {
  component: {
    component: JSX.Element;
    id: string;
    height?: string;
    label: string;
  };
  setCurrentTab: Dispatch<SetStateAction<string>>;
}
const PageRender = (props: IPageRender) => {
  const { component, setCurrentTab } = props;
  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });
  useEffect(() => {
    if (isInView) {
      setCurrentTab(component.label);
    }
  }, [isInView]);

  return (
    <div ref={targetRef}>
      {isInView && (
        <motion.div
          className={`w-full ${
            component.height ? "" : "h-[100dvh]"
          } wrapper-body relative`}
          id={component.id ?? ""}
        >
          {React.cloneElement(component.component, { isInView: true })}
        </motion.div>
      )}

      {!isInView && (
        <motion.div
          className={`w-full ${
            component.height ? "" : "h-[100dvh]"
          } wrapper-body relative`}
          id={component.id ?? ""}
        >
          {React.cloneElement(component.component, { isInView: false })}
        </motion.div>
      )}
    </div>
  );
};

export default PageRender;
