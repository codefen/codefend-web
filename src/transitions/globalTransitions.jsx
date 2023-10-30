
///////////////////////////////////////////////////////////////////
// hero - features loop
//////////////////////////////////////////////////////////////////
export const verticalAnimation = {
  initial: { y: -5 },
  animate: { y: [0,-30,0], transition: { duration: 8, repeat: Infinity } },
};
//////////////////////////////////////////////////////////////////

export const appearTransition = {
  visible:{
    opacity:1,
    transform:'scale(1)',
    transition:{
      delay:1
    }
  },
  hidden:{
    opacity:0,
    transform:'scale(0.6)'
  }
}


export const slideTransition = {
  hidden:{
    opacity:0,
    x: -70,
   },
   visible:{
    opacity:1,
    x: 0,
    transition:{
      duration:1.5,
      delay:0.4,
      type:'spring',
      bounce:0.5
    }
   }
}


///////////////////////////////////////////////////////////////////
// ourServices 
//////////////////////////////////////////////////////////////////
export const serviceTransition = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration:1,
    }
  },
  hiddenleft: {
    x: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
  hiddenright: {
    x: -100,
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