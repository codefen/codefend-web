import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useState, useRef } from "react";

const Compliance = () => {
  const [close, setClose] = useState(true)
  const menu = useRef()

  const menuAppear = () => {
      if(close){
          menu.current.style.right = '0%';
          setClose(false)
      } else {
          menu.current.style.right = '-100%';
          setClose(true)
      }
  }
  return <>
          <h1>Compliance</h1>
          <button onClick={menuAppear} className="toggle">
                    {
                        close ? <FaBars color="#fff" size={30}/>
                              : <FaX color="#fff" size={30}/>
                    }
                </button>
          <div style={{
            position:'',
            width:'80vw', 
            height:'80vh',
            backgroundColor:'red',
            position:'relative',
            overflow:'hidden'
          }}
            
            >
              <div ref={menu} style={{backgroundColor:'blue',
             width:'80%',
             height:'80%',
             position:'absolute',
             right:'-100%'
             }}>

              </div>
          </div>
         </>;
};

export default Compliance;
