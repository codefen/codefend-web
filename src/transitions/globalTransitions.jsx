
///////////////////////////////////////////////////////////////////
// hero - features loop
//////////////////////////////////////////////////////////////////
const isMobile = window.innerWidth <= 768; 
const ease = isMobile ? "linear" : "circInOut";
const translate = isMobile ? "30%" : "95%";

export const loop = {
  visible: { x: "-102%", transition:{
    duration: 20,
    ease: ease,
    repeat: Infinity,} },
  hidden: { x: translate },
};
//////////////////////////////////////////////////////////////////

export const slideInTransition = {
  visible:{
      x:'0',
      transition:{
        duration: 0.6,
      }
  },
  hidden:{ x: '100vw'},
}

export const fadeTransition = {
  visible:{
      opacity:1,
      transition:{
        duration: 1,
        delay: 0.2,
      }
  },
  hidden:{ opacity: 0},
}

export const horizontalVariant = {
  initial: { x: 0 },
  animate: {x: [0, 60, 0], transition: { duration: 8, repeat: Infinity } },
};

export const verticalVariant = {
  initial: { y: -5 },
  animate: { y: [0,-30,0], transition: { duration: 8, repeat: Infinity } },
};


///////////////////////////////////////////////////////////////////
// ourServices 
//////////////////////////////////////////////////////////////////
export const serviceTransition = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
  hoverLeft: {
    x: -30,
    transition:{
      duration:0.6
    }
  },
  hoverRight: {
    x: 30,
    transition:{
      duration:0.6
    }
  }
};
//////////////////////////////////////////////////////////////////