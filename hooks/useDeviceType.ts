import { useWindowDimensions } from "./useWindowDimention";

interface IUseDeviceType {
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

const useDeviceType = () => {
  const { width } = useWindowDimensions();
  let isDesktop = false,
    isMobile = false,
    isTablet = false;

  if (width && width >= 1024) {
    isDesktop = true;
  } else if (width && width >= 740) {
    isTablet = true;
  } else {
    isMobile = true;
  }

  return { isDesktop, isMobile, isTablet };
};

export { useDeviceType };
export type { IUseDeviceType };
