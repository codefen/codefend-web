import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";


const Header = () => {
    const [close, setClose] = useState(true)
    const menu = useRef()

    const menuAppear = () => {
        if(close){
            menu.current.style.right = '-10vw';
            setClose(false)
        } else {
            menu.current.style.right = '-120vw';
            setClose(true)
        }
    }

    return (
    
         <header className="header">
            <div className="container">
                <motion.div 
                initial={{
                    opacity:0, 
                    transform:'scale(0.8)'}}
                animate={{
                    opacity:1, 
                    transform:'scale(1)',
                    }} 
                    transition={{
                    delay:0.2,
                    duration:1
                    }}
                className="brand">
                <img src="../assets/images/brand.webp" alt="logo" />
                </motion.div>
                
                <button onClick={menuAppear} className="toggle">
                    {
                        close ? <FaBars color="#fff" size={30}/>
                              : <FaX color="#fff" size={30}/>
                    }
                </button>

                <ul ref={menu} className="navigate">
                    <li><Link onClick={menuAppear} to ="/">home</Link></li>
                    <li><Link onClick={menuAppear} to ="/software">software</Link></li>
                    <li><Link onClick={menuAppear} to ="/industries">industries</Link></li>
                    <li><Link onClick={menuAppear} to ="/services">services</Link></li>
                    <li><Link onClick={menuAppear} to ="/compliance">compliance</Link></li>
                    <li><Link onClick={menuAppear} to ="/partners">partners</Link></li>
                </ul>
                
                <div className="menu">
                <a href="#contact" className="btn alt">
                    contact
                </a>
                <a href="#" className="btn main">
                    download
                </a>
                </div>
            </div>
          </header>
        
    )
}

export default Header