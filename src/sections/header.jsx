import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";


const Header = () => {
    let [close, setClose] = useState(true);
    const menu = useRef();
    const location = useLocation();


    window.addEventListener('scroll', ()=>{
        const header = document.querySelector('.header');
        header.classList.toggle('down', window.scrollY > 0);
    })



    const menuAppear = () => {
        window.scrollTo(0, 0);
        if(close){
            menu.current.style.right = '0%';
            setClose(false)
        } else {
            menu.current.style.right = '-120%';
            setClose(true)
        }
        
    }

    useEffect(() => {
        const links = menu.current.querySelectorAll("li a");
        links.forEach(link => {
            const linkPath = link.getAttribute("href");
            // setIsActived(location.pathname === linkPath);
            link.classList.toggle("active", location.pathname === linkPath);
        });
    }, [location.pathname]);


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
                <a href="/#hero">
                    <img src="../assets/images/logo-light.svg" alt="logo" />
                </a>
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
                    <li><Link onClick={menuAppear} to ="/about-us">about us</Link></li>
                </ul>
                
                <div className="menu">
                    <a href="#contact" className="btn alt">
                        contact
                    </a>
                    <a href="https://panel.codefend.com/auth/signup" target="_blank" className="btn main">
                        try codefend for free
                    </a>
                </div>
            </div>
          </header>
        
    )
}

export default Header