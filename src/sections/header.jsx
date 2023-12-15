import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
    return (
    
         <div className="header">
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
                
                <ul className="navigate">
                    <li><Link to ="/">home</Link></li>
                    <li><Link to ="/software">software</Link></li>
                    <li><Link to ="/industries">industries</Link></li>
                    <li><Link to ="/services">services</Link></li>
                    <li><Link to ="/compliance">compliance</Link></li>
                    <li><Link to ="/partners">partners</Link></li>
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
          </div>
        
    )
}

export default Header