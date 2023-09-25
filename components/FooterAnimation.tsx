import { LottieOptions, useLottie, useLottieInteractivity } from 'lottie-react';
import footerAnimation from '../animations/about-section.json';

const options: LottieOptions = {
  animationData: footerAnimation,
  loop: true,
  autoplay: true,
};

const styles = {
  height: '100%',
  width: '100vw'
};

const FooterAnimation = () => {
  const { View } = useLottie(options, styles);

  return View;

  // const AnimatedView = useLottieInteractivity({
  //   lottieObj,
  //   mode: 'scroll',
  //   actions: [
  //     {
  //       visibility: [0, 1.0],
  //       type: "loop",
  //       frames: [0, 160] // [-105, 60], // desktop: [-55, 60]
  //     },
  //   ]
  // });

  // return AnimatedView;
};

export default FooterAnimation;
