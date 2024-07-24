declare module 'react-animate-on-scroll' {
    import { ComponentType } from 'react';
  
    interface ScrollAnimationProps {
      animateIn?: string;
      animateOut?: string;
      initiallyVisible?: boolean;
      animateOnce?: boolean;
      delay?: number;
      duration?: number;
      offset?: number;
      scrollableParentSelector?: string;
      animatePreScroll?: boolean;
      style?: React.CSSProperties;
      className?: string;
      children?: React.ReactNode;
    }
  
    const ScrollAnimation: ComponentType<ScrollAnimationProps>;
  
    export default ScrollAnimation;
  }
  