/**
 * Framer Motion transition variants for animations.
 * Provides clean, premium, Linear-style slow eases.
 */

export const transitionValues = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1], // Custom slow power ease (Linear/Apple style)
};

export const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        ...transitionValues,
        delay,
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transitionValues,
    },
  },
};

export const hoverScaleGlow = {
  hover: {
    scale: 1.02,
    borderColor: 'rgba(132, 204, 22, 0.4)',
    boxShadow: '0 10px 30px -10px rgba(132, 204, 22, 0.15)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
