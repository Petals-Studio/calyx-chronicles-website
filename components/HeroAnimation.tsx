import { useLottie, useLottieInteractivity } from 'lottie-react';
import heroAnimation from '../animations/desktop-hero.json';

const options = {
  animationData: heroAnimation,
  loop: false,
  autoplay: false
};

const styles = {
  // display: 'flex',
  // alignItems: 'baseline',
  height: 'auto',
  width: '100%'
};

const HeroAnimation = () => {
  const lottieObj = useLottie(options, styles);

  const AnimatedView = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1.0],
        type: "seek",
        frames: [0, 60] // [-105, 60], // desktop: [-55, 60]
      },
    ]
  });

  return AnimatedView;
};

export default HeroAnimation;
